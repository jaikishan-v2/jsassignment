var employee = {
    name : "Coder",
    role : "Trainee",
    age : 25,
    location : "Bangalore",
};
Object.defineProperty(employee, 'age',{

    set: function (age) {
        if (age < 65 && age > 17) {
            age = age;
        } else {
            throw 'Invalid age';
        }
    }
});
employee.age = 26;

/* Write a code to sort this array */ 
var a = [4,8,15,16,23,12];
sorted = a.sort(function (a,b) {return a-b });
console.log(sorted);