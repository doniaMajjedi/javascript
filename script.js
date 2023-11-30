//person 1
let p1sca=document.querySelector("#score--0");
let p1cur=document.querySelector("#current--0");
let dice=document.querySelector(".dice");
let player=0;
//person 2
let p2sca=document.querySelector("#score--1");
let p2cur=document.querySelector("#current--1");

let neo=document.querySelector(".btn--new").addEventListener("click",()=>{
    p1sca.textContent=0;
    p1cur.textContent=0;
    p2sca.textContent=0;
    p2cur.textContent=0;
    document.querySelector("#name--0").textContent="Player 1";
    document.querySelector("#name--1").textContent="Player 2";
    document.querySelector(".btn--hold").disabled=false;
    document.querySelector(".btn--roll").disabled=false;
    s=0;
    s2=0;
    player=0;
    p1.classList.add("player--active");
    p2.classList.remove("player--active");
    dice.hidden = true;
})
let s=0,s2=0;
let rd=document.querySelector(".btn--roll").addEventListener("click",()=>{
    let alea=Math.floor(Math.random()*6+1);
    dice.hidden=false;
    if(player==0){
        s+=alea;
        switch (alea) {
            case 1:{
                dice.src="dice-1.png";
                p1sca.textContent="0";
                p1cur.textContent="0";
                p1.classList.remove("player--active");
                p2.classList.add("player--active");
                player=1;
                s=0;
                rd.disable=true;
            }         
                break;
            case 2:{
                dice.src="dice-2.png";
                p1cur.textContent=s;
            }    break;
            case 3:{
                dice.src="dice-3.png";
                p1cur.textContent=s;
            }    break;
            case 4:{
                dice.src="dice-4.png";
                p1cur.textContent=s;
            }    break;
            case 5:{
                dice.src="dice-5.png";
                p1cur.textContent=s;
            }    break;
            case 6:{
                dice.src="dice-6.png";
                p1cur.textContent=s;
            }    
            break;        
            default:
                break;
        }
    }
    else{
        s2+=alea;
        switch (alea) {
            case 1:{
                dice.src="dice-1.png";
                p2sca.textContent="0";
                p2cur.textContent="0";
                s2=0;
                player=0;
                p2.classList.remove("player--active");
                p1.classList.add("player--active");
                //rd.disable=true;
            }         
                break;
            case 2:{
                dice.src="dice-2.png";
                p2cur.textContent=s2;
            }    break;
            case 3:{
                dice.src="dice-3.png";
                p2cur.textContent=s2;
            }    break;
            case 4:{
                dice.src="dice-4.png";
                p2cur.textContent=s2;
            }    break;
            case 5:{
                dice.src="dice-5.png";
                p2cur.textContent=s2;
            }    break;
            case 6:{
                dice.src="dice-6.png";
                p2cur.textContent=s2;
            }    
            break;        
            default:
                break;

            }
        
}})

let hold=document.querySelector(".btn--hold").addEventListener("click",()=>{

    if(player==0){
        if(s>=20){
            document.querySelector("#name--0").textContent="winner";
            document.querySelector(".btn--hold").disabled=true;
            document.querySelector(".btn--roll").disabled=true;
            p1sca.textContent=Number(p1cur.textContent);
            p1cur.textContent=0;
            
        }
        else{
            player=1;
            p1.classList.remove("player--active");
            p2.classList.add("player--active");
            p1sca.textContent=Number(p1cur.textContent);
            p1cur.textContent=0;
        }
    }
    else{
        if(s2>=20){
            document.querySelector("#name--1").textContent="winner";
           document.querySelector(".btn--hold").disabled=true;
           document.querySelector(".btn--roll").disabled=true;
           p2sca.textContent=Number(p2cur.textContent);
            p2cur.textContent=0;
       }
       else{
       player=0;
        p2.classList.remove("player--active");
        p1.classList.add("player--active");
        p2sca.textContent=Number(p2cur.textContent);
        p2cur.textContent=0;
       }

    }
    

})
