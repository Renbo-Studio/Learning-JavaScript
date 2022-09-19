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

// //VERIABLES
// let FirstName = "......!"; //strings
//  //numbers
// let student = false; //booleans



// console.log("Hello",FirstName)
// console.log("You Are",age, "Years Old");
// console.log("In School:", student);


//ARITHMETIC EXPRESSION
// let students = 20;

// students = students + 1
// students = students - 1
// students = students * 2
// students = students / 2

// students += 1
// students -= 1
// students *= 2
// students /= 2


// let extraStudents = students % 3;

// console.log("Students are", students);
// console.log(extraStudents, "remaining students")

//USER_INPUT

// let username = window.prompt("what's your name");
let username
let img
let age


username = localStorage.getItem("username")
age = localStorage.getItem("age")
img = localStorage.getItem("profilePic")


if(username !== null)
{
    document.getElementById("myModal").style.display = "none"

    startUp()
}

var imgInput = document.getElementById("img-input");
var profilePic = document.getElementById("profilePic");

var imgInput2 = document.getElementById("img-input2");
var profilePic2 = document.getElementById("profilePic2");

imgInput.addEventListener("change", function(e)
{
    var file = imgInput.files[0];
    var imageType = "";

    if(file.type.match(imageType))
    {
        var reader = new FileReader();

        reader.onload = function(e) 
        {
            profilePic.innerHTML = "";

            img = new Image();
            img.src = reader.result;

            img.style.width = "150px";

            profilePic.appendChild(img);
    
            localStorage.setItem("profilePic", img)
        }

        reader.readAsDataURL(file);
    } else
    {
        profilePic.innerHTML = "File Not Supported!"
    }
});

imgInput2.addEventListener("change", function(e)
{
    var file = imgInput2.files[0];
    var imageType = "";

    if(file.type.match(imageType))
    {
        var reader = new FileReader();

        reader.onload = function(e) 
        {
            profilePic2.innerHTML = "";

            img = new Image();
            img.src = reader.result;

            img.style.width = "150px";

            profilePic2.appendChild(img);
    
            localStorage.setItem("profilePic", img)
        }

        reader.readAsDataURL(file);
    } else
    {
        profilePic.innerHTML = "File Not Supported!"
    }
});

document.getElementById("button").onclick = function()
{
    username = document.getElementById("myText").value;
    age = document.getElementById("age").value;

    startUp()
    
    localStorage.setItem("age", age)
    localStorage.setItem("username", username)
                
}

function startUp()
{
    setTimeout(() => {document.getElementById("profilePic2").append(img)}, 3000);
    setTimeout(() => {document.getElementById("myText").style.display = "none"}, 3000);
    setTimeout(() => {document.getElementById("button").style.display = "none"}, 100);
    setTimeout(() => {document.getElementById("myModal").style.display = "none"}, 3000);

    if(age == ""){return}
    console.log(username)
    document.getElementById("p1").textContent = "HELLO " + username;
    
    if(age <= 18)
        {
            document.getElementById("p2").textContent = "You Are Still A KID (⊙ˍ⊙)";
        }
        else
        {
            document.getElementById("p2").textContent = "Greatings Ooh Wise One.... (ﾉ ﾟｰﾟ)ﾉ";
        }
    
        if(document.getElementById("mebutton").checked)
        {
            document.getElementById("mybutton").textContent = "LOL I Can't Remember (¬‿¬)";
        }
        setTimeout(() => bot1.textContent = "Hello, am an AI named BOB", 1000)
        setTimeout(() => player1.textContent = "Cool, who made you", 3000)
        setTimeout(() => bot2.textContent = "Joshua, his a very cool guy.", 5000)
        setTimeout(() => player2.textContent = "WOOW", 7000)
        setTimeout(() => botr.textContent = "SO, what will you like to ask me...?", 8000)
}

