let count = 0;

document.getElementById('doggo').addEventListener('click', function () {
    let doggo = document.getElementById('doggo');
    let sounds = [document.getElementById('bark1'), document.getElementById('bark2')];
    let clickCounter = document.getElementById('clickCount');

    doggo.src = "shibwow.png";

    let randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    randomSound.play();

    doggo.classList.add('shake');

    count++;
    clickCounter.textContent = "Woofs: " + count;


    let soundDuration = randomSound.duration * 1000 || 2000;

    setTimeout(() => {
        doggo.classList.remove('shake');
        doggo.src = "shiba.png";
    }, soundDuration);
});
