# LINE Smart Queue Assistant — Kịch bản trình bày 15 phút

> **Mục tiêu:** 7 phút giới thiệu + 8 phút live demo với QR thật, LIFF/LINE thật, hệ thống deployed thật và LINE notification thật.  
> **Đối tượng:** Đồng nghiệp / quản lý / kỹ sư trong công ty.  
> **Phong cách:** Ngắn, rõ, ưu tiên trải nghiệm sản phẩm trước; chiều sâu kỹ thuật chỉ đưa ra đúng lúc.  
> **Thông điệp chính:** Đây không chỉ là một app quản lý hàng đợi; đây là một bài thực hành full-stack/system-design tập trung vào correctness, authorization, reliability và trải nghiệm LINE end-to-end.

---

# 0. Chuẩn bị trước buổi trình bày

## Màn hình / tab nên mở sẵn

1. Slide presentation.
2. Staff dashboard đã đăng nhập sẵn.
3. Manager dashboard hoặc Operations page chỉ để dự phòng nếu được hỏi.
4. Một tab health/status nếu cần kiểm tra nhanh.
5. Không mở source code ngay từ đầu.

## Trạng thái hệ thống trước giờ demo

- Branch demo đang active.
- Queue demo đang `open`.
- Business calendar chắc chắn đang mở đúng thời điểm demo.
- Queue capacity đặt đủ lớn.
- Sản phẩm demo có stock lớn hoặc unlimited.
- Có ít nhất một sản phẩm không bắt buộc prepayment.
- Nếu demo payment: chỉ dùng Demo Payment Provider, không dùng tiền thật.
- Staff account đã đăng nhập.
- LINE worker đang healthy.
- Notification backlog trước demo = 0 hoặc gần 0.
- Official Account / LIFF / Messaging API đã test trên thiết bị thật.
- QR hiển thị đủ lớn và dễ quét từ xa.
- Wi‑Fi / 4G đã kiểm tra.
- Nên test trước với ít nhất vài thiết bị khác nhau.

## Queue nên dùng riêng cho buổi demo

Tên gợi ý:

`Company Demo Queue`

Mục tiêu là tránh dữ liệu cũ hoặc hoạt động test trước đó làm màn hình staff bị rối.

---

# 1. Timeline tổng thể

| Thời gian | Nội dung |
|---|---|
| 0:00–1:00 | Problem |
| 1:00–2:10 | Solution / customer journey |
| 2:10–3:20 | Product scope |
| 3:20–4:30 | Architecture |
| 4:30–5:40 | Engineering highlights |
| 5:40–6:30 | Reliability / production-oriented thinking |
| 6:30–7:00 | Chuyển sang QR |
| 7:00–9:00 | Audience scan QR và booking |
| 9:00–12:00 | Staff xử lý queue |
| 12:00–14:00 | LINE notification + ticket update |
| 14:00–15:00 | Closing |

---

# 2. Slide 1 — The problem

## Nội dung trên slide

**LINE Smart Queue Assistant**

**From physical waiting → digital queue experience**

- Scan QR
- Join from LINE
- Track your turn
- Receive queue notifications
- Staff operates from one dashboard

> Visual nên rất đơn giản: một hình customer đang chờ + mũi tên sang điện thoại/LINE.

## Lời nói

> Chào mọi người.  
> Project cá nhân lần này của em bắt đầu từ một bài toán rất đơn giản: khi đi nhà hàng, clinic, service counter hoặc một cửa hàng đông khách, mình thường phải đứng gần quầy chỉ để chờ tới lượt.
>
> Vấn đề không chỉ nằm ở khách hàng. Nhân viên cũng phải quản lý thứ tự, đơn hàng, trạng thái phục vụ và giao tiếp với khách trong lúc queue liên tục thay đổi.
>
> Vì vậy em thử xây một hệ thống tên là **LINE Smart Queue Assistant**.
>
> Ý tưởng chính là: khách không cần đứng trước quầy. Khách quét QR, vào LINE, đặt dịch vụ hoặc sản phẩm, nhận ticket, theo dõi lượt của mình và nhận thông báo khi tới gần lượt hoặc được gọi.

