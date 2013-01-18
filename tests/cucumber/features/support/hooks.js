
// var mongo = require('mongodb')
// var BSON = mongo.BSONPure
// var connect = require('mongodb').connect

var myHooks = function () {
//   this.Before("@clean-mongo-db", function(next) {
//     if (process_env.NODE_ENV === "staging" || process_env.NODE_ENV === "production") {
//       next()
//       return
//     }
//     
//     connect(process_env.MONGOHQ_URL, function(error, db) {
//       if (error) {
//         console.log(error)
//         db.close()
//         next()
//         return
//       }
//       db.collections(function(err, collections) {
//         var length = collections.length
//         if (length === 0) {
//           db.close()
//           next()
//           return
//         }
//         
//         collections.forEach(function(collection) {
//           collection.drop(function() {
//             if (--length === 0) {
//               db.close()
//               next()
//               return
//             }
//           })
//         })
//       })
//     })
//   })
  
  this.After(function (next) {
    delete this.browser
    delete this.World
    next()
  })
}

module.exports = myHooks