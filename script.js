// Meme Generator
document.addEventListener('DOMContentLoaded', function(){
    var memeForm = document.getElementById('meme-form');
    var listGallery = document.querySelector('.gallery');

    memeForm.addEventListener('submit', function(event){
        //prevent new page from loading when clicking submit
        event.preventDefault();

        //make new li in gallery
        var newLi = document.createElement('li');
        newLi.classList.add('meme-img');
        listGallery.appendChild(newLi);

        //make new memes
        var urlInput = document.getElementById('url-img').value,
        src = urlInput,
        img = document.createElement('img');
        img.src = src;
        newLi.appendChild(img);

        //create div to add text to meme top
        var topText = document.createElement('div');
        topText.classList.add('text', 'top');
        topText.innerText = document.getElementById('top-text').value;
        newLi.appendChild(topText);

        //create div to add text to meme bottom
        var bottomText = document.createElement('div');
        bottomText.classList.add('text', 'bottom');
        bottomText.innerText = document.getElementById('bottom-text').value;
        newLi.appendChild(bottomText);

        //delete meme
        var deleteMeme = document.createElement('div');
        deleteMeme.classList.add('x');
        deleteMeme.innerText = 'x';
        deleteMeme.style.color = 'gray';
        newLi.appendChild(deleteMeme);

        memeForm.reset();
    });

    function remove(event){
        event.target.parentNode.remove();
    }
    listGallery.addEventListener('click', remove);
});