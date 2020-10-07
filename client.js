const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let i = 0; i < employees.length; i++) {
  const employeeObj = employees[i];
  newEmployeeObject(employeeObj);
}

function newEmployeeObject(kittyKat) {
  console.log(kittyKat);
}

// function calcBonus(employee) {
//   let worker = {
//     name: name,
//     employeeNumber,
//   };
//   return worker;
// }

// function employeeBonus() {
//   for (let person of employees) {
//     calcBonus(person);

//     worker.push(person.name);
//     if (person.reviewRating === 5) {
//       let bonusPercentage = 1.1;
//       worker.push(bonusPercentage);
//       console.log('match5', person.name, bonusPercentage);
//     } else if (person.reviewRating === 4) {
//       let bonusPercentage = 1.06;
//       console.log('match4', person.name, bonusPercentage);
//     } else if (person.reviewRating === 3) {
//       let bonusPercentage = 1.04;
//       console.log('match3', person.name, bonusPercentage);
//     } else {
//       let bonusPercentage = 1;
//       console.log('shitty employee', person.name, bonusPercentage);
//     }
//     return worker;
//   }
// }

// worker.name = person.name;
// worker.bonusPercentage = person.annualSalary;
// worker.totalCompensation = person.annualSalary;
// worker.totalBonus = person.annualSalary + 'this';

// bonusPercentage= (
//   If (employees.employeeSalary==5){
//     let bonusPercentage =0 .1
//   }else if{
//   (employees.employeeSalary ==4){
//     let bonusPercentage =.006
//   }else if{employees.employeeSalary==3{
//     let bonusPercentage = 0.04
//   }else{
//     let bonusPercentage = 0.0
//   }
