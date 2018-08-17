import React from 'react';

import { TouchableHighlight, FlatList, Alert, Button, StyleSheet, Text, View } from 'react-native';

function Square(props) {
  return (
    <TouchableHighlight style={styles.spot}
            onPress={props.onClick}
            title='X'
            containerViewStyle={{width: '28%', marginLeft: '4%'}}
      >
      <Text style={styles.symbol}>{props.value}</Text>
    </TouchableHighlight>
  );
}

export default class Board extends React.Component {

  renderSquare(i) {
    return (
    <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
    );
  }

  render() {
    return (
      <View style={styles.column}>
        <View style={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </View>
        <View style={styles.row}>
            className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </View>
        <View style={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  column: {
    backgroundColor: 'black',
    flex: 5,
    flexDirection: 'column',
  },
  spot: {
    alignItems: 'center',
    flex: 1,
    padding: 0,
    height: 160,
    justifyContent: 'center',
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'black',
  },
  symbol: {
    fontSize: 80,
  }
});
