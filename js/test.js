/*测试obejct对象的一些基本属性*/
/*var obj = new Object();
 obj.nimei = "nimei";
 obj.niba = "niba";
 console.log(obj.hasOwnProperty("nimei"));
 console.log(obj.toString());
 console.log(obj.toLocaleString());
 console.log(obj.valueOf());
 console.log(obj.constructor.valueOf());
 console.log(typeof obj.constructor);
 console.log(obj.constructor instanceof Object);
 console.log(obj.constructor);
 console.log('______________')
 var obj = {name:"caonima",sex:"female",money:100};
 console.log(obj.constructor);
 console.log(typeof obj.constructor);
 console.log(obj.constructor.toString());
 console.log(obj.constructor.valueOf());
 console.log(obj.constructor.constructor.valueOf());
 console.log(obj.constructor.constructor.toString());
 console.log(obj.constructor.constructor.constructor.constructor.toString());
 console.log(obj.constructor.constructor.constructor.constructor.constructor.constructor.toString());*/


/*一元操作符*/
/*
 var age=29;
 var anotherAge =--age +2;
 console.log(age);
 console.log(anotherAge);
 console.log("~~~~~~~~~");
 var age1=29;
 var anotherAge2 =age1-- +2;
 console.log(age1);
 console.log(anotherAge2);*/

/*arguments测试*/
/*
 function argumentsTest(){
 console.log("args0:"+arguments[0]);
 console.log("args1:"+arguments[1]);
 console.log("args2:"+arguments[2]);
 console.log("args3:"+arguments[3]);
 console.log(arguments.length);
 }

 //argumentsTest(2,1);

 var obj = new Object();
 obj.nimei = "nimei";
 obj.niba = "niba";

 argumentsTest(obj,obj.niba,obj.nimei)*/


/*arguments测试2*/
/*function test(){
 if(arguments.length==1){
 console.log(arguments[0]);
 }else if(arguments.length==2){
 console.log(arguments[0]+arguments[1])
 }else{
 var a =0;
 for(i=0;i<arguments.length;i++){
 a = a+arguments[i];
 }
 console.log(a.valueOf());
 }
 }

 test(2,null );
 console.log(Number(null));
 console.log(parseInt(null));
 console.log(parseFloat(null));*/


/*!*arguments测试3*!*/
/*function test3(num1,num2){
 arguments[1] = 10;
 console.log(typeof num2);
 //console.log(num2.toString());
 console.log(String(num2));
 console.log(arguments[0]+num2);
 }
 //test3(1);
 var a = test3;
 console.log(a);
 console.log(typeof a);
 console.log(a instanceof Object);
 console.log(a.valueOf());
 console.log(typeof test3.constructor);
 console.log(test3.constructor instanceof Object);
 console.log(test3.constructor.arguments);*/


/*参数传递*/
/*
 function test(){
 arguments[0]+=10;
 return arguments[0];
 }
 var count = 10;
 count = test(10);
 console.log(count);
 */


/*参数传递2*/
/*function setName(obj){
 obj.name = "niba";
 obj = new Object();
 obj.name = "nima";
 return obj;
 }

 var person = new Object();
 var person2 = setName(person);
 console.log(person.name);
 console.log(person2.name);*/

/*闭包测试1*/

/*function test(a){
 a = a+10;
 function test2(){
 return a;
 }
 return test2 ;
 }

 var t = test(30);

 console.log(t());*/

/*闭包测试2*/
/*var a =function test(){
 var n = 999;
 nAdd = function(){
 n+=1;
 return n;
 }

 return null;
 }();
 console.log(a);
 console.log(typeof  a );

 console.log(nAdd());
 console.log(nAdd());
 console.log(nAdd());
 console.log(nAdd());
 console.log(nAdd());*/

/*重点：闭包测试3*/
/*var name = "this window";
 var name2 = "uptown funk";
 var object = new Object();
 object.name = "nima";
 object.getNameFunc = function () {
 var that = this;
 return function (replace) {
 that.name =replace+that.name;
 return that.name;
 };
 }
 var f = object.getNameFunc();
 console.log(f(name2));
 console.log(object.name);*/
/*
 window.name = "this window";
 var name2 = "uptown funk";
 var object = new Object();
 object.name = "nima";
 object.getNameFunc = function () {
 var name2 = "bruno Mars"
 return function () {
 return this.name;
 };
 }
 var f = object.getNameFunc();
 var f1 = function(){
 return name2;
 }
 console.log(f());
 console.log(f1());*/

/*var name ="this window";

 function test(){
 var name = "nima";
 var getNameFunc = function(){
 return function(){
 return this.name;
 }
 }
 return getNameFunc();
 }
 var f = test();
 console.log(f());*/


/*var name = "The Window";
 var object = {
 name: "My Object",
 getNameFunc: function () {
 var that = this;
 return function () {
 return that.name;
 };
 }
 };
 var f = object.getNameFunc();
 console.log(f());*/


/*
 var name = "The Window";
 var object = {
 name : "My Object",
 getNameFunc : function(){
 return function(){
 console.log(this);
 return this.name;
 };
 }
 };
 var f =object.getNameFunc();
 console.log(f());*/

/*var name = "The Window";
 var object ={
 name : "My Object",
 f:function(){
 console.log(this);
 return this.name;
 },
 getNameFunc : function(){
 return this.f;
 }
 }
 var f =object.getNameFunc();
 console.log(f());*/
/*

 var obj = {
 num:1,
 addNum:function(add){
 this.num =this.num +add;
 },
 getNum:function(){
 return num;
 }
 }


 obj.addNum(10);
 console.log(obj.num);
 obj.addNum(10);
 console.log(obj.num);
 obj.num = 100;
 console.log(obj.num);
 */

/*with测试*/
/*var location = new Object();
 location.href ="niba:";
 function buildUrl(){
 var qs = "nima";
 var href = "niyeye:";
 with(location){
 var url = href+qs;
 }
 return url;
 }
 console.log(buildUrl());*/

/*块级代码无作用域测试*/
/*
 var i = 0;
 for(i;i<10;i++){};
 console.log(i);*/

/*作用域链测试*/
/*var color = 'red';

 function change(){
 var color ='blue';
 function change2(){
 var color = 'green';
 return color;
 }
 return change2;
 }
 console.log(change()())*/
/*对象字面量表示法测试*/
/*var person = {name:"lisi",5:true};
 //person.name="wangwu";
 var propertyName =5;
 person[propertyName] ='gunduzi';

 console.log(person);*/

/*数组测试*//*
 var a = new Array();
 console.log(typeof a);
 console.log(a instanceof Array);
 console.log(a.toString());*/


/*数组length测试*/
//var arr = [1,2,3];
//var arr = new Array(1,2,3);
//var arr = Array(1,2,3);
//以上三种创建数组对象的方式，其中字面量表示法不调用构造函数
/*

 arr.length = 4;
 console.log(arr[4]);
 console.log(arr);
 */

/*数组length测试2*/
/*var arr = Array(1,2,3);
 arr.length = 2;
 console.log(arr[2]);*/

/*利用数组length特性在数组后添加新项目*/
/*var arr =[1,2,3,4];
 arr[arr.length] = 5;
 console.log(arr);
 console.log(arr[4]);*/


/*数组valveof,tostring,toLocaleString的区别*/
/*var p1 = {
 toString:function(){
 return "zhao";
 },
 toLocaleString:function(){
 return "zhaoqianli";
 }
 }
 var p2 = {
 toString:function(){
 return "ji";
 },
 toLocaleString:function(){
 return "jilili";
 }
 }

 var p = [p1,p2];
 console.log(p);
 console.log(p.valueOf());
 console.log(p.toString());
 console.log(p.toLocaleString());*/

/*join方法测试*/
/*var person = {
 name: "niba", method: function () {
 return "fuck"
 }, toString: function () {
 return "niba";
 }, toLocaleString: function () {
 return "woba";
 }
 }
 var arr = [1, "nima", null, person, undefined];
 console.log(arr.join(','));
 console.log(arr.toString());
 console.log(arr.toLocaleString());*/

