const adom = require('./index')
const fs = require('fs')
const http = require('http')

function render (file, data) {
  return adom(fs.readFileSync(file).toString(), data)
}

http.createServer(function (req, res) {
  const html = render('index.adom', {
    items: [{
      name: '',
      initTitle: '',
      initText: ''
    }]
  })

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(html)
}).listen(8000, function () { console.log('listening on 8000') })

