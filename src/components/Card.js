import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBed,
  faStar,
  faBath,
  faHeart,
  faArrowsAltV,
  faExpand,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.imageOutside}>
          <ImageBackground
            style={styles.image}
            imageStyle={{borderRadius: 15}}
            source={{
              uri:
                'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}>
            <Text style={styles.evaluation}>
              <FontAwesomeIcon color={'#eeba00'} size={16} icon={faStar} /> 4.7
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>The Willows</Text>
          <Text style={styles.addres}>
            <FontAwesomeIcon style={styles.icons} icon={faMapMarkerAlt} /> 3517
            W. Gray St. Utica
          </Text>
          <View style={styles.roomSpace}>
            <Text style={styles.textBody}>
              <FontAwesomeIcon size={20} style={styles.icons} icon={faBed} /> 3
            </Text>
            <Text style={styles.textBody}>
              <FontAwesomeIcon size={20} style={styles.icons} icon={faBath} /> 2
            </Text>
            <Text style={styles.textBody}>
              <FontAwesomeIcon size={16} style={styles.icons} icon={faExpand} />
              <FontAwesomeIcon
                size={16}
                style={styles.icons}
                icon={faArrowsAltV}
              />{' '}
              230 ft2
            </Text>
          </View>
          <View style={styles.footerCard}>
            <Text style={styles.text}>$440/m</Text>
            <View style={styles.hearContainer}>
              <FontAwesomeIcon color="white" size={15} icon={faHeart} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5fdff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 10,
    borderColor: '#e5e5e5',
    borderWidth: 1,
  },
  imageOutside: {
    width: '35%',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 15,
  },
  evaluation: {
    backgroundColor: '#fbedb7',
    color: '#7a6229',
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 20,
    width: 62,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerText: {
    width: '62%',
  },
  roomSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  textBody: {
    fontSize: 16,
  },
  icons: {
    color: '#a6abb1',
  },
  addres: {
    fontSize: 16,
    marginTop: 5,
    color: '#a6abb1',
  },
  footerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hearContainer: {
    backgroundColor: '#00b074',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default Card;
