const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  console.log(__dirname)
  // path.resolve will give the absolute path (đường dẫn tuyệt đối)
  // console.log(path.resolve(__dirname, './navbar-app/index.html'))
  res.sendFile(path.resolve('./navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
