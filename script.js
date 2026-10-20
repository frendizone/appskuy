/* ============ DATA PROJECT ============ */
const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    desc: "Dashboard admin toko online dengan chart penjualan, manajemen produk, dan laporan real-time.",
    category: "Web App",
    emoji: "🛒",
    demoUrl: "https://example.com",
    archived: false,
    plans: {
      free: {
        price: 0,
        features: [
          "✅ 1 toko / 1 user",
          "✅ Manajemen produk dasar",
          "✅ Laporan penjualan harian",
          "❌ Multi-outlet",
          "❌ Export Excel/PDF",
          "❌ Support prioritas"
        ],
        downloadUrl: "https://example.com/demo.zip"
      },
      premium: {
        price: 150000,
        features: [
          "✅ Unlimited toko & user",
          "✅ Semua fitur gratis",
          "✅ Multi-outlet",
          "✅ Export Excel/PDF",
          "✅ Support prioritas 24/7",
          "✅ Update gratis selamanya"
        ],
        downloadUrl: "https://example.com/full.zip"
      }
    }
  },
  {
    id: 2,
    title: "Aplikasi Kasir (POS)",
    desc: "Point of Sale lengkap: scan barcode, struk digital, multi-outlet, dan laporan harian.",
    category: "Desktop",
    emoji: "💳",
    demoUrl: "https://example.com",
    archived: false,
    plans: {
      free: {
        price: 0,
        features: [
          "✅ 1 kasir / 1 device",
          "✅ Transaksi dasar",
          "✅ Struk digital",
          "❌ Multi-outlet",
          "❌ Barcode scanner",
          "❌ Laporan lanjutan"
        ],
        downloadUrl: "https://example.com/demo.zip"
      },
      premium: {
        price: 250000,
        features: [
          "✅ Unlimited kasir & device",
          "✅ Semua fitur gratis",
          "✅ Multi-outlet",
          "✅ Barcode scanner",
          "✅ Laporan lanjutan + export",
          "✅ Support prioritas"
        ],
        downloadUrl: "https://example.com/full.zip"
      }
    }
  },
  {
    id: 3,
    title: "Landing Page UMKM",
    desc: "Template landing page modern untuk UMKM, responsive, dengan animasi scroll dan dark mode.",
    category: "Website",
    emoji: "🚀",
    demoUrl: "https://example.com",
    archived: true,
    plans: {
      free: {
        price: 0,
        features: [
          "✅ 1 halaman",
          "✅ Responsive",
          "✅ Dark mode",
          "❌ Multi-halaman",
          "❌ Form kontak",
          "❌ SEO optimization"
        ],
        downloadUrl: "https://example.com/demo.zip"
      },
      premium: {
        price: 100000,
        features: [
          "✅ Unlimited halaman",
          "✅ Semua fitur gratis",
          "✅ Form kontak",
          "✅ SEO optimization",
          "✅ Integrasi WhatsApp",
          "✅ Support prioritas"
        ],
        downloadUrl: "https://example.com/full.zip"
      }
    }
  },
  {
    id: 4,
    title: "Aplikasi Absensi QR",
    desc: "Absensi karyawan via QR code, rekap otomatis, export Excel, dan geofencing.",
    category: "Mobile",
    emoji: "📱",
    demoUrl: "https://example.com",
    archived: false,
    plans: {
      free: {
        price: 0,
        features: [
          "✅ Maks 10 karyawan",
          "✅ Absensi QR dasar",
          "✅ Rekap harian",
          "❌ Geofencing",
          "❌ Export Excel",
          "❌ Multi-cabang"
        ],
        downloadUrl: "https://example.com/demo.zip"
      },
      premium: {
        price: 300000,
        features: [
          "✅ Unlimited karyawan",
          "✅ Semua fitur gratis",
          "✅ Geofencing",
          "✅ Export Excel & PDF",
          "✅ Multi-cabang",
          "✅ Support prioritas"
        ],
        downloadUrl: "https://example.com/full.zip"
      }
    }
  },
  {
    id: 5,
    title: "Portfolio Generator",
    desc: "Buat website portofolio otomatis dari input JSON. Support custom domain dan tema.",
    category: "Web App",
    emoji: "🎨",
    demoUrl: "https://example.com",
    archived: true,
    plans: {
      free: {
        price: 0,
        features: [
          "✅ 1 template",
          "✅ Subdomain appskuy",
          "✅ Auto-generate dari JSON",
          "❌ Custom domain",
          "❌ Semua template",
          "❌ Analytics"
        ],
        downloadUrl: "https://example.com/demo.zip"
      },
      premium: {
        price: 75000,
        features: [
          "✅ Semua template",
          "✅ Custom domain",
          "✅ Analytics",
          "✅ Tanpa watermark",
          "✅ Update gratis",
          "✅ Support prioritas"
        ],
        downloadUrl: "https://example.com/full.zip"
      }
    }
  },
  {
    id: 6,
    title: "Sistem Manajemen Sekolah",
    desc: "SIAKAD lengkap: siswa, guru, jadwal, nilai, pembayaran SPP, dan portal orang tua.",
    category: "Web App",
    emoji: "🏫",
    demoUrl: "https://example.com",
    archived: false,
    plans: {
      free: {
        price: 0,
        features: [
          "✅ Maks 50 siswa",
          "✅ Data siswa & guru",
          "✅ Jadwal dasar",
          "❌ Modul SPP",
          "❌ Portal orang tua",
          "❌ Multi-tahun ajaran"
        ],
        downloadUrl: "https://example.com/demo.zip"
      },
      premium: {
        price: 450000,
        features: [
          "✅ Unlimited siswa",
          "✅ Semua fitur gratis",
          "✅ Modul SPP lengkap",
          "✅ Portal orang tua",
          "✅ Multi-tahun ajaran",
          "✅ Support prioritas"
        ],
        downloadUrl: "https://example.com/full.zip"
      }
    }
  }
];

