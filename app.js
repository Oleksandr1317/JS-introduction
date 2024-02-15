let age = 32;
let userName = 'Alex';
let hobbies = ['Sports','Cooking','Reading'];

let job = {
    title: 'Developer',
    place: 'New York',
    salary: 50000
};

let totalAdultYears;

function calculateAdultYears(userAge) {
    return userAge - 18
}

totalAdultYears = calculateAdultYears(19);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let persone = {
    name : 'Alex', // property
    greet() { // method
        console.log('Hello!');
    }
}

persone.greet();