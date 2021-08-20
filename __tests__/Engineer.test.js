
const Engineer = require('../lib/engineer');
const myEngineer = new Engineer("Tom", 333, "tom@gmail.com", "Tom-Hub");

// NAME
test('Return valid engineer name', () => {
    expect(myEngineer.name).not.toBe('');
    expect(myEngineer.name).toEqual(expect.any(String));
    expect(myEngineer.name).toEqual('Tom');
});
test('Return entered engineer name', () => {
    expect(myEngineer.getName()).toBe(myEngineer.name);
});

// ID
test('Return engineer ID', () => {
    expect(myEngineer.name).not.toBe('');
    expect(myEngineer.id).toEqual(expect.any(Number));
    expect(myEngineer.id).toEqual(333);
});

test('return entered engineer ID', () => {
    expect(myEngineer.getId()).toBe(myEngineer.id);
});

// EMAIL
test('Return a valid email', () => {
    expect(myEngineer.email).toEqual(expect.any(String));
    expect(myEngineer.email).toContain('@');
    expect(myEngineer.email).toEqual("tom@gmail.com");

});
test('Return entered engineer email', () => {
    expect(myEngineer.getEmail()).toBe(myEngineer.email);
});
//GITHUB
test('Return valid github information', () => {
    expect(myEngineer.github).toEqual(expect.any(String));
    expect(myEngineer.github).toEqual("Tom-Hub");
});
test('Return github handle', () => {
    expect(myEngineer.getGithub()).toBe(myEngineer.github);
});

// ROLE
test('Return engineer role', () => {
    expect(myEngineer.getRole()).toBe("Engineer");

});
