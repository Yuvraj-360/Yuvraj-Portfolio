/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linWork = document.querySelectorAll('.work__item')

function activeWork(){
    linWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //Check if the field a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '')
        //Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    //Show message
    contactMessage.textContent = 'Write all the input fields'
}

/*else{
    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_jp7ft85','template_65zvpxb','#contact-form','gzEAxnOQ6hFfVJTYU')
    .then(() =>{
        //Show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent= 'Message sent ✔0'

        //Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
    })
}*/
contactForm.addEventListener('submit',sendEmail)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle, .section__title, .section__subtitle', {delay: 700})
sr.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'})
sr.reveal('.work__container, .contact form, .contact__tittle, .about__data', {delay: 200, origin: 'right'})
sr.reveal('.contact__info, .contact__title, .sub, .about__img, .work__filters, .about', {delay: 200, origin: 'left'})
ScrollReveal().reveal(".nav__menu");

    /* ScrollReveal */
    
    // ScrollReveal().reveal('.home, .section__title, .section__subtitle, .home__data, .home', { origin: 'top'});
    ScrollReveal().reveal('.work__container, .contact form, .contact__tittle, .about__data', {origin: 'right' });
    // ScrollReveal().reveal('.footer, .home__scroll, .home__social', {origin: 'bottom'});
    ScrollReveal().reveal('.contact__info, .contact__title, .sub, .about__img, .work__filters, .about', { origin: 'left'});
    ScrollReveal().reveal('.nav__menu');