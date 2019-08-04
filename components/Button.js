import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';



const Button = props => (
    <TouchableOpacity
      style={[styles.buttonStyle, {height: props.size, backgroundColor: props.backgroundColor}]}
      onPress={() => props.onPress(props.name)}
    >
      <Text style={{fontSize: props.size / 2, color: 'white'}}>
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    }
})




export default Button;
