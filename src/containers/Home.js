import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ListItem from '../components/ListItem';
import data from '../share/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataInmobili: [],
    };
  }

  componentDidMount() {
    this.setState({
      dataInmobili: data,
    });
  }

  render() {
    return (
      <View style={styles.homeConatiner}>
        <ListItem data={this.state.dataInmobili} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeConatiner: {
    flex: 1,
  }
});

export default Home;
