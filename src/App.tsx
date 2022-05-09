import React, {useState} from 'react';
import './App.css';
import {Login} from "./componetnts/Login";
import {Contacts} from "./componetnts/Contacts";
import uniqid from 'uniqid';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./redux/store";
import {
    addContactAC,
    deleteContactAC, editContactAC,
} from "./redux/contacts-reducer";

export type ContactType = {
    id: string,
    name: string
    phone: string
    email: string
}

function App() {
    const dispatch = useDispatch()
    const contacts = useSelector<AppRootState, Array<ContactType>>(state => state.contacts)

    const addContact = (title: string, phone: string, email: string) => {
        let newId = uniqid()
        dispatch(addContactAC(newId, title, phone, email))
    }
    const removeContact = (id: string) => {
        dispatch(deleteContactAC(id))
    }
    const editContact = (id: string, name: string) => {
        dispatch(editContactAC(id, name))
    }
    const [isAuth, setAuth] = useState(true)
    const authHandler = (auth: boolean) => {
        setAuth(auth)
    }
    return (
        <div className="App">
            {isAuth ? <Contacts contacts={contacts}
                                removeContact={removeContact}
                                addContact={addContact}
                                editContact={editContact}
                />
                :
                <Login auth={authHandler}/>}
        </div>
    )
}

export default App;
