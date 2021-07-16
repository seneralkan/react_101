import slugify from 'slugify';
// export default olarak tanimladigimizda 
//import topla from './topla.js'
import {hello, topla, user} from './topla.js';
const name = slugify('lorem ipsum sener alkan', '_') // some-string

console.log(name)
console.log(topla(5,3))
console.log(hello)
console.log(user)