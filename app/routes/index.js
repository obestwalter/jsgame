
exports.index = function(req, res) {
  var protocol  = req.headers["x-forwarded-proto"] ? req.headers["x-forwarded-proto"].toLowerCase() : 'http'
  var domain    = req.host === 'localhost' ? 'localhost:3000' : req.host.toLowerCase()

  res.render('index', { domain: protocol +'://'+ domain })
};

exports.example = function(req, res) {
  var protocol  = req.headers["x-forwarded-proto"] ? req.headers["x-forwarded-proto"].toLowerCase() : 'http'
  var domain    = req.host === 'localhost' ? 'localhost:3000' : req.host.toLowerCase()

  var id        = req.params.id
  
  console.log(id)
  
  res.render('index', { domain: protocol +'://'+ domain, id: id })
};
