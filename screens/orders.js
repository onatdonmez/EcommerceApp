import React,{useState,useEffect} from 'react'
import { View, Text,ScrollView } from 'react-native'
import config from '../env/config'


export default function Orders() {
    const [orders, setOrders] = useState([]);
    //HTTP Get Method
    const getOrders = () =>
    {   
        fetch(config.apiurl + 'api/orders')
        .then((res) =>  res.json())
        .then((data) => {
            setOrders(data);
        })
    }
    useEffect(() => {

        getOrders();
  
    }, []);

    return (
        <ScrollView style={{flex:1,padding:20}}>
            {
                orders.map((item) => (
                    <View style={{flex:1,backgroundColor:'#EF9630',padding:20,borderRadius:20,marginTop:10,flexDirection:'column-reverse'}}>
                        <Text style={{color:'white', textAlign:'center'}}>Id: {item.id}</Text>
                        <Text style={{color:'white', textAlign:'center'}}>CustomerId: {item.customerId}</Text>
                        <Text style={{color:'white', textAlign:'center'}}>EmployeeId: {item.employeeId}</Text>
                        <Text style={{color:'white', textAlign:'center'}}>Date: {item.orderDate}</Text>
                    </View>
                ))
            }
        </ScrollView>
    )
}
