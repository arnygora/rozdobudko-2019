const Animal = function (name, residences) {
    this.name = name;
    this.residences = residences;
    this.regnum = 'Фауна';
};
Animal.prototype.coldBlooded = {
    familia: 'Хладнокровные',
};
Animal.prototype.lizards = {
    classis: 'Ящеры',
};

const varanus = new Animal('Варан', 'Australia');
Animal.prototype.fullInfo = function () {
    return `Царство: ${this.regnum} => Род: ${Animal.prototype.coldBlooded.familia} => Класс: ${Animal.prototype.lizards.classis} => Вид: ${this.name} => Места обитания: ${this.residences}`
};
console.log(varanus.fullInfo());

Animal.prototype.snakes = {
    classis: 'Змеи',
};

const cobra = new Animal('Кобра', 'India');
Animal.prototype.fullInfo = function () {
    return `Царство: ${this.regnum} => Род: ${Animal.prototype.coldBlooded.familia} => Класс: ${Animal.prototype.snakes.classis} => Вид: ${this.name} => Места обитания: ${this.residences}`
};
console.log(cobra.fullInfo());

Animal.prototype.mammal = {
    familia: 'Млекопитающие',
};
Animal.prototype.predators = {
    classis: 'Хищные',
};
Animal.prototype.primates = {
    classis: 'Приматы',
};
Animal.prototype.marsupials = {
    classis: 'Сумчатые',
};

const cat = new Animal('Тигр', 'Amazonia');
Animal.prototype.fullInfo = function () {
    return `Царство: ${this.regnum} => Род: ${Animal.prototype.mammal.familia} => Класс: ${Animal.prototype.predators.classis} => Вид: ${this.name} => Места обитания: ${this.residences}`
};
console.log(cat.fullInfo());

const monkey = new Animal('Бонобо', 'Polinesia');
Animal.prototype.fullInfo = function () {
    return `Царство: ${this.regnum} => Род: ${Animal.prototype.mammal.familia} => Класс: ${Animal.prototype.primates.classis} => Вид: ${this.name} => Места обитания: ${this.residences}`
};
console.log(monkey.fullInfo());

const kangoo = new Animal('Валаби', 'Australia');
Animal.prototype.fullInfo = function () {
    return `Царство: ${this.regnum} => Род: ${Animal.prototype.mammal.familia} => Класс: ${Animal.prototype.marsupials.classis} => Вид: ${this.name} => Места обитания: ${this.residences}`
};
console.log(kangoo.fullInfo());