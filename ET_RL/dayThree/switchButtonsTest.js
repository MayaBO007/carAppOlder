
const responsesSwitch = {
    correctRedPressSwitch: correctRedPressSwitch,
    correctBluePressSwitch: correctBluePressSwitch,
    incorrectRedPressSwitch: incorrectRedPressSwitch,
    incorrectBluePressSwitch: incorrectBluePressSwitch,
    redChoiceSwitch: redChoiceSwitch,
    blueChoiceSwitch: blueChoiceSwitch,
    allRedPressesSwitch: allRedPressesSwitch,
    allBluePressesSwitch: allBluePressesSwitch,
    allCorrectFirstPressSwitch: allCorrectFirstPressSwitch,
    allChoicesSwitch: allChoicesSwitch
};

saveResponsesSwitch = {};
timeoutCountSwitch = 0;

document.getElementById("redButton").addEventListener("click", function () {
    allRedPressesSwitch.push(now);
});
document.getElementById("blueButton").addEventListener("click", function () {
    allBluePressesSwitch.push(now);
});
//let sessionIntervalSwitch = null;
let countSwitch = 0;
async function startIntervalSwitch() {
    return new Promise(resolve => {
        // saveResponsesSwitch[jatos.workerId] = responsesSwitch;
        sessionIntervalSwitch = setInterval(
            function carMove() {
                let choseCar = randColorSwitch();
                let carSpeed = randSpeedCar();
                reset_airplane();
                buttonChoice = 0;
                if (countSwitch >= 20) {
                    clearInterval(sessionIntervalSwitch);
                    setTimeout(startIntervalSwitch, 1000);
                    document.getElementById("airplane").style.display = "inline";
                    document.getElementById("airplane").style.animationPlayState = "running";
                    countSwitch = 0;
                } else {
                    countSwitch++;
                    if (choseCar >= 0.5) {
                        document.getElementById("redCar").style.display = "inline";
                        document.getElementById("redCar").style.animationPlayState = "running";
                        document.getElementById("redCar").style.animationDuration = String(carSpeed) + "s";
                        document.getElementById("redButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctRedPressSwitch.push(now);
                                allCorrectFirstPressSwitch.push(now);
                            } else {
                                correctRedPressSwitch.push(now);
                            }
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice - 1;
                            if (buttonChoice <= -1) {
                                incorrectBluePressSwitch.push(now);
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
                                incorrectRedPressSwitch.push(now);
                            };
                        };
                        document.getElementById("blueButton").onclick = function () {
                            buttonChoice = buttonChoice + 1;
                            if (buttonChoice == 1) {
                                correctBluePressSwitch.push(now);
                                allCorrectFirstPressSwitch.push(now);
                            } else {
                                correctBluePressSwitch.push(now);
                            }

                        };

                        setTimeout(() => {
                            reset_blueCar();
                        }, carSpeed * 1000);
                    };

                };
                // jatos.appendResultData(saveResponsesSwitch);
            }, 0.9 * 1000);// (Maximal carSpeed)*1000

        let sessionTimerSwitch = setTimeout(function timeCountSwitch() {
            // document.getElementById("blueButton").style.display = "none";
            // document.getElementById("redButton").style.display = "none";
            clearInterval(sessionIntervalSwitch);
            clearTimeout(sessionTimerSwitch);
            reset_airplane();
            timeoutCountSwitch++
            if (timeoutCountSwitch == 1) {
                // jatos.appendResultData(saveResponsesSwitch);
                resolve("done2");
            } else {
                clearInterval(sessionIntervalSwitch);
                clearTimeout(sessionTimerSwitch);
                reset_airplane();
            }
            // }, 90000);
        }, 3000);
    });
};


// let startClickSwitch = null;
// function startSwitchTest() {
//     document.getElementById("redButton").style.display = "inline";
//     document.getElementById("blueButton").style.display = "inline";
//     document.getElementById("gameScreen").style.display = "inline";
//     document.getElementById("redButton").style.left = "81%";
//     document.getElementById("blueButton").style.left = "1%";
//     document.getElementById("startSwitchTestButton").style.display = "inline";
//     document.getElementById("startSwitchTestButton").onclick = function () {
//         startClickSwitch = 1;
//         if (startClickSwitch == 1) {
//             document.getElementById("startSwitchTestButton").style.display = "none";
//             startIntervalSwitch();
//             //msCount();
//         };
//     };
// };