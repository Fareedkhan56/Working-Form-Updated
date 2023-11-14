
function FormButton() {
    let body = document.getElementById('body');

    let gif = document.getElementById('loadingGif');
    let btn = document.getElementById('submitBtn');

    let nameTxt = document.getElementById('nameTxt');
    let nameInp = document.getElementById('nameInp');

    let emailTxt = document.getElementById('emailTxt');
    let emailInp = document.getElementById('emailInp');

    let passwordTxt = document.getElementById('passwordTxt');
    let passwordInp = document.getElementById('passwordInp');

    if (nameInp.value.length == 0) {
        nameTxtLetter.style.display = 'none';
        nameTxtSpace.style.display = 'none';

        nameInp.classList = 'redborder';
        nameTxt.style.display = 'inline';
    }
    else if (nameInp.value[0] == " ") {
        nameTxt.style.display = 'none';
        nameTxtLetter.style.display = 'none';

        nameInp.classList = 'nameTxtSpace';
        nameInp.classList = 'redborder';
        nameTxtSpace.style.display = 'inline';
    }
    else if (nameInp.value.length < 4) {
        nameTxtSpace.style.display = 'none';
        nameTxt.style.display = 'none';

        nameInp.classList = 'nameTxtLetter';
        nameInp.classList = 'redborder';
        nameTxtLetter.style.display = 'inline';
    }
    else {
        nameInp.classList = 'blackborder';
        nameTxt.style.display = 'none';
        nameTxtLetter.style.display = 'none';
        nameTxtSpace.style.display = 'none';
    }


    if (emailInp.value.length == 0) {
        emailTxtSpace.style.display = 'none';

        emailInp.classList = 'redborder';
        emailTxt.style.display = 'inline';
    }
    else if (emailInp.value[0] == " ") {
        emailTxt.style.display = 'none';

        emailInp.classList = 'redborder';
        emailTxtSpace.style.display = 'inline';
    }
    else {
        emailInp.classList = 'blackborder';
        emailTxt.style.display = 'none';
        emailTxtSpace.style.display = 'none';
    }

    if (passwordInp.value.length == 0) {
        passwordTxtLetter.style.display = 'none';
        passwordTxtSpace.style.display = 'none';

        passwordInp.classList = 'redborder';
        passwordTxt.style.display = 'inline';
    }
    else if (passwordInp.value[0] == " ") {
        passwordTxt.style.direction = 'none';
        passwordTxtLetter.style.display = 'none';

        passwordTxtSpace.style.display = 'inline';
        passwordInp.classList = 'redborder';
    }
    else if (passwordInp.value.length <= 8) {
        passwordTxt.style.display = 'none';
        passwordTxtSpace.style.display = 'none';

        passwordTxtLetter.style.display = 'inline';
        passwordInp.classList = 'redborder';
    }
    else {
        passwordInp.classList = 'blackborder';
        passwordTxt.style.display = 'none';
        passwordTxtSpace.style.display = 'none';
        passwordTxtLetter.style.display = 'none';
    }

    if (nameInp.value.length != 0 && emailInp.value.length != 0 && passwordInp.value.length != 0 && nameInp.value[0] != " " && emailInp.value[0] != " " && passwordInp.value[0] != " " && nameInp.value.length >= 4 && passwordInp.value.length > 8) {
        btn.style.display = 'none';
        gif.style.display = 'inline';
        // body.classList ='loadingBodyStyle';    

        setTimeout(() => {
            btn.style.display = 'inline-block';
            gif.style.display = 'none';
            // body.classList = 'defaultBody';
            alert("Your Data Has been Submitted");
        }
            , 5000)
    }

    console.log(nameInp.value)
    console.log(emailInp.value)
    console.log(passwordInp.value)
}

function DarkMode() {
    let body = document.getElementById('body');
    let darkSwitch = document.getElementById('darkSwitch');
    let lightSwitch = document.getElementById('lightSwitch');

    body.classList = 'darkBody';
    darkSwitch.style.display = 'none';
    lightSwitch.style.display = 'inline';
}

function LightMode() {
    let body = document.getElementById('body');
    let lightSwitch = document.getElementById('lightSwitch');
    let darkSwitch = document.getElementById('darkSwitch');

    body.classList = 'lightBody';
    lightSwitch.style.display = 'none';
    darkSwitch.style.display = 'Inline-block';
}