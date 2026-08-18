import os

svg_arch = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360" width="100%" height="100%">
  <defs>
    <linearGradient id="g-client" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="g-api" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b4b2d"/>
      <stop offset="100%" stop-color="#08713d"/>
    </linearGradient>
    <linearGradient id="g-db" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#312e81"/>
    </linearGradient>
    <linearGradient id="g-worker" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <linearGradient id="g-redis" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7f1d1d"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
  </defs>

  <!-- Background container -->
  <rect width="800" height="360" rx="16" fill="#0b1510" stroke="#1b382b" stroke-width="1.5"/>

  <!-- Tier 1: Client -->
  <g transform="translate(30, 30)">
    <rect width="340" height="64" rx="12" fill="url(#g-client)" stroke="#334155" stroke-width="1.5"/>
    <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="13" font-weight="700">📱 💻 クライアント層 (Client)</text>
    <text x="20" y="50" fill="#94a3b8" font-family="sans-serif" font-size="11">React SPA • LINE LIFF (モバイル) / Web (デスクトップ)</text>
  </g>

  <!-- Arrow Client -> API -->
  <g transform="translate(180, 94)">
    <path d="M 0,0 L 0,26" stroke="#06c755" stroke-width="2" stroke-dasharray="4,3"/>
    <polygon points="-4,22 0,28 4,22" fill="#06c755"/>
    <rect x="15" y="4" width="130" height="18" rx="4" fill="#062b19" stroke="#06c755" stroke-width="0.8"/>
    <text x="20" y="16" fill="#86efac" font-family="monospace" font-size="9" font-weight="700">HTTPS (REST + SSE)</text>
  </g>

  <!-- Tier 2: Express API -->
  <g transform="translate(30, 126)">
    <rect width="340" height="68" rx="12" fill="url(#g-api)" stroke="#06c755" stroke-width="1.5"/>
    <text x="20" y="30" fill="#86efac" font-family="sans-serif" font-size="13" font-weight="700">⚙️ バックエンドAPI (Express Monolith)</text>
    <text x="20" y="48" fill="#dcfce7" font-family="sans-serif" font-size="11">ACIDトランザクション • 認可ガード • Outbox生成</text>
  </g>

  <!-- Arrow API -> DB & Worker -->
  <g transform="translate(180, 194)">
    <path d="M 0,0 L 0,26" stroke="#06c755" stroke-width="2" stroke-dasharray="4,3"/>
    <polygon points="-4,22 0,28 4,22" fill="#06c755"/>
    <rect x="15" y="4" width="145" height="18" rx="4" fill="#062b19" stroke="#06c755" stroke-width="0.8"/>
    <text x="20" y="16" fill="#86efac" font-family="monospace" font-size="9" font-weight="700">DBコミット &amp; Outbox書込</text>
  </g>

  <!-- Tier 3: Storage & Delivery -->
  <!-- PostgreSQL -->
  <g transform="translate(30, 226)">
    <rect width="162" height="96" rx="12" fill="url(#g-db)" stroke="#6366f1" stroke-width="1.5"/>
    <text x="14" y="28" fill="#c7d2fe" font-family="sans-serif" font-size="12" font-weight="700">🐘 PostgreSQL</text>
    <rect x="14" y="38" width="85" height="15" rx="3" fill="#4338ca"/>
    <text x="18" y="49" fill="#ffffff" font-family="sans-serif" font-size="8.5" font-weight="700">唯一の確定データ</text>
    <text x="14" y="70" fill="#94a3b8" font-family="sans-serif" font-size="9.5">キュー • 注文 • 在庫</text>
    <text x="14" y="85" fill="#a5b4fc" font-family="sans-serif" font-size="9.5">永続化Outbox</text>
  </g>

  <!-- Worker -> LINE -->
  <g transform="translate(208, 226)">
    <rect width="162" height="96" rx="12" fill="url(#g-worker)" stroke="#10b981" stroke-width="1.5"/>
    <text x="14" y="28" fill="#a7f3d0" font-family="sans-serif" font-size="12" font-weight="700">⚡ LINEワーカー</text>
    <rect x="14" y="38" width="60" height="15" rx="3" fill="#059669"/>
    <text x="18" y="49" fill="#ffffff" font-family="sans-serif" font-size="8.5" font-weight="700">非同期配信</text>
    <text x="14" y="70" fill="#94a3b8" font-family="sans-serif" font-size="9.5">BullMQキュー実行</text>
    <text x="14" y="85" fill="#6ee7b7" font-family="sans-serif" font-size="9.5">LINE Messaging API</text>
  </g>

  <!-- Right side: Redis Coordination & Principle Cards -->
  <!-- Redis Box -->
  <g transform="translate(410, 30)">
    <rect width="360" height="90" rx="12" fill="url(#g-redis)" stroke="#ef4444" stroke-width="1.5"/>
    <text x="18" y="28" fill="#fecaca" font-family="sans-serif" font-size="13" font-weight="700">🔴 Redis 協調レイヤー (Coordination)</text>
    <text x="18" y="50" fill="#fee2e2" font-family="sans-serif" font-size="11">・BullMQ ジョブキュー管理</text>
    <text x="18" y="68" fill="#fee2e2" font-family="sans-serif" font-size="11">・リアルタイムSSE用のPub/Sub • 短期キャッシュ • レート制限</text>
  </g>

  <!-- Principle 1 -->
  <g transform="translate(410, 134)">
    <rect width="360" height="88" rx="12" fill="#0b4b2d" stroke="#06c755" stroke-width="1.5"/>
    <text x="18" y="24" fill="#86efac" font-family="monospace" font-size="10" font-weight="700">設計方針 01 (Source of Truth)</text>
    <text x="18" y="46" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="700">PostgreSQL = 信頼できる唯一の情報源</text>
    <text x="18" y="68" fill="#dcfce7" font-family="sans-serif" font-size="11">業務状態と通知意図を同一トランザクションで確実に確定</text>
  </g>

  <!-- Principle 2 -->
  <g transform="translate(410, 234)">
    <rect width="360" height="88" rx="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
    <text x="18" y="24" fill="#93c5fd" font-family="monospace" font-size="10" font-weight="700">設計方針 02 (Delivery)</text>
    <text x="18" y="46" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="700">Redis / BullMQ / SSE = 協調と非同期配信</text>
    <text x="18" y="68" fill="#cbd5e1" font-family="sans-serif" font-size="11">配信を最適化するが、業務データの決定権は持たない</text>
  </g>
