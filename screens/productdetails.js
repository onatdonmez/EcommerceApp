import { useRoute,useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView } from 'react-native';
import { View, Text } from 'react-native'


export default function ProductDetails() {
   
    const route = useRoute();

   
    return (
        <ScrollView style = {{flex:1,padding:20}}>
            <View style={{flex:0.2,padding:20,backgroundColor:'#EF9630',borderRadius:20,marginTop:10}}>
                <Text h1 style={{color:'white', textAlign:'center'}}>Id: {route.params.id}</Text>
                <Text h1 style={{color:'white', textAlign:'center'}}>SupplierId: {route.params.supplierId}</Text>
                <Text h1 style={{color:'white', textAlign:'center'}}>CatergoryId: {route.params.categoryId}</Text>
                <Text h1 style={{color:'white', textAlign:'center'}}>Stock: {route.params.unitsInStock}</Text>
                <Text h1 style={{color:'white', textAlign:'center'}}>Order: {route.params.unitsOnOrder}</Text>  
            </View>
        </ScrollView>
    )
}
