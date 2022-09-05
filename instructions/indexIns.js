


const saveData = {};
let doneInstructions = null;

// move to main function
function timeline() {
    // saveData[jatos.workerId] = dataToSave;
    let goIns = async function () {
        let doneInstructions = await startFirstDay();
        if (doneInstructions == "doneInstructions") {
            studySessionData.doneInstructions = "doneInstructions";
            document.getElementById("ins12").style.display = "inline";
            setTimeout(() => {
                window.location.href = '../ET_RL/dayOne/dayOne.html';
            }, 7000)
        }
    }

    goIns();
}