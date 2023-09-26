var splashScreen
var playbutton,musicbutton,mutebutton
var gameState="wait"
var bglevel1,object1,object2,object3,object4
var object1img,object2img,object3img
var x1,y1,x2,y2,x3,y3,x4,y4,x5,y5


function preload(){
    splashScreen=loadImage("The Fortune Treasure!!.gif") 
    bglevel1=loadImage("bgl1.jpg")
}

function setup(){
    createCanvas(windowWidth,windowHeight)


    x1=(Math.random(50,windowWidth))
    y1=(Math.random(50,windowHeight))

    x2=(Math.random(100,windowWidth-100))
    y2=(Math.random(100,windowHeight-100))

    x3=(Math.random(100,windowWidth-100))
    y3=(Math.random(100,windowHeight-100))

    x4=(Math.random(100,windowWidth-100))
    y4=(Math.random(100,windowHeight-100))

    x5=(Math.random(100,windowWidth-100))
    y5=(Math.random(100,windowHeight-100))



playbutton=createImg("play.png")
playbutton.position(width/4+100,height-(height/4))
playbutton.size(180,150) 

musicbutton=createImg("music.png")
musicbutton.position(width/2,height-(height/3.95))
musicbutton.size(170,150) 
// musicbutton.hide()

mutebutton=createImg("mute.png") 
mutebutton.position(width/2,height-(height/3.95))
mutebutton.size(170,150) 
mutebutton.hide()

// level 1 collectibles
object1=createSprite(x1,y1)
object2=createSprite(x2,y2)
object3=createSprite(x3,y3)
object4=createSprite(x4,y4)
console.log(x1,y1)
console.log(x2,y2)
console.log(x3,y3)
console.log(x4,y4)
console.log(x5,y5)


}

function draw(){

    if (gameState=="wait"){
    background(splashScreen)
}


playbutton.mousePressed(()=>{
   about()
})


if(gameState=="level1"){
    background(bglevel1)
    playbutton.hide()
    mutebutton.hide()
    musicbutton.hide()
    enterlevel1()
}
if (gameState=="level1start"){


}




drawSprites()
}



function about(){
swal({
    title:"HOW TO PLAY THE GAME !!!",
    text:"Complete the tasks as instructed.. \n in various hint messages",
    imageUrl:"maria-belova-.jpg",
    imageSize:"200x200",
    confirmButtonText: "LET THE QUEST BEGIN!!",
    confirmButtonColor: "green"
},
function(){
    gameState="level1"
}
)


}


function enterlevel1(){
    swal({
        title:"Find the Door to Wonders !!!",
        text:"For the Door to appear , collect 5 magical Items!!",
        imageUrl:"maria-belova-.jpg",
        imageSize:"200x200",
        confirmButtonText: "ADVENTURE BEGINS!!",
        confirmButtonColor: "green"
    },
    function(){
        gameState="level1start"
    }
    )
    
    
    }
