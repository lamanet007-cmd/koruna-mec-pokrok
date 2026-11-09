export const historicalEvents = [
    {
        year: 935,
        title: "Kníže Václav a stabilizace státu",
        desc: "Kníže Václav upevňuje moc Přemyslovců. Jak odpovíte na tlak sousedních říší?",
        choices: [
            { text: "Zaplatit tribut a zajistit mír (+Zlato, -Armáda)", effect: (state) => { state.resources.gold -= 50; state.resources.army += 10; } },
            { text: "Posílit opevnění a armádu (-Materiál, +Armáda)", effect: (state) => { state.resources.materials -= 40; state.resources.army += 25; } }
        ]
    },
    {
        year: 1348,
        title: "Zlatý věk Karla IV.",
        desc: "Byla založena Univerzita Karlova a staví se Nové Město pražské. Země vzkvétá.",
        choices: [
            { text: "Investovat do vzdělání a stavitelství", effect: (state) => { state.resources.gold += 150; state.production.gold += 10; } }
        ]
    },
    {
        year: 1419,
        title: "Husitská revoluce",
        desc: "Zemí zmítají náboženské nepokoje. Vyberte strategii pro nadcházející konflikty.",
        choices: [
            { text: "Podpořit reformátory a vozové hradby (+Armáda)", effect: (state) => { state.resources.army += 40; } },
            { text: "Udržet věrnost tradiční monarchii (+Zlato)", effect: (state) => { state.resources.gold += 100; } }
        ]
    },
    {
        year: 1848,
        title: "Revoluční rok a Průmyslová revoluce",
        desc: "Strojní výroba nahrazuje staré cechy. Zakládají se první železnice a hutě.",
        choices: [
            { text: "Masivně investovat do těžkého průmyslu", effect: (state) => { state.production.materials += 25; state.resources.gold -= 100; } }
        ]
    },
    {
        year: 1918,
        title: "Vznik samostatné ČSR",
        desc: "Konec Velké války přináší nezávislost a vznik moderního demokratického státu.",
        choices: [
            { text: "Budovat moderní armádu a průmysl", effect: (state) => { state.resources.pop += 50; state.resources.army += 30; } }
        ]
    }
];
