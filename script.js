const pass = document.querySelector("#pass");
const passConfirm = document.querySelector("#confirm_pass");
const passDiv = document.querySelector('.passfield');
const errorText = document.createElement('p');


errorText.textContent = "Passwords do not match";
errorText.classList.add('errortext');

let passText = pass.value;
let pcText = passConfirm.value;



pass.addEventListener('change', ()=>{
    passText = pass.value;
});

passConfirm.addEventListener('change', ()=>{
    pcText = passConfirm.value;

    if(passText !== pcText){
        pass.classList.add('error');
        passConfirm.classList.add('error');
        passDiv.appendChild(errorText);

    } else{
        if(pass.classList.contains('error')){
            pass.classList.remove('error');
            passConfirm.classList.remove('error');
        }
    }
});


