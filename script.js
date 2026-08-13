let comparisonCount = 0;
let swapCount = 0;

function generateArray(){
    
    let size=document.getElementById("size").value;
    document.getElementById("sizeValue").innerText=size;

    document.getElementById("totalElements").innerText = size;
    let container =
    document.getElementById("array-container");
    container.innerHTML ="";

    for(let i = 0; i< size; i++){
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
    let startTime = performance.now();
    document.getElementById("status").innerText="Sorting...";
    document.getElementById("generate").disabled =true;
    document.getElementById("sort").disabled = true;
    document.getElementById("size").disabled=true;
    document.getElementById("speed").disabled=true;

    let bars = document.querySelectorAll(".bar");
    comparisonCount = 0;
    swapCount = 0;

    document.getElementById("comparisons").innerText = comparisonCount;
    document.getElementById("swaps").innerText = swapCount;
    for(let i = 0; i<bars.length; i++){
        for(let j=0; j<bars.length-i-1; j++){
            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j+1].style.height);
        bars[j].style.backgroundColor ="red";
        bars[j+1].style.backgroundColor ="red";
     let speed = document.getElementById("speed").value;
     await new Promise(resolve => setTimeout(resolve, speed));

     comparisonCount++;
     document.getElementById("comparisons").innerText = comparisonCount;

     if(height1 > height2){
        bars[j].style.height = `${height2}px`;
        bars[j+1].style.height = `${height1}px`;

        let temp = bars[j].innerText;
    bars[j].innerText = bars[j+1].innerText;
    bars[j+1].innerText = temp;
    swapCount++;
    document.getElementById("swaps").innerText = swapCount;
    
    }
    bars[j].style.backgroundColor ="blue";
    bars[j+1].style.backgroundColor = "blue";

    
    

    }
     bars[bars.length - i - 1].style.backgroundColor = "green";
  
 
 }
    document.getElementById("generate").disabled=false;
    document.getElementById("sort").disabled=false;
    document.getElementById("status").innerText="Completed";
    document.getElementById("size").disabled=false;
    document.getElementById("speed").disabled=false;
    let endTime = performance.now();
    document.getElementById("time").innerText =
    (endTime - startTime).toFixed(2) + " ms";
}


