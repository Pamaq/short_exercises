//objects exercise//
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
// 		publishing: "sw Paweł",
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
// 	age: 22,
// 	pet: "Ruby",
// 	showName() {
// 		console.log(user.name);
// 	},
// 	showPet() {
// 		console.log(user.pet);
// 	},
// };
// user.showName();
// user.showPet();
// console.log(user);
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

// papier, kamien, nozyce z komputerem
// let signs = ["paper", "rock", "scissors"];
// let number = Math.floor(Math.random() * 3);
// let number2 = Math.floor(Math.random() * 3);
// const player = signs[number];
// const computer = signs[number2];
// console.log(number);
// console.log(number2);
// console.log(player);
// console.log(computer);

// const compWin = () => {
// 	console.log("Computer wins!");
// };
// const playerWin = () => {
// 	console.log("Player wins!");
// };
// let confirmation = confirm("Do you want to watch a game?");
// if (confirmation) {
// 	alert("Go to the console");
// 	if (player === computer) {
// 		console.log("It's a tie!");
// 	} else if (player === "rock") {
// 		if (computer === "scissors") {
// 			playerWin();
// 		} else {
// 			compWin();
// 		}
// 	} else if (player === "paper") {
// 		if (computer === "rock") {
// 			playerWin();
// 		} else {
// 			compWin();
// 		}
// 	} else if (player === "scissors") {
// 		if (computer === "paper") {
// 			playerWin();
// 		} else {
// 			compWin();
// 		}
// 	}
// } else {
// 	alert("That's a shame :(");
// }
//papier kamien interaktywne
// let signs = ["papier", "kamien", "nozyce"];
// let numer = Math.floor(Math.random() * 3);
// let gra = confirm("Czy chcesz zagrac w papier kamien nozyce?");
// if (gra) {
// 	let wyborKomputera = signs[numer];
// 	let wyborGracza = prompt("Wpisz papier, kamien lub nozyce");
// 	if (
// 		wyborGracza == "papier" ||
// 		wyborGracza == "nozyce" ||
// 		wyborGracza == "kamien"
// 	) {
// 		alert(
// 			"Wybor gracza: " + wyborGracza + ", Wybor komputera: " + wyborKomputera
// 		);
// 		if (wyborGracza == "papier" && wyborKomputera == "nozyce") {
// 			alert("Wygrywa komputer!");
// 		} else if (wyborGracza == "papier" && wyborKomputera == "kamien") {
// 			alert("Wygrywa gracz!");
// 		} else if (wyborGracza == "kamien" && wyborKomputera == "nozyce") {
// 			alert("Wygrywa gracz!");
// 		} else if (wyborGracza == wyborKomputera) {
// 			alert("Remis!");
// 		} else {
// 			alert("Wygrywa gracz!");
// 		}
// 	} else {
// 		alert("Wprowadzono nieprawidlowe dane!");
// 	}
// } else {
// 	alert("Ok innym razem");
// }
// let powtorka = confirm("Chcesz zagrac jeszcze raz?");
// if (powtorka) {
// 	location.reload();
// } else {
// 	alert("Ok, dzieki za gre!");
// }
// const getUsername = (email) => {
// 	let userName = email.toString().slice(0, email.indexOf("@"));
// 	console.log(userName);
// 	alert("Nazwa uzytkownika to: " + userName);
// };
// let email = prompt("Podaj adres email: ");
// if (email.includes("@")) {
// 	getUsername(email);
// } else {
// 	alert("Wprowadzono zly adres!");
// 	location.reload();
// }

//dom manipulation cwiczenie
// const view1 = document.querySelector("#view1");
// console.log(view1);
// const createDivs = (parent, iter) => {
// 	const newDiv = document.createElement("div");
// 	newDiv.textContent = iter;
// 	newDiv.style.backgroundColor = "white";
// 	newDiv.style.width = "100px";
// 	newDiv.style.height = "100px";
// 	newDiv.style.margin = "10px";
// 	newDiv.style.justifyContent = "center";
// 	newDiv.style.display = "flex";
// 	newDiv.style.alignItems = "center";
// 	parent.append(newDiv);
// };

// for (let i = 1; i <= 6; i++) {
// 	createDivs(view1, i);
// }

//zrozumiec fetch i await async
// const getAllUserEmails = async () => {
// 	const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	const jsonUserData = await response.json();

// 	const userEmailArray = jsonUserData.map((user) => {
// 		return user.email;
// 	});
// 	postToWebPage(userEmailArray);
// };
// const postToWebPage = (data) => {
// 	console.log(data);
// };
// getAllUserEmails();

// /ćwiczenie regex
document.getElementById("phoneNum").addEventListener("input", (event) => {
	const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
	const input = document.getElementById("phoneNum");
	const format = document.querySelector(".phoneFormat");
	const phone = input.value;
	const found = regex.test(phone);
	if (!found && phone.length) {
		input.classList.add("invalid");
		format.classList.add("block");
	} else {
		input.classList.remove("invalid");
		format.classList.remove("block");
	}
});
document.getElementById("phoneForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const input = document.getElementById("phoneNum");
	const regex = /[()-. ]/g; //regex usuwajacy znaki ktorych nie potrzebujemy, zostają same cyfry
	const savedPhoneNum = input.value.replaceAll(regex, "");
	console.log(savedPhoneNum);
});

document.getElementById("textForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const input = document.getElementById("textEntry");
	const regex = / {2,}/g;
	const newText = input.value.replaceAll(regex, " ").trim();
	console.log(newText);
	const encodedInputText = encodeURI(input.value);
	const encodedCleanText = encodeURI(newText);
});
