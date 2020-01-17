/*import React from 'react';
import Marker from 'react-native-maps';
import { StyleSheet, Image, View, Text, Callout } from 'react-native';

function DevsMarker(props) {
  const {
    _id,
    location,
    avatar_url,
    github_username,
    name,
    bio,
    techs
  } = props.dev;
  const { navigation } = props.navigation;
  return (
    <Marker
      key={_id}
      coordinate={{
        longitude: location.coordinates[0],
        latitude: location.coordinates[1]
      }}
    >
      <Image style={styles.avatar} source={{ uri: avatar_url }} />
      <Callout>
        <View style={styles.callout}>
          <Text style={styles.devName}>{name}</Text>
          <Text style={styles.devBio}>{bio}</Text>
          <Text style={styles.devTechs}>{techs.join(', ')}</Text>
        </View>
      </Callout>
    </Marker>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff'
  },
  callout: { width: 260 },
  devName: { fontWeight: 'bold', fontSize: 16 },
  devBio: { color: '#666', marginTop: 5 },
  devTechs: { marginTop: 5 },
  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    display: 'flex',
    flexDirection: 'row'
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8e4dff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  }
});

export default DevsMarker;
*/
