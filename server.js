const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use("/", require("./routes/routes"));

app.listen(PORT, () => console.log("server running"));
