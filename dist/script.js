// NAVBR

// const menuButton = document.querySelector(".menu-icon")
// const menuShapes = document.querySelectorAll('.menu-icon__shape')
// const nav = document.querySelector('.nav')
// const inputIcon = document.querySelector('.list-item__input-icon')
// const inputListItem = document.querySelector('.list-item__input')
// const inputField = document.querySelector('.list-item__input-field')


// menuButton.addEventListener('click', () => {
//     menuShapes.forEach(shape => {
//         shape.classList.toggle('menu-icon--transform')

//     })
//     nav.classList.toggle('nav--show')
// })


// inputIcon.addEventListener('click', () => {
//     inputListItem.classList.add('list-item__input--visible')
//     inputField.classList.add('list-item__input-field--visible')
//     inputField.focus()
// })

// inputField.addEventListener('focusout', () => {
//     inputField.classList.remove('list-item__input-field--visible')

//     inputListItem.classList.remove('list-item__input--visible')
// })

// ?  REALIZACJE

const galleryImgs = [
    "../assets/images/realizacje/Photo-re1.png",
    "../assets/images/realizacje/Photo-re2.png",
    "../assets/images/realizacje/Photo-re3.png",
    "../assets/images/realizacje/Photo-re4.png",
    "../assets/images/realizacje/Photo-re5.png",
    "../assets/images/realizacje/Photo-re6.png",
    "../assets/images/realizacje/Photo-re7.png",
    "../assets/images/realizacje/Photo-re8.png",
    "../assets/images/realizacje/Photo-re9.png",
    "../assets/images/realizacje/Photo-re3.png",
    "../assets/images/realizacje/Photo-re4.png",
    "../assets/images/realizacje/Photo-re5.png",
    "../assets/images/realizacje/Photo-re6.png",
    "../assets/images/realizacje/Photo-re7.png",
    "../assets/images/realizacje/Photo-re8.png",
    "../assets/images/realizacje/Photo-re9.png"
]

const galleryWrapper = document.querySelector('.gallery__wrapper')

let screenWidth,
    containerCount,
    previousContainerCount,
    colContainerCount = 0

const getScreenWidth = () => {
    screenWidth = window.innerWidth
}

const getContainerCount = () => {
    if (screenWidth < 700) containerCount = 1
    if (screenWidth >= 700 && screenWidth <= 1146) containerCount = 2
    if (screenWidth > 1146 && screenWidth <= 1544) containerCount = 3
    if (screenWidth > 1544) containerCount = 4
}

const removeContainers = () => {
    const colContainer = document.querySelectorAll('.gallery__col-container')

    colContainer.forEach(container => {
        galleryWrapper.removeChild(container)
    })
}


const createContainers = () => {
    const colContainer = document.querySelectorAll('.gallery__col-container')

    colContainerCount = colContainer.length

    if (colContainerCount >= 4) return
    if (containerCount > 4) return

    for (let i = containerCount; i > 0; i--) {
        const div = document.createElement('div')
        div.classList.add('gallery__col-container')
        galleryWrapper.append(div)
    }
}

const createImgEl = (parent, imgSrc) => {
    const picture = document.createElement('picture')
    const img = document.createElement('img')

    img.classList.add('img')
    img.src = imgSrc

    picture.appendChild(img)
    parent.appendChild(picture)
}

const populateContainers = () => {
    const colContainers = document.querySelectorAll('.gallery__col-container ')

    let colCount = 1

    galleryImgs.forEach((img) => {
        if (containerCount === 1) {
            createImgEl(colContainers[0], img)
        }

        if (containerCount === 2) {
            if (colCount === 1) {
                createImgEl(colContainers[0], img)
                colCount++
            } else {
                createImgEl(colContainers[1], img)
                colCount = 1
            }
        }

        if (containerCount === 3) {
            if (colCount === 1) {
                createImgEl(colContainers[0], img)
                colCount++
            } else if (colCount === 2) {
                createImgEl(colContainers[1], img)
                colCount++
            } else {
                createImgEl(colContainers[2], img)
                colCount = 1
            }
        }

        if (containerCount === 4) {
            if (colCount === 1) {
                createImgEl(colContainers[0], img)
                colCount++
            } else if (colCount === 2) {
                createImgEl(colContainers[1], img)
                colCount++
            } else if (colCount === 3) {
                createImgEl(colContainers[2], img)
                colCount++
            } else {
                createImgEl(colContainers[3], img)
                colCount = 1
            }
        }
    })
}

window.addEventListener('resize', () => {
    getScreenWidth()
    previousContainerCount = containerCount
    getContainerCount()

    if (previousContainerCount !== containerCount) {
        removeContainers()
        createContainers()
        populateContainers()
    }
})


window.addEventListener('load', () => {
    console.log("Load event occurred");
    getScreenWidth();
    getContainerCount();
    removeContainers()
    createContainers();
    populateContainers()
});


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
    galleryBtn.classList.add('gallery__btn-effect')

    setTimeout(() => {
        if (isBtnToggled) galleryBtnText.textContent = 'Pokaż mniej'
        else galleryBtnText.textContent = 'Rozwiń'

    }, 300)

    setTimeout(() => {
        galleryBtn.classList.remove('gallery__btn-effect')
    }, 700)

})
