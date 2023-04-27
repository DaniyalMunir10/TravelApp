import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  
  
  const Sign = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  
    return (
      <View style={styles.container}>
        <Image source={require("../images/Signup.jpg")} style={styles.Image} />
        <View style={styles.FormContainer}>
          <Text style={styles.HeaderText}>Sign Up</Text>
          <TextInput placeholder="Email" style={styles.Form} />
          <TextInput placeholder="Password" style={styles.Form2} />
          <Pressable
            onPress={() => navigation.navigate("Discover")}
            style={styles.button}
          >
            <View
             
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </Pressable>
  
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.Subtitle}
          >
            <Text style={styles.Subtitle}>Already have an Account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Sign;
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#FFFFFF",
    },
    Image: {
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    FormContainer: {
      width: 410,
      height: 350,
      backgroundColor: "#D9D9D9",
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      opacity: 0.3,
      alignItems: "center",
    },
    Form: {
      width: 233,
      height: 50,
      position: "absolute",
      marginLeft: 80,
      backgroundColor: "white",
      textAlign: "center",
      marginTop: 130,
      borderRadius: 8,
      fontSize: 16,
    },
    Form2: {
      width: 233,
      height: 50,
      position: "absolute",
      marginLeft: 80,
      backgroundColor: "white",
      textAlign: "center",
      marginTop: 200,
      borderRadius: 8,
      fontSize: 16,
    },
    button: {
      color: "black",
      height: 51,
      width: 191,
      backgroundColor: "black",
      marginTop: 150,
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      borderRadius: 20,
    },
    buttonText: {
      fontSize: 20,
      color: "white",
      fontFamily:'Sono'
    },
    HeaderText: {
      fontSize: 36,
      fontStyle: "normal",
      fontFamily:'Caveat',
      marginTop: 70,
      textAlign: "center",
    },
    Subtitle: {
      fontFamily:'LilitaOne',
      paddingTop: 5,
      color:'black',
    },
  });
  