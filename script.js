// Tunggu sampai seluruh HTML selesai dimuat baru jalankan script
document.addEventListener('DOMContentLoaded', () => {

  // ── HIRE ME MODAL ──
  const hireBtn      = document.getElementById('hireBtn');
  const hireModal    = document.getElementById('hireModal');
  const modalClose   = document.getElementById('modalClose');
  const hireSubmit   = document.getElementById('hireSubmit');
  const modalContent = document.getElementById('modalContent');
  const modalSuccess = document.getElementById('modalSuccess');

  // Buka modal saat klik "Hire Me"
  hireBtn.addEventListener('click', () => {
    hireModal.classList.add('active');
    modalContent.style.display = 'block';
    modalSuccess.style.display = 'none';
  });

  // Tutup modal via tombol X
  modalClose.addEventListener('click', () => {
    hireModal.classList.remove('active');
  });

  // Tutup modal saat klik di luar area modal
  hireModal.addEventListener('click', (e) => {
    if (e.target === hireModal) {
      hireModal.classList.remove('active');
    }
  });

  // Submit proposal
  hireSubmit.addEventListener('click', () => {
    const name  = document.getElementById('mName').value.trim();
    const email = document.getElementById('mEmail').value.trim();
    const type  = document.getElementById('mType').value;

    if (!name || !email || !type) {
      alert('Mohon lengkapi nama, email, dan jenis project terlebih dahulu.');
      return;
    }

    // Tampilkan pesan sukses
    modalContent.style.display = 'none';
    modalSuccess.style.display = 'block';

    // Tutup modal otomatis setelah 3 detik
    setTimeout(() => {
      hireModal.classList.remove('active');
    }, 3000);
  });


  // ── CONTACT FORM ──
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name  = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const msg   = document.getElementById('cMsg').value.trim();

    if (!name || !email || !msg) {
      alert('Mohon isi semua field sebelum mengirim.');
      return;
    }

    // Tampilkan pesan sukses di bawah form
    document.getElementById('formSuccess').style.display = 'block';
    this.reset();

    // Tampilkan toast notifikasi
    showToast();
  });


  // ── TOAST NOTIFICATION ──
  function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }


  // ── SMOOTH SCROLL untuk anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

}); // akhir DOMContentLoaded