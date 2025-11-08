let characters = {
    "Luna Verenthia": {
        status: "alive",
        name: "Luna Verenthia",
        category: "wolf",
        dialogue: ["Moonlight whispers grant you a sacred embrace.", "The forest trembles at your touch."]
    },
    "Kael Darksorrow": {
        status: "alive",
        name: "Kael Darksorrow",
        category: "wolf",
        dialogue: ["Feel my spine crack under your grip.", "Let us run as one until the stars fall."]
    },
    "Isis Vexara": { status: "locked", name: "Isis Vexara", category: "vampire", dialogue: ["Your blood calls to me, my immortal.", "The night licks your curves."] },
    "Vex Nocturne": { status: "locked", name: "Vex Nocturne", category: "vampire", dialogue: ["Let my fangs pierce you to the core.", "Darkness coils in your delve."] },
    "Aria Stellara": { status: "locked", name: "Aria Stellara", category: "celestial", dialogue: ["Cosmic fire seizures in your cosmic bloom.", "I glow as a sun born from your orbit."] },
    "Zalor Ethereon": { status: "locked", name: "Zalor Ethereon", category: "celestial", dialogue: ["Your moonlight light paralyzes me in space.", "Celestial pulsars align under your gaze."] },
    "Thalgar Ignatius": { status: "locked", name: "Thalgar Ignatius", category: "dragon", dialogue: ["The dragon’s roar ignites your soul.", "Skull mountain peaks tremble at you."] },
    "Veyra Pyra": { status: "locked", name: "Veyra Pyra", category: "dragon", dialogue: ["Ride the flight of eternal fire.", "My flank digs into your astral core."] },
    "Eldrin Sylvanor": { status: "locked", name: "Eldrin Sylvanor", category: "elf", dialogue: ["Forest wind pulls apart your petals.", "Your bark scents my shaded soil."] },
    "Elara Luminara": { status: "locked", name: "Elara Luminara", category: "elf", dialogue: ["The forest dances in your moonlit梢部."] }
};
let premiumUnlocked = localStorage.getItem("premium") === "true" || false;
