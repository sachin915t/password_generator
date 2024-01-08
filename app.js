let inputSlider = document.querySelector("#inputSlider")
let sliderValue = document.querySelector("#sliderValue")
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");
let body = document.querySelector("body")




//slider
sliderValue.innerText = inputSlider.value
inputSlider.addEventListener("input",()=>{
    sliderValue.innerText = inputSlider.value
   
})

if(inputSlider.value < 6){
    body.style.background = 'linear-gradient(90deg, rgba(255,0,146,1) 0%, rgba(255,2,7,1) 100%)'
}

else if(inputSlider.value > 6){
    body.style.background = 'linear-gradient(90deg, rgba(99,129,64,1) 0%, rgba(0,88,18,1) 100%)'
}
else{
    body.style.background = 'linear-gradient(0deg, rgba(0,147,255,1) 25%, rgba(24,84,149,1) 99%)'
}


genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
})

// values
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789";
let symbol = "~!@#$%^&*";

//genpassword function
function generatePassword(){
    let genPassword = "";
    let allChar = "";

    allChar += lowercase.checked ? lowerChars : "";
    allChar += uppercase.checked ? upperChars : "";
    allChar += number.checked ? numbers : "";
    allChar += symbols.checked ? symbol : "";

    if(allChar == "" || allChar.length == 0){
        return "error"
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword  +=  allChar.charAt(Math.floor(Math.random()*allChar.length));
        i++;
    }
    


    return genPassword
}



copyIcon.addEventListener("click", () => {
 
    if(passBox.value != "" || passBox.value.length >= 1){
         navigator.clipboard.writeText(passBox.value)
         copyIcon.innerText = 'check'
         copyIcon.title = "Password copied"
    }
   
    setTimeout(() => {
        copyIcon.innerText = "content_copy"
        copyIcon.title = "";
    }, 3000);

 

})
