let inputSlider = document.querySelector("#inputSlider")
let sliderValue = document.querySelector("#sliderValue")
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

//slider
sliderValue.innerText = inputSlider.value
inputSlider.addEventListener("input",()=>{
    sliderValue.innerText = inputSlider.value
   
})

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
