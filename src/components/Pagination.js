import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
import React from 'react'


const {width}=Dimensions.get('Screen')

const pagination = ({data, scrollX}) => {
  return (
    <View style={styles.container}>
      {
        data.map((_,idx)=>{
            const inputRange=[(idx-1)*width,idx*width,(idx+1)*width]
          const dotWidth=scrollX.interpolate({
            inputRange,
            outputRange:[12,30,12],
            extrapolate:'clamp'
          })

            return <Animated.View 
            key={idx.toString()}
             style={[styles.dot,{width:dotWidth}]}/>
        })
      }
    </View>
  )
}

export default pagination

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:20,
       width:310,
       height:30,
        flexDirection:'row',
      
        marginLeft:30,
    },
    dot:{
        width:10,
        height:10,
        borderRadius:6,
        backgroundColor:'#ccc',
        marginHorizontal:2,
        alignSelf:'center',
        
        
    }
})