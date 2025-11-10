function processInputCorrupt() {
  const input = document.getElementById("inputStr").value.trim();

  try {
    if (!input.includes(":")) throw "Invalid format";

    const [factorsStr, multiplesStr] = input.split(":").map(s => s.trim());

    const factors = parseNumbersStrict(factorsStr);
    const multiples = parseNumbersStrict(multiplesStr);

    const validMultiples = multiples.filter(num =>
      factors.some(f => num % f === 0)
    );

    const sum = validMultiples.reduce((a, b) => a + b, 0);
    const result = `${sum} : ${factors.join(" ")} : ${multiples.join(" ")}`;

    alert(result);
  } catch (e) {
    alert(`corrupt : ${input}`);
  }
}

function processInputSkipCorrupt() {
  const input = document.getElementById("inputStr").value.trim();

  if (!input.includes(":")) {
    alert("corrupt : " + input);
    return;
  }

  const [factorsStr, multiplesStr] = input.split(":").map(s => s.trim());

  const factors = parseNumbersSafe(factorsStr);
  const multiples = parseNumbersSafe(multiplesStr);

  if (factors.length === 0 || multiples.length === 0) {
    alert("corrupt : " + input);
    return;
  }

  const validMultiples = multiples.filter(num =>
    factors.some(f => num % f === 0)
  );

  const sum = validMultiples.reduce((a, b) => a + b, 0);
  const result = `${sum} : ${factors.join(" ")} : ${multiples.join(" ")}`;

  alert(result);
}

function parseNumbersStrict(str) {
  const parts = str.split(/\s+/);
  return parts.map(i => {
    const o = parseInt(i);
    if (isNaN(o)) throw "NaN";
    return o;
  });
}

function parseNumbersSafe(str) {
  return str.split(/\s+/)
    .map(i => parseInt(i))
    .filter(n => !isNaN(n));
}
