import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useNavigate } from 'react-router-native'

export default function LoginPage() {
  const [text, onChangeText] = useState("")
  const [text2, onChangeText2] = useState("")
  const navigate = useNavigate()
  let OnPress = () =>{
    if(text && text2){ 
        navigate("/home")
  }else{
    onChangeText("");
    onChangeText2("")
  }}


  return (
    <View style={styles.container}>
      <TextInput style={styles.container} value={text} placeholder="e-mail" onChangeText={onChangeText} maxLength={6} />
      <TextInput style={styles.container} value={text2} placeholder="Password" onChangeText={onChangeText2} maxLength={6} />
      <Button
        style={styles.container}
        onPress={OnPress}
        title="Submit"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
