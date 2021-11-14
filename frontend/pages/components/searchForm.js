import React, { Component } from 'react'
import style from '../../styles/ClassInfo.module.css'


function getRMP(prof) {
    let returnedJSON = {}
    fetch('http://localhost:3001/rating/' + prof)
        .then(res => res.json())
        .then(json => {
            // console.log(json);
            returnedJSON = json;
            return returnedJSON;
        })
}

// This function creates elements out of the JSON that is returned
// Edit this to change the way the elements on the page look
function createElements(stringJSON) {
    let json = JSON.parse(stringJSON);
    let elements = [];
    for (let i = 0; i < json.length; i++) {

        let a1 = Number(json[i]["grades"]['A+']) || 0;
        let a2 = Number(json[i]["grades"]['A']) || 0;
        let a3 = Number(json[i]["grades"]['A-']) || 0;

        let b1 = Number(json[i]["grades"]['B+']) || 0;
        let b2 = Number(json[i]["grades"]['B']) || 0;
        let b3 = Number(json[i]["grades"]['B-']) || 0;

        let c1 = Number(json[i]["grades"]['C+']) || 0;
        let c2 = Number(json[i]["grades"]['C']) || 0;
        let c3 = Number(json[i]["grades"]['C-']) || 0;

        let d1 = Number(json[i]["grades"]['D+']) || 0;
        let d2 = Number(json[i]["grades"]['D']) || 0;
        let d3 = Number(json[i]["grades"]['D-']) || 0;


        elements.push(
            <div className={style.courseCard}>
                <ul>
                    <li key={i}>Course: {json[i]["subj"]} {json[i]["num"]}</li>
                    <li key={i}>Instructor: {json[i]["prof"]}</li>
                    <li key={i}>A: {a1 + a2 + a3}</li>
                    <li key={i}>B: {b1 + b2 + b3}</li>
                    <li key={i}>C: {c1 + c2 + c3}</li>
                    <li key={i}>D: {d1 + d2 + d3}</li>
                    <li key={i}>F: {Number(json[i]["grades"]['F']) || 0}</li>
                </ul>
            </div>


        )
    }
    return elements;
}

function createRMP(stringJSON) {
    let json = JSON.parse(stringJSON);
    let elements = [];

    for (let i = 0; i < json.length; i++) {
        let prof = json[i]["prof"];

        fetch('http://localhost:3001/rating/' + prof)
            .then(res => res.json())
            .then(json => {
                console.log(json[i]["rating"]);
                console.log("RMP SUCCESS")
                elements.push(
                    <div>
                        <ul>
                            <li key={i}>Rating: {json[i]["rating"]}</li>
                            <li key={i}># of Ratings: {json[i]["numberOfRatings"]}</li>
                            <li key={i}>Difficulty: {json[i]["difficulty"]}</li>
                            <li key={i}>% Would Take Again: {json[i]["wouldTakeAgain"]}</li>
                        </ul>
                    </div>
                )
            })



    }
    return elements;
}

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { semester: 'fall', year: '2017', subject: '', course: '', professor: '', best: false, itemCount: 0, returnedJSON: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.elements = [];
        this.rmpElements = [];
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);



        if (this.state.subject == '' && this.state.course == '' && this.state.professor == '') {
            fetch('http://localhost:3001/grades/' + this.state.semester + '/' + this.state.year)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    this.setState({ returnedJSON: JSON.stringify(json) });
                    this.elements = createElements(this.state.returnedJSON);
                    this.forceUpdate();
                })
        }
        else if (this.state.professor != '' && this.state.subject == '' && this.state.course == '') {
            fetch('http://localhost:3001/grades/' + this.state.semester + '/' + this.state.year + '/' + this.state.professor)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    this.setState({ returnedJSON: JSON.stringify(json) });
                    this.elements = createElements(this.state.returnedJSON);
                    this.forceUpdate();
                })
        }
        else if (this.state.professor == '' && this.state.subject != '' && this.state.course != '' && !this.state.best) {
            fetch('http://localhost:3001/grades/' + this.state.semester + '/' + this.state.year + '/' + this.state.subject + '/' + this.state.course)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    this.setState({ returnedJSON: JSON.stringify(json) });
                    this.elements = createElements(this.state.returnedJSON);
                    this.forceUpdate();
                })
        }
        else if (this.state.professor == '' && this.state.subject != '' && this.state.course != '' && this.state.best) {
            fetch('http://localhost:3001/grades/best/' + this.state.semester + '/' + this.state.year + '/' + this.state.subject + '/' + this.state.course)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    this.setState({ returnedJSON: JSON.stringify(json) });
                    this.elements = createElements(this.state.returnedJSON);
                    this.forceUpdate();
                })
        }
        else {
            alert("Invalid search, please ensure all items are lowercase!")
        }
    }

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Semester
                        <select name='semester' value={this.state.value} onChange={this.handleChange} required>
                            <option value="fall">Fall</option>
                            <option value="spring">Spring</option>
                        </select>
                    </label>

                    <label>
                        Year
                        <select name='year' value={this.state.value} onChange={this.handleChange} required>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </label>

                    <label>
                        Subject
                        <input type="text" name='subject' value={this.state.subject} onChange={this.handleChange} />
                    </label>

                    <label>
                        Course
                        <input type="text" name='course' value={this.state.course} onChange={this.handleChange} />
                    </label>

                    <label>
                        Professor
                        <input type="text" name='professor' value={this.state.professor} onChange={this.handleChange} />
                    </label>

                    <label>
                        Best
                        <input type="checkbox" name="best" value={this.state.best} onChange={this.handleChange} />
                    </label>

                    <input type="submit" value="Submit" />
                </form>
                <div className='returnedElements'>
                    {this.elements}
                    {this.rmpElements}
                </div>

            </div>
        )
    }

}