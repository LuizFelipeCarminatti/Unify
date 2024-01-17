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
            divsPrincipal.forEach(divPrincipal => {
                divPrincipal.classList.remove('linkExpand')
            })
            link.nextElementSibling.classList.toggle('linkExpand')
        }

    }
})