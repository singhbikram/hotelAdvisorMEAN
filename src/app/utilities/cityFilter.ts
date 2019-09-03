import { Pipe } from '@angular/core';
@Pipe({ name: 'cityFilter' })
export class CityFilterPipe {
    transform(value, arg1, arg2) {
        console.log("args : ", arg1, arg2);
        if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
            console.log("arg1 and arg2 are undefined", arg1, arg2);
            return value;
        }else if(typeof arg1 === "undefined" && value){
            console.log("price is defined", arg1);
            return value.filter(item => Number(item.averagePrice) < arg2 );
        } else if (typeof arg2 === "undefined" && value) {
            console.log("city is defined : ", arg2);
            return value.filter(item => item.city == arg1 );
        }else if(typeof arg1 != "undefined" && typeof arg2 != "undefined" && value){
            console.log("price and city are defined", arg1, arg2);
            console.log(arg1 != null)
            return value.filter(item => Number(item.averagePrice) < arg2 && item.city == arg1);
        }
    }
}

// transform(value, arg1, arg2) {
//     console.log("args : ", arg1, arg2);
//     if (typeof arg2 === "undefined" || "") {
//         console.log("price is undefined", arg2);
//         return value;
//     }else if(value){
//         console.log("price is defined", arg2);
//         return value.filter(item => (item.averagePrice < arg2) );
//     } 
// }



// transform(value, arg1, arg2) {
//     console.log("args : ", arg1, arg2);
//     if (typeof arg1 === "undefined" || "") {
//         return value;
//     }else if(value){
//         console.log(value);
//         return value.filter(item => item.averagePrice < arg1 );
//     } 
// }