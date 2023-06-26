import React from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View } from 'react-native'
import IconText from '../components/IconText'

const City = () => {
    const { imageLayout, rowLayout, container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={imageLayout} >

                <Text style={[cityName, cityText]}>City: London</Text>
                <Text style={[countryName, cityText]}>Country: UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={populationText} />
                </View>

                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:46:58am'} bodyTextStyles={riseSetText} />
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:28:15pm'} bodyTextStyles={riseSetText} />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    populationWrapper: {
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    }
})
export default City