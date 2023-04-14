import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {createRootStore} from './src/stores/RootStore';
import {ShoppingCart} from './src/components/ShoppingCart';
import {apiGetItems} from './src/utils/apiGetItems';
import {ItemList} from './src/components/ItemList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  item: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'darkorange',
    borderWidth: 2,
  },
});

export const rootStore = createRootStore();

const App = (): JSX.Element => {
  useEffect(() => {
    const _getItems = (): void => {
      apiGetItems()
        .then((res: any) => {
          console.log('getting items...again?');
          rootStore.itemStore.setItems(res);
        })
        .catch((err: Error) => {
          console.log('whoops!', err);
        });
    };

    _getItems();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.item}>
          <ShoppingCart />
        </View>
        <View style={styles.item}>
          <ItemList />
        </View>
      </SafeAreaView>
    </>
  );
};

export {App};
