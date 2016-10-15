import React from 'react'
import ReactDOM from 'react-dom'


const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button type="submit">Search</button>
        </form>
    )
}
const Header = (props) => (
    <header className="app-container">
        <h1>{props.title}</h1>
        <SearchForm />
    </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
    <ul>
        {
            props.items.map(item => (
                <li>{item}</li>
            ))
        }
    </ul>
    )
}

const Content = (props) => (
    <section>
        <p>{props.description}</p>
        <Items items={props.items}/>
    </section>
)

const AppWithOutDescription = () => (
    <Header title="App with out discription"></Header>
)
const App = () => {
    const title = 'Fronttechs: React'
    const content = 'This is a simple react application ^^'
    const items = [
        "Oliver",
        "Tobey",
        "Charlie",
        "Lucky",
        "Poyo"
    ]
    return (
        <section>
            <Header title={title} />
            <Content
                description={content}
                items={items} />
        </section>
    )
}

const element = document.getElementById('app')
ReactDOM.render(<App />, element)