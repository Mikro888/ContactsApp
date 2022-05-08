import {EditableSpan} from "./EditableSpan";
import {ContactType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {useState} from "react";
import {SearchContact} from "./SearchContact";

type ContactsPropsType = {
    contacts: Array<ContactType>
    removeContact: (id: string) => void
    addContact: (name: string) => void
    editContact: (id: string, name: string) => void

}
export const Contacts = (props: ContactsPropsType) => {
    const [addMode, setAddMode] = useState(false)
    const [searchMode, setSearchMode] = useState(false)
    const [searchItem, setSearchItem] = useState('')
    const offEditMode = () => {
        setAddMode(false)
    }
    // const setSearchModeHandler = (value:boolean) => setSearchMode(value)
    let contactsForRender = props.contacts
    if (searchItem !== '') {
        contactsForRender = props.contacts.filter((str, i) =>
            // str.name.toLowerCase().charAt(i)===searchItem.toLowerCase().charAt(i))
            str.name.toLowerCase().includes(searchItem.toLowerCase()))
    } else {
        contactsForRender = props.contacts
    }


    return <>
        <h1 style={{display: 'inline'}}>Contacts</h1>

        {addMode ?
            <AddItemForm callBack={props.addContact}
                         offEditMode={offEditMode}
                         placeholder={'Add contact'}
            /> :
            <button onClick={() => setAddMode(true)}>+</button>}
        {addMode || <SearchContact
            setSearchMode={setSearchMode}
            setSearchItem={setSearchItem}
            searchItem={searchItem}
        />}
        <ul>
            {
                contactsForRender.map((c: ContactType) => {
                    return <li key={c.id}>
                        <EditableSpan id={c.id} title={c.name}
                                      callBack={props.editContact}/>
                        <button onClick={() => props.removeContact(c.id)}
                        >x
                        </button>
                    </li>
                })
            }
        </ul>
        <button>log out</button>
    </>
}