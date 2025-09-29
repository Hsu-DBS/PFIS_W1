function checkBaggage() {
    let weight = parseInt(document.getElementById("weight").value);

    if (isNaN(weight)) {
        alert("Please enter a valid number for baggage weight.");
        return;
    }

    if (weight > 15) {
        alert("Overweight baggage! (" + weight + "kg). Limit is 15kg.");
    } else {
        alert("Baggage weight is OK (" + weight + "kg).");
    }
}
