function palavrasAleatorias(){ 
} function InicializaCores (){ 
  background("white"); // Cor do fundo.
  fill("black"); //Cor do texto.
  textSize(64); //Tamanho da fonte.
  textAlign(CENTER, CENTER); //Alinha o texto ao centro, x e y.
} let palavra;
function setup() {
  createCanvas(600, 600); //Tamanho da tela.
let palavras = ["naely","martins"]
palavra = random(palavras); //Palavra que será escrita. 
} function draw() {
  InicializaCores();
  let quantidade = map(mouseX, 0, width,0, palavra.length); 
  let parcial = palavra.substring(quantidade);- 
    text (parcial,300,300); }
