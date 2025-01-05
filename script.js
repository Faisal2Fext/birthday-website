// Play music on page load
window.onload = function () {
    let audio = new Audio('audio/birthday.mp3'); // Replace with your music file
    audio.play();
};

function checkAnswer() {
    const searchBox = document.getElementById('searchBox').value.toLowerCase();
    
    // Customize your questions and actions here
    if (searchBox === "who is little baby") {
        window.location.href = "loveletter.html";
    } else {
        alert("Try again! Hint: Think about our special names.");
    }
}
