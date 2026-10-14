import { ActivityIndicator, StyleSheet, View } from 'react-native';

export function LoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1A1814" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F0EA',
  },
});
