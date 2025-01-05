//use of for, while, and forEach
let player = ["rohit", "yash","kohil","pant","kl","Gill"]
console.log("Worst playe in BGT ");
for(let i=0;i<player.length;i++){
    console.log(`${i+1}. ${player[i]}`);
    
}

//while
let i=0;
console.log("player with while loop");
while(i<player.length){
    console.log(player[i]);
    i++
}

//for Each
let runs = [31,391,190,255,276,93]
console.log("Runs : ");
runs.forEach((run,player)=>{
    console.log(`Player ${player +1 }: Scored ${run}`);
    
})
