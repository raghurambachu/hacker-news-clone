import RouteHandler from "./router.js";

window.onhashchange = () => {
    activeTab();
}

function activeTab(){
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        const currentPath = window.location.hash;
        if(currentPath === linkPath){
            link.classList.add("active")
        } else {
            link.classList.remove("active");
        }
    })
}

class App{
    constructor(){
       new RouteHandler();
    }
}

new App()