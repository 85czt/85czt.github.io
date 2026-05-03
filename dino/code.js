var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d0f7bc7d-7da7-4859-a3b1-daad098fb398","d73319a9-06de-49ec-a894-2f79cdfd92ab","bdb8aaaa-e3a7-4fa8-80c2-15869f2516a6","9c24d8d4-7905-4d9e-ab0f-a26b709978cc","1c2a2bb5-519a-4d7d-832d-7633ee6ef1c7","00f9cfb7-e68c-491f-976e-69245dd4e62c","ddbcd17b-cb44-4352-8ddc-a1e5fae3fab9","bb0b071d-aaf6-4eee-babf-f1a7e4df93cd","24fad4be-4e93-4d82-9ffa-5bc93a644f61","72a6fbf7-e073-46e7-be4f-6e758353efb4","dee01356-45f6-4623-a95a-473434395128","5312a4cf-5176-4eea-bf60-31724bbb7a60"],"propsByKey":{"d0f7bc7d-7da7-4859-a3b1-daad098fb398":{"name":"cloud","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/d0f7bc7d-7da7-4859-a3b1-daad098fb398.png","frameSize":{"x":94,"y":35},"frameCount":1,"looping":true,"frameDelay":4,"version":"P_XIaTZLacGX6Jz_wJmJzQf0fHsLnsto","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":35},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/d0f7bc7d-7da7-4859-a3b1-daad098fb398.png"},"d73319a9-06de-49ec-a894-2f79cdfd92ab":{"name":"ground","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/d73319a9-06de-49ec-a894-2f79cdfd92ab.png","frameSize":{"x":3669,"y":29},"frameCount":1,"looping":true,"frameDelay":4,"version":"JuaWbFrcX4.Z4vM7sJWMzebm502TZA2O","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":3669,"y":29},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/d73319a9-06de-49ec-a894-2f79cdfd92ab.png"},"bdb8aaaa-e3a7-4fa8-80c2-15869f2516a6":{"name":"bird","sourceUrl":null,"frameSize":{"x":92,"y":90},"frameCount":2,"looping":true,"frameDelay":12,"version":"iBiZWyXpgosgftS5ziomRJvkoddW2.r3","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":180},"rootRelativePath":"assets/bdb8aaaa-e3a7-4fa8-80c2-15869f2516a6.png"},"9c24d8d4-7905-4d9e-ab0f-a26b709978cc":{"name":"dino","sourceUrl":null,"frameSize":{"x":88,"y":94},"frameCount":2,"looping":true,"frameDelay":10,"version":"QjZ2OHaZ2XcaY_D4sG14FixfI2oX4oOd","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":188},"rootRelativePath":"assets/9c24d8d4-7905-4d9e-ab0f-a26b709978cc.png"},"1c2a2bb5-519a-4d7d-832d-7633ee6ef1c7":{"name":"cactus1","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/1c2a2bb5-519a-4d7d-832d-7633ee6ef1c7.png","frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"WIvallduoRe0UzNnS2gCwuUcy4kxQtPF","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/1c2a2bb5-519a-4d7d-832d-7633ee6ef1c7.png"},"00f9cfb7-e68c-491f-976e-69245dd4e62c":{"name":"cactus2","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/00f9cfb7-e68c-491f-976e-69245dd4e62c.png","frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"MkG4YdQw9cYrutLLoQC28c4wOuilI6gZ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/00f9cfb7-e68c-491f-976e-69245dd4e62c.png"},"ddbcd17b-cb44-4352-8ddc-a1e5fae3fab9":{"name":"cactus3","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/ddbcd17b-cb44-4352-8ddc-a1e5fae3fab9.png","frameSize":{"x":34,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"DkwMuaDtiV3KerwFoA_BrRN9B3zsuW.v","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":70},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/ddbcd17b-cb44-4352-8ddc-a1e5fae3fab9.png"},"bb0b071d-aaf6-4eee-babf-f1a7e4df93cd":{"name":"cactus4","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/bb0b071d-aaf6-4eee-babf-f1a7e4df93cd.png","frameSize":{"x":115,"y":107},"frameCount":1,"looping":true,"frameDelay":4,"version":"bacqqpBlSHI.jU1tAbKmLux4EE.q_jyZ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":115,"y":107},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/bb0b071d-aaf6-4eee-babf-f1a7e4df93cd.png"},"24fad4be-4e93-4d82-9ffa-5bc93a644f61":{"name":"dead","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/24fad4be-4e93-4d82-9ffa-5bc93a644f61.png","frameSize":{"x":88,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"3pyX71eC3jet4aJR_7MAZIxU2IxfpksB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":94},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/24fad4be-4e93-4d82-9ffa-5bc93a644f61.png"},"72a6fbf7-e073-46e7-be4f-6e758353efb4":{"name":"norun","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/72a6fbf7-e073-46e7-be4f-6e758353efb4.png","frameSize":{"x":88,"y":94},"frameCount":1,"looping":true,"frameDelay":4,"version":"9YNA36.8ilSy4sNtbcOfGkFmUcPZevkU","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":88,"y":94},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/72a6fbf7-e073-46e7-be4f-6e758353efb4.png"},"dee01356-45f6-4623-a95a-473434395128":{"name":"gameover","sourceUrl":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/dee01356-45f6-4623-a95a-473434395128.png","frameSize":{"x":386,"y":194},"frameCount":1,"looping":true,"frameDelay":4,"version":"M1MzZwN1K.z9eMI8usJFSxQFUqsDnGG4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":194},"rootRelativePath":"assets/v3/animations/rIPVBlPZ2vCHyNkzDOASYOkgbvTh1tRWBHdpeJqEKfg/dee01356-45f6-4623-a95a-473434395128.png"},"5312a4cf-5176-4eea-bf60-31724bbb7a60":{"name":"shift","sourceUrl":null,"frameSize":{"x":118,"y":95},"frameCount":2,"looping":true,"frameDelay":12,"version":"5PkAHMWgd46hUeWOBdKhjghaQPiiokLH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":118,"y":190},"rootRelativePath":"assets/5312a4cf-5176-4eea-bf60-31724bbb7a60.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// it appears that I like the chrome-dino one very much.
// I will make that a more complete game here.
World.frameRate=60;
noStroke();

