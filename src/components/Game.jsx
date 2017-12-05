import React from 'react'
import Board from './Board.jsx'

import { connect } from 'react-redux'
import {getMemoryBoard } from '../redux/reducer'


class Game extends React.Component {
  componentDidMount(){
    this.props.mountMemories()
  }

  render() {
    //console.log("props === ", this.props.parts)
    let parts = this.props.parts || [1,2,3]

    return (
      <div className="game">
        <div>
        <div className="content">
          <h1>🙈🙈Hello</h1>
          <p> put them back to the order '0🥚', '1🌲', '2🍃','3🍂',
                      '4🍀', '️5🌴', '6🍪',
                      '7x(empty)','8🌿'</p>
        </div>
        <Board parts={parts}/>
        </div>
          <div className="game-info">
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
  }
}

const memoryStack = [ '🌳',' ', '☘',
'🌲', '🌱', '🍀', 
'🌵', '🌿', '️🍃' ]

const mapStateToProps = state => {
  return {
    parts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mountMemories: function () {
      dispatch(getMemoryBoard());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
