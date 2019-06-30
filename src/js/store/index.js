import { createStore } from "redux";
import rootReducer from "../reducers/index";


const store = createStore(rootReducer,
    {
        test: [{test_key: 'test_value'}]
    },
    window.devToolsExtension && window.devToolsExtension());

    export default store;