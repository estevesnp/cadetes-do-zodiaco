const internals = {}; // internal state
export const externals = {}; // external api

internals.findPlayer = async function (index) {
    const results = await fetch(`https://www.balldontlie.io/api/v1/players/${index}`);
    const player = await results.json();
    player.teamOptions = await internals.getTeamOptions(player);
    return player;
}

internals.getTeamOptions = async function (player) {
    
    const results = await fetch(`https://www.balldontlie.io/api/v1/teams`);
    const data = await results.json();
    const teams = data.data.map(element => element.full_name)

    const removedTeams = teams.filter(team => team !== player.team.full_name);

    const randomTeams = new Set([]);

    while (randomTeams.size < 3) {
        randomTeams.add(removedTeams[Math.floor(Math.random() * removedTeams.length)])
    }

    const arr = Array.from(randomTeams);

    arr.splice(Math.floor(Math.random() * (arr.length + 1)), 0, player.team.full_name)

    console.log("[FILTERED ARRAY]:", arr);

    let result = '<p><strong>Guess the team: </strong></p>';

    arr.forEach(element => {
        result += `<p>${element}</p>`
    })

    return arr;
}

externals.getPlayer = async function (index, cb) {
    cb(await internals.findPlayer(index))
};