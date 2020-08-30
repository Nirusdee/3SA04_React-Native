import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native'


export default function Forecast(props) {
   
  let img = ""
    if(props.main == 'Rain'){
        img = require('../rain.jpg')
    }
    if(props.main == 'Sunny'){
        img = require('../sunny.jpg')
    }
    if(props.main == 'Thunderstorm'){
        img = require('../thunder.jpg')
    }
    if(props.main == 'Clouds'){
        img = require('../cloudy.jpg')
    }
    if(props.main == 'Drizzle'){
        img = require('../drizzle.jpg')
    }
    if(props.main == 'Haze'){ 
        img = require('../drizzle.jpg')
    }
    if(props.main == 'Haze'){
        img = require('../drizzle.jpg')
    }
    if(props.main == 'Mist'){
        img = require('../mist.jpg')
    }
  
  return (
      <ImageBackground source={img} style={styles.backdrop}>
      <View>
        <Text style={styles.mainText}>{props.main}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.text}>
                <Text style={styles.subText}>Temperature</Text>
                <Text style={styles.subText}>Humidity</Text>
            </View>
            
            <View style={styles.temp}>
                <View style={styles.temp}>
                    <Text style={styles.num}>{props.temp}</Text>
                    <Text style={styles.unit}> °C</Text>
                </View>
                <View style={styles.temp}>
                    <Text style={styles.num}>{props.humidity}</Text>
                    <Text style={styles.unit}> %</Text>
                </View>
                
            </View>
      </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  backdrop: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    backgroundColor : 'black',
    borderRadius: 10,
},
  mainText: {
      fontSize : 40,
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 10,
      fontWeight: 'bold',
      color: 'black'
  },
  description: {
      fontSize : 27.5,
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 30,
      fontWeight: 'bold',
      color: 'black'
  },
  temp: {
      flexDirection: 'row',  
      justifyContent: 'space-around'
  },
  num: {
      fontSize : 27, 
      color: 'black',
      fontWeight: 'bold'
  },
  unit: {
      fontSize : 25,  
      color: 'black',  
      textAlignVertical: 'center',
      
  },
  subText: {
      fontSize : 30, 
      fontWeight: 'bold',
      color: 'black'
  },
  text: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop : 20,
      paddingBottom : 20
  }
});