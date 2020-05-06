//let and const
//ES5
/*
var name5 = 'jame smith';
var age =23;
name5 = 'jain';
console.log(name5);

//ES6

const name6='jain';
let age6 =23;
name6='mouni';
console.log(name6);
*/
//ES5
/*
function drivers5(passedTest){
    if(passedTest){
        var firstname='jame';
        var yearofbirth=1990;

        //console.log(firstname+' born in '+yearofbirth+' is now allowed to drive.');
    }
    console.log(firstname+' born in '+yearofbirth+' is now allowed to drive.');
}
//console.log(firstname+' born in '+yearofbirth+' is now allowed to drive.');

drivers5(true);

//ES6

function drivers6(passedTest){
    let firstname;
    const yearofbirth = 1990;
    if(passedTest){
        firstname='jame';
        //const yearofbirth=1990;
        //console.log(firstname+' born in '+yearofbirth+' is now allowed to drive.');
    }
    console.log(firstname+' born in '+yearofbirth+' is now allowed to drive.');
}
drivers6(true);



//let i=23;
for (i=0; i<5; i++){
    console.log(i);
}
console.log(i);
*/

//Blocks and IIFES
//ES5
/*
(function(){
    var c=3;
    //console.log(c);
})();
console.log(c);

//ES6
{
    const a=1;
    let b=2;
    var c=3;
}
console.log(a+b);
console.log(c);
*/

//strings
/*
let firstname='john';
let lastname='swith';
const yearofbirth='1990';
 
//var n=firstname+lastname;
//console.log(n);

function calcuAge(year){
    return 2020-year;

}


//ES5
console.log('this is '+firstname+' '+lastname+'. He is born in '+yearofbirth+'. today is '+calcuAge(yearofbirth)+' years old.');
//ES6
console.log(`this is ${firstname} ${lastname} .He is born in ${yearofbirth} . today is ${calcuAge(yearofbirth)} years old.`);

const n=`${firstname} ${lastname}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('o'));
console.log(n.includes(' '));
console.log(`${firstname} `.repeat(10));
*/

//Arrow functions
/*
const years =[1990,1965,1982,1937];

//ES5
var ages5=years.map(function(el){
    return 2020-el;
});
//console.log(ages5);

//ES6
let ages6 = years.map(el=>2020-el);
//console.log(ages6);

ages6 =years.map((el, index)=> `age element ${index +1}:${2020-el}.`);
//console.log(ages6);

ages6 =years.map((el,index)=> {
    const now=new Date().getFullYear();
    const age=now-el;
    return `age element ${index + 1}:${age},`
});
console.log(ages6);
*/

//Arrow functions 2

//ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self=this;
        document.querySelector('.green').addEventListener('click',
        function(){
            var str ='this is box number '+ self.position +' and it  '+ self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

//ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click',
        ()=>{
            var str ='this is box number '+ this.position +' and it is '+ this.color;
            alert(str);
        });
    }
}
box6.clickMe();

*/
/*
function person(name){
    this.name=name;
}

//ES5

person.prototype.myFriend5=function(){
    var arr=friends.map(function(el){
        return this.name+ ' is friends with '+el;
    }.bind(this));
    console.log(arr);
}
var friends =['mouni','dss','dfsc','dcs'];
new person('mounika').myFriend5(friends);


//ES6
person.prototype.myFriend6=function(){
    var arr=friends.map(el=>`${this.name} is friends with ${el}`);
    
    console.log(arr);
}
var friends =['mouni','dss','dfsc','dcs'];
new person('mounika').myFriend6(friends);
*/

//Destructuring
//ES5
/*
var john=['john',26];
//var name ='john';
//var age=23;

//ES6
const[name, age] = ['john',23];
console.log(name);
console.log(age);

const obj ={
    firstname: 'mounika',
    lastname:'santoshi'
};
const{firstname,lastname}=obj;
console.log(firstname);
console.log(lastname);

const{firstname:a,lastname:b}=obj;
console.log(a);
console.log(b);


function calcuAgeRetirement(year){
    const age =new Date().getFullYear()-year;
    return [age, 65-age];
}

const [age2,retirement]= calcuAgeRetirement(1996);
console.log(age2);
console.log(retirement);
*/

//arrays

