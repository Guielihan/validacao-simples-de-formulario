const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');

// função pra validar campo de nome
function validateName() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        nameError.textContent = 'O nome é obrigatório';
        nameInput.classList.add('error');
        return false;
    } else if (name.length < 3) {
        nameError.textContent = 'O nome deve ter pelo menos 3 caracteres';
        nameInput.classList.add('error');
        return false;
    } else {
        nameError.textContent = '';
        nameInput.classList.remove('error');
        return true;
    }
}

// função pra validar campo de e-mail
function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        emailError.textContent = 'O e-mail é obrigatório';
        emailInput.classList.add('error');
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Insira um e-mail válido';
        emailInput.classList.add('error');
        return false;
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
        return true;
    }
}

// limpar erros ao digitar
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);

// interceptar o evento submit do formulario
contactForm.addEventListener('submit', function(event) {
    // prevenir o envio padrão do formulario
    event.preventDefault();

    // validar todos os campos
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    // se todos os campos sao validos
    if (isNameValid && isEmailValid) {
        // esconder mensagem de sucesso anterior se existir
        successMessage.style.display = 'none';

        // simular envio do formulario
        console.log('Formulário enviado com sucesso!');
        console.log({
            nome: nameInput.value,
            email: emailInput.value,
            mensagem: document.getElementById('message').value
        });

        // limpar o formulario
        contactForm.reset();
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        nameError.textContent = '';
        emailError.textContent = '';

        // exibir mensagem de sucesso
        successMessage.style.display = 'block';

        // remover mensagem de sucesso apos 3 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    } else {
        console.log('Por favor, corrija os erros acima.');
    }
});