import React from 'react'
import { View } from 'react-native'
const CardSection = (props) => {
  // style on the right of the array will overwrite the style on the left of the array
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export { CardSection }
