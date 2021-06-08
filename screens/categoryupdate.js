import React, { useEffect, useState } from "react";

import { TouchableOpacity } from 'react-native';

import { View, Text, Button } from 'react-native';

import { useRoute } from '@react-navigation/native';

 

import { Input } from 'react-native-elements/dist/input/Input';

import { useNavigation } from '@react-navigation/native';

import config from '../env/config'

 

export default function CategoryUpdate() {

 

  const route = useRoute();

 

  const [name, setName] = useState([])

  const [id, setId] = useState([])

  const [description, setDescription] = useState([])

 

  const navigation = useNavigation();

 

  const update = async () => {

        await fetch(config.apiurl + 'api/categories/'+route.params.id,{

          method: 'PUT',

          headers: {'Content-Type': 'application/json'},

          body: JSON.stringify({

            name,

            description

          })

        });

        alert('Category has been updated !');

      }

 

 

 

  return (

    <View>

 

      <Input

 

        onChangeText={value => setDescription(value)}

        placeholder='Description'

        value = {description}

      />

 

      <Input

 

        onChangeText={value => setName(value)}

        placeholder='Name'

        value = {name}

      />

 

      <TouchableOpacity onPress={() => update()} style={{ flex: 1, backgroundColor: '#EF9630', textAlign: 'center', padding: 20, borderRadius: 20, marginTop: 10 }}

      > UPDATE

      </TouchableOpacity>

 

    </View>

  )

}