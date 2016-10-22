import React from 'react'
import ReactDOM from 'react-dom'
import {SearchForm} from './search-form'

const MovieList = (props) => (
    <ul>
    {props.movies.map((movie, i) => {
        return (
            <li key={i}>{movie.title}</li>
        )
    })}
    </ul>
)

const App = () => {
    const movies = [
        {
            title: 'Rogue One: A Star Wars Story'
        },
        {
            title: 'Guardians of the Galaxy Vol. 2'
        },
        {
            title: 'Doctor Strange'
        }
    ]
    return (
        <section>
            <h1>Movie Collection</h1>
            <SearchForm />
            <MovieList movies={movies} />
        </section>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))