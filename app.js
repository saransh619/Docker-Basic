const express = require("express");
const app = express();

app.get("/api/email", (req, res) => {
  res.json({
    name: "Lucifer Devil",
    email: "lucifer@gmail.com",
  });
});

const PORT = 3300;

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
