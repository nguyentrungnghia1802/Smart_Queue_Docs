/* LINE Smart Queue Assistant — Presentation Configuration (Tiếng Việt) */

window.PRESENTATION_CONFIG_VI = {
  meta: {
    lang: "vi",
    title: "LINE Smart Queue Assistant — Bài Thuyết Trình (Tiếng Việt)",
    controls: {
      dashboardBtn: "🏠 Dashboard",
      prevBtnTitle: "Slide trước (←)",
      nextBtnTitle: "Slide tiếp (→)",
      notesBtnTitle: "Mở Speaker Notes (P)",
      fullscreenBtnTitle: "Toàn màn hình (F)",
      switchLangBtn: "🇯🇵 JP",
      switchLangTarget: "ja",
      switchLangTitle: "Chuyển sang Tiếng Nhật"
    },
    notesDrawerTitle: "Speaker Notes",
    notesEmpty: "Slide này chưa có speaker notes."
  },
  slides: [
    {
      id: "slide-1",
      tag: "Slide 01 — The Problem",
      headerBadge: "The Problem",
      title: "LINE Smart Queue Assistant",
      subtitle: "Từ việc đứng chờ tại quầy → trải nghiệm hàng đợi số hóa qua LINE",
      bodyHtml: `
        <div class="content-text" style="gap: 16px;">
          <div class="feature-card" style="border-left: 4px solid #EF4444; padding: 14px 18px;">
            <h3 style="color: #DC2626; font-size: 16px; margin-bottom: 2px;">🚶‍♂️ Khách phải đứng gần quầy để chờ</h3>
            <p style="font-size: 14px; color: var(--ink-soft); line-height: 1.45;">Bị ràng buộc vị trí tại sảnh chờ, không thể tự do di chuyển hay tranh thủ làm việc khác.</p>
          </div>
          <div class="feature-card" style="border-left: 4px solid #F59E0B; padding: 14px 18px;">
            <h3 style="color: #D97706; font-size: 16px; margin-bottom: 2px;">⏳ Không biết chính xác còn bao lâu tới lượt</h3>
            <p style="font-size: 14px; color: var(--ink-soft); line-height: 1.45;">Thiếu thông tin dự báo thời gian chờ (ETA) và số lượng người đang xếp hàng phía trước.</p>
          </div>
          <div class="feature-card" style="border-left: 4px solid #3B82F6; padding: 14px 18px;">
            <h3 style="color: #2563EB; font-size: 16px; margin-bottom: 2px;">📢 Staff phải liên tục gọi khách thủ công</h3>
            <p style="font-size: 14px; color: var(--ink-soft); line-height: 1.45;">Tốn nhân lực hô tên/số thứ tự, dễ bỏ sót lượt và gây áp lực vận hành lớn cho cửa hàng.</p>
          </div>
          <div style="background: linear-gradient(135deg, rgb(233 250 240 / 0.95), rgb(255 255 255 / 0.8)); border: 1.5px solid var(--line-green); border-radius: 14px; padding: 12px 18px; text-align: center; font-weight: 700; font-size: 16px; color: var(--brand-deep); box-shadow: var(--shadow-sm);">
            “Khách không cần đứng chờ — họ cần biết khi nào quay lại.”
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/guide/02-japanese-waiting-context.png" alt="Bối cảnh hàng đợi">
            </div>
          </div>
        </div>
      `,
      notes: `
        Chào mọi người. Project cá nhân lần này của em bắt đầu từ một bài toán khá đời thường: tại nhà hàng, clinic, salon hoặc service counter, khách thường phải đứng hoặc ngồi gần quầy chỉ để chờ tới lượt.<br><br>
        Vấn đề không chỉ là thời gian chờ. Khách không biết còn bao lâu tới lượt, còn staff phải liên tục quản lý thứ tự và gọi khách.<br><br>
        Vì vậy em thử xây LINE Smart Queue Assistant với một ý tưởng rất đơn giản: khách không cần đứng cạnh quầy; họ chỉ cần biết mình đang ở đâu trong queue và được thông báo khi tới lượt.
      `
    },
    {
      id: "slide-2",
      tag: "Slide 02 — Customer Journey",
      headerBadge: "End-to-End Flow",
      title: "Một hành trình khách hàng rất ngắn",
      subtitle: "Trải nghiệm LINE-first tinh gọn, kết nối trực tiếp khách hàng và nhân viên vận hành",
      bodyHtml: `
        <div class="content-text" style="gap: 14px;">
          <!-- Main visual flow banner -->
          <div style="display: flex; align-items: center; justify-content: space-between; background: #0b4b2d; color: white; padding: 10px 14px; border-radius: 12px; font-weight: 700; font-size: 13px; letter-spacing: 0.02em;">
            <span>📱 QR</span>
            <span style="color: #4ade80;">→</span>
            <span>💬 LINE / LIFF</span>
            <span style="color: #4ade80;">→</span>
            <span>📋 Chọn Queue</span>
            <span style="color: #4ade80;">→</span>
            <span>🛍️ Order</span>
            <span style="color: #4ade80;">→</span>
            <span>🎟️ Ticket</span>
            <span style="color: #4ade80;">→</span>
            <span>🔔 LINE Notify</span>
          </div>

          <!-- 2 Swimlanes -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <!-- Lane 1: Customer -->
            <div class="feature-card" style="border-left: 4px solid var(--line-green); padding: 12px 16px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span class="badge badge-green" style="font-size: 11px;">Customer Lane</span>
                <strong style="color: var(--brand-ink); font-size: 14px;">Trải nghiệm khách hàng trên LINE</strong>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">1. Scan</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Quét QR Branch</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">2. Book</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Chọn Queue/Item</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">3. Track Ticket</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Theo dõi ETA</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">4. Receive Msg</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Nhận tin LINE</div>
                </div>
              </div>
            </div>

            <!-- Lane 2: Staff -->
            <div class="feature-card" style="border-left: 4px solid #3B82F6; padding: 12px 16px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span class="badge" style="background: #e0f2fe; color: #0369a1; border-color: rgba(3,105,161,0.2); font-size: 11px;">Staff Lane</span>
                <strong style="color: #0369a1; font-size: 14px;">Vận hành quầy tại Staff Workspace</strong>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">1. See Queue</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Xem danh sách</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">2. Call</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Gọi khách (Push)</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">3. Serve</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Đang phục vụ</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">4. Complete</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Hoàn tất lượt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media-container">
          <div class="phone-mockup">
            <div class="phone-header-notch"></div>
            <div class="phone-screen">
              <img src="../images/guide/30-customer-queue-selection-mobile.png" alt="Màn hình chọn queue trên LINE">
            </div>
          </div>
        </div>
      `,
      notes: `
        Customer journey em cố giữ rất ngắn.<br><br>
        Khách quét QR cố định của branch. Hệ thống mở LIFF bên trong LINE, xác thực LINE identity, hiển thị các queue đang hoạt động và catalog tương ứng.<br><br>
        Khách chọn queue, sản phẩm hoặc service rồi tạo booking.<br><br>
        Backend tạo order và ticket. Sau đó khách có thể theo dõi people ahead và ETA ngay trên điện thoại.<br><br>
        Khi Staff Call, Serve hoặc Complete, khách nhận notification qua LINE.<br><br>
        Điểm chính ở đây là LINE không chỉ là nút login. LINE là một phần của customer experience từ đầu đến cuối.
      `
    },
    {
      id: "slide-3",
      tag: "Slide 03 — Product Scope",
      headerBadge: "Domain Scope",
      title: "Không chỉ là một màn hình lấy số",
      subtitle: "Một customer flow đơn giản kéo theo nhiều domain phía sau",
      bodyHtml: `
        <div class="content-text" style="gap: 12px;">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">👤 LINE / LIFF Identity</h3>
              <p style="font-size: 12px; line-height: 1.35;">Xác thực danh tính &amp; mapping profile</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">🏢 Multi-tenant Org</h3>
              <p style="font-size: 12px; line-height: 1.35;">Phân tách dữ liệu doanh nghiệp an toàn</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">📍 Branch &amp; Multi-Queue</h3>
              <p style="font-size: 12px; line-height: 1.35;">1 QR chi nhánh, nhiều hàng đợi song song</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">📦 Orders &amp; Booking</h3>
              <p style="font-size: 12px; line-height: 1.35;">Gắn kết Ticket với giỏ hàng &amp; dịch vụ</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">🏷️ Inventory &amp; Stock</h3>
              <p style="font-size: 12px; line-height: 1.35;">Khóa &amp; reserve finite stock trong transaction</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">💳 Demo Payment</h3>
              <p style="font-size: 12px; line-height: 1.35;">Mô phỏng checkout, webhook &amp; refund</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">🧑‍💼 Staff Operations</h3>
              <p style="font-size: 12px; line-height: 1.35;">Call / Serve / Complete scoped theo Queue</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">💬 LINE Messaging</h3>
              <p style="font-size: 12px; line-height: 1.35;">Tự động gửi push notifications &amp; rich template</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">⚡ Realtime Updates</h3>
              <p style="font-size: 12px; line-height: 1.35;">SSE invalidation kết hợp REST snapshot</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">🌐 JA / VI / EN</h3>
              <p style="font-size: 12px; line-height: 1.35;">Đa ngôn ngữ xuyên suốt các giao diện</p>
            </div>
          </div>
          <!-- Subtle Disclaimer -->
          <div style="background: rgba(254, 243, 199, 0.75); border: 1px solid #f59e0b; border-radius: 10px; padding: 7px 12px; font-size: 12px; color: #92400e; display: flex; align-items: center; gap: 8px;">
            <span style="font-weight: 700;">⚠️ Lưu ý:</span>
            <span><strong>Production-oriented demo</strong> — không phải real-money production platform.</span>
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/guide/01-landing-page.png" alt="Tổng quan hệ thống">
            </div>
          </div>
        </div>
      `,
      notes: `
        Ban đầu em nghĩ đây chỉ là queue app.<br><br>
        Nhưng khi đi sâu hơn thì một booking liên quan đến identity, order, payment, stock, staff permission và notification.<br><br>
        Vì vậy project hiện bao gồm multi-tenant organization, branch, nhiều queue, catalog, inventory, booking, staff operation, payment boundary, LINE messaging và realtime update.<br><br>
        UI hỗ trợ Japanese, Vietnamese và English.<br><br>
        Tuy nhiên em muốn nói rõ: đây là production-oriented demo. Payment hiện dùng Demo Payment Provider và không chuyển tiền thật.<br><br>
        Em giữ provider boundary, webhook, reconciliation và refund design để luyện kiến trúc production mà không claim rằng hệ thống đã hoàn tất merchant settlement thật.
      `
    },
    {
      id: "slide-4",
      tag: "Slide 04 — Architecture",
      headerBadge: "System Architecture",
      title: "Simple product flow, serious backend boundaries",
      subtitle: "TypeScript Modular Monolith kết hợp PostgreSQL Authoritative State và Asynchronous Outbox Delivery",
      bodyHtml: `
        <div style="display: grid; grid-template-columns: 1.75fr 1fr; gap: 18px; align-items: center;">
          <!-- Left: Flow Diagram -->
          <div style="display: flex; flex-direction: column; gap: 7px; background: rgba(255, 255, 255, 0.65); border: 1px solid var(--border-color); border-radius: 18px; padding: 12px 16px; box-shadow: var(--shadow-sm);">
            
            <!-- Layer 1: Client -->
            <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; border: 1px solid #d1fae5; border-radius: 10px; padding: 7px 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 16px;">📱💻</span>
                <div>
                  <strong style="color: var(--brand-ink); font-size: 13px;">Customer / Staff Browser</strong>
                  <div style="font-size: 11px; color: var(--text-muted);">React + Vite SPA • Mobile LINE LIFF &amp; Desktop Web</div>
                </div>
              </div>
              <span class="badge badge-green" style="font-size: 10px;">Client Tier</span>
            </div>

            <!-- Connector 1 -->
            <div style="display: flex; align-items: center; justify-content: center; color: var(--brand-deep); font-size: 11px; font-weight: 700; font-family: var(--font-family-code);">
              <span>↓ HTTPS (REST APIs + Server-Sent Events / SSE)</span>
            </div>

            <!-- Layer 2: API & Outbox -->
            <div style="display: flex; align-items: center; justify-content: space-between; background: #f0fdf4; border: 1.5px solid var(--line-green); border-radius: 10px; padding: 7px 12px;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 16px;">⚙️</span>
                <div>
                  <strong style="color: var(--brand-deep); font-size: 13px;">Express API (Modular Monolith)</strong>
                  <div style="font-size: 11px; color: var(--ink-soft);">ACID Transaction • Auth Guards • Durable Outbox Writer</div>
                </div>
              </div>
              <span class="badge" style="background: #0b4b2d; color: white; font-size: 10px;">Backend Core</span>
            </div>

            <!-- Connector 2 -->
            <div style="display: flex; align-items: center; justify-content: center; color: var(--brand-deep); font-size: 11px; font-weight: 700; font-family: var(--font-family-code);">
              <span>↓ Commit Database &amp; Outbox Intent | Async Dispatch ↓</span>
            </div>

            <!-- Layer 3: Storage & Delivery -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <!-- PostgreSQL Box -->
              <div style="background: #eef2ff; border: 1.5px solid #6366f1; border-radius: 10px; padding: 7px 10px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <strong style="color: #3730a3; font-size: 12px;">🐘 PostgreSQL</strong>
                  <span class="badge" style="background: #4338ca; color: white; font-size: 9px;">Authoritative</span>
                </div>
                <div style="font-size: 11px; color: #4338ca; margin-top: 3px;">Queues • Orders • Stock • Outbox</div>
              </div>

              <!-- BullMQ / Worker Box -->
              <div style="background: #ecfdf5; border: 1.5px solid #10b981; border-radius: 10px; padding: 7px 10px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <strong style="color: #065f46; font-size: 12px;">⚡ Worker → LINE API</strong>
                  <span class="badge badge-green" style="font-size: 9px;">Async Delivery</span>
                </div>
                <div style="font-size: 11px; color: #047857; margin-top: 3px;">BullMQ Queue • LINE Push API</div>
              </div>
            </div>

          </div>

          <!-- Right: Redis Role & 2 Big Callouts -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <!-- Redis Card -->
            <div class="feature-card" style="border-left: 4px solid #EF4444; padding: 10px 12px; gap: 3px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="color: #b91c1c; font-size: 13px;">🔴 Redis Coordination</strong>
                <span class="badge" style="background: #fee2e2; color: #b91c1c; font-size: 9px;">Coordination</span>
              </div>
              <p style="font-size: 11px; line-height: 1.35; color: var(--ink-soft);">BullMQ Job Queue, Pub/Sub SSE invalidation, Short TTL cache &amp; Rate limiting.</p>
            </div>

            <!-- Callout 1 -->
            <div style="background: linear-gradient(135deg, #0b4b2d, #08713d); color: white; border-radius: 12px; padding: 10px 14px; box-shadow: var(--shadow-sm);">
              <div style="font-size: 10px; font-weight: 800; color: #86efac; text-transform: uppercase; letter-spacing: 0.05em;">Source of Truth</div>
              <div style="font-size: 14px; font-weight: 700; margin-top: 2px;">PostgreSQL = Business State</div>
              <div style="font-size: 11px; color: #dcfce7; margin-top: 2px;">Queue, Order, Stock &amp; Outbox commit cùng transaction.</div>
            </div>

            <!-- Callout 2 -->
            <div style="background: linear-gradient(135deg, #1e293b, #334155); color: white; border-radius: 12px; padding: 10px 14px; box-shadow: var(--shadow-sm);">
              <div style="font-size: 10px; font-weight: 800; color: #93c5fd; text-transform: uppercase; letter-spacing: 0.05em;">Coordination Layer</div>
              <div style="font-size: 14px; font-weight: 700; margin-top: 2px;">Redis / BullMQ / SSE = Delivery</div>
              <div style="font-size: 11px; color: #e2e8f0; margin-top: 2px;">Điều phối và gửi async; không giữ authoritative authority.</div>
            </div>
          </div>
        </div>
      `,
      notes: `
        Architecture em chọn là TypeScript modular monolith.<br><br>
        Frontend là React SPA, backend là Express API và PostgreSQL giữ business state chính.<br><br>
        Em chưa dùng microservices vì project một người chưa có measured reason để đổi lấy thêm operational complexity.<br><br>
        Redis có mặt nhưng không phải business authority. Nó hỗ trợ cache ngắn, rate limit, Pub/Sub và BullMQ.<br><br>
        Điểm quan trọng nhất là LINE notification không được gọi trực tiếp trong business transaction.<br><br>
        Queue state commit vào PostgreSQL trước, đồng thời ghi durable notification intent. Sau đó dispatcher và worker mới gọi LINE API.<br><br>
        Vì vậy LINE failure không làm rollback một booking hoặc queue transition đã thành công.
      `
    },
    {
      id: "slide-5",
      tag: "Slide 05 — Engineering Challenges",
      headerBadge: "Core Engineering",
      title: "3 bài toán kỹ thuật em tập trung nhất",
      subtitle: "Đảm bảo tính toàn vẹn dữ liệu, ranh giới phân quyền và độ tin cậy khi gửi tin nhắn",
      bodyHtml: `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; width: 100%;">
          
          <!-- Card 1: Transactional Correctness -->
          <div class="feature-card" style="border-top: 4px solid var(--line-green); padding: 16px 18px; justify-content: space-between;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge badge-green" style="font-size: 11px;">Challenge 01</span>
                <span style="font-size: 18px;">🔒</span>
              </div>
              <h3 style="font-size: 16px; color: var(--brand-ink); line-height: 1.3;">1. Transactional Correctness</h3>
              <div style="font-size: 13px; font-weight: 700; color: var(--brand-deep);">Order + Ticket + Stock + Payment linkage</div>
              <p style="font-size: 12px; color: var(--ink-soft); line-height: 1.45;">
                Gom nhóm toàn bộ quá trình cấp Ticket, Order Items và Stock Reservation trong một Atomic Transaction duy nhất.
              </p>
            </div>
            <div style="background: rgba(6, 199, 85, 0.08); border: 1px dashed rgba(6, 199, 85, 0.3); border-radius: 8px; padding: 6px 10px; font-size: 11px; font-family: var(--font-family-code); color: var(--brand-ink);">
              Transaction • Row Locks • Constraints • Idempotency
            </div>
          </div>

          <!-- Card 2: Authorization Boundaries -->
          <div class="feature-card" style="border-top: 4px solid #3B82F6; padding: 16px 18px; justify-content: space-between;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge" style="background: #e0f2fe; color: #0369a1; border-color: rgba(3,105,161,0.2); font-size: 11px;">Challenge 02</span>
                <span style="font-size: 18px;">🛡️</span>
              </div>
              <h3 style="font-size: 16px; color: #1e3a8a; line-height: 1.3;">2. Authorization Boundaries</h3>
              <div style="font-size: 13px; font-weight: 700; color: #1d4ed8;">Organization → Branch → Queue</div>
              <p style="font-size: 12px; color: var(--ink-soft); line-height: 1.45;">
                Backend độc lập derive quyền từ session identity và database. Staff chỉ thao tác trên đúng Queue được gán tại Branch.
              </p>
            </div>
            <div style="background: rgba(59, 130, 246, 0.08); border: 1px dashed rgba(59, 130, 246, 0.3); border-radius: 8px; padding: 6px 10px; font-size: 11px; font-family: var(--font-family-code); color: #1e40af;">
              Browser IDs are selectors, never authority
            </div>
          </div>

          <!-- Card 3: Reliable Async Delivery -->
          <div class="feature-card" style="border-top: 4px solid #8B5CF6; padding: 16px 18px; justify-content: space-between;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge" style="background: #f3e8ff; color: #6b21a8; border-color: rgba(107,33,168,0.2); font-size: 11px;">Challenge 03</span>
                <span style="font-size: 18px;">📬</span>
              </div>
              <h3 style="font-size: 16px; color: #4c1d95; line-height: 1.3;">3. Reliable Async Delivery</h3>
              <div style="font-size: 13px; font-weight: 700; color: #6d28d9;">PostgreSQL Outbox → Worker → LINE</div>
              <p style="font-size: 12px; color: var(--ink-soft); line-height: 1.45;">
                Tách biệt commit nghiệp vụ và gửi notification. Outbox intent được lưu durable, retry tự động với idempotent event key.
              </p>
            </div>
            <div style="background: rgba(139, 92, 246, 0.08); border: 1px dashed rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 6px 10px; font-size: 11px; font-family: var(--font-family-code); color: #5b21b6;">
              Retry without rolling back business state
            </div>
          </div>

        </div>
      `,
      notes: `
        Có ba phần engineering em tập trung nhiều nhất.<br><br>
        Thứ nhất là transactional correctness. Một booking có thể liên quan tới ticket, order, order item, inventory reservation và payment transaction. Em không muốn nếu một bước fail thì database để lại nửa booking.<br><br>
        Thứ hai là authorization. Em không tin organizationId, branchId hay queueId từ browser là authority. Backend derive scope lại từ authenticated identity và database.<br><br>
        Owner, Branch Manager và Staff có scope khác nhau; Staff còn bị giới hạn đúng queue được assign.<br><br>
        Thứ ba là reliable async delivery. Khi Staff Call một ticket, business transaction phải thành công ngay cả khi LINE đang unavailable.<br><br>
        Vì vậy notification được lưu durable và gửi sau commit, với event key, retry và idempotent delivery boundary.
      `
    },
    {
      id: "slide-6",
      tag: "Slide 06 — Reliability",
      headerBadge: "Failure Safety",
      title: "Không chỉ chạy được happy path",
      subtitle: "Thiết kế hệ thống suy thoái êm ái (graceful degradation) khi có sự cố",
      bodyHtml: `
        <div class="content-text" style="gap: 10px;">
          <!-- Core Statement Highlight -->
          <div style="background: linear-gradient(135deg, #0b4b2d, #08713d); color: #ffffff; border-radius: 12px; padding: 10px 16px; box-shadow: var(--shadow-sm); font-size: 15px; font-weight: 700;">
            “Failure should degrade features — not corrupt business state.”
          </div>

          <!-- 6 Short Principles -->
          <div class="feature-card" style="padding: 10px 14px; gap: 6px;">
            <ul class="content-list" style="gap: 6px; border-left: 2px solid var(--line-green); padding-left: 12px;">
              <li style="font-size: 13px;"><strong>PostgreSQL remains authoritative:</strong> Trạng thái nghiệp vụ luôn được bảo vệ bởi ACID database.</li>
              <li style="font-size: 13px;"><strong>SSE chỉ là invalidation hint:</strong> Client nhận event để kích hoạt refetch, không tin cậy payload thô.</li>
              <li style="font-size: 13px;"><strong>REST polling vẫn là fallback:</strong> Nếu SSE gián đoạn, client tự động chuyển sang polling chu kỳ ngắn.</li>
              <li style="font-size: 13px;"><strong>LINE failure không rollback queue state:</strong> Lỗi kết nối 3rd-party không làm đứt gãy luồng vận hành tại quầy.</li>
              <li style="font-size: 13px;"><strong>Browser không thể tự khai báo payment = paid:</strong> Xác thực thanh toán bắt buộc qua server verification.</li>
              <li style="font-size: 13px;"><strong>CI / E2E / deployment / backup checks:</strong> Bộ test tự động, kiểm tra migration và xác thực backup/restore.</li>
            </ul>
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/guide/40-staff-workspace-desktop.png" alt="Staff Workspace vận hành hàng đợi">
            </div>
          </div>
        </div>
      `,
      notes: `
        Em cũng cố gắng thiết kế failure mode thay vì chỉ happy path.<br><br>
        Realtime dùng SSE, nhưng event không trực tiếp trở thành business state. Nó chỉ báo rằng dữ liệu thay đổi rồi client refetch REST snapshot.<br><br>
        Nếu SSE mất thì polling vẫn là recovery path.<br><br>
        Payment cũng theo nguyên tắc tương tự: browser return hoặc local storage không có quyền tự nói rằng transaction đã paid.<br><br>
        Project có CI, browser E2E, migration checks, deployment, backup/restore rehearsal và horizontal validation topology.<br><br>
        Những thứ này chủ yếu để em luyện cách nghĩ về failure và operations, không phải để claim rằng project đã có production-scale capacity.<br><br>
        <strong>Nhưng thay vì nói thêm về architecture, em nghĩ cách tốt nhất là mọi người dùng thử trực tiếp.</strong>
      `
    },
    {
      id: "slide-7",
      tag: "Slide 07 — Live Demo",
      headerBadge: "LIVE DEMO",
      title: "SCAN TO JOIN",
      subtitle: "Quét mã bằng camera hoặc LINE để tham gia hàng đợi thực tế ngay trên điện thoại",
      bodyHtml: `
        <!-- Giant Clean QR Card (Left Side) -->
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #ffffff; border: 2px solid var(--line-green); border-radius: 22px; padding: 14px 20px; box-shadow: var(--shadow-md);">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 6px;">
            <span style="font-weight: 800; font-size: 13px; color: var(--brand-deep); text-transform: uppercase; letter-spacing: 0.04em;">📍 Tokyo Flagship Branch</span>
            <span class="badge badge-green" style="font-size: 10px;">Queue Open</span>
          </div>
          
          <!-- Crisp High-Contrast Vector QR SVG -->
          <div style="background: #ffffff; padding: 6px; border-radius: 14px; width: 270px; height: 270px; display: flex; align-items: center; justify-content: center;">
            <img src="../images/guide/live-demo-qr.svg" alt="Live Demo QR Code" style="width: 100%; height: 100%; object-fit: contain;">
          </div>

          <!-- Branch URL & Identifier -->
          <div style="margin-top: 6px; font-family: var(--font-family-code); font-size: 11px; font-weight: 700; color: var(--brand-ink); background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 4px 10px;">
            https://smartqueue.io.vn/qr/demo-queue-lab-2026
          </div>
        </div>

        <!-- 5 Steps & Live Instructions (Right Side) -->
        <div class="content-text" style="gap: 10px;">
          <div class="feature-card" style="border-left: 4px solid var(--line-green); padding: 12px 16px; gap: 6px;">
            <div style="font-weight: 800; font-size: 13px; color: var(--brand-ink); text-transform: uppercase; letter-spacing: 0.04em;">
              5 Bước trải nghiệm Live Flow
            </div>
            <ol style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--ink-soft); line-height: 1.4;">
              <li><strong>1. Scan QR:</strong> Dùng Camera điện thoại hoặc Quét mã LINE</li>
              <li><strong>2. Open in LINE:</strong> Mở ứng dụng LIFF và đăng nhập</li>
              <li><strong>3. Select Queue:</strong> Chọn Hàng đợi và sản phẩm/dịch vụ demo</li>
              <li><strong>4. Submit Booking:</strong> Xác nhận đặt lịch và nhận Ticket điện tử</li>
              <li><strong>5. Keep Ticket Open:</strong> Giữ màn hình để nhận thông báo từ Staff</li>
            </ol>
          </div>

          <!-- Flow badge -->
          <div style="background: #0b4b2d; color: #86efac; border-radius: 10px; padding: 8px 12px; font-size: 11px; font-weight: 700; text-align: center; font-family: var(--font-family-code);">
            QR → LIFF → Booking → Staff → LINE Notification
          </div>

          <!-- Real money disclaimer -->
          <div style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: 10px; padding: 7px 12px; font-size: 11px; color: #991b1b; text-align: center; font-weight: 600;">
            💡 Demo không thực hiện thanh toán tiền thật. (No real money charged)
          </div>
        </div>
      `,
      notes: `
        Phần còn lại em không muốn chỉ mô tả bằng slide nữa.<br><br>
        Mọi người có thể lấy điện thoại ra và quét QR trên màn hình.<br><br>
        Đây là environment đang deploy cho buổi demo. Flow sẽ đi qua LINE / LIFF, backend, PostgreSQL và notification worker như phần em vừa trình bày.<br><br>
        Mọi người chọn một queue, chọn một item rồi tạo booking.<br><br>
        Không có tiền thật được charge.<br><br>
        Sau khi thấy ticket, mọi người cứ giữ ticket mở. Em sẽ chuyển sang phía Staff để xử lý chính những ticket vừa được tạo.
      `
    }
  ]
};
