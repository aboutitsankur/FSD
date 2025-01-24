// function myFunction()
//         {
//             var carname="Welcome";
//             document.getElementById("demo").innerHTML=carname;
//         }

// var person ={
//     firstname:"John",
//     lastname:"Doe",
//     id:5566,
//     //access multiple properties of objects.
//     getinfo: function(){
//         return this.firstname + "" + this.lastname;
//     }
// };
// //Display data from the object:
// document.getElementById("demo").innerHTML=person.getinfo();

// var a=10;

// function functionA(){
//     console.log("Start Function A");

//     function functionB(){
//         console.log("In function B");
        
//     }
//     functionB();
// }

// functionA();

// console.log("Global Context");

// var name1='John';

// function first(){
//     var a='Hello';
//     second();
//     var x= a + name1;
//     console.log(x);
// }

// function second(){
//     var b='Hii';
//     third();
//     var z=b + name1;
//     console.log(z);
// }

// function third(){
//     var c='Hey';
//     var z=c + name1;
//     console.log(z);
// }

// first();

// var a=5;
// function add(){
//     var b=45;
//     console.log(a+b);

//     function mul(){
//         var c=25;
//         console.log(a*c);
//     }
//     mul();
// }
// add();
// var a='Hii'
// console.log(a);


// var age=20;

// if(age>18){
//     document.write("<b> You are eligible to cast the vote.</b>")
// 

// var count;
// document.write("Starting Loop" + "<br/>");
// for(count=0; count<10; count++){
//     document.write("Current Count :" +count);
//     document.wri
// }

// for(var i=0;i<10;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i +"is a even number.");
//     }
//     else{
//         console.log(i +"is a odd number.");
//     }
// }

// function my(){
//     alert("Hello World");
// }

// function say(){
//     alert("Hello");
// }

// function information(firstName, lastName, language){
//     if(arguments.length===3){
//         console.log(firstName);
//         console.log(lastName);
//         console.log(language);
//     }
// }
// information();
// information('Jitendra','abhi','vivek');

// function sayHello(){
//     alert("Hello Ankur");
// }

// function over(){
//     document.getElementById('mytext').style.color="green";
// }
// function mout(){
//     document.getElementById('mytext').style.color="magenta";
// }

// var retVal=confirm("Do you want to continue ?");if(retVal==true){
//     alert("user wants to continue!");
// }else{
//     alert("user does not want to continue!");
// }

// var retval=prompt("Enter your name: ","your name here");
// alert("You have entered:"+retval);

// var mname=prompt("Enter your name","name");
// document.write("<h2>Hello"+mname+"</h2>");

// var questions="what is 10+10";
// var answer=20;
// var correct='<img src="checked.png" height=50px width=50px>';
// var incorrect='<img src="close.png" height=50px width=50px>';
// var response=prompt(questions,"0");
// for(count=0;count<3;count++)
// {
//     if(response!=answer)
//     {
//         confirm("wrong.press ok for another chance");
//         response=prompt(questions,"0");
//         if(count==2)
//         {
//             alert("Better luck next time");
//         }
//     }
//     else
//     {
//         alert("Great! you are right");
//         count=3;
//     }
// }
// var output=(response==answer)?correct:incorrect;
// document.write("</BR>");
// document.write(output);

// function redirect(){
//     window.location="https://www.facebook.com";
// }
// document.write("You will be redirected to main page in 10sec.");
// setTimeout('redirect()',10000);

// function validateform(){
//     var x=document.forms["myForm"]["fname"].value;
//     if(x==null||x=="")
//     {
//         alert("First name must be filled out");
//         return false;
//     }
// }

// function validateform(){
//     var name=document.getElementById("fname");

// }

// function validateform(){
//     var y=document.forms["myForm"]["call"].value;
//     if(y.length!=10)
//     {
//         alert('enter 10 digit valid number');
//         return false;
//     }

//     if(y.match(/^[0-9]{10}$/))
//     {
//         alert('only digits please');
//         return false;
//     }
// }

// function validateform()
// {
//     var x=document.forms["myform"]["email"].value;
//     var atpos=x.indexOf("@");
//     var dotpos=x.lastIndexOf("");
//     if(atpos<1||dotpos<atpos+2||dotpos+2>=x.length)
//     {
//         alert("Not a valid email address");
//         return false;
//     }
// }

// const d=new Date("2015-03-25");
// document.write(d);

// const e=new Date("2015")
// document.write(e);

// const f=new Date("2015-03-25T12:00:00Z");
// document.write(f);

// const d=new Date("2021-02-25");
// document.write(d.getMonth());

// const e=new Date();
// d.getMonth();
// document.write(e);

// const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// const d=new Date("2021-03-25");
// let month=months[d.getMonth()];
// document.write(month);
// document.write(d.getDate());


// const e=new Date("2021-03-25");
// e.getHours();
// document.write(e.getHours());
// const d=new Date();
// d.getHours();
// document.write(d.getHours());


// const d=new Date();
// d.setMonth(11);
// d.setDate(18);
// document.write(d.getMonth());
// document.write(d.getDate());


// const d=new Date();
// d.getMonth();
// document.write(d.getDate());
// document.write(d.getMonth());
// d.setDate(d.getDate()+50);
// document.write(d.getDate());
// document.write(d.getMonth());


// let text="";
// const today=new Date();
// const someday=new Date();
// someday.setFullYear(2100,0,14);


// if(someday>today){
//     text="Today is before January 14,2100.";}
// else{
//     text="Today is after January 14,2100.";}
//     console.log(text);


// console.log(Math.ceil(4.9));
// console.log(Math.sign(-4));

// console.log(Math.min(0,150,30,20,-8,-200));

// console.log(Math.floor(Math.random()*100 +1));

// function getRndInteger(min,max)
// {
//    return Math.floor(Math.random()*(max-min)+min);
// }
// console.log(getRndInteger(20,50));


// console.log(Number("3.14"));
// console.log(Number(Math.PI));
// console.log(Number(" "));
// console.log(Number(""));
// console.log(Number("Ankur"));
// console.log(Number("99.88"));


// let y="5";
// let x=+y;
// console.log(x);


// console.log(String(123));
// console.log(String("x"));

// d=new Date();
// console.log(Number(d));

// d=new Date();
// console.log(Number(d));

// console.log(String(Date()));

// console.log(Boolean(0));
// console.log(Boolean(2));

// console.log(5+null);
// console.log("5"+null);
// console.log("5"*"2");

// let myVar;
// document.getElementById("demo").innerHTML=myVar;
// {
// if (myVar={name:"john"});
// }


// let text="Visit ABESEC!";
// let n=text.search("ABESEC");
// console.log(n);



// for(let i=0;i<CaretPosition.length;i++)
// {
//     text+=cars[i]+"<br>";
// }


// const person={fname:"John",lname:"Doe",age:25};
// let text=""