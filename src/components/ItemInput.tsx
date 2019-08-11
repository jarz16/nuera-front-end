import * as React from "react";
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    InputGroup
} from "react-bootstrap";

import "../css/ItemInput.css";

class ItemInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            category: "",
            name: "",
            value: 0
        };
        this.handleAddClick = this.handleAddClick.bind(this);
        this.assignCategoryInputRef = this.assignCategoryInputRef.bind(this);
        this.assignNameInputRef = this.assignNameInputRef.bind(this);
        this.assignValueInputRef = this.assignValueInputRef.bind(this);
    }
    public render() {
        return (
            <Form className="item-input">
                <FormGroup className="item-name">
                    <FormControl
                        id="name"
                        type="text"
                        placeholder="Item Name"
                        inputRef={this.assignNameInputRef}
                    />
                </FormGroup>
                <FormGroup className="item-value">
                    <InputGroup>
                        <InputGroup.Addon>$</InputGroup.Addon>
                        <FormControl
                            id="value"
                            type="number"
                            placeholder="Value"
                            inputRef={this.assignValueInputRef}
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup className="item-category">
                    <FormControl
                        componentClass="select"
                        placeholder="Category"
                        inputRef={this.assignCategoryInputRef}
                    >
                        <option value="Clothing">Clothing</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Kitchen">Kitchen</option>
                    </FormControl>
                </FormGroup>
                <Button
                    className="add-button"
                    bsStyle="primary"
                    onClick={this.handleAddClick}
                >
                    {"Add"}
                </Button>
            </Form>
        );
    }
    private assignNameInputRef(nameInputRef: any) {
        this.setState({ nameInputRef });
    }
    private assignValueInputRef(valueInputRef: any) {
        this.setState({ valueInputRef });
    }
    private assignCategoryInputRef(categoryInputRef: any) {
        this.setState({ categoryInputRef });
    }
    private handleAddClick() {
        const { nameInputRef, valueInputRef, categoryInputRef } = this.state;
        this.props.handleAdd(
            nameInputRef.value,
            parseFloat(valueInputRef.value),
            categoryInputRef.value
        );
    }
}

export default ItemInput;