/*push和pop和shift和unshift方法测试*/
/*var arr = new Array("niba","nima");
 var count = arr.push("woba","woma");
 console.log(count);
 console.log(arr);

 var element = arr.pop();
 console.log(element);
 console.log(arr);

 var e = arr.shift();
 console.log(element);
 console.log(arr);

 count  =arr.unshift('woca');
 console.log(count);
 console.log(arr);*/

/*数组排序sort方法测试*/
/*var arr = [0,1,5,10,15];
 //结果：[ 0, 1, 10, 15, 5 ],sort方法默认按字符串大小升序排列

 function compare1(val1,val2){
 if(val1<val2){
 return 1;
 }else if(val2>val1){
 return -1;
 }else{
 return 0;
 }
 }
 function compare2(val1,val2){
 if(val1<val2){
 return -1;
 }else if(val2>val1){
 return 1;
 }else{
 return 0;
 }
 }
 //console.log(arr.sort());
 //console.log(arr.sort(compare1));
 console.log(arr.sort(compare2));
 console.log(arr);*/


/*concat方法测试*/
/*
 var colors = ["red","green","yellow"];
 var colors1 = colors.concat("blue");
 var colors2 = colors.concat("blue","black");
 var colors3 = colors.concat(["gray","pink"]);
 var colors4 = colors.concat(["gray","pink"],["blue","black"]);
 var colors5 = colors.concat("gray",["blue","black"]);
 console.log(colors);
 console.log(colors1);
 console.log(colors2);
 console.log(colors3);
 console.log(colors4);
 console.log(colors5);*/

/*slice方法测试*/
/*
 var colors = [ 'red', 'green', 'yellow', 'gray', 'blue', 'black' ];
 var colors1 = colors.slice(1);
 var colors2 = colors.slice(4);
 console.log(colors);
 console.log(colors1);
 console.log(colors2);*/
/*
 var str = "123456778";
 var str1 = str.slice(1);
 console.log(str);
 console.log(str1);*/


/*splice方法测试*/
/*
 var colors = [ 'red', 'green', 'yellow', 'gray'];
 var removed = colors.splice(0,1);
 console.log(colors);
 console.log(removed);
 colors.splice(1,0,'blue','black');
 console.log(colors);
 removed = colors.splice(3,2,'pink');
 console.log(colors);
 console.log(removed);*/

/*every,some,filter,foreach,map迭代方法测试*/
/*var arr = [1,2,3,4,5,6,7,8];
 function compare(item,index,arr){
 console.log(arguments);
 if(item>2){
 return true;
 }else{
 return false;
 }
 }

 function multiply(item){
 console.log(arguments);
 return item*2;
 }
 var every = arr.every(compare);

 var some = arr.some(compare);

 var filter = arr.filter(compare);

 var map = arr.map(multiply);


 console.log(every);
 console.log(some);
 console.log(filter);
 console.log(map);*/


/*Date对象parse方法测试*/
/*var date = new Date(Date.parse("2016-06-25"));
 var date2 = new Date("2016-6-25");
 var date3 = new Date("2016-3-32");
 console.log(date);
 console.log(date2);
 console.log(date3);*/

/*now方法测试*/
/*var time1 = Date.now();
 var time2 =+new Date();
 var time3 =new Date();
 console.log(time1);
 console.log(time2);
 console.log(time3);*/

/*toLocaleString等方法测试*/
/*var time = new Date();
 console.log(time.toLocaleString());
 console.log(time.toString());
 console.log(time.toLocaleDateString());
 console.log(time.toISOString());
 console.log(time.toLocaleTimeString());
 console.log(time.toUTCString());
 console.log(time.toTimeString());
 console.log(time.toJSON());
 console.log(time.valueOf());*/

/*Function的几种定义方式*/
/*var sum = new Function('num1','num2','return num1+num2;')

 var sum = function(num1,num2){
 return num2;
 }

 function sum (num1,num2){
 return num1;
 }

 console.log(sum(1,2));*/
/*函数表达式与函数声明的区别*/
/*
 console.log(sum(1,2));
 /!*
 function sum (num1,num2){
 return num1+num2;
 }*!/
 var sum = function(num1,num2){
 return num2+num1;
 }*/

