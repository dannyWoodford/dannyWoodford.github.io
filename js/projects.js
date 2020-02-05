
let projects = [
    {
        id: 1,
        name: "NOTFLIX",
        description: 'Netflix inspired app is a library of TV shows and movies found on youtube with a smart clean look.',
        language: "Ruby on Rails",
        github: "https://github.com/ntel-91/mod2-project",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:6618647384446513152/",
        image: "img/notflix.png",
        gif: "https://thumbs.gfycat.com/ExaltedIckyGazelle-mobile.mp4",
    },
    {
        id: 2,
        name: "Spotify 3D music Visualizer",
        description: '3D music visualizer that connects to your Spotify account and allows for web playback',
        language: "JavaScript / React / Ruby on Rails",
        github: "https://github.com/dannyWoodford/3D-spotify-visualizer-",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:6611441975008735232/",
        image: "",
        gif: "https://thumbs.gfycat.com/OddShadowyKiwi-mobile.mp4",
    },
    {
        id: 3,
        name: "Ziehbare Stimme Leinwand",
        description: 'This Todo list app, apart from having full CRUD functionality, is designed specifically to frustrate the user.',
        language: "JavaScript / React / Ruby on Rails",
        github: "https://github.com/jwsharpe/ZiehbareStimmeLeinwand",
        demo: "",
        image: "img/Ziehbare-Stimme-Leinwand-background.png",
        gif: "",
    },
    {
        id: 4,
        name: "Enter the Labyrinth",
        description: 'Complete the maze before the fire catches you',
        language: "JavaScript / Ruby on Rails",
        github: "https://github.com/TenNga/Maze-Game-Front-End",
        demo: "https://pure-reaches-70099.herokuapp.com/",
        image: "img/Labyrinth_logo.png",
        gif: "",
    },
]




document.addEventListener("DOMContentLoaded", (event) => {

    const projectList = document.querySelector('.project-list')
    const gliderDiv = document.querySelector('.glider-track')

        projects.forEach((project) => {

            projectList.insertAdjacentHTML("beforeend",
                `
                <div data-id="${project.id}" class="project-item">
                    <h1>${project.name}</h1>
                    <img class="project-item-background" src=${project.image} alt="project cover">
                    <button data-button="button">Learn More</button>
                </div>
                `
            )

            gliderDiv.insertAdjacentHTML("beforeend", 
        `
        <div data-id="${project.id}" class="portfolio">

                <video class="portfolio-background" autoplay muted loop id="myVideo">
                    <source src=${project.gif} type="video/mp4">
                </video>

                    <div class="portfolio-text" >
                        <h1 class="portfolio-title">${project.name}</h1>
                        <h6 class="portfolio-description">
                            ${project.description}
                        </h6>
                        
                        <div class="portfolio-links">
                            <a href=${project.github} target="_blank">Github</a> |
                            <a href=${project.demo} target="_blank">Demo</a>
                        </div>
                        
                    </div>

            </div>
        `)
        })

})








let projectSection = document.querySelector('#portfolioSection')
let projectId

projectSection.addEventListener("click", (event) => {

    
    let proj = event.target.closest('.project-item')
    console.log(proj)

    projectId = proj.dataset.id
    console.log(projectId)
    console.log(SLIDER)


    // pro = (projectId) => {
        
    //     projects.map((p) => {
    //         if(p.id === parseInt(projectId)){
    //             return p
    //         }
    //     })
    // }
    // console.log(pro) 
 

    if(event.target.dataset.button === 'button'){
        SLIDER.scrollItem(projectId)
        toggleGlider() 
    }  
})


// ----click away to exit slider------------------------------------------------------

const gliderBackground = document.querySelector(".glider-background")

gliderBackground.addEventListener("click", (event) => {
    if(event.target.dataset.glider === 'visible') {
            toggleGlider()
        }
    })
// ----click away to exit slider------------------------------------------------------





    function toggleGlider() {
        $( ".glider-background" ).toggleClass( "active" )
    }
