import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage  from './component/LoginPage';
import { NativeRouter as Router, Route, Routes } from 'react-router-native';
import Home  from './component/Home'
import { useNavigate } from 'react-router-native'


export default function App() {
  return (
    <View style={styles.container}>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
