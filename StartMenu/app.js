function redirectAfterDelay() {
    let countdown = 10;
    const countdownElement = document.querySelector('.countdown');

    const interval = setInterval(() => {
        countdownElement.textContent = countdown--;

        if (countdown === 0) {
            clearInterval(interval);
            window.location.href = "../home.html";
        }
    }, 1000);
}