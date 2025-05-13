//Task 1: Define the vehicle class

class Vehicle { //created a Vehicle class
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    //Task 2: Add Methods
    getDrive(newMilesDriven = 0) { //this method updates the miles driven by adding them to the original miles entered
        this.mileage = this.mileage + newMilesDriven;
        //return `The new miles on your ${this.type} ${this.make} ${this.model} are: ${updatedMiles}`;

    } 
    getDetails() {
        return `The ${this.type} you have entered is a ${this.make} ${this.model} from ${this.year} and has ${this.mileage} miles.`;
    }
}


//Task 3: Create and Use Vehicle Objects

let myCar = new Vehicle("car", "Ford", "Ecosport", 2020, 48000);
myCar.getDrive(1000);
console.log(myCar.getDetails());

let myTruck = new Vehicle("truck", "Ford", "F-150", 2023, 36000);
myTruck.getDrive();
console.log(myTruck.getDetails());


let myMotorcycle = new Vehicle("Motorcycle", "Harley Davidson", "Fat Boy Gray Ghost", 2025, 1678);
myMotorcycle.getDrive(89);
console.log(myMotorcycle.getDetails());