/* ============ STATE ============ */
let state = {
  filter: "all",
  search: "",
  projects: [...PROJECTS]
};

/* ============ ELEMENTS ============ */
const grid = document.getElementById("projectGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const toast = document.getElementById("toast");

/* ============ RENDER ============ */
function render() {
  const filtered = state.projects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(state.search) ||
                        p.desc.toLowerCase().includes(state.search) ||
                        p.category.toLowerCase().includes(state.search);
    let matchFilter = true;
    if (state.filter === "free")    matchFilter = !p.archived;
    if (state.filter === "premium") matchFilter = !p.archived && p.plans.premium.price > 0;
    if (state.filter === "archived")matchFilter = p.archived;
    return matchSearch && matchFilter;
  });

  grid.innerHTML = "";
  emptyState.style.display = filtered.length ? "none" : "block";

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    const premiumPrice = p.plans.premium.price;
    card.innerHTML = `
      <div class="card-img">
        ${p.archived ? '<span class="badge-archived">📦 ARSIP</span>' : ''}
        <span class="card-badge badge-free">GRATIS</span>
        ${premiumPrice > 0 ? `<span class="card-badge badge-paid badge-second">PREMIUM</span>` : ''}
        ${p.emoji}
      </div>
      <div class="card-body">
        <span class="card-cat">${p.category}</span>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-price-row">
          <span class="price-tag free">Gratis</span>
          ${premiumPrice > 0 ? `<span class="price-tag paid">Premium · Rp ${premiumPrice.toLocaleString("id-ID")}</span>` : ''}
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" data-action="preview" data-id="${p.id}">👁 Preview</button>
          <button class="btn" data-action="download-free" data-id="${p.id}">⬇ Coba Gratis</button>
          <button class="icon-btn ${p.archived ? "active" : ""}" data-action="archive" data-id="${p.id}" title="${p.archived ? "Keluarkan dari arsip" : "Arsipkan"}">
            ${p.archived ? "📤" : "📦"}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  updateStats();
}

function updateStats() {
  const active = state.projects.filter(p => !p.archived);
  document.getElementById("statTotal").textContent = active.length;
  document.getElementById("statFree").textContent =
    active.filter(p => p.plans.free.price === 0).length;
  document.getElementById("statPaid").textContent =
    active.filter(p => p.plans.premium.price > 0).length;
}

/* ============ EVENT: SEARCH ============ */
searchInput.addEventListener("input", e => {
  state.search = e.target.value.toLowerCase().trim();
  render();
});

/* ============ EVENT: FILTER ============ */
filters.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  filters.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  state.filter = chip.dataset.filter;
  render();
});

/* ============ EVENT: CARD ACTIONS ============ */
grid.addEventListener("click", e => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const project = state.projects.find(p => p.id === id);
  if (!project) return;

  const action = btn.dataset.action;
  if (action === "preview")       openPreview(project);
  if (action === "download-free") downloadFree(project);
  if (action === "archive")       toggleArchive(project);
});

/* ============ PREVIEW ============ */
const previewModal = document.getElementById("previewModal");
const previewFrame = document.getElementById("previewFrame");
const previewTitle = document.getElementById("previewTitle");
const previewDesc = document.getElementById("previewDesc");
const previewActions = document.getElementById("previewActions");

function openPreview(p) {
  previewTitle.textContent = p.title;
  previewDesc.textContent = p.desc;
  previewFrame.src = p.demoUrl;

  const f = p.plans.free, pr = p.plans.premium;
  previewActions.innerHTML = `
    <div class="plan-compare">
      <div class="plan-card">
        <h4>Gratis</h4>
        <p class="plan-price">Rp 0</p>
        <ul>${f.features.map(x => `<li>${x}</li>`).join("")}</ul>
        <button class="btn btn-primary full" id="dlFree">⬇ Download Gratis</button>
      </div>
      <div class="plan-card premium">
        <h4>Premium</h4>
        <p class="plan-price">Rp ${pr.price.toLocaleString("id-ID")}</p>
        <ul>${pr.features.map(x => `<li>${x}</li>`).join("")}</ul>
        <button class="btn btn-primary full" id="dlPremium">🔒 Beli Premium</button>
      </div>
    </div>
    <button class="btn full" id="modalArchive" style="margin-top:14px">
      ${p.archived ? "📤 Keluarkan dari Arsip" : "📦 Arsipkan"}
    </button>
  `;

  previewActions.querySelector("#dlFree").onclick = () => downloadFree(p);
  previewActions.querySelector("#dlPremium").onclick = () => handlePremium(p, true);
  previewActions.querySelector("#modalArchive").onclick = () => {
    toggleArchive(p); closePreview();
  };

  previewModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closePreview() {
  previewModal.classList.remove("show");
  previewFrame.src = "";
  document.body.style.overflow = "";
}
document.getElementById("closePreview").onclick = closePreview;
previewModal.addEventListener("click", e => { if (e.target === previewModal) closePreview(); });

/* ============ DOWNLOAD GRATIS ============ */
function downloadFree(p) {
  showToast("⬇️ Download versi GRATIS dimulai (fitur terbatas)");
  // window.open(p.plans.free.downloadUrl, "_blank"); // aktifkan di produksi
  setTimeout(() => {
    showToast("ℹ️ Versi gratis aktif. Upgrade ke Premium untuk fitur penuh.");
  }, 2000);
}

/* ============ PREMIUM / BAYAR ============ */
const payModal = document.getElementById("payModal");
let currentPayProject = null;

function handlePremium(p, fromModal = false) {
  currentPayProject = p;
  document.getElementById("payProjectName").textContent = p.title + " — Premium";
  document.getElementById("payPrice").textContent =
    "Rp " + p.plans.premium.price.toLocaleString("id-ID");
  document.getElementById("payEmail").value = "";
  payModal.classList.add("show");
  if (fromModal) closePreview();
}

document.getElementById("closePay").onclick = () => payModal.classList.remove("show");
payModal.addEventListener("click", e => { if (e.target === payModal) payModal.classList.remove("show"); });

document.getElementById("payConfirm").onclick = () => {
  const email = document.getElementById("payEmail").value.trim();
  if (!email || !email.includes("@")) {
    showToast("⚠️ Masukkan email yang valid");
    return;
  }
  payModal.classList.remove("show");
  showToast("✅ Pembayaran sukses! Link Premium dikirim ke " + email);
  // Di produksi: integrasikan Midtrans/Xendit di sini
};

/* ============ ARSIP ============ */
function toggleArchive(p) {
  p.archived = !p.archived;
  showToast(p.archived ? "📦 Disimpan ke arsip" : "📤 Dikeluarkan dari arsip");
  render();
}

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ============ THEME ============ */
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
  const isLight = document.body.dataset.theme === "light";
  document.body.dataset.theme = isLight ? "" : "light";
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "dark" : "light");
};
if (localStorage.getItem("theme") === "light") {
  document.body.dataset.theme = "light";
  themeToggle.textContent = "☀️";
}

/* ============ INIT ============ */
render();