// Create your variables here
var score = 0;
var speed = 5;

var dead=false;

var showSpeed=0;

var darkness=0;
var darkTimer=0;
var isDark=false;

var startFrame=0;
var frame=0;


// Create your sprites here
var cloud1=createSprite(-999,100);
var cloud2=createSprite(-999,200);
cloud1.setAnimation("cloud");
cloud2.setAnimation("cloud");

var cactus=createSprite(-100,300);
cactus.setAnimation("cactus"+randomNumber(1,4));
var ground=createSprite(200,350);
ground.setAnimation("ground");
var dino=createSprite(50,310);
dino.setAnimation("dino");
dino.setCollider("rectangle",-2,-15,55,80,40);

var gameover=createSprite(200,200);
gameover.setAnimation("gameover");
gameover.visible=false;

// dino.debug=true;

var highscore=0;
var restart_timer;
var tintColor="#ffffff";
var tintTemp="ff";


function draw() {
  // draw background
  bg();

  sprite_color();
  
  
  if (dead) {
    die();
    
  }else{
    
    if(dino.isTouching(cactus)){
      //code here run only 1 time on death, because next time "dead" is already true.
      dead=true;
      restart_timer=30;
      if(Math.floor(score)*10>highscore){
        highscore=Math.floor(score)*10;
      }
    }
    
    
    dark();
    dino_run();
    placecactus();
    
    showSpeed=Math.floor(speed*10)/10;
    
    score+=0.01*speed;
    speed+=0.003;
  }
  
  drawSprites();
  scoreboard();
}




// Create your functions here


function sprite_color(){
  tintTemp=floor(255-0.4*darkness).toString(16);
  tintColor="#"+tintTemp+tintTemp+tintTemp;
  //ohh it works
  dino.tint=tintColor;
  
  /*
  cloud1.alpha=1-0.6*(darkness/255);
  cloud2.alpha=1-0.6*(darkness/255);
  ground.alpha=1-0.4*(darkness/255);
  */
  
  /*
  The game becomes severely lagging whenever it's nighttime,
  it's so laggy that make me want to eat a monitor...
  So I asked chatgpt and it said tint is generally faster.
  I changed all the alphas to tints and it became much smoother
  */
  cloud1.tint=tintColor;
  cloud2.tint=tintColor;
  ground.tint=tintColor;
  
  cactus.tint=tintColor;
  gameover.tint=tintColor;

}





