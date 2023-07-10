import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
    const {
        wrapper,
        container,
        tempStyles,
        feels,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message,
    } = styles

    const {
        main: { temp, feels_like, temp_max, temp_min }, weather
    } = weatherData

    const weatherCondition = weather[0].main
    return (
        <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
            <View style={container}>
                <FontAwesome5 name="sun" size={100} color="black" />
                <Text>Current Weather</Text>
                <Text style={tempStyles}>6 </Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText
                    messageOne={'High: 8'}
                    messageTwo={'Low: 6'}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow} />
            </View>
            <RowText
                messageOne={'Its sunnnny'}
                messageTwo={weatherType['Thunderstorm'].message}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        backgroundColor: 'pink',
        flex: 1,
    },
    tempStyles: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black'
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        fontSize: 48,
    },
    message: {
        fontSize: 30,
    }

});
export default CurrentWeather;