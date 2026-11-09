export function processAITurn(state) {
    state.regions.forEach(region => {
        if (region.owner !== "Player") {
            // AI postupně zvyšuje svou sílu v závislosti na éře
            const growth = Math.floor(Math.random() * 5) + 2;
            region.power += growth;
        }
    });
}
