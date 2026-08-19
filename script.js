let comparisonCount = 0;
let swapCount = 0;
let paused = false;

async function waitIfPaused() {

    while (paused) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

}
function togglePause() {

    paused = !paused;

    let pauseButton = document.getElementById("pause");

    if (paused) {
        pauseButton.innerText = "▶️ Resume";
    } else {
        pauseButton.innerText = "⏸️ Pause";
    }

}

function getSpeed() {
    return Number(document.getElementById("speed").value);
}

function delay() {
    return new Promise(resolve => setTimeout(resolve, getSpeed()));
}

function updateCounters() {
    document.getElementById("comparisons").innerText = comparisonCount;
    document.getElementById("swaps").innerText = swapCount;
}

function resetBarColors() {
    document.querySelectorAll(".bar").forEach(bar => {
        bar.style.backgroundColor = "blue";
    });
}

function setControlsDisabled(disabled) {
    document.getElementById("generate").disabled = disabled;
    document.getElementById("sort").disabled = disabled;
    document.getElementById("size").disabled = disabled;
    document.getElementById("speed").disabled = disabled;

    const searchButton = document.getElementById("search");

    if (searchButton) {
        searchButton.disabled = disabled;
    }
}

function generateArray() {

    let size = Number(document.getElementById("size").value);

    document.getElementById("sizeValue").innerText = size;
    document.getElementById("totalElements").innerText = size;

    let container = document.getElementById("array-container");

    container.innerHTML = "";

    for (let i = 0; i < size; i++) {

        let value = Math.floor(Math.random() * 300);

        let bar = document.createElement("div");

        bar.classList.add("bar");

        bar.style.height = `${value}px`;

        bar.innerText = value;

        bar.style.color = "white";

        bar.style.fontSize = "10px";

        bar.style.textAlign = "center";

        container.appendChild(bar);
    }

    comparisonCount = 0;
    swapCount = 0;

    updateCounters();

    document.getElementById("status").innerText = "Ready";
}
async function bubbleSort() {

    let startTime = performance.now();

    document.getElementById("status").innerText = "Sorting...";

    setControlsDisabled(true);

    let bars = document.querySelectorAll(".bar");

    comparisonCount = 0;
    swapCount = 0;

    updateCounters();

    for (let i = 0; i < bars.length; i++) {
        await waitIfPaused();
    
        for (let j = 0; j < bars.length - i - 1; j++) {
             await waitIfPaused();

            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j + 1].style.height);

            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await delay();

            comparisonCount++;
            updateCounters();

            if (height1 > height2) {

                bars[j].style.height = `${height2}px`;
                bars[j + 1].style.height = `${height1}px`;

                let temp = bars[j].innerText;

                bars[j].innerText = bars[j + 1].innerText;
                bars[j + 1].innerText = temp;

                swapCount++;

                updateCounters();
            }

            bars[j].style.backgroundColor = "blue";
            bars[j + 1].style.backgroundColor = "blue";
        }

        bars[bars.length - i - 1].style.backgroundColor = "green";
    }

    bars.forEach(bar => {
        bar.style.backgroundColor = "green";
    });

    finishSorting(startTime);
}


async function selectionSort() {

    let startTime = performance.now();

    document.getElementById("status").innerText = "Sorting...";

    setControlsDisabled(true);

    let bars = document.querySelectorAll(".bar");

    comparisonCount = 0;
    swapCount = 0;

    updateCounters();

    for (let i = 0; i < bars.length; i++) {
        await waitIfPaused();

        let minIndex = i;

        bars[i].style.backgroundColor = "yellow";

        for (let j = i + 1; j < bars.length; j++) {
            await waitIfPaused();

            let height1 = parseInt(bars[minIndex].style.height);
            let height2 = parseInt(bars[j].style.height);

            bars[j].style.backgroundColor = "red";

            await delay();

            comparisonCount++;

            updateCounters();

            if (height2 < height1) {

                bars[minIndex].style.backgroundColor = "blue";

                minIndex = j;

                bars[minIndex].style.backgroundColor = "yellow";
            }
            else {
                bars[j].style.backgroundColor = "blue";
            }
        }

        if (minIndex !== i) {

            let tempHeight = bars[i].style.height;

            bars[i].style.height = bars[minIndex].style.height;

            bars[minIndex].style.height = tempHeight;


            let tempText = bars[i].innerText;

            bars[i].innerText = bars[minIndex].innerText;

            bars[minIndex].innerText = tempText;

            swapCount++;

            updateCounters();
        }

        bars[i].style.backgroundColor = "green";

        if (minIndex !== i) {
            bars[minIndex].style.backgroundColor = "blue";
        }
    }

    bars.forEach(bar => {
        bar.style.backgroundColor = "green";
    });

    finishSorting(startTime);
}


