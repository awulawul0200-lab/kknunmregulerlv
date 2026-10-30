const $ = s => document.querySelector(s);
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = (d, o) => new Date(d + "T00:00").toLocaleDateString("id-ID", o);
// Data ada di data.js

function render() {
  const ling = S.lingkungan.split(",").map(x => x.trim()).filter(Boolean);
  const list = t => String(t).split(",").map(x => x.trim()).filter(Boolean);
  const pos = list(S.posyandu), pkd = list(S.poskesdes);
  $("#st-pop").dataset.n = S.pop; $("#st-ling").dataset.n = ling.length; $("#st-pos").dataset.n = pos.length; $("#st-pkd").dataset.n = pkd.length;
  $("#pos-list").innerHTML = pos.map(p => `<a>${esc(p)}</a>`).join("");
  $("#pkd-list").innerHTML = pkd.map(p => `<a>${esc(p)}</a>`).join("");
  $("#ling-list").innerHTML = ling.map(l => `<a>Lingkungan ${esc(l)}</a>`).join("");
  $("#st-sek").dataset.n = sekolah.length;
  const sum = (k, i) => k.reduce((t, r) => t + r[i], 0);
  const tot = sekolah.map(s => ({ s, L: sum(s.kelas, 1), P: sum(s.kelas, 2), B: sum(s.kelas, 3) }));
  $("#sek-total").textContent = sekolah.length ? `${sekolah.length} sekolah · ${tot.reduce((t, x) => t + x.L + x.P, 0).toLocaleString("id-ID")} siswa · ${sekolah.reduce((t, s) => t + s.guru, 0)} guru` : "";
  $("#sek-list").innerHTML = sekolah.length ? tot.map(({ s, L, P, B }) => `<article class="card sek"><span class="tag">${esc(s.jenjang)}</span><h4>${esc(s.nama)}</h4><p class="sek-meta">Lingkungan ${esc(s.lingkungan)}${s.kepsek ? "<br>Kepala sekolah: " + esc(s.kepsek) : ""}</p><div class="sek-sum"><div><b>${L + P}</b><span>Siswa</span></div><div><b>${s.guru}</b><span>Guru</span></div><div><b>${B}</b><span>Penerima beasiswa</span></div></div><table class="sek-tbl"><thead><tr><th>Kelas</th><th>L</th><th>P</th><th>Jumlah</th><th>Beasiswa</th></tr></thead><tbody>${s.kelas.map(r => `<tr><td>${esc(r[0])}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[1] + r[2]}</td><td>${r[3]}</td></tr>`).join("")}</tbody><tfoot><tr><td>Total</td><td>${L}</td><td>${P}</td><td>${L + P}</td><td>${B}</td></tr></tfoot></table>${s.staf ? `<p class="sek-staf">Tenaga kependidikan: ${esc(s.staf)}</p>` : ""}</article>`).join("") : "<small>Belum ada data sekolah.</small>";
  $("#kades").textContent = S.kades;
  $("#sambutan-teks").textContent = S.sambutan;
  $("#visi").textContent = S.visi;
  $("#misi").innerHTML = S.misi.split("\n").filter(Boolean).map(m => `<li>${esc(m)}</li>`).join("");
  $("#motto").textContent = S.motto;
  $("#kontak-info").innerHTML = esc(S.kontak).replace(/\n/g, "<br>");

  const wa = n => `https://wa.me/${S.wa}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin mengurus " + n + " di Kelurahan Mattiro Deceng.\n\nNama:\nNIK:\nAlamat/Lingkungan:\nKeperluan:")}`;
  $("#svc").innerHTML = svc.map(s => `<a class="card svc" href="${wa(s.title)}" target="_blank" rel="noopener"><i>${esc(s.icon)}</i><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p><small style="color:var(--accent2);font-weight:600">Ajukan via WhatsApp ›</small></a>`).join("");
  $("#bantuan-list").innerHTML = S.bantuan.split("\n").filter(Boolean).map(b => `<a class="card bn" href="${wa("informasi " + b)}" target="_blank" rel="noopener"><i>🤲</i><div><h3>${esc(b)}</h3><small>Tanya via WhatsApp ›</small></div></a>`).join("");
  $("#sop-list").innerHTML = sop.map(p => `<div class="card sop-card"><h3>${p[0]}</h3><dl><dt>Waktu</dt><dd>${p[1]}</dd><dt>Biaya</dt><dd class="free">Gratis</dd></dl></div>`).join("");

  const today = new Date().toISOString().slice(0, 10);
  const up = agenda.filter(a => a.date >= today);
  $("#agenda-list").innerHTML = up.length ? up.map(a => `<li><time><b>${fmt(a.date, { day: "numeric" })}</b>${fmt(a.date, { month: "short" })}</time><div><strong>${esc(a.title)}</strong><br><small>${esc(a.place)}</small></div></li>`).join("") : "<li><small>Belum ada agenda mendatang.</small></li>";

  document.querySelectorAll("[data-n]").forEach(n => io.observe(n));
}

