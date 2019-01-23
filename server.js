const express = require('express')
var jsonFile = require("./response.json");
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static('public'))

const PORT = process.env.PORT || 5000

app.get("/", function(req, res, next) {
  res.json(jsonFile);
});
app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
})