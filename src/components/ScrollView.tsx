import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ScrollViewComponent() {
  return (
    <View style={styles.container}>
      <Text>Scroll View Component</Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollviewContent}
        nestedScrollEnabled={true}
        bounces={true}
      >
        {[...Array.from({ length: 20 }, (_, b) => b + 1)].map(item => (
          <View key={item} style={styles.box}>
            <Text style={styles.boxText}>Text {item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollView: {
    height: 200,
    backgroundColor: '#f0f0f0f0',
  },
  scrollviewContent: {
    padding: 20,
  },
  box: {
    height: 40,
    marginBottom: 10,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignContent: 'center',
  },
  boxText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
