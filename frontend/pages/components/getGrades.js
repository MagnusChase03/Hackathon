import React, { Component } from 'react'

export default class extends Component {
    state = { grades: "NO GRADES" }
    static async getInitialProps() {
        fetch('http://localhost:3001/grades/fall/2018')
            .then(res => res.json())
            .then(json => {console.log(json);})

        return { grades }
    }
    componentDidMount() {
        this.setState({
            grades: this.props.grades
        })
    }
    render() {
        return (
            <div>
                <h1>Grades</h1>
                <p>{this.state.grades}</p>
            </div>
        )
    }
}
