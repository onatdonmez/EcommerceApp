import React,{useState} from 'react'
import { TouchableOpacity} from 'react-native';
import { View} from 'react-native'
import {Text,Icon,Button } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Product from './product';
import Orders from './orders'


export default function Home() {
  const navigation = useNavigation();

  //Move to product page
  function moveProducts(){
    navigation.navigate('Product');
  }

  //Move to order page
  function moveOrders(){
    navigation.navigate('Orders');
  }

  return(
    <View style={{flex:3,padding:20}}>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingTop:20}}>
            <Text style={{color:'gray'}}>Search for a product, category or order</Text>
            <Icon name = 'search' color='orange'></Icon>
      </View>
      <View style={{flex:3}}>
            <Text style={{paddingTop:20}} h3>Make your choice</Text>
      </View>
      <View style={{flex:24}}>
            <TouchableOpacity style={{flex:8,backgroundColor:'#EF9630',padding:20,borderRadius:20,marginTop:10}} onPress={() => moveProducts()}>
              <Text h3 style={{color:'white'}}>Products</Text>
              <Text style ={{color:'white'}}>76 items</Text>
              <Icon style={{alignItems:'flex-end'}} size={80} name = 'archive' color = 'white'></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:8,backgroundColor:'#EF9630',padding:20,borderRadius:20,marginTop:10}}>
              <Text h3 style={{color:'white'}}>Categories</Text>
              <Text style ={{color:'white'}}>12 items</Text>
              <Icon style={{alignItems:'flex-end'}} size={80} name = 'list' color = 'white'></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:8 ,backgroundColor:'#EF9630',padding:20,borderRadius:20,marginTop:10}} onPress={() => moveOrders()}>
              <Text h3 style={{color:'white'}}>Orders</Text>
              <Text style ={{color:'white'}}>830 items</Text>
              <Icon style={{alignItems:'flex-end'}} size={80} name = 'shopping-cart' color = 'white'></Icon>
            </TouchableOpacity>
        </View>

    </View>
   )

  
};



