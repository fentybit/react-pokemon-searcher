import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(newPokemon => this.props.addPokemon(newPokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleOnChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleOnChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleOnChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleOnChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
