import React from 'react';
import {ItemShape, type RootStoreShape} from '../interfaces';
import {observer} from 'mobx-react-lite';
import {Button, FlatList, Text} from 'react-native';

import {rootStore} from '../../App';

export const ItemList = observer((): JSX.Element => {
  const {itemStore, cartStore}: RootStoreShape = rootStore;

  const addItemToCart = (itemIndex: number, itemTitle: string): void => {
    itemStore.removeItem(itemIndex);
    cartStore.addItem(itemIndex, itemTitle);
  };

  const renderItemsNative = (itemItems: ItemShape[]): JSX.Element => {
    if (itemItems.length === 0) {
      return <></>;
    }

    const _renderItem = (item: ItemShape) => (
      <Text>
        ( {item.id} ) {item.title} - {item.quantity}
        <Button
          title={'✅'}
          onPress={() => addItemToCart(item.id, item.title)}
        />
      </Text>
    );

    return (
      <FlatList
        data={itemStore.items}
        renderItem={({item}) => _renderItem(item)}
      />
    );
  };

  // console.log('[ITEMLIST]', itemStore.items);

  return (
    <>
      <Text>Item List</Text>
      {renderItemsNative(itemStore.items)}
    </>
  );
});
