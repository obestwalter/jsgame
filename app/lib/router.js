
var index = require('../routes/index')

exports.init = (function() {
  
  function Router() {
    this._routes = {}
  }
  
  Router.prototype.route = function(verb, name, route, handler) {
    var route = {
      verb: verb,
      route: route,
      url: function(replace) {
        var build_route = this.route
        for (item in replace) {
          build_route = build_route.replace(item, replace[item])
        }
        return build_route
      },
      handler: function() {
        return handler
      },
      build: function(app) {
        app[this.verb](this.route, this.handler())
      }
    }
    this._routes[name] = route
  }

  Router.prototype.build = function(app) {
    for (route in this._routes) {
      this._routes[route].build(app)
    }
   // console.log(app.routes)
  }

  Router.prototype.routes = function() {
    return this._routes
  }

  return function() {

    var routes = new Router()
    // Exmapels
    // routes.route('post',    'login_post',                   '/login',                                                         login.login)

    routes.route('get',     'other_route',                  '/other_route/:id',                                               index.example)
    routes.route('get',     'example',                      '/example/:id',                                                   index.example)
    routes.route('get',     'root',                         '/',                                                              index.index)
    routes.route('get',     'game',                         '/game',                                                          index.game)

    return routes
  }
  
  
})()