</svg>'''

svg_c1 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" width="100%" height="100%">
  <rect width="300" height="130" rx="10" fill="#0c1f15" stroke="#1a4730" stroke-width="1.2"/>
  <!-- Boundary Box -->
  <rect x="12" y="12" width="276" height="106" rx="8" fill="#082b1b" stroke="#06c755" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="22" y="28" fill="#86efac" font-family="monospace" font-size="10" font-weight="700">🔒 単一 ACID トランザクション境界</text>
  <!-- 4 Linked items -->
  <g transform="translate(20, 42)">
    <rect x="0" y="0" width="56" height="42" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="10" y="18" fill="#94a3b8" font-size="9" font-family="sans-serif">Ticket</text>
    <text x="10" y="32" fill="#f8fafc" font-size="11" font-weight="700">発券</text>
    
    <text x="60" y="25" fill="#06c755" font-size="12" font-weight="700">➔</text>
    
    <rect x="74" y="0" width="56" height="42" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="84" y="18" fill="#94a3b8" font-size="9" font-family="sans-serif">Order</text>
    <text x="84" y="32" fill="#f8fafc" font-size="11" font-weight="700">注文</text>
    
    <text x="134" y="25" fill="#06c755" font-size="12" font-weight="700">➔</text>

    <rect x="148" y="0" width="56" height="42" rx="6" fill="#1e293b" stroke="#475569"/>
    <text x="156" y="18" fill="#94a3b8" font-size="9" font-family="sans-serif">Stock</text>
    <text x="156" y="32" fill="#f8fafc" font-size="11" font-weight="700">引当</text>
    
    <text x="208" y="25" fill="#06c755" font-size="12" font-weight="700">➔</text>

    <rect x="220" y="0" width="40" height="42" rx="6" fill="#0f766e" stroke="#14b8a6"/>
    <text x="226" y="18" fill="#ccfbf1" font-size="8.5" font-family="sans-serif">Outbox</text>
    <text x="228" y="32" fill="#ffffff" font-size="10" font-weight="700">記録</text>
  </g>
  <text x="22" y="106" fill="#4ade80" font-size="9.5" font-family="sans-serif">行ロック (SELECT FOR UPDATE) で過剰引当防止</text>
</svg>'''

