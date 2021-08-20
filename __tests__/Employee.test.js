
const Employee = require('../lib/employee');
const myEmployee = new Employee("Tom", 333, "tom@gmail.com");

// NAME
test('Return valid employee name', () => {
    expect(myEmployee.name).not.toBe('');
    expect(myEmployee.name).toEqual(expect.any(String));
    expect(myEmployee.name).toEqual('Tom');
});
test('Return entered employee name', () => {
    expect(myEmployee.getName()).toBe(myEmployee.name);
});

// ID
test('Return employee ID', () => {
    expect(myEmployee.name).not.toBe('');
    expect(myEmployee.id).toEqual(expect.any(Number));
    expect(myEmployee.id).toEqual(333);
});

test('return entered employee ID', () => {
    expect(myEmployee.getId()).toBe(myEmployee.id);
});

// EMAIL
test('Return a valid email', () => {
    expect(myEmployee.email).toEqual(expect.any(String));
    expect(myEmployee.email).toContain('@');
    expect(myEmployee.email).toEqual("tom@gmail.com");

});
test('Return entered employee email', () => {
    expect(myEmployee.getEmail()).toBe(myEmployee.email);
});

// ROLE
test('Return employee role', () => {
    expect(myEmployee.getRole()).toBe("Employee");

});
