import React, { Component } from 'react'

export default class extends Component {
    state = { grades: "NO GRADES" }
    static async getInitialProps() {
        const res = await fetch('http://localhost:3001/grades/fall/2018')
        const grades = await res.json()
        console.log(grades)
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
