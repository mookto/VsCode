  // function hello(x) {
    //print(x);
   //print('Something Else');
 //}

//function print(a) {
    //console.log(a);
//}


//hello('Twinkle Cats');
function hello(name, print) {
  print(name);
}

//hello('HM Nayem', print)

 //function print(a) {
    //console.log(a);
 //}

hello('HM Nayem', function(name){
    console.log('Hello ' + name);  
});

// hello('HM Nayem', function(name) {
//     console.log('Hi, How are you ' + name + '?');
// })

// hello('Twinkle Cats', function(name) {
//     console.log('Length of ' + name + ' is = ' +  name.length );
// })

var me = {
  name: 'HM Nayem',
  age: 19,
  email: 'hasan.m.nayem@gmail.com'
 }

function printMySelf(person, callback) {
console.log('Person: ' + person.name + ' (' + person.age + ')');
  if (person.age >= 18) {
     callback(person.email);
     } else {
        console.log('You are too little...');
   } }

 printMySelf(me, function(email){
     console.log('Email sent to ' + email);
 });
// new example //
function print(x, callback1, callback2) {
    console.log('Original Data: ' + x);
    callback1(x);
    callback2(x);
}

print('Twinkle Cats is Awesome Channel for Beginners', function(x){
    var nano = x.toUpperCase()
   console.log('Uppercase: ' + nano);
    
}, function(x){
    var hexa = x.toLowerCase();
    console.log('Uppercase: ' + hexa);
    console.log('Length: ' + hexa.length);
    
});


function hello (x, add){
    add (x)
}

hello('sadhin' ,function(x){
    console.log('My name is '+x+'lentgh is '+x.length)
    
})


var p1 = {
    name: 'HM Nayem',
    age: 19,
    email: 'hasan.m.nayem@gmail.com'
   }
  
   function people (x,callPeople ){
       console.log(p1.name+' '+p1.age)
       callPeople(p1.email)
   }
   people(p1,function(y){

    console.log(y)
   })


   var p1 = {
    name: 'HM Nayem',
    age: 19,
    email: 'hasan.m.nayem@gmail.com'
   }
  
   function people (x,callPeople ){
       console.log(p1.name+' '+p1.age)
       callPeople(p1.email)
   }
   people(p1,function(y){

    console.log(y)
   })
  