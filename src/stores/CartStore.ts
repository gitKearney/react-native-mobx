import {type CartStoreShape, type ItemShape} from '../interfaces';
import {makeAutoObservable} from 'mobx';

export const CartStore = (): CartStoreShape => {
  return makeAutoObservable({
    items: [] as ItemShape[], // these items are separate from the item store
    addItem: function (id: number, title: string) {
      const it = this.items.find(item => item.id === id);
      if (it === undefined) {
        this.items.push({title, id, quantity: 1});
      } else {
        it.quantity++;
      }
    },
    decrementCount: function (id: number) {
      const it = this.items.find(item => item.id === id);
      if (it !== undefined) {
        it.quantity--;
      }
    },
    incrementCount: function (id: number) {
      const it = this.items.find(item => item.id === id);
      if (it !== undefined) {
        it.quantity++;
      }
    },
  });
};
