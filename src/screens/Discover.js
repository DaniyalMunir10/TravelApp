import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const destinations = [
    {
      id: 1,
      image: require("../images/GB/Attabad.jpg"),
    },
    {
      id: 2,
      image: require("../images/GB/Deosai.jpg"),
    },
    {
      id: 3,
      image: require("../images/GB/Hunza.jpg"),
    },
    {
      id: 4,
      image: require("../images/GB/Rakaposhi.jpg"),
    },
    {
      id: 5,
      image: require("../images/GB/Shangrila.jpg"),
    },
    {
      id: 6,
      image: require("../images/GB/Khunjerab.jpg"),
    },
    {
      id: 7,
      image: require("../images/GB/Fairymeadows.jpg"),
    },
    {
      id: 8,
      image: require("../images/GB/Batakundi.jpg"),
    },
    {
      id: 9,
      image: require("../images/Kpk/Katora.jpg"),
    },
    {
      id: 10,
      image: require("../images/Kpk/Kumrat.jpg"),
    },
    {
      id: 11,
      image: require("../images/Kpk/Malam.jpg"),
    },
    {
      id: 12,
      image: require("../images/Kpk/Mangora.jpg"),
    },
    {
      id: 13,
      image: require("../images/Kpk/Ushu.jpg"),
    },
    {
      id: 14,
      image: require("../images/Kashmir/Ganga.jpeg"),
    },
    {
      id: 15,
      image: require("../images/Kashmir/Arangkel.jpg"),
    },
    {
      id: 16,
      image: require("../images/Kashmir/Banjosa.png"),
    },
    {
      id: 17,
      image: require("../images/Kashmir/ChitaKata.jpg"),
    },
    {
      id: 18,
      image: require("../images/Kashmir/PirChinasi.jpg"),
    },
    {
      id: 19,
      image: require("../images/Kashmir/RattiGali.jpg"),
    },
    {
      id: 20,
      image: require("../images/Kashmir/Taobat.jpg"),
    },
    {
      id: 21,
      image: require("../images/Kashmir/Tolipeer.jpg"),
    },
    {
      id: 22,
      image: require("../images/Murree.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.tour}>
       
       </View>

      <View style={styles.topContainer}>
        <Pressable onPress={() => navigation.navigate("More")}>
          <Text style={styles.Bars}>
            <AntDesign name="bars" size={42} color="#593838" />
          </Text>
        </Pressable>
        <Pressable>
          <Text style={styles.HeaderText}>Discover</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.User}>
            <AntDesign name="user" size={40} color="#593838" />
          </Text>
        </Pressable>
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.text}>Find Your Dream Trip</Text>
      </View>

      <View style={styles.ImageContainer}>
        <FlatList
          data={destinations}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          scrollEnabled
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Image source={item.image} style={styles.Carousel} />
              </View>
            );
          }}
        />
        
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Preview")}>
      <View 
        style={{
          width: 330,
          height: 50,
          backgroundColor: "white",
          alignSelf: "center",
          borderRadius: 50,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
          borderColor:'#7D9AE2',
          borderWidth:5
        }}
      >
        <Text 
        style={{
            fontSize:22,
            fontWeight:'500',
           fontFamily:'Sono',
           
        }}>
            Preview Places</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("Destinations")}>
      <View
        style={{
          width: 330,
          height: 50,
          backgroundColor: "white",
          alignSelf: "center",
          borderRadius: 50,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
          borderWidth:5,
          borderColor:'#7D9AE2'
        }}
      >
        <Text 
        style={{
            fontSize:22,
            fontFamily:'Sono'
        }}>
            Destination's Details</Text>
      </View>
      </TouchableOpacity>
     
    </View>
  );
};
export default Discover;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  topContainer: {
    width: 400,
    height: 70,

    marginLeft: 10,
    marginTop: 30,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Bars: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  HeaderText: {
    paddingLeft: 70,
    paddingTop: 8,
    fontSize: 32,
    letterSpacing: 0.03,
    fontFamily: "Sono",
    color: "#593838",
  },
  User: {
    paddingLeft: 60,
    paddingTop: 10,
  },
  ImageContainer: {
    width: 370,
    height: 500,
   
    alignSelf: "center",
    borderRadius: 90,
  },
  TextContainer: {
    width: 350,
    height: 80,

    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#048C9E",
    fontStyle: "normal",
    fontFamily: "Caveat",
    fontWeight: "600",
  },
  Carousel: {
    width: 370,
    height: 500,
    borderRadius: 90,
    borderWidth:5,
    borderColor:'white',
  },
  background: {
    width: 300,
    height: 300,
    backgroundColor: "#CCB975",
    borderRadius: 200,
    shadowColor: "yellow",
    opacity: 0.5,
    marginLeft: 200,
    position: "absolute",
  },
  tour: {
    width: 400,
    height: 400,
    backgroundColor: "#7D9AE2",
    marginTop: 550,
    alignSelf: "center",
    borderRadius: 200,
    opacity:0.9,
    alignSelf:'flex-start',
    marginLeft:50,
    position:'absolute'
    
    
  },
  
});
