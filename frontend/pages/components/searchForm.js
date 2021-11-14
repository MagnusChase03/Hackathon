import React, { Component } from 'react'


// This function creates elements out of the JSON that is returned
// Edit this to change the way the elements on the page look
function createElements(stringJSON) {
    let json = JSON.parse(stringJSON);
    let elements = [];
    for (let i = 0; i < json.length; i++) {
        elements.push(<li key={i}>{json[i]["prof"]}</li>)
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
                    // console.log(this.state.returnedJSON);
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
                    // console.log(this.state.returnedJSON);
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
                    // console.log(this.state.returnedJSON);
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
                    // console.log(this.state.returnedJSON);
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
                    <ul>
                        {this.elements}
                    </ul>
                </div>

            </div>
        )
    }

}