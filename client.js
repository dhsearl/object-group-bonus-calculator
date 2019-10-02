const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




console.log( employees );



function bonusCalculator(employee){
  console.log(`Calculating the bonus of ${employee.name}`);
  let calculatedBonus = 0;
  // First check of Rating
  if(employee.reviewRating <= 2){
    calculatedBonus = 0;
    return calculatedBonus; // No Bonus for you!
  } else if (employee.reviewRating == 3) {
    calculatedBonus = .04;
  } else if (employee.reviewRating == 4) {
    calculatedBonus = .06;
  } else if (employee.reviewRating == 5) {
    calculatedBonus = .1;
  } else {
    alert(`Employee: ${employee.name} has rating value out of range 0:5`);
  }
  // Next check employee number to see if they are OGs
  if (employee.employeeNumber.length == 4){
    calculatedBonus += .05;
  }

  if (Number(employee.annualSalary) > 65000){
    calculatedBonus -= .01;
    if (calculatedBonus < 0) calculatedBonus = 0; // Check to make sure those low performers aren't going down
  }

  if (calculatedBonus > .13) calculatedBonus = .13; // Ensure no one is too big
  return calculatedBonus;
}

// console.log(bonusCalculator(employees[1])); // testing

function employeeObjectMaker(employee) {
  let bonus = bonusCalculator(employee);
  return {
    name: employee.name,
    bonusPercentage: bonus*100,
    totalCompensation: (Number(employee.annualSalary) * (1 + bonus)).toFixed(0),
    totalBonus: (Number(employee.annualSalary) * bonus).toFixed(0)

  }
}

// the Main Show
function createEmployeePayArray(employeeArray) {
   
  return employeeArray.map(employeeObjectMaker);
}
console.log(createEmployeePayArray(employees));

// Javascript and jQuery to print to page




const printAllEmployees = () => { // had to use const so It wouldn't pre-load the function :) 
  let leftBoxHtml = '';  
  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    leftBoxHtml += `<p>Name: ${employee.name} (${employee.employeeNumber})<br></p>`;
  }
  leftBoxHtml += `<br><button id='bonusCalc' onclick='printBonuses()'>Calcuate Bonuses &crarr;</button>`
  let el = document.getElementById('leftBox');
  el.innerHTML = leftBoxHtml;
}


const printBonuses = () => {
  let rightBoxHTML = '';
  // animate a thinking . . .
  // getting results ...
  // clear html
  // print array of bonuses in a table maybe?

  let bonusArray = createEmployeePayArray(employees);
  for (let i = 0; i < bonusArray.length; i++) {
    let employee = bonusArray[i];
    rightBoxHTML += `<p>Bonus: ${employee.bonusPercentage.toPrecision(3)}% an increase of $${employee.totalBonus}<br></p>`;
  }
  let el = document.getElementById('rightBox');
  el.innerHTML = rightBoxHTML

}


window.onload = function () {
  printAllEmployees();
}

