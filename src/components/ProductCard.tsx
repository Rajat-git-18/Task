import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Product } from '../types';

type Props = {
  product: Product;
  onPress: (product: Product) => void;
};

export function ProductCard({ product, onPress }: Props) {
  return (
    <Pressable
      onPress={() => onPress(product)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image source={{ uri: product.thumbnail }} style={styles.thumb} />
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{product.category}</Text>
        </View>
        <View style={styles.meta}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.rating}>★ {product.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#1A1814',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 3,
  },
  pressed: {
    opacity: 0.92,
  },
  thumb: {
    width: 96,
    height: 96,
    borderRadius: 12,
    margin: 12,
    backgroundColor: '#E7E2DA',
  },
  body: {
    flex: 1,
    paddingVertical: 14,
    paddingRight: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1814',
    lineHeight: 21,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 8,
    backgroundColor: '#EFE8DC',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 12,
    color: '#6B5344',
    textTransform: 'capitalize',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#9A4D24',
  },
  rating: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6F675E',
  },
});
