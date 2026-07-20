const imagesList = [
    "p.jpg", 
    "pp.jpg", 
    "ppp.jpg", 
    "pppp.jpg",
    "ppppp.jpg",
    "pppppp.jpg"
 
];

let currentImageIndex = 0;

const profilePic = document.getElementById("main");

profilePic.addEventListener("click", function() {
    currentImageIndex = currentImageIndex + 1;

    if (currentImageIndex >= imagesList.length) {
        currentImageIndex = 0;
    }

    profilePic.src = imagesList[currentImageIndex];
});
