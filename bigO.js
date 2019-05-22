const {performance} = require('perf_hooks');
const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

const large = new Array(1000).fill('nemo')

function findNemo(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'nemo'){
      console.log('Found Nemo!')
      break
    }
  }
}

// findNemo(large) // O(n)

const boxes = [0, 1, 2, 3, 4, 5]

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]) // O(1)
  console.log(boxes[1]) // O(1)
}

logFirstTwoBoxes(boxes) // O(2) ~> O(1)

const anotherFunction = () => {

}

function longFunc(input) {
  let a = 10 // O(1)
  a = 50 + 3 // O(1)

  for(let i = 0; i < input.length; i++){ // O(n)
    anotherFunction() // O(n)
    let stranger = true // O(n)
    a++ // O(n)
  }

  return a // O(1)
}

console.log(longFunc(nemo)) // O(3 + 4n) ~> O(n)

function anotherLongFunc(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

console.log(anotherLongFunc(nemo)) // O(4 + 7n) ~> O(n)

function uselessFunc(items) {
  console.log(items[0]) // O(1)

  var middleIndex = Math.floor(items.length / 2)
  var index = 0

  while(index < middleIndex){ // O(n/2)
    console.log(items[index])
    index++
  }

  for(var i = 0; i < 100; i++){ // O(100)
    console.log('hi')
  }
}

uselessFunc(nemo) // O(1 + n/2 + 100) ~> O(n)

function compressBoxesTwice(boxes, boxes2){
  boxes.forEach(box => { // O(n)
    console.log(box)
  })

  boxes2.forEach(box => { // O(m) different input size and input
    console.log(box)
  })
}

compressBoxesTwice(nemo, everyone) // O(n + m)

const numbers = [1, 2, 3, 4, 5]

function logAllPairs(numbers) {
  for(let i = 0; i < numbers.length; i++){ // O(n)
    for(let j = 0; j < numbers.length; j++){ // O(n)
      console.log(`${numbers[i]}, ${numbers[j]}`)
    }
  }
}

logAllPairs(numbers) // O(n * n) ~> O(n^2)

//---------- SPACE COMPLEXITY ----------//

function boo(n) {
  for(let i = 0; i < n.length; i++){ // O(1)
    console.log('boo')
  }
}

boo([1,2,3,4,5]) // O(1)

function arrayOfHi(n){
  let hiArray = [] // O(n)
  for(let i = 0; i < n; i++){ // O(1)
    hiArray[i] = 'hi' 
  }

  return hiArray
}

console.log(arrayOfHi(1000)) // O(n)