## Cue

Chuyển slide ngay khi nói xong câu:

> “Và flow của khách hàng rất ngắn.”

---

# 3. Slide 2 — Customer journey

## Nội dung trên slide

**One customer journey**

`QR → LINE / LIFF → Select queue → Order → Ticket → LINE notification`

Bên dưới có hai lane:

**Customer**
- Scan
- Book
- Track ticket
- Receive message

**Staff**
- See queue
- Call
- Serve
- Complete

## Lời nói

> Toàn bộ customer journey em cố gắng giữ rất ngắn.
>
> Khách quét một QR cố định của branch.  
> Từ đó hệ thống mở LIFF bên trong LINE, xác thực LINE identity, hiển thị các queue đang hoạt động và catalog tương ứng.
>
> Khách chọn queue, chọn sản phẩm hoặc service, rồi tạo booking.
>
> Hệ thống tạo ticket và order ở backend. Sau đó khách có thể rời khỏi khu vực quầy nhưng vẫn theo dõi số người phía trước và ETA.
>
> Khi staff thao tác Call, Serve hoặc Complete, khách nhận được LINE notification tương ứng.
>
> Điểm em muốn giữ ở đây là: **LINE không chỉ là login button. LINE là một phần của customer experience từ đầu đến cuối.**

## Cue

> “Nhưng phía sau một flow nhìn khá đơn giản như vậy lại có nhiều bài toán kỹ thuật hơn em nghĩ ban đầu.”

---

# 4. Slide 3 — What the project covers

## Nội dung trên slide

**More than a queue screen**

- LINE / LIFF customer identity
- Multi-tenant organizations & branches
- Multiple queues per branch
- Orders & inventory
- Demo payment boundary
- Staff operations
- LINE messaging
- Realtime ticket updates
- i18n: Japanese / Vietnamese / English

Ở cuối slide nhỏ:

**Production-oriented demo — not a real-money production platform**

## Lời nói

> Khi bắt đầu, em nghĩ đây chỉ là một queue app.
>
> Nhưng khi đi sâu hơn thì queue liên quan trực tiếp tới identity, order, payment, inventory, staff permission và notification.
>
> Vì vậy project hiện có multi-tenant organization, branch, nhiều queue cho mỗi branch, catalog, inventory, booking, payment boundary, staff operation, LINE messaging và realtime update.
>
> UI hỗ trợ Japanese, Vietnamese và English, với Japanese là fallback chính.
>
> Tuy nhiên em muốn nói rõ phạm vi: đây là một **production-oriented demo**, không phải một hệ thống real-money đã production-accepted.
>
> Payment hiện dùng Demo Payment Provider và không chuyển tiền thật. Em giữ provider boundary, webhook, reconciliation và refund boundary để mô phỏng kiến trúc production mà không giả vờ rằng mình đã giải quyết merchant onboarding hoặc settlement thật.

## Cue

> “Phần em đầu tư nhiều nhất không phải số lượng feature, mà là cách giữ dữ liệu đúng khi nhiều thứ xảy ra cùng lúc.”

---

# 5. Slide 4 — Architecture

## Nội dung trên slide

```text
Customer / Staff Browser
        |
      HTTPS
        |
 React + Vite SPA
        |
 REST + SSE
        |
   Express API
        |
   PostgreSQL
        |
 durable outbox
        |
 dispatcher → BullMQ → LINE worker
                       |
                    LINE API
```

Bên cạnh:

**PostgreSQL = business source of truth**  
**Redis/BullMQ/SSE = coordination & delivery, not business authority**

## Lời nói

