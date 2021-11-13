var express = require('express');
var fs = require('fs');
var router = express.Router();

// Returns grades
router.get('/grades/:semester/:year', function(req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];
  
  // Sending Data file
  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + ""   + year + ".json"
  fs.readFile(dataLocation, (err, data) => {

    res.json(JSON.parse(data.toString()));

  });

});

// Returns grades containing proffesor name
router.get('/grades/:semester/:year/:prof', function(req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];
  var professor = req.params["prof"]
  
  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + ""   + year + ".json"
  fs.readFile(dataLocation, (err, data) => {

      var grades = JSON.parse(data.toString());
      
      // Finding grades with matching professor
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

// Returns professor with most A+ in class
router.get('/grades/best/:semester/:year/:subj/:class', function(req, res, next) {

  var semester = req.params["semester"];
  var year = req.params["year"];
  var subject = req.params["subj"];
  var classNumber = req.params["class"];
  
  var dataLocation = "data/" + semester[0].toUpperCase() + semester.slice(1) + " " + year + "/" + semester + ""   + year + ".json"
  console.log(dataLocation);

  fs.readFile(dataLocation, (err, data) => {

      var grades = JSON.parse(data.toString());
      
      // Finding grades with matching professor
      var bestGradeCount = 0;
      var bestGrader = grades[0];

      for (var grade in grades) {

        if (grades[grade]["subj"] == subject && grades[grade]["num"] == classNumber && grades[grade]["grades"]["A+"] > bestGradeCount) {

            bestGradeCount = grades[grade]["grades"]["A+"];
            bestGrader = grades[grade];

        }

      }

      res.json(bestGrader);

  });

});

module.exports = router;
