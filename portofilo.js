
let navBar = document.getElementById("navBar");

window.onscroll = function () {
    console.log(document.body.scrollTop);
    if (document.body.scrollTop >= 695.5999755859375) {
        navBar.classList.add('nav-colored')
        navBar.classList.remove('nav-transparent')
    } else {
        navBar.classList.remove('nav-colored')
        navBar.classList.add('nav-transparent')
    }
}