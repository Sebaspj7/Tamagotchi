let hunger = 50;
let happiness = 50;
let health = 50;

const hungerElement = document.getElementById('hunger');
const happinessElement = document.getElementById('happiness');
const healthElement = document.getElementById('health');
const feedButton = document.getElementById('feed-btn');
const playButton = document.getElementById('play-btn');
const medicineButton = document.getElementById('medicine-btn');

function updateStats() {
    hungerElement.textContent = hunger;
    happinessElement.textContent = happiness;
    healthElement.textContent = health;
}

function feedTamagotchi() {
    if (hunger > 0) {
        hunger = Math.max(hunger - 10, 0);          
        happiness = Math.min(happiness + 5, 100);   
        health = Math.min(health + 5, 100);        
        updateStats();
    }
}

function playWithTamagotchi() {
    if (happiness < 100) {
        happiness = Math.min(happiness + 10, 100);  
        hunger = Math.min(hunger + 5, 100);         
        health = Math.min(health + 5, 100);        
        updateStats();
    }
}

function giveMedicine() {
    if (health < 100) {
        health = Math.min(health + 20, 100);        
        updateStats();
    }
}

feedButton.addEventListener('click', feedTamagotchi);
playButton.addEventListener('click', playWithTamagotchi);
medicineButton.addEventListener('click', giveMedicine);

function decreaseStats() {
    hunger = Math.min(hunger + 5, 100);            
    happiness = Math.max(happiness - 5, 0);         
    health = Math.max(health - 5, 0);               
    updateStats();

    if (hunger === 100 || happiness === 0 || health === 0) {
        alert('¡Tu Tamagotchi necesita atención urgente!');   }
}

setInterval(decreaseStats, 5000);

updateStats();
