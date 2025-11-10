function processInput() {
  const input = document.getElementById("inputStr").value.trim();
  const output = document.getElementById("output");

  if (!input.includes(":")) {
    alert("Invalid format! Use 'factors : multiples'");
    output.textContent = "Invalid format!";
    return;
  }

  const [factorsStr, multiplesStr] = input.split(":").map(s => s.trim());

  const factors = parseNumbers(factorsStr);
  const multiples = parseNumbers(multiplesStr);

  const validMultiples = multiples.filter(num =>
    factors.some(f => num % f === 0)
  );

  const sum = validMultiples.reduce((a, b) => a + b, 0);

  const result = `${sum} : ${factors.join(" ")} : ${multiples.join(" ")}`;

  alert(result);
  output.textContent = result;
}

function parseNumbers(str) {
  return str.split(/\s+/).map(Number).filter(n => !isNaN(n));
}
