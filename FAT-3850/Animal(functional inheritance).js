const Animal = function () {
    this.regnum = 'Фауна';
    this.fullInfo = function () {
        return `Царство: ${this.regnum} => Род: ${this.familia} => Класс: ${this.classis} => Вид: ${this.name} => Места обитания: ${this.residences}`
    }
};

const ColdBlooded = function () {
    Animal.apply(this);
    this.familia = 'Хладнокровные';
};

const Lizards = function (name, residences) {
    ColdBlooded.apply(this);
    this.name = name;
    this.residences = residences;
    this.classis = 'Ящеры';
};

const varanus = new Lizards('Варан', 'Australia');
console.log(varanus.fullInfo());

const Snakes = function (name, residences) {
    ColdBlooded.apply(this);
    this.name = name;
    this.residences = residences;
    this.classis = 'Змеи';
};

const cobra = new Snakes('Кобра', 'India');
console.log(cobra.fullInfo());

function Mammal() {
    Animal.apply(this);
    this.familia = 'Млекопитающие';
}

function Predators(name, residences) {
    Mammal.apply(this);
    this.name = name;
    this.residences = residences;
    this.classis = 'Хищные';
}

function Primates(name, residences) {
    Mammal.apply(this);
    this.name = name;
    this.residences = residences;
    this.classis = 'Приматы';
}

function Marsupials(name, residences) {
    Mammal.apply(this);
    this.name = name;
    this.residences = residences;
    this.classis = 'Сумчатые';
}

const cat = new Predators('Тигр', 'Amazonia');
console.log(cat.fullInfo());

const monkey = new Primates('Бонобо', 'Polinesia');
console.log(monkey.fullInfo());

const kangoo = new Marsupials('Валаби', 'Australia');
console.log(kangoo.fullInfo());

