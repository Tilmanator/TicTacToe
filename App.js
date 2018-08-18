import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Options from './components/Options';
import Header from './components/Header';
//import Board from './components/Board';
import Game from './components/Game';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.newGame = this.newGame.bind(this);
  }

  newGame(){
    this.child.newGame();
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        <Game ref={instance => {this.child = instance; }}/>
        <Options newGame={this.newGame}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
