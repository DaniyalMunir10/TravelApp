import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  
  const Home = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
      <SafeAreaView>
        <View>
          <View style={styles.HeaderPic}>
            <Image
             
              source={require("../images/Cover.jpg")}
              style={styles.HeaderImage}
            />
  
            <View style={styles.TextContainer}>
              <Text style={styles.HeaderText}>Summer </Text>
              <Text style={styles.HeaderText}>Vacations Trip</Text>
              <Text style={styles.SubtitleText}>
                Enjoy your summer vacations with amazing sightseeing on the
                mountains.
              </Text>
              <Text style={styles.SubtitleText}>
                Enjoy the best experience with us!
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              style={styles.button}
            >
              <View>
                <Text style={styles.buttonText}>
                  Let's Go <AntDesign name="arrowright" style={styles.IconText} />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={styles.button2}
            >
              <View
               >
                <Text style={styles.buttonText}>
                  Sign In <AntDesign name="arrowright" style={styles.IconText} />{" "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#FFFFFF",
    },
    HeaderPic: {
      width: 360,
      height: 460,
      backgroundColor: "grey",
      borderRadius: 31,
      marginBottom: 320,
      marginLeft: 25,
      marginTop: 40,
    },
    HeaderImage: {
      width: 360,
      height: 460,
      borderRadius: 31,
    },
    TextContainer: {
      height: 150,
      width: 311,
      paddingTop: 15,
      paddingLeft: 20,
    },
    HeaderText: {
      fontSize: 36,
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: 44,
      color: "#593838",
      letterSpacing: 3,
      fontFamily:'Caveat'
    },
    SubtitleText: {
      fontSize: 16,
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: 25,
      color: "#593838",
      display: "flex",
      paddingTop: 2,
      fontFamily:'LilitaOne'
    },
    button: {
      marginTop: 55,
      marginLeft: 20,
      width: 161,
      height: 45,
      backgroundColor: "#593838",
      borderRadius: 50,
      fontFamily:'Sono'
      
    },
    button2: {
      marginTop: 15,
      marginLeft: 20,
      width: 161,
      height: 45,
      backgroundColor: "#593838",
      borderRadius: 50,
    },
    buttonText: {
      color: "#FFFFFF",
      display: "flex",
      paddingTop: 15,
      paddingLeft: 30,
      fontSize: 18,
      fontWeight: "400",
      lineHeight: 18,
      fontFamily:'Sono'
    },
    IconText: {
      color: "white",
      fontSize: 20,
    },
  });
  