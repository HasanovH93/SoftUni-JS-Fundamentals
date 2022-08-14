function followers(input) {
    let obj = {};
  
    input.forEach(el => {
       let [command, ...rest] = el.split(": ");
        if (command === "Log out") {
        return;
}});
     
      switch (command) {
        case "New follower":
          !obj[rest[0]] ? obj[rest[0]] = { likes: 0 } : ''
          break;
  
        case "Like":
          let username = rest[0];
          let likeCount = Number(rest[1]);
          !obj[username] ? obj[username] = { likes: likeCount } : obj[username].likes += likeCount;
          break;
  
        case "Comment":
          let userComment = rest[0];
          !obj[userComment] ? obj[userComment] = { likes: 1 } : obj[userComment].likes += 1;
          break;
  
        case "Blocked":
          let blocked = rest[0];
          obj[blocked] ? delete obj[blocked] : console.log(`${blocked} doesn't exist.`);
      }
    
    console.log(`${Object.entries(obj).length} followers`);
    for (const info of Object.entries(obj)) {
      console.log(`${info[0]}: ${obj[info[0]].likes}`);
    }
  }

  followers([
    "Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out",
  ]);
  console.log("************");
  followers([
    "New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out",
  ]);
  console.log("************");
  followers([
    "Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out",
  ]);