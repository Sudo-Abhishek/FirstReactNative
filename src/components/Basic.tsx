import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

function Basic() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
      {/* text component */}
      <Text style={styles.myFirstText}>My First react native text</Text>
      <Text style={styles.nestedText}>
        Text components can be <Text style={styles.bold}>Nested</Text>
      </Text>
      {/* Image component */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <Image
        style={styles.image}
        source={require('../../assets/dsa_patterns.jpeg')}
      />
      {/* Button component */}
      <Button onPress={() => setCounter(prev => prev + 1)} title="Click Me" />
      <Text>{counter}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  myFirstText: {
    fontSize: 30,
  },
  nestedText: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default Basic;
