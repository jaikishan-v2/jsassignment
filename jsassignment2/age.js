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
                age = value;
                name = { name, age }
            }
        },

    });
}

var emp1 = new Employee('jai', 'trainee', 80, 'bangalore');
test(emp1, emp1.age);

