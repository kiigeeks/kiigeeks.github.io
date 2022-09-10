//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const darkLight = document.querySelector("#darkLight")
const darkLight2 = document.querySelector("#darkLight2")
const html = document.querySelector("html")

//navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

//hamburger
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});

//hamburger close
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

//dark mode
darkLight.addEventListener("click", () => {
    html.classList.toggle("dark")
    console.log(html.classList[1])
    if (html.classList[1] == 'dark'){
        // html.classList.add('dark')
        localStorage.theme = 'dark'
        darkLight.src = './dist/img/sun.png'
        darkLight2.src = './dist/img/sun.png'
    }else{
        // html.classList.remove('dark')
        localStorage.theme = 'light'
        darkLight.src = './dist/img/moon.png'
        darkLight2.src = './dist/img/moon.png'
    }
})

darkLight2.addEventListener("click", () => {
    html.classList.toggle("dark")
    console.log(html.classList[1])
    if (html.classList[1] == 'dark'){
        // html.classList.add('dark')
        localStorage.theme = 'dark'
        darkLight.src = './dist/img/sun.png'
        darkLight2.src = './dist/img/sun.png'
    }else{
        // html.classList.remove('dark')
        localStorage.theme = 'light'
        darkLight.src = './dist/img/moon.png'
        darkLight2.src = './dist/img/moon.png'
    }
}) 

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkLight.src = './dist/img/sun.png'
    darkLight2.src = './dist/img/sun.png'
}else{
    darkLight.src = './dist/img/moon.png'
    darkLight2.src = './dist/img/moon.png'
}


// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwFBCB1LYZ4AWLTLo0DBbIXxp-D1ppxfGXfZOOpfkShHBcET3zzMgAEYoVfQsfSmjVZ0w/exec'
const form = document.forms['contact-form']

//ambil class tombol main DOM
const alert_loading = document.querySelector('#alert-loading');
const alert_success = document.querySelector('#alert-success');
const alert_error = document.querySelector('#alert-error');
const btnSubmit = document.querySelector('#btnSend');

form.addEventListener('submit', e => {
    e.preventDefault()

    //saat diklik 
    //tampil pesan loading dan hilangkan tombol
    btnSubmit.classList.toggle('hidden');
    alert_loading.classList.toggle('hidden');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // console.log('Success!', response)
        //jika berhasil textbox kosong, tombol tampil, pesan berhasil, matikan pesan loading
        form.reset();
        alert_loading.classList.toggle('hidden');
        alert_success.classList.toggle('hidden');
        setTimeout(function () {
            alert_success.classList.toggle('hidden');
            btnSubmit.classList.toggle('hidden');
        }, 5000);


    })
    .catch(error => {
        // console.error('Error!', error.message)
        alert_loading.classList.toggle('hidden');
        alert_error.classList.toggle('hidden');
        btnSubmit.classList.toggle('hidden');
    })
})