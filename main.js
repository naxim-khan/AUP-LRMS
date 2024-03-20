// Change navbar when scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
});


// FAQs section p toggle

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className="uil uil-minus";
        }else{
            icon.className="uil uil-plus"
        }
    });
});


// NAVBAR OPEN CLOSE BUTTONS TOGGLE.(show/hide nav menu)

const menu = document.querySelector(".nav_menu");
const menuBtn= document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', ()=>{
    menu.style.display='flex';
    closeBtn.style.display = "inline-block";
    menuBtn.style.display='none';
});

// close nav menu
const closeNav=()=>{
    menu.style.display='none';
    closeBtn.style.display='none';
    menuBtn.style.display='inline-block';

}

closeBtn.addEventListener('click',closeNav);

// Place HOlders clean
document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll('input, textarea');

    inputFields.forEach(input => {
        input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
        input.addEventListener('focus', function() {
            this.setAttribute('placeholder', '');
        });

        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.setAttribute('placeholder', this.getAttribute('data-placeholder'));
            }
        });
    });
});
