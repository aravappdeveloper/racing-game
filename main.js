//start of main.js
//declare variables and stuff here:
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 50;
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 70;
background_image = "racing.jpg";
car1_image = "car1.png";
car2_image = "car2.png";
//end variable area
//declare functions here:
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
    
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car_width, car_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown); //this line had to make an interupption (haha)

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up1();
        console.log("up");
    }
    if(keyPressed == '40'){
        down1();
        console.log("down");
    }
    if(keyPressed == '39'){
        right1();
        console.log("right");
    }
    if(keyPressed == '37'){
        left1();
        console.log("left");
    }

    if(keyPressed == '87'){
        up2();
        console.log("up");
    }
    if(keyPressed == '83'){
        down2();
        console.log("down");
    }
    if(keyPressed == '68'){
        right2();
        console.log("right");
    }
    if(keyPressed == '65'){
        left2();
        console.log("left");
    }
}

function up1(){
        car1_y -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
}
function down1(){
        car1_y += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
}
function right1(){
        car1_x += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
}
function left1(){
        car_x -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
}

function up2(){
        car2_y -= 10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
}
function down2(){
        car2_y += 10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
}
function right2(){
        car2_x += 10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
}
function left2(){
        car2_x -= 10;
        uploadBackground();
        uploadCar2();
        uploadCar1();
}
//end function area
//area for if conditions:
if(car1_x = 700){
    document.getElementById("winner").innerHTML = "Player 1 is the winner!"
}
if(car2_x = 700){
    document.getElementById("winner").innerHTML = "Player 2 is the winner!"
}
//end of if condition area
//end of main.js