function reset_blueCar() { // sets the blue car back to its start point
    document.getElementById('blueCar').style.animationPlayState = "paused";
    document.getElementById('blueCar').style.animationFillMode = "backwards";
    document.getElementById('blueCar').style.display = "none"
};

function reset_redCar() { // sets the red car back to its start point
    document.getElementById('redCar').style.animationPlayState = "paused";
    document.getElementById('redCar').style.animationFillMode = "backwards";
    document.getElementById('redCar').style.display = "none"
};

function reset_yellowCar() { // sets the red car back to its start point
    document.getElementById('yellowCar').style.animationPlayState = "paused";
    document.getElementById('yellowCar').style.animationFillMode = "backwards";
    document.getElementById('yellowCar').style.display = "none"
};

function reset_airplane() { // sets the red car back to its start point
    document.getElementById('airplane').style.animationPlayState = "paused";
    document.getElementById('airplane').style.animationFillMode = "backwards";
    document.getElementById('airplane').style.display = "none";
};

function reset_gif() { // sets the red car back to its start point
    document.getElementById('secondCountdown').style.display = "none";
    document.getElementById('secondCountdown').src = "";
    document.getElementById('secondCountdown').src = "../pics/secondCountdown.gif"
};

function reset_gifTen() { // sets the red car back to its start point
    document.getElementById('TenSecTimeout').style.display = "none";
    document.getElementById('TenSecTimeout').src = "";
    document.getElementById('TenSecTimeout').src = "../pics/10_sec_timer.gif"
};
