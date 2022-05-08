import {KeyboardEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    callBack: (id: string, title: string) => void
    id: string
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, toggleEditMode] = useState(false)
    const [title, setTitle] = useState(props.title)

    const changeTitleHandler = (e: any) => {
        setTitle(e.currentTarget.value)
    }
    const onEditMode = () => {
        toggleEditMode(true)
    }
    const offEditMode = () => {
        if (title.trim() === '') return
        toggleEditMode(false)
        props.callBack(props.id, title)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            offEditMode()
        }
    }
    return <>
        {!editMode ?
            <span onDoubleClick={onEditMode}>{title}</span> :
            <input autoFocus={true} value={title} onBlur={offEditMode}
                   onChange={changeTitleHandler}
                   onKeyPress={onKeyPressHandler}
            />}
    </>
}
