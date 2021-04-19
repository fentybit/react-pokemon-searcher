import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  render() {
    const url = this.props.pokemon.isClicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front

    return (
      <Card>
        <div onClick={() => this.props.toggleImage(this.props.pokemon)}>
          <div className="image">
            <img src={url} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
