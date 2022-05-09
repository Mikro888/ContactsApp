import classes from "./Card.module.css";
import {EditableSpan} from "./EditableSpan";
import {KeyboardEvent, useState} from "react";

export type CardPropsType = {
    id: string
    title: string
    removeContact: (id: string) => void
    callBack: (id: string, name: string) => void
    email: string
    phone: string
}
export const Card = (props: CardPropsType) => {
    const [editMode, toggleEditMode] = useState(false)
    const [editButtonContent,setEditButtonContent]= useState('edit')
    const toggleEditModeHandler = ()=>{
        editMode?editModeOff():editModeOn()
    }
    const editModeOn = () => {
        toggleEditMode(true)
        setEditButtonContent('save')

    }
    const editModeOff = () => {
        toggleEditMode(false)
        setEditButtonContent('edit')

    }
    const deleteContactHandler = () =>{
    props.removeContact(props.id)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            editModeOff()
        }
    }
    return (
        <div className={classes.cardContainer}
             // onClick={editModeOff}
            onKeyPress={onKeyPressHandler}
        >
            <button className={classes.delButton}
                    onClick={deleteContactHandler}>x
            </button>
            <button className={classes.editButton}
                    onClick={toggleEditModeHandler}>{editButtonContent}
            </button>
            <div><EditableSpan propName={'Name: '} title={props.title}
                               callBack={props.callBack} id={props.id}
                               editMode={editMode}
                               toggleEditMode={toggleEditMode}
                             /></div>
            <div><EditableSpan propName={'Phone: '} title={props.phone}
                               callBack={props.callBack} id={props.id}
                               editMode={editMode}
                               toggleEditMode={toggleEditMode}
                               /></div>
            <div><EditableSpan propName={'Email: '} title={props.email}
                               callBack={props.callBack} id={props.id}
                               editMode={editMode}
                               toggleEditMode={toggleEditMode}
                               /></div>
        </div>
    )
}