> Architecture em chọn là **TypeScript modular monolith**.
>
> Frontend là một React SPA. Backend là Express API. PostgreSQL giữ business state chính.
>
> Em cố tình chưa dùng microservices vì quy mô project và team một người chưa có lý do để đổi lấy độ phức tạp vận hành.
>
> Có Redis và BullMQ, nhưng em không dùng Redis làm nguồn sự thật cho queue, payment hay inventory.
>
> PostgreSQL vẫn là authority.
>
> Redis chủ yếu phục vụ rate limit, cache ngắn, Pub/Sub realtime và BullMQ orchestration.
>
> LINE notification cũng không được gửi trực tiếp bên trong transaction. State được commit trước vào PostgreSQL cùng một durable outbox record. Sau đó dispatcher đưa job sang BullMQ và worker mới gọi LINE API.
>
> Điều này giúp một lỗi bên LINE không làm rollback một booking đã thành công.

## Cue

Dừng nửa giây, rồi nói:

> “Có ba điểm engineering em muốn highlight nhất.”

---

# 6. Slide 5 — Three engineering challenges

## Nội dung trên slide

**1. Transactional correctness**  
Order + ticket + stock + payment linkage

**2. Authorization boundaries**  
Organization → Branch → Queue scope

**3. Reliable async delivery**  
PostgreSQL outbox → worker → LINE

## Lời nói

> Điểm thứ nhất là **transactional correctness**.
>
> Một booking thành công có thể liên quan tới ticket, order, order item, inventory reservation và payment transaction. Nếu stock hết hoặc một bước quan trọng fail thì em không muốn để lại nửa booking trong database.
>
> Vì vậy các write liên quan được giữ trong PostgreSQL transaction, cùng row lock, advisory lock, constraint và idempotency ở các nơi cần thiết.
>
> Điểm thứ hai là **authorization**.
>
> Em không tin `organizationId`, `branchId` hay `queueId` từ browser là authority.
>
> Owner, Branch Manager và Staff có scope khác nhau. Branch Manager chỉ được thao tác branch của mình. Staff còn bị giới hạn tiếp xuống đúng queue được assign. Backend derive lại scope từ authenticated user và PostgreSQL.
>
> Điểm thứ ba là **reliable asynchronous delivery**.
>
> Khi staff chuyển ticket sang Called, business transaction phải thành công dù LINE đang chậm hoặc tạm thời unavailable.
>
> Vì vậy notification được lưu durable trước, rồi worker gửi sau. Retry không tạo duplicate business event nhờ event key và idempotent delivery boundary.

## Cue

> “Ngoài happy path, em cũng muốn hệ thống fail theo cách có thể dự đoán được.”

---

# 7. Slide 6 — Beyond the happy path

## Nội dung trên slide

**Built to fail safely**

- PostgreSQL remains authoritative
- SSE is only an invalidation hint
- REST polling remains fallback
- LINE failure does not rollback queue state
- Demo payment cannot be declared “paid” by browser state
- CI / E2E / deployment / backup & recovery checks

## Lời nói

> Ví dụ realtime của customer và staff dùng SSE.
>
> Nhưng client không lấy event SSE rồi tự sửa business state. SSE chỉ đóng vai trò báo rằng dữ liệu đã thay đổi, sau đó client refetch REST snapshot.
>
> Nếu realtime mất kết nối, polling vẫn còn làm recovery path.
>
> Payment cũng theo nguyên tắc tương tự: browser return hoặc local state không được quyền tự tuyên bố transaction đã paid.
>
> Và ở phần vận hành, project có CI, browser E2E, migration checks, image-based deployment, backup/restore rehearsal và một topology test với nhiều API replica dùng chung PostgreSQL và Redis.
>
> Đây là những phần em làm chủ yếu để tự luyện cách nghĩ về failure mode, chứ không phải để claim rằng project đã có production scale.

## Cue

> “Nhưng thay vì nói thêm về architecture, em nghĩ cách tốt nhất là mọi người dùng thử trực tiếp.”

---

# 8. Slide 7 — Try it now

## Nội dung trên slide

# **SCAN TO JOIN**

[QR thật chiếm khoảng 50–60% slide]

Bên dưới:

1. Scan QR
2. Open in LINE
3. Select a queue / item
4. Submit booking
5. Keep your ticket open