/*函数做为参数测试*/
/*
 function add(num){
 return 10+num;
 }
 function addName(name){
 return "name:"+name;
 }


 function moudule(func, parameter){
 return func(parameter);
 }

 console.log(moudule(add,20));
 console.log(moudule(addName,"你爸"));*/


/*function作为参数的实例*/
/*
 function createCompareFunction(propertyName){

 return function(obj1,obj2){
 var val1 = obj1[propertyName];
 var val2 = obj2[propertyName];
 if(val1>val2){
 return -1;
 }else if(val1<val2){
 return 1;
 }else{
 return 0;
 }
 }
 }

 var person1 ={fname:"Kobe",lname:"Bryant",age:37};
 var person2 ={fname:"Steven",lname:"Curry",age:27};
 var arr = [person1,person2];
 arr.sort(createCompareFunction("age"));
 console.log(arr);*/


/*arguments.callee方法测试*/

/*function factorial(num){
 if(num<=1){
 return 1;
 }else{
 return num*arguments.callee(num-1);
 }
 }
 console.log(factorial(5));
 anotherFac = factorial;
 factorial = function(){
 return 0;
 }
 console.log(anotherFac(5));
 console.log(factorial(5));*/

/*this测试*/
/*
 global.name = "niam";
 var f = function(){
 return this.name;
 }

 console.log(f());*/

/*caller方法*/
/*
 function outer(){
 inner();
 }

 function inner(){
 console.log(arguments. .caller);
 }

 outer();*/


/*function length属性*/
/*

 function len(num1,num2,num3,num4){
 console.log(arguments.callee.length);
 console.log(arguments.length);
 }

 len(1,2,3);*/

/*prototype测试*/

/*重点：apply()方法测试*/
/*
 function sum(num1,num2){
 return  num1 +num2;
 }
 function callSum1(num1,num2){
 return sum.apply(this,arguments);
 }

 function callSum2(num1,num2){
 return sum.apply(this,[num1,num2]);
 }
 var a = sum.apply(global,[10,10]);
 var b = sum.apply(this,[10,10]);
 var c = sum.apply(null,[10,10]);
 console.log(callSum1(1,2));
 console.log(callSum2(3,5));
 console.log(a );
 console.log(b );
 console.log(c );
 */

/*重点：call方法的测试*/
/*function  showColor(){
 console.log(this.color);
 }
 var o = {color:"red"};
 global.color = "blue";
 showColor.call();
 showColor.call(o);
 showColor.call(global);
 showColor.call(this);*/

/*重点：bind测试*/
/*function  showColor(){
 console.log(this.color);
 }
 var o = {color:"red"};
 global.color = "blue";
 var objFunc  =showColor.bind(o);
 objFunc();*/
/*******************/

/*Number包装类型对象测试*/
/*
 var num = new Number(10);
 var num2 = 10;
 console.log(num.toString(2));
 console.log(num.toString(8));
 console.log(num.toString(10));
 console.log(num.toString(16));
 console.log(num.toFixed(1));
 console.log(num.toExponential(1));
 console.log(num.toPrecision(1));
 console.log(num.toPrecision(2));
 console.log(num.toPrecision(10));
 console.log(typeof num);
 console.log(typeof num2);*/


/*String对象操作*/

/*charAt和charCodeAt*/
/*var str ="我o操你吗";
 /*console.log(str.charAt(1));
 console.log(str.charAt(0));
 console.log(str.charCodeAt(0));
 console.log(str.charCodeAt)*/
/***************/

/*global对象方法测试*/
/*
 var uri = "http://www.wrox.com/illegal value.htm";
 console.log(global.encodeURI(uri))
 console.log(global.encodeURIComponent(uri))
 var u = global.encodeURI(uri);
 console.log(global.decodeURI(u));*/

/*eval()方法*/

/*var msg = "niba ";
 eval("console.log(msg)");*/


/*重点：Math.max的数组最值得到技巧*/
/*var arr = [5,17,6,89,0,11,4];
 var max = Math.max.apply(Math,arr);
 var min = Math.min.apply(Math,arr);
 console.log(max);
 console.log(min);*/

