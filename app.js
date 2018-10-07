document.addEventListener("keydown",movimiento);



var canvas = document.getElementById("fondo");
var lapiz = canvas.getContext("2d");
var x = 250;
var y = 250;

var fondo = {
    url: "./imagenes/tile.png",
    cargarOk: false,
    imagen: Image
};

var vaca = {
    url: "./imagenes/vaca.png",
    cargarOk: false,
    imagen: Image
};

var cerdo = {
    url: "./imagenes/cerdo.png",
    cargarOk: false,
    imagen: Image
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",function(){
    fondo.cargarOk = true;
    dibujar();
});

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",function(){
    vaca.cargarOk = true;
    dibujar();
});

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",function(){
    cerdo.cargarOk = true;
    dibujar();
});

function dibujar(){
    if(fondo.cargarOk == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargarOk == true){
        lapiz.drawImage(vaca.imagen,x,y);
    }
    if(cerdo.cargarOk == true){        
        lapiz.drawImage(cerdo.imagen,100,100);
    }
}    
var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

function movimiento(evento){
    switch(evento.keyCode){
        case tecla.LEFT:
            limpiar();
            x = x - 50;
            lapiz.drawImage(vaca.imagen,x,y);
            break;
            case tecla.RIGHT:
            limpiar();
            x = x + 50;
            lapiz.drawImage(vaca.imagen,x,y);
            break;
            case tecla.UP:
            limpiar();
            y = y - 50;
            lapiz.drawImage(vaca.imagen,x,y);
            break;
            case tecla.DOWN:
            limpiar();
            y = y + 50;
            lapiz.drawImage(vaca.imagen,x,y);
    }
}

function limpiar(){
    lapiz.clearRect(0,0,canvas.Width,canvas.height);
    lapiz.drawImage(fondo.imagen,0,0);
    lapiz.drawImage(cerdo.imagen,100,100)
}