Dòng nhỏ:

**No real money will be charged.**

## Lời nói chuyển sang demo

> Phần còn lại em không muốn chỉ mô tả bằng slide nữa.
>
> Mọi người có thể lấy điện thoại ra và quét QR trên màn hình.
>
> Đây là environment đang deploy thật cho buổi demo.  
> Flow sẽ đi qua LINE / LIFF, backend, PostgreSQL và notification worker như hệ thống em vừa trình bày.
>
> Mọi người chọn một queue, chọn một sản phẩm hoặc service rồi tạo booking.
>
> Không có tiền thật được charge trong demo này.
>
> Sau khi booking xong, mọi người cứ giữ ticket mở.  
> Em sẽ chuyển sang phía Staff để xử lý chính những ticket mọi người vừa tạo.

---

# 9. Live demo — phút 7:00 đến 9:00

## Việc bạn làm

1. Giữ slide QR trên màn hình.
2. Quan sát mọi người scan.
3. Không nói quá nhiều trong lúc mọi người thao tác.
4. Nếu cần, nhắc:
   - Mở trong LINE.
   - Cho phép login nếu được hỏi.
   - Chọn queue.
   - Chọn một item.
   - Submit booking.
5. Khi khoảng 5–10 ticket đã vào, chuyển màn hình sang Staff dashboard.

## Lời nói ngắn trong lúc chờ

> Mọi người có thể booking song song, không cần đợi nhau.
>
> Nếu ai đã thấy ticket code và số người phía trước thì booking đã thành công.

Sau khoảng 60–90 giây:

> Em sẽ chuyển sang Staff dashboard.

---

# 10. Live demo — Staff side

## Màn hình

Staff dashboard.

## Lời nói

> Đây là phía operator.
>
> Những ticket mọi người vừa tạo đang xuất hiện ở đây. Đây không phải fixture em chuẩn bị trước; đây là dữ liệu vừa được tạo từ điện thoại trong phòng.

Chỉ vào:
- tổng số active customers;
- next waiting entries;
- ticket code;
- customer name;
- order summary.

> Staff của project được assign vào một queue cụ thể, nên backend chỉ trả về đúng scope mà account này được phép thao tác.
>
> Bây giờ em sẽ gọi ticket đầu tiên.

## Action

Click **Call** ticket đầu.

## Lời nói

> Khi em bấm Call, trạng thái queue được commit ở backend trước.
>
> Đồng thời hệ thống tạo một notification intent trong PostgreSQL outbox.
>
> Worker xử lý delivery sau transaction đó.

Dừng 2–5 giây.

> Bạn nào vừa được gọi kiểm tra LINE giúp em.

---

# 11. Hero moment — LINE notification

Khi người dùng thấy LINE message:

> Đây là phần em muốn mọi người trải nghiệm trực tiếp nhất.
>
> Message này không phải toast trên browser Staff. Nó đã đi qua Messaging API và tới LINE account của khách hàng.

Nếu có thể, nhờ một người giơ điện thoại hoặc xác nhận bằng lời.

Tiếp tục:

> Em sẽ chuyển ticket sang Serve.

## Action

Click **Serve**.

> Ticket ở phía customer cũng cập nhật. Frontend có SSE để nhận invalidation event, nhưng REST/PostgreSQL vẫn là authoritative state.

## Action

Click **Complete**.

> Và khi complete, customer tiếp tục nhận lifecycle notification tương ứng.

---

# 12. Nếu có nhiều ticket trong phòng

Không cần xử lý hết.

Nói:

> Em sẽ không call hết mọi ticket vì mình chỉ còn vài phút.
>
> Điểm em muốn show là nhiều người có thể tạo ticket từ các thiết bị riêng, Staff nhìn thấy cùng một queue và lifecycle notification đi về đúng LINE identity của từng customer.

Nếu muốn tạo thêm một khoảnh khắc vui:

> Em sẽ chọn thêm một ticket bất kỳ trong phòng.

