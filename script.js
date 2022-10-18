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
const Btn1 = document.querySelector(".btn-1");
const Btn2 = document.querySelector(".btn-2");
const Btn3 = document.querySelector(".btn-3");
const text = document.querySelector("p");

function Dish(name, price) {
	(this.name = name), (this.price = price);
}
const newDish = new Dish("Schabowy", 25);
const newDish2 = new Dish("Pierogi", 22);
const newDish3 = new Dish("Pomidorowa", 13);

Dish.prototype.menu = function () {
	console.log(`Danie: ${this.name} cena: ${this.price}zł`);
	// text.textContent = `Danie: ${this.name}, cena: ${this.price} zł`;
};

Btn1.addEventListener("click", () => {
	newDish.menu();
});
Btn2.addEventListener("click", () => {
	newDish2.menu();
});
Btn3.addEventListener("click", () => {
	newDish3.menu();
});
