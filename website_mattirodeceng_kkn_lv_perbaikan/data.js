// ============================================================
// DATA SITUS — ubah isi di file ini, simpan, lalu muat ulang halaman.
// Hati-hati: jangan hapus tanda kutip ("), koma (,), atau kurung.
// Untuk baris baru di dalam teks, tulis \n
// ============================================================
// Nomor WhatsApp: awalan 62, tanpa 0 atau + (contoh 0812-3456-7890 → 6281234567890)
const S = { wa: "6285255834335", pop: 1552, 
  // Fasilitas kesehatan: pisahkan nama dengan koma. Jumlahnya dihitung otomatis.
  posyandu: "Posyandu Melati, Posyandu Mawar",
  poskesdes: "Poskesdes Mattiro Deceng",
  lingkungan: "Galaggara, Langkeang, Balombong, Sampobia",
  kades: "Rusdianto, SE",
  sambutan: "Melalui portal ini kami ingin pelayanan kelurahan lebih terbuka dan mudah dijangkau oleh seluruh warga. ",
  visi: "Mewujudkan masyarakat lebih sejahtera melalui pelayanan prima, bermartabat dan profesional.",
  misi: "Mendorong terwujudnya nilai-nilai agama, moral, budaya dan pendidikan yang berkualitas.\nMendorong terwujudnya wilayah yang aman, damai, bersih dan sehat.\nMendorong terwujudnya ketahanan pangan dan ekonomi kreatif.\nMendorong terwujudnya semangat gotong royong dan partisipasi masyarakat dalam pembangunan.",
  motto: "Mattiro Deceng \u201CMallise\u201D",
  bantuan: "PKH (Program Keluarga Harapan)\nBantuan pangan Bulog\nBPJS",
  kontak: "Kelurahan Mattiro Deceng\nKecamatan Lau, Kabupaten Maros\nSulawesi Selatan\nTelepon: 085255834335" };
const svc = [{ icon: "🪪", title: "KTP & KK", desc: "Pembuatan dan perpanjangan KTP dan Kartu Keluarga" }, { icon: "📄", title: "Surat domisili", desc: "Keterangan tempat tinggal" }, { icon: "🚚", title: "Surat pindah", desc: "Pengantar pindah keluar daerah" }, { icon: "🏛", title: "Pembayaran PBB", desc: "Pembayaran Pajak Bumi dan Bangunan" }, { icon: "🤝", title: "Surat tidak mampu", desc: "Untuk bantuan dan beasiswa" }, { icon: "👶", title: "Pengantar akta kelahiran", desc: "Surat keterangan akta kelahiran" }];
const sop = [["Pengurusan KTP/KK hilang", "±1 hari"], ["Pengantar pindah keluar daerah", "±1 hari"], ["Surat keterangan akta kelahiran", "±1 hari"], ["Perpanjangan KTP/KK", "±1 hari"], ["Pengantar nikah sipil", "±1 hari"], ["Pengantar SKCK", "±1 hari"], ["Surat keterangan tidak mampu", "5–10 menit"]];
// Sekolah di kelurahan. Jumlah sekolah, siswa, dan total per kelas dihitung otomatis.
// kelas: ["kelas", laki-laki, perempuan, jumlah penerima beasiswa]
// staf (tenaga kependidikan) boleh dikosongkan: staf: ""
const sekolah = [
  { nama: "SDN 107 Langkeang", jenjang: "SD", lingkungan: "Langkeang", kepsek: "Nurjiah, S.Pd", guru: 10, staf: "",
    kelas: [["1", 10, 8, 0], ["2", 4, 7, 11], ["3", 9, 10, 18], ["4", 6, 7, 13], ["5", 9, 7, 15], ["6", 10, 17, 27]] },
  { nama: "SDN 110 Inpres Galaggara", jenjang: "SD", lingkungan: "Galaggara", kepsek: "H. Abdul Rasyid, S.Pd", guru: 8, staf: "Operator 1, keamanan 1, petugas kebersihan 1",
    kelas: [["1", 15, 13, 0], ["2", 17, 9, 6], ["3", 12, 12, 6], ["4", 13, 20, 7], ["5", 15, 12, 4], ["6", 9, 12, 3]] },
  { nama: "SMPN 40 Satap Langkeang", jenjang: "SMP", lingkungan: "Langkeang", kepsek: "Mustari, SE (Plt.)", guru: 9, staf: "Operator 1, bujang/penjaga sekolah 1",
    kelas: [["7", 9, 5, 7], ["8", 13, 7, 8], ["9", 8, 11, 10]] },
];
// Berita: cat = kategori, date = tahun-bulan-tanggal. Berita baru tulis di paling atas.
const news = [
];
// Agenda: hanya yang tanggalnya belum lewat yang tampil. Contoh:
// { title: "Posyandu balita", date: "2026-10-20", place: "Posyandu Galaggara, 08.00 WITA" },
const agenda = [
];
// Galeri: ["judul foto", "lokasi file"]. Taruh foto baru di folder foto/ lalu tambahkan satu baris di sini.
const gal = [
  ["Foto Kegiatan 1", "images/foto1.jpeg"],
  ["Foto Kegiatan 2", "images/foto2.jpeg"],
  ["Foto Kegiatan 3", "images/foto 3.jpeg"],
  ["Foto Kegiatan 4", "images/foto4.jpeg"],
  ["Foto Kegiatan 5", "images/foto5.jpeg"],
  ["Foto Kegiatan 6", "images/foto6.jpeg"],
  ["Foto Kegiatan 7", "images/foto7.jpeg"],
  ["Foto Kegiatan 8", "images/foto8.jpeg"],
];

