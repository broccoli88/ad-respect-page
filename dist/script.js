// NAVBR

const menuButton = document.querySelector(".menu-icon")
const menuShape = document.querySelector('.menu-icon__shape')
const nav = document.querySelector('.nav')
const inputIcon = document.querySelector('.list-item__input-icon')
const inputListItem = document.querySelector('.list-item__input')
const inputField = document.querySelector('.list-item__input-field')
const navFirstItem = document.querySelector('.list-item:first-of-type')
const subNav = document.querySelector('.sub-nav')
const subNavShape = document.querySelector('.sub-nav-shape')


let isMobile = false

menuButton.addEventListener('click', () => {
    menuShape.classList.toggle('menu-icon--transform')
    nav.classList.toggle('nav--show')
})


inputIcon.addEventListener('click', () => {
    inputListItem.classList.add('list-item__input--visible')
    inputField.classList.add('list-item__input-field--visible')
    inputField.focus()
})

inputField.addEventListener('focusout', () => {
    inputField.classList.remove('list-item__input-field--visible')
    inputListItem.classList.remove('list-item__input--visible')
})


navFirstItem.addEventListener('click', () => {
    if (isMobile) {
        subNav.classList.toggle('sub-nav-unwrap')
        subNavShape.classList.toggle('menu-icon--transform')
    }
})


const checkIfMobileView = () => {
    window.innerWidth < 768 ? isMobile = true : isMobile = false
}

window.addEventListener('resize', () => {
    checkIfMobileView()
    if (!isMobile) {
        nav.classList.remove('nav--show')
        subNav.classList.remove('sub-nav-unwrap')
        menuShape.classList.remove('menu-icon--transform')
        subNavShape.classList.remove('menu-icon--transform')
    }
})

window.addEventListener('load', checkIfMobileView)

//  HERO SLIDER

const hero = document.querySelector('.hero')
const slideWrapper = document.querySelector('.slide-wrapper')
const sliderBtnsLeft = document.querySelectorAll('.slider-btn-left')
const sliderBtnsRight = document.querySelectorAll('.slider-btn-right')
const slideWrapperChildren = [...slideWrapper.children]
let firstSliderWidth = slideWrapper.querySelector('.slide').offsetWidth




let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId

let cardPerView = Math.round(slideWrapper.offsetWidth / firstSliderWidth)

slideWrapperChildren.slice(-cardPerView).reverse().forEach(slide => {
    slideWrapper.insertAdjacentHTML('afterbegin', slide.outerHTML)
})

slideWrapperChildren.slice(0, cardPerView).forEach(slide => {
    slideWrapper.insertAdjacentHTML('beforeend', slide.outerHTML)
})

sliderBtnsLeft.forEach(btn => {
    btn.addEventListener('click', () => {
        slideWrapper.scrollLeft -= firstSliderWidth
    })
})

sliderBtnsRight.forEach(btn => {
    btn.addEventListener('click', () => {
        slideWrapper.scrollLeft += firstSliderWidth
    })
})

const dragStart = (e) => {
    isDragging = true
    slideWrapper.classList.add('dragging')
    startX = e.pageX
    startScrollLeft = slideWrapper.scrollLeft
}

const dragging = (e) => {
    if (!isDragging) return
    slideWrapper.scrollLeft = startScrollLeft - (e.pageX - startX)

}

const dragStop = () => {
    isDragging = false
    slideWrapper.classList.remove('dragging')
}

const autoPlay = () => {
    if (window.innerWidth < 700) return
    timeoutId = setTimeout(() => slideWrapper.scrollLeft += firstSliderWidth, 2500)
}
autoPlay()

const infiniteScroll = () => {
    if (slideWrapper.scrollLeft === 0) {
        slideWrapper.classList.add('no-transition')
        slideWrapper.scrollLeft = slideWrapper.scrollWidth - (2 * slideWrapper.offsetWidth)
        slideWrapper.classList.remove('no-transition')
    } else if (Math.ceil(slideWrapper.scrollLeft) === slideWrapper.scrollWidth - slideWrapper.offsetWidth) {
        slideWrapper.classList.add('no-transition')
        slideWrapper.scrollLeft = slideWrapper.offsetWidth
        slideWrapper.classList.remove('no-transition')
    }

    clearTimeout(timeoutId)
    if (!hero.matches(':hover')) autoPlay()
}

slideWrapper.addEventListener('mousedown', dragStart)
slideWrapper.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)
slideWrapper.addEventListener('scroll', infiniteScroll)
hero.addEventListener('mouseenter', () => clearTimeout(timeoutId))
hero.addEventListener('mouseleave', autoPlay)


//   REALIZACJE

// Gallery btn

const galleryContainer = document.querySelector('.gallery-container')
const galleryCurtain = document.querySelector('.gallery__curtain')
const galleryBtn = document.querySelector('.gallery__btn')
const galleryBtnArrow = document.querySelector('.gallery__btn-arrow')
const galleryBtnText = document.querySelector('.gallery__btn-text')
let isBtnToggled = false


