import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ImageBackground , View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        humidity: 0
    }) 
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
           fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=23ea0a2d303ee6fd0a0033408f7bdfd2`)
                .then((response) => response.json())
                .then((json) => {
                     setForecastInfo({
                       main: json.weather[0].main,
                       description: json.weather[0].description,
                       temp: json.main.temp,
                       humidity: json.main.humidity
               });
          })
           .catch((error) => {
               console.warn(error);
          });
        }
        }, [props.zipCode])
    
    
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text style={styles.zipCode}>Zip Code</Text> 
                <Text style={styles.zipCode}> is</Text>
                <Text style={styles.zipCode}>{props.zipCode}</Text> 
            </ImageBackground>
            <Forecast {...forecastInfo}/>
        </View>
        )
}
       
       const styles = StyleSheet.create({
        container: {
            width: '100%',
            height:'100%'
    },
        backdrop: {
            flexDirection: 'column',
            alignItems: 'center',
            Width: '100%',
            height: 150,
            paddingTop : 10
            
    },
        zipCode: {
            fontSize : 25,
            textAlign: 'center',
            textShadowColor: 'red',
            textShadowOffset: {width: 1.5, height: 1.5},
            textShadowRadius: 10,
            color: 'black',
            paddingTop: 15,
            fontWeight: 'bold',
            paddingLeft: 30
    }
    
})


    