function unlockPremium() {
    const logBox = document.getElementById("logBox");
    logBox.innerHTML += `<p>💎 Premium: All characters active</p>`;
    logBox.scrollTop = logBox.scrollHeight;
    alert("✅ Premium unlocked! ($21.99/month, fake purchase)");
}

function applyReviveKey() {
    const keyInput = document.getElementById("keyInput").value;
    const logBox = document.getElementById("logBox");

    if (keyInput === "WOLF_REVIVE_2025") {
        logBox.innerHTML += `<p>🌟 'Vampire Male' revived.</p>`;
        logBox.scrollTop = logBox.scrollHeight;
        alert("🌟 'Vampire Male' revived.");
    } else {
        alert("❌ Invalid key.");
    }
}
