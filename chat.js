function chatWith(name) {
    const chatBox = document.getElementById("chatBox");
    const logBox = document.getElementById("logBox");

    const response = getChatResponse(name);
    if (response) {
        chatBox.innerHTML += `<p><strong>${name}:</strong> ${response}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    if (name.includes("(Premium)") && !isPremiumUnlocked()) {
        alert("⚠️ This character is premium only.");
    }
}

function getChatResponse(name) {
    const messages = {
        "Wolf Boy": "I am the protector of the night.",
        "Wolf Girl": "I will defend you with my fangs.",
        "Vampire Male": "I am the shadow that devours.",
        "Vampire Female": "The night is my domain.",
        "Celestial God": "The stars align in your favor.",
        "Celestial Goddess": "The light of hope guides you.",
        "Dragon King": "The fire of creation is eternal.",
        "Dragon Queen": "The forest is your ally.",
        "Elf Prince": "The wind whispers your name.",
        "Elf Princess": "The moonlight watches over you."
    };
    return messages[name];
}

function isPremiumUnlocked() {
    const logBox = document.getElementById("logBox");
    const premiumText = "💎 Premium: All characters active";
    return logBox.innerText.includes(premiumText);
}
