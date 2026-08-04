Dưới đây là bản hoàn chỉnh để bạn copy vào `presentation.md`. Nội dung được xây dựng từ README và guide của dự án, đặc biệt là bối cảnh, vai trò, luồng tổng thể, Customer flow, Staff flow, LINE Notification và các ảnh giao diện hiện có.  

````md
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

### Bố cục

- Bên trái: tên dự án và slogan.
- Bên phải: ảnh trang chủ hoặc mockup điện thoại hiển thị Ticket.
- Logo LINE hoặc biểu tượng QR đặt nhỏ ở góc.

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

### Hình ảnh

> Ảnh minh họa khách ngồi chờ tại salon, phòng khám, nhà hàng hoặc quầy dịch vụ.

<!-- TODO: Bổ sung ảnh minh họa bối cảnh thực tế -->

### Bố cục

- Một ảnh lớn chiếm khoảng 60% slide.
- Bốn vấn đề đặt bên cạnh dưới dạng icon và câu ngắn.

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

### Hình ảnh

> Sơ đồ các nghiệp vụ rời rạc: Queue / Order / Payment / Stock / Staff / Notification.

<!-- TODO: Bổ sung sơ đồ vấn đề -->

### Speaker notes

Nếu chỉ nhìn đơn giản, một hệ thống xếp hàng chỉ cần phát số và gọi số.

Nhưng trong vận hành thực tế, hàng đợi liên quan đến nhiều nghiệp vụ khác:

- Khách đặt dịch vụ nào?
- Có cần thanh toán trước không?
- Sản phẩm còn hàng không?
- Nhân viên nào đang phục vụ?
- Khi nào cần gửi thông báo?

Khi các phần này bị tách rời, doanh nghiệp khó vận hành nhất quán và khó theo dõi dữ liệu.

---

# Slide 04 — Insight sản phẩm

## Khách không cần “đứng chờ”

### Họ cần “biết khi nào quay lại”

- Nhận số trên điện thoại
- Theo dõi số người phía trước
- Biết thời gian chờ dự kiến
- Nhận thông báo đúng thời điểm

### Hình ảnh

> Ảnh khách rời khu vực chờ nhưng vẫn theo dõi Ticket bằng điện thoại.

<!-- TODO: Bổ sung ảnh insight -->

### Speaker notes

Insight chính của dự án là khách hàng không nhất thiết phải đứng chờ tại quầy.

Điều họ thực sự cần là biết mình đang ở đâu trong hàng đợi và được nhắc khi gần đến lượt.

Với LINE, khách đã có sẵn ứng dụng trên điện thoại, vì vậy trải nghiệm Queue có thể được đưa trực tiếp vào một nền tảng quen thuộc.

---

# Slide 05 — Giải pháp đưa ra

## LINE-first Smart Queue Platform

- Quét QR của Branch
- Đăng nhập bằng LINE
- Chọn Queue và dịch vụ
- Nhận Ticket và ETA
- Nhận thông báo qua LINE
- Staff xử lý trên Dashboard

### Hình ảnh

![Customer Ticket](./docs/images/guide/36-customer-ticket-mobile.png)

### Speaker notes

Giải pháp được đề xuất là một nền tảng quản lý hàng đợi theo hướng LINE-first.

Khách quét QR của chi nhánh, xác thực bằng LINE, chọn Queue, chọn sản phẩm hoặc dịch vụ, sau đó nhận Ticket.

Khi trạng thái thay đổi, hệ thống gửi thông báo qua LINE Messaging API.

Về phía doanh nghiệp, mỗi vai trò có một workspace riêng để quản lý và vận hành.

---

# Slide 06 — Hệ thống là gì?

## LINE Smart Queue Assistant

### Nền tảng hỗ trợ

- Business Onboarding
- Multi-branch Management
- Product / Service Catalog
- Booking & Ticket
- Staff Operation
- LINE Notification

### Hình ảnh

![Trang chủ công khai](./docs/images/guide/01-landing-page.png)

### Speaker notes

LINE Smart Queue Assistant không chỉ là một màn hình lấy số thứ tự.

