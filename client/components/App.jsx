import React from 'react'

import {getFlowers} from '../api/'

import Flower from './Flower'

class App extends React.Component {
  state = {
    flowers: [],
    currentFlower: null
  }

  componentDidMount() {
    getFlowers()
    .then(flowers => {
      this.setState({
        flowers: flowers
      })
    })
  }

  showFlower = (event, flower) => {
    event.preventDefault()
    
    this.setState({
      currentFlower: flower
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome!</h1>
        <ul className="flower-list">
          {this.state.flowers.map(flower => {
            return <li key={flower.id} onClick={(e) => this.showFlower(e, flower)}><a href="#">{flower.name}</a></li>
          })}
        </ul>

        {this.state.currentFlower && 
          <Flower flower={this.state.currentFlower} />
        }
          
      </React.Fragment>
    )
  }
}

export default App