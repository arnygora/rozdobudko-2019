const Animal = function (name, residences) {
    this.name = name;
    this.residences = residences;
    this.regnum = 'Фауна';
};
Animal.prototype.fullInfo = function () {
    return `Царство: ${this.regnum} => Род: ${Animal.prototype.familia} => Класс: ${Animal.prototype.classis} => Вид: ${this.name} => Места обитания: ${this.residences}`
};
Animal.prototype.familia ='Хладнокровные';
Animal.prototype.classis = 'Ящеры';

const varanus = new Animal('Варан', 'Australia');
console.log(varanus.fullInfo());

Animal.prototype.classis = 'Змеи';
const cobra = new Animal('Кобра', 'India');
console.log(cobra.fullInfo());

Animal.prototype.familia = 'Млекопитающие';
Animal.prototype.classis = 'Хищные';

const cat = new Animal('Тигр', 'Amazonia');
console.log(cat.fullInfo());

Animal.prototype.classis = 'Приматы';
const monkey = new Animal('Бонобо', 'Polinesia');
console.log(monkey.fullInfo());

Animal.prototype.classis = 'Сумчатые';
const kangoo = new Animal('Валаби', 'Australia');
console.log(kangoo.fullInfo());