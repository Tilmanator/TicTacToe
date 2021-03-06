import React from 'react';
import { FlatList, Alert, Button, StyleSheet, Text, View } from 'react-native';

import Board from './Board';

export default class Game extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xNext: true,
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xNext: !this.state.xNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xNext: (step % 2) === 0,
    });
  }

  newGame(){
    this.setState({
      stepNumber: 0,
      xNext: true,
      history: [{
        squares: Array(9).fill(null),
      }],
    });
  }
  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    const newGame = (
      <button onClick={() => this.newGame()}>New Game</button>
    );

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
      Alert.alert(status);
    } else if (this.state.stepNumber < 9) {
      status = 'Next player: ' + (this.state.xNext ? 'X' : 'O');
    }
    else{
      status = "Tie game!";
      Alert.alert(status);
    }

    // if(winner){
    //   return (
    //       <View style={{flex:5, backgroundColor: 'black'}}></View>
    //   );
    // }
    return (
      <Board
        squares={current.squares}
        onClick={(i) => this.handleClick(i)}
      />
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
