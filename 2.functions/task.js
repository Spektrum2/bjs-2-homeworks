function getArrayParams(...arr) {
    // let min = arr[0];
    // let max = arr[0];
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < min) {
    //         min = arr[i];
    //     }
    //     if (arr[i] > max) {
    //         max = arr[i];
    //     }
    //     sum += arr[i];
    // }
    // let avg = +(sum / arr.length).toFixed(2);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let avg = +(sum / arr.length).toFixed(2);
    return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
    if (!arr.length) {
        return 0
    }
    return Math.abs(Math.min(...arr) - Math.max(...arr));
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
        }
    }
    return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
    if (!arr.length) {
        return 0
    }
    let sumEvenElement = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement.push(arr[i]);
        }
    }

    return sumEvenElement.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / sumEvenElement.length
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        let result = func(...arrOfArr[i]);
        if ( result > maxWorkerResult) {
            maxWorkerResult = result
        }
    }
    return maxWorkerResult;
}


