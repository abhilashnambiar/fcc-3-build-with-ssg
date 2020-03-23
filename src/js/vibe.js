// JavaScript source code
const vibes = [
    "rrrr!!!",
    "random!!!!",
    "extremely random!!!!!"
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);