import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

//Store
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
