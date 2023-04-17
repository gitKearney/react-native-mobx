export interface CartStoreShape {
  items: ItemShape[];
  incrementCount: (index: number) => void;
  decrementCount: (index: number) => void;
  addItem: (index: number, title: string) => void;
}

export interface ItemShape {
  title: string;
  quantity: number;
  id: number;
}

export interface RootStoreShape {
  itemStore: ItemStoreShape;
  cartStore: CartStoreShape;
}

export interface ItemStoreShape {
  items: ItemShape[];
  storeItems: ItemShape[];
  removeItem: (index: number) => void;
  addItem: (index: number) => void;
}
