import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card';

class ListItem extends Component {
  render() {
    return (
      <View style={styles.listContainer}>
        <Card />
        <Card />
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 15,
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
});

export default ListItem;
