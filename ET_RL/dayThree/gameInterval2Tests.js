

document.getElementById("redButton").addEventListener("click", function () {
    allRedPresses.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePresses.push(now);
});

let countTimeout1 = 0;

async function startInterval2Tests() {
    return new Promise(resolve => {
        // saveResponsesTrainingData[jatos.workerId] = responsesTrainingData;
        sessionInterval2Test = setInterval(
            function carMove() {
                let choseCar = randColor();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (count >= 20) {
                    clearInterval(sessionInterval2Test);
                    setTimeout(startInterval2Tests, 2000);
                    document.getElementById("airplane").style.display = "inline";
                    document.getElementById("airplane").style.animationPlayState = "running";
                    count = 0;
                } else {
                    count++;
                    if (choseCar >= 0.5) {
                        document.getElementById("redCar").style.display = "inline";
                        document.getElementById("redCar").style.animationPlayState = "running";
                        document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctRedPress.push(now);
                                allCorrectFirstPress.push(now);
                            } else {
                                correctRedPress.push(now);
                            }
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectBluePress.push(now);
                            }
                        };

                        setTimeout(() => {
                            reset_redCar();
                        }, carSpeed * 1000);
                    } else {
                        document.getElementById("blueCar").style.display = "inline";
                        document.getElementById("blueCar").style.animationPlayState = "running";
                        document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectRedPress.push(now);
                            };
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctBluePress.push(now);
                                allCorrectFirstPress.push(now);
                            } else {
                                correctBluePress.push(now);
                            }

                        };

                        setTimeout(() => {
                            reset_blueCar();
                        }, carSpeed * 1000);
                    };

                };
                //  jatos.appendResultData(saveResponsesTrainingData);
            }, 0.9 * 1000);// (Maximal carSpeed)*1000

        let sessionTimer2test = setTimeout(function timeCount() {
            // document.getElementById("blueButton").style.display = "none";
            // document.getElementById("redButton").style.display = "none";
            clearInterval(sessionInterval2Test);
            clearTimeout(sessionTimer2test);
            reset_airplane();
            countTimeout1++;
            if (countTimeout1 == 1) {
                resolve("done1");
                clearInterval(sessionInterval2Test);
                clearTimeout(sessionTimer2test);
                reset_airplane();
            } else {
                clearInterval(sessionInterval2Test);
                clearTimeout(sessionTimer2test);
                reset_airplane();
            }
            // }, 300000);
        }, 3000);
    });
};

let countTimeout2 = 0;
let countTwo = 0;
async function startInterval2Tests2() {
    return new Promise(resolve => {
        // saveResponsesTrainingData[jatos.workerId] = responsesTrainingData;
        sessionInterval2Test2 = setInterval(
            function carMove() {
                let choseCar = randColor();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (countTwo >= 20) {
                    clearInterval(sessionInterval2Test2);
                    setTimeout(startInterval2Tests2, 2000);
                    document.getElementById("airplane").style.display = "inline";
                    document.getElementById("airplane").style.animationPlayState = "running";
                    countTwo = 0;
                } else {
                    countTwo++;
                    if (choseCar >= 0.5) {
                        document.getElementById("redCar").style.display = "inline";
                        document.getElementById("redCar").style.animationPlayState = "running";
                        document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctRedPress.push(now);
                                allCorrectFirstPress.push(now);
                            } else {
                                correctRedPress.push(now);
                            }
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectBluePress.push(now);
                            }
                        };

                        setTimeout(() => {
                            reset_redCar();
                        }, carSpeed * 1000);
                    } else {
                        document.getElementById("blueCar").style.display = "inline";
                        document.getElementById("blueCar").style.animationPlayState = "running";
                        document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectRedPress.push(now);
                            };
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctBluePress.push(now);
                                allCorrectFirstPress.push(now);
                            } else {
                                correctBluePress.push(now);
                            }

                        };

                        setTimeout(() => {
                            reset_blueCar();
                        }, carSpeed * 1000);
                    };

                };
                //jatos.appendResultData(saveResponsesTrainingData);
            }, 0.9 * 1000);// (Maximal carSpeed)*1000

        let sessionTimer2test2 = setTimeout(function timeCount() {
            clearInterval(sessionInterval2Test2);
            clearTimeout(sessionTimer2test2);
            reset_airplane();
            countTimeout2++;
            if (countTimeout2 == 1) {
                resolve("done4");
                clearInterval(sessionInterval2Test2);
                clearTimeout(sessionTimer2test2);
            } else {
                clearInterval(sessionInterval2Test2);
                clearTimeout(sessionTimer2test2);
                reset_airplane();
            }
            // }, 90000);
        }, 3000);
    });
};
let countTimeout3 = 0;
let countThree = 0;
async function startInterval2Tests3() {
    return new Promise(resolve => {
        //  saveResponsesTrainingData[jatos.workerId] = responsesTrainingData;
        sessionInterval2Test3 = setInterval(
            function carMove() {
                let choseCar = randColor();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (countThree >= 20) {
                    clearInterval(sessionInterval2Test3);
                    setTimeout(startInterval2Tests2, 2000);
                    document.getElementById("airplane").style.display = "inline";
                    document.getElementById("airplane").style.animationPlayState = "running";
                    countThree = 0;
                } else {
                    countThree++;
                    if (choseCar >= 0.5) {
                        document.getElementById("redCar").style.display = "inline";
                        document.getElementById("redCar").style.animationPlayState = "running";
                        document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctRedPress.push(now);
                                allCorrectFirstPress.push(now);
                            } else {
                                correctRedPress.push(now);
                            }
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectBluePress.push(now);
                            }
                        };

                        setTimeout(() => {
                            reset_redCar();
                        }, carSpeed * 1000);
                    } else {
                        document.getElementById("blueCar").style.display = "inline";
                        document.getElementById("blueCar").style.animationPlayState = "running";
                        document.getElementById("blueCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectRedPress.push(now);
                            };
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctBluePress.push(now);
                                allCorrectFirstPress.push(now);
                            } else {
                                correctBluePress.push(now);
                            }

                        };

                        setTimeout(() => {
                            reset_blueCar();
                        }, carSpeed * 1000);
                    };

                };
                //jatos.appendResultData(saveResponsesTrainingData);
            }, 0.9 * 1000);// (Maximal carSpeed)*1000

        let sessionTimer2test3 = setTimeout(function timeCount() {
            clearInterval(sessionInterval2Test3);
            clearTimeout(sessionTimer2test3);
            reset_airplane();
            countTimeout3++;
            if (countTimeout3 == 1) {
                resolve("done4");
                clearInterval(sessionInterval2Test3);
                clearTimeout(sessionTimer2test3);
                reset_airplane();
            } else {
                clearInterval(sessionInterval2Test3);
                clearTimeout(sessionTimer2test3);
                reset_airplane();
            }
            // }, 90000);
        }, 3000);
    });
};

