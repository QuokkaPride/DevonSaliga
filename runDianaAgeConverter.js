function runDianaAgeConverter() {
    function getDogAgeInput() {
        let dogAge;
        let isValid = false;

        while (!isValid) {
            dogAge = prompt("Please enter how old your Princess Diana Ross is? Use real 365 day earth years.");

            // Check if the input is a number
            if (dogAge !== null && !isNaN(dogAge) && dogAge.trim() !== "" && Number(dogAge) >= 0) {
                isValid = true;
            } else {
                alert("Sally, no. Please enter a valid number for your dog's age.");
            }
        }

        return Number(dogAge);
    }

    function convertToHumanYears(dogAge) {
        // Assuming the first 2 years of a dog's life count as 21 human years
        // and every subsequent year counts as 4 human years
        if (dogAge <= 2) {
            return dogAge * 10.5;
        } else {
            return 21 + (dogAge - 2) * 4;
        }
    }

    let dogAge = getDogAgeInput();
    let humanYears = convertToHumanYears(dogAge);
    alert("Your sweet angel is " + humanYears + " years old in human years.");
}
