import React from 'react'
import ReactDOM from 'react-dom'
import {SearchForm} from './search-form'
import axios from 'axios'
import { Router, Route, hashHistory, Link } from 'react-router'

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

class Search extends React.Component {
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
const Home = () => (
    <section>
        <h1>This is HOME</h1>
    </section>
)

const Nav = () => (
    <nav>
        <ul>
            <li><Link to="/" >HOME</Link></li>
            <li><Link to="/search" >SEARCH</Link></li>
        </ul>
    </nav>
)

const App = props => (
    <section>
        <Nav />
        {props.children}
    </section>
)

class Main extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App} >
                    <Route path="search" component={Search} />
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'))