galleryBtn.addEventListener('click', () => {
    if (isBtnToggled) isBtnToggled = false
    else isBtnToggled = true

    galleryContainer.classList.toggle('gallery-container-full', isBtnToggled)
    galleryCurtain.classList.toggle('gallery__curtain-disabled', isBtnToggled)
    galleryBtnArrow.classList.toggle('rotate-180', isBtnToggled)
    galleryBtn.classList.toggle('gallery__btn-position', isBtnToggled)
    galleryBtn.classList.add('gallery__btn-effect')

    setTimeout(() => {
        if (isBtnToggled) galleryBtnText.textContent = 'Pokaż mniej'
        else galleryBtnText.textContent = 'Rozwiń'

    }, 600)

    setTimeout(() => {
        galleryBtn.classList.remove('gallery__btn-effect')
    }, 600)

})


//  Macy.js

const galleryImgs = [
    "./images/realizacje/Photo-re1.png",
    "./images/realizacje/Photo-re2.png",
    "./images/realizacje/Photo-re3.png",
    "./images/realizacje/Photo-re4.png",
    "./images/realizacje/Photo-re5.png",
    "./images/realizacje/Photo-re6.png",
    "./images/realizacje/Photo-re7.png",
    "./images/realizacje/Photo-re8.png",
    "./images/realizacje/Photo-re9.png",
    "./images/realizacje/Photo-re3.png",
    "./images/realizacje/Photo-re4.png",
    "./images/realizacje/Photo-re5.png",
    "./images/realizacje/Photo-re6.png",
    "./images/realizacje/Photo-re7.png",
    "./images/realizacje/Photo-re8.png",
    "./images/realizacje/Photo-re9.png"
]
const macyContainer = document.querySelector('#macy-container')

const macyInstance = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: true,
    margin: 16,
    columns: 4,
    margin: {
        x: 30,
        y: 30
    },
    breakAt: {
        1600: {

            columns: 4
        },
        1540: {
            margin: {
                x: 30,
                y: 30
            },
            columns: 3
        },
        1140: {
            margin: {
                x: 20,
                y: 20
            },
            columns: 2
        },
        600: {
            margin: {
                x: 10,
                y: 10
            },
            columns: 1,
        }
    }
});

const createContainers = () => {
    galleryImgs.forEach(img => {
        const pictureEl = document.createElement('picture')
        const imgEl = document.createElement('img')

        pictureEl.classList.add('macy-item')
        imgEl.classList.add('img')
        imgEl.src = img

        pictureEl.appendChild(imgEl)
        macyContainer.appendChild(pictureEl)
    })
}

window.addEventListener('load', () => {
    createContainers()
    macyInstance.reInit();
    macyInstance.runOnImageLoad(function () {
        macyInstance.recalculate(true, true);
    });
})

// Modal

const modal = document.querySelector('.modal')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalImg = document.querySelector('.modal-img')
const modalContentContainer = document.querySelector('.modal__content-container')
const modalCloseBtn = document.querySelector('.modal__close-btn')
const modalBtnLeft = document.querySelector('.modal-btn-left')
const modalBtnRight = document.querySelector('.modal-btn-right')

let imgSet = []
let currentModalImgSrc
let currentImgIndex

const closeModal = () => {
    modal.classList.remove('show-modal')
    document.body.style.overflow = 'initial'
    setTimeout(() => modalImg.src = '', 500)
}

const getImgSet = () => {
    imgSet = []
    macyContainer.children.forEach(child => {
        const img = child.firstElementChild.src
        imgSet.push(img)
    })
}

macyContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('img')) {

        modal.classList.add('show-modal')
        document.body.style.overflow = 'hidden'
        modalImg.src = e.target.src
        currentModalImgSrc = e.target.src
        currentImgIndex = imgSet.indexOf(currentModalImgSrc);
        getImgSet()
    }
})

modalCloseBtn.addEventListener('click', () => {
    closeModal()
})

modalWrapper.addEventListener('click', (e) => {
    if (e.target === modalWrapper) {
        closeModal()
    }
})

const changeImg = () => {
    modalImg.classList.add('modal__img-fade')
    currentModalImgSrc = imgSet[currentImgIndex];

    setTimeout(() => modalImg.src = currentModalImgSrc, 200)
}

modalBtnLeft.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex - 1 + imgSet.length) % imgSet.length;
    modalImg.classList.add('modal__img-fade-left')
    changeImg()
    setTimeout(() => modalImg.classList.remove('modal__img-fade-left'), 500)

})

modalBtnRight.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % imgSet.length;
    modalImg.classList.add('modal__img-fade-right')
    changeImg()
    setTimeout(() => modalImg.classList.remove('modal__img-fade-right'), 500)
})






