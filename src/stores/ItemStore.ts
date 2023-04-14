import {makeAutoObservable} from 'mobx';
import {type ItemShape, type ItemStoreShape} from '../interfaces';

export const ItemStore = (): ItemStoreShape => {
  return makeAutoObservable({
    items: [] as ItemShape[],
    setItems: function (vals: ItemShape[]) {
      this.items = vals;
    },
    getItems: function (): ItemShape[] {
      return this.items;
    },
    removeItem: function (id: number): void {
      console.log(`[ItemStore]:removeItem removing ${id}`);
      const it = this.items.find((item: ItemShape) => item.id === id);
      if (it !== undefined) {
        it.quantity--;
      }
      console.log(this.items);
    },
    addItem: function (id: number) {
      console.log(`[ItemStore]:addItem adding ${id}`);
      const it = this.items.find((item: ItemShape) => item.id === id);
      if (it !== undefined) {
        it.quantity++;
      }
      console.log(this.items);
    },
  });
};
