let lastScrollY = window.scrollY;
window.addEventListener('scroll',(event)=>{
    let scroll = this.scrollY;
    console.log(scroll)
    const footerDiv = document.getElementById('footerSection')
    const currentScrollY = window.scrollY;
    let currentTranslateY = 0;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
       currentTranslateY = Math.min(-100, currentTranslateY + (currentScrollY - lastScrollY));
      } else {
        // Scrolling up
        currentTranslateY = Math.max(-60, currentTranslateY - (lastScrollY - currentScrollY));
      }
      footerDiv.style.transform = `translateY(${currentTranslateY}px)`;
      lastScrollY = currentScrollY;
})