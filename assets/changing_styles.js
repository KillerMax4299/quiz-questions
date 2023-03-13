var index ;
var questions = [
  ["1. Which Human sex has more pain tolerance?","a. MALE","b. FEMALE","c. Both MALE and FEMALE",1],
  ["2. What affects Linear Time flow?","a. Gravity","b. Speed","c. Time is Constant",0],
  ["3. What would be the radius of earth if it gets converted into a black-hole?", "a. 1.5 Km","b. 1.5 m","c. 1.5 mm",2]
]
var count = Number(document.getElementById("values").innerHTML);

function next(){
  count++;
  check();
  document.getElementById("values").innerHTML = count;
  loadqs(count);  reset();
}

function previous(){  
  count--;
  check();
  document.getElementById("values").innerHTML = count;
  loadqs(count);reset();  
}

function reset() {
  for(var i=0; i<3; i++){
    document.getElementsByClassName("rounds")[i].classList.remove("wrong");
    document.getElementsByClassName("rounds")[i].classList.remove("correct");
  }
}

window.addEventListener("load", ()=>{check();loadqs(count);
});

function check(){
  if(count === 0){
    document.getElementById("pre").disabled = true;
    document.getElementById("pre").style.cursor = "not-allowed";
    document.getElementById("pre").style.opacity = "0.5";

    document.getElementById("nxt").disabled = false;
    document.getElementById("nxt").style.cursor = "pointer";
    document.getElementById("nxt").style.opacity = "1";
  }
  else if(count ===2) {
    document.getElementById("pre").disabled = false;
    document.getElementById("pre").style.cursor = "pointer";
    document.getElementById("pre").style.opacity = "1";

    // document.getElementById("nxt").disabled = false;
    document.getElementById("nxt").classList.add("submits");
    document.getElementById("nxt").classList.remove("nxt_btn.");
    document.getElementById("nxt").innerHTML = "SUBMIT";
    // document.getElementById("nxt").style.opacity = "1";
  }
  else if(count==3){
    document.getElementById("quest").style.display = "none";
    for(var i=0; i<3; i++)
      document.getElementsByClassName("rounds")[i].style.display = "none";
    document.getElementById("pre").style.display = "none";
    document.getElementById("nxt").style.display = "none";
    document.getElementById("console_txt").style.color = "black";
    document.getElementById("console_txt").innerHTML = "Thank You <3";
    
  }
  
  else{
    document.getElementById("pre").disabled = false;
    document.getElementById("pre").style.cursor = "pointer";
    document.getElementById("pre").style.opacity = "1";

    document.getElementById("nxt").disabled = false;
    document.getElementById("nxt").style.cursor = "pointer";
    document.getElementById("nxt").style.opacity = "1";
    document.getElementById("nxt").classList.add("nxt_btn.");
    document.getElementById("nxt").classList.remove("submits");
    document.getElementById("nxt").innerHTML = "NEXT";
  }
  
}



const items = Array.from(document.getElementsByClassName("rounds"));


items.forEach( ( button, index ) =>
    {
        button.addEventListener("click", () =>{
            // let ans = this.document.getElementsByClassName('rounds')[index].value;
            document.getElementById("values").innerHTML = `${index}`;
            compare(index);
        });
    });

function loadqs(e){
  document.getElementById("quest").innerHTML = questions[e][0];
  document.getElementsByClassName('rounds')[0].innerHTML = questions[e][1];
  document.getElementsByClassName('rounds')[1].innerHTML = questions[e][2];
  document.getElementsByClassName('rounds')[2].innerHTML = questions[e][3];
}


function compare(e){
  reset();
  if(e == questions[count][4]){
    document.getElementsByClassName('rounds')[e].classList.add('correct');
    document.getElementsByClassName('rounds')[e].classList.remove('wrong');
  }
  else if(e != questions[count][4]){
    document.getElementsByClassName('rounds')[e].classList.add('wrong');
    document.getElementsByClassName('rounds')[e].classList.remove('correct');
  }
  
}













