
/* 
Reduce Complexity + increase reusability 
*/






// without encapsulation

let employeeName = 'Hari';
let team = 'Development';
let title = 'SDET';

let details = function getDetails(employeeName, team, title) {
    return `EmployeeName is ${employeeName} from the ${team} team with ${title} title.`;
}

console.log(details());


// with encapsulation

let employee = {
 employeeName: 'Hari',
 team: 'Development',
 title: 'SDET',
 getDetails: function() {
    return `EmployeeName is ${employeeName} from the ${team} team with ${title} title.`;
 }
}

console.log(employee.getDetails());




// The best functions are those with no paramaters