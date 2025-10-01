export const metadata = {
  title: 'Toán - Tin HUST',
  description: 'Giới thiệu ngành Toán - Tin, ĐHBK Hà Nội'
};

import './globals.css';
import React from 'react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <header style={{
          padding: '16px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div style={{
            maxWidth: 960,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <a href="/" style={{ fontWeight: 700 }}>Toán - Tin HUST</a>
            <nav style={{ display: 'flex', gap: 16 }}>
              <a href="#chuong-trinh">Chương trình</a>
              <a href="#co-hoi">Cơ hội</a>
              <a href="#lien-he">Liên hệ</a>
            </nav>
          </div>
        </header>
        <main style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>{children}</main>
        <footer style={{
          borderTop: '1px solid #e5e7eb',
          marginTop: 40,
          padding: 16,
          textAlign: 'center',
          color: '#6b7280'
        }}>
          © {new Date().getFullYear()} Phan Thu Trang
        </footer>
      </body>
    </html>
  );
}

