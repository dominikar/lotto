$(document).ready(function () {

    function randomNumberFrom1To49() {
        return Math.floor(Math.random() * 48) + 1;
    }

    function drawNumbers() {
        var randomNumbers = [];
        for (var i = 1; i <= 6; i++) {
            var randomNumber = randomNumberFrom1To49();
            while (randomNumbers.includes(randomNumber)) {
                randomNumber = randomNumberFrom1To49();
            }
            randomNumbers.push(randomNumber);
            $("#numer" + i).html(randomNumber);
        }
    }

    $("#button1").click(function () {
        drawNumbers();
    });

    drawNumbers();

});