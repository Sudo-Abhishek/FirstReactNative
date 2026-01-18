import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function TextInputComponent() {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Text input component</Text>
      <TextInput
        placeholder="Type something here"
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