//const boxes= document.querySelectorAll('.box');
//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor ='dodgerblue'
    
});
*/

 //ES6
 
 //const boxesArr6 =Array.from(boxes)
 //boxesArr6.forEach(cur => cur.style.background='dodgerblue');

//ES5
/*
for(var i=0; i < boxesArr5.length ;i++){
    if(boxesArr5[i].className ==='box blue'){
        //break;
        continue;
    }
    boxesArr5[i].textContent='i changed to blue!';
}
*/

//ES6
/*
for(cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent='i changed to blue!';
}

//ES5
var ages =[12,3,5,7,9,21];
 var full =ages.map(function(cur){
     return cur >= 18;
 });
 console.log(full);
 console.log(full.indexOf(true));
 console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >=18));
*/

//spread operator
/*
function addFourAges(a,b,c,d) {
    return a+b+c+d;
}
//var sum1 =addFourAges(2,4,6,8);
//console.log(sum1);

//ES5
//var ages =[2,4,6,8];
//var sum2 =addFourAges.apply(null,ages);
//console.log(sum2);

//ES6
let ages =[3,5,9,6];
const sum3 = addFourAges(...ages);
console.log(sum3);

const familysmith =['john','jame','anna'];
const familymiller=['mouni','sfad','csac'];
const bigFamily = [...familysmith,'lilly',...familymiller];
console.log(bigFamily);

const h=document.querySelector('h1');
const boxes=document.querySelectorAll('.box');
const all =[h,...boxes];
Array.from(all).forEach(cur=>cur.style.color='purple');
*/

//rest parameters
//ES5
/*
function isFullAge5() {
    console.log(arguments);

    var argsArr=Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
        console.log((2020-cur)>=18)
    })
}
//isFullAge5(1990,1899,1996,2012,2013,2014);

//ES6
function isFullAge6(...years) {
    //console.log(arguments);
    years.forEach(cur=>console.log((2020-cur)>=18));
}
isFullAge6(1996,2013,1995,2014,1993,2015);
*/
//ES5
/*
function isFullAge5(limit) {
    //console.log(arguments);

    var argsArr=Array.prototype.slice.call(arguments,1);
    argsArr.forEach(function (cur) {
        console.log((2020-cur)>=limit)
    })
}

//isFullAge5(17,1996,2013,1995,2014,1993,2015);

//ES6

function isFullAge6(limit,...years) {
    //console.log(arguments);
    years.forEach(cur=>console.log((2020-cur)>=limit));
}
isFullAge6(16,1996,2013,1995,2014,1993,2015);
*/

//Default parameters
//ES5
/*
function smithPerson(firstname,yearofbirth,lastname,nationality){

    lastname===undefined?lastname='smith':lastname=lastname;
    nationality===undefined?nationality='indian':nationality=nationality;

    this.firstname=firstname;
    this.lastname=lastname;
    this.yearofbirth=yearofbirth;
    this.nationality=nationality;
}
//var john = new smithPerson('john',1990);
//var emily=new smithPerson('emily',1998,'fdsds');

//ES6

function smithPerson(firstname,yearofbirth,lastname='smith',nationality='indian'){

    this.firstname=firstname;
    this.lastname=lastname;
    this.yearofbirth=yearofbirth;
    this.nationality=nationality;
}
var john = new smithPerson('john',1990);
var emily=new smithPerson('emily',1998,'fdsds');
*/
//Maps
/*
const question =new Map();
question.set('question','what is the official name of the latest major Javascript version');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'correct answer:)');
question.set(false,'wrong answer:(');

console.log(question.get('question'));
console.log(question.size);
//if(question.has(4)){
//question.delete(4);
//console.log('4 is here');
//}

//question.clear();
//question.forEach((value,key)=>
//console.log(`this is ${key},and its set to ${value}`));

for(let [key,value] of question.entries()){
     if(typeof(key)=== 'number'){
         console.log(`answer ${key}:${value}`);
     }
}
const ans =parseInt(prompt('write the correct answer'));
console.log(question.get(ans===
question.get('correct')));
*/

