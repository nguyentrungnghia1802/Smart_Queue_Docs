# 🚀 Hướng Dẫn Khởi Chạy Local Server
Tài liệu này hướng dẫn cách chạy ứng dụng **LINE Smart Queue Assistant Dashboard** trên môi trường máy cục bộ (Local).
---
## 🛠️ Lựa Chọn Lệnh Khởi Chạy
Bạn có thể sử dụng một trong các công cụ máy chủ tĩnh dưới đây để chạy ứng dụng:
### Option 1: Sử dụng Python (Tích hợp sẵn)
```powershell
python -m http.server 8000
```
### Option 2: Sử dụng Node.js `serve`
```powershell
npx serve .
```
---
## 🌐 Truy Cập Ứng Dụng
Sau khi máy chủ tĩnh khởi chạy thành công, truy cập trình duyệt web tại đường dẫn:
👉 **[http://localhost:8000/](http://localhost:8000/)**
---
## 📌 Các Tính Năng Trên Dashboard
> [!TIP]
> Từ trang **Dashboard Hub** (`http://localhost:8000/`), bạn có thể chọn:
> - **📐 Business Process Flow** (`/docs/business-flow/index.html`): Trực quan hóa 5 sơ đồ quy trình nghiệp vụ hệ thống.
> - **📊 System Presentation Deck** (`/docs/presentation/index.vi.html` & `/docs/presentation/index.html`): Bộ slide thuyết trình Tiếng Việt & Tiếng Nhật.
> - **📄 Project Docs**: Các tài liệu thiết kế đặc tả kỹ thuật chi tiết.
