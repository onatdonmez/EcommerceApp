import React, { useEffect, useState } from "react";
import { TouchableOpacity } from 'react-native';
import { View, Text, Button } from 'react-native';

import { Input } from 'react-native-elements/dist/input/Input';
import { useNavigation } from '@react-navigation/native';
import config from '../env/config'

export default function CategoryUpdate() {

  const [categoryname, setCategoryName] = useState([])
  const [id, setID] = useState([])
  const [description, setDescription] = useState([])

  const navigation = useNavigation();

  const update = async () => {
        await fetch(config.apiurl + 'api/categories/'+id,{
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            categoryname,
            description
          })
        });
        navigation.navigate('CategoryUpdate')
      }



  return (
    <View>

      <Input

        onChangeText={value => setDescription(value)}
        placeholder='Description'
      />

      <Input

        onChangeText={value => setCategoryName(value)}
        placeholder='Name'
      />

      <TouchableOpacity onPress={() => update()} style={{ flex: 1, backgroundColor: '#EF9630', textAlign: 'center', padding: 20, borderRadius: 20, marginTop: 10 }}
      > UPDATE
      </TouchableOpacity>

    </View>

  );
}