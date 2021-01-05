import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import Body from '../Components/Body'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Body />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',

    }
})
