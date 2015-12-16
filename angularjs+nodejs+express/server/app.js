var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());




app.get('/api/token', function (req, res) {
  res.json([
    {
      token: '0123212',
      expires: '01012016'
    }
]);
});

app.post('/', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});

app.listen(3000, function () {
  console.log('Server listening on', 3000);
});
