var bg
var screen
var steve, steveImg,rightarm1,rightarm1Img,leftarm1,leftarm1Img,leftarm2Img,leftarm3Img
var steve_copy , steve_copyImg
var explosion, explosionAnimation
var explosionSound
var bullet
var dummy
var armAngleR = 0;
var armAngleL =0;
var rifleCollection
var rifleCollectionImg;
var rifle1Select;
var rifle2Select;
var rifle3Select;
var steve_copyLife =200
var bulletImg
var dummyBullet




function preload(){
bg = loadImage("assets/background.png")
explosionSound = loadSound("assets/category_explosion/explosion.ogg")
steveImg =  loadImage("assets/steve.png")
steve_copyImg =  loadImage("assets/steve_copy.png")
explosionAnimation = loadAnimation("assets/sprite_0.png","assets/sprite_1.png","assets/sprite_2.png",
"assets/sprite_3.png","assets/sprite_4.png","assets/sprite_5.png","assets/sprite_6.png")
rightarm1Img = loadImage("assets/rightarm_1.png")
leftarm1Img = loadAnimation("assets/leftarm_1.png")
leftarm2Img = loadAnimation("assets/leftarm_2.png")
leftarm3Img = loadAnimation("assets/leftarm_3.png")
rifleCollectionImg = loadImage("assets/rifleCollection.png")
bulletImg = loadImage("assets/bullet.png")
}



function setup(){
createCanvas(windowWidth -20, windowHeight-100)
screen = createSprite(765,320,windowWidth, windowHeight-100)
screen.addImage("scenery",bg)
screen.scale= 2.15

dummyBullet = createSprite(500,100,20,10)



steve = createSprite(850,500,20,20)
steve.addImage("aiming",steveImg)
steve.scale = 0.7;

steve_copy =createSprite(650,500,20,100)
steve_copy.addImage("aiming_copy",steve_copyImg)
steve_copy.scale = 0.7;

rightarm1 = createSprite(850,500,10,10)
rightarm1.addImage("R1",rightarm1Img)
rightarm1.scale=0.4
//rightarm1.debug = true
rightarm1.setCollider("rectangle",-10,-50,10,10)

leftarm1 = createSprite(650,500,10,10)
leftarm1.addAnimation("L1",leftarm1Img)
leftarm1.addAnimation("L2",leftarm2Img)
leftarm1.addAnimation("L3",leftarm3Img)
leftarm1.scale=0.4



}

function draw(){
background("blue")
//rifleCollection.visible= false
console.log(steve_copy.x)

dummyBullet.x = mouseX
dummyBullet.y=  mouseY

if(dummyBullet.isTouching(steve_copy)){
    steve_copyLife = steve_copyLife - 5
}


if(keyWentDown("j")){
    explosion= createSprite(rightarm1.x -50,rightarm1.y,40,80)
    explosion.addAnimation("boom",explosionAnimation)
    explosionSound.play()
    explosion.lifetime = 30
    
   
}

if(keyWentUp("j")){
    bullet = createSprite(rightarm1.x -50,rightarm1.y,20,10)
    bullet.addImage(bulletImg)
    bullet.shapeColor ="black"
    bullet.setSpeedAndDirection(-50,armAngleR -100);

   //bullet.lifetime = 20
//console.log(steve_copy.x)
   
}

if(keyWentUp("j") && bullet.isTouching(steve_copy)){
    steve_copyLife = steve_copyLife -50
}



if(keyWentUp("j")){
    //explosion.visible = false;
}

if(keyWentDown("z")){
    rifleCollection = createSprite(700,350,20,20);
    rifleCollection.addImage("rifleL",rifleCollectionImg);
    rifleCollection.scale = 1.3;

    rifle3Select = createSprite(705,150,15,150)
    rifle3Select.visible= false;
}

if(keyWentUp("a")){
    rifleCollection.visible= false;
}




if(keyDown("o")){
if(armAngleR <105){
   armAngleR = armAngleR + 5
    rightarm1.x = rightarm1.x -0.58
rightarm1.y = rightarm1.y -1

}
    if(armAngleR > 105){
        armAngleR = 105
        rightarm1.x = rightarm1.x -5
      
        
    }
    rightarm1.rotation = armAngleR
}

if(keyDown("l")){
if(armAngleR>0){
    armAngleR = armAngleR -5
   rightarm1.x = rightarm1.x +0.8
  rightarm1.y = rightarm1.y +1
}
    if(armAngleR < 0){
        armAngleR = 0
        rightarm1.x = rightarm1.x -5
        
    }
    rightarm1.rotation = armAngleR

    if(rightarm1.x > steve.x){
        rightarm1.x=steve.x
    }


}

if(mousePressedOver(rifle3Select)){
    leftarm1.y = leftarm1.y+27
    leftarm1.changeAnimation("L2",leftarm2Img)
    rifleCollection.visible= false;

    rifle3Select.x = -50
}

//console.log(armAngleR)



drawSprites();

textSize(20)
fill("black")
text("life : " + steve_copyLife , steve_copy.x-40,steve_copy.y - 70)
}