// Pilih semua tombol kategori di sidebar
// Ini adalah element <p> yang ada di dalam div.side-bar
var sidebarEcommerce = document.getElementById('sidebar-p');
var sidebarPersonal = document.querySelectorAll('.side-bar p')[1];
var sidebarCompany = document.querySelectorAll('.side-bar p')[2];
var sidebarBlog = document.querySelectorAll('.side-bar p')[3];
var sidebarLanding = document.querySelectorAll('.side-bar p')[4];
var btnE = document.querySelectorAll('#ecommerce')
var btnP = document.querySelectorAll('#personal')
var btnC = document.querySelectorAll('#company')
var btnB = document.querySelectorAll('#blog')
var btnL = document.querySelectorAll('#landing')
var btnDrop = document.querySelector('.dropdown-btn')
var kategory = document.querySelector('.category')
// Pilih semua tombol desain/di dalam content
// Ini adalah element <button> dengan class .btn-desain
var semuaTombol = document.querySelectorAll('.btn-desain');
var header = document.querySelector('.header-container')
var categoryP = document.querySelector('.sidebar-p')


function resetTampilan() {
    semuaTombol.forEach(tombol => {
        tombol.style.display = 'none';
    });
}

btnDrop.addEventListener('click', function() {
    console.log("halo");
    if (kategory.style.display === 'none' || kategory.style.display === '') {
        kategory.style.display = 'flex';
    } else {
        kategory.style.display = 'none';
    }
})

// Saat tombol kategori E-Commerce di sidebar diklik
sidebarEcommerce.addEventListener('click', function () {
    resetTampilan()
    btnE.forEach(t => {
        t.style.display = 'inline-block';
    });
});

// Saat tombol kategori Personal di sidebar diklik
sidebarPersonal.addEventListener('click', function () {
    resetTampilan()
    btnP.forEach(t => {
        t.style.display = 'inline-block'
    });

});

// Saat tombol kategori Company di sidebar diklik
sidebarCompany.addEventListener('click', function () {
    resetTampilan()
    btnC.forEach(t => {
        t.style.display = 'inline-block'
    });

});

// Saat tombol kategori Blog di sidebar diklik
sidebarBlog.addEventListener('click', function () {
    resetTampilan()
    btnB.forEach(t => {
        t.style.display = 'inline-block'
    });

});

// Saat tombol kategori Landing Page di sidebar diklik
sidebarLanding.addEventListener('click', function () {
    resetTampilan()
    btnL.forEach(t => {
        t.style.display = 'inline-block'
    });
});
/////////////////////////////////////////////////////////

