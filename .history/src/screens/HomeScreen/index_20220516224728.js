import { View, Text } from 'react-native'
import React from 'react'
import { shadows } from '../../theme'

const HomeScreen = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
     <View style={[{width:100, height:100},{...shadows.shadows5}]} />
    </View>
  )
}

export default HomeScreen