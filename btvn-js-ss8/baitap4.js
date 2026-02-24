const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];
function getReversedNames(players) {
    return players
        .map(player => player.split(" - ")[0]) // lấy tên
        .reverse(); // đảo ngược
}

console.log(getReversedNames(players));
