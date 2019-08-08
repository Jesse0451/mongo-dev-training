
//Lab: Basix Indexes



explainBefore  = db.routes.find({"airline.id":2009}).explain("executionStats")

db.routes.createIndex({"airline.id": 1})

explainAfter = db.routes.find( {"airline.id":2009} ).explain("executionStats")


db.messages.find( { timestamp : { $gte : 2, $lte : 4 }, username : "anonymous" } ).explain("executionStats")