svg_c2 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" width="100%" height="100%">
  <rect width="300" height="130" rx="10" fill="#0c1829" stroke="#1e3a5f" stroke-width="1.2"/>
  <text x="16" y="24" fill="#93c5fd" font-family="monospace" font-size="10" font-weight="700">🛡️ サーバーサイド認可スコープ再導出</text>
  
  <g transform="translate(16, 38)">
    <rect x="0" y="0" width="76" height="34" rx="6" fill="#1e3a8a" stroke="#3b82f6"/>
    <text x="6" y="15" fill="#bfdbfe" font-size="8.5" font-family="sans-serif">Organization</text>
    <text x="16" y="28" fill="#ffffff" font-size="10" font-weight="700">事業者</text>

    <text x="80" y="22" fill="#60a5fa" font-size="12" font-weight="700">➔</text>

    <rect x="94" y="0" width="76" height="34" rx="6" fill="#1e3a8a" stroke="#3b82f6"/>
    <text x="14" y="15" fill="#bfdbfe" font-size="8.5" font-family="sans-serif">Branch</text>
    <text x="24" y="28" fill="#ffffff" font-size="10" font-weight="700">店舗</text>

    <text x="174" y="22" fill="#60a5fa" font-size="12" font-weight="700">➔</text>

    <rect x="188" y="0" width="76" height="34" rx="6" fill="#0369a1" stroke="#38bdf8"/>
    <text x="14" y="15" fill="#e0f2fe" font-size="8.5" font-family="sans-serif">Queue</text>
    <text x="14" y="28" fill="#ffffff" font-size="10" font-weight="700">担当キュー</text>
  </g>

  <!-- Guard message -->
  <rect x="16" y="84" width="268" height="32" rx="6" fill="#172554" stroke="#2563eb" stroke-width="0.8"/>
  <text x="24" y="104" fill="#93c5fd" font-size="9.5" font-family="sans-serif">ブラウザIDは選択肢に過ぎず、権限はDBから判定</text>
</svg>'''

svg_c3 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" width="100%" height="100%">
  <rect width="300" height="130" rx="10" fill="#1b122c" stroke="#3b2260" stroke-width="1.2"/>
  <text x="16" y="24" fill="#d8b4fe" font-family="monospace" font-size="10" font-weight="700">📬 業務コミットとLINE通知の完全分離</text>

  <g transform="translate(16, 38)">
    <rect x="0" y="0" width="72" height="34" rx="6" fill="#4c1d95" stroke="#8b5cf6"/>
    <text x="6" y="15" fill="#e9d5ff" font-size="8.5" font-family="sans-serif">DB Outbox</text>
    <text x="8" y="28" fill="#ffffff" font-size="10" font-weight="700">通知意図確定</text>

    <text x="76" y="22" fill="#c084fc" font-size="12" font-weight="700">➔</text>

    <rect x="90" y="0" width="76" height="34" rx="6" fill="#581c87" stroke="#a855f7"/>
    <text x="6" y="15" fill="#f3e8ff" font-size="8.5" font-family="sans-serif">BullMQ Queue</text>
    <text x="14" y="28" fill="#ffffff" font-size="10" font-weight="700">非同期配送</text>

    <text x="170" y="22" fill="#c084fc" font-size="12" font-weight="700">➔</text>

    <rect x="184" y="0" width="84" height="34" rx="6" fill="#065f46" stroke="#10b981"/>
    <text x="6" y="15" fill="#a7f3d0" font-size="8.5" font-family="sans-serif">LINE API</text>
    <text x="8" y="28" fill="#ffffff" font-size="10" font-weight="700">プッシュ送信</text>
  </g>

  <!-- Retry Note -->
  <rect x="16" y="84" width="268" height="32" rx="6" fill="#2e1065" stroke="#7c3aed" stroke-width="0.8"/>
  <text x="24" y="104" fill="#e9d5ff" font-size="9.5" font-family="sans-serif">LINE障害時も指数バックオフで安全に自動リトライ</text>
</svg>'''

os.makedirs('docs/images/slide', exist_ok=True)

with open('docs/images/slide/05-architecture-diagram.svg', 'w', encoding='utf-8') as f:
    f.write(svg_arch)
with open('docs/images/slide/06-challenge-transaction.svg', 'w', encoding='utf-8') as f:
    f.write(svg_c1)
with open('docs/images/slide/06-challenge-auth.svg', 'w', encoding='utf-8') as f:
    f.write(svg_c2)
with open('docs/images/slide/06-challenge-outbox.svg', 'w', encoding='utf-8') as f:
    f.write(svg_c3)

print('Generated SVGs in docs/images/slide/')
