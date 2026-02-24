const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1"
];

function reportTopPerformers(minPerformance, players) {

    const topPlayers = players
        .map(player => {
            const parts = player.split(" - ");
            const name = parts[0];
            const goals = Number(parts[2]);
            const assists = Number(parts[3]);
            const performance = goals + assists;

            return {
                name: name,
                performance: performance
            };
        })
        .filter(player => player.performance >= minPerformance);

    if (topPlayers.length === 0) {
        console.log("Tổng hiệu suất: 0");
        return 0;
    }

    topPlayers
        .map(player => `${player.name}: ${player.performance}`)
        .forEach(line => console.log(line));

    const totalPerformance = topPlayers
        .reduce((sum, player) => sum + player.performance, 0);

    console.log("Tổng hiệu suất: " + totalPerformance);

    return totalPerformance;
}