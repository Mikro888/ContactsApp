import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemPropsType = {
    callBack: (title: string,phone:string,email:string) => void
    offEditMode: (addMode: boolean) => void
    placeholder: string

}

export function AddItemForm(props: AddItemPropsType) {

    let [title, setTitle] = useState("")
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTitleHandler = () => {
        (title.trim() === "") ?
            setError('Name required!') :
            props.callBack(title.trim(),phone.trim(),email.trim())
        setTitle("")
        setPhone("")
        setEmail("")
        props.offEditMode(false)
    }

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onChangePhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.currentTarget.value)
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
const offEditModeHandler = ()=>{
            props.offEditMode(false)
}
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTitleHandler();
        }
    }

    return <div>
        <div>   <input value={title}
                       onChange={onChangeNameHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ""}
                       autoFocus={true}
                       placeholder={props.placeholder}

        /></div>
        <div><input value={phone}
                    onChange={onChangePhoneHandler}
                    onKeyPress={onKeyPressHandler}
                    className={error ? "error" : ""}

                    placeholder={"Phone"}
        /></div>
        <div> <input value={email}
                     onChange={onChangeEmailHandler}
                     onKeyPress={onKeyPressHandler}
                     className={error ? "error" : ""}

                     placeholder={"Email"}
        /></div>



        <button onClick={addTitleHandler}>Add</button>
        <button onClick={offEditModeHandler}>Cancel</button>
        {error && <div className="error-message">{error}</div>}
    </div>
}
