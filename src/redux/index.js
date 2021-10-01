import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import {catalogReducer} from "./reducer/catalogReducer";
import thunk from 'redux-thunk'


export const store = createStore(catalogReducer, composeWithDevTools(applyMiddleware(thunk)));