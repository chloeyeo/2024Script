/* document.getElementsByClassName('toggle-button')[0].classList.add('active')
document.getElementsByClassName('toggle-button')[0].classList.remove('active')*/

/* or with jquery:
document.querySelector(".toggle-button").classList.add('active')
document.querySelector(".toggle-button").classList.remove('active') */

/* or with jquery querySelectorAll
document.querySelectorAll(".toggle-button")[0].classList.add('active')
document.querySelectorAll(".toggle-button")[0].classList.remove('active')*/

const toggleBtn = document.getElementsByClassName('toggle-button')[0];

// let opened = toggleBtn.classList.contains('active') ? true : false;

// function toggle() {
//     if (!opened) {
//         toggleBtn.classList.add('active');
//         opened = true;
//     } else {
//         toggleBtn.classList.remove('active');
//         opened = false;
//     }
// }

// toggleBtn.addEventListener("click", toggle);

toggleBtn.addEventListener("click", function(){
    toggleBtn.classList.toggle("active"); /* this code is the same as above!!
    toggle("active") adds "active" to toggleBtn.classList if it doesn't already exist in the list,
    and removes "active" from the classList if it does already exist in the list.
    and "click" even means on click do this toggle("active") 

    This is the DOMTokenList: toggle() method. 
    The toggle() method of the DOMTokenList interface removes an existing token from the list and returns false.
    If the token doesn't exist it's added and the function returns true.*/
});