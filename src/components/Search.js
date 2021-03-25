import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = props => {
  const [search, setSearch] = useState('');

  const changeTextValue = text => {
    setSearch(text);
    props.filter(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        onChangeText={changeTextValue}
        placeholder="Type name of the place..."
        placeholderTextColor="gray"
        value={search}
      />
      <FontAwesomeIcon style={styles.iconSearch} icon={faSearch} size={20} />
    </View>
  );
};
const styles = StyleSheet.create({
  iconSearch: {
    color: 'black',
    position: 'absolute',
    right: 15,
  },
  searchBox: {
    fontSize: 20,
    color: 'gray',
    margin: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    margin: 15,
    color: 'gray',
    marginBottom: 0,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default Search;
