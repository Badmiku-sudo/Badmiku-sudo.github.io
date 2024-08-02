function startAdventure() {
    document.getElementById('adventure').classList.remove('hidden');
}

function acceptAdventure() {
    document.getElementById('response').innerText = "Luar biasa! Aku tidak sabar untuk memulai petualangan ini denganmu! 🌟✨";
    document.getElementById('response').classList.remove('hidden');
}

function declineAdventure() {
    document.getElementById('response').innerText = "Oh, mungkin lain kali. Tapi aku tetap senang bisa berbagi momen ini denganmu! 🌠💫";
    document.getElementById('response').classList.remove('hidden');
}
