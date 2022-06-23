document.getElementById('submit').onclick = function () {
    let selected = document.querySelector('input[name="speed"]:checked').value;
    let speedCube = document.querySelector('.cube');
    if (selected == 1) {
        speedCube.style.animation = "animate 4s linear infinite";
    }
    else if (selected == 2) {
        speedCube.style.animation = "animate 2s linear infinite";
    }
    else {
        speedCube.style.animation = "animate 1s linear infinite";
    }
}

