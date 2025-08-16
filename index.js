// =============================== FLOATING NAV
const floatingNavs = document.querySelectorAll('.floating__nav a')

const removeActiveClass = () => {
    floatingNavs.forEach(nav => {
        nav.classList.remove('active')
    })
}

floatingNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        removeActiveClass();
        nav.classList.add('active')
    })
})












    // =================================== FAQS
    const faqs = document.querySelectorAll('.faqs__item');

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            const p = faq.querySelector('p');
            const icon = faq.querySelector('.faq__icon')
            if(p.classList.contains('show')) {
                p.classList.remove('show')
                icon.innerHTML = `<i class="uil uil-angle-down"></i>`
            } else {
                p.classList.add('show')
                icon.innerHTML = `<i class="uil uil-angle-up"></i>`
            }
        })
    })





    // ======================== THEME
    const themeToggler = document.querySelector('.nav__theme-btn')
    themeToggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables')
        if(document.body.classList == '') {
            themeToggler.innerHTML = `<i class="uil uil-moon"></i>`
            window.localStorage.setItem('portfolio-theme', '')
        } else {
            themeToggler.innerHTML = `<i class="uil uil-sun"></i>`
            window.localStorage.setItem('portfolio-theme', 'dark-theme-variables')
        }
    })

    // use theme from local storage on page load
    const bodyClass = window.localStorage.getItem('portfolio-theme');
    document.body.className = bodyClass;







    const sections = document.querySelectorAll('section'); // Select all sections
const navLinks = document.querySelectorAll('.floating__nav a'); // Select all floating nav links

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Determine the current section in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id'); // Get the section's ID
        }
    });

    // Update the active state of the floating nav links
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        if (currentSection && link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); // Add active class to the current link
        }
    });
});88888






