function check() {
    let weight = parseInt(document.getElementById('weight').value);
    if (isNaN(weight)) {
        alert("Please enter a valid weight.");
        return;
    }

    if (weight > 15) {
        alert('Your baggage is overweight: ' + weight + 'kg. Please reduce it.');
        document.getElementById('removed').style.display = 'block';
        document.getElementById('remB').style.display = 'block';
    } else {
        alert('Your baggage weight ' + weight + 'kg is OK.');
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}

function removeWeight() {
    let currentWeight = parseInt(document.getElementById('weight').value);
    let removeWeight = parseInt(document.getElementById('removed').value);

    if (isNaN(removeWeight) || removeWeight <= 0) {
        alert("Enter a valid number to remove.");
        return;
    }

    let newWeight = currentWeight - removeWeight;
    document.getElementById('weight').value = newWeight;

    if (newWeight > 15) {
        alert('You new weight ' + newWeight + 'kg is still overweight.');
    } else if (newWeight <= 0) {
        alert("Weight cannot be zero.");
    } else {
        alert('Your new weight' + newWeight + 'kg is OK.');
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}
