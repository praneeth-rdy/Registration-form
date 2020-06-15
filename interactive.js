var wmbgcolor = 'rgba(0,0,0,0.1)';
var dmbgcolor = 'rgba(0,0,0,0.7)';
var txtbxbgcolor = 'rgba(243, 231, 212,1)';
var modebtn = document.getElementById('mode');
var submitbtn = document.getElementById('submit');
var body = document.getElementsByTagName('body')[0];


function changemode(){
    var tochange = document.getElementById('mode').innerHTML;

    if(tochange == 'Dark mode'){
        
        todarkmode();
    }
    else{
        
        towhitemode();
    }
}


function todarkmode(){

    body.style.backgroundColor = dmbgcolor;
    modebtn.innerHTML = 'Light mode';
    modebtn.style.backgroundColor = 'white';
    modebtn.style.color = dmbgcolor;
    submitbtn.style.backgroundColor = 'rgba(175,238,238,0.6)';

}

function towhitemode(){

    body.style.backgroundColor= wmbgcolor;
    modebtn.innerHTML= 'Dark mode';
    modebtn.style.backgroundColor = dmbgcolor;
    modebtn.style.color = 'white';
    submitbtn.style.backgroundColor = 'rgba(235, 202, 131,0.5)';

}

//Main starts here

towhitemode();

