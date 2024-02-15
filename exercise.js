// task 1
let name = 'Result';
let price = 12;
let goals = ['Learn JS','Learn React','Learn HTML+CSS'];

// task 2
alert(name);
alert(price);
alert(goals);

// task 3
let course = { 
    name : '100 days of code', 
    price : 12,  
    goals : ['Learn JS','Learn React','Learn HTML+CSS']};

alert(course.name);
alert(course.goals);
alert(course.price);

// task 4
alert(course.goals[1])

// task 5
function getListItem(array, arrayIndex) {
    let arrayElements = array[arrayIndex];
    return arrayElements;
}

// task 6
let six = getListItem(course.goals, 1);
alert(six)