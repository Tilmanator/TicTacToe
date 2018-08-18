import React from 'react';
import { FlatList, Alert, Button, StyleSheet, Text, View } from 'react-native';

import OptionsItem from './OptionsItem';

export default class Options extends React.Component {
  constructor(props){
    super(props);
    this.toggleOptions = this.toggleOptions.bind(this);
    this.optionList = this.optionList.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
    this.state = {
      showOptions : false,
    }
  }

  onPressItem(item) {
    switch (item.key) {
      case 'New Game':
        this.props.newGame();
        break;
      case 'Undo Move':
        Alert.alert('Not working');
        break;
      default:
        Alert.alert('Nothing happens.');
    }
    this.setState({
      showOptions: !this.state.showOptions,
    });
  }

  toggleOptions(){
    this.setState({
      showOptions: !this.state.showOptions,
    });
  }

  optionList(){
    if(this.state.showOptions){
      return (
        <FlatList
          style={{height: 200,
            marginBottom: 80,
            backgroundColor: '#ddd',
            position: 'absolute',
            top: -231,
          }}
      data={[
        {key: 'New Game'},
        {key: 'Undo Move'},
        {key: 'Something else'},
      ]}
      renderItem={({item}) =>
        <OptionsItem
            item={item}
            onPressItem={this.onPressItem}
        />
        }
    />);
    }
    else{
      return null;
    }
  }

  render() {
    return (
      <View style={styles.option}>
        <Text style={styles.other}>Skrt</Text>
        <View style={{flex:1,
          flexDirection: 'column',
        justifyContent: 'center',
      alignItems: 'center'}}>
          {this.optionList()}
          <Button onPress={this.toggleOptions}
                  style={styles.other}
                  title="Options"
          />
        </View>
        <Text style={styles.other}>Yeet</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  option: {
    flex: 1,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  other: {
    textAlign: 'center',
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


       {/* <Button
          style={styles.item}
          onPress={()=>{ Alert.alert(item.key);}}
          title={item.key}
        /> */}
