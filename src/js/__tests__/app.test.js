import Team from '../app';

const zombi = { name: 'Zombie', className: 'zombi' };
const devil = { name: 'Daemon', className: 'devil' };
const mage = { name: 'Magition', className: 'mage' };

test('add the character to the team', () => {
    const myTeam = new Team();
    myTeam.add(mage);
    const recieved = myTeam.members.has(mage);
    expect(recieved).toBe(true);
});

test('error to add a character already in the team', () => {
    expect(() => {
    const myTeam = new Team();
    myTeam.add(zombi);
    myTeam.add(zombi);
  }).toThrow('Ошибка');
});

test('do not duplicate when adding multiple characters to a team', () => {
    const myTeam = new Team();
    myTeam.addAll(zombi, devil, mage, zombi, devil, mage);
    const recieved = myTeam.members.size;
    expect(recieved).toBe(3);
});

test('correctly convert a set to an array', () => {
    const myTeam = new Team();
    myTeam.addAll(zombi, devil);
    const recieved = myTeam.toArray();
    const expected = [
        { name: 'Zombie', className: 'zombi' },
        { name: 'Daemon', className: 'devil' },
    ];

    expect(recieved).toEqual(expected);
});
