import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Card from './Card';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  listCard({item}) {
    return (
      <View>
        <Card element={item} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={this.props.data}
          renderItem={this.listCard}
          keyExtractor={item => item.id}
        />
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
