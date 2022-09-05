
// move to main function
function timeline() {
    // saveData[jatos.workerId] = dataToSave;
    let updatedDates = updateDates();
    // updatedDates = updateDates();
    // if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
    //     document.getElementById("fiveAM").style.display = "inline";
    // }
    // else if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {)
    //     if (0 <= updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
    //         document.getElementById("fiveAM").style.display = "inline";
    //     } else {
    let goTwo = async function () {
        let doneDayTwo = await startTraining();
        if (doneDayTwo == "doneDayTwo") {
            //jatos.studySessionData.doneDay2 = "doneDayTwo";
            showWinnings()
            // jatos.studySessionData.expDaysDate = updatedDates.fullDate;
            // jatos.studySessionData(saveData);
            // jatos.submitResultData(saveData);
            setTimeout(() => {
                platform.goToUrl('..ET_RL/dayThree/dayThree.html');
            }, 5000)
            //setTimeout(timeline(), 900000);
        }
    }
    goTwo()
}
    // } else {
    //     document.getElementById("endOfGame").style.display = "inline";
    // }
// }                                   