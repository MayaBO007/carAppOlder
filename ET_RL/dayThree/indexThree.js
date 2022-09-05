

// move to main function
function timeline() {
    // // saveData[jatos.workerId] = dataToSave;
    let updatedDates = updateDates();
    // if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
    //     document.getElementById("fiveAM").style.display = "inline";
    // }
    // else if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {)
    //     if (0 <= updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
    //         document.getElementById("fiveAM").style.display = "inline";
    //     } else {
    let goThree = async function () {
        let doneDayThree = await start2tests(); // add promise and resolve
        if (doneDayThree == "doneDayThree") {
            // jatos.studySessionData.doneDay3 = "doneDayThree";
            showWinnings()
            // jatos.studySessionData.expDaysDate = updatedDates.fullDate;
            // jatos.studySessionData(saveData);
            // jatos.submitResultData(saveData);
            setTimeout(() => {
                platform.goToUrl('../ET_RL/dayFour/dayFour.html');
            }, 4000)
            //setTimeout(timeline(), 900000);
        }
    }
    goThree()
}
//     } else {
//         document.getElementById("endOfGame").style.display = "inline";
//     }
// }                                   