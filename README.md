## Toán - Tin HUST — Website giới thiệu

Trang web giới thiệu Ngành Toán - Tin ứng dụng – Đại học Bách khoa Hà Nội, xây dựng bằng Next.js (App Router) và TypeScript.

### Yêu cầu hệ thống
- Node.js >= 18
- npm >= 9

### Cài đặt & chạy dự án
```bash
# Cài dependencies
npm install

# Chạy môi trường phát triển
npm run dev

# Mở http://localhost:3000
```

### Build & chạy production
```bash
# Build
npm run build

# Chạy server production
npm run start
```

### Cấu trúc thư mục
```
app/            # Next.js App Router (layout, trang, styles)
  globals.css   # CSS global
  layout.tsx    # Layout gốc (header, footer, metadata)
  page.tsx      # Trang chủ
next.config.mjs # Cấu hình Next.js
tsconfig.json   # Cấu hình TypeScript
package.json    # Scripts & dependencies
```

### Scripts npm chính
- `npm run dev`: Chạy dev server.
- `npm run build`: Build production.
- `npm run start`: Chạy server sau khi build.

### Triển khai (CI/CD)
Dự án có workflow GitHub Actions tại `.github/workflows/deploy.yml` để build/triển khai tự động. Điều chỉnh secrets và bước deploy phù hợp hạ tầng của bạn.

### Bản quyền
© {currentYear} Phan Thu Trang. Mọi quyền được bảo lưu.

Thay `{currentYear}` bằng năm hiện tại khi cần sử dụng độc lập.