Đây là một hệ thống quản lý từ lúc doanh nghiệp đăng ký sử dụng, Admin phê duyệt, Owner thiết lập doanh nghiệp, Branch Manager cấu hình Queue, cho đến khi Customer đặt dịch vụ và Staff hoàn thành phục vụ.

---

# Slide 07 — Công nghệ nổi bật

## Kiến trúc & Công nghệ cốt lõi

- **Frontend Web UI**: React + Vite (Tối ưu tốc độ, responsive, thiết kế hiện đại)
- **Backend API**: Express + TypeScript (Kiến trúc RESTful, phân quyền chặt chẽ)
- **Database**: PostgreSQL (Đảm bảo toàn vẹn dữ liệu đa chi nhánh & giao dịch)
- **Tích hợp LINE Ecosystem**:
  - **LIFF (LINE Front-end Framework)**: Mở Web App trực tiếp trong LINE
  - **LINE Login**: Xác thực Customer nhanh chóng không cần đăng ký
  - **LINE Messaging API**: Gửi push notification tự động theo vòng đời Ticket

### Hình ảnh

> Sơ đồ kiến trúc công nghệ: React/Vite (UI) ↔ Express/TypeScript (API) ↔ PostgreSQL & LINE Ecosystem (LIFF/Login/Messaging API).

<!-- TODO: Bổ sung sơ đồ kiến trúc công nghệ -->

### Speaker notes

Về mặt công nghệ, dự án được xây dựng với định hướng hiện đại và linh hoạt:

Frontend sử dụng React kết hợp với Vite giúp tối ưu tốc độ tải trang và mang lại trải nghiệm người dùng mượt mà.

Backend được viết bằng Express và TypeScript, đảm bảo tính chặt chẽ về mặt dữ liệu, kiểu dữ liệu và phân quyền.

Cơ sở dữ liệu PostgreSQL chịu trách nhiệm lưu trữ thông tin Organization, Branch, Queue và Ticket một cách an toàn và nhất quán.

Điểm nổi bật nhất là việc tích hợp sâu với LINE Ecosystem:
LIFF và LINE Login giúp khách hàng truy cập ngay trên ứng dụng LINE mà không cần tạo tài khoản mới.
LINE Messaging API tự động gửi thông báo theo các cột mốc quan trọng trong hàng đợi.

Toàn bộ hệ thống cũng được đóng gói bằng Docker Compose để dễ dàng triển khai và kiểm thử cô lập.

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

### Hình ảnh

![Platform Admin Dashboard](./docs/images/guide/07-admin-dashboard.png)

### Speaker notes

Hệ thống được thiết kế theo nhiều vai trò.

Platform Admin quản lý toàn bộ nền tảng.

Organization Owner quản lý doanh nghiệp, danh mục sản phẩm và chi nhánh.

Branch Manager quản lý Queue, Stock, Staff và QR của chi nhánh.

Staff vận hành Ticket trong ngày.

Customer sử dụng LINE để đặt dịch vụ và theo dõi trạng thái.

---

# Slide 09 — Luồng tổng thể

## End-to-end Business Flow

```text
Business Register
→ Admin Approval
→ Owner Activation
→ Product Catalog
→ Branch Setup
→ Queue Setup
→ Branch QR
→ LINE Booking
→ Ticket
→ Staff Service
→ Receipt + Notification
```

### Sơ đồ

```mermaid
flowchart LR
  A[Business Register] --> B[Admin Approval]
  B --> C[Owner Activation]
  C --> D[Catalog + Branch]
  D --> E[Queue + Staff + QR]
  E --> F[LINE Booking]
  F --> G[Ticket]
  G --> H[Staff Service]
  H --> I[Receipt + LINE]
```

### Speaker notes

Đây là luồng tổng thể của hệ thống.

Điểm đáng chú ý là Admin Approval chỉ tạo Organization và Owner ở trạng thái được mời.

Branch và Queue không tự động được tạo ở bước này.

Sau đó Owner và Branch Manager sẽ tiếp tục cấu hình hệ thống theo nhu cầu thực tế của doanh nghiệp.

---

# Slide 10 — Business Onboarding

## Doanh nghiệp tự đăng ký sử dụng

* Nhập thông tin doanh nghiệp
* Chọn quy mô và Plan
* Demo Payment
* Chờ Admin xét duyệt

