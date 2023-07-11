import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const {item, date, temp} = styles
    return (
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={'yellow'} />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        maginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink',
    },
    temp: {
        color: 'white',
        fontSize:20,
    },
    date:{
        color: 'black',
        fontSize: 15,
    },
})
export default ListItem