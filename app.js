const prevBtn = document.querySelector('.prevBtn');
const imgSlider = document.querySelector('.img');
const nextBtn = document.querySelector('.nextBtn');

let currentImg = 0;

nextBtn.addEventListener('click', getNextImg);
prevBtn.addEventListener('click', getPrevImg);

function getNextImg () {
    currentImg++;
    imgSlider.src = `img/bcg-${currentImg}.jpg`;

    if (currentImg > 9) {
        currentImg = -1;
    }
}

function getPrevImg () {
    currentImg--;
    imgSlider.src = `img/bcg-${currentImg}.jpg`;

    if (currentImg < 1) {
        currentImg = 11;
    }
}