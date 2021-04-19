import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchVal: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons: pokemons }))
  }

  addPokemon = (newPokemon) => {
    this.setState({ pokemons: [...this.state.pokemons, newPokemon] })
  }

  handleOnChange = (event) => {
    this.setState({ searchVal: event.target.value })
  }

  toggleImage = pokemon => {
    const { pokemons } = this.state
    const index = pokemons.indexOf(pokemon)
    this.setState({
      pokemons: [
        ...pokemons.slice(0, index),
        { ...pokemon, isClicked: !pokemon.isClicked },
        ...pokemons.slice(index + 1)
      ]
    })
  }

  render() {
    const filteredPokemons = this.state.pokemons.filter(poke => poke.name.includes(this.state.searchVal))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.handleOnChange} />
        <br />
        <PokemonCollection pokemons={filteredPokemons} toggleImage={this.toggleImage} />
      </Container>
    )
  }
}

export default PokemonPage
