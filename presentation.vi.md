# LINE Smart Queue Assistant
## Trải nghiệm xếp hàng thông minh bắt đầu từ LINE

> **Thời lượng:** khoảng 25 phút  
> **Số slide:** 23  
> **Mục tiêu:** giới thiệu sản phẩm, vấn đề thực tế, giải pháp, kiến trúc công nghệ, trải nghiệm người dùng, luồng hoạt động, các chức năng nổi bật và tính khả thi thực tiễn.  
> **Phong cách:** ít chữ, trực quan, ưu tiên ảnh sản phẩm và sơ đồ đơn giản.  
> **Ngôn ngữ trình bày:** Tiếng Việt.  
> **Lưu ý:** Phần `Speaker notes` dùng cho người thuyết trình, không hiển thị toàn bộ trên slide.

---

# Slide 01 — Trang bìa

## LINE Smart Queue Assistant

### Trải nghiệm xếp hàng minh bạch, bắt đầu từ LINE

- Smart Queue
- LINE LIFF
- Booking & Ticket
- Customer Notification

### Hình ảnh

![Trang chủ hệ thống](./docs/images/guide/01-landing-page.png)

### Speaker notes

Xin chào mọi người. Hôm nay em xin trình bày dự án **LINE Smart Queue Assistant**.

Đây là một nền tảng hỗ trợ quản lý hàng đợi, đặt dịch vụ, đơn hàng, nền tảng thanh toán và thông báo khách hàng thông qua LINE.

Trong phần trình bày này, em sẽ tập trung vào sản phẩm, bài toán thực tế, giải pháp, kiến trúc công nghệ, luồng hoạt động và tính khả thi của hệ thống.

---

# Slide 02 — Bối cảnh hiện tại

## Hàng đợi vẫn là một vấn đề rất đời thường

- Khách phải chờ gần quầy
- Không biết khi nào đến lượt
- Staff gọi khách thủ công
- Khu vực tiếp nhận dễ quá tải

### Speaker notes

Trong nhiều cửa hàng, salon, phòng khám hoặc quầy dịch vụ, khách hàng vẫn phải lấy số và ngồi gần khu vực tiếp nhận.

Vấn đề không chỉ nằm ở thời gian chờ, mà còn ở việc khách không biết còn bao lâu nữa mới đến lượt.

Điều này khiến khách khó rời khỏi khu vực chờ, còn nhân viên phải liên tục gọi khách và kiểm tra trạng thái thủ công.

---

# Slide 03 — Vấn đề gặp phải

## Hàng đợi không chỉ là “số thứ tự”

- Wait time không minh bạch
- Queue, Order, Stock, Payment tách rời
- Khách dễ bỏ lỡ lượt
- Dữ liệu vận hành bị phân tán

### Speaker notes

Nếu chỉ nhìn đơn giản, một hệ thống xếp hàng chỉ cần phát số và gọi số.

Nhưng trong vận hành thực tế, hàng đợi liên quan đến nhiều nghiệp vụ khác. Khi các phần này bị tách rời, doanh nghiệp khó vận hành nhất quán và khó theo dõi dữ liệu.

---

# Slide 04 — Insight sản phẩm

## Khách không cần “đứng chờ” — Họ cần “biết khi nào quay lại”

- Nhận số trên điện thoại
- Theo dõi số người phía trước
- Biết thời gian chờ dự kiến
- Nhận thông báo đúng thời điểm

---

# Slide 05 — Giải pháp đưa ra

## LINE-first Smart Queue Platform

- Quét QR của Branch
- Đăng nhập bằng LINE
- Chọn Queue và dịch vụ
- Nhận Ticket và ETA
- Nhận thông báo qua LINE
- Staff xử lý trên Dashboard

---

# Slide 06 — Hệ thống là gì?

## LINE Smart Queue Assistant

- Business Onboarding
- Multi-branch Management
- Product / Service Catalog
- Booking & Ticket
- Staff Operation
- LINE Notification

---

# Slide 07 — Công nghệ nổi bật

## Kiến trúc & Công nghệ cốt lõi

- **Frontend Web UI**: React + Vite
- **Backend API**: Express + TypeScript
- **Database**: PostgreSQL
- **LINE Ecosystem**: LIFF + LINE Login + Messaging API

---

# Slide 08 — Đối tượng sử dụng

## Một hệ thống — nhiều vai trò

| Vai trò | Trách nhiệm chính |
|---|---|
| Platform Admin | Duyệt doanh nghiệp |
| Organization Owner | Quản lý Organization |
| Branch Manager | Quản lý Branch |
| Staff | Vận hành Queue |
| Customer | Đặt dịch vụ qua LINE |

---

# Slide 09 — Luồng tổng thể

## End-to-end Business Flow

```text
Business Register → Admin Approval → Owner Activation → Catalog + Branch → Queue + QR → LINE Booking → Ticket → Staff Service → Receipt + LINE
```

---

# Slide 10 — Business Onboarding
## Doanh nghiệp tự đăng ký sử dụng

# Slide 11 — Admin Approval
## Platform Admin kiểm soát Onboarding

# Slide 12 — Owner Activation
## Owner tự kích hoạt tài khoản

# Slide 13 — Product Catalog
## Catalog thuộc về Organization

# Slide 14 — Branch Management
## Một doanh nghiệp có nhiều chi nhánh

# Slide 15 — Branch Manager Workspace
## Chi nhánh vận hành độc lập

# Slide 16 — Multi-Queue per Branch
## Một QR — nhiều Queue

# Slide 17 — Queue Configuration
## Queue không chỉ có tên và trạng thái

# Slide 18 — Branch Stock
## Stock thuộc về từng chi nhánh

# Slide 19 — Customer Journey with LINE
## Khách dùng LINE để đặt dịch vụ

# Slide 20 — Booking & Ticket
## Ticket là trung tâm trải nghiệm khách hàng

# Slide 21 — Công nghệ LINE nổi bật
## LINE tạo ra điểm khác biệt cho sản phẩm

# Slide 22 — Staff Operation
## Staff xử lý Queue trên một Workspace

# Slide 23 — Tính khả thi và hướng phát triển
## MVP đã chứng minh được tính khả thi
