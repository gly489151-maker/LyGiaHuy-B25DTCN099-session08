const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];

function getUppercaseNames(playerNames) {
    return playerNames.map(name => name.toUpperCase());
}
let newNames = getUppercaseNames(playerNames);
console.log(newNames);
