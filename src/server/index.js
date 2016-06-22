import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { title: 'DeadLine' })
})

let server = app.listen(port, (err) => {
  if (err) return console.log('Error'), process.exit(1)

  console.log('DeadLine Listen in Port ', port)
})