// CODE here for your Lambda Classes

class Person {
	constructor(attrs) {
		this.name = attrs.name;
		this.age = attrs.age;
		this.location = attrs.location;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}.`;
	}
}

class Instructor extends Person {
	constructor(instructorAttrs) {
		super(instructorAttrs);
		this.specialty = instructorAttrs.specialty;
		this.favLanguage = instructorAttrs.favLanguage;
		this.catchPhrase = instructorAttrs.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}.`;
	}
	grade(student, subject) {
		return `${student.name} receives a perfect score on ${subject}.`;
	}
}

class Student extends Person {
	constructor(studentAttrs) {
		super(studentAttrs);
		this.previousBackground = studentAttrs.previousBackground;
		this.className = studentAttrs.className;
		this.favSubjects = studentAttrs.favSubjects;
	}
	listsSubjects() {
		console.log(this.favSubjects);
	}
	PRAssignment(subject) {
		return `${student.name} has begun sprint challenge on ${subject}.`;
	}
	sprintChallenge() {}
}

class ProjectManager extends Instructor {
	constructor(projectManagerAttrs) {
		super(projectManagerAttrs);
		this.gradClassName = projectManagerAttrs.gradClassName;
		this.favInstructor = projectManagerAttrs.favInstructor;
	}
	standup() {}
	debugsCode() {}
}

//Objects

// Instructors

const bender = new Instructor({
	name: "Bender",
	location: "Mexico",
	age: 200,
	specialty: "bending",
	favLanguage: "Basic",
	catchPhrase: "Bite my shiny metal ---"
});

const leela = new Instructor({
	name: "Leela",
	location: "New New York",
	age: 30,
	specialty: "aviation",
	favLanguage: "English",
	catchPhrase: "Hi-Yah!"
});

// Students

const fry = new Student({
	name: "Fry",
	location: "New New York",
	age: 30,
	specialty: "watching tv",
	favLanguage: "English",
	catchPhrase: `I'm walking on sunshine`,
	previousBackground: "pizza delivery",
	className: "WEB23",
	favSubjects: ["html", "CSS", "JavaScript"]
});

const zoidberg = new Student({
	name: "Zoidberg",
	location: "New New York",
	age: 50,
	specialty: "dumpster diving",
	favLanguage: "Decapodian",
	catchPhrase: "woo woo woo woo woo",
	previousBackground: "medecine",
	className: "WEB23",
	favSubjects: ["html", "CSS", "JavaScript"]
});

// Project Managers

const amy = new ProjectManager({
	name: "Amy",
	location: "Mars",
	age: 25,
	specialty: "being rich",
	favLanguage: "Martian",
	catchPhrase: "unintelligible Chinese",
	previousBackground: "student",
	className: "WEB23",
	favSubjects: ["html", "CSS", "JavaScript"],
	gradClassName: "WEB20",
	favInstructor: "Bender"
});

const hermes = new ProjectManager({
	name: "Hermes",
	location: "Jamaica",
	age: 40,
	specialty: "limbo",
	favLanguage: "English",
	catchPhrase: "Sweet something of somewhere!",
	previousBackground: "student",
	className: "WEB23",
	favSubjects: ["html", "CSS", "JavaScript"],
	gradClassName: "WEB21",
	favInstructor: "Leela"
});

// Tests

console.log(bender.demo("javascript"));
console.log(zoidberg.favSubjects);
