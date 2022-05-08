import {combineReducers, createStore} from "redux";
import {contactsReducer} from "./contacts-reducer";

const rootReducer = combineReducers({
    contacts:contactsReducer
})
export type AppRootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)