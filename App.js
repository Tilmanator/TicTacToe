import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Options from './components/Options';
import Header from './components/Header';
//import Board from './components/Board';
import Game from './components/Game';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        <Game style={{flex: 5, backgroundColor: 'powderblue'}} />

        <Options />
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
