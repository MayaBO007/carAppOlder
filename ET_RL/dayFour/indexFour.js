function timeline() {
    let updatedDates = updateDates();
    // if (updatedDates.fullDate.getDate() == updatedDates.yesterday.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {
    //     document.getElementById("fiveAM").style.display = "inline";
    // }
    // else if (updatedDates.fullDate.getDate() == updatedDates.yesterdayPlusOne.getDate()) { //|| yesterdayPlusOne.getDate() - fullDate.getDate() > 25 ) {)
    //     if (0 <= updatedDates.fullDate.getHours() & updatedDates.fullDate.getHours() < 5) {
    //         document.getElementById("fiveAM").style.display = "inline";
    //     } else {
    let goFour = async function () {
        let doneDayFour = await startDevTest(); // add promise and resolve
        if (doneDayFour == "doneDayFour") {
            // jatos.studySessionData.doneDay4 = "doneDayFour";
            studySessionData.doneDay4 = "doneDayFour";
            showWinnings()
            // jatos.studySessionData.expDaysDate = updatedDates.fullDate;
            studySessionData.expDaysDate = updatedDates.fullDate;
            setTimeout(() => {
                document.getElementById("endOfDayMessage").style.display = "none";
                document.getElementById("todayWins").innerHTML = '';
                document.getElementById("redWins").innerHTML = '';
                document.getElementById("blueWins").innerHTML = '';
                document.getElementById("seeYouTomorrow").innerHTML = '';
                document.getElementById("endOfGame").style.display = "inline";

                setTimeout(() => {
                    // jatos.endStudyAjax(true, "great success");
                }, 4000);
            }, 5000);
        }
    }
    goFour()
}
//     } else {
//         document.getElementById("endOfGame").style.display = "inline";
//     }
// }
