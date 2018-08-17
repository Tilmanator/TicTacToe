import React from 'react';
import { FlatList, Alert, Button, StyleSheet, Text, View } from 'react-native';


export default class OptionsItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item);
  };

  render() {
    return (
      <Button
        style={styles.item}
        onPress={ this._onPress }
        title={this.props.item.key}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
