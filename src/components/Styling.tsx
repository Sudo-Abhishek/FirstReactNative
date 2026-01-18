import { StyleSheet, Text, View } from 'react-native';

export default function StylingDemo() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: '#f0f0f0',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          Inline styling example
        </Text>
      </View>
      <View
        style={[
          styles.combinedStyle,
          { borderWidth: 2, borderColor: 'purple' },
        ]}
      >
        <Text
          style={[styles.combinedStyle, { textDecorationLine: 'underline' }]}
        >
          Combined text styles
        </Text>
        <Text
          style={[
            styles.combinedStyle,
            {
              color: 'red',
              fontWeight: 'bold',
            },
          ]}
        >
          Combined text styles with different color
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  combinedStyle: {
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  combinedText: {
    fontSize: 14,
  },
});
