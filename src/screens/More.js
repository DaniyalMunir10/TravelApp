import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

const More = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTitleAlign:'center',
        headerTintColor:'#593838'
      });
    }, []);
    
  return (
    <View style={styles.container}>
        <View style={styles.SecondayContainer}>
            <Text style={styles.HeaderText}>About Us</Text>
            <Text style={styles.Subtitle}>Are you looking to make the most of your next vacation? Look no further! Our travel guide offers the best locations and services while providing premium packages at unbeatable prices. With our comprehensive guide, you can discover the most valuable places to visit around the world, all while enjoying our top-notch customer service. Thousands of travelers have already made memories with us—join in on the adventure today!</Text>

            <View style={styles.Image}>
               <Image style={styles.img}
                source={require('../images/Winter.jpg')}
                />
         </View>
         <TouchableOpacity
            onPress={() => navigation.navigate("Contact")}
            style={styles.button}
          >
            <View
            
            >
              <Text style={styles.buttonText}>
                Contact Us 
              </Text>
            </View>
          </TouchableOpacity>
        </View>
       
      
    </View>
  )
}
export default More
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D9D9D9',
      
    },
    SecondayContainer:{
        width:'80%',
        height:'60%',
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:30,
        marginTop:30,
        
       

    },
    HeaderText:{
        fontSize:28,
       
        textAlign:'center',
        marginTop:20,
        color:'rgba(89, 56, 56, 0.73)',
        fontFamily:'Caveat'
    },
    Subtitle:{
        fontSize:19,
        fontFamily:'StickNoBills',
        lineHeight:25,
        letterSpacing:0.03,
        width:290,
        height:400,
        textAlign:'center',
        marginTop:10,
        alignSelf:'center',
        color:'#4A1111'
    },
    Image:{
        backgroundColor:'silver',
        width:'100%',
        height:150,
        position:'absolute',
        marginTop:380,
        borderRadius:20
        

    },
    img:{
        width:'100%',
        height:150,
        borderRadius:20
    },
    button: {
      marginTop: 130,
      marginLeft: 20,
      width: 300,
      height:70,
      backgroundColor: "#593838",
      borderRadius: 50,
      opacity:0.9
    },

      buttonText: {
        color: "#FFFFFF",
        display: "flex",
       paddingTop:20,
        fontSize: 24,
       fontFamily:'Caveat',
        alignSelf:'center'
      },
     
})