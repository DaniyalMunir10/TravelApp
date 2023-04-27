import { View, Text, FlatList , Animated, StyleSheet, Dimensions, TouchableOpacity, Image, Pressable} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const {width, height}=Dimensions.get('window')

const Explore = () => {
  
 
  const images=[
    {
    id:1,
    image:require('../images/GB/Attabad.jpg'),
    subtitle:'Gilgit Baltistan',
    title:'Attabad Lake'
  },
    {
    id:2,
    image:require('../images/GB/Deosai.jpg'),
    subtitle:'Skardu, GB',
    title:'Deosai'
  },
    {
    id:3,
    image:require('../images/GB/Hunza.jpg'),
    subtitle:'Gilgit Baltistan',
    title:'Hunza'
  },
    {
    id:4,
    image:require('../images/GB/Rakaposhi.jpg'),
    subtitle:'Gilgit Baltistan',
    title:'Rakaposhi'
  },
    {
    id:5,
    image:require('../images/GB/Shangrila.jpg'),
    subtitle:'Skardu, GB',
    title:'Shangrila'
  },
    {
    id:6,
    image:require('../images/GB/Khunjerab.jpg'),
    subtitle:'Gilgit Baltistan',
    title:'Khunjerab'
  },
    {
    id:7,
    image:require('../images/GB/Fairymeadows.jpg'),
    subtitle:'Raikot, Chilas',
    title:'Fairy Meadows'
  },
    {
    id:8,
    image:require('../images/GB/Batakundi.jpg'),
    subtitle:'Naran, Kpk',
    title:'Batakundi'
  },
    {
    id:9,
    image:require('../images/Kpk/Katora.jpg'),
    subtitle:'Thal, Swat',
    title:'Katora Lake'
  },
    {
    id:10,
    image:require('../images/Kpk/Kumrat.jpg'),
    subtitle:'Thal,Swat',
    title:'Kumrat Forest'
  },
    {
    id:11,
    image:require('../images/Kpk/Malam.jpg'),
    subtitle:'Swat, Kpk',
    title:'Malam Jabba'
  },
    {
    id:12,
    image:require('../images/Kpk/Mangora.jpg'),
    subtitle:'Swat, Kpk',
    title:'Mangora'
  },
    {
    id:13,
    image:require('../images/Kpk/Ushu.jpg'),
    subtitle:'Kalam, Kpk',
    title:'Ushu Forest'
  },
    {
    id:14,
    image:require('../images/Kashmir/Ganga.jpeg'),
    subtitle:'Rawlakot, Azad Kashmir',
    title:'Ganga Choti'
  },
    {
    id:15,
    image:require('../images/Kashmir/Arangkel.jpg'),
    subtitle:'Neelum, Azad Kashmir',
    title:'Arang Kel'
  },
    {
    id:16,
    image:require('../images/Kashmir/Banjosa.png'),
    subtitle:'Rawlakot, Azad Kashmir',
    title:'Banjosa Lake'
  },
    {
    id:17,
    image:require('../images/Kashmir/ChitaKata.jpg'),
    subtitle:'Shounter Valley, Azad Kashmir',
    title:'ChitaKata Lake'
  },
    {
    id:18,
    image:require('../images/Kashmir/PirChinasi.jpg'),
    subtitle:'Muzaffarabad, Azad Kashmir',
    title:'Pir Chinasi'
  },
    {
    id:19,
    image:require('../images/Kashmir/RattiGali.jpg'),
    subtitle:'Neelum, Azad Kashmir',
    title:'Ratti Gali Lake'
  },
    {
    id:20,
    image:require('../images/Kashmir/Taobat.jpg'),
    subtitle:'Neelum, Azad Kashmir',
    title:'Taobat'
  },
    {
    id:21,
    image:require('../images/Kashmir/Tolipeer.jpg'),
    subtitle:'Rawlakot, Azad Kashmir',
    title:'Tolipeer'
  },
    {
    id:22,
    image:require('../images/Murree.jpg'),
    subtitle:'Galyat, Punjab',
    title:'Murree'
  },
]

  
const navigation = useNavigation();
useLayoutEffect(() => {
  navigation.setOptions({
    headerShown: false,
  });
}, []);
  return (
    <View style={styles.screen}> 
    <Animated.FlatList
    data={images}
    horizontal
    
    pagingEnabled
    bounces={false}
    showsHorizontalScrollIndicator={false}
    keyExtractor={item=>item.id}
    renderItem={({item})=>{
      return <View style={styles.Screen}>
        <Image
        source={item.image}
        style={styles.image}
        />
        <TouchableOpacity  onPress={() => navigation.navigate("Destinations")}> 
        
        
        <View style={styles.titleContainer}>

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.Subtitle}>{item.subtitle}</Text>
          <Pressable onPress={() => navigation.navigate("Discover")} 
           style={styles.Home}>
          <Text style={styles.Hometext}><AntDesign name="doubleleft" size={20} color="white" />Go Home </Text>
          </Pressable>
        </View>

        </TouchableOpacity>
      </View>
    }}
    />
    </View>
  )
}

export default Explore
const styles = StyleSheet.create({
  screen: {
    flex: 1,
   
  },
  Screen:{
    width,
    height,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'white',
    position:'relative'
   
  },
  image:{
    height,
    width,
    resizeMode:'cover'
  },
  titleContainer:{
    position:'absolute',
    bottom:0,
    width:412,
    height:150,
    backgroundColor:'black',
    opacity:0.5,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  title:{
    fontSize:34,
    color:'white',

    width:400,
    height:50,
    fontFamily:'Sono',
    
    textAlign:'center',
    marginLeft:5,
    marginTop:20,
    

    
   
  },
  Subtitle:{
    fontSize:20,
    color:'white',
    textAlign:'center',
    fontFamily:'Caveat',
    width:400,
    height:30,
    textAlign:'center',
    marginLeft:5,
    
  },
  Home:{
    width:120,
    height:30,
   
    alignSelf:'center',
    marginTop:20
  },
  Hometext:{
    fontSize:16,
    textAlign:'center',
    letterSpacing:2,
    color:'white',
    fontFamily:'Sono'
  }
  
 
});
