db.movies.drop();

db.movies.insertOne({ 
  "title" : "Raiders of the Lost Ark",
  "filming_locations" : [ 
    { "city" : "Los Angeles", "state" : "CA", "country" : "USA" },
    { "city" : "Rome", "state" : "Lazio", "country" : "Italy" },
    { "city" : "Florence", "state" : "SC", "country" : "USA" }
  ] 
})

// This query is incorrect, it won’t return what we want
 notright = db.movies.find( { "filming_locations.city" : "Florence", "filming_locations.country" : "Italy" } )
// $elemMatch is needed, now there are no results, this is expected
 db.movies.find( { "filming_locations" : { $elemMatch : { "city" : "Florence", "country" : "Italy" } } } )


