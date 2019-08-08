// insert many

db.movies.drop()
db.movies.insertMany(
    [
        { "title": "Jaws", "year": 1975 },
        { "title": "Batman", "category": ["action", "adventure"] },
        { "title": "Godzilla", "category": ["action", "adventure", "sci-fi"] },
        { "title": "Home Alone", "category": ["family", "comedy"] },
        { "title": "Titanic", "year": 1997 },
        { "title": "The Lion King", "year": 1994 }
    ],
    { ordered: false }
)
actionMovies = db.movies.find({ category: "action" })

db.movies.insertMany(
    [
        {
            "title": "Avatar",
            "imdb_rating": null,
            "box_office": { "gross": 760, "budget": 237, "opening_weekend": 77 }
        },
        {
            "title": "E.T.",
            "box_office": { "gross": 349, "budget": 10.5, "opening_weekend": 14 }
        }
    ]
)
empty = db.movies.find({ "box_office": { "gross": 760 } }) //  nothing
gross760 = db.movies.find({ "box_office.gross": 760 }) //  something




db.movies.insertOne( { 
    "title": "Forrest Gump",
    "category": ["drama", "romance"],
    "imdb_rating": 8.8,
    "filming_locations": [
        { "city": "Savannah", "state": "GA", "country": "USA" }, 
        { "city": "Monument Valley", "state": "UT", "country": "USA" }, 
        { "city": "Los Anegeles", "state": "CA", "country": "USA" }
    ], 
    "box_office": { "gross": 557, "opening_weekend": 24, "budget": 55 } 
})

//Projections, second argument to find, which fields to include.
forrestGumpProjection = db.movies.findOne( 
    { "title" : "Forrest Gump" }, 
    { "title" : 1, "imdb_rating" : 1 } 
    )




// the mongo shell is a js interpretor! which means all sorts of fun stuff.
db.stuff.drop()
for (i = 1; i <= 1000; i++) {
    db.stuff.insertOne({ "a": i })
}
allStuff = db.stuff.find()








db.sensor_readings.createIndex({active:1,tstamp:1})