Call một người khác.

---

# 13. Closing — phút 14:00 đến 15:00

## Có thể quay lại một slide closing rất đơn giản

**LINE Smart Queue Assistant**

`QR → Queue → Staff → LINE`

Dưới:

**What I practiced**
- Full-stack product design
- Transaction & concurrency
- Authorization
- Async reliability
- Deployment & operations

## Lời nói kết thúc

> Em xin kết thúc bằng một điểm.
>
> Với em, giá trị lớn nhất của project này không nằm ở số lượng màn hình hay số lượng API.
>
> Điều em muốn luyện là cách một feature nhìn đơn giản ở phía user — quét QR và chờ tới lượt — trở thành một hệ thống có identity, transaction, authorization, asynchronous delivery, retry và deployment ở phía sau.
>
> Em chủ động giữ PostgreSQL là business source of truth, giữ external provider ra ngoài transaction, và cố gắng để failure không làm hệ thống rơi vào trạng thái nửa đúng nửa sai.
>
> Project vẫn còn các production gate như real payment provider acceptance, production-scale load testing và một số external integration acceptance.
>
> Nhưng flow mọi người vừa trải nghiệm — QR, LIFF, booking, staff operation và LINE notification — là luồng end-to-end mà em muốn dùng để chứng minh toàn bộ ý tưởng của project.
>
> Cảm ơn mọi người.

---

# 14. Phiên bản closing ngắn hơn nếu bị thiếu thời gian

> Project này là bài thực hành của em về cách biến một customer flow rất đơn giản thành một hệ thống có transaction, authorization và reliable messaging phía sau.
>
> Phần mọi người vừa trải nghiệm là flow end-to-end em muốn tập trung nhất: QR → LINE → booking → Staff → notification.
>
> Cảm ơn mọi người.

---

# 15. Những câu KHÔNG nên nói

Tránh:

> “Hệ thống này production-ready hoàn toàn.”

Thay bằng:

> “Đây là production-oriented demo.”

hoặc:

> “Flow QR → LIFF → booking → Staff → LINE Messaging đang chạy live trên deployed environment.”

---

Tránh:

> “Hệ thống có thể scale rất lớn.”

Thay bằng:

> “Em đã kiểm tra horizontal behavior và failure recovery ở local validation topology, nhưng chưa claim production capacity vì chưa có production-scale measurement.”

---

Tránh:

> “Redis đảm bảo consistency.”

Thay bằng:

> “PostgreSQL là correctness authority. Redis hỗ trợ coordination, cache, Pub/Sub và BullMQ.”

---

Tránh:

> “Payment đã production.”

Thay bằng:

> “Payment hiện dùng Demo Payment Provider, không chuyển tiền thật. Production provider boundary đã được thiết kế nhưng merchant acceptance và settlement thật nằm ngoài demo này.”

---

# 16. Q&A — các câu hỏi khả năng cao sẽ gặp

## Q1. Tại sao không dùng microservices?

**Trả lời:**

> Vì em chưa có measured requirement cho microservices.
>
> Em chọn modular monolith để giữ deployment và transaction model đơn giản, nhưng vẫn chia module theo domain.
>
> Chỉ những workload có lý do rõ ràng mới được tách process, ví dụ LINE delivery worker.
>
> Nếu sau này có bottleneck hoặc isolation requirement đo được, boundary hiện tại đủ rõ để tách tiếp.

---

## Q2. Nếu LINE bị down thì booking có fail không?

**Trả lời:**

> Không.
>
> Booking/queue transition commit vào PostgreSQL trước.
>
> Trong cùng transaction em ghi durable notification intent.
>
> LINE delivery xảy ra sau commit thông qua dispatcher và worker.
>
> Vì vậy provider failure làm notification bị retry/backlog, nhưng không rollback business transaction.

---

## Q3. Nếu hai người cùng lấy ticket một lúc thì sao?

**Trả lời:**

