import {makeAutoObservable} from 'mobx';
import {type ItemShape, type ItemStoreShape} from '../interfaces';

export const ItemStore = (): ItemStoreShape => {
  return makeAutoObservable({
    items: [] as ItemShape[],
    set storeItems(vals: ItemShape[]) {
      this.items = vals;
    },
    removeItem: function (id: number): void {
      const it = this.items.find((item: ItemShape) => item.id === id);
      if (it !== undefined) {
        it.quantity--;
      }
    },
    addItem: function (id: number) {
      const it = this.items.find((item: ItemShape) => item.id === id);
      if (it !== undefined) {
        it.quantity++;
      }
    },
  });
};
