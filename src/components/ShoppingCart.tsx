import React from 'react';
import {type ItemShape} from '../interfaces';
import {observer} from 'mobx-react-lite';
import {rootStore} from '../../App';
import {Button, FlatList, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  item: {
    marginBottom: 16,
    alignItems: 'baseline',
  },
});

export const ShoppingCart = observer((): JSX.Element => {
  const {cartStore, itemStore} = rootStore;

  const addToCart = (itemIndex: number): void => {
    cartStore.incrementCount(itemIndex);
    itemStore.removeItem(itemIndex);
  };

  const removeFromCart = (itemIndex: number): void => {
    cartStore.decrementCount(itemIndex);
    itemStore.addItem(itemIndex);
  };

  const renderNativeCart = (): JSX.Element => {
    if (cartStore.items.length === 0) {
      return <Text>No Items in Cart</Text>;
    }

    const _renderItem = (item: ItemShape) => (
      <Text style={styles.item}>
        ( {item.id} ) {item.title} - {item.quantity}
        <Button title={'➕'} onPress={() => addToCart(item.id)} />
        <Button title={'➖'} onPress={() => removeFromCart(item.id)} />
      </Text>
    );

    return (
      <FlatList
        data={cartStore.items}
        renderItem={({item}) => _renderItem(item)}
      />
    );
  };

  // console.log('[ShoppingCart]', cartStore.items);
  return <>{renderNativeCart()}</>;
});