> Queue counter và các operation correctness-critical sử dụng PostgreSQL transaction và locking.
>
> Booking cũng recheck authoritative state sau khi lock.
>
> Một số concurrency path đã có local validation, nhưng em vẫn coi production-scale write stress test là acceptance work riêng, không claim quá mức bằng local evidence.

---

## Q4. Redis chết thì sao?

**Trả lời:**

> Queue/order/payment/inventory vẫn dựa trên PostgreSQL.
>
> Redis mất sẽ ảnh hưởng cache, Pub/Sub realtime, distributed rate limit và BullMQ coordination.
>
> LINE delivery có thể backlog, SSE có thể degrade về polling, nhưng business truth vẫn còn trong PostgreSQL.

---

## Q5. Tại sao dùng SSE mà không dùng WebSocket?

**Trả lời:**

> Use case của em chủ yếu là server thông báo rằng ticket/queue đã thay đổi.
>
> Client không cần một bidirectional realtime protocol phức tạp.
>
> SSE đơn giản hơn và đủ cho invalidation.
>
> Quan trọng hơn, client vẫn refetch REST snapshot; event stream không trở thành business source of truth.

---

## Q6. Có chống oversell inventory không?

**Trả lời:**

> Với finite stock, stock decrement và inventory reservation nằm trong cùng booking transaction.
>
> Nếu authoritative stock update không đủ quantity thì write fail và toàn bộ transaction rollback.
>
> Release/cancel cũng dùng guarded state transition để tránh restore stock hai lần.

---

## Q7. Tại sao không để frontend gửi lineUserId?

**Trả lời:**

> Vì browser input không phải identity authority.
>
> LINE ID token được backend verify, sau đó system JWT gắn với linked LINE account.
>
> Khi booking, backend lấy recipient từ authenticated identity đã verify chứ không tin `lineUserId` do browser gửi lên.

---

## Q8. Payment có thật không?

**Trả lời:**

> Không. Demo hiện không chuyển tiền thật.
>
> Em cố tình làm rõ điều này.
>
> Nhưng payment state vẫn server-authoritative: browser không tự set paid.
>
> Provider adapter, intent, webhook idempotency, reconciliation và refund boundary được giữ để sau này có thể thay Demo Provider bằng provider thật.

---

## Q9. Tại sao project cá nhân lại làm backup/recovery?

**Trả lời:**

> Vì em muốn luyện cả failure mode sau deploy.
>
> Em không coi deploy thành công chỉ là container start được.
>
> Em muốn hiểu migration, immutable image, backup gate, rollback và restore boundary.
>
> Đây chủ yếu là engineering exercise, không phải vì current demo traffic bắt buộc phải phức tạp tới mức đó.

---

## Q10. Có dùng AI thật không?

**Trả lời:**

> Không.
>
> ETA và staffing recommendation hiện là measured heuristic dựa trên dữ liệu PostgreSQL.
>
> Em cố tình không gọi nó là ML hay generative AI.
>
> Nếu sau này có model thật, em muốn có production data và accuracy baseline trước khi thay heuristic.

---

# 17. Fallback plan nếu live demo có vấn đề

## Case A — Có người scan được nhưng LINE notification chậm

Không hoảng.

Nói:

> Booking đã commit thành công. Notification là asynchronous delivery nên em sẽ kiểm tra delivery state phía operator.

Nếu có Notification Operations UI, mở đúng scope và show pending/retry state.

Điều này thậm chí chứng minh architecture:

> Đây chính là lý do em tách business transaction khỏi external provider delivery.

---

## Case B — LINE Messaging API gặp lỗi toàn bộ

Nói:

> Em sẽ không retry bằng tay liên tục trên sân khấu.
>
> Queue state đã commit trong PostgreSQL và notification intent đang được giữ durable để worker retry.
>
> Đây là failure mode hệ thống được thiết kế để chịu được.

Sau đó tiếp tục demo Staff + ticket update.

---

## Case C — Một số người không login được LIFF

Đừng debug từng điện thoại.

Nói:

