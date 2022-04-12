import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { UserAction } from '../Modules/Action';

const Login = ({ navigation }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(UserAction());
    } ,[])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.Container} >LoginScreen</Text>
            <Button
                title='Click Here'
                onPress={() => navigation.navigate('Show')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 15,
    }
})

export default Login