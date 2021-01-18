

let bottomRow = document.getElementById('bottomRow');
let staty = document.getElementsByClassName('staty');
let drevoStaty = document.getElementById('drevoStaty');
let drevoHP = document.getElementById('drevoHP');
let veigHP = document.getElementById('veigHP');

/*const canvas = document.getElementById('hrac');*/

/*const imgChodi = document.getElementById("drevorubec");*/
/*canvas.height = 150;
canvas.width = 150;*/

/*
class Player {
    constructor (x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w=150;
        this.h = h=150;
        this.c = c;

        this.dy = 0;
        this.originalHeight = h;

    }
    Draw () {  
        
        ctx.beginPath ();
        ctx.fillStyle = this.c;
        ctx.drawImage(imgChodi, this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
    Animate() {
        //jump


        /*if (keys['Space'] || keys['KeyW']) {
            this.Jump();
        } else {
            this.jumpTimer = 0;
        }
        // skrceni
        if (keys['ShiftLeft'] || keys['KeyS']) {
            this.h = this.originalHeight / 2;

        }
        
        //this.y += this.dy;
        

        //gravitace
        this.Draw();

    }
}
function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player.Animate();
}
*/






//define health

let hracHP=100;
let veigarHP=100;

function beginBattle(){
    bottomRow.innerHTML = "Vyber dřevorubcovu schopnost, kliknutím na tlačítko nahoře.";
    /*staty[0].style.visibility = "visible";
    staty[1].style.visibility = "visible";*/
    for (let x=0; x<staty.length; x++){
        staty[x].style.visibility = "visible";
    }

}
function veigAttack(){
    let attackChoice = Math.ceil(Math.random()*3);
    if  (attackChoice == 1){
        let hitChance = Math.round(Math.random()*10);
        if (hitChance <=7){
        let dmg = Math.round(Math.random()*10)+10;
        hracHP -= dmg;
            if (hracHP < 0){
                hracHP = 0;
            }
            bottomRow.innerHTML += "<br> Mág tě trefil slabým bleskem za  " + dmg + " poškození.  Nyní máš " + hracHP + "životů";
            let hracHPBarWidth = (hracHP/100)*200;
            drevoHP.style.width = hracHPBarWidth + "px";
    
    }else{
        bottomRow.innerHTML += "<br> MÁG MINUL";
    } 
    }
    else if (attackChoice == 2){
            let hitChance = Math.round(Math.random()*10);
            if (hitChance <=5){
            let dmg = Math.round(Math.random()*10)+10;
            hracHP -= dmg;
                if (hracHP < 0){
                    hracHP = 0;
                }
                bottomRow.innerHTML += "<br> Mág tě trefil silným bleskem za  " + dmg + " poškození.  Nyní máš " + hracHP + "životů";
                let hracHPBarWidth = (hracHP/100)*200;
                drevoHP.style.width = hracHPBarWidth + "px";
        
            }else{
                bottomRow.innerHTML += "<br> MÁG MINUL";
            } 
    }
    else{
        let hitChance = Math.round(Math.random()*10);
        if (hitChance <=3){
        let dmg = Math.round(Math.random()*20)+20;
        hracHP -= dmg;
            if (hracHP < 0){
                hracHP = 0;
            }
            bottomRow.innerHTML += "Mág tě trefil silným plamenem za  " + dmg + " poškození.  Nyní máš " + hracHP + "životů";

            let hracHPBarWidth = (hracHP/100)*200;
            drevoHP.style.width = hracHPBarWidth + "px";
    
            }else{
            bottomRow.innerHTML +="<br>VYHNUL JSI SE MÁGOVU ÚTOKU!!";
            }
        }
        if (hracHP == 0){
            bottomRow.innerHTML = "<br> Prohrál jsi! <br> <button onclick='restartGame()' class=buttonStyle>Hrát znovu?</button>";
        }
    
} 


function prast(){
    //if (veigarHP>0){
    if (hracHP>0){
        let hitChance = Math.round(Math.random()*10);
        if (hitChance <=7){
            let dmg = Math.round(Math.random()*10)+10;
            veigarHP -= dmg;
            if (veigarHP < 0){
                veigarHP = 0;
            }
            bottomRow.innerHTML= "Trefil jsi mága svou sekerou. Udělal jsi " + dmg + " poškození. Veigar nyní má " + veigarHP + "životů";
            let veigHPBarWidth = (veigarHP/100)*200;
            veigHP.style.width = veigHPBarWidth + "px";
        }else {
            bottomRow.innerHTML="MÁG SE TVÉMU ÚTOKU VYHNUL!!";
        }
        //zmena obrazku
        document.getElementById("hrac").src = "images/natah.png";
        setTimeout(function(){document.getElementById("hrac").src = "images/drevorubec.png";}, 500);
    //}
    }
    if (veigarHP == 0){
        bottomRow.innerHTML = "<br> Porazil si mága! <br> <button onclick='restartGame()' class=buttonStyle>Hrát znovu?</button>";
    }

    else {
        veigAttack()
    }
    


}
function restartGame(){
    veigarHP = 100;
    hracHP = 100;
    if (hracHP==0){

    }

    let hracHPBarWidth = (hracHP/100)*200;
    drevoHP.style.width = hracHPBarWidth + "px";
    let veigHPBarWidth = (veigarHP/100)*200;
    veigHP.style.width = veigHPBarWidth + "px";


    beginBattle();
}
/*const canvas = document.getElementById('sekera');
const ctx = canvas.getContext('2d');
const imgSekera = document.getElementById("sekeraImg");


let obstacles=[];

class Obstacle {
    constructor (x, y, w, h, c){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.c=c;

        this.dx = -gameSpeed;
    }
    Update(){
        this.x += this.dx;
        this.Draw();
        this.dx = -gameSpeed;
    }
    Draw () {
        ctx.beginPath ();
        ctx.fillStyle = this.c;
        ctx.drawImage(imgSekera, this.x, this.y, this.w, this.h);
        ctx.closePath();
    }

}*/

/*function spawnObstacle(){
    let size = RandomIntRange(50, 100);
    let type = RandomIntRange(0, 2);
    let obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, '#2484E4');
    
    /*ctx.drawImage(img, 10, 10);
    obstacles.push(obstacle);



}*/