async function selectionSort(){
    let startTime = performance.now();
    document.getElementById("status").innerText="Sorting...";
    document.getElementById("generate").disabled = true;
    document.getElementById("sort").disabled = true;
    document.getElementById("size").disabled=true;
    document.getElementById("speed").disabled=true;

    let bars=document.querySelectorAll(".bar");
    comparisonCount = 0;
    swapCount = 0;

    document.getElementById("comparisons").innerText = comparisonCount;
    document.getElementById("swaps").innerText = swapCount;   
    for(let i = 0; i<bars.length; i++){
        let minIndex = i;
        for( let j= i+1; j<bars.length; j++){
            let height1 = parseInt(bars[minIndex].style.height);
            let height2 = parseInt(bars[j].style.height)
            bars[minIndex].style.backgroundColor ="yellow";
            bars[j].style.backgroundColor = "red";
            let speed = document.getElementById("speed").value;
            await new Promise(resolve => setTimeout(resolve,speed));

            comparisonCount++;
            document.getElementById("comparisons").innerText = comparisonCount;    

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
                swapCount++;
                document.getElementById("swaps").innerText = swapCount;  
          bars[i].style.backgroundColor = "green";
    }

    document.getElementById("generate").disabled = false;
    document.getElementById("sort").disabled=false;
    document.getElementById("status").innerText="Completed";
    document.getElementById("size").disabled=false;
    document.getElementById("speed").disabled=false;
    let endTime = performance.now();
    document.getElementById("time").innerText =
    (endTime - startTime).toFixed(2) + " ms";
}

async function insertionSort(){
    let startTime = performance.now();
    document.getElementById("status").innerText="Sorting...";
    document.getElementById("generate").disabled = true;
    document.getElementById("sort").disabled = true;
    document.getElementById("size").disabled=true;
    document.getElementById("speed").disabled=true;

    let bars = document.querySelectorAll(".bar");
    comparisonCount = 0;
    swapCount = 0;

    document.getElementById("comparisons").innerText = comparisonCount;
    document.getElementById("swaps").innerText = swapCount;
    for(let i = 1; i <bars.length; i++){
        let keyHeight = bars[i].style.height;
        let keyText = bars[i].innerText;
        let j = i-1;
        while(
            j>=0 &&
             parseInt(bars[j].style.height) >
             parseInt(keyHeight)
        ){
            comparisonCount++;
            document.getElementById("comparisons").innerText = comparisonCount;
            bars[j+1].style.height = bars[j].style.height;
            bars[j+1].innerText = bars[j].innerText;

            swapCount++;
            document.getElementById("swaps").innerText = swapCount;


            j-- ;
        }
        bars[j+1].style.height = keyHeight;
        bars[j+1].innerText = keyText;
        if (j >= 0) {
    bars[j].style.backgroundColor = "red";
}

    bars[j + 1].style.backgroundColor = "yellow";

    let speed = document.getElementById("speed").value;
    await new Promise(resolve => setTimeout(resolve, speed));

     if (j >= 0) {
    bars[j].style.backgroundColor = "blue";
   }

      for (let k = 0; k <= i; k++) {
    bars[k].style.backgroundColor = "green";
}
        
    }
    document.getElementById("generate").disabled = false;
    document.getElementById("sort").disabled = false;
    document.getElementById("status").innerText="Completed";
    document.getElementById("size").disabled=false;
    document.getElementById("speed").disabled=false;
    let endTime = performance.now();
    document.getElementById("time").innerText =
    (endTime - startTime).toFixed(2) + " ms";
}
async function mergeSort(){
    let startTime = performance.now();
    document.getElementById("status").innerText="Sorting...";
    document.getElementById("generate").disabled = true;
    document.getElementById("sort").disabled = true;
    document.getElementById("size").disabled=true;
    document.getElementById("speed").disabled=true;

    comparisonCount = 0;
    swapCount = 0;

    document.getElementById("comparisons").innerText = comparisonCount;
    document.getElementById("swaps").innerText = swapCount;

    let bars = document.querySelectorAll(".bar");
    await merge(bars,0,bars.length-1);
    bars.forEach(bar=>{
    bar.style.backgroundColor="green";
});

     document.getElementById("generate").disabled = false;
     document.getElementById("sort").disabled = false;
     
    bars.forEach(bar=>{
        bar.style.backgroundColor="green"
    });
    let endTime = performance.now();
    document.getElementById("time").innerText =
    (endTime - startTime).toFixed(2) + " ms"
}
async function merge(bars,left,right){
    if(left>=right){
        return;
    }
    let mid = Math.floor((left +right)/2);
    await merge(bars, left,mid);
    await merge(bars, mid+1, right);
    await mergeArrays(bars,left, mid, right);
    
}
async function mergeArrays(bars, left,mid,right){
    let leftArray =[];
    let rightArray =[];
    for(let i = left; i<=mid; i++){
        leftArray.push(parseInt(bars[i].style.height));
        
    }
    for(let i = mid +1; i<=right; i++){
            rightArray.push(parseInt(bars[i].style.height));
        }
    let i = 0;
    let j = 0;
    let k = left;
  while(i<leftArray.length && j< rightArray.length){
    comparisonCount++;
    document.getElementById("comparisons").innerText = comparisonCount;
    if(leftArray[i]<= rightArray[j]){
        bars[k].style.height =`${leftArray[i]}px`;
        bars[k].innerText =leftArray[i];
        i++;
        k++;
      
    }
    else{ bars[k].style.height=`${rightArray[j]}px`;
    bars[k].innerText = rightArray[j];
    swapCount++;
    document.getElementById("swaps").innerText = swapCount; 
    j++;
    k++;
   }
  }
  while(i<leftArray.length){
    comparisonCount++;
    document.getElementById("comparisons").innerText = comparisonCount;
     bars[k].style.height=`${leftArray[i]}px`;
     bars[k].innerText = leftArray[i];
     swapCount++;
     document.getElementById("swaps").innerText = swapCount;
     i++;
     k++;
  }
  while(j<rightArray.length){
    comparisonCount++;
    document.getElementById("comparisons").innerText = comparisonCount;
    bars[k].style.height=`${rightArray[j]}px`;
    bars[k].innerText=rightArray[j];
    swapCount++;
    document.getElementById("swaps").innerText = swapCount;
    j++;
    k++;
  }
  let speed = document.getElementById("speed").value;
  await new Promise(resolve=>setTimeout(resolve,speed));

  
  
}

async function quickSort(){
    let startTime = performance.now();
    document.getElementById("status").innerText="Sorting...";
    document.getElementById("generate").disabled =true;
    document.getElementById("sort").disabled = true;
    document.getElementById("size").disabled=true;
    document.getElementById("speed").disabled=true;

    let bars = document.querySelectorAll(".bar");
    comparisonCount = 0;
    swapCount = 0;

    document.getElementById("comparisons").innerText = comparisonCount;
    document.getElementById("swaps").innerText = swapCount;
    await quick(bars,0,bars.length-1);
    bars.forEach(bar=>{
        bar.style.backgroundColor ="green";
    });
    document.getElementById("generate").disabled = false;
    document.getElementById("sort").disabled =false;
    document.getElementById("status").innerText="Completed";
    document.getElementById("size").disabled=false;
    document.getElementById("speed").disabled=false;
    let endTime = performance.now();
    document.getElementById("time").innerText =
    (endTime - startTime).toFixed(2) + " ms";

}

async function quick(bars, low,high){
    if(low<high){
        let pivotIndex = await partition(bars, low, high);
        await quick(bars,low,pivotIndex-1);
        await quick(bars, pivotIndex+1, high);
    }
}

async function partition(bars, low, high) {
    let pivot = parseInt(bars[high].style.height);
    let i = low - 1;

    for (let j = low; j < high; j++) {
        comparisonCount++;
        document.getElementById("comparisons").innerText = comparisonCount;

        if (parseInt(bars[j].style.height) < pivot) {
            i++;

            let tempHeight = bars[i].style.height;
            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = tempHeight;

            let tempText = bars[i].innerText;
            bars[i].innerText = bars[j].innerText;
            bars[j].innerText = tempText;
            swapCount++;
            document.getElementById("swaps").innerText = swapCount;
        }

        let speed = document.getElementById("speed").value;

        bars[j].style.backgroundColor = "red";
        bars[high].style.backgroundColor = "yellow";

        await new Promise(resolve => setTimeout(resolve, speed));

        bars[j].style.backgroundColor = "blue";
        bars[high].style.backgroundColor = "blue";
    }

    let tempHeight = bars[i + 1].style.height;
    bars[i + 1].style.height = bars[high].style.height;
    bars[high].style.height = tempHeight;

    let tempText = bars[i + 1].innerText;
    bars[i + 1].innerText = bars[high].innerText;
    bars[high].innerText = tempText;
    swapCount++;
    document.getElementById("swaps").innerText = swapCount;

    return i + 1;
    
}

function updateAlgorithmInfo(){
    let algorithm = document.getElementById("algorithm").value;
    if(algorithm == "bubble"){
        document.getElementById("algoName").innerText = "Bubble Sort";
        document.getElementById("best").innerText ="O(n)";
        document.getElementById("average").innerText="O(n²)";
        document.getElementById("worst").innerText="O(n²)";
        document.getElementById("space").innerText="O(1)";
        document.getElementById("description").innerText= "Bubble Sort repeatedly compares adjacent elements and swaps them if needed";

    }
    else if(algorithm == "selection"){
        document.getElementById("algoName").innerText = "Selection Sort";
        document.getElementById("best").innerText ="O(n²)";
        document.getElementById("average").innerText="O(n²)";
        document.getElementById("worst").innerText="O(n²)";
        document.getElementById("space").innerText="O(1)";
        document.getElementById("description").innerText= "Selection Sort repeatedly selects the smallest element and place it at the beginning.";
    }
    else if(algorithm == "insertion"){
        document.getElementById("algoName").innerText = "Insertion Sort";
        document.getElementById("best").innerText ="O(n)";
        document.getElementById("average").innerText="O(n²)";
        document.getElementById("worst").innerText="O(n²)";
        document.getElementById("space").innerText="O(1)";
        document.getElementById("description").innerText= "Insertion Sort inserts each element into its correct position in the sorted part.";
    }
     else if(algorithm == "merge"){
        document.getElementById("algoName").innerText = "Merge Sort";
        document.getElementById("best").innerText ="O(n log n)";
        document.getElementById("average").innerText="O(n log n)";
        document.getElementById("worst").innerText="O(n log n)";
        document.getElementById("space").innerText="O(n)";
        document.getElementById("description").innerText= "Merge Sort uses divide and conquer to sort the array.";
    }
     else if(algorithm == "quick"){
        document.getElementById("algoName").innerText = "Quick Sort";
        document.getElementById("best").innerText ="O(n log n)";
        document.getElementById("average").innerText="O(n log n)";
        document.getElementById("worst").innerText="O(n²)";
        document.getElementById("space").innerText="O(log n)";
        document.getElementById("description").innerText= "Quick Sort Selects a pivot and partitions the array around it";
     }
    else if (algorithm == "linear") {
    document.getElementById("algoName").innerText = "Linear Search";
    document.getElementById("best").innerText = "O(1)";
    document.getElementById("average").innerText = "O(n)";
    document.getElementById("worst").innerText = "O(n)";
    document.getElementById("space").innerText = "O(1)";
    document.getElementById("description").innerText =
        "Linear Search checks each element one by one until the target is found.";
   }
   else if (algorithm == "binary") {
    document.getElementById("algoName").innerText = "Binary Search";
    document.getElementById("best").innerText = "O(1)";
    document.getElementById("average").innerText = "O(log n)";
    document.getElementById("worst").innerText = "O(log n)";
    document.getElementById("space").innerText = "O(1)";
    document.getElementById("description").innerText =
        "Binary Search repeatedly divides a sorted array into halves to find the target.";
   }

}


function startSorting(){
    let algorithm = document.getElementById("algorithm").value;
    if(algorithm == "bubble"){
        bubbleSort();
    }
        else if(algorithm=="selection"){
            selectionSort();
        }
      else if(algorithm == "insertion"){
        insertionSort();
      }
      else if(algorithm == "merge"){
            mergeSort();
      }
      else if(algorithm == "quick"){
        quickSort();
      }
      
}
updateAlgorithmInfo();

function startSearch(){
    let value =parseInt(document.getElementById("searchValue").value);
    if(isNaN(value)){
        alert("Please enter a number.");
        return;
    }
    linearSearch(value);
}
async function linearSearch(target) {
    document.getElementById("generate").disabled = true;
    document.getElementById("sort").disabled = true;
    document.getElementById("search").disabled = true;
    document.getElementById("size").disabled = true;
    document.getElementById("speed").disabled = true;
    let bars = document.querySelectorAll(".bar");

    document.getElementById("status").innerText = "Searching...";

    for (let i = 0; i < bars.length; i++) {

        bars[i].style.backgroundColor = "red";

        let speed = document.getElementById("speed").value;
        await new Promise(resolve => setTimeout(resolve, speed));

       if (parseInt(bars[i].innerText) === target) {

    bars[i].style.backgroundColor = "green";
    document.getElementById("status").innerText = "Element Found";

    // Re-enable controls
    document.getElementById("generate").disabled = false;
    document.getElementById("sort").disabled = false;
    document.getElementById("search").disabled = false;
    document.getElementById("size").disabled = false;
    document.getElementById("speed").disabled = false;

    return;
 }
    }

    document.getElementById("status").innerText = "Element Not Found";
    document.getElementById("generate").disabled = false;
    document.getElementById("sort").disabled = false;
    document.getElementById("search").disabled = false;
    document.getElementById("size").disabled = false;
    document.getElementById("speed").disabled = false;  
}

function toggleTheme(){
    document.body.classList.contains("dark-mode");
    let button = document.getElementById("theme");
    if(document.body.classList.contains("dark-mode")){
        button.innerText ="☀️Light Mode";
        localStorage.setltem("theme","dark");
    }
    else{
        button.innerText ="🌙Dark mode";
        localStorage.setltem("theme","light");
    }
}

window.onload = function (){
    generateArray();
    updateAlgorithmInfo;
    if(localStorage.getItem("theme")==="dark"){
        document.body.classList.add(dark-mode);
        document.getEelement("theme").innerText="☀️Light Mode";
    }
};