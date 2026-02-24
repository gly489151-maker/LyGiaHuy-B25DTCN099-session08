const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37"
];

function reportByPosition(players, minGoals) {

    let playerObjects = [];

    for (let i = 0; i < players.length; i++) {

        let parts = players[i].split(" - ");

        let name = parts[0];
        let position = parts[1];
        let goals = Number(parts[2]);
        let assists = Number(parts[3]);
        let matches = Number(parts[4]);

    
        let player = {
            name: name,
            position: position,
            goals: goals,
            assists: assists,
            matches: matches
        };

        playerObjects.push(player);
    }

    
    let filteredPlayers = playerObjects.filter(function(player) {
        return player.goals >= minGoals;
    });

    let grouped = {};

    filteredPlayers.forEach(function(player) {

        if (!grouped[player.position]) {
            grouped[player.position] = {
                count: 0,
                totalGoals: 0,
                totalAssists: 0,
                totalMatches: 0
            };
        }

        grouped[player.position].count++;
        grouped[player.position].totalGoals += player.goals;
        grouped[player.position].totalAssists += player.assists;
        grouped[player.position].totalMatches += player.matches;
    });

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");

    let totalTeamGoals = 0;

    for (let position in grouped) {

        let data = grouped[position];

        let avgPerformance = 
            (data.totalGoals + data.totalAssists) / data.totalMatches;

        console.log(position + ":\n");
        console.log("- Số cầu thủ: " + data.count + "\n");
        console.log("- Tổng bàn thắng: " + data.totalGoals + "\n");
        console.log("- Tổng kiến tạo: " + data.totalAssists + "\n");
        console.log("- Tổng số trận: " + data.totalMatches + "\n");
        console.log("- Trung bình hiệu suất/trận: " 
                    + avgPerformance.toFixed(2) + "\n");

        totalTeamGoals += data.totalGoals;
    }

    console.log("------------------------\n");
    console.log("Tổng bàn thắng toàn đội : " + totalTeamGoals);
}

reportByPosition(players, 5);