//NUMBER_CONVERTIONS
document.getElementById("schbutton").onclick = function()
{
    let finisedProject = window.prompt("How Many Finished Project Do You Have..?");


    console.log(typeof finisedProject)
    finisedProject = Number(finisedProject);
    finisedProject += 1;


    document.getElementById("p3").textContent = "Project Finished: " + finisedProject + 
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

    document.getElementById("radiusbutton").textContent = "The Circumference Is: " + circumference;
    
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

    document.getElementById("hypobutton").textContent = "Side C: " + c;

    console.log("Side C: ", c)
}

//ROLL A DICE
let dice = Math.floor(Math.random() * 6) + 1;

document.getElementById("rollbutton").onclick = function()
{
    document.getElementById("rollbutton").textContent = "You Got: " + dice;
}

//MAKING AN AI
let currentMessagec = ""
let currentMessage = ""
let oldMessage = ""
let currentAI = ""
let oldAI = ""
let perAI = ""
let createdQuestion = []
let createdAnwser = []


let player2 = document.getElementById("player2")
let player1 = document.getElementById("player1")
let playerinput = document.getElementById("playerinput")

// createdQuestion.push(JSON.parse(localStorage.getItem("createdQuestion")));
// createdAnwser.push(JSON.parse(localStorage.getItem("createdAnswer")));

let bot2 = document.getElementById("bot2")
let bot1 = document.getElementById("bot1")
let botr = document.getElementById("botR")

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

console.log(createdQuestion)

document.getElementById("playerbutton").onclick = function()
{
    AI()
}
window.addEventListener("keydown", enter)

function enter(event)
{
    if(playerinput.value !== "" && event.key === "Enter")
    {
        AI()
    }
}

function AI()
{

    oldMessage = player2.textContent;
    oldAI = bot2.textContent;
    player1.textContent = oldMessage;
    bot1.textContent = oldAI;
    currentMessage = playerinput.value;
    oldMessage = player1.value;
    oldAI = bot1.value;
    player2.textContent = currentMessage;
    bot2.textContent = currentAI
    perAI = botr.textContent

    currentMessagec = currentMessage.trim()
    currentMessagec = currentMessagec.toLowerCase()


    check();

    botr.textContent = currentAI
    bot2.textContent = perAI

    playerinput.value = "";
    document.title = currentAI
}

function check()
{
    if(currentMessagec == createdQuestion[createdQuestion.indexOf(currentMessagec)])
    {
        currentAI = createdAnwser[createdQuestion.indexOf(currentMessagec)]
    }
    else
    {
        reply();
    }
}
const myBox = document.createElement("div")

function reply()
{
    switch(currentMessagec)
    {
        case "hi":
        case "hello":
            currentAI = "Hello"
            break;
        case "what is my name":
            currentAI = username + " I dont forget my freinds name expect if you clear my memory"
            break;
        case "clear data":
        case "clear":
            currentAI = "Data Successfully cleared"
            localStorage.clear()
            break
        case "how are you" :
        case "how are you doing":
            currentAI = `Am good... you're just ${age}, years old.. so sad`
            break;
        case "cool":
            currentAI = "That's my middle name (*￣︶￣*)"
            break;
        case "sorry":
            currentAI = "I don't remember what you did to me buh i forgive you......     ( ´･･)ﾉ(._.`)"
            break;
        case "bot":
        case "robot":
        case "ai":
            currentAI = "It hurts my feelings calling me a bot. ╯︿╰"
            break;
        case "i love you":
        case "i like you":
            currentAI = "AWWW... thats so cute buh robots don't have emotions. (´。＿。｀)"
            break;
        case "reply":
            let CXQ = window.prompt("What You Want To Ask...?").trim().toLowerCase();
            let CAQ = window.prompt("What Should I Reply...?").trim();
            createdQuestion.push(CXQ);
            createdAnwser.push(CAQ);
            
//             localStorage.setItem("createdQuestion", JSON.stringify(createdQuestion.every()));
//             localStorage.setItem("createdAnswer", JSON.stringify(createdAnwser.every()));
            
            currentAI = "SAVED.. try it out..? You Now Have " + createdQuestion.length + " Created Reply(s)"
            break
        case "light mode":
        case "lightmode":
            lightMode()

            currentAI = "Light Mode activatied you can also try dark mode... (‾◡◝)"
            break
        case "dark mode":
        case "darkmode":
            darkMode()

            currentAI = "Dark Mode activatied you can also try light mode... (‾◡◝)"
            break
        case "replys":
            let replys = ("#" + createdQuestion + "# are your Created Question(s) and #"  + createdAnwser + "# are your Created Answer(s)")
            if(createdQuestion == "")
            {
                currentAI = "You have no reply... you can create one by inputing reply"
            }
            else
            {
                window.alert(replys)
                currentAI = "Here are your replys....! " + replys
            } 
            break
        case "games":
        case "game":
            currentAI = "I love games to..... ヾ(^▽^*))).. use stop game to stop game..!"
            myBox.style.width = "50px"
            myBox.style.height = "50px"
            myBox.style.backgroundColor = "green"
            myBox.style.borderStyle = "solid"
            myBox.style.borderWidth = "5px"
            document.body.append(myBox)
            myBox.style.position = "absolute"
            window.addEventListener("keydown", game1)
            break
        case "stop game":
        case "stop":
            myBox.style.display = "none"

            currentAI = "Game stopped try other features...!"
            break; break;
        default:
            currentAI = username + " I dont think i understand wat you just said (#｀-_ゝ-)... you can tell me by inputing reply"
    }
}

