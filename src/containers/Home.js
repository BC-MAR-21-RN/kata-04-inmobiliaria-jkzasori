import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, Search} from '../components';

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

  filterData = param => {
    if (param.length > 0) {
      this.setState({
        dataInmobili: this.state.dataInmobili.filter(item =>
          item.name.toLowerCase().includes(param),
        ),
      });
    } else {
      this.setState({
        dataInmobili: data,
      });
    }
  };

  render() {
    return (
      <View style={styles.homeConatiner}>
        <Search filter={this.filterData} />
        <ListItem data={this.state.dataInmobili} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeConatiner: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
});

export default Home;
