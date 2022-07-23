const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.onclick =  () => {
        clearActiveClasess()
        
        slide.classList.add('active')
    }
}

function clearActiveClasess() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}