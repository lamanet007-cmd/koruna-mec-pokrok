import { gameState } from './state.js';

export function updateUI() {
    document.getElementById('current-year').innerText = `${gameState.year} AD`;
    document.getElementById('current-era').innerText = gameState.eras[gameState.eraIndex].name;

    document.getElementById('res-gold').innerText = gameState.resources.gold;
    document.getElementById('res-materials').innerText = gameState.resources.materials;
    document.getElementById('res-food').innerText = gameState.resources.food;
    document.getElementById('res-pop').innerText = gameState.resources.pop;
    document.getElementById('res-army').innerText = gameState.resources.army;

    renderMap();
    renderBuildings();
}

function renderMap() {
    const mapCanvas = document.getElementById('map-canvas');
    mapCanvas.innerHTML = '';
    gameState.regions.forEach(reg => {
        const div = document.createElement('div');
        div.className = `region-card ${reg.owner === 'Player' ? 'player' : ''}`;
        div.innerHTML = `
            <h4>${reg.name}</h4>
            <p>Vládce: <strong>${reg.owner}</strong></p>
            <p>Vojenská síla: ${reg.power}</p>
        `;
        mapCanvas.appendChild(div);
    });
}

function renderBuildings() {
    const container = document.getElementById('buildings-list');
    container.innerHTML = '<h3>Stavba a Budovy</h3>';
    gameState.buildings.forEach(b => {
        const card = document.createElement('div');
        card.className = 'region-card';
        card.style.marginBottom = '10px';
        card.innerHTML = `
            <strong>${b.name}</strong> (Vlastněno: ${b.count})<br>
            Cena: 🪙 ${b.cost.gold} | 🪵 ${b.cost.materials}<br>
            <button class="icon-btn" style="margin-top:5px;" onclick="window.buildStructure('${b.id}')">Postavit</button>
        `;
        container.appendChild(card);
    });
}

export function setupFullscreen() {
    const btn = document.getElementById('fullscreen-btn');
    btn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Chyba při vstupu do fullscreenu: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
}
