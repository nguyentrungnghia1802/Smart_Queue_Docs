/* LINE Smart Queue Assistant — Business Flow Application JS Engine */

const DIAGRAM_DEFINITIONS = {
  1: `flowchart TD
  classDef applicantNode fill:#f1f5f9,stroke:#64748b,stroke-width:1.5px,color:#0f172a
  classDef adminNode fill:#f3e8ff,stroke:#a855f7,stroke-width:1.5px,color:#0f172a
  classDef ownerNode fill:#dbeafe,stroke:#3b82f6,stroke-width:1.5px,color:#0f172a
  classDef managerNode fill:#ccfbf1,stroke:#14b8a6,stroke-width:1.5px,color:#0f172a
  classDef customerNode fill:#dcfce7,stroke:#22c55e,stroke-width:1.5px,color:#0f172a
  classDef staffNode fill:#ffedd5,stroke:#f97316,stroke-width:1.5px,color:#0f172a
  classDef systemNode fill:#f8fafc,stroke:#64748b,stroke-width:1.5px,color:#0f172a
  classDef decisionNode fill:#fff7ed,stroke:#ea580c,stroke-width:1.5px,color:#0f172a

  subgraph APPLICANT ["Role: Business Applicant"]
    A1["Đăng ký sử dụng dịch vụ<br/>nhập Org info, work email, plan"] --> A2["Demo payment<br/>gửi application"]
  end

  subgraph ADMIN ["Role: Platform Admin"]
    AD1["Nhận application<br/>review thông tin"] --> AD_DEC{"Approve?"}
    AD_DEC -- No --> AD_REJ["Application rejected<br/>demo refund & gửi result email"] --> END_REJ(["End Application"])
    AD_DEC -- Yes --> AD_APP["Tạo inactive Organization<br/>tạo invited Owner & activation token"]
  end

  subgraph OWNER ["Role: Organization Owner"]
    O1["Mở activation link<br/>đặt password & activate"] --> O2["Organization active"]
    O2 --> O3["Tạo Org Catalog<br/>Product / Service master"]
    O3 --> O4["Tạo Branch<br/>gán / mời Branch Manager"]
  end

  subgraph MANAGER ["Role: Branch Manager"]
    M1["Nhận invitation<br/>đăng nhập"] --> M2["Cấu hình Branch<br/>Business Hours & Calendar"]
    M2 --> M3["Tạo Queue & chọn Catalog<br/>thiết lập Branch Stock"]
    M3 --> M4["Gán Staff vào Queue<br/>lấy Branch QR cố định"]
  end

  subgraph CUSTOMER ["Role: Customer (LINE LIFF)"]
    C1["Scan Branch QR<br/>mở LINE LIFF"] --> C2["LINE Login<br/>backend verify LINE Token"]
    C2 --> C3["Xem Branch Queues<br/>chọn Queue & xem Catalog"]
    C3 --> C4["Chọn Product / Service<br/>nhập info"] --> C_PAY{"Requires<br/>prepayment?"}
    C_PAY -- Yes --> C5["Tạo Payment Intent<br/>server verify payment"] --> C6["Create Order & Ticket"]
    C_PAY -- No --> C6
    C6 --> C7["Ticket = WAITING<br/>xem Ticket Code, ETA, People Ahead"]
  end

  subgraph SYSTEM ["Role: System / LINE"]
    S1["booking_created notification"]
    S2["Auto Call earliest Waiting ticket<br/>(nếu Queue không có Called/Serving)"]
    S3["LINE Called notification"]
    S4["LINE Completed notification"]
    S5["Auto Call next eligible customer"]
    S_EMAIL["Gửi activation email"]
  end

  subgraph STAFF ["Role: Staff"]
    ST1["Ticket: WAITING ➔ CALLED"] --> ST2["Start Service<br/>CALLED ➔ SERVING"]
    ST2 --> ST3["Complete Service<br/>SERVING ➔ SERVED"]
    ST3 --> ST4["Order Completed & Inventory Consumed<br/>Receipt available"]
  end

  %% Connections
  A2 --> AD1
  AD_APP --> S_EMAIL --> O1
  O4 --> M1
  M4 -. "Branch open & Queue open" .-> C1
  C6 --> S1
  C6 --> S2
  S2 --> ST1
  ST1 --> S3
  ST3 --> S4
  ST4 --> S5
  S5 -. "Next Waiting ticket" .-> ST1

  %% Class assignments
  class A1,A2 applicantNode
  class AD1,AD_REJ,AD_APP adminNode
  class AD_DEC,C_PAY decisionNode
  class O1,O2,O3,O4 ownerNode
  class M1,M2,M3,M4 managerNode
  class C1,C2,C3,C4,C5,C6,C7 customerNode
  class S1,S2,S3,S4,S5,S_EMAIL systemNode
  class ST1,ST2,ST3,ST4 staffNode`,

  2: `flowchart TD
  classDef applicantNode fill:#f1f5f9,stroke:#64748b,stroke-width:1.5px,color:#0f172a
  classDef adminNode fill:#f3e8ff,stroke:#a855f7,stroke-width:1.5px,color:#0f172a
  classDef ownerNode fill:#dbeafe,stroke:#3b82f6,stroke-width:1.5px,color:#0f172a
  classDef managerNode fill:#ccfbf1,stroke:#14b8a6,stroke-width:1.5px,color:#0f172a
  classDef decisionNode fill:#fff7ed,stroke:#ea580c,stroke-width:1.5px,color:#0f172a
  classDef noteNode fill:#fef9c3,stroke:#ca8a04,stroke-width:1.5px,color:#854d0e

  N1["Business Applicant<br/>Gửi Application"] --> N2["Platform Admin<br/>Review Application"]
  N2 --> D1{"Approve?"}
  D1 -- No --> R1["Application Rejected<br/>Demo Refund & Result Email"] --> END1(["End"])
  D1 -- Yes --> A1["Application Approved<br/>Tạo inactive Organization"]
  A1 --> A2["Tạo invited Owner account<br/>Gửi Activation Email"]
  
  NOTE1["QUY TẮC NGHIỆP VỤ:<br/>Admin approval CHỈ tạo Organization inactive & Owner invited.<br/>Approval KHÔNG tạo Branch và KHÔNG tạo Queue."] -.-> A1

  A2 --> O1["Owner mở activation link<br/>Đặt password & activate account"]
  O1 --> O2["Organization status = ACTIVE"]
  O2 --> O3["Tạo Organization Catalog<br/>(Product / Service master)"]
  O3 --> O4["Tạo Branch<br/>Mời / gán Branch Manager"]
  
  O4 --> M1["Branch Manager đăng nhập<br/>Cấu hình Branch & Business Calendar"]
  M1 --> M2["Tạo Queue & chọn Catalog products<br/>Cấu hình Branch Inventory / Stock"]
  M2 --> M3["Phân công Staff vào Queue<br/>Lấy Branch QR cố định"]
  M3 --> READY(["READY FOR CUSTOMER"])

  class N1 applicantNode
  class N2,R1,A1,A2 adminNode
  class D1 decisionNode
  class NOTE1 noteNode
  class O1,O2,O3,O4 ownerNode
  class M1,M2,M3,READY managerNode`,

  3: `flowchart TD
  classDef customerNode fill:#dcfce7,stroke:#22c55e,stroke-width:1.5px,color:#0f172a
  classDef decisionNode fill:#fff7ed,stroke:#ea580c,stroke-width:1.5px,color:#0f172a
  classDef txNode fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
  classDef errNode fill:#fef2f2,stroke:#ef4444,stroke-width:1.5px,color:#991b1b

  CB1["Scan Branch QR"] --> CB2["LIFF App launch"]
  CB2 --> CB3["LINE Login<br/>Backend verify ID Token"]
  CB3 --> CB4["Resolve Branch & Load active Queues"]
  CB4 --> CD1{"Có Queue active?"}
  CD1 -- No --> CE1["Branch không có Queue active<br/>Không thể Booking"]
  CD1 -- Yes --> CB5["Customer chọn 1 Queue"]
  
  CB5 --> CB6["Load queue-specific catalog<br/>Chọn items & quantities"]
  CB6 --> CB7["Validation Checks:<br/>Product active / Queue mapping valid / Stock available<br/>Branch calendar open / Queue open"]
  
  CB7 --> CD2{"Requires prepayment?"}
  CD2 -- Yes --> CP1["Create Payment Intent<br/>Checkout Payment Demo"]
  CP1 --> CP2["Server verifies payment transaction"] --> T1
  CD2 -- No --> T1

  subgraph CTX ["TRANSACTION GROUP (PostgreSQL Atomic Boundary)"]
    T1["Queue Lock"] --> T2["Create Order & Order Items"]
    T2 --> T3["Create Queue Entry"]
    T3 --> T4["Reserve Branch Stock"]
    T4 --> T5["Link Payment Transaction"]
  end

  T5 --> CD3{"Transaction Success?"}
  CD3 -- No --> CE2["ROLLBACK TRANSACTION<br/>Hủy toàn bộ thay đổi"]
  CD3 -- Yes --> CS1["Ticket = WAITING<br/>Hiển thị Ticket Code, ETA, People Ahead"]
  CS1 --> CS2["Gửi LINE booking_created notification"]

  class CB1,CB2,CB3,CB4,CB5,CB6,CB7,CP1,CP2,CS1,CS2 customerNode
  class CD1,CD2,CD3 decisionNode
  class CE1,CE2 errNode
  class T1,T2,T3,T4,T5 txNode`,

  4: `flowchart TD
  classDef stateNode fill:#f8fafc,stroke:#475569,stroke-width:1.5px,color:#0f172a
  classDef termNode fill:#f1f5f9,stroke:#0f172a,stroke-width:2px,color:#0f172a
  classDef actNode fill:#e0f2fe,stroke:#0284c7,stroke-width:1.5px,color:#0369a1
  classDef decisionNode fill:#fff7ed,stroke:#ea580c,stroke-width:1.5px,color:#0f172a

  WAITING(("waiting"))
  CALLED(("called"))
  SERVING(("serving"))
  SERVED((("served")))
  SKIPPED(("skipped"))
  CANCELLED((("cancelled")))
  NOSHOW((("no_show")))

  NEW["Booking created"] --> WAITING

  WAITING -- "Staff: Call Next" --> CALLED
  CALLED -- "Staff: Start Service" --> SERVING
  SERVING -- "Staff: Complete Service<br/>(Order Completed, Stock Consumed)" --> SERVED

  WAITING -- "Customer/Staff: Skip" --> SKIPPED

  WAITING -- "Customer/Operator: Cancel<br/>(Release Stock, Refund if paid)" --> CANCELLED
  CALLED -- "Operator: Cancel" --> CANCELLED
  SERVING -- "Operator: Cancel" --> CANCELLED

  CALLED -- "Staff: Mark Absent" --> ABS_CHECK{"absence_count + 1<br/>count < max (3)?"}
  
  ABS_CHECK -- Yes --> DEFER["Defer: Lùi 3 vị trí<br/>Ticket về WAITING tail<br/>Giữ nguyên Ticket Code"] --> WAITING
  ABS_CHECK -- No (count = 3) --> NOSHOW
  
  NOSHOW -. "Auto Policy: Cancel Order<br/>Refund Payment & Release Stock" .-> CANCELLED

  class WAITING,CALLED,SERVING,SKIPPED stateNode
  class SERVED,CANCELLED,NOSHOW termNode
  class DEFER actNode
  class ABS_CHECK decisionNode`,

  5: `flowchart TD
  classDef adminNode fill:#f3e8ff,stroke:#a855f7,stroke-width:1.5px,color:#0f172a
  classDef ownerNode fill:#dbeafe,stroke:#3b82f6,stroke-width:1.5px,color:#0f172a
  classDef managerNode fill:#ccfbf1,stroke:#14b8a6,stroke-width:1.5px,color:#0f172a
  classDef staffNode fill:#ffedd5,stroke:#f97316,stroke-width:1.5px,color:#0f172a
  classDef customerNode fill:#dcfce7,stroke:#22c55e,stroke-width:1.5px,color:#0f172a

  PA["Platform Admin"]
  PA1["• Review applications<br/>• Manage tenant organizations<br/>• Owner account email recovery<br/>• (KHÔNG truy cập dữ liệu vận hành/khách hàng)"]

  OO["Organization Owner"]
  OO1["• Organization Master Catalog<br/>• Manage Branches<br/>• Invite Branch Managers<br/>• Aggregate Analytics & Audit<br/>• (KHÔNG vận hành Queue trực tiếp)"]

  BM["Branch Manager"]
  BM1["• Quản lý đúng 01 Branch active<br/>• Queues & Queue Product Mapping<br/>• Branch Inventory (Stock)<br/>• Assign Staff to Queues<br/>• Branch QR & Business Calendar"]

  ST["Staff Operator"]
  ST1["• Thuộc đúng 01 Branch & 01 Queue<br/>• View Active Customers<br/>• Actions: Call, Serve, Complete, Defer, Cancel<br/>• Payment collection & Receipt printing"]

  CU["Customer"]
  CU1["• Verified LINE Identity (LINE LIFF)<br/>• Booking & View own Tickets<br/>• Track real-time ETA & People Ahead<br/>• LINE Push notifications"]

  PA --- PA1
  OO --- OO1
  BM --- BM1
  ST --- ST1
  CU --- CU1

  PA --> OO
  OO --> BM
  BM --> ST
  CU -. "Scan QR & LIFF Booking" .-> BM

  class PA,PA1 adminNode
  class OO,OO1 ownerNode
  class BM,BM1 managerNode
  class ST,ST1 staffNode
  class CU,CU1 customerNode`
};

