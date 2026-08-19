/* LINE Smart Queue Assistant — Presentation Configuration (日本語) */

window.PRESENTATION_CONFIG_JA = {
  meta: {
    lang: "ja",
    title: "LINE Smart Queue Assistant — プレゼンテーション",
    controls: {
      dashboardBtn: "🏠 ダッシュボード",
      prevBtnTitle: "前のスライド (←)",
      nextBtnTitle: "次のスライド (→)",
      notesBtnTitle: "発表者ノート (P)",
      fullscreenBtnTitle: "全画面表示 (F)",
      switchLangBtn: "🇻🇳 VI",
      switchLangTarget: "vi",
      switchLangTitle: "ベトナム語に切り替え"
    },
    notesDrawerTitle: "発表者ノート",
    notesEmpty: "このスライドには発表者ノートがありません。",
    footprintsLabel: "スライド番号"
  },
  journeyModal: {
    title: "📱 LINE LIFF 操作フロー (1〜4画面)",
    closeBtn: "✕ 閉じる (Esc)",
    steps: [
      { title: "ステップ1: QR読取・商品選択", img: "../images/slide/Quet-QR-Chon-San-Pham.png" },
      { title: "ステップ2: 受付・予約確定", img: "../images/slide/Xac-Nhan-Dat-Cho.png" },
      { title: "ステップ3: LINE呼出通知", img: "../images/slide/Nhan-thong-bao-tren-line.png" },
      { title: "ステップ4: 注文・対応完了", img: "../images/slide/Hoan-thanh.png" }
    ]
  },
  scopeGallery: {
    title: "🖥️ 管理画面・運用UIギャラリー",
    closeBtn: "✕ 閉じる (Esc)",
    images: [
      { title: "1. オーナー管理画面", img: "../images/slide/owner-organization-dashboard.png" },
      { title: "2. 商品・メニューカタログ設定 (Owner Catalog)", img: "../images/slide/13-owner-product-catalog.png" },
      { title: "3. 支店・キュー管理ダッシュボード (Branch Manager)", img: "../images/slide/19-branch-manager-dashboard.png" },
      { title: "4. 在庫・引当管理 (Stock Management)", img: "../images/slide/25-branch-stock.png" },
      { title: "5. 店舗スタッフ受付ワークスペース (Staff Workspace)", img: "../images/slide/40-staff-workspace-desktop.png" }
    ]
  },
  slides: [
    {
      id: "slide-1",
      tag: "表紙",
      headerBadge: "LINE エコシステム",
      title: "LINE Smart Queue Assistant",
      subtitle: "LINE連携スマート順番待ち＆現場運用プラットフォーム",
      bodyHtml: `
        <div class="content-text" style="gap: 12px;">
          <!-- Dedicated Website Link Card (Separated) -->
          <div style="display: inline-flex; align-items: center; background: #ffffff; border: 1.5px solid #c2eed3; border-radius: 999px; padding: 6px 16px; box-shadow: 0 4px 14px rgba(6,199,85,0.08); font-family: var(--font-family-code); font-size: 13px; font-weight: 700; width: fit-content;">
            <span style="color: #475569; margin-right: 6px;">🌐 Website:</span>
            <a href="https://smartqueue.io.vn/" target="_blank" style="color: #08713d; text-decoration: underline; letter-spacing: 0.01em;">https://smartqueue.io.vn/</a>
          </div>

          <!-- System Design & Live Demo Card -->
          <div style="background: linear-gradient(135deg, rgb(233 250 240 / 0.95), rgb(255 255 255 / 0.8)); border: 1.5px solid var(--line-green); border-radius: 16px; padding: 14px 18px; box-shadow: var(--shadow-sm);">
            <div style="display: inline-block; padding: 2px 8px; border-radius: 6px; background: var(--line-green); color: #062b19; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px;">
              System Design &amp; Live Demo
            </div>
            <div style="font-weight: 750; font-size: 17px; color: var(--brand-deep); line-height: 1.4;">
              “受付付近での待機から、LINEによる見える・離れられるデジタル順番待ちへ”
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <div class="feature-card" style="padding: 12px 14px; gap: 4px; border-top: 3px solid var(--line-green);">
              <div style="font-size: 16px;">📱</div>
              <h3 style="font-size: 13px; color: var(--brand-ink);">LINE完結の受付体験</h3>
              <p style="font-size: 11px; line-height: 1.35;">支店QRスキャンでLIFF即時起動。専用アプリ不要。</p>
            </div>
            <div class="feature-card" style="padding: 12px 14px; gap: 4px; border-top: 3px solid #3B82F6;">
              <div style="font-size: 16px;">🐘</div>
              <h3 style="font-size: 13px; color: #1e3a8a;">PostgreSQL (確定データ)</h3>
              <p style="font-size: 11px; line-height: 1.35;">ACIDトランザクション＆Outboxで二重受付を完全防止。</p>
            </div>
            <div class="feature-card" style="padding: 12px 14px; gap: 4px; border-top: 3px solid #8B5CF6;">
              <div style="font-size: 16px;">🔔</div>
              <h3 style="font-size: 13px; color: #4c1d95;">高信頼プッシュ配信</h3>
              <p style="font-size: 11px; line-height: 1.35;">呼出・対応・完了時にMessaging APIでリアルタイム通知。</p>
            </div>
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/slide/01-landing-page.png" alt="公開トップページ">
            </div>
          </div>
        </div>
      `,
      notes: `
        皆様、本日は <strong>LINE Smart Queue Assistant</strong> のプレゼンテーションをご覧いただきありがとうございます。<br><br>
        本プロダクトは、飲食・サロン・クリニック等の対面店舗において、受付・予約・注文・呼出通知をLINE上で一貫して提供するスマート順番待ちプラットフォームです。<br><br>
        スライド上のリンク <code>https://smartqueue.io.vn/</code> から実際の公開Webサイトもご確認いただけます。<br><br>
        本日の発表は合計15分、2部構成で進行します。<br>
        ・<strong>前半7分:</strong> 課題背景、UX設計、バックエンドの技術アーキテクチャ解説<br>
        ・<strong>後半8分:</strong> 会場の皆様にお手元のスマートフォンで実機QRコードを読み取っていただく参加型ライブデモ
      `
    },
    {
      id: "slide-2",
      tag: "課題と背景",
      headerBadge: "現状の課題",
      title: "LINE Smart Queue Assistant",
      subtitle: "受付付近での待機から、LINEによるデジタル順番待ち体験へ",
      bodyHtml: `
        <div class="content-text" style="gap: 14px;">
          <div class="feature-card" style="border-left: 4px solid #EF4444; padding: 14px 18px;">
            <h3 style="color: #DC2626; font-size: 15px; margin-bottom: 2px;">🚶‍♂️ 受付付近での拘束</h3>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.45;">発券後に待合エリア待機を余儀なくされ、自由な行動や買い回りが制限される。</p>
          </div>
          <div class="feature-card" style="border-left: 4px solid #F59E0B; padding: 14px 18px;">
            <h3 style="color: #D97706; font-size: 15px; margin-bottom: 2px;">⏳ 待ち時間・順序の不透明さ</h3>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.45;">目安待ち時間（ETA）や前方人数の情報がなく、呼出し時期が読めない不安。</p>
          </div>
          <div class="feature-card" style="border-left: 4px solid #3B82F6; padding: 14px 18px;">
            <h3 style="color: #2563EB; font-size: 15px; margin-bottom: 2px;">📢 手動・口頭呼出しの負荷</h3>
            <p style="font-size: 13px; color: var(--ink-soft); line-height: 1.45;">スタッフの呼出し負担、聞き逃しリスク、受付エリアの混雑と運用ストレス。</p>
          </div>
          <div style="background: linear-gradient(135deg, rgb(233 250 240 / 0.95), rgb(255 255 255 / 0.8)); border: 1.5px solid var(--line-green); border-radius: 14px; padding: 12px 18px; text-align: center; font-weight: 700; font-size: 15px; color: var(--brand-deep); box-shadow: var(--shadow-sm);">
            “お客様が知りたいのは「順番」ではなく「いつ戻ればいいか」”
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/slide/02-japanese-waiting-context.png" alt="店舗での順番待ち課題">
            </div>
          </div>
        </div>
      `,
      notes: `
        今回のプロジェクトは、身近な店舗やクリニック等で誰もが経験する「順番待ち」の課題から着想しました。<br><br>
        本質的な問題は、待ち時間の長さそのもの以上に<strong>「あとどれくらいで呼ばれるか分からない」という不透明さ</strong>と、<strong>「受付の前から離れられない拘束感」</strong>にあります。<br><br>
        店舗側にとっても、紙の発券機管理や大声での口頭呼出し、不在客の対応など大きな運用負荷がかかっています。<br><br>
        そこで、<strong>「お客様は店頭で待つ必要はなく、自分の順番の進捗とLINE呼出通知さえ受け取れれば自由に行動できる」</strong>という発想でシステムを構築しました。
      `
    },
    {
      id: "slide-3",
      tag: "カスタマージャーニー",
      headerBadge: "エンドツーエンドフロー",
      title: "極めて短い顧客ジャーニー",
      subtitle: "無駄を排したLINE-first受付と現場オペレーションの直結",
      bodyHtml: `
        <div class="content-text" style="gap: 14px;">
          <!-- Main visual flow banner (compact single line) -->
          <div style="display: flex; align-items: center; justify-content: space-between; background: #0b4b2d; color: white; padding: 9px 14px; border-radius: 12px; font-weight: 700; font-size: 11px; white-space: nowrap; letter-spacing: 0.01em;">
            <span>📱 QR</span>
            <span style="color: #4ade80;">→</span>
            <span>💬 LINE/LIFF</span>
            <span style="color: #4ade80;">→</span>
            <span>📋 キュー選択</span>
            <span style="color: #4ade80;">→</span>
            <span>🛍️ 注文</span>
            <span style="color: #4ade80;">→</span>
            <span>🎟️ チケット</span>
            <span style="color: #4ade80;">→</span>
            <span>🔔 LINE通知</span>
          </div>

          <!-- 2 Swimlanes -->
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <!-- Lane 1: Customer -->
            <div class="feature-card" style="border-left: 4px solid var(--line-green); padding: 12px 16px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span class="badge badge-green" style="font-size: 11px;">顧客レーン (Customer)</span>
                <strong style="color: var(--brand-ink); font-size: 14px;">LINE上の顧客体験</strong>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">1. QR・商品選択</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">支店QR・商品選択</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">2. 受付・予約確定</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">発券・注文確定</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">3. LINE呼出通知</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Pushメッセージ</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">4. 注文完了</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">サービス完了</div>
                </div>
              </div>
            </div>

            <!-- Lane 2: Staff -->
            <div class="feature-card" style="border-left: 4px solid #3B82F6; padding: 12px 16px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span class="badge" style="background: #e0f2fe; color: #0369a1; border-color: rgba(3,105,161,0.2); font-size: 11px;">店舗レーン (Staff)</span>
                <strong style="color: #0369a1; font-size: 14px;">現場スタッフの受付管理</strong>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">1. 行列確認</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">一覧表示</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">2. 呼出</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">Push通知送信</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">3. 対応中</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">接客・決済</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">4. 完了</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">処理完了</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media-container">
          <div class="phone-mockup interactive-trigger" id="journey-phone-trigger" title="クリックで拡大表示">
            <div class="phone-header-notch"></div>
            <div class="phone-screen">
              <img src="../images/slide/Quet-QR-Chon-San-Pham.png" alt="LINE上でのQR読取・商品選択画面">
            </div>
          </div>
        </div>
      `,
      notes: `
        カスタマージャーニーは徹底的に無駄を省き、4ステップで完結します。<br><br>
        <strong>1. QR読取・商品選択:</strong> 店頭のQRをスキャンするとLINE内でLIFFが瞬時に起動し、稼働中のキューと商品メニューが表示されます。<br>
        <strong>2. 受付・予約確定:</strong> 選択して確定すると、デジタルチケットが即座に発行されます。<br>
        <strong>3. LINE呼出通知:</strong> お客様は画面を閉じても問題なく、前方待ち人数とETAをいつでも確認でき、順番が来るとLINE公式アカウントから呼出メッセージが届きます。<br>
        <strong>4. 注文・対応完了:</strong> スタッフが接客を完了すると、完了通知とお礼メッセージが配信されます。<br><br>
        ※右側のスマートフォン画面をクリックすると、1画面から4画面まで拡大して操作フローを詳細にご覧いただけます。
      `
    },
    {
      id: "slide-4",
      tag: "プロダクトスコープ",
      headerBadge: "ドメインスコープ",
      title: "単なる「発券画面」を超えた設計",
      subtitle: "受付フローを支える10のバックエンドドメイン",
      bodyHtml: `
        <div class="content-text" style="gap: 12px;">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">👤 LINE / LIFF 認証</h3>
              <p style="font-size: 11px; line-height: 1.35;">プロファイル連携・セッション管理</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">🏢 マルチテナント組織</h3>
              <p style="font-size: 11px; line-height: 1.35;">企業ごとの安全なデータ分離</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">📍 支店・マルチキュー</h3>
              <p style="font-size: 11px; line-height: 1.35;">1固定QRで複数キューを並行管理</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">📦 注文・受付連携</h3>
              <p style="font-size: 11px; line-height: 1.35;">チケットと商品注文の不可分統合</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">🏷️ 在庫管理・引当</h3>
              <p style="font-size: 11px; line-height: 1.35;">トランザクション内での確実な在庫ロック</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">💳 決済境界 (Demo)</h3>
              <p style="font-size: 11px; line-height: 1.35;">Webhook・突合・返金フロー検証</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">🧑‍💼 スタッフ受付画面</h3>
              <p style="font-size: 11px; line-height: 1.35;">担当キュー限定の呼出・対応画面</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">💬 LINE メッセージング</h3>
              <p style="font-size: 11px; line-height: 1.35;">自動プッシュ配信＆リッチ通知</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">⚡ リアルタイム更新</h3>
              <p style="font-size: 11px; line-height: 1.35;">SSE無効化通知 ＋ REST再取得</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 13px; color: var(--brand-deep);">🌐 3言語対応 (i18n)</h3>
              <p style="font-size: 11px; line-height: 1.35;">日本語・ベトナム語・英語</p>
            </div>
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame interactive-trigger" id="scope-gallery-trigger" title="クリックで5枚の管理画面を拡大表示">
            <div class="browser-content">
              <img src="../images/slide/owner-organization-dashboard.png" alt="プロダクト管理画面">
            </div>
          </div>
        </div>
      `,
      notes: `
        一見シンプルな受付画面ですが、実際の店舗運用を成立させるにはバックエンドに10の独立したドメインが必要でした。<br><br>
        マルチテナント組織のデータ分離、店舗と複数キュー、商品カタログ、在庫引当、スタッフ権限管理、LINE Messaging API連携、SSEによるリアルタイム更新、そして日・越・英の3言語対応まで実装しています。<br><br>
        なお、本システムは「本番アーキテクチャを実践するためのデモ環境」であり、実際の金銭移動は行われません。ただし決済Webhook、状態突合、返金処理などのアーキテクチャ境界は本番仕様に準拠して設計しています。<br><br>
        ※右側の画面をクリックすると、5つの主要管理画面（カタログ、支店、在庫、スタッフ運用等）をギャラリー形式でご確認いただけます。
      `
    },
    {
      id: "slide-5",
      tag: "システムアーキテクチャ",
      headerBadge: "アーキテクチャ",
      title: "シンプルな顧客体験、堅牢なバックエンド設計",
      subtitle: "TypeScript Modular Monolith、PostgreSQLによる確実な状態管理、非同期Outbox配信",
      bodyHtml: `
        <div style="display: grid; grid-template-columns: 1.45fr 1fr; gap: 18px; width: 100%; align-items: center;">
          
          <!-- Left: Structure & Pipeline Cards -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <!-- Tier 1: Client -->
            <div class="feature-card" style="padding: 10px 14px; gap: 2px; border-left: 4px solid #38bdf8;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="color: var(--brand-ink); font-size: 13px;">📱 💻 クライアント層 (Client Tier)</strong>
                <span class="badge" style="font-size: 9px;">React SPA</span>
              </div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">LINE LIFF (モバイル) ＋ Web (デスクトップ)</p>
            </div>

            <!-- Connector 1 -->
            <div style="text-align: center; color: var(--brand-deep); font-size: 10px; font-family: var(--font-family-code); font-weight: 700;">
              ↓ HTTPS (REST APIs ＋ Server-Sent Events / SSE) ↓
            </div>

            <!-- Tier 2: Monolith API -->
            <div class="feature-card" style="padding: 10px 14px; gap: 2px; border-left: 4px solid var(--line-green);">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <strong style="color: var(--brand-deep); font-size: 13px;">⚙️ バックエンドAPI (Express Monolith)</strong>
                <span class="badge badge-green" style="font-size: 9px;">Core Backend</span>
              </div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">ACIDトランザクション • 認可ガード • Durable Outbox生成</p>
            </div>

            <!-- Connector 2 -->
            <div style="text-align: center; color: var(--brand-deep); font-size: 10px; font-family: var(--font-family-code); font-weight: 700;">
              ↓ DBコミット＆Outbox書込 ｜ 非同期ディスパッチ ↓
            </div>

            <!-- Tier 3: Storage & Delivery -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div class="feature-card" style="padding: 9px 12px; gap: 2px; border-left: 3px solid #6366f1;">
                <strong style="color: #3730a3; font-size: 12px;">🐘 PostgreSQL</strong>
                <p style="font-size: 10px; color: #4338ca; line-height: 1.3;">唯一の確定データ (Queues, Orders, Outbox)</p>
              </div>
              <div class="feature-card" style="padding: 9px 12px; gap: 2px; border-left: 3px solid #10b981;">
                <strong style="color: #065f46; font-size: 12px;">⚡ LINEワーカー</strong>
                <p style="font-size: 10px; color: #047857; line-height: 1.3;">BullMQ ➔ LINE Messaging API</p>
              </div>
            </div>
          </div>

          <!-- Right: Architecture Geometric Shape Diagram & Principles -->
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <!-- Shape Illustration Block -->
            <div style="width: 100%; height: 110px; background: #ffffff; border: 1px solid #dce8df; border-radius: 12px; padding: 4px; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">
              <img src="../images/slide/05-arch-shapes.svg" alt="アーキテクチャ図" style="width: 100%; height: 100%; object-fit: contain;">
            </div>

            <!-- Redis Coordination Card -->
            <div class="feature-card" style="padding: 9px 12px; gap: 2px; border-left: 3px solid #ef4444;">
              <strong style="color: #b91c1c; font-size: 12px;">🔴 Redis 協調レイヤー</strong>
              <p style="font-size: 10px; color: var(--ink-soft); line-height: 1.35;">BullMQジョブキュー • SSE用Pub/Sub • 短期キャッシュ</p>
            </div>

            <!-- Principle 1 -->
            <div style="background: #eaf8ef; border: 1px solid #bbf7d0; border-radius: 10px; padding: 8px 12px;">
              <div style="font-size: 9px; font-weight: 800; color: #08713d; text-transform: uppercase;">Source of Truth</div>
              <div style="font-size: 12px; font-weight: 700; color: var(--brand-ink); margin-top: 1px;">PostgreSQL = 信頼できる唯一の情報源</div>
            </div>

            <!-- Principle 2 -->
            <div style="background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 10px; padding: 8px 12px;">
              <div style="font-size: 9px; font-weight: 800; color: #475569; text-transform: uppercase;">Coordination Layer</div>
              <div style="font-size: 12px; font-weight: 700; color: #1e293b; margin-top: 1px;">Redis / BullMQ / SSE = 協調・非同期配信</div>
            </div>
          </div>

        </div>
      `,
      notes: `
        システムのアーキテクチャには<strong>TypeScriptによるモジュラーモノリス</strong>を採用しています。<br><br>
        フロントエンドはReact SPA、バックエンドはExpress API、そして<strong>PostgreSQLが業務データの唯一の信頼できる情報源（Source of Truth）</strong>です。<br><br>
        個人開発プロジェクトとして運用の複雑性を抑えつつ、ドメインごとのモジュール境界を厳格に保っています。<br><br>
        Redisも導入していますが、業務決定権は持たせず、BullMQジョブキュー、SSE用Pub/Sub、短期キャッシュ等の協調レイヤーに特化させています。<br><br>
        最も重要な技術的特徴は、<strong>LINE通知送信を業務トランザクションから完全に分離している点</strong>です。PostgreSQLへのコミットと同時にDurable Outboxレコードを書き込み、非同期ワーカーがLINE APIへ安全に配信します。これにより、外部APIの通信障害で店舗の受付処理が巻き添えでロールバックされるのを防ぎます。
      `
    },
    {
      id: "slide-6",
      tag: "コアエンジニアリング",
      headerBadge: "技術的挑戦",
      title: "注力した3つの技術課題",
      subtitle: "データ整合性、認可境界、高信頼な非同期配信",
      bodyHtml: `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; width: 100%;">
          
          <!-- Card 1: Transactional Correctness -->
          <div class="feature-card" style="border-top: 4px solid var(--line-green); padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge badge-green" style="font-size: 11px;">技術課題 01</span>
                <span style="font-size: 16px;">🔒</span>
              </div>
              <h3 style="font-size: 14px; color: var(--brand-ink); line-height: 1.3;">1. トランザクション整合性</h3>
              <div style="font-size: 11px; font-weight: 700; color: var(--brand-deep);">発券 ＋ 注文 ＋ 在庫引当 ＋ 決済連動</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.4;">
                チケット発行・注文明細・在庫引当を単一のACIDトランザクション内で不可分に処理。行ロックで過剰引当を防止。
              </p>
            </div>
            
            <!-- Shape Illustration 1 -->
            <div style="width: 100%; height: 76px; display: flex; align-items: center; justify-content: center;">
              <img src="../images/slide/06-shape-transaction.svg" alt="トランザクション図" style="width: 100%; height: 100%; object-fit: contain;">
            </div>

            <div style="background: rgba(6, 199, 85, 0.08); border: 1px dashed rgba(6, 199, 85, 0.3); border-radius: 8px; padding: 5px 8px; font-size: 10px; font-family: var(--font-family-code); color: var(--brand-ink); text-align: center;">
              ACIDトランザクション • 行ロック • 制約
            </div>
          </div>

          <!-- Card 2: Authorization Boundaries -->
          <div class="feature-card" style="border-top: 4px solid #3B82F6; padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge" style="background: #e0f2fe; color: #0369a1; border-color: rgba(3,105,161,0.2); font-size: 11px;">技術課題 02</span>
                <span style="font-size: 16px;">🛡️</span>
              </div>
              <h3 style="font-size: 14px; color: #1e3a8a; line-height: 1.3;">2. 認可境界とスコープ分離</h3>
              <div style="font-size: 11px; font-weight: 700; color: #1d4ed8;">事業者 (Org) ➔ 店舗 ➔ 担当キュー</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.4;">
                ブラウザからのIDを過信せず、認証セッションとDBから権限スコープを再導出。スタッフは担当キューのみ操作。
              </p>
            </div>

            <!-- Shape Illustration 2 -->
            <div style="width: 100%; height: 76px; display: flex; align-items: center; justify-content: center;">
              <img src="../images/slide/06-shape-auth.svg" alt="認可境界図" style="width: 100%; height: 100%; object-fit: contain;">
            </div>

            <div style="background: rgba(59, 130, 246, 0.08); border: 1px dashed rgba(59, 130, 246, 0.3); border-radius: 8px; padding: 5px 8px; font-size: 10px; font-family: var(--font-family-code); color: #1e40af; text-align: center;">
              ブラウザIDは選択肢、権限はサーバー判定
            </div>
          </div>

          <!-- Card 3: Reliable Async Delivery -->
          <div class="feature-card" style="border-top: 4px solid #8B5CF6; padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 8px;">
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="badge" style="background: #f3e8ff; color: #6b21a8; border-color: rgba(107,33,168,0.2); font-size: 11px;">技術課題 03</span>
                <span style="font-size: 16px;">📬</span>
              </div>
              <h3 style="font-size: 14px; color: #4c1d95; line-height: 1.3;">3. 高信頼な非同期配信</h3>
              <div style="font-size: 11px; font-weight: 700; color: #6d28d9;">永続化Outbox ➔ BullMQ ➔ LINE API</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.4;">
                業務確定と通知送信を分離。Outbox意図を永続化し、冪等キーを用いた指数バックオフ付きリトライにより安全に配信。
              </p>
            </div>

            <!-- Shape Illustration 3 -->
            <div style="width: 100%; height: 76px; display: flex; align-items: center; justify-content: center;">
              <img src="../images/slide/06-shape-outbox.svg" alt="非同期配信図" style="width: 100%; height: 100%; object-fit: contain;">
            </div>

            <div style="background: rgba(139, 92, 246, 0.08); border: 1px dashed rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 5px 8px; font-size: 10px; font-family: var(--font-family-code); color: #5b21b6; text-align: center;">
              業務確定後の安全なリトライ＆重複防止
            </div>
          </div>

        </div>
      `,
      notes: `
        エンジニアリング面で特に深く注力した3つの技術課題です。<br><br>
        <strong>1. トランザクション整合性:</strong> 1回の受付操作で、チケット発行、注文作成、在庫引当、決済状態が連動します。行ロックと制約を活用し、単一のACIDトランザクションとして不可分に実行することで、在庫の過剰引当やデータ不整合を完全に防止しています。<br><br>
        <strong>2. 認可境界とスコープ分離:</strong> フロントエンドから送信されたorganizationIdやqueueIdを鵜呑みにせず、サーバー側でJWTセッションとDBから権限スコープを再導出します。オーナー、店長、店舗スタッフで権限を明確に分離し、スタッフは担当キューのみ操作可能としています。<br><br>
        <strong>3. 高信頼な非同期配信:</strong> スタッフの「呼出」操作による業務確定後、Outboxテーブルに通知意図を確実に保存します。BullMQと冪等キー（Idempotency Key）を用いた指数バックオフ付きリトライにより、二重送信を防ぎながら確実にLINE通知を届けます。
      `
    },
    {
      id: "slide-7",
      tag: "障害耐性と信頼性",
      headerBadge: "障害耐性",
      title: "ハッピーパスだけでは終わらせない設計",
      subtitle: "障害発生時にも業務状態を守り、安全に機能縮退（Graceful Degradation）する仕組み",
      bodyHtml: `
        <div class="content-text" style="gap: 10px;">
          <!-- Core Statement Highlight -->
          <div style="background: linear-gradient(135deg, #0b4b2d, #08713d); color: #ffffff; border-radius: 12px; padding: 10px 16px; box-shadow: var(--shadow-sm); font-size: 14px; font-weight: 750;">
            “障害時は機能縮退にとどめ、業務データを絶対に破壊しない”
          </div>

          <!-- 6 Spacious Bullet Cards Grid (2 columns x 3 rows) -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">🐘 PostgreSQL (ACID保証)</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">業務状態の唯一の確定元として厳格保護</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">⚡ SSE リアルタイム無効化</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">更新トリガー通知 ＋ REST最新取得</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">🔄 REST自動フォールバック</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">SSE切断時は短周期ポーリングへ自動移行</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">📬 LINE通信障害の隔離</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">外部APIエラーでキュー受付を止めない設計</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">🔒 サーバー決済検証</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">クライアント単独の決済完了宣言不許可</p>
            </div>
            <div class="feature-card" style="padding: 8px 12px; gap: 2px;">
              <div style="font-weight: 750; font-size: 12px; color: var(--brand-deep);">🧪 自動検証＆リハーサル</div>
              <p style="font-size: 11px; color: var(--ink-soft); line-height: 1.35;">CI / E2E / マイグレーション / 復旧検証</p>
            </div>
          </div>
        </div>
        <div class="media-container" style="flex-direction: column; align-items: center;">
          <div class="browser-frame" style="height: 350px;">
            <div class="browser-content">
              <img src="../images/slide/07-reliability-monitoring.png" alt="スタッフ受付ワークスペース">
            </div>
          </div>
          <div style="margin-top: 8px; font-size: 11px; color: var(--text-muted); text-align: center;">
            ※ リアルタイム更新・自動ポーリング復旧・障害分離の運用画面
          </div>
        </div>
      `,
      notes: `
        本システムは正常系（Happy Path）だけでなく、<strong>障害発生時の振る舞い（Graceful Degradation）</strong>を重視して設計しています。<br><br>
        ・<strong>リアルタイム更新:</strong> SSEを無効化トリガーとしてのみ使い、最新状態はRESTで安全に再取得します。万が一SSEが切断されても短周期ポーリングへ自動移行して復旧します。<br>
        ・<strong>外部連携の隔離:</strong> LINE APIが一時的にダウンしても、店頭のキュー受付やスタッフ操作は通常通り継続できます。<br>
        ・<strong>運用の信頼性:</strong> CIパイプライン、ブラウザE2Eテスト、マイグレーション整合性検証、バックアップ復旧演習を整備しています。<br><br>
        <strong>それではアーキテクチャの解説はここまでとし、実際に皆様にスマートフォンでシステムを体験していただくライブデモに移ります！</strong>
      `
    },
    {
      id: "slide-8",
      tag: "ライブデモ",
      headerBadge: "ライブデモ",
      title: "SCAN TO JOIN",
      subtitle: "スマホのカメラまたはLINEでQRコードを読み取り、実際の順番待ちに参加してください",
      bodyHtml: `
        <!-- Giant Clean QR Card (Left Side) -->
        <div class="interactive-trigger" id="qr-card-trigger" title="クリックでQRコードを最大化表示" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #ffffff; border: 2px solid var(--line-green); border-radius: 22px; padding: 14px 20px; box-shadow: var(--shadow-md); cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 6px;">
            <span style="font-weight: 800; font-size: 13px; color: #08713d; text-transform: uppercase; letter-spacing: 0.04em;">📍 東京本店 (Tokyo Flagship Branch)</span>
            <span class="badge badge-green" style="font-size: 10px;">🔍 拡大表示</span>
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
              5ステップ体験フロー
            </div>
            <ol style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--ink-soft); line-height: 1.4;">
              <li><strong>1. QRスキャン:</strong> スマホカメラまたはLINEのQRリーダーで読取</li>
              <li><strong>2. LINEで開く:</strong> LIFFアプリを開き、LINEログイン</li>
              <li><strong>3. キュー選択:</strong> キューおよび体験用メニューを選択</li>
              <li><strong>4. 受付確定:</strong> 受付を確定し、デジタルチケットを発行</li>
              <li><strong>5. 呼出通知待機:</strong> LINEで呼出メッセージを受信</li>
            </ol>
          </div>

          <!-- Flow badge -->
          <div style="background: #0b4b2d; color: #86efac; border-radius: 10px; padding: 8px 12px; font-size: 11px; font-weight: 700; text-align: center; font-family: var(--font-family-code);">
            QR → LIFF → 受付 → 呼出 → LINE通知
          </div>

          <!-- Real money disclaimer -->
          <div style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: 10px; padding: 7px 12px; font-size: 11px; color: #991b1b; text-align: center; font-weight: 600;">
            💡 本デモでは実際の金銭請求は一切発生しません。
          </div>
        </div>
      `,
      notes: `
        ここからはスライドを離れ、<strong>8分間の参加型実機ライブデモ</strong>を実施します！<br><br>
        会場の皆様、スマートフォンをお手元にご用意いただき、画面上のQRコードをカメラまたはLINEで読み取ってください。（※QRコードをクリックすると全画面に最大化表示できます）<br><br>
        これは現在実際に本番同等環境にデプロイされているシステムです。LINE LIFF認証、Express API、PostgreSQL、非同期ワーカーを経由して完全にリアルタイム稼働しています。<br><br>
        体験用のキューとメニューを1つ選択して受付を行ってください。（金銭の請求は一切発生しません）<br><br>
        デジタルチケットが発行されたら、画面を閉じても大丈夫です。今から発表者がスタッフ画面に切り替え、皆様が作成されたチケットを順次「呼出」「対応」「完了」していきます。皆様のLINEにリアルタイムで届く呼出プッシュ通知をぜひご確認ください！
      `
    }
  ]
};
