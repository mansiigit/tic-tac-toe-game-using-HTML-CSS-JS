let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#Reset");
let nweGame=document.querySelector("#Newgame_btn");
let msgContainer=document.querySelector(".msg-container");
let msgg=document.querySelector("#msg");
let  turnO=true;//playerX,playerY
//here we r using 2D array inwhich ele can be accessed as arr[0][1];
const winPatterns=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
];
const resetGame=()=>{
        turnO=true;
        enableBoxes();
        msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnO===true){
        box.innerText="O";
        box.style.color="orange";
        turnO=false;
       }else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;
       chckWinner();
});
});
const enableBoxes=()=>
{
        for(let box of boxes )
        {
                box.disabled=false;
                box.innerText="";
        }
}
const disableBoxes=()=>
{
        for(let box of boxes )
        {
                box.disabled=true;
        }
}
const showWinner=(winner)=>{
        msgg.innerText =`Congratulations! Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
}
const chckWinner=()=>{
        for(pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
                if(pos1Val===pos2Val && pos2Val=== pos3Val){
        console.log(pos1Val+" is winner");
        
        showWinner(pos1Val);
                }
        }
        }
};
Newgame_btn.addEventListener("click",resetGame);
Reset.addEventListener("click",resetGame);
