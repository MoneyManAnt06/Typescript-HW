const numberList: number[] = [1, 2, 3, 4, 5];

const addedArray = (numberList: number[]): number => {

    let arraySum = 0;
    
    for (let i = 0; i < numberList.length; i++){
        arraySum += numberList[i];
    }

    return(arraySum)
}

console.log(addedArray(numberList))