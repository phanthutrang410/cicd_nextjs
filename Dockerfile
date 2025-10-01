# syntax=docker/dockerfile:1.7-labs

# 1) Base deps
FROM node:20-alpine AS base
ENV NODE_ENV=production
WORKDIR /app

# 2) Install deps only (leverage npm ci)
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci --include=dev

# 3) Build stage
FROM base AS build
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 4) Prune dev deps
FROM base AS pruned
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./
RUN npm prune --omit=dev

# 5) Production runner with standalone output
FROM node:20-alpine AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy the built app (Next.js standalone output)
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
# Create public directory and copy if it exists
RUN mkdir -p ./public
COPY --from=build /app/public ./public

USER nextjs
EXPOSE 3000

# Use the standalone server
CMD ["node", "server.js"]


