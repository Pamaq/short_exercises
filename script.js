// //objects exercise//
// const myBookShelf = {
// 	school: {
// 		title: "Math textbook",
// 		author: "Jan Kowalski",
// 		publishing: "Nowa era",
// 	},

// 	relax: {
// 		title: "Norwegian wood",
// 		author: "Haruki Murakami",
// 		publishing: "Vintage",
// 	},
// 	spirituality: {
// 		title: "The Bible",
// 		author: "multiple authors",
// 		publishing: "Św Paweł",
// 	},
// };
// console.log(
// 	`On my bookshelf there are many books, for example: "${myBookShelf.school.title}" by ${myBookShelf.school.author} or "${myBookShelf.relax.title}" by ${myBookShelf.relax.author} and also "${myBookShelf.spirituality.title}" by ${myBookShelf.spirituality.author}`
// );

// const newUser = {
// 	name: "Lisa",

// 	age: 23,
// 	car: {
// 		brand: "Audi",

// 		model: "A3",
// 		"fav-food": "sushi",
// 		color: "czarny",
// 		sound: function () {
// 			console.log("brum brum");
// 		},
// 	},
// };
// console.log(newUser.car.sound());
// newUser.country = "Germany";

// newUser["fav-color"] = "niebieski";
// console.log(newUser);

//odc 124 zadanie

// const user = {
// 	name: "Paula",
// 	showName() {
// 		console.log(user.name);
// 	},
// };
// user.showName();

// odc 126 prototypy
// function User(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// const newUser = new User("Klaudia", 23);
// const newUser2 = new User("Ania", 21);
// const newUser3 = new User("Marek", 27);
// console.log(newUser, newUser2, newUser3);
// User.prototype.hello = function () {
// 	console.log(`Cześć ${this.name}`);
// };
// User.prototype.country = "Polska";
// console.log(newUser2.country);
// newUser3.hello();

// odc 127 zadanie
// const Btn1 = document.querySelector(".btn-1");
// const Btn2 = document.querySelector(".btn-2");
// const Btn3 = document.querySelector(".btn-3");
// const text = document.querySelector("p");

// function Dish(name, price) {
// 	(this.name = name), (this.price = price);
// }
// const newDish = new Dish("Schabowy", 25);
// const newDish2 = new Dish("Pierogi", 22);
// const newDish3 = new Dish("Pomidorowa", 13);

// Dish.prototype.menu = function () {
// 	console.log(`Danie: ${this.name} cena: ${this.price}zł`);
// 	// text.textContent = `Danie: ${this.name}, cena: ${this.price} zł`;
// };

// Btn1.addEventListener("click", () => {
// 	newDish.menu();
// });
// Btn2.addEventListener("click", () => {
// 	newDish2.menu();
// });
// Btn3.addEventListener("click", () => {
// 	newDish3.menu();
// });

//zadanie konstruktor -> klasa
// function Food(name, type) {
// 	(this.name = name), (this.type = type);
// }
// Food.prototype.tellName = function () {
// 	console.log(`To jest ${this.name}`);
// };

// Food.prototype.tellType = function () {
// 	console.log(`Jest to ${this.type}`);
// };
// const food1 = new Food("pietruszka", "warzywo");

// food1.tellName();
// food1.tellType();
// class Food2 {
// 	constructor(name, type) {
// 		(this.name = name), (this.type = type);
// 	}
// 	tellName() {
// 		console.log(`To jest ${this.name}`);
// 	}
// 	tellType() {
// 		console.log(`Jest to ${this.type}`);
// 	}
// }
// const food2 = new Food2("dynia", "warzywo");
// console.log(food2);

//rozszerzanie klas
// class Animal {
// 	constructor(name) {
// 		this.name;
// 	}

// 	sound() {
// 		console.log(`Zwierzak robi "hauhau"`);
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, age) {
// 		super(name);
// 		this.age = age;
// 	}
// }

// class Cat extends Animal {
// 	constructor(name) {
// 		super(name);
// 	}
// 	sound() {
// 		console.log("miau");
// 	}
// }
// const dog = new Dog("Drops", 5);
// dog.sound();
// console.log(dog);
// const cat = new Cat("kot");
// cat.sound();
// console.log(cat);

//destrukturyzacja
// const person = {
// 	name: "Lily",

// 	age: 23,

// 	job: "DJ",
// }; //mamy jakiś obiekt

// const showInfo = () => {
// 	//tworzymy funkcję

// 	const { name, age, job } = person;
// 	console.log(`${name} pracuje jako ${job} i ma ${age} lat`);
// };
// określamy co chcemy wyciągnać i skąd to chcemy wziąć)// jest równoważne z zapisaniem const name=person.name const age=person.age const job = person.job
// showInfo();

//inny sposób
// const person = {
// 	name: "Lily",

// 	age: 23,

// 	job: "DJ",
// 	car: {
// 		brand: "Dodge",
// 		model: "Viper",
// 	},
// };

// const showInfo = ({ name, age, job }) => {
// 	console.log(`${name} pracuje jako ${job} i ma ${age} lat`);
// };
// showInfo(person);
// //lub
// const showInfo2 = ({ car: { brand, model } }) => {
// 	console.log(`Jej samochód to ${brand} ${model}`);
// };
// showInfo2(person);
// const showInfo3 = () => {
// 	const {
// 		car: { brand, model },
// 	} = person;
// 	console.log(`Jej samocbód to ${brand} ${model}.`);
// };
// showInfo3();
// let n = 5
// let s = "i"

// const repeatStr = (n, s) => {
// 	let newStr = "";

// 	for (let i = 0; i <= n; i++) {
// 		newStr.concat(" ", s);
// 		i++;
// 		console.log(newStr);
// 	}

// 	return newStr;
// };

// repeatStr(n,s);\
let signs = ["paper", "rock", "scissors"];
let number = Math.floor(Math.random() * 3);
let number2 = Math.floor(Math.random() * 3);
const player = signs[number];
const computer = signs[number2];
console.log(number);
console.log(number2);
console.log(player);
console.log(computer);

const compWin = () => {
	console.log("Computer wins!");
};
const playerWin = () => {
	console.log("Player wins!");
};

if (player === computer) {
	console.log("It's a tie!");
} else if (player === "rock") {
	if (computer === "scissors") {
		playerWin();
	} else {
		compWin();
	}
} else if (player === "paper") {
	if (computer === "rock") {
		playerWin();
	} else {
		compWin();
	}
} else if (player === "scissors") {
	if (computer === "paper") {
		playerWin();
	} else {
		compWin();
	}
}
