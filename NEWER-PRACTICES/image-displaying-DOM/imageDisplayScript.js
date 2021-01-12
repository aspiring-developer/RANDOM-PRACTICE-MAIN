let imageDisplayFieldEl = document.getElementById("imageDisplayField");
let imageDisplayButtonEl = document.getElementById("imageDisplayButton");

imageDisplayButtonEl.addEventListener("click", displayImage);

function displayImage() {
// THIS IS WORKING
//imageDisplayFieldEl.innerHTML = "#######DISPLAY ALTERNATIVELY########";

// THIS IS WORKING
//imageDisplayFieldEl.style.backgroundImage = 'url("test-image-1.jpg")';

// THIS IS WORKING
//imageDisplayFieldEl.innerHTML = '<img src="test-image-2.jpg" />';

// THIS IS WORKING
imageDisplayFieldEl.style.backgroundImage = "url('test-image-2.jpg')";




  //let displayIt = document.getElementById("imageDisplayField").src = "test-image-1.jpg" ;
}
//displayImage();

