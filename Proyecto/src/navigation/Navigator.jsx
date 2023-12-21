import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../components/Home/Home'
import CategoryListContainer from '../components/Categories/CategoryListContainer.jsx'
import ProductDetail from "../components/products/ProductDetailContainer/ProductDetail.jsx"
import Header from '../components/subComponents/Header.jsx'

const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={
                    ({ route }) => {
                        return {
                            header: () => <Header title={
                                route.name === "Home" ? "Categorias" :
                                    route.name === "Category" ? route.params.category :
                                        "Detalle"
                            } />
                        }
                    }
                }
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Category" component={CategoryListContainer} />
                <Stack.Screen name="Product" component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