async function insertionSort() {

    let startTime = performance.now();

    document.getElementById("status").innerText = "Sorting...";

    setControlsDisabled(true);

    let bars = document.querySelectorAll(".bar");

    comparisonCount = 0;
    swapCount = 0;

    updateCounters();

    for (let i = 1; i < bars.length; i++) {
        await waitIfPaused();

        let keyHeight = bars[i].style.height;

        let keyText = bars[i].innerText;

        let j = i - 1;

        bars[i].style.backgroundColor = "yellow";

        while (j >= 0) {
            await waitIfPaused();

            comparisonCount++;

            updateCounters();

            bars[j].style.backgroundColor = "red";

            await delay();

            if (
                parseInt(bars[j].style.height) <=
                parseInt(keyHeight)
            ) {

                bars[j].style.backgroundColor = "green";

                break;
            }

            bars[j + 1].style.height =
                bars[j].style.height;

            bars[j + 1].innerText =
                bars[j].innerText;

            swapCount++;

            updateCounters();

            bars[j].style.backgroundColor = "blue";

            j--;
        }

        bars[j + 1].style.height = keyHeight;

        bars[j + 1].innerText = keyText;

        for (let k = 0; k <= i; k++) {

            bars[k].style.backgroundColor = "green";
        }
    }

    bars.forEach(bar => {
        bar.style.backgroundColor = "green";
    });

    finishSorting(startTime);
}


async function mergeSort() {

    let startTime = performance.now();

    document.getElementById("status").innerText = "Sorting...";

    setControlsDisabled(true);

    comparisonCount = 0;
    swapCount = 0;

    updateCounters();

    let bars = document.querySelectorAll(".bar");

    await merge(
        bars,
        0,
        bars.length - 1
    );

    bars.forEach(bar => {
        bar.style.backgroundColor = "green";
    });

    finishSorting(startTime);
}


async function merge(bars, left, right) {

    if (left >= right) {
        return;
    }
        await waitIfPaused();

    let mid = Math.floor(
        (left + right) / 2
    );

    await merge(
        bars,
        left,
        mid
    );
        await waitIfPaused();

    await merge(
        bars,
        mid + 1,
        right
    );
        await waitIfPaused();

    await mergeArrays(
        bars,
        left,
        mid,
        right
    );
}


async function mergeArrays(
    bars,
    left,
    mid,
    right
) {

    let leftArray = [];

    let rightArray = [];


    for (let i = left; i <= mid; i++) {

        leftArray.push(
            parseInt(bars[i].style.height)
        );
    }


    for (
        let i = mid + 1;
        i <= right;
        i++
    ) {

        rightArray.push(
            parseInt(bars[i].style.height)
        );
    }


    let i = 0;

    let j = 0;

    let k = left;


    while (
        i < leftArray.length &&
        j < rightArray.length
    ) {
            await waitIfPaused();


        comparisonCount++;

        updateCounters();


        if (
            leftArray[i] <=
            rightArray[j]
        ) {

            bars[k].style.height =
                `${leftArray[i]}px`;

            bars[k].innerText =
                leftArray[i];

            i++;
        }
        else {

            bars[k].style.height =
                `${rightArray[j]}px`;

            bars[k].innerText =
                rightArray[j];

            j++;
        }

        bars[k].style.backgroundColor = "red";

        k++;

        await delay();
    }


    while (i < leftArray.length) {
            await waitIfPaused();


        bars[k].style.height =
            `${leftArray[i]}px`;

        bars[k].innerText =
            leftArray[i];

        i++;

        k++;

        swapCount++;

        updateCounters();
    }


    while (j < rightArray.length) {
            await waitIfPaused();


        bars[k].style.height =
            `${rightArray[j]}px`;

        bars[k].innerText =
            rightArray[j];

        j++;

        k++;

        swapCount++;

        updateCounters();
    }


    for (
        let index = left;
        index <= right;
        index++
    ) {

        bars[index].style.backgroundColor =
            "blue";
    }
}


async function quickSort() {

    let startTime = performance.now();

    document.getElementById("status").innerText =
        "Sorting...";

    setControlsDisabled(true);

    let bars = document.querySelectorAll(".bar");

    comparisonCount = 0;

    swapCount = 0;

    updateCounters();


    await quick(
        bars,
        0,
        bars.length - 1
    );


    bars.forEach(bar => {

        bar.style.backgroundColor =
            "green";
    });


    finishSorting(startTime);
}


async function quick(
    bars,
    low,
    high
) {

    if (low < high) {

        let pivotIndex =
            await partition(
                bars,
                low,
                high
            );
             await waitIfPaused();

        await quick(
            bars,
            low,
            pivotIndex - 1
        );
        await waitIfPaused();

        await quick(
            bars,
            pivotIndex + 1,
            high
        );
    }
}


