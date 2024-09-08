// some classes Javascript provides us.
const now = new Date();
console.log("now.toISOString(): ",now.toISOString());
console.log("now.getMonth(): ",now.getMonth());
console.log("now.getDate(): ",now.getDate());

const map = new Map();
map.set('name','Alice');
map['anothername'] = 'AnotherAlice'
map.set('age',30);
console.log(map.get('name'));
