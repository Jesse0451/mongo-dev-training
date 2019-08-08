

onlyLuft = {$match : {"airline.name": "Lufthansa"}}
leavesBerlin = { $match: {src_airport : "TXL", dst_airport: "CDG"} }

graphLookup = {
  $graphLookup: {
    from: "routes",
    startWith: "$src_airport",
    connectFromField: "src_airport", 
    connectToField: "dst_airport",
    as: "flightPaths",
    maxDepth: 1,
    restrictSearchWithMatch: {"airline.name": "Lufthansa"}
  }
}
unwind = {$unwind: "$flightPaths"};

groupByDes =  {$group : {_id: "$dst_airport" }};


result =  db.routes.aggregate([ onlyLuft, leavesBerlin, graphLookup ])
  