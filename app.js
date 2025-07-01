
// 12. modules (split): import/export

// import logger from './logger.js'
// console.log(logger)
// logger('test message...', 'warn');

// import logger from "./logger.js";
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js';

// logger('Test message...', TYPE_WARN);


// import logger from "./logger.js";
// import * as constants from './constants.js';

// console.log(constants);


// 6.  Enhanced object literals 
// (định nghĩa key:value cho object)
// (định nghĩa method cho object)
// (định nghĩa key cho object dưới dạng biến)

// var Courcename = 'data base';
// var price = 100;

// var course = {
//     Courcename,
//     price,
//     getName() {
//         return Courcename;
//     }
// };
// console.log(course.getName());

// var fieldName = 'name';
// var fieldPrice = 'price';

// const cource = {
//     [fieldName]: 'java',
//     [fieldPrice]: 100
// };
// console.log(cource);


// 1. Let, const
// phân biệt Var vs Let, Const: scope: phạm vi truy cập, hóting
// const VS var, let: Assignment

// Code block: if else, loop, {}, ...
// {
//     var course = 'java';
// }
// console.log(course);

// code thuần: Var
// Babel: Const, Let
// KHi định nghĩa biến và không gán lại biến đó: Const
// Khi cần gán lại giá trị cho biến: Let

// let isSuccess = false;
// if(){
//     isSuccess = true;
// }

// const a = {
//     name: 'java'  //name là thuộc tính(object) nên có thể gán lại
// };
// a.name = 'PHP';
// console.log(a.name);  //PHP

// 2.template literals

// const courseName = 'java';
// const courseName2 = 'PHP';
// const description = 'cource name: ' + courseName;
// const description = `cource name: ${courseName} ${courseName2}`;
// const description = `template string noi suy voi \${}`;

// console.log(description);

// 3. multi line string
// const lines = 'line 1\n' 
//     + 'line 2\n'
//     + 'line 3\n'
//     + 'line 4\n'  //tabnine: extention

// const lines = `line 1
// line 2
// line 33`

// console.log(lines);


// function logger(log) {
//     console.log(log);
// }
// logger('Mmessage...');


// expression function
// const logger = function(log) {
//     console.log(log);
// }


// 4. arrow function - hàm mũi tên
// const logger = (log) => {
//     console.log(log);
// }
// logger('Mmessage...');

// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

// const sum = (a, b) => ({a: a, b: b});
// console.log(sum(2, 3));

// const logger = log => console.log(log);
// logger('i failed so much')

// const course = {
//     name: 'data bases',
//     getName: function(){
//         return this; //context
//     }
// };
// console.log(course.getName());


// const course =  function(name, price) { // arrow function k co constructor
//     this.name = name;
//     this.price = price;
// }

// const jscourse =  new course('data', 200);
// console.log(jscourse);


// 5. classes
// function course(Name, price){  //khuon mau: course
//     this.Name = Name;
//     this.price = price;

//     this.getName = function(){
//         return this.Name;
//     }

//     const isSuccess = false;
// }
// const phpCourse =  new course('php', 120);
// const jsCourse =  new course('java', 120);
// console.log(phpCourse);
// console.log(jsCourse);

    // class
class course{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    run(){
        const isSuccess = false;
    }

}
const phpCourse =  new course('php', 120);
const jsCourse =  new course('java', 1200);
console.log(phpCourse);
console.log(jsCourse);