$("#tgl").textContent = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
$("#yr").textContent = new Date().getFullYear();
$("#gal").innerHTML = gal.map((g, i) => `<button data-i="${i}" aria-label="Lihat foto ${i + 1}"><img src="${esc(g[1])}" alt="" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('missing-photo')"></button>`).join("");
const galWindow = document.querySelector(".gallery-window");
const galIndicator = $("#gal-indicator");
function updateGalIndicator() {
  const card = $("#gal").querySelector("button");
  if (!card) return;
  const step = card.getBoundingClientRect().width + 18;
  const current = Math.min(gal.length, Math.max(1, Math.round(galWindow.scrollLeft / step) + 1));
  galIndicator.textContent = `${current} / ${gal.length}`;
}
$("#gal-prev").onclick = () => { const card = $("#gal").querySelector("button"); if (card) galWindow.scrollBy({ left: -(card.getBoundingClientRect().width + 18), behavior: "smooth" }); };
$("#gal-next").onclick = () => { const card = $("#gal").querySelector("button"); if (card) galWindow.scrollBy({ left: card.getBoundingClientRect().width + 18, behavior: "smooth" }); };
galWindow.addEventListener("scroll", updateGalIndicator, { passive: true });
window.addEventListener("resize", updateGalIndicator);
$("#gal").onclick = e => { const b = e.target.closest("button[data-i]"); if (!b) return; const g = gal[Number(b.dataset.i)]; if (!g) return; $("#lbimg").src = g[1]; $("#lbimg").alt = ""; $("#lbt").textContent = ""; $("#lb").classList.add("on"); };
updateGalIndicator();
$("#lb").onclick = () => $("#lb").classList.remove("on");
addEventListener("keydown", e => { if (e.key == "Escape") $("#lb").classList.remove("on"); });

$("#burger").onclick = () => { const o = $("#nav").classList.toggle("show"); $("#burger").setAttribute("aria-expanded", o); };
document.querySelectorAll(".dd>button").forEach(b => b.onclick = () => b.parentElement.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => $("#nav").classList.remove("show")));
$("#mode").onclick = () => { const r = document.documentElement; r.dataset.theme = r.dataset.theme == "dark" ? "light" : "dark"; };

$("#q").addEventListener("keydown", e => { if (e.key != "Enter") return; const v = e.target.value.toLowerCase().trim(); if (!v) return; const hit = [...document.querySelectorAll("h3,h2,strong")].find(h => h.textContent.toLowerCase().includes(v)); if (hit) { hit.scrollIntoView({ behavior: "smooth", block: "center" }); $("#qmsg").textContent = ""; } else $("#qmsg").textContent = "Tidak ditemukan. Coba kata lain."; });

$("#f").onsubmit = e => {
  e.preventDefault(); const d = new FormData(e.target), m = $("#fmsg");
  const nama = d.get("nama").trim(), pesan = d.get("pesan").trim();
  if (!nama || !pesan) { m.textContent = "Isi nama dan pesan terlebih dahulu."; return; }
  const t = `Assalamu'alaikum, saya ${nama}${d.get("hp").trim() ? " (HP: " + d.get("hp").trim() + ")" : ""}.\n\n${pesan}`;
  window.open(`https://wa.me/${S.wa}?text=${encodeURIComponent(t)}`, "_blank", "noopener");
  m.textContent = "Membuka WhatsApp…"; e.target.reset();
};

const io = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; io.unobserve(en.target); const t = +en.target.dataset.n; let s = null; const step = ts => { s = s || ts; const p = Math.min((ts - s) / 1200, 1); en.target.textContent = Math.round(t * p).toLocaleString("id-ID"); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); }));

render();
