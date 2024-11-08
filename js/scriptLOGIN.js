function register(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('Usuário já cadastrado!');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login realizado com sucesso!');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos.');
    }
}

function checkLogin() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('userGreeting').textContent = `Olá, ${loggedInUser.name}`;
    }
}
