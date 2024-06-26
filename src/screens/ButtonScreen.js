import { 
    View,
    Text ,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Pressable
   } from 'react-native'
import React, { useState } from 'react'

export default function ButtonScreen() {

   const[name,SetName]=useState("");
   const[submitted,SetSubmitted]=useState(false);

   const onPressHandler=()=>
       {
           SetSubmitted(!submitted);

           
       }
     

 return (
   <View style={styles.body}>
     <Text style={styles.text}>Please write your name</Text>
     <TextInput
      style={styles.input}
      placeholder="Username"
      onChangeText={(value) => SetName(value)}
     />
     <Text style={styles.text}>Your name is:{name} </Text>

   {/* <Button
    title={submitted ? "Clear" : "Submit"}
    onPress={onPressHandler}
    color="#00f"
   /> */}
     {/* <TouchableWithoutFeedback onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
        </View>
      </TouchableWithoutFeedback> */}
      {/* <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
        </View>
      </TouchableOpacity> */}
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 50, bottom: 50, right: 50, left: 50 }}
        android_ripple={{ color: "#00f" }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#dddddd" : "#00ff00" },
          styles.button,
        ]}
      >
        <Text style={styles.text}>{submitted ? "Clear" : "Submit"}</Text>
      </Pressable>
   

   {submitted ?
   (
       <Text style={styles.text}>You are registered as {name} </Text>
   )
   :null }
    
   </View>
 );
}


const styles = StyleSheet.create({
   body: {
     flex: 1,
     backgroundColor: "#ffffff",
     alignItems: "center",
   },
   text: {
     color: "#000000",
     fontSize: 20,
     margin: 10,
   },
   input: {
     width: 200,
     borderWidth: 1,
     borderColor: "#555",
     borderRadius: 5,
     textAlign: "center",
     fontSize: 20,
   },
   button: {
     width: 150,
     height: 50,
     alignItems: "center",
   },
 });
