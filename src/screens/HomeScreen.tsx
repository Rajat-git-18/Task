import { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fetchProducts } from '../api/client';
import { ErrorView } from '../components/ErrorView';
import { LoadingView } from '../components/LoadingView';
import { ProductCard } from '../components/ProductCard';
import type { Product, RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const next = await fetchProducts();
      setProducts(next);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Could not load the catalog.';
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    try {
      const next = await fetchProducts();
      setProducts(next);
      setError(null);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Could not load the catalog.';
      setError(message);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        product={item}
        onPress={(product) => navigation.navigate('Details', { product })}
      />
    ),
    [navigation],
  );

  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return (
      <ErrorView message={error} onRetry={loadProducts} />
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => String(item.id)}
      renderItem={renderItem}
      contentContainerStyle={[
        styles.list,
        { paddingBottom: insets.bottom + 24 },
      ]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#1A1814"
          colors={['#1A1814']}
        />
      }
      ListHeaderComponent={
        <Text style={styles.count}>
          {products.length} {products.length === 1 ? 'item' : 'items'}
        </Text>
      }
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No products to show.</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingTop: 8,
    flexGrow: 1,
  },
  count: {
    fontSize: 13,
    color: '#6F675E',
    marginBottom: 12,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 15,
    color: '#6F675E',
  },
});
