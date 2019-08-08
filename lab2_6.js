

//exercise 5

db.product_metrics.insertOne(
  { 
    name: "backpack", 
    purchasesPast7Days: [ 0, 0, 0, 0, 0, 0, 0] 
  }
)


db.product_metrics.updateOne({})
