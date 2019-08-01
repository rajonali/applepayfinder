import { createStore, applyMiddleware, compose } from "redux";
import index_reducer  from "../reducers/index";

import thunk from 'redux-thunk';


const store = createStore(index_reducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );
    export default store;