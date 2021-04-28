function partyTime(arr) {
    
    let vipList = new Set();
    let regularList = new Set();
    
    while(arr[0] != "PARTY"){
        let guest = arr.shift();
       if(Number.isNaN(Number(guest[0]))){
           regularList.add(guest)

       }else {
           vipList.add(guest)
       }
    }
    for (const guest of arr) {
     vipList.delete(guest);
     regularList.delete(guest);
        
    }
    console.log(vipList.size + regularList.size)
   for (const guest of vipList) {
       console.log(guest)
   }
   for(const guest of regularList) {
       console.log(guest)
   }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
