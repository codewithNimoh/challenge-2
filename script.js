for (let i = 1; i <= 30; i++) {
  if (i%3 === 0 && i%5 === 0) {
    console.log("Chai & Mandazi");
  } else if (i%3 === 0) {
    console.log("Chai");
  } else if (i%5 === 0) {
     console.log("Mandazi");
  } else {
    console.log(i);
  }
}
// Challenge 2: count months until savings reach the goal
let goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

while (total < goal) {
  total = total + saving;
  let line = `Month ${month}: saved KES ${saving}, total KES ${total}`;
    if (saving >= 500) {
      line = line + " - Big month!";
    }
  console.log(line);
  
month=month + 1;    
saving = saving + 50;   
}
console.log(`Goal reached in month ${month - 1} with KES ${total}!`);