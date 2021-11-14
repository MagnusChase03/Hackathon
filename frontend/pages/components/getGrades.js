import React, { Component } from 'react'

function getGrades() {
    fetch('http://localhost:3001/grades/fall/2018')
        .then(res => res.json())
        .then(json => { console.log("API FETCH SUCCESS"); })
}

function validateForm() {
    let semester = document.forms["classSearch"]["semester"].value;
    let year = document.forms["classSearch"]["year"].value;
    let subject = document.forms["classSearch"]["subject"].value;
    let course = document.forms["classSearch"]["course"].value;
    let professor = document.forms["classSearch"]["professor"].value;

    console.log(semester);
}

function Form() {
    return (
        <form name="classSearch" onSubmit={this.handleSubmit}>
            
            <label htmlFor="semester">Semester</label>
            <select id="semester" name="semester" required>
                <option value="fall">Fall</option>
                <option value="spring">Spring</option>
            </select>

            <label htmlFor="year">Year</label>
            <select id="year" name="year" required>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />

            <label htmlFor="course">Course</label>
            <input type="text" id="course" name="course" />

            <label htmlFor="professor">Professor</label>
            <input type="text" id="professor" name="professor" />

            <button type ="submit">SEARCH</button>
        </form>
    )
}



export default class extends Component {
    render() {
        return (
            <div>
                <h1>Grades</h1>
                {/* <p>{getGrades()}</p> */}
                <Form />
            </div>
        )
    }
}
