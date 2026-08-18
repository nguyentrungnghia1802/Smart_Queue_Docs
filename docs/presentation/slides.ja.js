/* LINE Smart Queue Assistant — Presentation Configuration (日本語) */

window.PRESENTATION_CONFIG_JA = {
  meta: {
    lang: "ja",
    title: "LINE Smart Queue Assistant — プレゼンテーション (日本語)",
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
    notesEmpty: "このスライドには発表者ノートがありません。"
  },
  slides: [
    {
      id: "slide-1",
      tag: "Slide 01 — 課題",
      headerBadge: "The Problem",
      title: "LINE Smart Queue Assistant",
      subtitle: "受付付近での待機から、LINEによるデジタル順番待ち体験へ",
      bodyHtml: `
        <div class="content-text" style="gap: 16px;">
          <div class="feature-card" style="border-left: 4px solid #EF4444; padding: 14px 18px;">
            <h3 style="color: #DC2626; font-size: 16px; margin-bottom: 2px;">🚶‍♂️ 受付付近から離れられない</h3>
            <p style="font-size: 14px; color: var(--ink-soft); line-height: 1.45;">発券後に待合スペースでの待機を余儀なくされ、自由に行動したり別の用事を済ませられません。</p>
          </div>
          <div class="feature-card" style="border-left: 4px solid #F59E0B; padding: 14px 18px;">
            <h3 style="color: #D97706; font-size: 16px; margin-bottom: 2px;">⏳ 待ち時間・順番が不透明</h3>
            <p style="font-size: 14px; color: var(--ink-soft); line-height: 1.45;">目安待ち時間（ETA）や前方の待ち人数が分からず、いつ呼ばれるか不安が生じます。</p>
          </div>
          <div class="feature-card" style="border-left: 4px solid #3B82F6; padding: 14px 18px;">
            <h3 style="color: #2563EB; font-size: 16px; margin-bottom: 2px;">📢 スタッフの手動・口頭呼出し</h3>
            <p style="font-size: 14px; color: var(--ink-soft); line-height: 1.45;">呼び出し負担や聞き逃しリスクが生じ、受付エリアの過密化と運用負荷につながります。</p>
          </div>
          <div style="background: linear-gradient(135deg, rgb(233 250 240 / 0.95), rgb(255 255 255 / 0.8)); border: 1.5px solid var(--line-green); border-radius: 14px; padding: 12px 18px; text-align: center; font-weight: 700; font-size: 16px; color: var(--brand-deep); box-shadow: var(--shadow-sm);">
            “お客様は並びたいのではない — いつ戻ればいいかを知りたい。”
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/guide/02-japanese-waiting-context.png" alt="店舗での順番待ち課題">
            </div>
          </div>
        </div>
      `,
      notes: `
        皆様、本日は <strong>LINE Smart Queue Assistant</strong> のプレゼンテーションをご覧いただきありがとうございます。<br><br>
        今回の個人プロジェクトは、店舗、クリニック、サロン等における非常に身近な「順番待ち」の課題から始まりました。<br><br>
        課題は待ち時間そのものだけでなく、「あとどれくらいで呼ばれるか分からない」という不透明さにあります。スタッフ側も順番管理や口頭での呼び出しに追われ続けています。<br><br>
        そこで「お客様は受付の前に居続ける必要はなく、自分の順番と呼出し通知さえ把握できればよい」というシンプルな発想でLINE Smart Queue Assistantを構築しました。
      `
    },
    {
      id: "slide-2",
      tag: "Slide 02 — カスタマージャーニー",
      headerBadge: "End-to-End Flow",
      title: "極めて短い顧客ジャーニー",
      subtitle: "無駄を削ぎ落としたLINE-first体験と、直感的な現場オペレーションの直結",
      bodyHtml: `
        <div class="content-text" style="gap: 14px;">
          <!-- Main visual flow banner -->
          <div style="display: flex; align-items: center; justify-content: space-between; background: #0b4b2d; color: white; padding: 10px 14px; border-radius: 12px; font-weight: 700; font-size: 13px; letter-spacing: 0.02em;">
            <span>📱 QR</span>
            <span style="color: #4ade80;">→</span>
            <span>💬 LINE / LIFF</span>
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
                <span class="badge badge-green" style="font-size: 11px;">Customer Lane</span>
                <strong style="color: var(--brand-ink); font-size: 14px;">お客様のLINE上での体験</strong>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">1. Scan</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">支店QR読取</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">2. Book</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">キュー・商品選択</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">3. Track Ticket</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">待ち人数・ETA</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(6,199,85,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: var(--brand-deep);">4. Receive Msg</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">LINE通知受信</div>
                </div>
              </div>
            </div>

            <!-- Lane 2: Staff -->
            <div class="feature-card" style="border-left: 4px solid #3B82F6; padding: 12px 16px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span class="badge" style="background: #e0f2fe; color: #0369a1; border-color: rgba(3,105,161,0.2); font-size: 11px;">Staff Lane</span>
                <strong style="color: #0369a1; font-size: 14px;">店舗スタッフの受付画面（Workspace）</strong>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">1. See Queue</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">行列確認</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">2. Call</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">呼出（Push通知）</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">3. Serve</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">接客対応中</div>
                </div>
                <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 8px; text-align: center; border: 1px solid rgba(59,130,246,0.15);">
                  <div style="font-weight: 800; font-size: 13px; color: #1d4ed8;">4. Complete</div>
                  <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">対応完了</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media-container">
          <div class="phone-mockup">
            <div class="phone-header-notch"></div>
            <div class="phone-screen">
              <img src="../images/guide/30-customer-queue-selection-mobile.png" alt="LINE上でのキュー選択画面">
            </div>
          </div>
        </div>
      `,
      notes: `
        カスタマージャーニーは極めて短く設計しています。<br><br>
        お客様は店舗掲示の固定QRコードをスキャンします。LINE内でLIFFが起動し、LINE認証を経て稼働中のキューと商品カタログが表示されます。<br><br>
        お客様がキューやメニューを選択して受付を完了すると、バックエンドでオーダーとチケットが生成されます。<br><br>
        その後、お客様は店頭から離れてもスマートフォン上で前方の待ち人数やETAを確認できます。<br><br>
        スタッフが「呼出」「対応」「完了」を行うと、お客様にLINEプッシュ通知が即座に届きます。<br><br>
        LINEを単なるログインボタンではなく、顧客体験全体の中心として位置付けています。
      `
    },
    {
      id: "slide-3",
      tag: "Slide 03 — プロダクトスコープ",
      headerBadge: "Domain Scope",
      title: "単なる「発券画面」にとどまらない広がり",
      subtitle: "シンプルな顧客フローの背後で連携する複数のドメイン領域",
      bodyHtml: `
        <div class="content-text" style="gap: 12px;">
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">👤 LINE / LIFF Identity</h3>
              <p style="font-size: 12px; line-height: 1.35;">LINE認証 &amp; プロファイル自動連携</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">🏢 Multi-tenant Org</h3>
              <p style="font-size: 12px; line-height: 1.35;">企業・テナントごとの安全なデータ分離</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">📍 Branch &amp; Multi-Queue</h3>
              <p style="font-size: 12px; line-height: 1.35;">1固定QRで複数キューを並行管理</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">📦 Orders &amp; Booking</h3>
              <p style="font-size: 12px; line-height: 1.35;">チケットと注文・サービス受付の統合</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">🏷️ Inventory &amp; Stock</h3>
              <p style="font-size: 12px; line-height: 1.35;">トランザクション内での確実な在庫引当</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">💳 Demo Payment</h3>
              <p style="font-size: 12px; line-height: 1.35;">決済境界・Webhook・返金フローの検証</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">🧑‍💼 Staff Operations</h3>
              <p style="font-size: 12px; line-height: 1.35;">担当キューに制限された呼出・対応画面</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">💬 LINE Messaging</h3>
              <p style="font-size: 12px; line-height: 1.35;">自動プッシュ配信 &amp; リッチ通知</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">⚡ Realtime Updates</h3>
              <p style="font-size: 12px; line-height: 1.35;">SSE無効化通知 &amp; RESTスナップショット</p>
            </div>
            <div class="feature-card" style="padding: 9px 12px; gap: 2px;">
              <h3 style="font-size: 14px; color: var(--brand-deep);">🌐 JA / VI / EN</h3>
              <p style="font-size: 12px; line-height: 1.35;">日本語・ベトナム語・英語の3言語対応</p>
            </div>
          </div>
          <!-- Subtle Disclaimer -->
          <div style="background: rgba(254, 243, 199, 0.75); border: 1px solid #f59e0b; border-radius: 10px; padding: 7px 12px; font-size: 12px; color: #92400e; display: flex; align-items: center; gap: 8px;">
            <span style="font-weight: 700;">⚠️ ご注意:</span>
            <span><strong>本番アーキテクチャ志向のデモ環境</strong>であり、実際の金銭決済は発生しません。</span>
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/guide/01-landing-page.png" alt="公開トップページ">
            </div>
          </div>
        </div>
      `,
      notes: `
        当初は単なる順番待ちアプリとして構想しましたが、深掘りするにつれて1つの受付が認証、注文、決済、在庫、スタッフ権限、通知といった多くの領域と結びついていることが分かりました。<br><br>
        そのため本プロジェクトには、マルチテナント組織、複数店舗、マルチキュー、カタログ、在庫管理、予約、スタッフ運用、決済境界、LINE通知、リアルタイム更新が含まれています。<br><br>
        UIは日本語、ベトナム語、英語の3言語に対応しています。<br><br>
        ただし、本システムは「本番アーキテクチャを指向したデモ」であり、実際の金銭移動は行われません。決済プロバイダーの境界、Webhook、突合、返金処理などの本番設計を実践するための環境として構築しています。
      `
    },
    {
      id: "slide-4",
      tag: "Slide 04 — アーキテクチャ",
      headerBadge: "System Architecture",
      title: "Simple product flow, serious backend boundaries",
      subtitle: "TypeScript Modular Monolith、PostgreSQLによる確実な状態管理、非同期Outbox配信",
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
              <div style="font-size: 11px; color: #e2e8f0; margin-top: 2px;">非同期配信と調整を担い、業務データの決定権は持たない。</div>
            </div>
          </div>
        </div>
      `,
      notes: `
        アーキテクチャにはTypeScriptによるモジュラーモノリスを採用しました。<br><br>
        フロントエンドはReact SPA、バックエンドはExpress API、そしてPostgreSQLがビジネス状態の唯一の信頼できる情報源（Source of Truth）です。<br><br>
        個人プロジェクトとして運用複雑性を無駄に増やさないため、現時点ではマイクロサービス化していません。<br><br>
        Redisも導入していますが、キューや決済の決定権は持たせず、キャッシュ、レートリミット、SSE用のPub/Sub、BullMQの調整役に徹しています。<br><br>
        最も重要な点は、LINE通知を業務トランザクションの中で直接呼ばないことです。PostgreSQLへのコミットと同時にDurable Outboxレコードを書き込み、非同期ワーカーがLINE APIを呼び出します。これにより、LINE側の障害で受付がロールバックされるのを防ぎます。
      `
    },
    {
      id: "slide-5",
      tag: "Slide 05 — 技術的挑戦",
      headerBadge: "Core Engineering",
      title: "特に注力した3つの技術課題",
      subtitle: "データの整合性担保、厳格な認可境界、信頼性の高い非同期通知配信",
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
                チケット発行、注文明細、在庫引当を単一のACIDトランザクション内で不可分に処理。行ロックと制約で二重受付や在庫の過剰引当を防止。
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
                ブラウザから送られるIDを信用せず、認証セッションとDBから権限スコープを再導出。スタッフは配属店舗の担当キューのみ操作可能。
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
                業務確定と通知送信を分離。Outbox意図を永続化し、冪等キーを用いた指数バックオフ付きリトライにより安全に配信。
              </p>
            </div>
            <div style="background: rgba(139, 92, 246, 0.08); border: 1px dashed rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 6px 10px; font-size: 11px; font-family: var(--font-family-code); color: #5b21b6;">
              Retry without rolling back business state
            </div>
          </div>

        </div>
      `,
      notes: `
        エンジニアリング面で特に注力したポイントは3点あります。<br><br>
        1つ目は「トランザクションの整合性」です。1回の受付でチケット、注文、在庫引当、決済状態が連動します。途中で失敗した際に不完全なデータが残らないよう、不可分なトランザクションとして設計しました。<br><br>
        2つ目は「認可境界」です。ブラウザからのorganizationIdやqueueIdをそのまま信用せず、認証アイデンティティからサーバー側でスコープを導出します。オーナー、店長、スタッフで権限を分離し、スタッフは担当キューのみに制限されます。<br><br>
        3つ目は「確実な非同期配信」です。スタッフが呼出しを行った際、LINE APIの通信状況に関わらず業務状態は即座に確定させます。Outboxパターンにより、安全なリトライと重複防止を実現しています。
      `
    },
    {
      id: "slide-6",
      tag: "Slide 06 — 信頼性",
      headerBadge: "Failure Safety",
      title: "ハッピーパスだけでは終わらせない設計",
      subtitle: "障害発生時にも業務状態を守り、安全に機能縮退（Graceful Degradation）する仕組み",
      bodyHtml: `
        <div class="content-text" style="gap: 10px;">
          <!-- Core Statement Highlight -->
          <div style="background: linear-gradient(135deg, #0b4b2d, #08713d); color: #ffffff; border-radius: 12px; padding: 10px 16px; box-shadow: var(--shadow-sm); font-size: 15px; font-weight: 700;">
            “Failure should degrade features — not corrupt business state.”
          </div>

          <!-- 6 Short Principles -->
          <div class="feature-card" style="padding: 10px 14px; gap: 6px;">
            <ul class="content-list" style="gap: 6px; border-left: 2px solid var(--line-green); padding-left: 12px;">
              <li style="font-size: 13px;"><strong>PostgreSQL remains authoritative:</strong> 業務状態は常にACIDデータベースが保証。</li>
              <li style="font-size: 13px;"><strong>SSEは単なる無効化ヒント:</strong> イベント内容を鵜呑みにせず、最新スナップショットをREST再取得。</li>
              <li style="font-size: 13px;"><strong>RESTポーリングへの自動フォールバック:</strong> SSE切断時、短周期ポーリングへ自動移行。</li>
              <li style="font-size: 13px;"><strong>LINE通信障害がキュー状態を巻き戻さない:</strong> 外部APIエラーで店頭業務を停止させない設計。</li>
              <li style="font-size: 13px;"><strong>ブラウザ側で勝手に決済完了を宣言させない:</strong> 決済成否はサーバー側検証・Webhook受信が必須。</li>
              <li style="font-size: 13px;"><strong>CI / E2E / マイグレーション / バックアップ検証:</strong> 自動テスト群と復旧リハーサルの徹底。</li>
            </ul>
          </div>
        </div>
        <div class="media-container">
          <div class="browser-frame">
            <div class="browser-content">
              <img src="../images/guide/40-staff-workspace-desktop.png" alt="スタッフ受付ワークスペース">
            </div>
          </div>
        </div>
      `,
      notes: `
        正常系だけでなく、障害発生時のモードも意識して設計しました。<br><br>
        リアルタイム更新にはSSEを使用していますが、イベントの内容をそのまま信頼せず、データ変更のトリガーとしてのみ扱い、最新スナップショットをRESTで再取得します。<br><br>
        もしSSEが途切れても、ポーリングによるリカバリが機能します。<br><br>
        決済も同様で、ブラウザ側のローカル状態だけで決済完了とみなすことはありません。<br><br>
        CI、E2Eテスト、マイグレーション検証、バックアップ復旧演習なども用意し、運用時の信頼性を自ら確認できるようにしています。<br><br>
        <strong>それではアーキテクチャの説明はここまでとし、実際に皆様にシステムを体験していただきたいと思います。</strong>
      `
    },
    {
      id: "slide-7",
      tag: "Slide 07 — ライブデモ",
      headerBadge: "LIVE DEMO",
      title: "SCAN TO JOIN",
      subtitle: "スマホのカメラまたはLINEでQRコードを読み取り、実際の順番待ちに参加してください",
      bodyHtml: `
        <!-- Giant Clean QR Card (Left Side) -->
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #ffffff; border: 2px solid var(--line-green); border-radius: 22px; padding: 14px 20px; box-shadow: var(--shadow-md);">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 6px;">
            <span style="font-weight: 800; font-size: 13px; color: var(--brand-deep); text-transform: uppercase; letter-spacing: 0.04em;">📍 東京本店 (Tokyo Flagship Branch)</span>
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
              5ステップ体験フロー
            </div>
            <ol style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--ink-soft); line-height: 1.4;">
              <li><strong>1. Scan QR:</strong> スマホカメラまたはLINEのQRリーダーで読取</li>
              <li><strong>2. Open in LINE:</strong> LIFFアプリを開き、LINEログイン</li>
              <li><strong>3. Select Queue:</strong> キューおよび体験用メニューを選択</li>
              <li><strong>4. Submit Booking:</strong> 受付を確定し、デジタルチケットを発行</li>
              <li><strong>5. Keep Ticket Open:</strong> 画面を開いたままスタッフからの通知を待機</li>
            </ol>
          </div>

          <!-- Flow badge -->
          <div style="background: #0b4b2d; color: #86efac; border-radius: 10px; padding: 8px 12px; font-size: 11px; font-weight: 700; text-align: center; font-family: var(--font-family-code);">
            QR → LIFF → Booking → Staff → LINE Notification
          </div>

          <!-- Real money disclaimer -->
          <div style="background: #fef2f2; border: 1px solid #fca5a5; border-radius: 10px; padding: 7px 12px; font-size: 11px; color: #991b1b; text-align: center; font-weight: 600;">
            💡 本デモでは実際の金銭請求は一切発生しません。
          </div>
        </div>
      `,
      notes: `
        ここからはスライドでの説明を終え、実際のデモに移ります。<br><br>
        お手元のスマートフォンを取り出し、画面上のQRコードを読み取ってください。<br><br>
        これは実際にデプロイされているデモ環境です。先ほどご説明した通り、LINE/LIFF、バックエンド、PostgreSQL、通知ワーカーを経由して動作します。<br><br>
        キューとメニューを1つ選んで受付を行ってください。金銭の請求は一切発生しません。<br><br>
        チケットが発行されたら画面を開いたままにしてください。スタッフ画面へ切り替え、今作成されたチケットを順次対応していきます。
      `
    }
  ]
};
