

import React, { Component } from 'react';  
import { StyleSheet, View } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
  
export default class App extends Component {  
  render() {  
    return (  
      <View style={styles.MainContainer}>  
  
        <MapView  
          style={styles.mapStyle}  
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 28.579660,   
            longitude: 77.321110,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
  
          <Marker  
            coordinate={{ latitude: 28.579660, longitude: 77.321110 }}  
            title={"Test"}  
            description={"Des"}  
          />  
        </MapView>  
          
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});  










// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';

// export default class App extends Component {
//   state = {
//     coordinate: {
//       latitude: 37.78825,
//       longitude: -122.4324,
//     }
//   }
//   render() {
//     let { latitude, longitude } = this.state.coordinate
//     return (
//       <View style={styles.MainContainer}>

//         <MapView
//           style={styles.mapStyle}
//           // zoomEnabled={true}
//           // zoomControlEnabled={true}
//           initialRegion={{
//             latitude,
//             longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           showsUserLocation={true}
//           showsMyLocationButton={true}
//           // onPress = {()=>{this.setState({
//           //   coordinate:e.nativeEvent.coordinate
//           // })}}
//           // onRegionChange={(region) => this.setState({
//           //   coordinate:region
//           // })}
//           onRegionChangeComplete={(region) => this.setState({
//             coordinate: region
//           })}

//         >

//           <Marker
//             coordinate={{ latitude, longitude }}
//             title={"Test"}
//             description={"Description"}
//           />
//         </MapView>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   mapStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });  