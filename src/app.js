import React from 'react'
import ReactDOM from 'react-dom'
import {SearchForm} from './search-form'
import axios from 'axios'
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'

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
        if(props.location.query.s) {
            this.onSearch(props.location.query.s)
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

const batmanQuery = {
    pathname: '/search',
    query: {
        s: "batman"
    }
}

const avengerQuery = {
    pathname: '/search',
    query: {
        s: "avenger"
    }
}

const vampireQuery = {
    pathname: '/search',
    query: {
        s: "vampire"
    }
}

const Home = () => (
    <section>
        <h1>This is HOME</h1>
        <ul>
            <li><Link to={batmanQuery}>Batman</Link></li>
            <li><Link to={avengerQuery}>Avenger</Link></li>
            <li><Link to={vampireQuery}>Vampire</Link></li>
        </ul>
    </section>
)

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                Title: 'Unknown'
            }
        }
        if(props.location.query.id) {
            const id = props.location.query.id
            axios.get(`http://www.omdbapi.com/?i=${id}&plot=short&r=json`)
                .then(resposne => {
                    const movie = resposne.data
                    this.setState({
                        movie: movie
                    })
                })
        }
    }
    render() {
        const {Title, Genre, Poster} = this.state.movie
        return (
            <section>
                <h1>{Title}</h1>
                <small>{Genre}</small>
                <div>
                    <img src={Poster} />
                
                </div>
            </section>
        )
    }
}


const Nav = () => (
    <nav>
        <ul>
            <li><Link to="/" >HOME</Link></li>
            <li><Link to="/search" >SEARCH</Link></li>
            <li><Link to="/detail" >DETAIL</Link></li>
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
                    <IndexRoute component={Home} />
                    <Route path="detail" component={Detail} />
                    <Route path="search" component={Search} />
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('app'))