import { StyleSheet, View, Image, FlatList ,Text, useWindowDimensions, ScrollView, Pressable} from "react-native";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from 'react'

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleAlign:'center',
      headerTintColor:'#593838'
    });
  }, []);
  
  const product=useSelector(state=>state.products.selectedProduct)
  const dispatch=useDispatch()
  const {width}=useWindowDimensions();
  const addToCart=()=>{
    dispatch(cartSlice.actions.addCartItem({product}))
  }
 
  return (

    <View>
      <ScrollView>
      
      {/* Image Carousel */}
      <FlatList 
      data={product.images}
      renderItem={({item})=>(
        <Image source={{ uri:item}} 
        style={{width , aspectRatio:1}}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      
       />
      
      
       <View style={{padding:20,backgroundColor:'white'}}>
{/* Title */}
      <Text style={styles.title }>{product.name}</Text>   
      <Text style={styles.subtitle }>{product.subtitle}</Text>   
      {/* Price */}
      <Text style={styles.price }>${product.price}</Text>

      {/* Description */}
<Text style={styles.description }>{product.description}</Text>

</View>
    </ScrollView>
      {/* Add to cart button */}

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Book Seats </Text>
      </Pressable>
   

      {/* Navigation icon */}
  
   
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontFamily:'Sono',
   
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing:1.5,
    fontSize:18,
    color:'red' 
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 30,
    fontFamily:'Sono',
    color:'#593838'
  },
  button:{
    position:'absolute',
    borderWidth:5,
    borderColor:'#C1B68F',

    bottom:30,
    width: '90%',
    alignSelf:'center',
    padding:20,
    borderRadius:100,
    alignItems:'center',
    backgroundColor:'white'



  },
  buttonText:{
    color:'#593838',
    fontSize:24,
    fontFamily:'Caveat'


  },
  subtitle :{
    fontSize:24,
    marginBottom:5,
    fontFamily:'Caveat'
  }
});

export default ProductDetailsScreen; 