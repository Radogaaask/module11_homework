const invo = (x, n) => {
    let result = x;
 
   for (let i = 1; i < n; i++) {
     result *= x;
   }
 
   return console.log(result);
 }
 
 invo(5, 3);
 
 