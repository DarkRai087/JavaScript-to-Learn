//  Adding elements (push, unshift).
//Removing elements (pop, shift)

// 1. Adding New Friends to a Party (Push & Unshift)

let partyGuest= ["praveen", 'Parth',"chintu"]
// A new friend arrives at the end of the list

partyGuest.push("Grav")
console.log("After party List : "+ partyGuest);
// Another friend arrives, but they go to the beginning of the list

partyGuest.unshift("diana");
console.log("After unshift :"+partyGuest);

console.log("----------------------------");

//2. Eating from a Snack Jar (Pop & Shift)

let snacks = ["chips", "drinks"]

let lastsnack = snacks.pop()
console.log("finshed snack is "+ lastsnack);
console.log("left snack is "+ snacks);

let refill = snacks.shift()
console.log(refill);
console.log(snacks);



