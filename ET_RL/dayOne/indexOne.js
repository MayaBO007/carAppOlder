

const saveData = {};
let doneInstructions = null;

// move to main function
function timeline() {
    let updatedDates = updateDates();
    let goFirst = async function () {
        let doneDay1 = await trainingFirstDay();
        if (doneDay1 == "doneDayOne") {
            studySessionData.doneDay1 = "doneDayOne";
            showWinnings()
            studySessionData.expDaysDate = updatedDates.fullDate;
            platform.saveSession(studySessionData).then(done);
            platform.saveSession(responsesFirstData, createNew).then(done);
            setTimeout(() => {
                platform.goToUrl('../ET_RL/dayTwo/dayTwo.html');
            }, 5000)
            //setTimeout(timeline(), 900000);
        }
    }
    goFirst();
}