### Hình ảnh

![Business Registration Form](./docs/images/guide/03-business-registration-form.png)

### Speaker notes

Doanh nghiệp bắt đầu từ trang public và gửi đơn đăng ký.

Ở bước này, doanh nghiệp chưa tạo mật khẩu.

Họ chỉ cung cấp thông tin doanh nghiệp, email liên hệ, quy mô sử dụng và Plan.

Sau khi gửi đơn, Admin sẽ kiểm tra và quyết định phê duyệt hoặc từ chối.

---

# Slide 11 — Admin Approval

## Platform Admin kiểm soát Onboarding

* Xem danh sách đơn đăng ký
* Kiểm tra thông tin doanh nghiệp
* Approve hoặc Reject
* Tạo Organization và Invited Owner

### Hình ảnh

![Admin Application Detail](./docs/images/guide/09-admin-application-detail.png)

### Speaker notes

Admin có thể xem chi tiết từng đơn đăng ký.

Khi Approve, hệ thống tạo Organization và tài khoản Owner ở trạng thái Invited.

Đây là bước kiểm soát quan trọng để đảm bảo doanh nghiệp được xét duyệt trước khi bắt đầu sử dụng nền tảng.

---

# Slide 12 — Owner Activation

## Owner tự kích hoạt tài khoản

* Nhận Activation Email
* Tự đặt mật khẩu
* Kích hoạt Organization
* Bắt đầu cấu hình hệ thống

### Hình ảnh

![Owner Activation](./docs/images/guide/11-owner-activation.png)

### Speaker notes

Sau khi Admin Approve, Owner nhận email kích hoạt và tự đặt mật khẩu.

Admin không tự tạo mật khẩu thay cho Owner.

Cách này phù hợp hơn với quy trình thực tế, đồng thời giảm rủi ro chia sẻ thông tin đăng nhập.

---

# Slide 13 — Product / Service Catalog

## Catalog thuộc về Organization

* Product / Service dùng chung
* Mã tự sinh SP / DV
* Giá và thời gian phục vụ
* Thiết lập thanh toán trước
* Stock quản lý theo Branch

### Hình ảnh

![Owner Product Catalog](./docs/images/guide/13-owner-product-catalog.png)

### Speaker notes

Một điểm thiết kế quan trọng là Product và Service được quản lý ở cấp Organization.

Điều này giúp doanh nghiệp giữ định nghĩa sản phẩm, giá và thời gian phục vụ nhất quán giữa các chi nhánh.

Trong khi đó, Stock được quản lý riêng tại từng Branch.

---

# Slide 14 — Branch Management

## Một doanh nghiệp có nhiều chi nhánh

* Owner tạo Branch
* Mời Branch Manager
* Mỗi Branch có QR riêng
* Mỗi Branch có lịch hoạt động riêng

### Hình ảnh

![Create Branch](./docs/images/guide/16-owner-create-branch.png)

### Speaker notes

Owner có thể tạo các chi nhánh và mời Branch Manager.

Mỗi Branch đại diện cho một địa điểm vật lý, có địa chỉ, lịch hoạt động, Manager và QR riêng.

Điều này phù hợp với các doanh nghiệp có nhiều cửa hàng hoặc nhiều điểm phục vụ.

---

# Slide 15 — Branch Manager Workspace

## Chi nhánh vận hành độc lập

* Queue Management
* Business Calendar
* Stock Management
* Staff Management
* Branch QR

### Hình ảnh

![Branch Manager Dashboard](./docs/images/guide/19-branch-manager-dashboard.png)

### Speaker notes

Branch Manager chỉ quản lý chi nhánh được phân công.

Họ có thể cấu hình Queue, lịch hoạt động, Stock, Staff và QR của Branch.

Việc giới hạn phạm vi theo Branch giúp tránh truy cập nhầm hoặc thao tác dữ liệu của chi nhánh khác.

---

# Slide 16 — Multi-Queue per Branch

## Một QR — nhiều Queue

* General Service
* Priority Queue
* Service-specific Queue
* Queue-specific Catalog

### Hình ảnh

![Queue List](./docs/images/guide/22-queue-list.png)

### Speaker notes

Một Branch có thể có nhiều Queue.

