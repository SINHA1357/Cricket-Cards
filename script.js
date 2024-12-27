const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteCricketTeam = {
    team: "India",
    sport: "Cricket",
    year: 2024,
    isWorldCupWinner: true,
    headCoach: {
        coachName: "Gautam Gambhir",
        matches: 7,
    },
    players: [
        {
            name: "Rohit Sharma",
            position: "captain",
            isCaptain: true,
            nickname: "hitman",
        },
        {
            name: "Virat Kohli",
            position: "batsman",
            isCaptain: false,
            nickname: "chiku",
        },
        {
            name: "Shubman Gill",
            position: "batsman",
            isCaptain: false,
            nickname: "shubi",
        },
        {
            name: "Suryakumar Yadav",
            position: "batsman",
            isCaptain: false,
            nickname: "sky",
        },
        {
            name: "Shreyas Iyer",
            position: "batsman",
            isCaptain: false,
            nickname: "shre",
        },
        {
            name: "Ravindra Jadeja",
            position: "all rounder",
            isCaptain: false,
            nickname: "jaddu",
        },
        {
            name: "Hardik Pandya",
            position: "all rounder",
            isCaptain: false,
            nickname: "kung fu pandya",
        },
        {
            name: "Axar Patel",
            position: "all rounder",
            isCaptain: false,
            nickname: "bapu",
        },
        {
            name: "Jasprit Bumrah",
            position: "bowler",
            isCaptain: false,
            nickname: "boom",
        },
        {
            name: "Mohammed Siraj",
            position: "bowler",
            isCaptain: false,
            nickname: "miyan",
        },
        {
            name: "Ravichandran Ashwin",
            position: "bowler",
            isCaptain: false,
            nickname: "ash",
        },
        {
            name: "Kuldeep Yadav",
            position: "bowler",
            isCaptain: false,
            nickname: "kuldeep",
        },
        {
            name: "Prasidh Krishna",
            position: "bowler",
            isCaptain: false,
            nickname: "prassi",
        },
        {
            name: "Rishabh Pant",
            position: "wicketkeeper",
            isCaptain: false,
            nickname: "spidey",
        },
        {
            name: "KL Rahul",
            position: "wicketkeeper",
            isCaptain: false,
            nickname: "KL",
        },
        {
            name: "Ishan Kishan",
            position: "Wicketkeeper",
            isCaptain: false,
            nickname: "pocket dynamo",
        },
    ],
};

Object.freeze(myFavoriteCricketTeam);
const { sport, team, year, players } = myFavoriteCricketTeam;
const { coachName } = myFavoriteCricketTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
    playerCards.innerHTML += arr
        .map(
            ({ name, position, isCaptain, nickname }) => {
                return `
        <div class="player-card">
        <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
        <p>Position: ${position}</p>
        <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
    ` }
        )
        .join("");
};

playersDropdownList.addEventListener("change", (e) => {
    playerCards.innerHTML = "";
    switch (e.target.value) {
        case "nickname":
            setPlayerCards(
                players.filter((player) => player.nickname !== null));
            break;
        case "captain":
            setPlayerCards(
                players.filter((player) => player.position === "captain"));
            break;
        case "bowler":
            setPlayerCards(
                players.filter((player) => player.position === "bowler")
            );
            break;
        case "batsman":
            setPlayerCards(
                players.filter((player) => player.position === "batsman")
            );
            break;
        case "wicketkeeper":
            setPlayerCards(
                players.filter((player) => player.position === "wicketeeper")
            );
            break;
        case "all rounder":
            setPlayerCards(
                players.filter((player) => player.position === "all rounder")
            );
            break;
        default:
            setPlayerCards()
    }
});
