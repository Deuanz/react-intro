import React from 'react'
import axios from 'axios'


export class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query : ''
        }
    }
    onSearchClick(event) {
        event.preventDefault()
        console.log("this.onSearchClick", this.state.query)
        axios.get(`http://www.omdbapi.com/?s=${this.state.query}&y=&plot=short&r=json`)
    }
    onQueryChange(event) {
        const query = event.target.value
        console.log('this.onQueryChange', query)
        this.setState({
            query: query
        })
    }
    render () {
        return (
            <form>
                <input type="text" value={this.state.query} onChange={this.onQueryChange.bind(this)} />
                <button onClick={this.onSearchClick.bind(this)}>Search</button>
            </form>
        )
    }
}
