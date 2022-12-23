const express = require('express')
const app = express()
const port = 3000


const routes = require("./Routes")
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})