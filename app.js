const cards = document.querySelectorAll(".card");

let hasbeenpick = false;
let checking = false;
let timeTest = false;
let totalNumber = 6;
let startTime;
let firstPick;


function gameStart() {
  if (checking === true){
    return
  };

  if(this === firstPick){
    return
  }

  if(timeTest === false){
    timeTest = true;
    time();
  }
  
  this.classList.add('pick');


  if (hasbeenpick === false){
    hasbeenpick = true;
    firstPick = this;
    return
  }

  secondPick = this

  checkForMatch();

}



function checkForMatch(){



  if(firstPick.dataset.framework === secondPick.dataset.framework){
    //  配對成功

   firstPick.removeEventListener("click" , gameStart);
   secondPick.removeEventListener("click" , gameStart);

   totalNumber--;

   if(totalNumber === 0){
     let endTime = new Date();
    

    alert("花費時間:" + Math.floor((endTime - startTime)/1000) + "秒");
   }
   


   restart()

  }else{

    // 配對失敗
    checking = true;
    
    setTimeout(()=>{
     
      firstPick.classList.remove("pick");
      secondPick.classList.remove("pick");
     
      restart()

    },1000);

  }

}

function restart(){
  [hasbeenpick,checking] = [false,false];
  [firstPick,secondPick] = [null,null];
}

function Shuffle() {
  cards.forEach( cards =>{
    cards.style.order = Math.floor(Math.random() * 12);
  })
}
function time(){
   startTime = new Date();
 
}



Shuffle();
cards.forEach(card => card.addEventListener('click', gameStart));
