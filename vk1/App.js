import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0)
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)


  function calculate() {
    const lower = (220 - age) * 0.65
    const upper = (220 - age) * 0.85

    setLower(lower)
    setUpper(upper)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput  style={styles.result}
      keyboardType='decimal-pad'
      onChangeText={text => setAge(text)}
      onTextInput={calculate}
      />
      <Text style={styles.field}>Hr limits</Text>
      <Text style={styles.field}>{lower.toFixed(0)} - {upper.toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: '',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 0,
    fontSize: 30,
  },
  result: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 150,
    fontSize: 30,
  }
});