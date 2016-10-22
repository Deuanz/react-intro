import React from 'react'
import ReactDOM from 'react-dom'


class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query : ''
        }
    }
    onSearchClick(event) {
        event.preventDefault()
        console.log("this.onSearchClick", this.state.query)
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