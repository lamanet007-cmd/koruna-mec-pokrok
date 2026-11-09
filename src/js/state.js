export const gameState = {
    year: 900,
    eraIndex: 0,
    eras: [
        { name: "Raný Středověk", start: 900 },
        { name: "Pozdní Středověk & Novověk", start: 1300 },
        { name: "Průmyslová Revoluce", start: 1648 },
        { name: "Věk Konfliktů", start: 1914 }
    ],
    resources: {
        gold: 200,
        materials: 100,
        food: 300,
        pop: 100,
        army: 15
    },
    production: {
        gold: 10,
        materials: 5,
        food: 15,
        pop: 2
    },
    regions: [
        { id: "praha", name: "České Království (Praha)", owner: "Player", power: 50 },
        { id: "morava", name: "Moravské Markrabství", owner: "Player", power: 30 },
        { id: "slezsko", name: "Slezská Knížectví", owner: "AI_Poland", power: 40 },
        { id: "bavorsko", name: "Bavorsko & Svatá Říše", owner: "AI_HRE", power: 70 },
        { id: "uhry", name: "Uherské Království", owner: "AI_Hungary", power: 60 }
    ],
    buildings: [
        { id: "mine", name: "Důl na stříbro / kov", cost: { gold: 50, materials: 30 }, prod: { gold: 15 }, count: 1 },
        { id: "farm", name: "Zemědělská usedlost / JZD", cost: { gold: 30, materials: 20 }, prod: { food: 20 }, count: 2 },
        { id: "barracks", name: "Kasárny / Vojenská základna", cost: { gold: 100, materials: 80 }, prod: { army: 5 }, count: 1 }
    ]
};
