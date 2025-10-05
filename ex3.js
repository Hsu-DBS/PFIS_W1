// Compute the sum of multiples of a or b in list l
let listEuler1 = (a, b, l) => {
    return l.filter(x => x % a === 0 || x % b === 0)
            .reduce((sum, val) => sum + val, 0);
};

// Compute the sum of multiples of elements in list a found in list l (for list a of length 2)
let listEuler2 = (a, l) => {
    return l.filter(x => a.some(f => x % f === 0))
            .reduce((sum, val) => sum + val, 0);
};

let listEuler3 = (a, l) => {
    return l.filter(x => a.some(f => x % f === 0))
            .reduce((sum, val) => sum + val, 0);
};

let eulerlist = () => {
    let a = parseInt(document.getElementById('a1').value) || 2;
    let b = parseInt(document.getElementById('b1').value) || 3;
    let l = document.getElementById('l').value
        ? document.getElementById('l').value.split(" ").map(Number)
        : [1,2,3,4,5,6,7,9,10,10,10];

    let result = listEuler1(a, b, l);
    alert("Sum of multiples of " + a + " or " + b + " = " + result);
};

let euler2Lists = () => {
    let aInput = document.getElementById('aList').value || "2 3";
    let lInput = document.getElementById('mList').value || "1 2 3 4 5 6 7 9 10 10 10";

    let a = aInput.split(" ").map(Number);
    let l = lInput.split(" ").map(Number);

    let result = listEuler2(a, l);
    alert("Sum of multiples of [" + a.join(", ") + "] = " + result);
};

let euler2Lists1 = () => {
    let a = [2, 3, 5];
    let l = [1,2,3,4,5,6,7,9,10,10,10];

    let result = listEuler3(a, l);
    alert("Sum of multiples of [" + a.join(", ") + "] = " + result);
};
