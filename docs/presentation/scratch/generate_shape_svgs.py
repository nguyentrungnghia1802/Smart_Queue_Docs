import os

# 1. Slide 5 Abstract Shape Diagram (Light theme)
svg_s5_shapes = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" width="100%" height="100%">
  <rect width="320" height="120" rx="10" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
  
  <!-- Client Block -->
  <rect x="12" y="38" width="60" height="44" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.2"/>
  <text x="42" y="65" text-anchor="middle" fill="#2563eb" font-size="18">📱💻</text>

  <!-- Arrow 1 -->
  <path d="M 74 60 L 98 60" stroke="#059669" stroke-width="2"/>
  <polygon points="98,56 104,60 98,64" fill="#059669"/>

  <!-- API Core Block -->
  <rect x="106" y="24" width="76" height="72" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="1.5"/>
  <text x="144" y="54" text-anchor="middle" fill="#047857" font-size="20">⚙️</text>
  <text x="144" y="74" text-anchor="middle" fill="#065f46" font-size="10" font-weight="700" font-family="sans-serif">Express API</text>

  <!-- Arrow 2 Upper (to DB) -->
  <path d="M 184 48 L 210 36" stroke="#4f46e5" stroke-width="2"/>
  <polygon points="208,32 216,33 212,39" fill="#4f46e5"/>

  <!-- Arrow 2 Lower (to Worker) -->
  <path d="M 184 72 L 210 84" stroke="#059669" stroke-width="2"/>
  <polygon points="212,81 216,87 208,88" fill="#059669"/>

  <!-- DB Block -->
  <rect x="220" y="14" width="88" height="42" rx="8" fill="#ffffff" stroke="#6366f1" stroke-width="1.2"/>
  <text x="240" y="40" fill="#4338ca" font-size="16">🐘</text>
  <text x="258" y="38" fill="#312e81" font-size="10" font-weight="700" font-family="sans-serif">PostgreSQL</text>

  <!-- Worker / LINE Block -->
  <rect x="220" y="64" width="88" height="42" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.2"/>
  <text x="238" y="90" fill="#047857" font-size="16">⚡</text>
  <text x="256" y="88" fill="#064e3b" font-size="10" font-weight="700" font-family="sans-serif">LINE Worker</text>
</svg>'''

# 2. Slide 6 Shape 1: Transactional Correctness (Light theme)
svg_s6_t1 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 76" width="100%" height="100%">
  <rect x="4" y="4" width="252" height="68" rx="8" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,3"/>
  <g transform="translate(14, 18)">
    <rect x="0" y="0" width="48" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="24" y="24" text-anchor="middle" font-size="14">🎟️</text>

    <text x="54" y="24" fill="#059669" font-size="12" font-weight="700">➔</text>

    <rect x="66" y="0" width="48" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="90" y="24" text-anchor="middle" font-size="14">🛍️</text>

    <text x="120" y="24" fill="#059669" font-size="12" font-weight="700">➔</text>

    <rect x="132" y="0" width="48" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="156" y="24" text-anchor="middle" font-size="14">🏷️</text>

    <text x="186" y="24" fill="#059669" font-size="12" font-weight="700">➔</text>

    <rect x="198" y="0" width="36" height="40" rx="6" fill="#ecfdf5" stroke="#059669"/>
    <text x="216" y="24" text-anchor="middle" font-size="14">🔒</text>
  </g>
</svg>'''

# 3. Slide 6 Shape 2: Authorization Boundaries (Light theme)
svg_s6_t2 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 76" width="100%" height="100%">
  <rect x="4" y="4" width="252" height="68" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
  <g transform="translate(14, 18)">
    <rect x="0" y="0" width="62" height="40" rx="6" fill="#ffffff" stroke="#93c5fd"/>
    <text x="31" y="20" text-anchor="middle" fill="#1e3a8a" font-size="12">🏢 Org</text>
    <text x="31" y="33" text-anchor="middle" fill="#2563eb" font-size="8" font-weight="700">事業者</text>

    <text x="68" y="24" fill="#2563eb" font-size="12" font-weight="700">➔</text>

    <rect x="80" y="0" width="62" height="40" rx="6" fill="#ffffff" stroke="#93c5fd"/>
    <text x="111" y="20" text-anchor="middle" fill="#1e3a8a" font-size="12">📍 Branch</text>
    <text x="111" y="33" text-anchor="middle" fill="#2563eb" font-size="8" font-weight="700">店舗</text>

    <text x="148" y="24" fill="#2563eb" font-size="12" font-weight="700">➔</text>

    <rect x="160" y="0" width="70" height="40" rx="6" fill="#e0f2fe" stroke="#0284c7"/>
    <text x="195" y="20" text-anchor="middle" fill="#0369a1" font-size="12">🛡️ Queue</text>
    <text x="195" y="33" text-anchor="middle" fill="#0284c7" font-size="8" font-weight="700">担当制限</text>
  </g>
</svg>'''

# 4. Slide 6 Shape 3: Reliable Async Delivery (Light theme)
svg_s6_t3 = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 76" width="100%" height="100%">
  <rect x="4" y="4" width="252" height="68" rx="8" fill="#faf5ff" stroke="#8b5cf6" stroke-width="1.2"/>
  <g transform="translate(14, 18)">
    <rect x="0" y="0" width="64" height="40" rx="6" fill="#ffffff" stroke="#c084fc"/>
    <text x="32" y="20" text-anchor="middle" fill="#581c87" font-size="12">💾 Outbox</text>
    <text x="32" y="33" text-anchor="middle" fill="#7c3aed" font-size="8" font-weight="700">永続化</text>

    <text x="70" y="24" fill="#7c3aed" font-size="12" font-weight="700">➔</text>

    <rect x="82" y="0" width="68" height="40" rx="6" fill="#ffffff" stroke="#c084fc"/>
    <text x="116" y="20" text-anchor="middle" fill="#581c87" font-size="12">⚡ BullMQ</text>
    <text x="116" y="33" text-anchor="middle" fill="#7c3aed" font-size="8" font-weight="700">非同期実行</text>

    <text x="156" y="24" fill="#7c3aed" font-size="12" font-weight="700">➔</text>

    <rect x="168" y="0" width="66" height="40" rx="6" fill="#ecfdf5" stroke="#059669"/>
    <text x="201" y="20" text-anchor="middle" fill="#065f46" font-size="12">🔔 LINE</text>
    <text x="201" y="33" text-anchor="middle" fill="#059669" font-size="8" font-weight="700">Push配信</text>
  </g>
</svg>'''

with open('docs/images/slide/05-arch-shapes.svg', 'w', encoding='utf-8') as f:
    f.write(svg_s5_shapes)
with open('docs/images/slide/06-shape-transaction.svg', 'w', encoding='utf-8') as f:
    f.write(svg_s6_t1)
with open('docs/images/slide/06-shape-auth.svg', 'w', encoding='utf-8') as f:
    f.write(svg_s6_t2)
with open('docs/images/slide/06-shape-outbox.svg', 'w', encoding='utf-8') as f:
    f.write(svg_s6_t3)

print('Updated shape SVGs for Light Theme in docs/images/slide/')
