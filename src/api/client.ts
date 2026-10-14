import type { ProductsResponse } from '../types';

const PRODUCTS_URL = 'https://dummyjson.com/products';

export async function fetchProducts() {
  try {
    const response = await fetch(PRODUCTS_URL);

    if (!response.ok) {
      throw new Error('Could not load the catalog.');
    }

    const body = (await response.json()) as ProductsResponse;

    if (!Array.isArray(body.products)) {
      throw new Error('Could not load the catalog.');
    }

    return body.products;
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === 'Could not load the catalog.'
    ) {
      throw error;
    }

    throw new Error(
      'Could not load the catalog. Check your connection and try again.',
    );
  }
}
