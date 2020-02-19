console.log('my name is mahedi hasan ');

function demo(){

    {

        let x =10;

        {

            const x=15;
            console.log(x)
        }

        x=20;
        console.log(x)
    }
}

demo()


let x=10


{
    const x=15
    console.log (x)
}

  x= 100
console.log(x)




const name=' Md mahedi hasan '
const age ='26'
const email='hasanmahedi@gmail.com'
const details =`  ${name}    ${age}  ${email}`
console.log(details)


const print =() =>{
console.log('hi my name is mahedi hasan ')
}

const addnumbers =(a,b)=>a+b;

console.log(addnumbers(10,5))

const sqr = x => x*x 
console.log(sqr(5))

const person={
    name: 'mahedi hasan',
    print:function(){

    }
}

 let square =(a,b=5)=>a*b;
 console.log(square(9))


 function sum (...numx){
 return numx.reduce((a,b) =>a+b)
 //console.log(num)
 }

 let sun= sum(10,20,30)
 console.log(sun)
 
 var arr =[1,2,3]
 console.log(arr)
 console.log(...arr)

 const person2={
     ...person,
     name:'sadhin'
 }
 console.log(person2)

 //import * as math from './math';
 //console.log(math)
  
 //import {add,sub} from './math'
 //console.log(add(5,6))
 