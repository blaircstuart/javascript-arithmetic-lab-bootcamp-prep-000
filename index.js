var a = Math.floor(Math.random() * 1000)
var b = Math.floor(Math.random() * 1000)

function add (a,b) {
 return a+=b
}

function subtract (a,b) {
  return a-=b
}

function multiply (a,b){
  return a*=b
}

function divide (a,b){
  return a/=b
}

function int(a){
  return a++
}

function dec(a){
  return a--
}

function makeInt(a){
  parseInt(a)
  return a
}

function preserveDecimal(a){
  parseFloat(a)
  return a
}