let btn = document.querySelector('.btn-hamburger button')
let nav = document.querySelector('.navegacao')
let linkClick = document.querySelectorAll('.link-click')
let divsPrincipal = document.querySelectorAll('.div-principal')

btn.onclick = function () {
    if (btn.firstElementChild.textContent == 'menu') {
        btn.firstElementChild.textContent = 'close'
    } else {
        btn.firstElementChild.textContent = 'menu'
    }

    if (nav.classList.contains('efeitoMenuMobile')) {
        nav.classList.remove('efeitoMenuMobile')
        divsPrincipal.forEach(divPrincipal => {
            divPrincipal.classList.remove('linkExpand')
        })
    }else{
        nav.classList.add('efeitoMenuMobile')
    }
}

linkClick.forEach(link => {
    link.onclick = function () {
        if (window.innerWidth <= 769) {   
            /* divsPrincipal.forEach(divPrincipal => {
                divPrincipal.classList.remove('linkExpand')
            }) */
            link.nextElementSibling.classList.toggle('linkExpand')
        }

    }
})

document.querySelectorAll('.efeitoDeImagem').forEach(li => {
    li.onmouseout = function () {
        li.children[0].firstElementChild.classList.add('efeito')
    }
})

document.querySelectorAll('.idioma').forEach(lang => {
    lang.onclick = function () {
        lang.parentNode.parentNode.textContent = lang.textContent
    }
})

let idiomas = document.querySelector('.idiomas')
document.querySelector('.lang').onclick = function () {
    idiomas.classList.toggle('displayBtn')
}

let btn = document.getElementById('btnScroll')
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        btn.style.display = 'block'
    }else{
        btn.style.display = 'none'
    }
})