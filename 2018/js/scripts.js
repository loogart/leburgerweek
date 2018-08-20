//parallax jumbotron design     
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

//location javascript popup
function myFunction() {
    var txt;
    if (confirm("Le Burger Week would like to know your location.")) {
        txt = "Allow";
    } else {
        txt = "Block";
    }
    document.getElementById("demo").innerHTML = txt;
}