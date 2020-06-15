var wmbgcolor = 'rgba(0,0,0,0.1)';
var dmbgcolor = 'rgba(0,0,0,0.8)';



function Register() {
    window.open()
}

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

    document.getElementById('mode').innerHTML = 'Light mode';
    document.getElementsByTagName('body')[0].style.backgroundColor = dmbgcolor;
    document.getElementById('mode').style.backgroundColor = 'white';
    document.getElementById('mode').style.color = dmbgcolor;
}

function towhitemode(){

    document.getElementById('mode').innerHTML= 'Dark mode';
    document.getElementsByTagName('body')[0].style.backgroundColor= wmbgcolor;
    document.getElementById('mode').style.backgroundColor = dmbgcolor;
    document.getElementById('mode').style.color = 'white';
}

towhitemode();