import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
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
    );
}

const styles = StyleSheet.create({
  mainText: {
      fontSize : 40,
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 10,
      color: 'black'
  },
  description: {
      fontSize : 25,
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 30,
      color: 'black'
  },
  temp: {
      flexDirection: 'row',  
      justifyContent: 'space-around'
  },
  num: {
      fontSize : 40, 
      color: 'black',
  },
  unit: {
      fontSize : 22,  
      color: 'black',  
      textAlignVertical: 'center'     
  },
  subText: {
      fontSize : 20, 
      color: 'black'
  },
  text: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  }
});