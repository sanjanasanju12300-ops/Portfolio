const words = [
    "Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "Freelancer"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeWord() {

    if (charIndex < words[wordIndex].length) {

        typingElement.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWord, 100);

    } else {

        setTimeout(deleteWord, 1500);

    }

}

function deleteWord() {

    if (charIndex > 0) {

        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteWord, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(typeWord, 300);

    }

}

typeWord();