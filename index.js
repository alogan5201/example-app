const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/landing', (req, res) => res.render('pages/landing'))
  .get('/cascade', (req, res) => res.render('pages/cascade'))
  .get('/test', (req, res) => res.render('pages/test'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
