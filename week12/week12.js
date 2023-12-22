const buttonOne = document.querySelector('.b-1');
const resultOne = document.querySelector('#resultOne');

const makeOne = () => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        while (result.length < 4) {
            result += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
		resultOne.textContent = result;
};

buttonOne.addEventListener('click', makeOne);



