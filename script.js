let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0
let guestScore = 0

function addHomeScore1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function addHomeScore2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function addHomeScore3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function addGuestScore1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function addGuestScore2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function addGuestScore3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}