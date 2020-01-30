var i = 0;
var txt = 'Seja Bem-Vindo ao nosso site';
var vel;


function digitar(){
    if(i<txt.length){
        document.getElementById('texto').innerHTML += txt.charAt(i)
        i++
        vel = Math.floor(Math.random()*200)
        setTimeout(digitar,vel)
    }
}
