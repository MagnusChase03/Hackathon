import React, { Component } from 'react'

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { semester: 'fall', year: '2018', subject: '', course: '', professor: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        // alert('YOU SELECTED: ' + this.state.value);
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Semester
                    <select name='semester' value={this.state.value} onChange={this.handleChange}>
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

                <input type="submit" value="Submit" />
            </form>
        )
    }

}