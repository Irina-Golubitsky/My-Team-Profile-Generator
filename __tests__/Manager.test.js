
const Manager= require('../lib/manager');
const myManager = new Manager("Tom", 333, "tom@gmail.com", 123);

// NAME
test('Return valid Manager name', () => {
    expect(myManager.name).not.toBe('');
    expect(myManager.name).toEqual(expect.any(String));
    expect(myManager.name).toEqual('Tom');
});
test('Return entered Manager name', () => {
    expect(myManager.getName()).toBe(myManager.name);
});

// ID
test('Return Manager ID', () => {
    expect(myManager.name).not.toBe('');
    expect(myManager.id).toEqual(expect.any(Number));
    expect(myManager.id).toEqual(333);
});

test('return entered Manager ID', () => {
    expect(myManager.getId()).toBe(myManager.id);
});

// EMAIL
test('Return a valid email', () => {
    expect(myManager.email).toEqual(expect.any(String));
    expect(myManager.email).toContain('@');
    expect(myManager.email).toEqual("tom@gmail.com");

});
test('Return entered Manager email', () => {
    expect(myManager.getEmail()).toBe(myManager.email);
});
//OFFICE NUMBER
test('Return valid office number', () => {
    expect(myManager.officeNumber).toEqual(expect.any(Number));
    expect(myManager.officeNumber).toEqual(123);
});
test('Return office number', () => {
    expect(myManager.getOfficeNumber()).toBe(myManager.officeNumber);
});

// ROLE
test('Return Manager role', () => {
    expect(myManager.getRole()).toBe("Manager");

});
