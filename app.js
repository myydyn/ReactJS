
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


const a = {
    name: 'java'  //name là thuộc tính(object) nên có thể gán lại
};
a.name = 'PHP';
console.log(a.name);  //PHP


