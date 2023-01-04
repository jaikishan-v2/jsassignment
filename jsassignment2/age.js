function Employee(name, role, age, location) {
    this.name = name;
    this.role = role;
    this.age = age;
    this.location = location;
    
};

function test(name, age) {
    Object.defineProperty(name, 'age', {
        set: function (value) {
            if (value > 65 || value < 17) {
                throw 'INVALID AGE'
            }
            else {
                this.age = value;
            }
        },

    });
}

var emp1 = new Employee('jai', 'trainee', 40, 'bangalore');
console.log(emp1.age);
emp1.age = 50;
test(emp1, emp1.age);
console.log(emp1.age);