//class
//ES5
/*
var person5=function(name,yearofbirth,job){
    this.name=name;
    this.yearofbirth=yearofbirth;
    this.job=job;
}
person5.prototype.calculateAge=function(){
    var age=new Date().getFullYear-this.yearofbirth;
    console.log(age);
}
var mounika5=new person5('mounika',1996,'teacher');


//ES6
class person6{
    constructor(name,yearofbirth,job){
    this.name=name;
    this.yearofbirth=yearofbirth;
    this.job=job;
    }
    calculateAge(){
        var age=new Date().getFullYear-this.yearofbirth;
    console.log(age);

    }
    static greeting(){
        console.log('hey hii');
    }
}
const mounika6=new person6('mounika',1996,'teacher');
person6.greeting();
*/

//inheritance

//ES5
/*
var person5=function(name,yearofbirth,job){
    this.name=name;
    this.yearofbirth=yearofbirth;
    this.job=job;
}
person5.prototype.calculateAge=function(){
    var age=new Date().getFullYear()-this.yearofbirth;
    console.log(age);
}

var athlete5= function(name,yearofbirth,job,olympicgames,medals){
    person5.call(this,name,yearofbirth,job);
    this.olympicgames=olympicgames;
    this.medals=medals;

}

athlete5.prototype=Object.create(person5.prototype);
var mounika5=new athlete5('mouni',1996,'swimmer',3,10);

athlete5.prototype.wonMedal=function(){
    this.medals++;
    console.log(this.medals);
}

mounika5.calculateAge();
mounika5.wonMedal();
*/
//ES6
/*
class person6{
    constructor(name,yearofbirth,job){
    this.name=name;
    this.yearofbirth=yearofbirth;
    this.job=job;
    }
    calculateAge(){
        var age=new Date().getFullYear()-this.yearofbirth;
    console.log(age);

    }
}

class athlete6 extends person6{
    constructor(name,yearofbirth,job,olympicgames,medals){
        super(name,yearofbirth,job);
        this.olympicgames=olympicgames;
        this.medals=medals;
    }
    wonMedals(){
        this.medals++;
        console.log(this.medals);
    }
}

const mounika6= new athlete6('mouni',1996,'swimmer',3,10);
mounika6.wonMedals();
mounika6.calculateAge();
*/

//challenge

class elements{
    constructor(name,buildyear){
        this.name=name;
        this.buildyear=buildyear;
    }
}

class park extends elements{
    constructor(name,buildyear,area,numtrees){
        super(name,buildyear);
        this.area=area;
        this.numtrees=numtrees;
    }
    treeDensity(){
        const density=this.numtrees/this.area;
        console.log(`${this.name}has a tree density of ${density} trees per square km.`);
    }
}
class street extends elements{
    constructor(name,buildyear,length,size=3){
        super(name,buildyear);
        this.length=length;
        this.size=size;
    }
    classifystreet(){
        const classification =new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        console.log(`${this.name},build in the year ${this.buildyear}, is a ${classification.get(this.size)} street.`);
    }
}
const allparks=[new park(`green park`,1987,0.2,215),
                new park('national park',1894,2.9,3541),
                new park('vuda park',1953,0.4,949)];

const allstreets =[new street('ocean street',1999,1.1,4),
                   new street('evergreen street',2008,2.7,2),
                   new street('mouni street',2015,0.0),
                   new street('sunset street',1982,2.5,5)];
  
function calc(arr){
    const sum=arr.reduce((prev,cur,index)=> prev+cur,0);

    return [sum,sum/arr.length];
}                   

function reportparks(p){
   
    console.log('----parks report-----');

    //Density 
     p.forEach(el => el.treeDensity());
    //Average age
    const ages = p.map(el => new Date().getFullYear()-el.buildyear);
    const [totalage,avgage]=calc(ages);
    console.log(`our ${p.length} parks have an average of ${avgage} years`);

    //which park has more than 1000 years
    const i=p.map(el =>el.numtrees).findIndex(el =>el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}   

function reportstreets(s){
   
    console.log('----streets report-----');

    //total and average length of the town's street
    const [totallength, avelength] = calc(s.map(el => el.length));
    console.log(`our ${s.length} streets have a total length of ${totallength}km, with an average of ${avelength}km.`);
    
    //classify sizes
    s.forEach(el => el.classifystreet());
}
reportparks(allparks);
reportstreets(allstreets);


















































































































































































