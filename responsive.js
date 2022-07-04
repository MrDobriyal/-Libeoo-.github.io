//responsive coding
let navbars = document.querySelector('.main-nav');
let burgers = document.querySelector('.burger');
burgers.addEventListener('click', () => {
    navbars.classList.toggle('v-nav');
    navbars.classList.toggle('h-nav');
    navbars.classList.toggle('h1nav');
})

//dark-light button
let dButton = document.querySelector('.dark');
let body = document.body;
let sectionContainer = document.querySelector('.container');
let sectionFonts = document.querySelectorAll('.fonts');
let sectionHeader = document.querySelector('.section-header');
let hamburgerNavigation = document.querySelector('.v-nav');

dButton.addEventListener('click', () => {
    body.classList.toggle('dark-class')
    sectionContainer.classList.toggle('dark-class')
    for (let i = 0; i < sectionFonts.length; i++) {
        let fonts = sectionFonts[i];
        fonts.classList.toggle('dark-class')
    }
    sectionHeader.classList.toggle('dark-class');
    hamburgerNavigation.classList.toggle('dark-class');
  if(dButton.innerText=="DArk Mode"){
      dButton.innerText="Light mode"
  }else{
      dButton.innerText="DArk Mode"
  }
})


