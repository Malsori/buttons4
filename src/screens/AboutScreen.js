import {Button,StyleSheet,Text,View,Pressable} from "react-native"
import React,{useState} from 'react'

export default function AboutScreen() {
    const [number,setNumber]=useState(1);
   
  
    const increment=()=>
      {
        setNumber(number+1)
      }
    const reset=()=>
        {
          setNumber(0)
        }
        const decrement=()=>
        {
         setNumber(number-1)
        }
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{number} </Text>
        <Button color="red" title="Increment" onPress={increment}></Button> 
        <Button color="red" title="Decrement" onPress={decrement}></Button>
        <Button color="red" title="Reset" onPress={reset}></Button> 
  
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 25,
      color: "red",
    },
  });