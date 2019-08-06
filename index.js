const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const buildPath = 'dist'
const pathToTemplates = path.join(__dirname, buildPath);


express()
.use(express.static(pathToTemplates))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))