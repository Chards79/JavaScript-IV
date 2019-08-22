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
	demo() {}
	grade() {}
}

class Student extends Person {
	constructor(studentAttrs) {
		super(studentAttrs);
		this.previousBackground = studentAttrs.previousBackground;
		this.className = studentAttrs.className;
		this.favSubjects = studentAttrs.favSubjects;
	}
	listsSubjects() {}
	PRAssignment() {}
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
