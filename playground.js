"use strict";

//array of objects
const nbaTeams = [
  { name: "Los Angeles Lakers", division: "Pacific" },
  { name: "Golden State Warriors", division: "Pacific" },
  { name: "Chicago Bulls", division: "Central" },
  { name: "Miami Heat", division: "Southeast" },
  { name: "Dallas Mavericks", division: "Southwest" },
];

let pacificTeams = nbaTeams.filter((team) => team.division == "Pacific");
console.log(pacificTeams);

// [
//   { name: "Los Angeles Lakers", division: "Pacific" },
//   { name: "Golden State Warriors", division: "Pacific" },
// ];
