var randomRainbow = Math.floor(Math.random()*9)
var randomBomb = Math.floor(Math.random()*9)
if (randomRainbow === randomBomb){
    randomBomb = Math.floor(Math.random()*9)
}
var counter = 0

function treasure(location){
    counter = counter + 1
    document.getElementById("counter").innerHTML = counter
    if (randomRainbow === location){
        document.getElementById(location).innerHTML = "💰"
        document.getElementById(location).innerHTML = "💰 You Win!"
    }   else if (randomBomb === location){
        document.getElementById(location).innerHTML = "💣"
        document.getElementById(location).innerHTML = "💣 You Lost!"
        // alert("You Lost, Please Restart Game")
    }   else {
        document.getElementById(location).innerHTML = "❌"
    }
}
