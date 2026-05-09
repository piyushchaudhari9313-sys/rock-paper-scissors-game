let userscore=0;
let compscore=0;
 
let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");


let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score")




const gencomputerchoice=()=>{
    const  value = ["rock","paper","scissors"];
    const  random=Math.floor(Math.random()*3)
    return value[random]
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
      
        console.log("you win");
        msg.innerText=`you win! your choice ${userchoice} and comp choice ${compchoice}` ;
        msg.style.backgroundColor='green';
    }

    else{
        compscore++;
        compscorepara.innerText=compscore;

        console.log("you lost")
         msg.innerText=`you lost! your choice ${userchoice}  and comp choice ${compchoice}` 
        msg.style.backgroundColor='red';
    }
}

const playgame =(userchoice)=>{
    console.log("user choice=",userchoice)
    const  compchoice= gencomputerchoice()
    console.log("comp choice=",compchoice)

    if(userchoice===compchoice){
        console.log("game was draw")
        msg.innerText="game was draw";
        msg.style.backgroundColor="grey"
        return;
    }
     const userwin=
     (userchoice==="rock" && compchoice==="scissors")||
     (userchoice==="paper" && compchoice==="rock")||
     (userchoice==="scissors" && compchoice==="paper");
     

       
    showwinner(userwin ,userchoice,compchoice);
}
    
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      let userchoice= choice.getAttribute("id")
      playgame(userchoice)
    });
})