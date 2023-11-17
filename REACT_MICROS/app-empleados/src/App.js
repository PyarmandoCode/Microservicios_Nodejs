import React, { Component } from "react"

class App extends Component {
    constructor() {
        super()
        this.state = { data: [] }
    }
    componentDidMount() {
        fetch(`http://localhost:3000/api/empleados`, {
            method: 'GET'
            // headers: {
            //     Accept: 'application/json',
            //             'Content-Type': 'application/json',
            //             'Authorization':"Token" + '12334343434',

            // },
        })
            .then(res => res.json())
            .then(json => this.setState({ data: json }))
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.data.map(items => (
                            <li>dato1:{items.name}</li>
                        ))}
                </ul>
            </div>

        )

    }
}

export default App;