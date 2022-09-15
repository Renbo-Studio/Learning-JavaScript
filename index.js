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



console.log("Hello",FirstName)
console.log("You Are",age, "Years Old");
console.log("In School:", student);


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
    age = document.getElementById("age").value;

    if(age == ""){return}
    console.log(username)
    document.getElementById("p1").innerHTML = "HELLO " + username;
    
    if(age <= 18)
        {
            document.getElementById("p2").innerHTML = "You Are Still A KID...( •_•)>⌐■-■";
        }
        else
        {
            document.getElementById("p2").innerHTML = "Greatings Ooh Wise One....( ﾉ ﾟｰﾟ)ﾉ";
        }
    
        if(document.getElementById("mebutton").checked)
        {
            document.getElementById("mybutton").innerHTML = "LOL I Can't Remember (¬‿¬)";
        } 
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
const pi = 3.14159;
let radius;
let circumference;

document.getElementById("radiusbutton").onclick = function()
{
    radius = window.prompt("Enter The Radius Of A Circle");
    radius = Number(radius);

    circumference = 2 * pi * radius;

    document.getElementById("radiusbutton").innerHTML = "The Circumference Is: " + circumference;
    
}

//MATH HYPOTENUSE
let a;
let b;
let c;

document.getElementById("hypobutton").onclick = function()
{
    a = window.prompt("Enter Side A");
    a = Number(a);

    b = window.prompt("Enter Side B");
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("hypobutton").innerHTML = "Side C: " + c;

    console.log("Side C: ", c)
}

//ROLL A DICE
let dice = Math.floor(Math.random() * 6) + 1;

document.getElementById("rollbutton").onclick = function()
{
    document.getElementById("rollbutton").innerHTML = "You Got: " + dice;
}

//MAKING AN AI
let currentMessage = ""
let oldMessage = ""
let currentAI = ""
let oldAI = ""

let player2 = document.getElementById("player2")
let player1 = document.getElementById("player1")
let playerinput = document.getElementById("playerinput")

let bot2 = document.getElementById("bot2")
let bot1 = document.getElementById("bot1")



document.getElementById("playerbutton").onclick = function()
{
    





    oldMessage = player2.innerHTML;
    oldAI = bot2.innerHTML;
    player1.innerHTML = oldMessage;
    bot1.innerHTML = oldAI;
    currentMessage = playerinput.value;
    oldMessage = player1.value;
    oldAI = bot1.value;
    player2.innerHTML = currentMessage;
    bot2.innerHTML = currentAI;
    playerinput.value = "";
}