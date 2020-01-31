let projectSection = document.querySelector('#project-section')

projectSection.addEventListener("click", (event) => {

    if (event.target.dataset.nav === "about") {
        console.log("about link")
        
    } else if (event.target.dataset.nav === "portfolio") {
        console.log("p link")
        
    } else if (event.target.dataset.nav === "resume") {
        console.log("resume link")
        
    } else if (event.target.dataset.nav === "contact") {
        console.log("contact link")

    } 
})