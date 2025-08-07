const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/check-prime", (req, res) => {
  const { number } = req.body;

  if (!Number.isInteger(number) || number < 1) {
    return res.json({ message: "Please enter a valid positive integer." });
  }

  if (number === 1) {
    return res.json({ message: "1 is not a prime number." });
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  const message = isPrime
    ? `${number} is a Prime Number.`
    : `${number} is NOT a Prime Number.`;

  res.json({ message });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
