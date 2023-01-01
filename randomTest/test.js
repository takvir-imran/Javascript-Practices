'use strict';

function calcAge(birthyear){
    const age = 2022 -birthyear;

    function printAge(){
        const output = `${firstName} you are ${age}, born in ${birthyear}`;
        console.log(output);

        if(birthyear >=1981 && birthyear <=1996){
            var millenial = true;
            const firstName ="Imran";
            const str = `oh, and you are a millenial, ${firstName}`;
            console.log(str);
            
            var add = function (a,b){
                return a+b;
            }
        }
        console.log(millenial);
        console.log(add(3,5));
    }
    printAge();
    return age;
}
calcAge(1992);
var firstName = "Takvir";

console.log(this.AbortController);

const takvi = {
    year: 1992,
    age: function(){
        console.log(this);
        return (2022-this.year);
    },
};
takvir.age();

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function sayName() {
  console.log(`My name is ${this.name}`);
}


const takvir = {
    firstName: 'Imran',
    year: 1992,
    age: function(){

        console.log(2022-this.year);

        const isMillenial = function(){
            console.log(this.year>=1981 && this.year <=1996);
        };
        isMillenial();
    },
    greet: function () {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
};


takvir.age();

const fatema ={
    firstName: `Fatama`,
    lastName: `Dulali`,
    age: 26,
};

const marriedFatema = Object.assign({}, fatema);
marriedFatema.lastName=`Imran`;

console.log("Before Marriage: ", fatema);
console.log("After Marriage: ", marriedFatema);