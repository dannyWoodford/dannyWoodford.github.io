
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
        description: '3D music visualizer that connects to your Spotify account and allows for web playback.',
        language: "JavaScript / React / Ruby on Rails",
        github: "https://github.com/dannyWoodford/3D-spotify-visualizer-",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:6611441975008735232/",
        image: "img/3d-spot-img.png",
        gif: "https://thumbs.gfycat.com/OddShadowyKiwi-mobile.mp4",
    },
    {
        id: 3,
        name: "Ziehbare Stimme Leinwand",
        description: 'This Todo list app, apart from having full CRUD functionality, is designed specifically to frustrate the user.',
        language: "JavaScript / React / Ruby on Rails",
        github: "https://github.com/jwsharpe/ZiehbareStimmeLeinwand",
        demo: "",
        image: "img/ZSL-img.png",
        gif: "",
    },
    {
        id: 4,
        name: "Enter the Labyrinth",
        description: 'Complete the maze before the fire catches you.',
        language: "JavaScript / Ruby on Rails",
        github: "https://github.com/TenNga/Maze-Game-Front-End",
        demo: "https://pure-reaches-70099.herokuapp.com/",
        image: "img/Labyrinth-img.png",
        gif: "https://thumbs.gfycat.com/LinearJovialCoelacanth-mobile.mp4",
    },
    {
        id: 5,
        name: "Flatiron Cross-Discipline Collaboration Event",
        description: "While there I started and lead the first cross-discipline collaboration event bringing students from developer, data science, and UX/UI tracks together to preform mock projects. Through these projects the students learned what each others role does and how they would interact with one another. Of the 60 odd students involved several groups, as well as my own, have continued to bring there mock projects to life post graduation.",
        language: "",
        github: "",
        demo: "",
        image: "img/cross-colab.jpg",
        gif: "https://thumbs.gfycat.com/LinearJovialCoelacanth-mobile.mp4",
    },
    {
        id: 6,
        name: "React/Canvas infinite spinner",
        description: 'Early exploration of canvas in React. Every mouse click changes a few variables to create a unique pattern.',
        language: "React / Canvas",
        github: "https://github.com/dannyWoodford/React-Canvas_infinite_spinner",
        demo: "https://thumbs.gfycat.com/ExaltedMistyAmphibian-mobile.mp4",
        image: "img/canvas-react-spinner.png",
        gif: "https://thumbs.gfycat.com/ExaltedMistyAmphibian-mobile.mp4",
    },
]




document.addEventListener("DOMContentLoaded", (event) => {

    const projectList = document.querySelector('.project-list')
    const gliderDiv = document.querySelector('.glider-track')

        projects.forEach((project) => {

            projectList.insertAdjacentHTML("beforeend",
                `
                <div data-id="${project.id}" class="project-item" data-mobile="mobileSize">
                <img class="project-item-background" src=${project.image} alt="project cover">
                    <div class="info-on-hover" data-mobile="mobileSize">
                        <button data-button="button"><h1 data-button2="button2" class="project-title">${project.name}</h1>Learn More</button>
                    </div>
                </div>
                `
            )
        //----------------------------------------------------------------------------------- 
        // ---------DYNAMIC SLIDE FILL WONT WORK, DOTS AND FORMATING DONT APPEAR CORRECTLY 
        // BEACUSE Glider.js NPM EVALUATES BEFORE THIS CAN BE INJECTED. I KNOW THIS BECAUSE 
        // IT APPEARS CORECTLY ON ANY KIND OF RESIZE. I TRIED TO FORCE A REPAINT BUT COULD 
        // NOT GET IT WORKING AND I DONT LIKE THAT SOLUTION MUCH ANYWAY.----------------------
        //----------------------------------------------------------------------------------- 


        //     gliderDiv.insertAdjacentHTML("beforeend", 
        // `
        // <div data-id="${project.id}" class="portfolio">

        //         <video class="portfolio-background" autoplay muted loop id="myVideo">
        //             <source src=${project.gif} type="video/mp4">
        //         </video>

        //             <div class="portfolio-text" >
        //                 <h1 class="portfolio-title">${project.name}</h1>
        //                 <h6 class="portfolio-description">
        //                     ${project.description}
        //                 </h6>
                        
        //                 <div class="portfolio-links">
        //                     <a href=${project.github} target="_blank">Github</a> |
        //                     <a href=${project.demo} target="_blank">Demo</a>
        //                 </div>
                        
        //             </div>

        //     </div>
        // `)
        })

})








let projectSection = document.querySelector('#portfolioSection')
let projectId

projectSection.addEventListener("click", (event) => {

        let proj = event.target.closest('.project-item')
        projectId = parseInt(proj.dataset.id) - 1

        const w = window.innerWidth
        document.documentElement.clientWidth
        document.body.clientWidth;

        console.log(typeof w)


    if(event.target.dataset.mobile === 'mobileSize' && w < 1024){
        console.log(projectId)
        console.log(SLIDER)
        
        
        SLIDER.scrollItem(projectId, true)
        toggleGlider() 
    }  

    if(event.target.dataset.button === 'button'){
        console.log(projectId)
        console.log(SLIDER)
        
        
        SLIDER.scrollItem(projectId, true)
        toggleGlider() 
    }  

    if(event.target.dataset.button2 === 'button2'){
        console.log(projectId)
        console.log(SLIDER)
        
        
        SLIDER.scrollItem(projectId, true)
        toggleGlider() 
    }  


        $("body").keydown(function(e) {
            if(e.keyCode == 37) { // left
                console.log("left",projectId, projects.length)
                    if (projectId > 0){
                        SLIDER.scrollItem(projectId -= 1, true)
                    }
                }
                else if(e.keyCode == 39) { // right
                    console.log("right", projectId, projects.length)
                    if (projectId < projects.length-1){
                        SLIDER.scrollItem(projectId += 1, true)
                    }
            }
          });


})


// ----click away to exit slider------------------------------------------------------

const gliderBackground = document.querySelector(".glider-background")

gliderBackground.addEventListener("click", (event) => {
    console.log(event.target.className)
    if(event.target.dataset.glider === 'visible') {
        toggleGlider()
    } else if (event.target.className === "slider-exit"){
        toggleGlider()
    }
    })
// ----click away to exit slider------------------------------------------------------





    function toggleGlider() {
        $( ".glider-background" ).toggleClass( "active" )
    }

    // $(function() {
    //     $(".project-item").hover( function() {
    //         $('.info-on-hover').slideUp(500)
    //     })
    // })


