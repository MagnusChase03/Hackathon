var express = require('express');
var fs = require('fs');
var router = express.Router();

// Returns grades
router.get('/grades/:semester/:year', function(req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];
  
  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + ""   + year + ".json"
  fs.readFile(dataLocation, (err, data) => {

    res.json (JSON.parse(data.toString()));

  });

});

router.get('/grades/:semester/:year/:prof', function(req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];
  var professor = req.params["prof"]
  
  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + ""   + year + ".json"
  fs.readFile(dataLocation, (err, data) => {

      var grades = JSON.parse(data.toString());
      
      var matches = [];
      for (var grade in grades) {

        var grader = grades[grade];
        if (grader["prof"].includes(professor)) {

            matches.push(grader);

        }

      }

      res.json(matches);

  });

});

module.exports = router;