Ví dụ, một salon có thể có Queue cho cắt tóc, Queue cho nhuộm tóc hoặc Queue ưu tiên.

Tuy nhiên, Branch vẫn chỉ cần một QR cố định.

Sau khi quét QR, Customer sẽ chọn Queue phù hợp.

Việc thêm hoặc xóa Queue không làm thay đổi Branch QR.

---

# Slide 17 — Queue Configuration

## Queue không chỉ có tên và trạng thái

* Open / Closed / Paused / Archived
* Capacity
* Ticket Prefix
* Average Service Time
* Absence Policy
* Product Assignment

### Hình ảnh

![Create Queue](./docs/images/guide/23-create-queue.png)

### Speaker notes

Queue có nhiều cấu hình phục vụ vận hành thực tế:

* Trạng thái
* Sức chứa
* Prefix của Ticket
* Thời gian phục vụ trung bình
* Chính sách xử lý khách vắng mặt

Branch Manager cũng lựa chọn Product hoặc Service nào được phép đặt trong Queue đó.

---

# Slide 18 — Branch Stock

## Stock thuộc về từng chi nhánh

* Unlimited Stock
* Finite Stock
* Reserve khi Booking
* Restore khi Cancel
* Consume khi Complete

### Hình ảnh

![Branch Stock](./docs/images/guide/25-branch-stock.png)

### Speaker notes

Stock được quản lý theo từng Branch.

Cùng một sản phẩm trong Catalog chung có thể còn hàng ở Branch A nhưng hết hàng ở Branch B.

Khi Booking thành công, Stock được Reserve.

Khi Cancel, Stock được Release.

Khi phục vụ hoàn thành, Stock được Consume.

Điều này giúp giảm nguy cơ bán quá số lượng.

---

# Slide 19 — Customer Journey with LINE

## Khách dùng LINE để đặt dịch vụ

* Scan Branch QR
* LINE Login
* Select Queue
* Select Product / Service
* Booking
* Ticket

### Hình ảnh

![Customer Queue Selection](./docs/images/guide/30-customer-queue-selection-mobile.png)

### Speaker notes

Ở phía Customer, trải nghiệm bắt đầu bằng việc quét QR bằng LINE.

Khách không cần tạo tài khoản email và mật khẩu riêng.

Sau khi xác thực LINE, khách chọn Queue, xem Catalog của Queue, chọn dịch vụ, nhập thông tin và tạo Booking.

---

# Slide 20 — Booking & Ticket

## Ticket là trung tâm trải nghiệm khách hàng

* Ticket Code
* Order Number
* People Ahead
* ETA
* Selected Items
* Payment Summary

### Hình ảnh

![Customer Ticket](./docs/images/guide/36-customer-ticket-mobile.png)

### Speaker notes

Sau khi Booking thành công, khách nhận Ticket.

Ticket không chỉ là số thứ tự mà còn hiển thị:

* Order Number
* Số người phía trước
* ETA
* Danh sách Product hoặc Service
* Thông tin thanh toán

Đây là nơi khách theo dõi toàn bộ trạng thái của mình.

---

# Slide 21 — Công nghệ LINE nổi bật

## LINE tạo ra điểm khác biệt cho sản phẩm

* **LIFF**: mở Web App trong LINE
* **LINE Login**: xác thực Customer
* **Messaging API**: gửi Notification
* **Branch QR**: điểm bắt đầu ngoài đời thực

### Hình ảnh

![LIFF Home](./docs/images/guide/29-liff-home-mobile.png)

### Speaker notes

Điểm công nghệ nổi bật nhất là tích hợp LINE.

LIFF giúp mở ứng dụng trực tiếp trong LINE.

LINE Login giúp xác thực khách mà không cần tài khoản riêng.

Messaging API giúp hệ thống gửi thông báo về trạng thái hàng đợi.

Đây là những công nghệ trực tiếp giải quyết bài toán khách không biết khi nào đến lượt.

LINE Login và Messaging API là hai capability riêng biệt.

Việc khách đăng nhập LINE thành công không đồng nghĩa rằng Push Notification chắc chắn được gửi thành công.

---

# Slide 22 — Staff Operation

## Staff xử lý Queue trên một Workspace

