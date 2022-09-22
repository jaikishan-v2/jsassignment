function Employee(name, role, location, age) {
        const emp = {
        name: name,
        role: role,
        location: location,
    }

    Object.defineProperty(emp, 'age', {
        set: function (value) {
            if (value > 65 || value < 17) {
                throw 'INVALID AGE';
            }
            this.Age = value;
        },

        get: function () {
            return this.Age;
        },

    });
    return emp;
}
employee = Employee();

employee1 = Employee();

employee.name = 'coder';
employee.role = 'trainee';
employee.location = 'blr';
employee.age = 45;

employee.age = 35;

employee1.age = 40;

console.log(employee);