console.log("I LOVE PIZZA");
console.log("It's REALLY GOOD!");

// window.alert("I REEEAALY LOVE PIZZA");

//This is a comment
/*
    This
    is 
    a
    Multiline
    comment

*/

//VERIABLES
let FirstName = "......!"; //strings
let age = 9999; //numbers
let student = false; //booleans

age = age + 1;

console.log("Hello",FirstName)
console.log("You Are",age, "Years Old");
console.log("In School:", student);

document.getElementById("p1").innerHTML = "HELLO " + FirstName;
document.getElementById("p2").innerHTML = "You Are " + age + " Years Old";
document.getElementById("p3").innerHTML = "Project Finished: " + student;

//ARITHMETIC EXPRESSION
let students = 20;

// students = students + 1
// students = students - 1
// students = students * 2
// students = students / 2

// students += 1
// students -= 1
// students *= 2
// students /= 2


let extraStudents = students % 3;

console.log("Students are", students);
console.log(extraStudents, "remaining students")

//USER_INPUT

// let username = window.prompt("what's your name");
let username

document.getElementById("button").onclick = function()
{
    username = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("p1").innerHTML = "HELLO " + username;

    age = document.getElementById("age").value;
    console.log(age)
    document.getElementById("p2").innerHTML = "You Are " + age + " Years Old";
}

//NUMBER_CONVERTIONS
document.getElementById("schbutton").onclick = function()
{
    let finisedProject = window.prompt("How Many Finished Project Do You Have..?");


    console.log(typeof finisedProject)
    finisedProject = Number(finisedProject);
    finisedProject += 1;


    document.getElementById("p3").innerHTML = "Project Finished: " + finisedProject + 
    ".....  We Saw You Had Little Finished Project So We Added +1.. UWLC ヽ(✿ﾟ▽ﾟ)ノ";
}

//CONST
let pi = 3.14159
let radius
let circumference

document.getElementById("radiusbutton").onclick = function()
{
    radius = window.prompt("Enter The Radius Of A Circle")
    radius = Number(radius)
}

circumference = 2 * pi * radius

console.log("The Circumference Is: ", circumference)