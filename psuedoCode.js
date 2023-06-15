
const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        // return this.firstName + ' ' + this.lastName;
        return person.firstName + ' ' + person.lastName;
    }
};

const getFullName = person.fullName;
console.log(getFullName());