async function partition(
    bars,
    low,
    high
) {

    let pivot =
        parseInt(
            bars[high].style.height
        );

    let i = low - 1;

    bars[high].style.backgroundColor =
        "yellow";


    for (
        let j = low;
        j < high;
        j++
    ) {
        await waitIfPaused();
        comparisonCount++;

        updateCounters();

        bars[j].style.backgroundColor =
            "red";

        await delay();


        if (
            parseInt(
                bars[j].style.height
            ) < pivot
        ) {

            i++;


            if (i !== j) {

                let tempHeight =
                    bars[i].style.height;

                bars[i].style.height =
                    bars[j].style.height;

                bars[j].style.height =
                    tempHeight;


                let tempText =
                    bars[i].innerText;

                bars[i].innerText =
                    bars[j].innerText;

                bars[j].innerText =
                    tempText;


                swapCount++;

                updateCounters();
            }
        }


        bars[j].style.backgroundColor =
            "blue";
    }


    if (i + 1 !== high) {

        let tempHeight =
            bars[i + 1].style.height;

        bars[i + 1].style.height =
            bars[high].style.height;

        bars[high].style.height =
            tempHeight;


        let tempText =
            bars[i + 1].innerText;

        bars[i + 1].innerText =
            bars[high].innerText;

        bars[high].innerText =
            tempText;


        swapCount++;

        updateCounters();
    }


    bars[high].style.backgroundColor =
        "blue";

    bars[i + 1].style.backgroundColor =
        "green";


    return i + 1;
}
function updateAlgorithmInfo() {

    let algorithm =
        document.getElementById("algorithm").value;


    if (algorithm === "bubble") {

        document.getElementById("algoName").innerText =
            "Bubble Sort";

        document.getElementById("best").innerText =
            "O(n)";

        document.getElementById("average").innerText =
            "O(n²)";

        document.getElementById("worst").innerText =
            "O(n²)";

        document.getElementById("space").innerText =
            "O(1)";

        document.getElementById("description").innerText =
            "Bubble Sort repeatedly compares adjacent elements and swaps them if needed.";
    }


    else if (algorithm === "selection") {

        document.getElementById("algoName").innerText =
            "Selection Sort";

        document.getElementById("best").innerText =
            "O(n²)";

        document.getElementById("average").innerText =
            "O(n²)";

        document.getElementById("worst").innerText =
            "O(n²)";

        document.getElementById("space").innerText =
            "O(1)";

        document.getElementById("description").innerText =
            "Selection Sort repeatedly selects the smallest element and places it at the beginning.";
    }


    else if (algorithm === "insertion") {

        document.getElementById("algoName").innerText =
            "Insertion Sort";

        document.getElementById("best").innerText =
            "O(n)";

        document.getElementById("average").innerText =
            "O(n²)";

        document.getElementById("worst").innerText =
            "O(n²)";

        document.getElementById("space").innerText =
            "O(1)";

        document.getElementById("description").innerText =
            "Insertion Sort inserts each element into its correct position in the sorted part.";
    }


    else if (algorithm === "merge") {

        document.getElementById("algoName").innerText =
            "Merge Sort";

        document.getElementById("best").innerText =
            "O(n log n)";

        document.getElementById("average").innerText =
            "O(n log n)";

        document.getElementById("worst").innerText =
            "O(n log n)";

        document.getElementById("space").innerText =
            "O(n)";

        document.getElementById("description").innerText =
            "Merge Sort uses divide and conquer to sort the array.";
    }


    else if (algorithm === "quick") {

        document.getElementById("algoName").innerText =
            "Quick Sort";

        document.getElementById("best").innerText =
            "O(n log n)";

        document.getElementById("average").innerText =
            "O(n log n)";

        document.getElementById("worst").innerText =
            "O(n²)";

        document.getElementById("space").innerText =
            "O(log n)";

        document.getElementById("description").innerText =
            "Quick Sort selects a pivot and partitions the array around it.";
    }


    else if (algorithm === "linear") {

        document.getElementById("algoName").innerText =
            "Linear Search";

        document.getElementById("best").innerText =
            "O(1)";

        document.getElementById("average").innerText =
            "O(n)";

        document.getElementById("worst").innerText =
            "O(n)";

        document.getElementById("space").innerText =
            "O(1)";

        document.getElementById("description").innerText =
            "Linear Search checks each element one by one until the target is found.";
    }


    else if (algorithm === "binary") {

        document.getElementById("algoName").innerText =
            "Binary Search";

        document.getElementById("best").innerText =
            "O(1)";

        document.getElementById("average").innerText =
            "O(log n)";

        document.getElementById("worst").innerText =
            "O(log n)";

        document.getElementById("space").innerText =
            "O(1)";

        document.getElementById("description").innerText =
            "Binary Search repeatedly divides a sorted array into halves to find the target.";
    }
}


