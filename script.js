
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

guessButton.addEventListener("click", function () {
    const guess = Number(guessInput.value);

    if (
        guessInput.value.trim() === "" ||
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        message.textContent = "لطفاً یک عدد صحیح بین ۱ تا ۱۰۰ وارد کن.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess < secretNumber) {
        message.textContent = "عدد من بزرگ‌تر است! 🔼";
    } else if (guess > secretNumber) {
        message.textContent = "عدد من کوچک‌تر است! 🔽";
    } else {
        message.textContent =
            `آفرین! عدد درست ${secretNumber} بود. تعداد تلاش‌ها: ${attempts} 🎉`;

        guessButton.disabled = true;
    }

    guessInput.value = "";
    guessInput.focus();
});

restartButton.addEventListener("click", function () {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsDisplay.textContent = "۰";
    message.textContent = "بازی جدید شروع شد! حدس بزن.";
    guessButton.disabled = false;
    guessInput.value = "";
    guessInput.focus();
});

guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        guessButton.click();
    }
});
