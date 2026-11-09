import { gameState } from './state.js';
import { historicalEvents } from './events.js';
import { processAITurn } from './ai.js';
import { updateUI, setupFullscreen } from './ui.js';

// Inicializace hry
document.addEventListener('DOMContentLoaded', () => {
    setupFullscreen();
    setupNavigation();
    setupGameLoop();
    updateUI();
});

function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            navBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
}

function setupGameLoop() {
    document.getElementById('next-turn-btn').addEventListener('click', () => {
        advanceTurn();
    });

    window.buildStructure = (id) => {
        const b = gameState.buildings.find(item => item.id === id);
        if (b && gameState.resources.gold >= b.cost.gold && gameState.resources.materials >= b.cost.materials) {
            gameState.resources.gold -= b.cost.gold;
            gameState.resources.materials -= b.cost.materials;
            b.count++;
            updateUI();
        } else {
            alert('Nedostatek surovin pro stavbu!');
        }
    };
}

function advanceTurn() {
    // Posun času
    gameState.year += 5;

    // Aktualizace éry
    for (let i = gameState.eras.length - 1; i >= 0; i--) {
        if (gameState.year >= gameState.eras[i].start) {
            gameState.eraIndex = i;
            break;
        }
    }

    // Přírůstek surovin z budov a produkce
    gameState.resources.gold += gameState.production.gold + (gameState.buildings.find(b=>b.id==='mine').count * 15);
    gameState.resources.food += gameState.production.food + (gameState.buildings.find(b=>b.id==='farm').count * 20);
    gameState.resources.materials += gameState.production.materials;

    // Tah AI rivalů
    processAITurn(gameState);

    // Kontrola historických událostí
    checkEvents();

    updateUI();

    if (gameState.year >= 1950) {
        alert("Dosáhli jste roku 1950! Úspěšně jste dovedli národ od středověku až po moderní dějiny.");
    }
}

function checkEvents() {
    const event = historicalEvents.find(e => e.year <= gameState.year && !e.triggered);
    if (event) {
        event.triggered = true;
        showEventModal(event);
    }
}

function showEventModal(event) {
    const modal = document.getElementById('event-modal');
    document.getElementById('event-title').innerText = event.title;
    document.getElementById('event-desc').innerText = event.desc;
    
    const choicesContainer = document.getElementById('event-choices');
    choicesContainer.innerHTML = '';

    event.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice.text;
        btn.onclick = () => {
            choice.effect(gameState);
            modal.classList.add('hidden');
            updateUI();
        };
        choicesContainer.appendChild(btn);
    });

    modal.classList.remove('hidden');
}
