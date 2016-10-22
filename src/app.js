import React from 'react'
import ReactDOM from 'react-dom'
import {SearchForm} from './search-form'
import axios from 'axios'

export const MovieList = (props) => (
    <ul>
    {props.movies.map((movie, i) => {
        return (
            <li key={i}>
                <h4>{movie.Title}</h4>
                <img src={movie.Poster} />
            </li>
        )
    })}
    </ul>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    onSearch(query) {
        event.preventDefault()
        axios.get(`http://www.omdbapi.com/?s=${query}&y=&plot=short&r=json`)
            .then(response => {
                const movies = response.data.Search
                this.setState({
                    movies: movies
                })
            })
    }

    render() {
        return (
        <section>
            <h1>Movie Collection</h1>
            <SearchForm onSearchSubmit={this.onSearch.bind(this)}/>
            <MovieList movies={this.state.movies} />
        </section>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))