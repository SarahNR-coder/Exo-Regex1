const inputEmailHTMLelement = document.querySelector('#exampleInputEmail1');
const inputPasswordHTMLelement = document.querySelector('#exampleInputPassword1');
//const checkHTMLelement = document.querySelector('#exampleCheck1');
const userMessageHTMLelement = document.querySelector('#userMessage');
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
//regex pour password
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

inputEmailHTMLelement.addEventListener("keyup", function(){
    userMessageHTMLelement.innerText = ``;
    const testEmail = regexEmail.test(inputEmailHTMLelement.value);
    userMessageHTMLelement.innerText = (!testEmail) ? `Email incorrect`  : ``;
    if(testEmail){
        inputEmailHTMLelement.style.backgroundColor = `green`;
        userMessageHTMLelement.innerText = `Email valide`;
        userMessageHTMLelement.style.border=` 4px solid green`
    }else{
        inputEmailHTMLelement.style.backgroundColor = `red`;
        userMessageHTMLelement.innerText = `Email incorrect`;
        userMessageHTMLelement.style.border=` 4px solid red`
    }

})

inputPasswordHTMLelement.addEventListener("keyup", function(){
    userMessageHTMLelement.innerText = ``;
    const testDecimal =charDecimal.test(inputPasswordHTMLelement.value);
    const testSpecial = charSpecial.test(inputPasswordHTMLelement.value);
    if(testDecimal && testSpecial && inputPasswordHTMLelement.value.length<=8 && inputPasswordHTMLelement.value.length>=6){
        inputPasswordHTMLelement.style.backgroundColor = `green`;
        userMessageHTMLelement.innerText = `Mot de passe valide`;
        userMessageHTMLelement.style.border=` 4px solid green`;
    }
    if(!testDecimal){
        inputPasswordHTMLelement.style.backgroundColor = `red`;
        userMessageHTMLelement.innerText += `
        Votre mot de passe doit comprendre des chiffres`;
        userMessageHTMLelement.style.border=` 4px solid red`;
    }
    if(!testSpecial){
        inputPasswordHTMLelement.style.backgroundColor = `red`;
        userMessageHTMLelement.innerText += `
        Votre mot de passe doit comprendre des caractères spéciaux parmi $ & @ !`;
        userMessageHTMLelement.style.border=` 4px solid red`;
    }
    if(inputPasswordHTMLelement.value.length>8){
        inputPasswordHTMLelement.style.backgroundColor = `red`;
        userMessageHTMLelement.innerText += `
        Votre mot de passe est trop long`;
        userMessageHTMLelement.style.border=` 4px solid red`;
    }else if(inputPasswordHTMLelement.value.length<6){
        inputPasswordHTMLelement.style.backgroundColor = `red`;
        userMessageHTMLelement.innerText += `
        Votre mot de passe n'est pas assez long`;
        userMessageHTMLelement.style.border=` 4px solid red`;
    }
})