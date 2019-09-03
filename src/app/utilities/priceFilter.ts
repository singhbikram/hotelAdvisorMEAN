import { Pipe } from '@angular/core';
@Pipe({ name: 'priceFilter' })
export class PriceFilterPipe {
    transform(value, args) {
        if (typeof args === "undefined" || args == "Max Price") {
            return value;
        } else if (value) {
            return value.filter(item => {
                for (let key in item) {
                    console.log("item[key]" + item[key]);
                    if (item[key].price < args[0]) {
                        return true;
                    }
                }
            });
        }
    }
}