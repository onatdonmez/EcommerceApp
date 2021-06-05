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
}