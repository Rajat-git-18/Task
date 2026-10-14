import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function DetailScreen({ route }: Props) {
  const { product } = route.params;
  const banner = product.images[0] ?? product.thumbnail;

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: banner }} style={styles.banner} />
        <View style={styles.body}>
          <Text style={styles.title}>{product.title}</Text>
          {product.brand ? (
            <Text style={styles.brand}>{product.brand}</Text>
          ) : null}
          <View style={styles.row}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>★ {product.rating.toFixed(1)}</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.categoryText}>{product.category}</Text>
            </View>
          </View>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Pressable
            onPress={() => Alert.alert('Added to bag', product.title)}
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          >
            <Text style={styles.buttonLabel}>Add to bag</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F3F0EA',
  },
  content: {
    paddingBottom: 28,
  },
  banner: {
    width: '100%',
    height: 300,
    backgroundColor: '#E7E2DA',
  },
  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    color: '#1A1814',
  },
  brand: {
    marginTop: 6,
    fontSize: 15,
    color: '#6F675E',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 14,
  },
  rating: {
    backgroundColor: '#1A1814',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  category: {
    backgroundColor: '#EFE8DC',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryText: {
    fontSize: 13,
    color: '#6B5344',
    textTransform: 'capitalize',
  },
  price: {
    marginTop: 18,
    fontSize: 28,
    fontWeight: '700',
    color: '#9A4D24',
  },
  description: {
    marginTop: 14,
    fontSize: 16,
    lineHeight: 24,
    color: '#3F3A34',
  },
  button: {
    marginTop: 28,
    backgroundColor: '#1A1814',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
