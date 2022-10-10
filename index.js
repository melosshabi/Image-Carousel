const buttons = document.querySelectorAll('[data-carousel-btn]');

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

       let activeSlide = slides.querySelector('[data-active]');
       let newIndex = [...slides.children].indexOf(activeSlide) + offset;
       if(newIndex >= slides.children.length) newIndex = 0;
       if(newIndex < 0) newIndex = slides.children.length - 1;

       slides.children[newIndex].dataset.active = true;
       delete activeSlide.dataset.active;
    });
});