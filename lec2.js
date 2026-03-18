<<<<<<< HEAD
/*let count=0;
console.log("starting loop"+"<br/>");
for(count=0;count<10;count++){
    console.log("current count;"+count);
    console.log("</br>");
}
console.log("loop started");*/

/*const person={
    fnae:"ajay",
    lname:"kumar",
    age:25,
};
for(x in person){
    console.log("person details:"+x+":"+person[x]);
}*/

/*var age = 20;
if (age > 18) {
  console.log("<b>you are eligible to vote</b>");
} else {
  console.log("you are a minor");
}*/

/*var grade='A';
document.write("entering switch block"+"<br/>");
switch(grade){
    case 'A':document.write("good job</br>");
    break;
    case 'B':document.write("pretty good</br>");
    break;
    case 'C':document.write("passed</br>");
    break;
    case 'D':document.write("not so good</br>");
    break;
    case 'F':document.write("failed</br>");
    default:document.write("invalid grade</br>");
}*/

/*function myfunction(){
    alert("hello world");
}*/

/*function sayHello(name,age){
    document.write(name+"is"+age+"years old");
}*/

//arrow function
//arrow function is a anonyms function which does not have its own this keyword and it is not used as a constructor

/*var add2=(a,b)=>{
    console.log(a+b);
}
add2(5,10);*/

/*var person = {
    name: "ajay",
    age: 30,
    isMarried: true,
    address: {
        street: "vinay nagar",
        FlatNO: 201
    }
};

console.log(person);*/
//diff between object and array
//array is ordered collection of data
//object is a key value pair
//array stats with index 0
//object starts property name

var person2 =newObject();
person2.name="krishkant";
person2.age=32;
person2.address={};
person2.address.street="nagar.road";
person2["adress"]['FlatNO']=32;




=======
//artirhmetic oprators
//let a = 10;
//let b = 20;
//console.log(a + b);

//let c=44;
//let d=5;
//console.log("c+d=",c+d);
//console.log("c-d=",c-d);
//console.log("c*d=",c*d);
//console.log("c/d=",c/d);
//console.log("c%d=",c%d);
//console.log("c**d=",c**d);

//let a=5;
//let b=2;
//console.log("a=",a,"& b=",b);
//a=a+1;
//console.log("a=",a);
//a--;
//console.log("a=",a);

//let a=10;
//let b=2;

//console.log("a=",a,"& b=",b);
//console.log(++a);
//--b;
//console.log(b);

//assignment oprators
//let a=10;
//let b=4;
//console.log("a=",a,"& b=",b);
//a+=4;
//console.log("a=",a);
//a*=5;
//console.log("a=",a);
//a%=b;
//console.log("a=",a);
//a-=5;
//console.log("a=",a);

//let color;
//let mode="dark";
//if(mode=="dark"){
    //color="black";
//}
/*else{
    color="white";
}
console.log(color);*/

/*let num=10;
if(num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}*/

/*let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
else if(mode==="blue"){
    color="blue";
}
else if(mode==="pink"){
    color="pink";
}
else{
    color="white";
}
console.log(color);

if(mode==="dark"){
    console.log(mode);
}*/

/*let age=35;
let result=age>=18?"adult":"child";
console.log(result);*/


/*let name=prompt("hello");
console.log(name);*/

/*let num=prompt("enter a number");
if(num%5==0){
    console.log(num,"is divisible by 5");
}
else{
    console.log(num,"is not divisible by 5");
}*/
let score=prompt("enter your score(0,100):");
let grade;
if(score>=90 && score<=100){
    grade="A";
}
else if(score>=70 && score<=89){
    grade="B";
}
else if(score>=60 && score<=69){
    grade="C";
}
else if(score>=50 && score<=59){
    grade="D";
}
else if(score>=0 && score<=49){
    grade="F";
}
console.log("according to youe score your grade is",grade);



>>>>>>> 84c5ed9575f781277b52f8d5fed7883e463127f5
