const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const hcontents = $$('.header-contents');
const himg = $$('.header-img');
const tabct = $$('.tab-content');
const tabit = $$('.tab-item');
const tabActive = $(".tab-item.ac");
const line = $("ul .line");
requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
});
tabit.forEach((tab, index) => {
    const btn = $$('.bt-sr')[index - 1];
    const headercontent = hcontents[index];
    const headerimg = himg[index];
    const tabcontent = tabct[index];
    tab.onclick = function () {
        $('.tab-item.ac').classList.remove('ac');
        $('.tab-content.ac').classList.remove('ac');
        $('.header-img.ac').classList.remove('ac');
        $('.header-contents.ac').classList.remove('ac');
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
        tab.classList.add('ac')
        tabcontent.classList.add('ac')
        headerimg.classList.add('ac')
        headercontent.classList.add('ac')
    }
});
$$('.bt-sr').forEach((btn, index) => {
    const tabb = tabit[index];
    const headercontent = hcontents[index];
    const headerimg = himg[index];
    const tabcontent = tabct[index];
    btn.onclick = function () {
        $('.tab-item.ac').classList.remove('ac');
        $('.tab-content.ac').classList.remove('ac');
        $('.header-img.ac').classList.remove('ac');
        $('.header-contents.ac').classList.remove('ac');
        line.style.left = tabb.offsetLeft + "px";
        line.style.width = tabb.offsetWidth + "px";
        tabb.classList.add('ac')
        tabcontent.classList.add('ac')
        headerimg.classList.add('ac')
        headercontent.classList.add('ac')
    }
});
$('.bt-sr0').onclick = (() => {
    $('.tab-item.ac').classList.remove('ac');
    $('.tab-content.ac').classList.remove('ac');
    $('.header-img.ac').classList.remove('ac');
    $('.header-contents.ac').classList.remove('ac');
    line.style.left = tabit[5].offsetLeft + "px";
    line.style.width = tabit[5].offsetWidth + "px";
    tabit[5].classList.add('ac')
    tabct[5].classList.add('ac')
    himg[5].classList.add('ac')
    hcontents[5].classList.add('ac')
})

/*
const light = $('.bt-light')
const body = $('body')
const dark = $('.bt-dark')

light.addEventListener('click', () => {
    body.setAttribute('data-theme', 'dark');
    dark.setAttribute('style', 'display: flex')
    light.setAttribute('style', 'display: none')
    document.querySelector('.header-img').setAttribute('style', 'filter: brightness(100%);')
});

dark.addEventListener('click', () => {
    body.setAttribute('data-theme', 'light')
    light.setAttribute('style', 'display: flex')
    dark.setAttribute('style', 'display: none')
    document.querySelector('.header-img').setAttribute('style', 'filter: brightness(55%);')
});

*/
var Img = document.querySelector('.home-clb')

function Math() {
    const Mathd = (Img.getBoundingClientRect().top) * 0.4
    return Mathd;
}

const IG = window.addEventListener('scroll', () => {
    document.querySelector('.home-2-img').setAttribute('style', `background-position: center ${Math()}px`)
})

/* phần dây chuyền ảnh trang chủ */

$('#next').addEventListener('click', () => {
    let lists = $$('.items');
    $('.slide').appendChild(lists[0])
})
$('#back').addEventListener('click', () => {
    let lists = $$('.items');
    $('.slide').prepend(lists[lists.length - 1])
})

/* mobile */

const mobi = $('.i');
mobi.addEventListener('click', () => {
    $('.i-bg').setAttribute('style','visibility: visible');
    console.log(1);
});

const menu = $('.i-menu')
menu.addEventListener('click', () => {
    $('.i-bg').setAttribute('style','visibility: hidden');
});

$$('.tab-menu').forEach((tab, index) => {
    const btn = $$('.bt-sr')[index - 1];
    const headercontent = hcontents[index];
    const headerimg = himg[index];
    const tabcontent = tabct[index];
    const tabb = tabit[index];
    tab.onclick = function () {
        $('.tab-item.ac').classList.remove('ac');
        $('.tab-menu.ac').classList.remove('ac');
        $('.tab-content.ac').classList.remove('ac');
        $('.header-img.ac').classList.remove('ac');
        $('.header-contents.ac').classList.remove('ac');
        tab.classList.add('ac')
        tabcontent.classList.add('ac')
        headerimg.classList.add('ac')
        headercontent.classList.add('ac')
        tabb.classList.add('ac')
        $('.i-bg').setAttribute('style','visibility: hidden');
    }
});