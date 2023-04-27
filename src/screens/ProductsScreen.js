import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ProductsSlice } from "../store/ProductsSlice";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

const ProductsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign: "center",
      headerTintColor: "#593838",
    });
  }, []);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //update selectedproduct
            dispatch(ProductsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.Destinationtext}>{item.name}</Text>
        </Pressable>
      )}
      numColumns={2}
    />
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
    backgroundColor:'#C1B68F'
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 80,
    marginTop:10,
    borderWidth:3,
    borderColor:'#593838'
  },
  Destinationtext: {
    width: 200,
    height: 30,
    
    borderRadius: 10,
   textAlign:'center',
   alignSelf:'center',
   fontSize:20,
   letterSpacing:5,
   fontFamily:'LilitaOne',
   color:'#593838',
   marginTop:8,
   paddingTop:5
   

   

  },
});
export default ProductsScreen;
