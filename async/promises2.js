let success = true;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject("Failed to get users");
      }
    }, 1000);
  });
}
// function onful

function findUser(username) {
  return getUsers().then((users) => {
    const user = users.find((user) => user.username === username);
    return user;
  });
}

getUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  });

findUser("john")
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });
