import React,{useState,useEffect} from 'react'
import { TouchableOpacity, ScrollView } from 'react-native';
import { View, Text} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ProductDetails from './productdetails';
import config from '../env/config'


export default function Product() {
    const [products, setProducts] = useState([]);

    //HTTP GET Method
    const getProducts = () =>
    {
        fetch(config.apiurl +'api/products')
        .then((res) =>  res.json())
        .then((data) => {
            setProducts(data);
        })
    }

    //After rendering this block works
    useEffect(() => {

        getProducts();
  
    }, []);
    

    //Delete item with given id
    const removeProduct = (id) => {
        let requestoptions = {
          method:'DELETE', 
          body:JSON.stringify({id:id}) 
        }
        fetch( config.apiurl +'api/products/'+id,requestoptions)
        .then((res) => res.json())
        .then((data) => {
          getProducts();
          
        })
      }
    const navigation = useNavigation();
    //Move to product details page and pass the values to this page
    function moveProductDetails(id,supplierId,categoryId,unitsInStock,unitsOnOrder){
      navigation.navigate('ProductDetails',{"id":id,"supplierId":supplierId,"categoryId":categoryId,"unitsInStock":unitsInStock,"unitsOnOrder":unitsOnOrder});
    }

    return (
        <ScrollView style={{flex:1,padding:20}}>
            {
                products.map((item) => (
                    <TouchableOpacity style={{flex:1,backgroundColor:'#EF9630',padding:20,borderRadius:20,marginTop:10}} onPress={() => moveProductDetails(item.id,item.supplierId,item.categoryId,item.unitsInStock,item.unitsOnOrder)}>
                        <Text style={{color:'white', textAlign:'center'}}>Name: {item.name}</Text>
                        <Text style={{color:'white', textAlign:'center'}}>Quantity: {item.quantityPerUnit}</Text>
                        <Text style={{color:'white', textAlign:'center'}}>Price: {item.unitPrice + '$'}</Text>
                        <Icon onPress={() => removeProduct(item.id)} size={40} name = 'delete' color = 'white' ></Icon>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
     
}
