export namespace Utilities {
    export function clamp(maxLimit: number, minLimit: number, num: number) {
       if(num < maxLimit && num > minLimit){
        console.log("The number is valid", num)
      } else {
       console.log("The number is not valid", num)
      }
    }

    export function shuffle(array: number[]) {
      for( let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      }
      return array; 
    }
 }