async function startSorting(){

    paused = false;

    let pauseButton = document.getElementById("pause");
    pauseButton.disabled = false;
    pauseButton.innerText = "⏸️ Pause";

    let algorithm = document.getElementById("algorithm").value;

    if(algorithm == "bubble"){
        await bubbleSort();
    }
    else if(algorithm == "selection"){
        await selectionSort();
    }
    else if(algorithm == "insertion"){
        await insertionSort();
    }
    else if(algorithm == "merge"){
        await mergeSort();
    }
    else if(algorithm == "quick"){
        await quickSort();
    }

    pauseButton.disabled = true;
    pauseButton.innerText = "⏸️ Pause";
    paused = false;
}


function startSearch() {

    let value =
        parseInt(
            document.getElementById("searchValue").value
        );


    if (isNaN(value)) {

        alert("Please enter a number.");

        return;
    }


    let algorithm =
        document.getElementById("algorithm").value;


    if (algorithm === "binary") {

        binarySearch(value);

    }

    else {

        linearSearch(value);
    }
}



async function linearSearch(target) {

    let bars =
        document.querySelectorAll(".bar");


    setControlsDisabled(true);


    document.getElementById("status").innerText =
        "Searching...";


    resetBarColors();


    for (
        let i = 0;
        i < bars.length;
        i++
    ) {

        bars[i].style.backgroundColor =
            "red";


        await delay();


        if (
            parseInt(bars[i].innerText) ===
            target
        ) {

            bars[i].style.backgroundColor =
                "green";


            document.getElementById("status").innerText =
                "Element Found";


            enableSearchControls();

            return;
        }


        bars[i].style.backgroundColor =
            "blue";
    }


    document.getElementById("status").innerText =
        "Element Not Found";


    enableSearchControls();
}



async function binarySearch(target) {

    let bars =
        document.querySelectorAll(".bar");


    /*
       Binary Search only works
       on a sorted array.
    */

    for (
        let i = 1;
        i < bars.length;
        i++
    ) {

        if (
            parseInt(bars[i - 1].innerText) >
            parseInt(bars[i].innerText)
        ) {

            document.getElementById("status").innerText =
                "Sort the array first for Binary Search";

            return;
        }
    }


    setControlsDisabled(true);


    document.getElementById("status").innerText =
        "Searching...";


    resetBarColors();


    let left = 0;

    let right = bars.length - 1;


    while (left <= right) {

        let mid =
            Math.floor(
                (left + right) / 2
            );


        bars[mid].style.backgroundColor =
            "red";


        await delay();


        let value =
            parseInt(
                bars[mid].innerText
            );


        if (value === target) {

            bars[mid].style.backgroundColor =
                "green";


            document.getElementById("status").innerText =
                "Element Found";


            enableSearchControls();

            return;
        }


        bars[mid].style.backgroundColor =
            "blue";


        if (value < target) {

            left = mid + 1;

        }

        else {

            right = mid - 1;
        }
    }


    document.getElementById("status").innerText =
        "Element Not Found";


    enableSearchControls();
}



function enableSearchControls() {

    document.getElementById("generate").disabled =
        false;

    document.getElementById("sort").disabled =
        false;

    document.getElementById("search").disabled =
        false;

    document.getElementById("size").disabled =
        false;

    document.getElementById("speed").disabled =
        false;
}



function finishSorting(startTime) {

    document.getElementById("generate").disabled =
        false;

    document.getElementById("sort").disabled =
        false;

    document.getElementById("size").disabled =
        false;

    document.getElementById("speed").disabled =
        false;


    const searchButton =
        document.getElementById("search");


    if (searchButton) {

        searchButton.disabled =
            false;
    }


    document.getElementById("status").innerText =
        "Completed";


    let endTime =
        performance.now();


    document.getElementById("time").innerText =
        (endTime - startTime).toFixed(2) +
        " ms";
}



function toggleTheme() {

    const isDark =
        document.body.classList.toggle(
            "dark-mode"
        );


    let button =
        document.getElementById("theme");


    if (isDark) {

        button.innerText =
            "☀️ Light Mode";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

    else {

        button.innerText =
            "🌙 Dark Mode";

        localStorage.setItem(
            "theme",
            "light"
        );
    }
}



window.onload = function () {

    generateArray();

    updateAlgorithmInfo();


    if (
        localStorage.getItem("theme") ===
        "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

        document.getElementById("theme").innerText =
            "☀️ Light Mode";

    }

    else {

        document.getElementById("theme").innerText =
            "🌙 Dark Mode";
    }
};