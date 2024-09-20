document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const existingAccountScreen = document.getElementById('existing-account-screen');
    const siteContent = document.getElementById('site-content');
    const loginForm = document.getElementById('login-form');
    const existingAccountForm = document.getElementById('existing-account-form');
    const hasAccountLink = document.getElementById('has-account-link');
    const backToLogin = document.getElementById('back-to-login');

    // Simulação de banco de dados de contas
    const accounts = [
        { email: 'user@example.com', password: 'password123' },
        // Adicione outras contas conforme necessário
    ];

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            const accountExists = accounts.some(account => account.email === email && account.password === password);
            if (accountExists) {
                alert('Essa conta já existe.');
            } else {
                loginScreen.style.display = 'none'; // Oculta a tela de login
                siteContent.style.display = 'block'; // Exibe o conteúdo do site
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    existingAccountForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const existingEmail = document.getElementById('existing-email').value;
        const existingPassword = document.getElementById('existing-password').value;

        if (existingEmail && existingPassword) {
            // Verifica se a conta existe
            const accountExists = accounts.some(account => account.email === existingEmail && account.password === existingPassword);
            if (accountExists) {
                existingAccountScreen.style.display = 'none'; // Oculta a tela de login existente
                siteContent.style.display = 'block'; // Exibe o conteúdo do site
            } else {
                alert('E-mail ou senha incorretos.');
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    hasAccountLink.addEventListener('click', () => {
        loginScreen.style.display = 'none'; // Oculta a tela de login
        existingAccountScreen.style.display = 'block'; // Exibe a tela de login existente
    });

    backToLogin.addEventListener('click', () => {
        existingAccountScreen.style.display = 'none'; // Oculta a tela de login existente
        loginScreen.style.display = 'block'; // Exibe a tela de login
    });
});