//TIME AND DATE
const myTime = document.getElementById("time");

setInterval(update, 1000)

function update()
{
    let date = new Date();
    myTime.textContent = formateTime(date);

    function formateTime(date)
    {
        openFullscreen()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let amOrPm = hours >= 12 ? "pm" : "am"
        hours = (hours % 12) || 12;

        minutes = formateZeroes(minutes)
        seconds = formateZeroes(seconds)

        return hours + ":" + minutes + ":" + seconds + " " + amOrPm
    }

    function formateZeroes(time)
    {
        time = time.toString()
        return time.length < 2 ? "0" + time : time
    }
}

//DOM
//DarkMode
function darkMode()
{
    document.body.style.backgroundColor = "#202020"
    document.body.style.color = "white"
}
function lightMode()
{
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    let inputs = document.getElementsByTagName("input")

    inputs[0].style.borderWidth = "10"
    inputs[0].style.borderStyle = "solid"

    inputs[1].style.borderWidth = "10"
    inputs[1].style.borderStyle = "solid"

    inputs[2].style.borderWidth = "10"
    inputs[2].style.borderStyle = "solid"
}

document.getElementById("niteMode").onclick = function()
{
    LD = document.getElementById("LDmode")
    if (LD.textContent == "Light Mode🗄✨")
    {
        LD.textContent = "Dark Mode👀😎"
        player2.textContent = "dark mode"
        botr.textContent = "Dark Mode activatied you can also try light mode... (‾◡◝)"
        darkMode()
    } else {
        LD.textContent = "Light Mode🗄✨"
        player2.textContent = "light mode"
        botr.textContent = "Light Mode activatied you can also try dark mode... (‾◡◝)"
        lightMode()
    }
}

//GAMES
let x = 0
let y = 0

function game1(event)
{
    switch (event.key) 
    {
        case "w":
            y-=5
            myBox.style.top = y + "px"
            break;
    
        case "s":
            y+=5
            myBox.style.top = y + "px"
            break;
        case "d":
            x+=5
            myBox.style.left = x + "px"
            break
        case "a":
            x-=5
            myBox.style.left = x + "px"
            break
        case "Backspace":
            myBox.style.display = "none"

            currentAI = "Game stopped try other features...!"
            playerinput.value = ""
        default:
            break
    }
}

//COOKIES
console.log(document.cookie)
function setCookie(name, value, daystolive)
{
    const date = new Date()
    date.setTime(date.getTime() + (daystolive * 24 * 60 * 60 * 1000))
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
    
}

function deleteCookie(name)
{
    setCookie(name, null, null)
}

function getCookie(name)
{
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split(";")
    let result = null

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}