/*重点：面向对象编程*/

/*数据属性*/

/*var person =new Object();
 Object.defineProperty(person,"name",{
 //configurable:false,
 writable:false,
 value:'nibaba'
 })
 delete person.name;
 console.log(person.valueOf());
 console.log(person.name);*/

/*重点：访问器属性*/
/*var book ={
 _year:2004,
 edition:1
 }

 Object.defineProperty(book,"year",{
 get:function(){
 return this._year;
 },
 set:function(year){
 if(year>this._year){
 this.edition+=year-this._year;
 this._year=year;
 }
 }
 })
 console.log(book.year);*/
/*book.year = 2007
 console.log(book._year);
 console.log(book.edition);

 var decriptor = Object.getOwnPropertyDescriptor(book,"edition");
 console.log(decriptor);
 console.log(decriptor.value);
 console.log(decriptor.get);
 console.log(decriptor.configurable);*/

/*var desc = Object.getOwnPropertyDescriptor(global,"constructor");
 console.log(desc);*/
/*****************/


/*重点：构造函数模式创建对象*/

//工厂模式创建对象
/*
 function createPerson(name, age, sexual){
 var p = new Object();
 p.name = name;
 p.age = age;
 p.sexual = sexual;
 p.sayName = function (){
 console.log(this.name);
 }
 return p;
 }
 var person = createPerson("nibaba","29","female");
 person.sayName();

 //构造器函数(当使用new操作符时，相当于创建了一个新对象，并且将构造器函数中的this设置为了该对象)
 function Person(name, age, sexual){
 this.name =name;
 this.age =age;
 this.sexual = sexual;
 this.sayName = function(){
 console.log(this.name);
 }
 }
 var person2 = new Person("nimama","28","male");
 person2.sayName();
 console.log(person2 instanceof Person);
 console.log(person2 instanceof Object);

 Person("nimama","28","male");
 global.sayName();

 var o = {};
 Person.call(o,"CAO","90","gay");

 o.sayName();
 console.log(o.age);*/

/*重点：prototype*/
/*function Person(name,age){
 if(name){
 Person.prototype.name = name;
 Person.prototype.sayName = function(){
 console.log(this.name);
 };
 }
 if(age){
 Person.prototype.age = age;
 }
 }
 var p = new Person( "ssss","29");
 p.sayName();

 var p2 = new Person(null,30);
 p2.sayName = function(){
 console.log('qunima');
 };
 console.log(p2.age);
 console.log(p.age);
 p2.sayName();
 //getPrototypeOf方法测试
 console.log("**************");
 Object.getPrototypeOf(p2).sayName();

 p2.name = null;
 console.log(p2.name);
 console.log(p.name);
 console.log(p2.hasOwnProperty('name'));
 delete p2.name;
 delete p2.sayName;
 p2.sayName();
 console.log(p2.hasOwnProperty('name'));*/

/*判断属性是否是原型对象的方法*/
/*
function hasPrototypeProperty(obj, propertyName) {
    return !obj.hasOwnProperty(propertyName) && (propertyName in obj);
}
function Person() {
    Person.prototype.name = "fuck";
    Person.prototype.sayName = function () {
        console.log(this.name);
    };
    Person.prototype.age = 19;
}
p1 = new Person();
console.log(hasPrototypeProperty(p1,"name"));
p1.name = "you";
console.log(hasPrototypeProperty(p1,"name"));
*/

/*for in与keys及getOwnPropertyNames三种方法测试*/
function Person(){
    Person.prototype.name = "赵千里";
    Person.prototype.age = "30";
    this.toString = function(){
        console.log(Person.prototype.name);
    }
}
p1 = new Person();

for(var prop in p1){
    if(prop=="toString"){
       console.log("has String"); //IE8以下不会打印
    }
}
console.log(Object.keys(p1));
console.log(Object.keys(Object.getPrototypeOf(p1)));
console.log(Object.getOwnPropertyNames(p1));
console.log(Object.getOwnPropertyNames(Person.prototype));//不可枚举的属性也被显示出来（Enumerable:false）

/****************/