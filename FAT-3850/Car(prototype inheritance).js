function Car(params) {
    this.wheels = 4;
    this.crankshaft = true;
    this.transmission = 'automatic';
}
Car.prototype.carInfo = function () {
    return `${this.name}, engine ${this.volume} liters, ${this.transmission}, number of seats: ${this.seats}, color ${this.color}`
};

function GasEngine(parameters) {
    Car.apply(this, arguments);
    this['Gas standard'] = parameters.gasStandard;
}

const Diesel = function (parameters) {
    Car.apply(this, arguments);
    this.color = parameters.color;
    this.name = parameters.name;
    this['quality standard'] = parameters.gasStandard;
    this.seats = parameters.seats;
    this.volume = parameters.volume;
};
Diesel.prototype = Object.create(Car.prototype);

function PassengerCar(parameters) {
    GasEngine.apply(this, arguments);
    this.name = parameters.name;
    this.volume = parameters.volume;
    this.color = parameters.color;
    this.seats = parameters.seats;
}
PassengerCar.prototype = Object.create(Car.prototype);

function SportCar(parameters) {
    GasEngine.apply(this, arguments);
    this.name = parameters.name;
    this.volume = parameters.volume;
    this.color = parameters.color;
    this.seats = parameters.seats;
}
SportCar.prototype = Object.create(Car.prototype);

const skoda = new PassengerCar({
    name: 'Skoda',
    color: 'indianred',
    volume: 2.8,
    seats: 5,
    gasStandard: 'EURO 5',
});

const lambo = new SportCar({
    name: 'Lambo',
    color: 'red',
    volume: 4,
    seats: 2,
    gasStandard: 'EURO 6',
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
    volume: 2.96,
    seats: 8,
    color: 'black',
    gasStandard: 'EURO 6',
});
console.log(skoda.carInfo());
console.log(lambo.carInfo());
console.log(pickup.carInfo());
console.log(mercedes.carInfo());