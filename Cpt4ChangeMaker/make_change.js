const $ = selector => document.querySelector(selector);

const calculateChange = function () {
    var cents = parseInt($("#cents").value);

    if (cents <= 0 || cents > 99) {
        alert('Please enter a valid number between 0 and 99');
        return; // Stop execution if input is invalid
    }

    var quarters = Math.floor(cents / 25);
    cents %= 25;
    $("#quarters").value = quarters;

    var dimes = Math.floor(cents / 10);
    cents %= 10;
    $("#dimes").value = dimes;

    var nickels = Math.floor(cents / 5);
    cents %= 5;
    $("#nickels").value = nickels;

    var pennies = Math.floor(cents / 1);
    cents %= 1;
    $("#pennies").value = pennies;
};

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = $('#calculate');
    calculateButton.addEventListener("click", calculateChange);
});
