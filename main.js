var generateMeme= document.getElementById('btn');

generateMeme.addEventListener("click",  function getImg(){
    var url = document.getElementById('txt').value;
    var memeHeader = document.getElementById('top').value;
    var memeBottom = document.getElementById('bottom').value;
    var div = document.createElement('div');
    div.className = "imageWrapper";
    
    var img = document.createElement('img');
    img.src = url;
    img.setAttribute('class','imgStyle')
    
    var textTop = document.createElement('h1');
    textTop.innerText= memeHeader;
    textTop.setAttribute('class','topStyle')

    var textBot = document.createElement('h1');
    textBot.innerText= memeBottom;
    textBot.setAttribute('class','BotStyle')


    // append text&image to div
    div.appendChild(textTop);
    div.appendChild(textBot);
    div.appendChild(img);
    document.getElementById("images").appendChild(div);
    
    div.addEventListener('click', function deleteMeme(){
        div.remove();
    });
    // reset form
    var form = document.getElementById('forma');
    form.reset();
    return false;
});



