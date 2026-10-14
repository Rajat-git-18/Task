# Product Catalog

A small product catalog built with Expo and TypeScript. It loads products from the DummyJSON API and uses React Navigation to move between the list and a detail screen.

## Features

- Scrollable list of products (thumbnail, title, price, category, rating)
- Tap a product to open its detail screen
- Pull to refresh
- Loading spinner on the first fetch
- Error screen with a retry button if the request fails

## Stack

- React Native
- Expo SDK 56
- TypeScript
- React Navigation 7 (native stack)
- `fetch` against `https://dummyjson.com/products`

## Project layout

```
src/
  api/           fetchProducts()
  components/    ProductCard, LoadingView, ErrorView
  navigation/    stack navigator
  screens/       HomeScreen, DetailScreen
  types/         Product and navigation params
```

`App.tsx` mounts the navigation container.

## Run it

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `i` / `a` for a simulator. This project is on Expo SDK 56 (React Native 0.85), so the Expo Go app on your phone needs to be the SDK 56 build. A newer or older Expo Go will refuse to open it.
