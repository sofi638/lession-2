
const name1 = "mike";
const name2 = "gela";

console.log(name1)
console.log(name2)

const num1 = 45
const num2 = -5

console.log(num1)
console.log(num2)

const num3 = 5 + 7

const num4 = 5 - 7
const num5 = 5 * 7
const num6 = 5 / 7

console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)

let age1 = 12

age1 = 13

console.log(age1)


let color1 = "red"

color1 = "black"
 
console.log(color1)

const s = "hello my name is sofi"

console.log(s)

// html/css  manipulation


const h2 = document.querySelector(".hello-h2");
console.log(h2)

h2.style.color = "red"
h2.style.backgroundColor = "pink"
h2.style.border = "2px solid green"
h2.style.padding = "20px"
h2.style.borderRadius = "20px"
h2.style.width = "300px"
h2.style.height = "200px"

h2.remove();



// დავალება

const btn1 = document.querySelector(".btn1")

btn1.style.padding = "20px"
btn1.style.backgroundColor = "red"
btn1.style.borderRadius = "10px"
btn1.style.border = "5px solid blue"
btn1.style.width = "100px"
btn1.style.height = "100px"

// დავალება 2

const input1 = document.querySelector(".input1")

input1.style.backgroundColor = "purple"
input1.style.border = "2px solid red"
input1.style.padding = "10px"
input1.style.width = "200px"
input1.style.height = "100px"

//  პარაგრაფის გაქრობა ღილაკზე დაჭერის შემდეგ


const removeBtn = document.querySelector(".remove-btn")

const removeP = document.querySelector(".remove-p")

console.log(removeBtn)
console.log(removeP)


removeBtn.addEventListener("click", () =>{

  console.log("Btn was clicked");
  const num = 1
   console.log(num)
   

})

removeBtn.addEventListener("click", ()=> { 

    removeP.remove()

})