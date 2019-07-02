function Car(parameters) {
    this.wheels = 4;
    this.crankshaft = true;
    this.transmission = 'automatic';
    this.doors = parameters.doors
                 ? parameters.doors
                 : 4;
    this.color = parameters.color
                 ? parameters.color
                 : 'red';
}
Car.prototype.carInfo = function () {
    return `${this.name}, engine ${this.volume} liters, ${this.transmission}, number of seats: ${this['quantity of seats']}`
};

function GasEngine(parameters) {
    Car.apply(this, arguments);
    this['quality standard'] = parameters.gasStandard;
    this.volume = parameters.volume;
    this.price = function () {
        return (`Price ${this.volume * 100 * 50} $`)
    }
}

function Diesel(parameters) {
    Car.apply(this, arguments);
    this.name = parameters.name;
    this['quality standard'] = parameters.gasStandard;
    this['quantity of seats'] = parameters.seats;
    this.volume = parameters.volume;
    this.price = function () {
        return (`Price ${this.volume * 80 * 75} $`)
    }
}
Diesel.prototype = Object.create(Car.prototype);

function PassengerCar(parameters) {
    GasEngine.apply(this, arguments);
    this.name = parameters.name;
    this['quantity of seats'] = parameters.seats;
}
PassengerCar.prototype = Object.create(Car.prototype);

const SportCar = function (parameters) {
    GasEngine.apply(this, arguments);
    this.name = parameters.name;
    this['quantity of seats'] = parameters.seats;
};
SportCar.prototype = Object.create(Car.prototype);

const skoda = new PassengerCar({
    name: 'Skoda',
    color: 'grey',
    volume: 2.8,
    seats: 5,
    gasStandard: 'EURO 5',
});

const lambo = new SportCar({
    name: 'Lambo',
    volume: 4,
    seats: 2,
    doors: 2,
    gasStandard: 'EURO 5',
});

const pickup = new PassengerCar({
    name: 'Chevy Stepside',
    color: 'milk',
    volume: 3.8,
    seats: 3,
    gasStandard: 'EURO 4',
});

const mercedes = new Diesel({
    name: 'Vito',
    volume: 2.9666,
    seats: 8,
    doors: 5,
    gasStandard: 'EURO 6',
});

console.log(skoda.carInfo());
console.log(skoda.price());
console.log(lambo.carInfo());
console.log(lambo.price());
console.log(pickup.carInfo());
console.log(pickup.price());
console.log(mercedes.carInfo());
console.log(mercedes.price());
