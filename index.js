var sidenav = document.querySelector(".side-navbar");

function showNavbar() {
    sidenav.style.left = "0";
}

function closeNavbar() {
    sidenav.style.left = "-50%";
}
const scrollContainer = document.querySelectorAll(".products");
for(const item of scrollContainer)
    {
        item.addEventListener('wheel',(evt)=>{
            evt.preventDefault();
            item.scrollLeft += evt.deltaY;
        })
    }