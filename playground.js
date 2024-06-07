"use strict";

async function initialize() {
  async function fetchUsers() {
    let response = await fetch("http://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    return users;
  }

  let users = await fetchUsers();
  console.log(users);
}

initialize();
