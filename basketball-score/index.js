let homeTotalScore = document.getElementById("home-total-score")
let guestTotalScore = document.getElementById("guest-total-score")

let homeScore = 0
let guestScore = 0

function add1home() {
    homeScore += 1
    homeTotalScore.textContent = homeScore
}

function add2home() {
    homeScore += 2
    homeTotalScore.textContent = homeScore
}

function add3home() {
    homeScore += 3
    homeTotalScore.textContent = homeScore
}

function add1guest() {
    guestScore += 1
    guestTotalScore.textContent = guestScore
}

function add2guest() {
    guestScore += 2
    guestTotalScore.textContent = guestScore
}

function add3guest() {
    guestScore += 3
    guestTotalScore.textContent = guestScore
}