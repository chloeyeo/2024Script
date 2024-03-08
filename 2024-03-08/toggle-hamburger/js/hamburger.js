/* document.getElementsByClassName('toggle-button')[0].classList.add('active')
document.getElementsByClassName('toggle-button')[0].classList.remove('active')*/

/* or with jquery:
document.querySelector(".toggle-button").classList.add('active')
document.querySelector(".toggle-button").classList.remove('active') */

/* or with jquery querySelectorAll
document.querySelectorAll(".toggle-button")[0].classList.add('active')
document.querySelectorAll(".toggle-button")[0].classList.remove('active')*/

const toggleBtn = document.getElementsByClassName('toggle-button')[0];

let opened = toggleBtn.classList.contains('active') ? true : false;

function toggle() {
    if (!opened) {
        toggleBtn.classList.add('active');
        opened = true;
    } else {
        toggleBtn.classList.remove('active');
        opened = false;
    }
}

toggleBtn.addEventListener("click", toggle);