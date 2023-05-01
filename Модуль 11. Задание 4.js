// Вариант 1.
function printNumbers(a,b) {
    let i = setInterval(() => {
      console.log(a++);
      if (a > b) clearInterval(i);
    }, 1000)
  }
  
  printNumbers(5, 15);



// Вариант 2. (Нашел в интернете подобный вариант, доделал под условия задания)
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(5, 15);