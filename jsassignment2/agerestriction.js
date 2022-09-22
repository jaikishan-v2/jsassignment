function Employee (name, role, location, age) {

    let empAge = age
    const emp = {
        name : name,
        role : role,
        location : location,
    }

    Object.defineProperty(emp, 'age', {
        set: function (value) {
            if (value > 65 || value < 17) {
                throw 'INVALID AGE';
            }
            empAge = value;
        },

        get: function() {
            return empAge;
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


console.log(employee.role, employee.age);