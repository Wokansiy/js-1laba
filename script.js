// щоб не запутатись, 1 таска, окрема
function reverseNumber() {
    const input = document.getElementById('numberInput').value;
    if (input === '') {
        alert('Будь ласка, введіть число');
        return;
    }
    const numberStr = input.toString();
    const reversedStr = numberStr.split('').reverse().join('');
    document.getElementById('result').textContent = `Перевернуте число: ${reversedStr}`;
}

// 2 таска, окрема
function generatePassword() {
    const lengthInput = document.getElementById('passwordLength').value;
    if (lengthInput === '' || lengthInput < 1) {
        return;
    }
    const length = parseInt(lengthInput, 10);
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('passwordResult').textContent = `Згенерований пароль: ${password}`;
}

// 3 таска, окрема
function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    if (input === '') {
        alert('Будь ласка, введіть ваше слово');
        return;
    }
    const cleanedInput = input.replace(/\s+/g, '').toLowerCase();
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    document.getElementById('palindromeResult').textContent = isPalindrome
        ? 'Це ж паліндром!'
        : 'Це не паліндром. Наприклад "Тенет", якщо що годний фільм.';
}

// 4 таска, окрема
function countVowels() {
    const input = document.getElementById('vowelInput').value.trim().toLowerCase();
    if (input === '') {
        alert('Будь ласка, введіть слово');
        return;
    }
    const vowels = ['а', 'е', 'и', 'і', 'о', 'у'];
    let count = 0;
    for (let char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    document.getElementById('vowelResult').textContent = `Кількість голосних у слові "${input}": ${count}`;
}

// 1 таска, на всіх завданнях
function reverseNumberAll() {
    const input = document.getElementById('numberInputAll').value;
    if (input === '') {
        alert('Будь ласка, введіть число');
        return;
    }
    const numberStr = input.toString();
    const reversedStr = numberStr.split('').reverse().join('');
    document.getElementById('resultAll').textContent = `Перевернуте число: ${reversedStr}`;
}

// 2 таска, на всіх завданнях
function generatePasswordAll() {
    const lengthInput = document.getElementById('passwordLengthAll').value;
    if (lengthInput === '' || lengthInput < 1) {
        return;
    }
    const length = parseInt(lengthInput, 10);
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById('passwordResultAll').textContent = `Згенерований пароль: ${password}`;
}

// 3 таска, на всіх завданнях
function checkPalindromeAll() {
    const input = document.getElementById('palindromeInputAll').value;
    if (input === '') {
        alert('Будь ласка, введіть ваше слово.');
        return;
    }
    const cleanedInput = input.replace(/\s+/g, '').toLowerCase();
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    document.getElementById('palindromeResultAll').textContent = isPalindrome
    ? 'Це ж паліндром!'
    : 'Це не паліндром. Наприклад "Тенет", якщо що годний фільм';
}

// 4 таска, на всіх завданнях
function countVowelsAll() {
    const input = document.getElementById('vowelInputAll').value.trim().toLowerCase();
    if (input === '') {
        alert('Будь ласка, введіть слово');
        return;
    }
    const vowels = ['а', 'е', 'и', 'і', 'о', 'у'];
    let count = 0;
    for (let char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    document.getElementById('vowelResultAll').textContent = `Кількість голосних у слові "${input}": ${count}`;
}