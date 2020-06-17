import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const EditScreen = ({navigation})=>{
    return (
        <View>
            <Text>EDITAH - {navigation.getParam('id')}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({})

export default EditScreen