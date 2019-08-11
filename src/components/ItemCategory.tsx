import * as React from "react";
import { Panel } from "react-bootstrap";

import ItemContainer from "../containers/ItemContainer";
import "../css/ItemCategory.css";

export interface ItemCategoryProps {
    name: string;
    items: JSX.Element[];
    total: number;
    handleDelete: any;
}

const mapItems = (items: any, category: string, handleDelete: any) => {
    const handleDeleteClick = (index: number) => {
        handleDelete(index, category);
    };
    return items.map((item: any, index: number) => {
        return (
            <ItemContainer
                key={index}
                id={index}
                name={item.name}
                value={item.value}
                handleDeleteClick={handleDeleteClick}
            />
        );
    });
};

export const ItemCategory = ({
    name,
    total,
    items,
    handleDelete
}: ItemCategoryProps) => (
    <Panel className="category">
        <Panel.Heading className="itemCategory-header">
            <div className="category-name">{name}</div>
            <div>{`$${total}`}</div>
        </Panel.Heading>
        <Panel.Body className="items">
            {mapItems(items, name, handleDelete)}
        </Panel.Body>
    </Panel>
);

export default ItemCategory;
