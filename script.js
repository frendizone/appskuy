/* ============ DATA PROJECT ============ */
const PROJECTS = [
  {
    id: 1, title: "Landing Page UMKM Kopi",
    desc: "Template landing page modern untuk kedai kopi, responsive, dengan animasi scroll.",
    category: "Web", subcategory: "Landing Page", emoji: "☕",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ 1 halaman", "✅ Responsive", "✅ Dark mode", "❌ Multi-halaman", "❌ Form kontak", "❌ SEO optimization"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 100000,
        features: ["✅ Unlimited halaman", "✅ Semua fitur gratis", "✅ Form kontak", "✅ SEO optimization", "✅ Integrasi WhatsApp", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 2, title: "Company Profile Agency",
    desc: "Website company profile profesional untuk agency/konsultan, dengan halaman tim & portfolio.",
    category: "Web", subcategory: "Company Profile", emoji: "🏢",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ 3 halaman", "✅ Responsive", "✅ Halaman tim", "❌ Blog", "❌ Multi-bahasa", "❌ SEO optimization"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 200000,
        features: ["✅ Unlimited halaman", "✅ Semua fitur gratis", "✅ Blog", "✅ Multi-bahasa", "✅ SEO optimization", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 3, title: "E-Commerce Dashboard",
    desc: "Dashboard admin toko online dengan chart penjualan, manajemen produk, dan laporan real-time.",
    category: "Web", subcategory: "Dashboard", emoji: "🛒",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ 1 toko / 1 user", "✅ Manajemen produk dasar", "✅ Laporan harian", "❌ Multi-outlet", "❌ Export Excel/PDF", "❌ Support prioritas"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 150000,
        features: ["✅ Unlimited toko & user", "✅ Semua fitur gratis", "✅ Multi-outlet", "✅ Export Excel/PDF", "✅ Support prioritas 24/7", "✅ Update gratis"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 4, title: "Toko Online Sederhana",
    desc: "Website e-commerce siap pakai untuk UMKM: katalog produk, keranjang, checkout WhatsApp.",
    category: "Web", subcategory: "E-Commerce", emoji: "🛍️",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ Maks 20 produk", "✅ Katalog produk", "✅ Checkout WhatsApp", "❌ Payment gateway", "❌ Multi-vendor", "❌ Laporan penjualan"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 250000,
        features: ["✅ Unlimited produk", "✅ Semua fitur gratis", "✅ Payment gateway", "✅ Multi-vendor", "✅ Laporan penjualan", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 5, title: "Aplikasi Kasir (POS)",
    desc: "Point of Sale lengkap: scan barcode, struk digital, multi-outlet, dan laporan harian.",
    category: "Desktop", subcategory: "POS", emoji: "💳",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ 1 kasir / 1 device", "✅ Transaksi dasar", "✅ Struk digital", "❌ Multi-outlet", "❌ Barcode scanner", "❌ Laporan lanjutan"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 250000,
        features: ["✅ Unlimited kasir & device", "✅ Semua fitur gratis", "✅ Multi-outlet", "✅ Barcode scanner", "✅ Laporan lanjutan + export", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 6, title: "Aplikasi Absensi QR",
    desc: "Absensi karyawan via QR code, rekap otomatis, export Excel, dan geofencing.",
    category: "Mobile", subcategory: "Absensi", emoji: "📱",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ Maks 10 karyawan", "✅ Absensi QR dasar", "✅ Rekap harian", "❌ Geofencing", "❌ Export Excel", "❌ Multi-cabang"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 300000,
        features: ["✅ Unlimited karyawan", "✅ Semua fitur gratis", "✅ Geofencing", "✅ Export Excel & PDF", "✅ Multi-cabang", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 7, title: "Portfolio Generator",
    desc: "Buat website portofolio otomatis dari input JSON. Support custom domain dan tema.",
    category: "Website", subcategory: "Portfolio", emoji: "🎨",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ 1 template", "✅ Subdomain appskuy", "✅ Auto-generate dari JSON", "❌ Custom domain", "❌ Semua template", "❌ Analytics"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 75000,
        features: ["✅ Semua template", "✅ Custom domain", "✅ Analytics", "✅ Tanpa watermark", "✅ Update gratis", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 8, title: "Sistem Manajemen Sekolah",
    desc: "SIAKAD lengkap: siswa, guru, jadwal, nilai, pembayaran SPP, dan portal orang tua.",
    category: "Web", subcategory: "Dashboard", emoji: "🏫",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ Maks 50 siswa", "✅ Data siswa & guru", "✅ Jadwal dasar", "❌ Modul SPP", "❌ Portal orang tua", "❌ Multi-tahun ajaran"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 450000,
        features: ["✅ Unlimited siswa", "✅ Semua fitur gratis", "✅ Modul SPP lengkap", "✅ Portal orang tua", "✅ Multi-tahun ajaran", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 9, title: "Landing Page Restoran",
    desc: "Landing page restoran dengan menu digital, galeri, dan tombol reservasi WhatsApp.",
    category: "Web", subcategory: "Landing Page", emoji: "🍜",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ 1 halaman", "✅ Menu digital", "✅ Tombol reservasi WA", "❌ Galeri foto", "❌ Multi-bahasa", "❌ SEO optimization"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 120000,
        features: ["✅ Unlimited halaman", "✅ Semua fitur gratis", "✅ Galeri foto", "✅ Multi-bahasa", "✅ SEO optimization", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  },
  {
    id: 10, title: "Aplikasi Laundry",
    desc: "Aplikasi manajemen laundry: input order, tracking status, notifikasi WA ke pelanggan.",
    category: "Mobile", subcategory: "Kasir", emoji: "🧺",
    demoUrl: "https://example.com",
    plans: {
      free: { price: 0,
        features: ["✅ Maks 30 order/bulan", "✅ Input order", "✅ Tracking status", "❌ Notifikasi WA", "❌ Multi-outlet", "❌ Laporan keuangan"],
        downloadUrl: "https://example.com/demo.zip" },
      premium: { price: 200000,
        features: ["✅ Unlimited order", "✅ Semua fitur gratis", "✅ Notifikasi WA", "✅ Multi-outlet", "✅ Laporan keuangan", "✅ Support prioritas"],
        downloadUrl: "https://example.com/full.zip" }
    }
  }
];

/* ============ STATE ============ */
let state = {
  filter: "all",
  search: "",
  page: 1,
  perPage: 6,
  projects: [...PROJECTS]
};

/* ============ ELEMENTS ============ */
const grid = document.getElementById("projectGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const toast = document.getElementById("toast");
const pagination = document.getElementById("pagination");
const memberLabel = document.getElementById("memberLabel");
const openRegisterBtn = document.getElementById("openRegister");
const pricingRegisterBtn = document.getElementById("pricingRegister");

/* ============ STORAGE HELPERS ============ */
const store = {
  get(key, def) {
    try { const v = localStorage.getItem("appskuy_" + key); return v ? JSON.parse(v) : def; }
    catch { return def; }
  },
  set(key, val) { localStorage.setItem("appskuy_" + key, JSON.stringify(val)); }
};

/* ============ VISITOR TRACKING ============ */
function initVisitor() {
  // Increment total pengunjung (per sesi)
  if (!sessionStorage.getItem("appskuy_session")) {
    const visits = store.get("visits", 0) + 1;
    store.set("visits", visits);
    sessionStorage.setItem("appskuy_session", "1");
  }
  // Online = simulasi random 5-25
  const online = Math.floor(Math.random() * 20) + 5;
  document.getElementById("onlineCount").textContent = online;
  // Update online tiap 8 detik
  setInterval(() => {
    const o = Math.floor(Math.random() * 20) + 5;
    document.getElementById("onlineCount").textContent = o;
  }, 8000);
  updateStatsPanel();
}

function updateStatsPanel() {
  document.getElementById("visitCount").textContent = store.get("visits", 0).toLocaleString("id-ID");
  document.getElementById("memberCount").textContent = store.get("members", []).length.toLocaleString("id-ID");
  document.getElementById("downloadCount").textContent = store.get("downloads", 0).toLocaleString("id-ID");
}

/* ============ MEMBER ============ */
function getMember() {
  return store.get("currentMember", null);
}
function setMember(m) {
  store.set("currentMember", m);
  updateMemberUI();
}
function updateMemberUI() {
  const m = getMember();
  if (m) {
    memberLabel.textContent = "👤 " + (m.name.split(" ")[0] || "Member");
    openRegisterBtn.classList.add("logged");
    openRegisterBtn.title = m.email;
  } else {
    memberLabel.textContent = "👤 Daftar Member";
    openRegisterBtn.classList.remove("logged");
    openRegisterBtn.title = "";
  }
  updateStatsPanel();
}

/* ============ RENDER PROJECT GRID ============ */
function render() {
  const filtered = state.projects.filter(p => {
    const q = state.search;
    const matchSearch = p.title.toLowerCase().includes(q) ||
                        p.desc.toLowerCase().includes(q) ||
                        p.category.toLowerCase().includes(q) ||
                        p.subcategory.toLowerCase().includes(q);
    let matchFilter = true;
    if (state.filter === "free")    matchFilter = p.plans.free.price === 0;
    if (state.filter === "premium") matchFilter = p.plans.premium.price > 0;
    return matchSearch && matchFilter;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / state.perPage));
  if (state.page > totalPages) state.page = totalPages;
  const start = (state.page - 1) * state.perPage;
  const pageItems = filtered.slice(start, start + state.perPage);

  grid.innerHTML = "";
  emptyState.style.display = filtered.length ? "none" : "block";

  pageItems.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    const premiumPrice = p.plans.premium.price;
    card.innerHTML = `
      <div class="card-img">
        <span class="card-badge badge-free">GRATIS</span>
        ${premiumPrice > 0 ? `<span class="card-badge badge-paid badge-second">PREMIUM</span>` : ''}
        ${p.emoji}
      </div>
      <div class="card-body">
        <span class="card-cat">${p.category} › ${p.subcategory}</span>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-price-row">
          <span class="price-tag free">Gratis</span>
          ${premiumPrice > 0 ? `<span class="price-tag paid">Premium · Rp ${premiumPrice.toLocaleString("id-ID")}</span>` : ''}
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" data-action="preview" data-id="${p.id}">👁 Preview</button>
          <button class="btn" data-action="download-free" data-id="${p.id}">⬇ Coba Gratis</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  renderPagination(totalPages);
  updateStats();
}

function renderPagination(totalPages) {
  if (totalPages <= 1) { pagination.innerHTML = ""; return; }
  let html = "";
  html += `<button class="page-btn" data-page="prev" ${state.page === 1 ? "disabled" : ""}>‹</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === state.page ? "active" : ""}" data-page="${i}">${i}</button>`;
  }
  html += `<button class="page-btn" data-page="next" ${state.page === totalPages ? "disabled" : ""}>›</button>`;
  html += `<span class="page-info">Hal ${state.page} dari ${totalPages}</span>`;
  pagination.innerHTML = html;
}

pagination.addEventListener("click", e => {
  const btn = e.target.closest(".page-btn");
  if (!btn || btn.disabled) return;
  const val = btn.dataset.page;
  if (val === "prev") state.page = Math.max(1, state.page - 1);
  else if (val === "next") state.page = state.page + 1;
  else state.page = Number(val);
  render();
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

function updateStats() {
  document.getElementById("statTotal").textContent = state.projects.length;
  document.getElementById("statFree").textContent =
    state.projects.filter(p => p.plans.free.price === 0).length;
  document.getElementById("statPaid").textContent =
    state.projects.filter(p => p.plans.premium.price > 0).length;
}

/* ============ EVENT: SEARCH ============ */
searchInput.addEventListener("input", e => {
  state.search = e.target.value.toLowerCase().trim();
  state.page = 1;
  render();
});

/* ============ EVENT: FILTER ============ */
filters.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  filters.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  state.filter = chip.dataset.filter;
  state.page = 1;
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
  if (action === "download-free") tryDownloadFree(project);
});

/* ============ DOWNLOAD GRATIS (WAJIB MEMBER) ============ */
let pendingDownloadProject = null;

function tryDownloadFree(p) {
  const member = getMember();
  if (!member) {
    pendingDownloadProject = p;
    openRegisterModal();
    showToast("👤 Daftar dulu untuk download gratis");
    return;
  }
  // Sudah member → langsung download
  doDownloadFree(p);
}

function doDownloadFree(p) {
  // Increment counter download
  const dl = store.get("downloads", 0) + 1;
  store.set("downloads", dl);
  updateStatsPanel();

  showToast("⬇️ Download versi GRATIS dimulai (fitur terbatas)");
  // window.open(p.plans.free.downloadUrl, "_blank"); // aktifkan di produksi
  setTimeout(() => {
    showToast("ℹ️ Versi gratis aktif. Upgrade ke Premium untuk fitur penuh.");
  }, 2000);
}

/* ============ MODAL REGISTER ============ */
const registerModal = document.getElementById("registerModal");
const regName = document.getElementById("regName");
const regEmail = document.getElementById("regEmail");
const regSubmit = document.getElementById("regSubmit");

function openRegisterModal() {
  const m = getMember();
  if (m) {
    // Sudah login → tampilkan info
    regName.value = m.name;
    regEmail.value = m.email;
  }
  registerModal.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeRegisterModal() {
  registerModal.classList.remove("show");
  document.body.style.overflow = "";
  pendingDownloadProject = null;
}

openRegisterBtn.onclick = openRegisterModal;
pricingRegisterBtn.onclick = openRegisterModal;
document.getElementById("closeRegister").onclick = closeRegisterModal;
registerModal.addEventListener("click", e => { if (e.target === registerModal) closeRegisterModal(); });

regSubmit.onclick = () => {
  const name = regName.value.trim();
  const email = regEmail.value.trim();

  if (!name || name.length < 2) {
    showToast("⚠️ Masukkan nama yang valid");
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("⚠️ Masukkan email yang valid");
    return;
  }

  // Simpan member
  const members = store.get("members", []);
  const exists = members.find(m => m.email.toLowerCase() === email.toLowerCase());
  if (!exists) {
    members.push({ name, email, joinedAt: Date.now() });
    store.set("members", members);
  }
  setMember({ name, email });

  closeRegisterModal();
  showToast(`✅ Selamat datang, ${name.split(" ")[0]}!`);

  // Lanjutkan download yang tertunda
  if (pendingDownloadProject) {
    const p = pendingDownloadProject;
    pendingDownloadProject = null;
    setTimeout(() => doDownloadFree(p), 600);
  }
};

/* ============ PREVIEW ============ */
const previewModal = document.getElementById("previewModal");
const previewFrame = document.getElementById("previewFrame");
const previewTitle = document.getElementById("previewTitle");
const previewDesc = document.getElementById("previewDesc");
const previewActions = document.getElementById("previewActions");

function openPreview(p) {
  previewTitle.textContent = p.title;
  previewDesc.textContent = `${p.category} › ${p.subcategory} — ${p.desc}`;
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
  `;

  previewActions.querySelector("#dlFree").onclick = () => tryDownloadFree(p);
  previewActions.querySelector("#dlPremium").onclick = () => handlePremium(p, true);

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

/* ============ PREMIUM / BAYAR ============ */
const payModal = document.getElementById("payModal");

function handlePremium(p, fromModal = false) {
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
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("⚠️ Masukkan email yang valid");
    return;
  }
  payModal.classList.remove("show");
  showToast("✅ Pembayaran sukses! Link Premium dikirim ke " + email);
  // Di produksi: integrasikan Midtrans/Xendit di sini
};

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
initVisitor();
updateMemberUI();
render();
