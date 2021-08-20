
const Intern= require('../lib/Intern');
const myIntern = new Intern("Tom", 333, "tom@gmail.com", "UCLA");

// NAME
test('Return valid intern name', () => {
    expect(myIntern.name).not.toBe('');
    expect(myIntern.name).toEqual(expect.any(String));
    expect(myIntern.name).toEqual('Tom');
});
test('Return entered intern name', () => {
    expect(myIntern.getName()).toBe(myIntern.name);
});

// ID
test('Return intern ID', () => {
    expect(myIntern.name).not.toBe('');
    expect(myIntern.id).toEqual(expect.any(Number));
    expect(myIntern.id).toEqual(333);
});

test('return entered intern ID', () => {
    expect(myIntern.getId()).toBe(myIntern.id);
});

// EMAIL
test('Return a valid email', () => {
    expect(myIntern.email).toEqual(expect.any(String));
    expect(myIntern.email).toContain('@');
    expect(myIntern.email).toEqual("tom@gmail.com");

});
test('Return entered intern email', () => {
    expect(myIntern.getEmail()).toBe(myIntern.email);
});
//SCHOOL
test('Return valid school information', () => {
    expect(myIntern.school).toEqual(expect.any(String));
    expect(myIntern.school).toEqual("UCLA");
});
test('Return github handle', () => {
    expect(myIntern.getSchool()).toBe(myIntern.school);
});

// ROLE
test('Return intern role', () => {
    expect(myIntern.getRole()).toBe("Intern");

});