// Pan & Zoom state per diagram
const viewportStates = {
  1: { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0 },
  2: { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0 },
  3: { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0 },
  4: { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0 },
  5: { scale: 1, x: 0, y: 0, isDragging: false, startX: 0, startY: 0 }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Mermaid
  mermaid.initialize({
    startOnLoad: false,
    theme: 'neutral',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      curve: 'basis'
    }
  });

  // Tab switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Render initial tab (Tab 1)
  switchTab('1');

  // Setup pan/zoom & control handlers for each diagram viewport
  for (let id = 1; id <= 5; id++) {
    setupViewportControls(id);
  }
});

function switchTab(tabId) {
  // Update Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Update Tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    const isActive = content.id === `tab-${tabId}`;
    content.classList.toggle('active', isActive);
    if (isActive) {
      const container = document.getElementById(`mermaid-container-${tabId}`);
      if (container && !container.hasAttribute('data-rendered')) {
        renderDiagram(tabId);
      }
    }
  });
}

function renderDiagram(tabId) {
  const container = document.getElementById(`mermaid-container-${tabId}`);
  if (!container) return;

  const definition = DIAGRAM_DEFINITIONS[tabId];
  if (!definition) return;

  container.innerHTML = '<div class="loading-indicator">Đang khởi tạo diagram...</div>';

  const elementId = `mermaid-svg-${tabId}`;
  mermaid.render(elementId, definition).then(result => {
    container.innerHTML = result.svg;
    container.setAttribute('data-rendered', 'true');
    resetZoom(tabId);
  }).catch(err => {
    console.error(`Mermaid render error on tab ${tabId}:`, err);
    container.innerHTML = `<div class="loading-indicator" style="color:#ef4444;">Lỗi vẽ diagram: ${err.message}</div>`;
  });
}

