let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;

let velocidadexBolinha = 6;
let velocidadeybolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
 movimentaBolinha();

  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha < 0) {
    velocidadeybolinha *= -1;
  }
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
  
}

function movimentaBolinha(){
   xBolinha += velocidadexBolinha;
  yBolinha += velocidadeybolinha;
}














