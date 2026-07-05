function generateArray(){
    
    let container =
    document.getElementById("array-container");
    container.innerHTML ="";

    for(let i = 0; i< 30; i++){
        let value = Math.floor(Math.random()*300);

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;

        
        bar.innerText  = value;
        bar.style.color = "white";
        bar.style.fontSize = "10px";
        bar.style.textAlign = "center";
        container.appendChild(bar);
    }
}

async function bubbleSort(){
    document.getElementById("generate").disabled =true;
    document.getElementById("sort").disabled = true;

    let bars = document.querySelectorAll(".bar");
    for(let i = 0; i<bars.length; i++){
        for(let j=0; j<bars.length-i-1; j++){
            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j+1].style.height);
        bars[j].style.backgroundColor ="red";
        bars[j+1].style.backgroundColor ="red";
     let speed = document.getElementById("speed").value;
     await new Promise(resolve => setTimeout(resolve, speed));

     if(height1 > height2){
        bars[j].style.height = `${height2}px`;
        bars[j+1].style.height = `${height1}px`;

        let temp = bars[j].innerText;
    bars[j].innerText = bars[j+1].innerText;
    bars[j+1].innerText = temp;
    
    }
    bars[j].style.backgroundColor ="blue";
    bars[j+1].style.backgroundColor = "blue";

    
    

    }
     bars[bars.length - i - 1].style.backgroundColor = "green";
  
 
 }
  document.getElementById("generate").disabled=false;
    document.getElementById("sort").disabled=false;
}


async function selectionSort(){
    document.getElementById("generate").disabled = true;
    document.getElementById("sort").disabled = true;
    let bars=document.querySelectorAll(".bar");
    for(let i = 0; i<bars.length; i++){
        let minIndex = i;
        for( let j= i+1; j<bars.length; j++){
            let height1 = parseInt(bars[minIndex].style.height);
            let height2 = parseInt(bars[j].style.height)
            bars[minIndex].style.backgroundColor ="yellow";
            bars[j].style.backgroundColor = "red";
            let speed = document.getElementById("speed").value;
            await new Promise(resolve => setTimeout(resolve,speed));

            if(height2 < height1){
                minIndex = j;

            }
            bars[j].style.backgroundColor = "blue";
            if(minIndex!=i){
                bars[minIndex].style.backgroundColor="blue";
                
            }

        }
        if(minIndex != i){

                 let tempHeight = bars[i].style.height;
                 bars[i].style.height = bars[minIndex].style.height;
                 bars[minIndex].style.height = tempHeight;

                 let tempText = bars[i].innerText;
                  bars[i].innerText = bars[minIndex].innerText;
                  bars[minIndex].innerText = tempText;
                }
          bars[i].style.backgroundColor = "green";
    }

    document.getElementById("generate").disabled = false;
    document.getElementById("sort").disabled=false;
}
