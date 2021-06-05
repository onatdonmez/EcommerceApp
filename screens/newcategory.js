import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input';
import config from '../env/config'

export default function NewCategory() {

    const [categoryname, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    // Post method created here
    const send = () => {
        let requestoptions = {
            method: 'POST',
            body: JSON.stringify({name: categoryname, description: description }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch(config.apiurl + 'api/categories', requestoptions)
            .then((res) => res.json())
            .then((data) => {

                alert('Category has been submit !');

            })

    }

    return (
        
        <View> 

            <Input
                placeholder='Category Name'
                rightIcon={{ type: 'font-awesome', name: 'sort' }}
                onChangeText={value => setCategoryName(value)}
            />

            <Input
                placeholder='Description'
                rightIcon={{ type: 'font-awesome', name: 'info-circle' }}
                onChangeText={value => setDescription(value)}
            />

            <TouchableOpacity onPress={() => send()} style={{ flex: 1, backgroundColor: '#EF9630', textAlign: 'center', padding: 20, borderRadius: 20, marginTop: 10 }}
                > SUBMIT
            </TouchableOpacity>

        </View>
    )
}