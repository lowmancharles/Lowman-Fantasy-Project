const heading = document.querySelector("h1");
const nameInput = document.querySelector("#nameInput");
const positionInput = document.querySelector("#positionSelect");
const button = document.querySelector("#loadLineup");
const totalElement = document.querySelector("#totalPoints");
const pointsInput = document.querySelector("#pointsInput");
const players = [
    {name: "Josh Allen", position: "QB", points: 24.5},
    {name: "Jordan Love", position: "QB", points: 18.3},
    {name: "Jamarr Chase", position: "WR", points: 15.2},
    {name: "Parker Washington", position: "WR", points: 12.8},
    {name: "Brock Bowers", position: "TE", points: 18.1},
    {name: "Bayshal Tuten", position: "RB", points: 14.7},
    {name: "Emmanual Wilson", position: "RB", points: 13.9},
    {name: "Tyler Loop", position: "K", points: 10},
];
button.addEventListener("click", function (event) {
    console.log("Button Clicked!");
    if (heading.textContent === "Lowbros Pulstars") {
        heading.textContent = "Lineup Loaded!";
    } else {
        heading.textContent = "Lowbros Pulstars";
    }
});
const addButton = document.querySelector("#addPlayer");
const roster = document.querySelector("#roster");

addButton.addEventListener("click", function () {
  players.push({
    name: nameInput.value,
    position: positionInput.value,
    points: Number(pointsInput.value)
  });
  nameInput.value = "";
  pointsInput.value = "";
  renderRoster();
});

const limits = { QB: 1, RB: 2, WR: 2, TE: 1, FLEX: 1, K: 1 };
const flexEligible= ["RB", "WR", "TE"];
function renderRoster() {
  document.querySelectorAll(".roster").forEach(function (list) {
    list.innerHTML = "";
  });
const counts = { QB: 0, RB: 0, WR: 0, TE: 0, FLEX: 0, K: 0 };
  let total = 0;
  players.forEach(function (player) {
    const newPlayer = document.createElement("li");
    newPlayer.className = "player";
    const nameSpan = document.createElement("span");
    nameSpan.textContent = player.name;
    const pointsSpan = document.createElement("span");
    pointsSpan.className = "points";
    pointsSpan.textContent = player.points.toFixed(1);
    newPlayer.append(nameSpan, pointsSpan);

    if (counts[player.position] < limits[player.position]) {
      // room at their own position
      const list = document.querySelector("#" + player.position);
      list.appendChild(newPlayer);
      counts[player.position] = counts[player.position] + 1;
      total = total + player.points;
    } else if (flexEligible.includes(player.position) && counts.FLEX < limits.FLEX) {
      // position full, but flex is open
      const flexList = document.querySelector("#FLEX");
      flexList.appendChild(newPlayer);
      counts.FLEX = counts.FLEX + 1;
      total = total + player.points;
    } else {
      // nowhere to start, send to bench
      const bench = document.querySelector("#bench");
      bench.appendChild(newPlayer);
    }

  });

  totalElement.textContent = total.toFixed(1);
}

renderRoster();