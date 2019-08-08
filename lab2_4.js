ex1 = db.grades.count({student_id: {$lt : 65}});

ex2 = db.inspections.count({result : {$in : ["Pass", "Fail"]}});

ex3 = db.stories.find( { 'shorturl.view_count' : { $gt : 1000} });

ex4 = db.stories.find({},{comments:1, diggs: 1}).sort({comments: -1}).limit(1);

ex5 = db.stories.find( {$or: [{'topic.name': "Television"}, {media: "videos"} ]}).skip(5).limit(10);

ex6 = db.stories.find( 
  {
    media: {$in : ["news", "images"]}, 
    'topic.name' : "Comedy"
  } 
)



db.companies.insertMany(
[ 
  { name: "Wetpaint", headline : "What is the air-speed velocity of an unladen swallow?" },
  { name: "Cisco", heaadline : "What do you mean? An African or a European swallow?"},
  { name: "SpinVox", headline : "Huh? I... I don’t know that."},
  { name: "OpenX", headline : "You’re using coconuts!" },
  { name: "Plaxo", headline : "What? A swallow carrying a coconut?" }
])
