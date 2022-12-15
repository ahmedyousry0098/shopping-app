import { View, Text } from 'react-native'
import React from 'react'

const Spacer = ({children}) => {
  return (
    <View style={{marginVertical: 10}}>
      {children}
    </View>
  )
}

export default Spacer