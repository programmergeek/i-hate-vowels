//get elements
const button = document.getElementById("btn")
const input = document.querySelector("input")
const output = document.querySelector(".output")

//variables and constants
var outputValue = ""
const vowels = /a|e|i|o|u/

//adds input
input.addEventListener("change", (e)=> {
    input.textContent = e.target.value
})

//remove vowels
button.addEventListener("click", function(){
    outputValue = ""
    for(let i = 0; i < input.value.length; i++){
        if(vowels.test(input.value[i]) === false){
            outputValue += input.value[i]
        }
    }
    output.textContent = outputValue
})