import { Text , FlatList, View, StyleSheet, Pressable } from "react-native"
import { useSelector } from "react-redux"

import CartListitem from '../components/CartListItem'
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../store/cartSlice"

const ShoppingCartTotals=()=>{
    
    const Subtotal=useSelector(selectSubtotal)
    const deliveryFee=useSelector(selectDeliveryPrice)
    const totalPrice=useSelector(selectTotal)


return(


    <View style={styles.totalsContainer}>
    <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{Subtotal} US $</Text>

    </View>
    <View style={styles.row}>
        <Text style={styles.text}>Booking Fee</Text>
        <Text style={styles.text}>{deliveryFee}US $</Text>

    </View>
    <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{totalPrice} US $</Text>

    </View>
</View>

)

}


const ShoppingCart=()=>{
    const cartItems=useSelector(state=>state.cart.items)
return(
    <>    
    <FlatList
    data={cartItems}
    renderItem={({item})=><CartListitem cartItem={item}  />}
    ListFooterComponent={ShoppingCartTotals}
    />
    <Pressable style={styles.button}>
    <Text style={styles.buttonText}>Checkout</Text>
  </Pressable>
  </>

    );
    
}
const styles=StyleSheet.create({
        totalsContainer:{
           padding:20,
           paddingTop:10,
           borderColor:'gainsboro',
           borderTopWidth:1

        },
        row:{
            flexDirection:'row',
            justifyContent:'space-between',
            color:'red',
            marginVertical:2
        
        },
        text:{
            fontSize:16,
            color: 'gray'
        },
        textBold:{
            fontSize:16,
           
            fontWeight:'500'

        },
        button:{
            position:'absolute',
            backgroundColor:'black',
            bottom:30,
            width: '90%',
            alignSelf:'center',
            padding:20,
            borderRadius:100,
            alignItems:'center'
        
        
        
          },
          buttonText:{
            color:'white',
            fontWeight:'500',
            fontSize:16
        
        
          }
        
        
})
export default ShoppingCart;