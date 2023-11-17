// get the values from the interface
// 1. starts or Controller function

function getValues() {
  // get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;


  // We need to validate our inputs
  // parse into Integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

    // We call generateNumbers
    let numbers = generateNumbers(startValue, endValue);

    // We call displayNumbers
    displayNumbers(numbers);
    
  } else {
    alert("You must enter integer/whole number");
  }
}

// generate numbers from startValue to endValue
// 2. Logic function(s) -- This could be multiple function if it is complex
function generateNumbers(sValue, eValue) {
  let numbers = [];

  for (let index = sValue; index <= eValue; index++) {
    numbers.push(index);
  }
  return numbers;
}

// display the numbers and mark the even numbers in bold
// 3. display or View function

let templateRows = "";

function displayNumbers(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    let className = "";
    let number = numbers[index];

    if (number % 2 === 0) {
      className = "even";
    } else {
      className = "odd";
    }

    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }

  document.getElementById("results").innerHTML = templateRows;
}
