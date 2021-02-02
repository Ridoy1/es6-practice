const person = {name : 'jack william', age : 17, job : 'google', address : "katabon", phone : 011234546, friends : ['Tom hand','Tom kota', 'Tom sagol']};

// const jobName = person.job;
// const phone = person.phone;

const {phone, address, salary} = person;

console.log(address, phone, salary);
console.log(address, phone, salary);
console.log(address, phone, salary);
console.log(address, phone, salary);
console.log(address, phone, salary);

const complexObject = {
    name :'kamal',
    info : {
        address : 'Rajgong',
        leader : 'Hridoy'
    },
};
const {leader} = complexObject.info;
console.log(leader);