// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        if (navOverlay) navOverlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    if (navOverlay) {
        navOverlay.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

const profilMenuItems = document.querySelectorAll('.profil-menu li');
const profilTextBox = document.querySelector('.profil-text-box');

const content = {
    'PROFIL': `
        <p><strong>RS NUSANTARA MEDIKA</strong> adalah rumah sakit yang berkomitmen memberikan pelayanan kesehatan profesional dan berstandar tinggi bagi seluruh masyarakat. Dengan dukungan tenaga medis berpengalaman serta peralatan medis modern, kami siap memberikan layanan yang cepat, tepat, dan aman. Seluruh proses mulai dari pendaftaran, pemeriksaan, hingga perawatan dirancang agar efisien dan ramah pasien, sehingga memberikan pengalaman layanan yang nyaman dan terpercaya.</p>
        <br>
        <p>Sebagai penyedia layanan kesehatan terpadu, <strong>RS NUSANTARA MEDIKA</strong> menawarkan beragam fasilitas seperti layanan gawat darurat 24 jam, poliklinik spesialis, pemeriksaan diagnostik lengkap, serta pelayanan rawat inap yang memenuhi standar keselamatan pasien. Melalui pendekatan humanis dan peningkatan kualitas berkelanjutan, rumah sakit ini berupaya menjadi pilihan utama masyarakat dalam mendapatkan solusi kesehatan yang komprehensif.</p>
    `,
    'VISI & MISI': `
        <h3 style="color: #63AE52; margin-bottom: 15px;">VISI</h3>
        <p>Menjadi rumah sakit pilihan utama masyarakat yang memberikan pelayanan kesehatan berkualitas, profesional, dan terpercaya dengan mengutamakan kepuasan dan keselamatan pasien.</p>
        <br>
        <h3 style="color: #63AE52; margin-bottom: 15px;">MISI</h3>
        <ul style="margin-left: 20px; line-height: 1.8;">
            <li>Memberikan pelayanan kesehatan yang komprehensif dan berkualitas tinggi</li>
            <li>Mengembangkan sumber daya manusia yang profesional dan kompeten</li>
            <li>Menyediakan fasilitas dan teknologi medis yang modern</li>
            <li>Menerapkan standar keselamatan pasien secara konsisten</li>
            <li>Menjalin kemitraan yang baik dengan stakeholder</li>
        </ul>
    `,
    'SEJARAH': `
        <p><strong>RS NUSANTARA MEDIKA</strong> didirikan pada tahun 2010 dengan visi menjadi pusat pelayanan kesehatan terpercaya di wilayah Surabaya dan sekitarnya. Berawal dari klinik kecil dengan 10 tempat tidur, kini telah berkembang menjadi rumah sakit dengan kapasitas 150 tempat tidur dan dilengkapi dengan berbagai fasilitas medis modern.</p>
        <br>
        <p>Sepanjang perjalanannya, RS Nusantara Medika terus berkomitmen untuk meningkatkan kualitas pelayanan melalui pengembangan SDM, pembaruan teknologi medis, dan perluasan layanan kesehatan. Berbagai penghargaan telah diraih sebagai bukti dedikasi kami dalam memberikan pelayanan kesehatan terbaik bagi masyarakat.</p>
    `,
    'SALAM DIREKTUR': `
        <p style="font-style: italic;">"Assalamualaikum Warahmatullahi Wabarakatuh,</p>
        <br>
        <p>Puji syukur kehadirat Allah SWT atas segala rahmat dan karunia-Nya. Sebagai Direktur RS Nusantara Medika, saya mengucapkan selamat datang kepada seluruh pasien, keluarga pasien, dan pengunjung yang telah mempercayakan kesehatan Anda kepada kami.</p>
        <br>
        <p>Kami berkomitmen untuk terus meningkatkan kualitas pelayanan kesehatan dengan mengutamakan keselamatan dan kepuasan pasien. Dengan dukungan tenaga medis profesional dan fasilitas yang memadai, kami siap melayani Anda dengan sepenuh hati.</p>
        <br>
        <p style="font-style: italic;">Wassalamualaikum Warahmatullahi Wabarakatuh"</p>
        <br>
        <p><strong>Dr. Yoga Rizki Pratama, Sp.PD</strong><br>Direktur RS Nusantara Medika</p>
    `,
    'PENGHARGAAN & AKREDITASI': `
        <h3 style="color: #63AE52; margin-bottom: 15px;">AKREDITASI</h3>
        <ul style="margin-left: 20px; line-height: 1.8; margin-bottom: 20px;">
            <li>Akreditasi Paripurna dari Komisi Akreditasi Rumah Sakit (KARS) - 2022</li>
            <li>Sertifikat ISO 9001:2015 untuk Sistem Manajemen Mutu</li>
            <li>Sertifikat ISO 14001:2015 untuk Sistem Manajemen Lingkungan</li>
        </ul>
        <h3 style="color: #63AE52; margin-bottom: 15px;">PENGHARGAAN</h3>
        <ul style="margin-left: 20px; line-height: 1.8;">
            <li>Rumah Sakit Sayang Ibu dan Bayi - Kemenkes RI (2021)</li>
            <li>Best Healthcare Service Award - Jawa Timur (2020)</li>
            <li>Green Hospital Award (2019)</li>
        </ul>
    `
};

profilMenuItems.forEach(item => {
    item.addEventListener('click', function () {
        profilMenuItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        const menuText = this.textContent.trim();
        if (content[menuText]) {
            profilTextBox.innerHTML = content[menuText];
        }
    });
});