function dark(){
  frame=World.frameCount-startFrame;
  if(frame >= 601){
    if(frame % 600 == 0){
      isDark=false;
      darkTimer=60;
    }else if(frame % 300 == 0){
      isDark=true;
      darkTimer=60;
    }
  }
  
  
  //theoretically my game has 60 different backgrounds...
  //that's much much greater than 3.
  //You can say it's only 2 backgrounds if you'd like to
  //but why does that even matter?
  
  if(darkTimer>0){
    darkTimer--;
    if(isDark){
      darkness+=(17/4);
    }else{
      darkness-=(17/4);
    }
  }
  //255 in 60 frames: 17/4 per frame
}





function bg(){
  //sky + cloud + ground
  
  ground.velocityX=-speed;
  
  background(rgb(255-darkness,255-darkness,255-darkness));
  
  // LOOPING
  setCloud(cloud1);
  setCloud(cloud2);
  
    
  if(ground.x<=-1223){
    ground.x=1223+(ground.x-(-1223));
  }
}
function setCloud(cloud){
  if(cloud.x<-50){
    cloud.x=450;
    cloud.y=randomNumber(0,250);
    while(Math.abs(cloud2.y-cloud1.y) < 20){
      cloud.y=randomNumber(0,250);
    }
    cloud.velocityX=-(randomNumber(10,30)/100)*speed;
  }
}




function scoreboard(){
  fill(rgb(0.7*darkness,0.7*darkness,0.7*darkness));
  textSize(20);
  text("Score:", 280, 30);
  text (Math.floor(score)*10, 350, 30);
  //no health, i changed it to score
  text("Speed:", 280, 60);
  text (showSpeed, 350, 60);
  
  text("HI",20,30);
  text(highscore,60,30);
  
  if(frame<=900){
    fill("#999999");
    rect(0,0,400*(frame/900),5);
  }
}




function dino_run(){
  if(dino.y<310){
    dino.setAnimation("norun");
    dino.setCollider("rectangle",-2,-15,55,80,40);
    
    if(keyDown("space") || keyDown("up") || mouseDown()){
      dino.velocityY++;
    }else{
      dino.velocityY+=1.5;
    }
    
    if(keyWentDown("down")){
      dino.velocityY=5;
    }
    
  }else{
    dino.setAnimation("dino");
    
    dino.y=310;
    dino.velocityY=0;
    
    if(!(keyDown("down")) && (keyDown("space") || keyDown("up") || mouseDown())){
      dino.y=309;
      dino.velocityY=-20;
    }
    


    //duck
    if(keyDown("down")){
      dino.setAnimation("shift");
      dino.setCollider("rectangle",0,10,100,40,0);

      //WHY THE ANIMATION STOPPED RUNNING?????
      //I have to manually drive it
      if(World.frameCount%20 < 9){
        dino.setFrame(1);
      }/*else{
        dino.setFrame(0);
      }*/
        
      //it keeps setting the duck animation's frame to 0.
      //I can't figure out why.
      
    }else{
      dino.setAnimation("dino");
      dino.setCollider("rectangle",-2,-15,55,80,40);
    }
  }
}




function placecactus(){
  cactus.velocityX=-speed;
  
  if(cactus.x<-150){
    cactus.x=speed*65+speed*(randomNumber(-20,40));
    
    if(frame > 800 && randomNumber(1,3) == 1){//summon a bird
      cactus.setAnimation("bird");
      
      cactus.y=300-40*randomNumber(0,2);
      cactus.setCollider("rectangle",0,-10,70,30,0);

    }else{//summon a cactus
      cactus.setAnimation("cactus"+randomNumber(1,4));
      cactus.y=355-0.5*cactus.height;
      cactus.setCollider("aabb");
    }
  }
}





function die(){
  dino.velocityX=0;
  dino.velocityY=0;
  speed=0;
  dino.setAnimation("dead");
  cloud1.velocityX=0;
  cloud2.velocityX=0;
  cactus.velocityX=0;
    
  cactus.pause();
  gameover.visible=true;
  
  if(restart_timer>0){
    restart_timer--;
  }else{
    if(keyWentDown("space")|| keyWentDown("up") || mouseWentDown("leftButton")){
      
      cactus.x=-999;
      gameover.visible=false;
      dead=false;
      score=0;
      speed=10;
      dino.setAnimation("dino");
      dino.y=310;
      cactus.play();
      cloud1.x=-999;
      cloud2.x=-999;
      
      darkTimer=0;
      darkness=0;
      startFrame=World.frameCount;
    }
  }
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
