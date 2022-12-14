let x;
let y;
let z;
document.getElementById("rollbutton").onclick=function(){
    x=Math.floor(Math.random()*5);
    y=Math.floor(Math.random()*5);
    z=Math.floor(Math.random()*5);

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}