* Xem Active Ticket
* Called → Serving → Served
* Defer / Cancel / No-show
* Thu phần tiền còn lại
* In Receipt

### Hình ảnh

![Staff Workspace](./docs/images/guide/40-staff-workspace-desktop.png)

### Speaker notes

Staff Workspace giúp nhân viên vận hành hàng đợi trong ngày.

Staff có thể xem thông tin khách, Order, Payment, Ticket Status và các thao tác phục vụ trên cùng một màn hình.

Luồng chính là:

```text
Waiting
→ Called
→ Serving
→ Served
```

Ngoài ra, hệ thống còn hỗ trợ xử lý khách vắng mặt, hủy Ticket, thu phần tiền còn lại và in biên nhận.

---

# Slide 23 — Tính khả thi và hướng phát triển

## MVP đã chứng minh được tính khả thi

### Đã có

* End-to-end Core Flow
* Multi-role Dashboard
* LINE LIFF Booking
* Branch QR và Ticket
* Staff Operation
* LINE Notification Foundation
* UI Nhật / Việt / Anh

### Tiếp theo

* Real Payment Integration
* Google Routes / Location
* Real-device LINE Acceptance
* Production Hardening
* Monitoring và Backup

### Hình ảnh

![Receipt](./docs/images/guide/45-receipt.png)

### Speaker notes

MVP hiện đã chứng minh được tính khả thi của sản phẩm.

Luồng chính từ Business Onboarding đến Customer Booking và Staff Operation đã được triển khai.

Các phần còn lại chủ yếu là tích hợp Production như:

* Payment Provider thật
* Location API
* Kiểm thử LINE trên thiết bị thật
* Monitoring
* Backup và Restore
* Kiểm thử tải quy mô Production

Đây là hướng phát triển tiếp theo để đưa hệ thống gần hơn với một sản phẩm thực tế.

Có thể kết thúc bằng thông điệp:

> **Không cần đứng chờ — chỉ cần biết khi nào đến lượt.**

---

# Timing Plan

| Nhóm slide  | Nội dung                               |         Thời lượng |
| ----------- | -------------------------------------- | -----------------: |
| Slide 01–04 | Bối cảnh, vấn đề, insight              |             4 phút |
| Slide 05–07 | Giải pháp, hệ thống, công nghệ nổi bật |             5 phút |
| Slide 08–18 | Vai trò, Business flow, Admin, Owner, Branch Manager | 9 phút |
| Slide 19–22 | Customer Flow, LINE, Staff             |             5 phút |
| Slide 23    | Tính khả thi và Next Steps             |             2 phút |
| **Tổng**    |                                        | **Khoảng 25 phút** |

---

# Gợi ý thiết kế Canva hoặc Static Slide

## Style tổng thể

* Tỷ lệ: **16:9**
* Phong cách: **Clean, modern, Japanese SaaS**
* Màu chính:

  * LINE Green: `#06C755`
  * White: `#FFFFFF`
  * Dark Gray: `#1F2937`
  * Light Gray: `#F3F4F6`

## Font đề xuất

* Be Vietnam Pro
* Noto Sans
* Inter

## Quy tắc nội dung

Mỗi slide chỉ nên có:

* 1 tiêu đề chính
* 3–6 ý ngắn
* 1 ảnh hoặc 1 sơ đồ chính
* Không hiển thị toàn bộ Speaker Notes

## Quy tắc hình ảnh

* Ảnh sản phẩm chiếm khoảng 45–60% diện tích slide
* Không kéo giãn ảnh gây méo
* Dùng mockup điện thoại cho Customer Flow
* Dùng ảnh Desktop cho Admin, Owner, Branch Manager và Staff
* Với slide bối cảnh và vấn đề, dùng ảnh minh họa thực tế hoặc illustration đơn giản
* Không đưa Code, Database Schema hoặc API Detail vào phần trình bày chính

## Animation đề xuất

* Dùng Fade hoặc Rise nhẹ
* Không dùng animation phức tạp
* Với luồng hoạt động, xuất hiện từng bước từ trái sang phải
* Với bảng vai trò, highlight từng role khi thuyết trình

## Thông điệp kết thúc

> **Không cần đứng chờ — chỉ cần biết khi nào đến lượt.**

```
```
