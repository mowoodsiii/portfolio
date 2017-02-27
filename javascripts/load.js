function load(){
    planetarium();
    starfield();
    
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById('profile').src = 'images/'+x+'.png';
}
