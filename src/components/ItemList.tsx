import { observer } from "mobx-react";
import * as React from "react";
import { ListGroupItem, Panel } from "react-bootstrap";

import "../css/ItemList.css";

import ItemCategory from "./ItemCategory";

export interface ItemListProps {
    itemList: any;
}

const deleteItem = (index: number, category: string, itemList: any): void => {
    itemList.delete(index, category);
};

export const ItemList = ({ itemList }: ItemListProps) => {
    const handleDelete = (index: number, category: string) =>
        deleteItem(index, category, itemList);
    return (
        <Panel className="items-list">
            <ListGroupItem className="categories">
                <ItemCategory
                    name={"Electronics"}
                    total={itemList.totalElectronicsValue}
                    items={itemList.electronicsItems}
                    handleDelete={handleDelete}
                />
                <ItemCategory
                    name={"Clothing"}
                    total={itemList.totalClothingValue}
                    items={itemList.clothingItems}
                    handleDelete={handleDelete}
                />
                <ItemCategory
                    name={"Kitchen"}
                    total={itemList.totalKitchenValue}
                    items={itemList.kitchenItems}
                    handleDelete={handleDelete}
                />
            </ListGroupItem>
            <ListGroupItem className="total">
                <div>Total</div>
                <div>{`$${itemList.totalValue}`}</div>
            </ListGroupItem>
        </Panel>
    );
};

export default observer(ItemList);
