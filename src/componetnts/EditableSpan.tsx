import {KeyboardEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    callBack: (id: string, title: string) => void
    id: string
    propName:string
    editMode:boolean
    toggleEditMode:(value:boolean)=>void
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, toggleEditMode] = useState(false)
    const [title, setTitle] = useState(props.title)

    const changeTitleHandler = (e: any) => {
        setTitle(e.currentTarget.value)
    }
    const onEditMode = () => {
        toggleEditMode(props.editMode)
    }
    const offEditMode = () => {
        if (title.trim() === ''&&props.propName==='Name: ') return
        toggleEditMode(false)
        props.callBack(props.id, title)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            offEditMode()
        }
    }
    return <>
        {!props.editMode ?
           title&&<div onDoubleClick={onEditMode}>{props.propName}<span >{title}</span></div> :


            <input autoFocus={true} value={title} onBlur={offEditMode}
                   onChange={changeTitleHandler}
                   onKeyPress={onKeyPressHandler}
                   placeholder={props.propName}
            />}
    </>
}
