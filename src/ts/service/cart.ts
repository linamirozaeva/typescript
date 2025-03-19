import Buyable from '../domain/buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotal(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
        
    }

    getDiscout(discout: number): number {
        let total: number = this.getTotal();
        total = total - total * (discout / 100);
        return total;
    }

    deleteId(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }
}