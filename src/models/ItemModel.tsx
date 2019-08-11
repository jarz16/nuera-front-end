import { types } from "mobx-state-tree";

export const Item = types.model({
    name: types.string,
    value: types.number
});

export const ItemModel = types
    .model({
        Clothing: types.optional(types.array(Item), []),
        Electronics: types.optional(types.array(Item), []),
        Kitchen: types.optional(types.array(Item), [])
    })
    .actions(self => ({
        add(item: any, category: string) {
            self[category].push(item);
        },
        delete(index: number, category: string) {
            self[category].splice(index, 1);
        }
    }))
    .views(self => ({
        get totalClothingValue() {
            return self.Clothing.reduce(
                (total: number, item: any) => total + item.value,
                0
            );
        },
        get totalElectronicsValue() {
            return self.Electronics.reduce(
                (total: number, item: any) => total + item.value,
                0
            );
        },
        get totalKitchenValue() {
            return self.Kitchen.reduce(
                (total: number, item: any) => total + item.value,
                0
            );
        },
        get totalValue() {
            return (
                this.totalClothingValue +
                this.totalElectronicsValue +
                this.totalKitchenValue
            );
        },
        get clothingItems() {
            return self.Clothing;
        },
        get electronicsItems() {
            return self.Electronics;
        },
        get kitchenItems() {
            return self.Kitchen;
        }
    }));
