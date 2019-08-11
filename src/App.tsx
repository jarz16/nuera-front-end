import * as React from "react";
import { Jumbotron } from "react-bootstrap";

import ItemList from "./components/ItemList";
import ItemInputContainer from "./containers/ItemInputContainer";
import "./css/App.css";
import { ItemModel } from "./models/ItemModel";

const itemModel = ItemModel.create();

class App extends React.PureComponent {
    public render() {
        return (
            <Jumbotron className="App">
                <ItemList itemList={itemModel} />
                <ItemInputContainer itemList={itemModel} />
            </Jumbotron>
        );
    }
}

export default App;
