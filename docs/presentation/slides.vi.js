/* LINE Smart Queue Assistant — Presentation Configuration (Tiếng Việt) */

window.PRESENTATION_CONFIG_VI = {
  meta: {
    lang: "vi",
    title: "LINE Smart Queue Assistant — Bài Thuyết Trình",
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
    notesEmpty: "Slide này chưa có speaker notes.",
    footprintsLabel: "Số trang slide"
  },
  journeyModal: {
    title: "📱 Luồng trải nghiệm LINE LIFF (1 - 4 bước)",
    closeBtn: "✕ Đóng (Esc)",
    steps: [
      { title: "Bước 1: Quét QR & Chọn Queue", img: "../images/slide/30-customer-queue-selection-mobile.png" },
      { title: "Bước 2: Chọn Dịch vụ / Menu", img: "../images/slide/30-customer-queue-selection-mobile.png" },
      { title: "Bước 3: Xác nhận & Đặt chỗ", img: "../images/slide/30-customer-queue-selection-mobile.png" },
      { title: "Bước 4: Nhận Ticket & Theo dõi ETA", img: "../images/slide/30-customer-queue-selection-mobile.png" }
    ]
  },
  scopeGallery: {
    title: "🖥️ Bộ ảnh giao diện & Quản trị hệ thống",
    closeBtn: "✕ Đóng (Esc)",
    images: [
      { title: "1. Trang chủ hệ thống (Landing Page)", img: "../images/slide/01-landing-page.png" },
      { title: "2. Danh mục sản phẩm & Dịch vụ (Owner Catalog)", img: "../images/slide/13-owner-product-catalog.png" },
      { title: "3. Quản lý Chi nhánh & Hàng đợi (Branch Manager)", img: "../images/slide/19-branch-manager-dashboard.png" },
      { title: "4. Quản lý Tồn kho & Đặt trước (Stock Management)", img: "../images/slide/25-branch-stock.png" },
      { title: "5. Không gian làm việc của nhân viên (Staff Workspace)", img: "../images/slide/40-staff-workspace-desktop.png" }
    ]
  },
  slides: [
    {
      id: "slide-1",
      tag: "Trang bìa",
      headerBadge: "LINE Ecosystem",
      title: "LINE Smart Queue Assistant",
      subtitle: "Trải nghiệm xếp hàng thông minh & số hóa vận hành dịch vụ qua LINE",
      bodyHtml: `
        <div class="content-text" style="gap: 14px;">
          <div style="background: linear-gradient(135deg, rgb(233 250 240 / 0.95), rgb(255 255 255 / 0.8)); border: 1.5px solid var(--line-green); border-radius: 16px; padding: 16px 20px; box-shadow: var(--shadow-sm);">
            <div style="display: inline-block; padding: 2px 8px; border-radius: 6px; background: var(--line-green); color: #062b19; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">
              System Design &amp; Live Demo
            </div>
            <div style="font-weight: 750; font-size: 17px; color: var(--brand-deep); line-height: 1.4;">
              “Từ việc đứng chờ tại quầy → Trải nghiệm hàng đợi số hóa minh bạch, chính xác và tức thì.”
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <div class="feature-card" style="padding: 12px 14px; gap: 4px; border-top: 3px solid var(--line-green);">
              <div style="font-size: 16px;">📱</div>
              <h3 style="font-size: 13px; color: var(--brand-ink);">LINE-First Flow</h3>
              <p style="font-size: 11px; line-height: 1.35; color: var(--text-muted);">Quét QR mở ngay LIFF, không cần cài đặt thêm ứng dụng ngoài.</p>
            </div>
            <div class="feature-card" style="padding: 12px 14px; gap: 4px; border-top: 3px solid #3B82F6;">
              <div style="font-size: 16px;">🐘</div>
              <h3 style="font-size: 13px; color: #1e3a8a;">PostgreSQL ACID</h3>
              <p style="font-size: 11px; line-height: 1.35; color: var(--text-muted);">Authoritative state, Durable Outbox &amp; chống overbooking.</p>
            </div>
            <div class="feature-card" style="padding: 12px 14px; gap: 4px; border-top: 3px solid #8B5CF6;">
              <div style="font-size: 16px;">🔔</div>
              <h3 style="font-size: 13px; color: #4c1d95;">Reliable Delivery</h3>
              <p style="font-size: 11px; line-height: 1.35; color: var(--text-muted);">Thông báo gọi số, phục vụ &amp; hoàn tất tự động qua Messaging API.</p>
            </div>
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/slide/01-landing-page.png" alt="Trang chủ hệ thống">
            </div>
          </div>
        </div>
      `,
      notes: `
        Xin chào mọi người. Hôm nay em xin trình bày dự án <strong>LINE Smart Queue Assistant</strong>.<br><br>
        Đây là một hệ thống xếp hàng và quản lý dịch vụ LINE-first, kết nối liền mạch từ lúc khách quét QR tại quầy, đặt dịch vụ qua LINE LIFF, cho đến khi nhân viên gọi số và hệ thống gửi tin nhắn thông báo tự động.<br><br>
        Buổi trình bày hôm nay gồm 2 phần: 7 phút đầu em sẽ tóm tắt bài toán, luồng hoạt động và kiến trúc kỹ thuật phía sau; sau đó là 8 phút live demo trực tiếp, mọi người có thể quét QR thật bằng điện thoại để trải nghiệm luồng end-to-end.
      `
    },
    {
      id: "slide-2",
      tag: "Vấn đề thực tế",
      headerBadge: "The Problem",
      title: "LINE Smart Queue Assistant",
      subtitle: "Từ việc đứng chờ tại quầy → trải nghiệm hàng đợi số hóa qua LINE",
      bodyHtml: `
        <div class="content-text" style="gap: 14px;">
          <div class="feature-card" style="border-left: 4px solid #EF4444; padding: 14px 18px;">
            <h3 style="color: #DC2626; font-size: 15px; margin-bottom: 2px;">🚶‍♂️ Khách phải đứng gần quầy để chờ</h3>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.45;">Bị ràng buộc vị trí tại sảnh chờ, không thể tự do di chuyển hay tranh thủ làm việc khác.</p>
          </div>
          <div class="feature-card" style="border-left: 4px solid #F59E0B; padding: 14px 18px;">
            <h3 style="color: #D97706; font-size: 15px; margin-bottom: 2px;">⏳ Không biết chính xác còn bao lâu tới lượt</h3>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.45;">Thiếu thông tin dự báo thời gian chờ (ETA) và số lượng người đang xếp hàng phía trước.</p>
          </div>
          <div class="feature-card" style="border-left: 4px solid #3B82F6; padding: 14px 18px;">
            <h3 style="color: #2563EB; font-size: 15px; margin-bottom: 2px;">📢 Staff phải liên tục gọi khách thủ công</h3>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.45;">Tốn nhân lực hô tên/số thứ tự, dễ bỏ sót lượt và gây áp lực vận hành lớn cho cửa hàng.</p>
          </div>
          <div style="background: linear-gradient(135deg, rgb(233 250 240 / 0.95), rgb(255 255 255 / 0.8)); border: 1.5px solid var(--line-green); border-radius: 14px; padding: 12px 18px; text-align: center; font-weight: 700; font-size: 15px; color: var(--brand-deep); box-shadow: var(--shadow-sm);">
            “Khách không cần đứng chờ — họ cần biết khi nào quay lại.”
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/slide/02-japanese-waiting-context.png" alt="Bối cảnh hàng đợi">
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
      id: "slide-3",
      tag: "Hành trình khách hàng",
      headerBadge: "End-to-End Flow",
      title: "Một hành trình khách hàng rất ngắn",
      subtitle: "Trải nghiệm LINE-first tinh gọn, kết nối trực tiếp khách hàng và nhân viên vận hành",
      bodyHtml: `
        <div class="content-text" style="gap: 14px;">
          <!-- Main visual flow banner (compact single line) -->
          <div style="display: flex; align-items: center; justify-content: space-between; background: #0b4b2d; color: white; padding: 9px 14px; border-radius: 12px; font-weight: 700; font-size: 11px; white-space: nowrap; letter-spacing: 0.01em;">
            <span>📱 QR</span>
            <span style="color: #4ade80;">→</span>
            <span>💬 LINE/LIFF</span>
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
          <div class="phone-mockup interactive-trigger" id="journey-phone-trigger" title="Bấm để phóng to luồng ảnh">
            <div class="phone-header-notch"></div>
            <div class="phone-screen">
              <img src="../images/slide/30-customer-queue-selection-mobile.png" alt="Màn hình chọn queue trên LINE">
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
      id: "slide-4",
      tag: "Phạm vi sản phẩm",
      headerBadge: "Domain Scope",
      title: "Không chỉ là một màn hình lấy số",
      subtitle: "Một customer flow đơn giản kéo theo nhiều domain phía sau",
      bodyHtml: `
        <div class="content-text" style="gap: 12px;">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">👤 LINE / LIFF Identity</h3>
              <p style="font-size: 11px; line-height: 1.35;">Xác thực danh tính &amp; mapping profile</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">🏢 Multi-tenant Org</h3>
              <p style="font-size: 11px; line-height: 1.35;">Phân tách dữ liệu doanh nghiệp an toàn</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">📍 Branch &amp; Multi-Queue</h3>
              <p style="font-size: 11px; line-height: 1.35;">1 QR chi nhánh, nhiều hàng đợi song song</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">📦 Orders &amp; Booking</h3>
              <p style="font-size: 11px; line-height: 1.35;">Gắn kết Ticket với giỏ hàng &amp; dịch vụ</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">🏷️ Inventory &amp; Stock</h3>
              <p style="font-size: 11px; line-height: 1.35;">Khóa &amp; reserve finite stock trong transaction</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">💳 Demo Payment</h3>
              <p style="font-size: 11px; line-height: 1.35;">Mô phỏng checkout, webhook &amp; refund</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">🧑‍💼 Staff Operations</h3>
              <p style="font-size: 11px; line-height: 1.35;">Call / Serve / Complete scoped theo Queue</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">💬 LINE Messaging</h3>
              <p style="font-size: 11px; line-height: 1.35;">Tự động gửi push notifications &amp; rich template</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">⚡ Realtime Updates</h3>
              <p style="font-size: 11px; line-height: 1.35;">SSE invalidation kết hợp REST snapshot</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">🌐 JA / VI / EN</h3>
              <p style="font-size: 11px; line-height: 1.35;">Đa ngôn ngữ xuyên suốt các giao diện</p>
            </div>
          </div>
          <div style="background: rgba(254, 243, 199, 0.85); border: 1px solid #f59e0b; border-radius: 10px; padding: 7px 12px; font-size: 11px; color: #92400e; display: flex; align-items: center; gap: 8px;">
            <span style="font-weight: 700;">⚠️ Lưu ý:</span>
            <span><strong>Production-oriented demo</strong> — không phải real-money production platform.</span>
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame interactive-trigger" id="scope-gallery-trigger" title="Bấm để xem 5 ảnh giao diện quản trị">
            <div class="browser-content">
              <img src="../images/slide/01-landing-page.png" alt="Tổng quan hệ thống">
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
      id: "slide-5",
      tag: "Kiến trúc hệ thống",
      headerBadge: "System Architecture",
      title: "Simple product flow, serious backend boundaries",
      subtitle: "TypeScript Modular Monolith kết hợp PostgreSQL Authoritative State và Asynchronous Outbox Delivery",
      bodyHtml: `
        <div style="display: grid; grid-template-columns: 1.45fr 1fr; gap: 18px; width: 100%; align-items: center;">
          
          <!-- Left: Structure & Pipeline Cards -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <!-- Tier 1: Client -->
            <div class="feature-card" style="padding: 10px 14px; gap: 2px; border-left: 4px solid #38bdf8;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="color: var(--brand-ink); font-size: 13px;">📱 💻 Client Tier (React SPA)</strong>
                <span class="badge" style="font-size: 9px;">Client Tier</span>
              </div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">LINE LIFF (Mobile) ＋ Web App (Desktop)</p>
            </div>

            <!-- Connector 1 -->
            <div style="text-align: center; color: var(--brand-deep); font-size: 10px; font-family: var(--font-family-code); font-weight: 700;">
              ↓ HTTPS (REST APIs ＋ Server-Sent Events / SSE) ↓
            </div>

            <!-- Tier 2: Monolith API -->
            <div class="feature-card" style="padding: 10px 14px; gap: 2px; border-left: 4px solid var(--line-green);">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="color: var(--brand-deep); font-size: 13px;">⚙️ Express API (Modular Monolith)</strong>
                <span class="badge badge-green" style="font-size: 9px;">Backend Core</span>
              </div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">ACID Transaction • Auth Guards • Durable Outbox Writer</p>
            </div>

            <!-- Connector 2 -->
            <div style="text-align: center; color: var(--brand-deep); font-size: 10px; font-family: var(--font-family-code); font-weight: 700;">
              ↓ Commit Database &amp; Outbox Intent ｜ Async Dispatch ↓
            </div>

            <!-- Tier 3: Storage & Delivery -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div class="feature-card" style="padding: 9px 12px; gap: 2px; border-left: 3px solid #6366f1;">
                <strong style="color: #3730a3; font-size: 12px;">🐘 PostgreSQL</strong>
                <p style="font-size: 10px; color: #4338ca; line-height: 1.3;">Source of Truth (Queues, Orders, Outbox)</p>
              </div>
              <div class="feature-card" style="padding: 9px 12px; gap: 2px; border-left: 3px solid #10b981;">
                <strong style="color: #065f46; font-size: 12px;">⚡ LINE Worker</strong>
                <p style="font-size: 10px; color: #047857; line-height: 1.3;">BullMQ ➔ LINE Messaging API</p>
              </div>
            </div>
          </div>

          <!-- Right: Architecture Geometric Shape Diagram & Principles -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <!-- Shape Illustration Block -->
            <div style="width: 100%; height: 110px; background: #ffffff; border: 1px solid #dce8df; border-radius: 12px; padding: 4px; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">
              <img src="../images/slide/05-arch-shapes.svg" alt="Architecture Diagram" style="width: 100%; height: 100%; object-fit: contain;">
            </div>

            <!-- Redis Coordination Card -->
            <div class="feature-card" style="padding: 9px 12px; gap: 2px; border-left: 3px solid #ef4444;">
              <strong style="color: #b91c1c; font-size: 12px;">🔴 Redis Coordination Layer</strong>
              <p style="font-size: 10px; color: var(--ink-soft); line-height: 1.35;">BullMQ Job Queue • SSE Pub/Sub • Short Cache</p>
            </div>

            <!-- Principle 1 -->
            <div style="background: #eaf8ef; border: 1px solid #bbf7d0; border-radius: 10px; padding: 8px 12px;">
              <div style="font-size: 9px; font-weight: 800; color: #08713d; text-transform: uppercase;">Source of Truth</div>
              <div style="font-size: 12px; font-weight: 700; color: var(--brand-ink); margin-top: 1px;">PostgreSQL = Dữ liệu nghiệp vụ tin cậy</div>
            </div>

            <!-- Principle 2 -->
            <div style="background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 10px; padding: 8px 12px;">
              <div style="font-size: 9px; font-weight: 800; color: #475569; text-transform: uppercase;">Coordination Layer</div>
              <div style="font-size: 12px; font-weight: 700; color: #1e293b; margin-top: 1px;">Redis / BullMQ / SSE = Điều phối &amp; gửi async</div>
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
      id: "slide-6",
      tag: "3 Bài toán kỹ thuật",
      headerBadge: "Core Engineering",
      title: "3 bài toán kỹ thuật em tập trung nhất",
      subtitle: "Đảm bảo tính toàn vẹn dữ liệu, ranh giới phân quyền và độ tin cậy khi gửi tin nhắn",
      bodyHtml: `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; width: 100%;">
          
          <!-- Card 1: Transactional Correctness -->
          <div class="feature-card" style="border-top: 4px solid var(--line-green); padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge badge-green" style="font-size: 11px;">Challenge 01</span>
                <span style="font-size: 16px;">🔒</span>
              </div>
              <h3 style="font-size: 14px; color: var(--brand-ink); line-height: 1.3;">1. Transactional Correctness</h3>
              <div style="font-size: 11px; font-weight: 700; color: var(--brand-deep);">Order + Ticket + Stock + Payment</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.4;">
                Gom nhóm quá trình cấp Ticket, Order Items và Stock Reservation trong một Atomic Transaction duy nhất.
              </p>
            </div>

            <!-- Shape Illustration 1 -->
            <div style="width: 100%; height: 76px; display: flex; align-items: center; justify-content: center;">
              <img src="../images/slide/06-shape-transaction.svg" alt="Transactional Correctness" style="width: 100%; height: 100%; object-fit: contain;">
            </div>

            <div style="background: rgba(6, 199, 85, 0.08); border: 1px dashed rgba(6, 199, 85, 0.3); border-radius: 8px; padding: 5px 8px; font-size: 10px; font-family: var(--font-family-code); color: var(--brand-ink); text-align: center;">
              Atomic Transaction • Row Locks • Constraints
            </div>
          </div>

          <!-- Card 2: Authorization Boundaries -->
          <div class="feature-card" style="border-top: 4px solid #3B82F6; padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge" style="background: #e0f2fe; color: #0369a1; border-color: rgba(3,105,161,0.2); font-size: 11px;">Challenge 02</span>
                <span style="font-size: 16px;">🛡️</span>
              </div>
              <h3 style="font-size: 14px; color: #1e3a8a; line-height: 1.3;">2. Authorization Boundaries</h3>
              <div style="font-size: 11px; font-weight: 700; color: #1d4ed8;">Org ➔ Branch ➔ Queue Scope</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.4;">
                Backend độc lập derive quyền từ session identity và database. Staff chỉ thao tác đúng Queue được gán.
              </p>
            </div>

            <!-- Shape Illustration 2 -->
            <div style="width: 100%; height: 76px; display: flex; align-items: center; justify-content: center;">
              <img src="../images/slide/06-shape-auth.svg" alt="Authorization Boundaries" style="width: 100%; height: 100%; object-fit: contain;">
            </div>

            <div style="background: rgba(59, 130, 246, 0.08); border: 1px dashed rgba(59, 130, 246, 0.3); border-radius: 8px; padding: 5px 8px; font-size: 10px; font-family: var(--font-family-code); color: #1e40af; text-align: center;">
              Browser IDs are selectors, never authority
            </div>
          </div>

          <!-- Card 3: Reliable Async Delivery -->
          <div class="feature-card" style="border-top: 4px solid #8B5CF6; padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge" style="background: #f3e8ff; color: #6b21a8; border-color: rgba(107,33,168,0.2); font-size: 11px;">Challenge 03</span>
                <span style="font-size: 16px;">📬</span>
              </div>
              <h3 style="font-size: 14px; color: #4c1d95; line-height: 1.3;">3. Reliable Async Delivery</h3>
              <div style="font-size: 11px; font-weight: 700; color: #6d28d9;">PostgreSQL Outbox ➔ Worker ➔ LINE</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.4;">
                Tách biệt commit nghiệp vụ và gửi notification. Outbox intent được lưu durable, retry tự động với idempotent key.
              </p>
            </div>

            <!-- Shape Illustration 3 -->
            <div style="width: 100%; height: 76px; display: flex; align-items: center; justify-content: center;">
              <img src="../images/slide/06-shape-outbox.svg" alt="Reliable Async Delivery" style="width: 100%; height: 100%; object-fit: contain;">
            </div>

            <div style="background: rgba(139, 92, 246, 0.08); border: 1px dashed rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 5px 8px; font-size: 10px; font-family: var(--font-family-code); color: #5b21b6; text-align: center;">
              Durable Outbox &amp; Idempotent Event Delivery
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
      id: "slide-7",
      tag: "Độ tin cậy & An toàn",
      headerBadge: "Failure Safety",
      title: "Không chỉ chạy được happy path",
      subtitle: "Thiết kế hệ thống suy thoái êm ái (graceful degradation) khi có sự cố",
      bodyHtml: `
        <div class="content-text" style="gap: 10px;">
          <!-- Core Statement Highlight -->
          <div style="background: linear-gradient(135deg, #0b4b2d, #08713d); color: #ffffff; border-radius: 12px; padding: 10px 16px; box-shadow: var(--shadow-sm); font-size: 14px; font-weight: 750;">
            “Failure should degrade features — not corrupt business state.”
          </div>

          <!-- 6 Spacious Bullet Cards Grid (2 columns x 3 rows) -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">🐘 PostgreSQL (ACID Authority)</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">Trạng thái nghiệp vụ được bảo vệ bởi ACID DB</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">⚡ SSE Invalidation Hint</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">Client nhận event chỉ để kích hoạt REST refetch</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">🔄 REST Polling Fallback</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">Tự động chuyển sang polling khi SSE gián đoạn</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">📬 LINE Failure Isolation</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">Lỗi 3rd-party không rollback queue tại quầy</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">🔒 Server Payment Verification</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">Browser không thể tự khai báo paid thành công</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">🧪 CI / E2E / Migration / Backup</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">Bộ test tự động và diễn tập phục hồi dữ liệu</p>
            </div>
          </div>
        </div>
        <div class="media-container" style="flex-direction: column; align-items: center;">
          <div class="browser-frame" style="height: 350px;">
            <div class="browser-content">
              <img src="../images/slide/07-reliability-monitoring.png" alt="Staff Workspace vận hành hàng đợi">
            </div>
          </div>
          <div style="margin-top: 8px; font-size: 11px; color: var(--text-muted); text-align: center;">
            ※ Giao diện vận hành với cơ chế realtime SSE, fallback polling và cách ly lỗi
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
      id: "slide-8",
      tag: "Live Demo",
      headerBadge: "LIVE DEMO",
      title: "SCAN TO JOIN",
      subtitle: "Quét mã bằng camera hoặc LINE để tham gia hàng đợi thực tế ngay trên điện thoại",
      bodyHtml: `
        <!-- Giant Clean QR Card (Left Side) -->
        <div class="interactive-trigger" id="qr-card-trigger" title="Bấm để phóng to mã QR toàn màn hình" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #ffffff; border: 2px solid var(--line-green); border-radius: 22px; padding: 14px 20px; box-shadow: var(--shadow-md); cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 6px;">
            <span style="font-weight: 800; font-size: 13px; color: #08713d; text-transform: uppercase; letter-spacing: 0.04em;">📍 Tokyo Flagship Branch</span>
            <span class="badge badge-green" style="font-size: 10px;">🔍 Phóng to QR</span>
          </div>
          
          <!-- Crisp High-Contrast Vector QR SVG -->
          <div style="background: #ffffff; padding: 6px; border-radius: 14px; width: 270px; height: 270px; display: flex; align-items: center; justify-content: center;">
            <img src="../images/slide/live-demo-qr.svg" alt="Live Demo QR Code" style="width: 100%; height: 100%; object-fit: contain;">
          </div>

          <!-- Branch URL & Identifier -->
          <div style="margin-top: 6px; font-family: var(--font-family-code); font-size: 10px; font-weight: 700; color: #065f46; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 4px 10px; word-break: break-all; text-align: center;">
            https://liff.line.me/2010516188-KAcYkLTh/qr/70f7e730ae944f1635b18a51c5408b563969
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
