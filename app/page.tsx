import React from 'react';

export default function HomePage(): React.JSX.Element {
  return (
    <div>
      <section style={{ padding: '32px 0' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>
          Ngành Toán - Tin ứng dụng – Đại học Bách khoa Hà Nội
        </h1>
        <p style={{ fontSize: 18, color: '#374151', lineHeight: 1.6 }}>
          Kết hợp vững nền tảng Toán học với Khoa học dữ liệu và Công nghệ thông tin,
          chương trình đào tạo sinh viên năng lực tư duy phân tích, mô hình hóa,
          và triển khai giải pháp số trong các lĩnh vực công nghiệp, tài chính, y sinh, và chuyển đổi số.
        </p>
      </section>

      <section id="chuong-trinh" style={{ padding: '24px 0' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Điểm nổi bật chương trình</h2>
        <ul style={{ listStyle: 'disc', paddingLeft: 24, lineHeight: 1.8 }}>
          <li>Nền tảng Toán hiện đại: Xác suất - Thống kê, Tối ưu, Học máy.</li>
          <li>Kỹ năng CNTT: Lập trình, Cấu trúc dữ liệu, Hệ cơ sở dữ liệu, Hệ phân tán.</li>
          <li>Khoa học dữ liệu và AI: Machine Learning, Deep Learning, Khai phá dữ liệu.</li>
          <li>Dự án thực tế với doanh nghiệp, tăng cường năng lực giải quyết vấn đề.</li>
        </ul>
      </section>

      <section id="co-hoi" style={{ padding: '24px 0' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Cơ hội nghề nghiệp</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {[
            {
              title: 'Data Scientist',
              desc: 'Phân tích dữ liệu, xây dựng mô hình dự đoán, tối ưu vận hành.'
            },
            {
              title: 'Machine Learning Engineer',
              desc: 'Triển khai hệ thống học máy, MLOps, tối ưu hiệu năng mô hình.'
            },
            {
              title: 'Data Analyst',
              desc: 'Khai thác dữ liệu, trực quan hóa, hỗ trợ quyết định.'
            },
            {
              title: 'Software Engineer',
              desc: 'Phát triển sản phẩm phần mềm, dịch vụ dữ liệu và AI.'
            }
          ].map((job) => (
            <div key={job.title} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16 }}>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>{job.title}</div>
              <div style={{ color: '#374151' }}>{job.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="lien-he" style={{ padding: '24px 0' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Liên hệ</h2>
        <p>
          Khoa Toán - Tin ứng dụng, Đại học Bách khoa Hà Nội —
          tham khảo thêm tại trang chính thức của trường.
        </p>
      </section>
    </div>
  );
}

