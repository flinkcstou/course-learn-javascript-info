import {main} from './main.js'
import defaultJs from './default-js.js'
import {sayHi} from './sayHi.js'

export {main, defaultJs, sayHi}


let dynamicImoprtFile = './dynamic-import.js'
if(true){
  await import(dynamicImoprtFile).then((x) => x.dynamicImport())
}
console.error('index.js')

