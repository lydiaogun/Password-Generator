
const userInput = prompt("Please enter your name:");
function generateStrongPassword(){
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    let password = "";
    let password2 = "";
 
    const passwordLength = handleInput();
    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password2 += characters[randomIndex];
    }
    document.getElementById("generated-password").innerText = password;
    document.getElementById("generated-password2").innerText = password2;


}

function copyPassword() {
    const password = prompt("Which password do you want to copy? (1 or 2)");
    let passwordToCopy = "";
}

function handleInput(){
    let passwordLength = document.getElementById("userInput").value
    return passwordLength
}