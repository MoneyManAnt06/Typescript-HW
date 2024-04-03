import {Utilities} from "./namespace/Utilities"
import {Models} from "./namespace/model"


Utilities.clamp(20, 5, 25)


const array = Utilities.shuffle([1,2,3,4,5])
console.log(array)

interface IUser {
    name: string;
    age: number;
} 

const model = new Models.Item<IUser>({
    age: 23, 
    name: "Anthony"
})

console.log(model)