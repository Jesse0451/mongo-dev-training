// Aggregation Pipelines.

match = { $match: { "user.time_zone": "Brasilia", "user.statuses_count": { $gte: 100 } } };
sort = { $sort: { "user.followers_count": -1 } }
limit = { $limit: 1 }
project = { $project: { followers: "$user.followers_count", screen_name: "$user.screen_name", tweets: "$user.statuses_count" } }

//db.tweets.aggregate([match, sort ,limit, project])


db.tweets.aggregate(
  [
    { "$group": { "_id": "$user.screen_name", "tweet_texts": { "$push": "$text" }, "count": { "$sum": 1 } } },
    { "$sort": { "count": -1 } },
    { "$limit": 3 }
  ]
)
