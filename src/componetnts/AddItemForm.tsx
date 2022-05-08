import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemPropsType = {
    callBack: (title: string) => void
    offEditMode: (addMode: boolean) => void
    placeholder: string
}

export function AddItemForm(props: AddItemPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTitleHandler = () => {
        (title.trim() === "") ?
            setError('Name required!') :
            props.callBack(title.trim())
        setTitle("")
        props.offEditMode(false)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTitleHandler();
        }
    }

    return <div>
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
               autoFocus={true}
               placeholder={props.placeholder}
        />
        <button onClick={addTitleHandler}>+</button>
        {error && <div className="error-message">{error}</div>}
    </div>
}