> Nếu thiết bị nào gặp vấn đề với LINE login thì cứ bỏ qua, em chỉ cần vài ticket để demo luồng end-to-end.

Giữ nhịp presentation.

---

## Case D — Wi‑Fi công ty yếu

Khuyến khích dùng 4G/5G.

Nếu đa số không truy cập được, dùng 1–2 thiết bị đã chuẩn bị trước làm backup.

---

## Case E — Không có ticket xuất hiện trên Staff UI

1. Refresh Staff page.
2. Kiểm tra queue đang open.
3. Kiểm tra Staff đúng queue assignment.
4. Nếu vẫn lỗi, chuyển sang backup ticket đã tạo sẵn.

Nói ngắn:

> Em sẽ dùng một ticket backup để không mất thời gian của mọi người, rồi sau buổi em sẽ kiểm tra incident này từ request/log trace.

Không đứng debug quá lâu.

---

# 18. Presentation rules

## Rule 1 — Không giải thích code trước khi audience hiểu sản phẩm

Thứ tự đúng:

**Problem → Customer flow → Live behavior → Engineering underneath**

Không làm ngược lại.

## Rule 2 — Mỗi slide tối đa 1 thông điệp

Không đưa endpoint list, table schema hoặc 30 technologies lên slide.

## Rule 3 — Architecture slide phải nhìn được trong 5 giây

Nếu người nghe phải đọc quá 15 giây để hiểu diagram, slide quá phức tạp.

## Rule 4 — Không demo CRUD

Product CRUD, manager setting, onboarding, admin approval chỉ để Q&A.

## Rule 5 — Live audience là dữ liệu demo mạnh nhất

Tên/ticket của chính người trong phòng xuất hiện trên Staff dashboard mạnh hơn fixture.

---

# 19. Slide text — phiên bản copy/paste nhanh

## Slide 1

**LINE Smart Queue Assistant**  
*From physical waiting → digital queue experience*

- Scan QR
- Join from LINE
- Track your turn
- Receive queue notifications
- Staff operates from one dashboard

---

## Slide 2

**One customer journey**

`QR → LINE / LIFF → Select queue → Order → Ticket → LINE notification`

**Customer**
- Scan
- Book
- Track ticket
- Receive message

**Staff**
- See queue
- Call
- Serve
- Complete

---

## Slide 3

**More than a queue screen**

- LINE / LIFF customer identity
- Multi-tenant organizations & branches
- Multiple queues per branch
- Orders & inventory
- Demo payment boundary
- Staff operations
- LINE messaging
- Realtime updates
- JA / VI / EN

*Production-oriented demo — not a real-money production platform*

---

## Slide 4

**Architecture**

`React SPA → Express API → PostgreSQL`

`PostgreSQL outbox → Dispatcher → BullMQ → LINE Worker → LINE`

**PostgreSQL = business source of truth**  
**Redis/BullMQ/SSE = coordination & delivery**

---

## Slide 5

**Three engineering challenges**

1. Transactional correctness
2. Authorization boundaries
3. Reliable asynchronous delivery

---

## Slide 6

**Built to fail safely**

- PostgreSQL remains authoritative
- SSE is an invalidation hint
- REST polling remains fallback
- LINE failure does not rollback queue state
- Browser state cannot declare payment paid
- CI / E2E / deployment / recovery checks

---

## Slide 7

# **SCAN TO JOIN**

[QR]

1. Scan QR
2. Open in LINE
3. Select a queue / item
4. Submit booking
5. Keep your ticket open

**No real money will be charged.**

---

# 20. Một câu duy nhất nên để mọi người nhớ

Nếu phải tóm tắt toàn bộ project bằng một câu:

> **“I built a LINE-first smart queue where the customer flow stays simple, while the backend handles identity, transactions, authorization and reliable notification delivery behind it.”**

Phiên bản tiếng Việt:

> **“Em xây một hệ thống xếp hàng LINE-first, giữ trải nghiệm khách hàng thật đơn giản nhưng xử lý identity, transaction, authorization và reliable notification delivery ở phía sau.”**
