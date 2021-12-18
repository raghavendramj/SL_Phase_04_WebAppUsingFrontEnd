let person = {
  firstName: "John",
  lastName: "Doe",
};

function typicalWay() {
  let firstName = person.firstName;
  let lastName = person.lastName;
  console.log("Typical Way : firstName : ", firstName);
  console.log("Typical Way : lastName : ", lastName);
}
// typicalWay();

function usingObjectDest() {
  //let { property1: variable1, property2: variable2 } = object;
  let { firstName: fname, lastName: lname } = person;
  console.log("Object Dest firstName : ", fname);
  console.log("Object Dest lastName : ", lname);

  let { firstName, lastName } = person;

  console.log(firstName); // 'John'
  console.log(lastName); // 'Doe'
}

// usingObjectDest();

function defaultValues() {
  let { firstName, lastName, middleName = "", currentAge: age = 18 } = person;
  console.log("Object Dest middleName : ", middleName);
  console.log("Object Dest age : ", age);
}

// defaultValues();

function getPerson() {
  return null;
}

function destNullObejct() {
  //let { firstName, lastName } = getPerson();
  //TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.
  let { firstName, lastName } = getPerson() || {};
}

// destNullObejct();

function nestedObjectDest() {
  let employee = {
    id: 1001,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
  };

  let {
    name: { firstName, lastName },
  } = employee;

  console.log("firstName -> ", firstName);
  console.log("lastName -> ", lastName);
}

nestedObjectDest();
