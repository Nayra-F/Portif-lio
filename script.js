const elemento = document.querySelector('.digitando');
const textoCompleto = "Olá, me chamo Nayra!";
let charIndex = 0;
let apagando = false;

function loopDigitacao() {
   
    if (!apagando) {
        elemento.innerHTML = textoCompleto.substring(0, charIndex + 1);
        charIndex++;
    } else {
        elemento.innerHTML = textoCompleto.substring(0, charIndex - 1);
        charIndex--;
    }


    if (!apagando && charIndex === textoCompleto.length) {
        apagando = true;
        setTimeout(loopDigitacao, 2000); 
        return;
    } 
    
    
    if (apagando && charIndex === 0) {
        apagando = false;
    }

    
    const velocidade = apagando ? 50 : 100;
    setTimeout(loopDigitacao, velocidade);
}


loopDigitacao();


const form = document.querySelector('#contato-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const mensagem = document.querySelector('#mensagem').value;

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso!`);
    form.reset(); 
});


document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    
    if (nome === '' || email === '' || mensagem === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    
    const emailPadrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPadrao.test(email)) {
        alert("Por favor, insira um e-mail válido (ex: usuario@dominio.com)");
        return;
    }

   
    alert("Mensagem enviada com sucesso! Logo entrarei em contato.");
    
   
    this.reset();
});