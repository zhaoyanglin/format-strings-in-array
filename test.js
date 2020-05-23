const {list} = require('./main');

test("Must work with many names", () => {
    const answer = list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);
    expect(answer).toBe("Bart, Lisa, Maggie, Homer & Marge");
});

test("Must work with two name", () => {
    const answer = list([{name: 'Bart'},{name: 'Lisa'}]);
    expect(answer).toBe("Bart & Lisa");
});