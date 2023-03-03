let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let eroor = document.getElementById('erorr');
let tru = document.getElementById('tru');

form.addEventListener('submit', function(event) {
    if (email.value.length == '') {
        email.style.border = 'red solid 2px';
        eroor.style.opacity = '1';
        eroor.style.zIndex = '1';
        event.preventDefault();
    }
})

form.addEventListener('submit', function(event) {
    let email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value.match(email_val)) {
        tru.style.opacity = '1';
        tru.style.zIndex = '1';
        event.preventDefault();
    } else if (email.value.length > 5) {
        eroor.style.opacity = '1';
        eroor.style.zIndex = '1';
        email.style.border = 'red solid 2px';
        event.preventDefault();
    }
    if (email.value.length <= 5) {
        eroor.style.opacity = '1';
        eroor.style.zIndex = '1';
        email.style.border = 'red solid 2px';
        event.preventDefault();
    }
});

form.addEventListener('keyup', function(event) {
    if (email.value.length >= 0) {
        tru.style.opacity = '-1';
        tru.style.zIndex = '-1';
        eroor.style.zIndex = '-1';
        eroor.style.opacity = '-1';
        email.style.border = ' solid 2px';
        event.preventDefault();
    }
})