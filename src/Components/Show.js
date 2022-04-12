import React from 'react'
import { View,Text } from 'react-native';
import {useSelector} from 'react-redux'

const Show = ({navigation}) => {

const ShowResponse = useSelector(state => state.UserReducer.User.response);
const data = ShowResponse
console.log(ShowResponse,'show')


    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>Show Comp</Text>
      
            <Text>{data[0].id}</Text>
            <Text>{data[0].name}</Text>
            <Text>{data[0].body}</Text>
            <Text>{data[0].email}</Text>
        </View>
    )
}

export default Show