
const artImage = [
    {
        id: 1,
        image: "img/art/image2.jpeg"
    },
    {
        id: 2,
        image: "img/art/image1.jpg"
    },
    {
        id: 3,
        image: "img/art/octo.JPG"
    },
    {
        id: 2,
        image: "img/art/stary_night.JPG"
    },
]

// const artSlider = document.querySelector(".nav-lists")

// document.addEventListener("DOMContentLoaded", (e) => {
//     artImage.forEach((art) => {
//             artSlider.insertAdjacentHTML("beforeend", `
//                 <li class="nav-list" style="--i:0">
// 			    	<img class="art-item" src=${art.image} alt="image-${art.id}">
// 		        </li>
//             `)
//         })
//     })





// const aboutText = document.querySelector("#about-text")

// aboutText.addEventListener("mouseover", (e) => {
//     if(e.target.dataset.artlink === "art-link"){
//         console.log('yrp')
//         toggleArt()
//     }
// })

// const artContent = document.querySelector(".art-content")

// artContent.addEventListener("mouseleave", (event) => {
//     console.log(event.target.className)

//     toggleArt()
// })


// function toggleArt() {
//     $( ".nav-list" ).toggleClass( "active" )
// }


$(window).scroll(function () {
    if($(window).scrollTop() > 2500) {
      $( ".nav-container" ).addClass( "active" )
      $( ".nav-list" ).addClass( "animate-on-scroll" )
    } else {
        $( ".nav-container" ).removeClass( "active" )
        $( ".nav-list" ).removeClass( "animate-on-scroll" )
    }
});