/* ============ KONFIGURASI ============ */
const WA_ADMIN = "6281234567890"; // 🔧 GANTI nomor WA admin asli
const IMG_BASE = "img/projects/"; // folder gambar project
const IMG_EXT  = ".jpg";          // ganti ".webp" jika pakai WebP
const PLACEHOLDER = "img/projects/placeholder.jpg";

/* ============ HELPER: PATH GAMBAR OTOMATIS ============ */
function getThumb(p) {
  return `${IMG_BASE}${p.id}-thumb${IMG_EXT}`;
}
function getGallery(p) {
  const count = p.galleryCount || 0;
  const arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(`${IMG_BASE}${p.id}-${i}${IMG_EXT}`);
  }
  return arr.length ? arr : [getThumb(p)];
}

/* ============ DATA PROJECT ============ */
/* 🖼️ CARA GANTI GAMBAR:
   1. Thumbnail  → timpa file img/projects/{id}-thumb.jpg (600×400 px)
   2. Gallery    → timpa img/projects/{id}-1.jpg, {id}-2.jpg, dst (1280×720 px)
   3. Jumlah gallery → ubah angka galleryCount di bawah
   Tidak perlu edit path gambar secara manual.
*/
const PROJECTS = [
  {
    id: 1, title: "Aplikasi Kasir (POS) Sederhana",
    desc: "Kasir digital untuk warung & kafe: transaksi cepat, struk WA, laporan harian.",
    category: "Web", subcategory: "POS", emoji: "💳",
    galleryCount: 3,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ 1 kasir / 1 device", "✅ Transaksi dasar", "✅ Struk digital via WA", "❌ Multi-outlet", "❌ Barcode scanner", "❌ Laporan penjualan"] },
      premium: { price: 250000, features: ["✅ Unlimited kasir & device", "✅ Semua fitur gratis", "✅ Multi-outlet", "✅ Barcode scanner", "✅ Laporan + export Excel", "✅ Support prioritas"] }
    }
  },
  {
    id: 2, title: "Website Toko Online",
    desc: "Katalog produk + checkout WhatsApp untuk UMKM. Siap jualan online tanpa coding.",
    category: "Web", subcategory: "E-Commerce", emoji: "🛍️",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 20 produk", "✅ Katalog produk", "✅ Checkout via WhatsApp", "❌ Payment gateway", "❌ Multi-vendor", "❌ Laporan penjualan"] },
      premium: { price: 250000, features: ["✅ Unlimited produk", "✅ Semua fitur gratis", "✅ Payment gateway (Midtrans)", "✅ Multi-vendor", "✅ Laporan penjualan", "✅ Support prioritas"] }
    }
  },
  {
    id: 3, title: "Landing Page UMKM",
    desc: "Landing page 1 halaman untuk kedai kopi, restoran, laundry, salon. Fokus konversi WA.",
    category: "Web", subcategory: "Landing Page", emoji: "☕",
    galleryCount: 3,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ 1 halaman (hero + about + kontak)", "✅ Responsive mobile", "✅ Tombol WhatsApp", "❌ Galeri foto", "❌ Multi-bahasa", "❌ SEO optimization"] },
      premium: { price: 100000, features: ["✅ Unlimited halaman", "✅ Semua fitur gratis", "✅ Galeri foto", "✅ Multi-bahasa (ID/EN)", "✅ SEO optimization", "✅ Support prioritas"] }
    }
  },
  {
    id: 4, title: "Company Profile Agency",
    desc: "Website company profile profesional untuk agency/konsultan, dengan halaman tim & portfolio.",
    category: "Web", subcategory: "Company Profile", emoji: "🏢",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ 3 halaman (home, about, kontak)", "✅ Responsive", "✅ Halaman tim", "❌ Blog", "❌ Multi-bahasa", "❌ SEO optimization"] },
      premium: { price: 200000, features: ["✅ Unlimited halaman", "✅ Semua fitur gratis", "✅ Blog + kategori", "✅ Multi-bahasa", "✅ SEO optimization", "✅ Support prioritas"] }
    }
  },
  {
    id: 5, title: "Dashboard Admin E-Commerce",
    desc: "Dashboard admin toko online dengan chart penjualan, manajemen produk, dan laporan real-time.",
    category: "Web", subcategory: "Dashboard", emoji: "🛒",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ 1 toko / 1 user", "✅ Manajemen produk dasar", "✅ Laporan harian", "❌ Multi-outlet", "❌ Export Excel/PDF", "❌ Support prioritas"] },
      premium: { price: 150000, features: ["✅ Unlimited toko & user", "✅ Semua fitur gratis", "✅ Multi-outlet", "✅ Export Excel/PDF", "✅ Support prioritas 24/7", "✅ Update gratis"] }
    }
  },
  {
    id: 6, title: "Sistem Manajemen Sekolah (SIAKAD)",
    desc: "SIAKAD lengkap: siswa, guru, jadwal, nilai, pembayaran SPP, dan portal orang tua.",
    category: "Web", subcategory: "Dashboard", emoji: "🏫",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 50 siswa", "✅ Data siswa & guru", "✅ Jadwal dasar", "❌ Modul SPP", "❌ Portal orang tua", "❌ Multi-tahun ajaran"] },
      premium: { price: 450000, features: ["✅ Unlimited siswa", "✅ Semua fitur gratis", "✅ Modul SPP lengkap", "✅ Portal orang tua", "✅ Multi-tahun ajaran", "✅ Support prioritas"] }
    }
  },
  {
    id: 7, title: "Aplikasi Absensi Karyawan (Web)",
    desc: "Absensi karyawan: klik tombol, rekap harian, export Excel, dan geofencing.",
    category: "Web", subcategory: "Absensi", emoji: "🕒",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 10 karyawan", "✅ Absensi manual", "✅ Rekap harian", "❌ Geofencing", "❌ Export Excel", "❌ Multi-cabang"] },
      premium: { price: 300000, features: ["✅ Unlimited karyawan", "✅ Semua fitur gratis", "✅ Geofencing GPS", "✅ Export Excel & PDF", "✅ Multi-cabang", "✅ Support prioritas"] }
    }
  },
  {
    id: 8, title: "Portfolio Generator",
    desc: "Buat website portofolio otomatis dari input JSON. Support custom domain dan tema.",
    category: "Website", subcategory: "Portfolio", emoji: "🎨",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,     features: ["✅ 1 template", "✅ Subdomain appskuy", "✅ Auto-generate dari JSON", "❌ Custom domain", "❌ Semua template", "❌ Analytics"] },
      premium: { price: 75000, features: ["✅ Semua template (10+)", "✅ Custom domain", "✅ Analytics pengunjung", "✅ Tanpa watermark", "✅ Update gratis", "✅ Support prioritas"] }
    }
  },
  {
    id: 9, title: "Sistem Reservasi Restoran",
    desc: "Form reservasi online + notifikasi WA ke admin. Cocok untuk resto & kafe.",
    category: "Web", subcategory: "Reservasi", emoji: "🍽️",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 20 reservasi/bulan", "✅ Form reservasi", "✅ Notifikasi WA admin", "❌ Kalender visual", "❌ Multi-meja", "❌ Pembayaran DP"] },
      premium: { price: 180000, features: ["✅ Unlimited reservasi", "✅ Semua fitur gratis", "✅ Kalender visual", "✅ Multi-meja & cabang", "✅ Pembayaran DP online", "✅ Support prioritas"] }
    }
  },
  {
    id: 10, title: "Aplikasi Laundry",
    desc: "Manajemen laundry: input order, tracking status, notifikasi WA ke pelanggan.",
    category: "Web", subcategory: "Laundry", emoji: "🧺",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 30 order/bulan", "✅ Input order", "✅ Tracking status", "❌ Notifikasi WA otomatis", "❌ Multi-outlet", "❌ Laporan keuangan"] },
      premium: { price: 200000, features: ["✅ Unlimited order", "✅ Semua fitur gratis", "✅ Notifikasi WA otomatis", "✅ Multi-outlet", "✅ Laporan keuangan", "✅ Support prioritas"] }
    }
  },
  {
    id: 11, title: "Aplikasi Absensi QR",
    desc: "Absensi via scan QR code. Rekap otomatis, export Excel, dan geofencing.",
    category: "Mobile", subcategory: "Absensi", emoji: "📱",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 10 karyawan", "✅ Scan QR untuk absen", "✅ Rekap harian", "❌ Geofencing", "❌ Export Excel", "❌ Multi-cabang"] },
      premium: { price: 300000, features: ["✅ Unlimited karyawan", "✅ Semua fitur gratis", "✅ Geofencing GPS", "✅ Export Excel & PDF", "✅ Multi-cabang", "✅ Support prioritas"] }
    }
  },
  {
    id: 12, title: "Kasir Mobile (POS HP)",
    desc: "Kasir di HP untuk pedagang keliling, food truck, dan bazaar.",
    category: "Mobile", subcategory: "POS", emoji: "📲",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ 1 device", "✅ Transaksi dasar", "✅ Struk digital via WA", "❌ Cetak thermal", "❌ Multi-device", "❌ Laporan"] },
      premium: { price: 200000, features: ["✅ Unlimited device", "✅ Semua fitur gratis", "✅ Cetak thermal Bluetooth", "✅ Sinkronisasi multi-device", "✅ Laporan lengkap", "✅ Support prioritas"] }
    }
  },
  {
    id: 13, title: "Katalog Produk Digital",
    desc: "Katalog produk untuk reseller & dropshipper. Tanpa checkout, fokus chat WA.",
    category: "Mobile", subcategory: "Katalog", emoji: "📒",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 15 produk", "✅ Grid produk + harga", "✅ Tombol chat WA", "❌ Kategori produk", "❌ Pencarian", "❌ Multi-bahasa"] },
      premium: { price: 120000, features: ["✅ Unlimited produk", "✅ Semua fitur gratis", "✅ Kategori & pencarian", "✅ Multi-bahasa", "✅ Tanpa watermark", "✅ Support prioritas"] }
    }
  },
  {
    id: 14, title: "Booking Salon / Klinik",
    desc: "Booking online untuk salon, klinik, barbershop, dan spa.",
    category: "Mobile", subcategory: "Booking", emoji: "💅",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 20 booking/bulan", "✅ Form booking", "✅ Notifikasi WA admin", "❌ Pilih terapis/dokter", "❌ Pembayaran DP", "❌ Reminder otomatis"] },
      premium: { price: 200000, features: ["✅ Unlimited booking", "✅ Semua fitur gratis", "✅ Pilih terapis/dokter", "✅ Pembayaran DP online", "✅ Reminder WA otomatis", "✅ Support prioritas"] }
    }
  },
  {
    id: 15, title: "Tabungan / Kas Kelas",
    desc: "Catat setoran & penarikan kas kelas, RT/RW, atau komunitas.",
    category: "Mobile", subcategory: "Kas", emoji: "💰",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,     features: ["✅ Maks 20 anggota", "✅ Catat setoran & penarikan", "✅ Saldo otomatis", "❌ Laporan bulanan", "❌ Export Excel", "❌ Multi-kas"] },
      premium: { price: 80000, features: ["✅ Unlimited anggota", "✅ Semua fitur gratis", "✅ Laporan bulanan", "✅ Export Excel", "✅ Multi-kas", "✅ Support prioritas"] }
    }
  },
  {
    id: 16, title: "Aplikasi Kasir Desktop (Offline)",
    desc: "Kasir offline untuk toko dengan internet tidak stabil.",
    category: "Desktop", subcategory: "POS", emoji: "🖥️",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ 1 kasir", "✅ Transaksi offline", "✅ Struk cetak", "❌ Sinkronisasi cloud", "❌ Multi-outlet", "❌ Backup otomatis"] },
      premium: { price: 300000, features: ["✅ Multi-kasir", "✅ Semua fitur gratis", "✅ Sinkronisasi cloud", "✅ Multi-outlet", "✅ Backup otomatis", "✅ Support prioritas"] }
    }
  },
  {
    id: 17, title: "Manajemen Stok Gudang",
    desc: "Kelola stok masuk/keluar, peringatan stok rendah, dan multi-gudang.",
    category: "Desktop", subcategory: "Inventori", emoji: "📦",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ Maks 50 SKU", "✅ Stok masuk/keluar", "✅ Peringatan stok rendah", "❌ Barcode", "❌ Multi-gudang", "❌ Laporan"] },
      premium: { price: 250000, features: ["✅ Unlimited SKU", "✅ Semua fitur gratis", "✅ Barcode scanner", "✅ Multi-gudang", "✅ Laporan lengkap", "✅ Support prioritas"] }
    }
  },
  {
    id: 18, title: "Invoice / Nota Digital",
    desc: "Buat invoice profesional untuk freelancer & toko jasa. Export PDF.",
    category: "Desktop", subcategory: "Invoice", emoji: "🧾",
    galleryCount: 2,
    videoUrl: "",
    plans: {
      free:    { price: 0,      features: ["✅ 5 invoice/bulan", "✅ Template invoice dasar", "✅ Export PDF (watermark)", "❌ Logo custom", "❌ Multi-klien", "❌ Recurring invoice"] },
      premium: { price: 100000, features: ["✅ Unlimited invoice", "✅ Semua fitur gratis", "✅ Semua template", "✅ Logo custom", "✅ Recurring invoice", "✅ Support prioritas"] }
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
        <img src="${getThumb(p)}" alt="${p.title} — ${p.category} ${p.subcategory}"
             loading="lazy" onerror="this.src='${PLACEHOLDER}'">
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
  if (p.videoUrl) mediaList.push({ type: "video", src: p.videoUrl, thumb: getThumb(p) });
  const gallery = getGallery(p);
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
    previewMedia.innerHTML = `<img src="${item.src}" alt="Preview" onerror="this.src='${PLACEHOLDER}'">`;
  }
}

function renderPreviewThumbs() {
  if (currentPreview.mediaList.length <= 1) { previewThumbs.innerHTML = ""; return; }
  previewThumbs.innerHTML = currentPreview.mediaList.map((m, i) => `
    <div class="thumb ${i === currentPreview.mediaIndex ? "active" : ""}" data-index="${i}">
      <img src="${m.thumb}" alt="thumb ${i+1}" onerror="this.src='${PLACEHOLDER}'">
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
