import ratemyprofessor
import pymongo
import json


CLIENT = pymongo.MongoClient("mongodb://localhost:27017/")
DB = CLIENT["hackathon"]
COLLECTION = DB["ratemyprofessor"]

collist = DB.list_collection_names()

# professorName = "Khiem Le" lol

professor = ratemyprofessor.get_professor_by_school_and_name(
    ratemyprofessor.get_school_by_name("The University of Texas at Dallas"), professorName)

if professor is not None:
    data =  {
    "professor":professor.name,
    "department":professor.department,
    "rating":professor.rating,
    "difficulty":professor.difficulty,
    "numberOfRatings":professor.num_ratings,
    "wouldTakeAgain":round(professor.would_take_again, 1)
    }
else: 
    data =  {
    "professor":null,
    "department":null,
    "rating":null,
    "difficulty":null,
    "numberOfRatings":null,
    "wouldTakeAgain":null
}

json_string = json.dumps(data)
print(json_string)






