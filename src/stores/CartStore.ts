import {type CartStoreShape, type ItemShape} from '../interfaces';
import {makeAutoObservable} from 'mobx';

export const CartStore = (): CartStoreShape => {
  return makeAutoObservable({
    items: [] as ItemShape[], // these items are separate from the item store
    addItem: function (id: number, title: string) {
      console.log(`[CartStore]:addItem ${id}-${title}`);
      const it = this.items.find(item => item.id === id);
      if (it === undefined) {
        this.items.push({title, id, quantity: 1});
      } else {
        it.quantity++;
      }
      console.log(this.items);
    },
    decrementCount: function (id: number) {
      console.log(`[CartStore]:decrementCount ${id}`);
      const it = this.items.find(item => item.id === id);
      if (it !== undefined) {
        it.quantity--;
      }
      console.log(this.items);
    },
    incrementCount: function (id: number) {
      console.log(`[CartStore]:incrementCount ${id}`);
      const it = this.items.find(item => item.id === id);
      if (it !== undefined) {
        it.quantity++;
      }
      console.log(this.items);
    },
  });
};
