
const artImage = [
    {
        id: 1,
        image: "img/art/image2.jpeg"
    },
    {
        id: 2,
        image: "img/art/image1.jpeg"
    },
]

const artSlider = document.querySelector(".art-track")

document.addEventListener("DOMContentLoaded", (e) => {
    artImage.forEach((art) => {
            artSlider.insertAdjacentHTML("beforeend", `
                <div class="art-item">
                    <img src=${art.image} alt="image-${art.id}">
                </div>
            `)
        })
    })





const aboutText = document.querySelector("#about-text")

aboutText.addEventListener("click", (e) => {
    if(e.target.dataset.artlink === "art-link"){
        console.log('yrp')
        toggleArt()
    }
})

const artBackground = document.querySelector(".art-background")

artBackground.addEventListener("click", (event) => {
    console.log(event.target.className)
    if(event.target.dataset.art === 'visible') {
        toggleArt()
    } 
})


function toggleArt() {
    $( ".art-background" ).toggleClass( "active" )
}