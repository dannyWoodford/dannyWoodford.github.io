let projectSection = document.querySelector('#project-section')

let projects = [
    {
        id: 1,
        name: "Personal Website",
        status: true,
        description: '',
        mvp: '',
        progress: 60
    },
    {
        id: 2,
        name: "Dropshipping bots",
        status: false,
         description: '',
        mvp: '',
        progress: 0
    },
    {
        id: 3,
        name: "Recreate Ruby methods as JS proto-types",
        status: false,
         description: '',
        mvp: '',
        progress: 0
    },
    {
        id: 4,
        name: "search with multiple tabs",
        status: false,
         description: '',
        mvp: '',
        progress: 0
    },
    {
        id: 5,
        name: "search with multiple tabs",
        status: false,
         description: '',
        mvp: '',
        progress: 0
    },
]

document.addEventListener("DOMContentLoaded", (event) => {

    let projectSection = document.querySelector('.project-list')
    
        projects.forEach((project) => {

            projectSection.insertAdjacentHTML("beforeend",
                `
                <div data-id="${project.id}" class="project-item">
                    <h1>${project.name}</h1>
                    <h3>Status: ${project.status? '<h2 style="color: green;">current</h2>': '<h2 style="color: red;">Future</h2>'} </h3>
                </div>
                `
            )

        })
})

let projectId

projectSection.addEventListener("click", (event) => {

    let proj = event.target.closest('.project-item')
    console.log(proj)

    projectId = proj.dataset.id
    console.log(projectId)


    pro = (projectId) => {
        
        projects.map((p) => {
            if(p.id === parseInt(projectId)){
                return p
            }
        })
    }
    console.log(pro) 


})

