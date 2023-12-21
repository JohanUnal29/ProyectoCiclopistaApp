import { StyleSheet, Text, View , Image, Pressable,useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../subComponents/Header.jsx'
import allProduct from "../../../data/products.json"
import { colors } from '../../../global/colors.jsx'

const ProductDetail = ({route}) => {
  const {id} = route.params

  const [product,setProduct] = useState({})
  const images = product.images ? product.images : []

  useEffect(()=>{

    const productFinded = allProduct.find(product => product.id === id)
    setProduct(productFinded)

  },[id])

  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri:images[2]}}
            resizeMode='cover's
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center",
    },
    content:{
      width:"100%"
    },

    image:{
      width:"100%",
      height:300
    },
    goBack:{
      width:"100%",
      backgroundColor:colors.red,
      padding:10,
      paddingStart:40
     },
     containerText:{
      gap:25,
      paddingHorizontal:5,
      paddingVertical:25
     },
     containerPrice:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginVertical:10
     },
     title:{
      fontSize:20,
      fontWeight:"bold"
     },
     price:{
      fontSize:30
     },
     buyNow:{
      backgroundColor:colors.black,
      paddingVertical:5,
      paddingHorizontal:10,
      borderRadius:5
     },
     buyNowText:{
      color:"white"
     }
})