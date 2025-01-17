function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-sticky');   
        }
        else {
            navbar.classList.remove('navbar-sticky');
        }
    });
}

function incrementStats() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach((counter) => {
        counter.innerText = 0;

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 200;

            if (c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1)
            } else {
                counter.inerText = target;
            }
           
        };
        updateCounter();
    });
}
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);