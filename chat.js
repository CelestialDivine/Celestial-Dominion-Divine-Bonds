function canAccess(charName) {
    return ["Luna Verenthia", "Kael Darksorrow", "Isis Vexara"].includes(charName) || premiumUnlocked;
}

function chatWith(charName) {
    if (!canAccess(charName)) { 
        alert("Character locked. Use Premium key.");
        return; 
    }
    let character = characters[charName];
    let dialogue = character.dialogue[Math.floor(Math.random() * character.dialogue.length)];
    document.getElementById("chatBox").innerText += `${charName}: ${dialogue}\n`;
}

function applyReviveKey() {
    let key = document.getElementById("keyInput").value;
    if (key === "WOLF_REVIVE_2025") {
        characters["Isis Vexara"].status = "alive";
        document.getElementById("logBox").innerText += `🌟 'Isis Vexara' revived.\n`;
        renderCharacterButtons(); 
    } else if (key) {
        document.getElementById("logBox").innerText += `🚫 Invalid key: ${key}.\n`;
    }
}

function unlockPremium() {
    alert("✅ Premium unlocked! ($21.99/month, fake purchase)");
    premiumUnlocked = true;
    localStorage.setItem("premium", "true");
    document.getElementById("logBox").innerText += "💎 Premium: All characters active\n";
    renderCharacterButtons(); // Update UI
}

function renderCharacterButtons() {
    let charList = document.getElementById("charList");
    charList.innerHTML = ""; // Clear old buttons
    for (let name of ["Luna Verenthia", "Kael Darksorrow", "Isis Vexara", "Vex Nocturne", "Aria Stellara", "Zalor Ethereon", "Thalgar Ignatius", "Veyra Pyra", "Eldrin Sylvanor", "Elara Luminara"]) {
        let button = document.createElement("button");
        button.innerText = name;
        button.onclick = () => chatWith(name);
        button.disabled = !canAccess(name);
        charList.appendChild(button);
    }
}

renderCharacterButtons();
