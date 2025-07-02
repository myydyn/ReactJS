
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
// class course{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     getName(){
//         return this.name;
//     }

//     getPrice(){
//         return this.price;
//     }

//     run(){
//         const isSuccess = false;
//     }

// }
// const phpCourse =  new course('php', 120);
// const jsCourse =  new course('java', 1200);
// console.log(phpCourse);
// console.log(jsCourse);



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



// 7. default parameter values
// function logger(log = 'gia tri'){
//     console.log(log);
// }

// logger()

// function logger(log, type = 'log'){
//     console[type](log);
// }
// logger("abc", 'warn');



// 8. Destructuring (phân rã)
// var array = ['java', 'php', 'ruby'];
// var a = array[0];
// var b = array[1];
// var c = array[2];
// var [a, b, c] = array;   //destructuring

// console.log(a, c, c);


// 9. rest parameters (lay phan con lai)- rest dùng với destructuring
    // array
// var array = ['java', 'php', 'ruby'];
// var [a, b, ...rest] = array;

// console.log(a);
// console.log(rest);

    // object
// var cource = {
//     name: 'jave',
//     price: 100,
//     img: 'img-add',
//     description: 'much'
// };
// var {name, price, img} = cource;
// var {name, description = 'default'} = cource;
// console.log(name);
// console.log(description);

// function logger(a, b, ...param){
//     console.log(param);
// }
// logger(1, 2, 3, 8);


// function logger({ten, price, ...rest}){
//     console.log(ten);
//     console.log(price);
//     console.log(rest);
// }
// logger({             //oblect
//     ten: 'jave',
//     price: 100,
//     description: 'course for beginers'
// });


// function logger([a, b, ...rest]) {
//     console.log(a),
//     console.log(b);
//     console.log(rest);
// }
// logger([2, 6, 123, 23]);          //array


// 10. Spread (...) - giải, nối mảng
// var array1 = ['java', 'php', 'ruby'];
// var array2 = ['react', 'py'];
// var array3 = [...array2, ...array1];
// console.log(array3);


// var obj1 = {
//     ten: 'java'
// };

// var obj2 = {
//     price: 100
// };

// var obj3 = {
//     ...obj1, 
//     ...obj2
// };
// console.log(obj3)


// var defaultConfig = {
//     api: 'htpts://domain-trang-khoa-hoc',
//     apiVersion: 'v1',
//     other: 'other',
// };

// var exerciseConfig = {
//     ...defaultConfig,
//     api: 'https://domain-trang-bai-tap'
// };
// console.log(exerciseConfig);


    // truyền tham số cho hàm
// var array = ['java', 'php', 'ruby'];
// function logger(a, b, c) {
//     console.log(a, b, c);
// }
// logger(...array);

// var array = ['java', 'php', 'ruby'];
// function logger(...rest) { //... định nghĩa tham số, kết hợp với destructuring: phân rã
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }
// logger(...array); // gọi hàm truyền đối số thì ... là spread



// 11. tagged template literal




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


