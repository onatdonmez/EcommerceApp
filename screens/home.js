import React from 'react'
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native'
import {Text,Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


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

  //Move to categories page
  function moveCategories(){
    navigation.navigate('Category');
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
              <Text style ={{color:'white'}}>Name, Quantity, Price</Text>
              <Icon style={{alignItems:'flex-end'}} size={80} name = 'archive' color = 'white'></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:8,backgroundColor:'#EF9630',padding:20,borderRadius:20,marginTop:10}} onPress={() => moveCategories()}>
              <Text h3 style={{color:'white'}}>Categories</Text>
              <Text style ={{color:'white'}}>Category ID, Name, Description</Text>
              <Icon style={{alignItems:'flex-end'}} size={80} name = 'list' color = 'white'></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:8 ,backgroundColor:'#EF9630',padding:20,borderRadius:20,marginTop:10}} onPress={() => moveOrders()}>
              <Text h3 style={{color:'white'}}>Orders</Text>
              <Text style ={{color:'white'}}>Date, Employee ID, Customer ID, Orders ID</Text>
              <Icon style={{alignItems:'flex-end'}} size={80} name = 'shopping-cart' color = 'white'></Icon>
            </TouchableOpacity>
        </View>

    </View>
   )

  
};



