
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



import logger from "./logger.js";
import * as constsnts from './constants.js';

console.log(constsnts);

