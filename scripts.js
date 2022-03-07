

console.log(
    "%cStart%c of scripts.js file!",
    "font-weight: 900: color Red;",
    "font-weight: 400; color: Red"
);

const person1 = {
    name: `Doug`,
    sayHello: function () {
        console.log(`  Hello! My name is ${this.name}.`, `color: light grey;`);
    },
};

const person2 = {
    name: `Damon`,
    sayHello: function () {
        console.log(` Hello! My name is ${this.name}.`);
    },
};

const person3 = {
    name: ` Ken`,
    sayHello: function () {
        console.log(`  Hello! My name is ${this.name}.`);
    },
};

const person4 = {
    name: ` Matt`,
    sayHello: function () {
        console.log(`  Hello! My name is ${this.name}.`);
    },
};

const person5 = {
    name: `Cole`,
    sayHello: function () {
        console.log(`  Hello! My name is ${this.name}.`);
    },
};

console.log(
    ` %cVia %cObject Literal%c Syntax:`,
    `font-weight:600; color: black;`,
    `font-weight: 900; text-decoration: underline; color: green;`,
    `font-weight: 600: color: black:`
);

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

console.log(`%c... ... ...`, `color: grey;`);

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

Person.prototype.sayHello = function () {
    console.log(
        "  Hey! My name is" +
        this.name +
        ". I am " +
        this.age +
        " and I live in " +
        this.city +
        "."
    );
};

const person1Again = new Person(`Doug`, 24, `Anniston`);
const person2Again = new Person(`Damon`, 26, `Anniston`);
const person3Again = new Person(`Ken`, 29, `Birmingham`);
const person4Again = new Person(`Matt`, 28, `Cold Water`);
const person5Again = new Person(`Cole`, 27, `Cold Water`);

console.log(
    `%cVia %ES5%c Syntax!`,
    `font-weight: 600: color: black;`,
    `font-weight: 900; text-decoration: underline; color: green;`,
    `font-weight: 600: color: black;`
);

person1Again.sayHello();
person2Again.sayHello();
person3Again.sayHello();
person4Again.sayHello();
person5Again.sayHello();

class PersonAgain {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    sayHelloAgain() {
        console.log(
            `  Hey! My name is ${this.name}. I am ${this.age} and I live in ${this.city}.`
        );
    }
}

const person1ES6 = new PersonAgain(`Doug`, 24, `Anniston`);
const person2ES6 = new PersonAgain(`Damon`, 26, `Anniston`);
const person3ES6 = new PersonAgain(`Ken`, 29, `Birmingham`);
const person4ES6 = new PersonAgain(`Matt`, 28, `Cold Water`);
const person5ES6 = new PersonAgain(`Cole`, 27, `Cold Water`);

console.log(
    `%cVia %cES6%c Syntax:`,
    `font-weight: 600; color: black;`,
    `font-weight: 900; text-decoration: underline; color: green;`,
    `font-weight: 600; color: black;`
);

person1ES6.sayHelloAgain();
person2ES6.sayHelloAgain();
person3ES6.sayHelloAgain();
person4ES6.sayHelloAgain();
person5ES6.sayHelloAgain();

console.log(`%c. . .`, "color: grey: font-weight: 800; font-size: 12px;");

class Vehicle {
    constructor(type, manufacturer, model, numberOfWheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.model = model;
        this.numberOfWheels = numberOfWheels;
    }