function setupViewportControls(id) {
  const viewport = document.getElementById(`viewport-${id}`);
  const wrapper = document.getElementById(`mermaid-container-${id}`);
  const card = document.getElementById(`card-${id}`);

  if (!viewport || !wrapper) return;

  const state = viewportStates[id];

  function applyTransform() {
    wrapper.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
  }

  // Pan / Drag handlers
  viewport.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // Only left click
    state.isDragging = true;
    state.startX = e.clientX - state.x;
    state.startY = e.clientY - state.y;
    viewport.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.isDragging) return;
    state.x = e.clientX - state.startX;
    state.y = e.clientY - state.startY;
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    if (state.isDragging) {
      state.isDragging = false;
      viewport.style.cursor = 'grab';
    }
  });

  // Mouse Wheel Zoom
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    const newScale = Math.min(Math.max(0.3, state.scale * zoomFactor), 3.0);
    state.scale = newScale;
    applyTransform();
  }, { passive: false });

  // Control Buttons
  const fitBtn = document.getElementById(`btn-fit-${id}`);
  const zoomInBtn = document.getElementById(`btn-zoomin-${id}`);
  const zoomOutBtn = document.getElementById(`btn-zoomout-${id}`);
  const fullscreenBtn = document.getElementById(`btn-fullscreen-${id}`);
  const exportBtn = document.getElementById(`btn-export-${id}`);

  if (fitBtn) {
    fitBtn.addEventListener('click', () => resetZoom(id));
  }

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      state.scale = Math.min(3.0, state.scale * 1.25);
      applyTransform();
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      state.scale = Math.max(0.3, state.scale / 1.25);
      applyTransform();
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      card.classList.toggle('fullscreen');
      fullscreenBtn.textContent = card.classList.contains('fullscreen') ? 'Exit Fullscreen' : 'Fullscreen';
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', () => exportSVG(id));
  }
}

function resetZoom(id) {
  const state = viewportStates[id];
  const wrapper = document.getElementById(`mermaid-container-${id}`);
  if (!state || !wrapper) return;

  state.scale = 0.9;
  state.x = 20;
  state.y = 20;
  wrapper.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
}

function exportSVG(id) {
  const container = document.getElementById(`mermaid-container-${id}`);
  if (!container) return;

  const svgElement = container.querySelector('svg');
  if (!svgElement) {
    alert('Không tìm thấy dữ liệu SVG để export.');
    return;
  }

  const svgData = new XMLSerializer().serializeToString(svgElement);
  const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `smart-queue-diagram-${id}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
