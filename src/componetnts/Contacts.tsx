import {ContactType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {useState} from "react";
import {SearchContact} from "./SearchContact";
import {Card} from "./Card";

type ContactsPropsType = {
    contacts: Array<ContactType>
    removeContact: (id: string) => void
    addContact: (name: string,phone:string,email:string) => void
    editContact: (id: string, name: string) => void

}
export const Contacts = (props: ContactsPropsType) => {
    const [addMode, setAddMode] = useState(false)
    const [searchMode, setSearchMode] = useState(false)
    const [searchItem, setSearchItem] = useState('')
    const offEditMode = () => {
        setAddMode(false)
    }
    let contactsForRender
    if (searchItem !== '') {
        contactsForRender = props.contacts.filter((str, i) =>
            str.name.toLowerCase().includes(searchItem.toLowerCase()))
    } else {
        contactsForRender = props.contacts
    }
``

    return <>
        <h1 style={{display: 'inline'}}>Contacts</h1>

        {addMode ?
            <AddItemForm callBack={props.addContact}
                         offEditMode={offEditMode}
                         placeholder={'Name'}
            /> :
            <button onClick={() => setAddMode(true)}>+</button>}
        {addMode || <SearchContact
            setSearchMode={setSearchMode}
            setSearchItem={setSearchItem}
            searchItem={searchItem}
        />}
        {contactsForRender.map((c:ContactType)=>{
            return <Card key={c.id}  id={c.id} title={c.name} phone={c.phone} email={c.email} callBack={props.editContact} removeContact={props.removeContact}/>
        })}
    </>
}