    aboutVehicle() {
        console.log(
                `%cVia %cVehicle%c Paraent Class:`,
                `font-weight: 600;`,
                `font-weight: 900; text decoration: underline;`,
                `font-weight: 600; color:`
            );
        console.log(
            `   %cVehicle Type:%c ${this.type}`,
            `text-decoration: underline; font-weight: 600;`,
            `color: green; font-weight: 600;`
        );
        console.log(
            `   %cManufacturer:%c ${this.manufacturer}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
        console.log(
            `   %cModel:%c ${this.model}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
        console.log(
            `   %cWheels:%c ${this.numberOfWheels}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
    }
}

class Truck extends Vehicle {
    constructor(
        type,
        manufacturer,
        model,
        numberOfWheels,
        numberOfDoors,
        truckBed
    ) {
        super(type, manufacturer, model, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.truckBed = truckBed;

    }
    aboutVehcicle() {
        console.log(
            `%cVia %cTruck%c Child Class:`,
            `font-weight: 600;`,
            `font-weight: 900; text-decoration: underline;`,
            `font-weight: 600; color:`
        );
        console.log(
            `   %cVehicle Type:%c ${this.type}`,
            `text-decoration: underline; font-weight: 600;`,
            `color: green; font-weight: 600;`
        );
        console.log(
            `   %cManufacturer:%c ${this.manufacturer}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
        console.log(
            `   %cModel:%c ${this.model}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
        console.log(
            `   %cWheels:%c ${this.numberOfWheels}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
        console.log(
            `       %cDoors:%c ${this.numberOfDoors}`,
            `font-weight: 700; text-decoration: underline; color: grey;`,
            `font-weight: 400;`
        );
        console.log(
            `       %cHas Truck Bed:%c ${this.truckBed}`,
            `font-weight: 700; text-decoration: underline; color: grey;`,
            `font-weight: 400;`
        );
    }
}

class Sedan extends Vehicle {
    constructor(type, manufacturer, model, numberOfWheels, size, milesPerGallon) {
        super(type, manufacturer, model, numberOfWheels);
        this.size = size;
        this.milesPerGallon = milesPerGallon;
    }

    aboutVehcicle() {
        console.log(
            `%cVia %cSedan%c Child Class:`,
            `font-weight: 600;`,
            `font-weight: 900; text-decoration: underline;`,
            `font-weight: 600; color:`
        );
        console.log(
            `   %cVehicle Type:%c ${this.type}`,
            `text-decoration: underline; font-weight: 600;`,
            `color: green; font-weight: 600;`
        );
        console.log(
            `   %cManufacturer:%c ${this.manufacturer}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
        console.log(
            `   %cModel:%c ${this.model}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
        console.log(
            `   %cWheels:%c ${this.numberOfWheels}`,
            `text-decoration: underline;`,
            `font-weight: 400;`
        );
        console.log(
            `       %cSize:%c ${this.size}`,
            `font-weight: 700; text-decoration: underline; color: grey;`,
            `font-weight: 400;`
        );
        console.log(
            `       %cMiles per Gallon (MPG):%c ${this.milesPerGallon}`,
            `font-weight: 700; text-decoration: underline; color: grey;`,
            `font-weight: 400;`
        );
    }
}
class Motorcycle extends Vehicle {
    constructor(type, manufacturer, model, numberOfWheels, hasHandlebars, hasDoors) {
        super(type, manufacturer, model, numberOfWheels);
        this.hasHandlebars = hasHandlebars
        this.hasDoors = hasDoors;
    }

    aboutVehcicle() {
        console.log(`%cVia %cMotorcycle%c Child Class:`, `font-weight: 600;`, `font-weight: 900; text-decoration: underline;`, `font-weight: 600; color:`);
        console.log(`   %cVehicle Type:%c ${this.type}`, `text-decoration: underline; font-weight: 600;`, `color: green; font-weight: 600;`);
        console.log(`   %cManufacturer:%c ${this.manufacturer}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cModel:%c ${this.model}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`   %cWheels:%c ${this.numberOfWheels}`, `text-decoration: underline;`, `font-weight: 400;`);
        console.log(`       %cHas Handlebars:%c ${this.hasHandlebars}`, `font-weight: 700; text-decoration: underline; color: grey;`, `font-weight: 400;`);
        console.log(`       %cHas Doors:%c ${this.hasDoors}`, `font-weight: 700; text-decoration: underline; color: grey;`, `font-weight: 400;`);
    }
}

let fordRanger = new Truck('Truck', 'Ford', 'Ranger', 4, 2, true);
let mazada6 = new Vehicle('Subcompact', 'Mazada', '6', 4);
let onyxCTY = new Motorcycle('Motorcycle', 'Onyx', 'CTY', 2, true, false);
let toyotaCamry = new Sedan('Sedan', 'Toyota', 'Camry', 4, 'Medium', 34);

console.log(fordRanger);
console.log(mazada6);
console.log(onyxCTY);
console.log(toyotaCamry);

console.log(`%c. . .`, 'color: grey: font-weight: 800; font-size: 12px;');

fordRanger.aboutVehicle();
mazada6.aboutVehicle();
onyxCTY.aboutVehicle();
toyotaCamry.aboutVehicle();

console.log(`%c. . .`, 'color: grey; font-weight: 800; font-size: 12px;');
console.log('%cEnd%c of scripts.js file!', 'font-weight: 900; color: blue;', 'font-weight: 400; color: blue;');

