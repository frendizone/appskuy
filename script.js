/* ============ KONFIGURASI WA ============ */
const WA_ADMIN = "6281234567890"; // 🔧 GANTI dengan nomor WA admin asli

/* ============ DATA PROJECT ============ */
const PROJECTS = [
  {
    id: 1, title: "Landing Page UMKM Kopi",
    desc: "Template landing page modern untuk kedai kopi, responsive, dengan animasi scroll.",
    category: "Web", subcategory: "Landing Page", emoji: "☕",
    thumbnail: "https://picsum.photos/seed/kopi/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/kopi1/1280/720",
      "https://picsum.photos/seed/kopi2/1280/720",
      "https://picsum.photos/seed/kopi3/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ 1 halaman", "✅ Responsive", "✅ Dark mode", "❌ Multi-halaman", "❌ Form kontak", "❌ SEO optimization"] },
      premium: { price: 100000, features: ["✅ Unlimited halaman", "✅ Semua fitur gratis", "✅ Form kontak", "✅ SEO optimization", "✅ Integrasi WhatsApp", "✅ Support prioritas"] }
    }
  },
  {
    id: 2, title: "Company Profile Agency",
    desc: "Website company profile profesional untuk agency/konsultan, dengan halaman tim & portfolio.",
    category: "Web", subcategory: "Company Profile", emoji: "🏢",
    thumbnail: "https://picsum.photos/seed/agency/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/agency1/1280/720",
      "https://picsum.photos/seed/agency2/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ 3 halaman", "✅ Responsive", "✅ Halaman tim", "❌ Blog", "❌ Multi-bahasa", "❌ SEO optimization"] },
      premium: { price: 200000, features: ["✅ Unlimited halaman", "✅ Semua fitur gratis", "✅ Blog", "✅ Multi-bahasa", "✅ SEO optimization", "✅ Support prioritas"] }
    }
  },
  {
    id: 3, title: "E-Commerce Dashboard",
    desc: "Dashboard admin toko online dengan chart penjualan, manajemen produk, dan laporan real-time.",
    category: "Web", subcategory: "Dashboard", emoji: "🛒",
    thumbnail: "https://picsum.photos/seed/dash/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/dash1/1280/720",
      "https://picsum.photos/seed/dash2/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ 1 toko / 1 user", "✅ Manajemen produk dasar", "✅ Laporan harian", "❌ Multi-outlet", "❌ Export Excel/PDF", "❌ Support prioritas"] },
      premium: { price: 150000, features: ["✅ Unlimited toko & user", "✅ Semua fitur gratis", "✅ Multi-outlet", "✅ Export Excel/PDF", "✅ Support prioritas 24/7", "✅ Update gratis"] }
    }
  },
  {
    id: 4, title: "Toko Online Sederhana",
    desc: "Website e-commerce siap pakai untuk UMKM: katalog produk, keranjang, checkout WhatsApp.",
    category: "Web", subcategory: "E-Commerce", emoji: "🛍️",
    thumbnail: "https://picsum.photos/seed/toko/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/toko1/1280/720",
      "https://picsum.photos/seed/toko2/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ Maks 20 produk", "✅ Katalog produk", "✅ Checkout WhatsApp", "❌ Payment gateway", "❌ Multi-vendor", "❌ Laporan penjualan"] },
      premium: { price: 250000, features: ["✅ Unlimited produk", "✅ Semua fitur gratis", "✅ Payment gateway", "✅ Multi-vendor", "✅ Laporan penjualan", "✅ Support prioritas"] }
    }
  },
  {
    id: 5, title: "Aplikasi Kasir (POS)",
    desc: "Point of Sale lengkap: scan barcode, struk digital, multi-outlet, dan laporan harian.",
    category: "Desktop", subcategory: "POS", emoji: "💳",
    thumbnail: "https://picsum.photos/seed/pos/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/pos1/1280/720",
      "https://picsum.photos/seed/pos2/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ 1 kasir / 1 device", "✅ Transaksi dasar", "✅ Struk digital", "❌ Multi-outlet", "❌ Barcode scanner", "❌ Laporan lanjutan"] },
      premium: { price: 250000, features: ["✅ Unlimited kasir & device", "✅ Semua fitur gratis", "✅ Multi-outlet", "✅ Barcode scanner", "✅ Laporan lanjutan + export", "✅ Support prioritas"] }
    }
  },
  {
    id: 6, title: "Aplikasi Absensi QR",
    desc: "Absensi karyawan via QR code, rekap otomatis, export Excel, dan geofencing.",
    category: "Mobile", subcategory: "Absensi", emoji: "📱",
    thumbnail: "https://picsum.photos/seed/absensi/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/absensi1/1280/720",
      "https://picsum.photos/seed/absensi2/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ Maks 10 karyawan", "✅ Absensi QR dasar", "✅ Rekap harian", "❌ Geofencing", "❌ Export Excel", "❌ Multi-cabang"] },
      premium: { price: 300000, features: ["✅ Unlimited karyawan", "✅ Semua fitur gratis", "✅ Geofencing", "✅ Export Excel & PDF", "✅ Multi-cabang", "✅ Support prioritas"] }
    }
  },
  {
    id: 7, title: "Portfolio Generator",
    desc: "Buat website portofolio otomatis dari input JSON. Support custom domain dan tema.",
    category: "Website", subcategory: "Portfolio", emoji: "🎨",
    thumbnail: "https://picsum.photos/seed/portfolio/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/portfolio1/1280/720"
    ],
    plans: {
      free:    { price: 0,     features: ["✅ 1 template", "✅ Subdomain appskuy", "✅ Auto-generate dari JSON", "❌ Custom domain", "❌ Semua template", "❌ Analytics"] },
      premium: { price: 75000, features: ["✅ Semua template", "✅ Custom domain", "✅ Analytics", "✅ Tanpa watermark", "✅ Update gratis", "✅ Support prioritas"] }
    }
  },
  {
    id: 8, title: "Sistem Manajemen Sekolah",
    desc: "SIAKAD lengkap: siswa, guru, jadwal, nilai, pembayaran SPP, dan portal orang tua.",
    category: "Web", subcategory: "Dashboard", emoji: "🏫",
    thumbnail: "https://picsum.photos/seed/sekolah/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/sekolah1/1280/720",
      "https://picsum.photos/seed/sekolah2/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ Maks 50 siswa", "✅ Data siswa & guru", "✅ Jadwal dasar", "❌ Modul SPP", "❌ Portal orang tua", "❌ Multi-tahun ajaran"] },
      premium: { price: 450000, features: ["✅ Unlimited siswa", "✅ Semua fitur gratis", "✅ Modul SPP lengkap", "✅ Portal orang tua", "✅ Multi-tahun ajaran", "✅ Support prioritas"] }
    }
  },
  {
    id: 9, title: "Landing Page Restoran",
    desc: "Landing page restoran dengan menu digital, galeri, dan tombol reservasi WhatsApp.",
    category: "Web", subcategory: "Landing Page", emoji: "🍜",
    thumbnail: "https://picsum.photos/seed/resto/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/resto1/1280/720",
      "https://picsum.photos/seed/resto2/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ 1 halaman", "✅ Menu digital", "✅ Tombol reservasi WA", "❌ Galeri foto", "❌ Multi-bahasa", "❌ SEO optimization"] },
      premium: { price: 120000, features: ["✅ Unlimited halaman", "✅ Semua fitur gratis", "✅ Galeri foto", "✅ Multi-bahasa", "✅ SEO optimization", "✅ Support prioritas"] }
    }
  },
  {
    id: 10, title: "Aplikasi Laundry",
    desc: "Aplikasi manajemen laundry: input order, tracking status, notifikasi WA ke pelanggan.",
    category: "Mobile", subcategory: "Kasir", emoji: "🧺",
    thumbnail: "https://picsum.photos/seed/laundry/600/400",
    videoUrl: "",
    gallery: [
      "https://picsum.photos/seed/laundry1/1280/720"
    ],
    plans: {
      free:    { price: 0,      features: ["✅ Maks 30 order/bulan", "✅ Input order", "✅ Tracking status", "❌ Notifikasi WA", "❌ Multi-outlet", "❌ Laporan keuangan"] },
      premium: { price: 200000, features: ["✅ Unlimited order", "✅ Semua fitur gratis", "✅ Notifikasi WA", "✅ Multi-outlet", "✅ Laporan keuangan", "✅ Support prioritas"] }
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

/* ============ WA HELPERS ============ */
function openWA(message) {
  const url = `https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function waAsk(project, plan) {
  const planLabel = plan === "premium"
    ? `Premium (Rp ${project.plans.premium.price.toLocaleString("id-ID")})`
    : "Gratis (fitur terbatas)";
  const msg =
    `Halo Admin Appskuy 👋\n\n` +
    `Saya tertarik dengan project:\n\n` +
    `📦 *${project.title}*\n` +
    `📂 Kategori: ${project.category} › ${project.subcategory}\n` +
    `💰 Paket: ${planLabel}\n\n` +
    `Mohon info lengkap & cara ordernya. Terima kasih! 🙏`;
  openWA(msg);
}

/* ============ RENDER GRID ============ */
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
    const hasVideo = !!p.videoUrl;
    card.innerHTML = `
      <div class="card-thumb" data-action="preview" data-id="${p.id}">
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
        <span class="card-badge badge-free">GRATIS</span>
        ${premiumPrice > 0 ? `<span class="card-badge badge-paid badge-second">PREMIUM</span>` : ''}
        <div class="play-badge">
          <div class="play-icon"></div>
        </div>
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
          <button class="btn btn-primary" data-action="preview" data-id="${p.id}">${hasVideo ? "▶ Lihat Video" : "🖼 Lihat Preview"}</button>
          <button class="btn btn-wa" data-action="wa" data-id="${p.id}">💬 Tanya</button>
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
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const id = Number(el.dataset.id);
  const project = state.projects.find(p => p.id === id);
  if (!project) return;

  const action = el.dataset.action;
  if (action === "preview") openPreview(project);
  if (action === "wa")      waAsk(project, "free");
});

/* ============ PREVIEW MODAL ============ */
const previewModal = document.getElementById("previewModal");
const previewMedia = document.getElementById("previewMedia");
const previewThumbs = document.getElementById("previewThumbs");
const previewTitle = document.getElementById("previewTitle");
const previewDesc = document.getElementById("previewDesc");
const previewActions = document.getElementById("previewActions");

let currentPreview = { project: null, mediaList: [], mediaIndex: 0 };

function openPreview(p) {
  currentPreview.project = p;

  const mediaList = [];
  if (p.videoUrl) mediaList.push({ type: "video", src: p.videoUrl, thumb: p.thumbnail });
  const gallery = (p.gallery && p.gallery.length) ? p.gallery : [p.thumbnail];
  gallery.forEach(src => mediaList.push({ type: "image", src, thumb: src }));

  currentPreview.mediaList = mediaList;
  currentPreview.mediaIndex = 0;

  previewTitle.textContent = p.title;
  previewDesc.textContent = `${p.category} › ${p.subcategory} — ${p.desc}`;

  renderPreviewMedia();
  renderPreviewThumbs();
  renderPreviewActions();

  previewModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function renderPreviewMedia() {
  const item = currentPreview.mediaList[currentPreview.mediaIndex];
  if (!item) { previewMedia.innerHTML = ""; return; }

  if (item.type === "video") {
    const ytMatch = item.src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    if (ytMatch) {
      previewMedia.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1"
                frameborder="0" allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen></iframe>
      `;
    } else {
      previewMedia.innerHTML = `
        <video src="${item.src}" controls autoplay playsinline preload="metadata" poster="${item.thumb}"></video>
      `;
    }
  } else {
    previewMedia.innerHTML = `<img src="${item.src}" alt="Preview">`;
  }
}

function renderPreviewThumbs() {
  if (currentPreview.mediaList.length <= 1) { previewThumbs.innerHTML = ""; return; }
  previewThumbs.innerHTML = currentPreview.mediaList.map((m, i) => `
    <div class="thumb ${i === currentPreview.mediaIndex ? "active" : ""}" data-index="${i}">
      <img src="${m.thumb}" alt="thumb ${i+1}">
    </div>
  `).join("");
}

previewThumbs.addEventListener("click", e => {
  const t = e.target.closest(".thumb");
  if (!t) return;
  currentPreview.mediaIndex = Number(t.dataset.index);
  renderPreviewMedia();
  renderPreviewThumbs();
});

function renderPreviewActions() {
  const p = currentPreview.project;
  const f = p.plans.free, pr = p.plans.premium;

  previewActions.innerHTML = `
    <div class="plan-compare">
      <div class="plan-card">
        <h4>Versi Gratis</h4>
        <p class="plan-price">Rp 0</p>
        <ul>${f.features.map(x => `<li>${x}</li>`).join("")}</ul>
        <button class="btn btn-wa full" id="waFree">💬 Tanya Versi Gratis</button>
      </div>
      <div class="plan-card premium">
        <h4>Premium</h4>
        <p class="plan-price">Rp ${pr.price.toLocaleString("id-ID")}</p>
        <ul>${pr.features.map(x => `<li>${x}</li>`).join("")}</ul>
        <button class="btn btn-wa full" id="waPremium">💬 Beli Premium</button>
      </div>
    </div>
  `;
  previewActions.querySelector("#waFree").onclick = () => waAsk(p, "free");
  previewActions.querySelector("#waPremium").onclick = () => waAsk(p, "premium");
}

function closePreview() {
  previewModal.classList.remove("show");
  previewMedia.innerHTML = "";
  previewThumbs.innerHTML = "";
  document.body.style.overflow = "";
}
document.getElementById("closePreview").onclick = closePreview;
previewModal.addEventListener("click", e => { if (e.target === previewModal) closePreview(); });

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
