var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res) {
  res.json([
    {
      username: 'dickeyxxx',
      body: 'node rocks!'
    }
  ])
})

app.post('/', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});

app.listen(3000, function () {
  console.log('Server listening on', 3000)
})