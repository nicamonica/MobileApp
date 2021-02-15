const avocadoButton = document.querySelector('#btn-avocado');
const beansButton = document.querySelector('#btn-beans');
const cheeseButton = document.querySelector('#btn-cheese');
const chickenButton = document.querySelector('#btn-chicken');
const eggsButton = document.querySelector('#btn-eggs');
const fishButton = document.querySelector('#btn-fish');
const potatoesButton = document.querySelector('#btn-potatoes');
const tomatoButton = document.querySelector('#btn-tomato');

const displayLabel = document.querySelector('#lbl-output');

let product = "";
let nutrition = "";

avocadoButton.addEventListener('click', assignAvocado);
beansButton.addEventListener('click', assignBeans);
cheeseButton.addEventListener('click', assignCheese);
chickenButton.addEventListener('click', assignChicken);   
eggsButton.addEventListener('click', assignEggs);
fishButton.addEventListener('click', assignFish);
potatoesButton.addEventListener('click', assignPotatoes);
tomatoButton.addEventListener('click', assignTomato);

function assignAvocado(){
    product = "Avocado";
    nutrition = "tbd";
    updateLabel()
} 

function assignBeans(){
    product = "Beans";
    nutrition = "tbd";
    updateLabel()
} 

function assignCheese(){
    animal = "Cheese";
    sound = "tbd";
    updateLabel()
} 

function assignChicken(){
    animal = "Chicken";
    sound = "tbd";
    updateLabel()
} 

function assignEggs(){
    animal = "Eggs";
    sound = "tbd";
    updateLabel()
} 

function assignFish(){
    animal = "Fish";
    sound = "tbd";
    updateLabel()
} 

function assignPotatoes(){
    animal = "Potatoes";
    sound = "tbd";
    updateLabel()
} 

function assignTomato(){
    animal = "Tomato";
    sound = "tbd";
    updateLabel()
} 

function updateLabel(){
    let output = `That ${product} has ${nutrition}!`;
    console.log(output);
    displayLabel.textContent = output;

}
