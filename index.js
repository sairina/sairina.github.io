// Meme Generator
function updateText(){
    //text for the top
    var userTextTop = document.getElementById('user_text_top');
    var memeTextTop = document.getElementById('top');
    memeTextTop.innerHTML = userTextTop.value;

    //text for the bottom
    var userTextBottom = document.getElementById('user_text_bottom');
    var memeTextBottom = document.getElementById('bottom');
    memeTextBottom.innerHTML = userTextBottom.value;
}

function updateImage(){
    var img = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    img.src = window.URL.createObjectURL(file);
}