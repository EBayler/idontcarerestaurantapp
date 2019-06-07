var path = require('path');


module.exports = function(app){
  app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, ('../public/index.html')))
  })

  app.get('/reservation', function (req, res, next) {
    res.sendFile(path.join(__dirname, ('../public/reservation.html')))
  })


  app.get('/tables', function (req, res, next) {
    res.sendFile(path.join(__dirname, ('../public/tables.html')))
  })
}