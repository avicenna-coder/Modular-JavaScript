import {sayMyColor, sayMybrand} from "./color.js";
import {sayMyCountry as ajibola, sayMyState as avicenna} from "./country.js";
import sayMyFood from "./food.js";

let color = sayMyColor()
let brand = sayMybrand()
let country = ajibola()
let state = avicenna()
let food = sayMyFood()
console.log(color, country, state, food, brand)
