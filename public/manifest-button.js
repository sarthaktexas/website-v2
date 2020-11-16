var manifestButton = getElementById("manifest-button");
var story = getElementById("story");

addEventListener("click", manifestButtonPressed());

function manifestButtonPressed() {
    story.style.display = 'block';
    manifestButton.style.display = 'none';
}