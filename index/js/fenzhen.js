'use strict';
function Student(pro) {
	this.name=pro.name||"匿名";
}
Student.prototype.hello = function() {
	console.log(`Hello ${this.name} !`);
};

function PrimaryStudent(pros) {
	// 调用Student构造函数，绑定this变量:
	Student.call(this,pros);
	this.grade=pros.grade||1;
}

// 空函数F:
function F() {
}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

//创建xiaoming
var xiaoming =new PrimaryStudent({name:"小明",grade:6});
xiaoming.hello();
console.log(xiaoming.name);
console.log(xiaoming.grade);