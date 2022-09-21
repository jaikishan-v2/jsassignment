let employee = {
    name : "Coder",
    role : "Trainee",
    location : "Blr",
    age : 25,
};

Object.defineProperty(employee, 'age', {
    set : function (value) {
        
        if (value > 65 || value < 17) {
            throw 'INVALID AGE'
        }
        else{
            {age : value};
        }
    },
    
});

employee.age = 45;

console.log(employee.age)