import {useState} from "react";


const authorisationData = {
    login: '',
    password: ''
}

export const Login = (props: any) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const loginSetHandler = (e: any) => {
        setLogin(e.currentTarget.value)
    }
    const passwordSetHandler = (e: any) => {
        setPassword(e.currentTarget.value)
    }
    const authoriseMe = (auth:boolean)=>{
        props.auth(auth)
    }

    const submitData = () => {
        if (login === authorisationData.login && password === authorisationData.password) {
            authoriseMe(true)
        } else {
            authoriseMe(false)
        }
        setLogin('')
        setPassword('')
    }
    const onEnterPressHandler = (e: any) => {
        if (e.charCode === 13) {
            submitData()
        }
    }

    return <div>
        <h1>Login</h1>
        <div>
            <input placeholder={"login"}
                   onChange={loginSetHandler} value={login}
                   onKeyPress={onEnterPressHandler}
            />
        </div>
        <div>
            <input placeholder={'password'}
                   onChange={passwordSetHandler} value={password}
                   onKeyPress={onEnterPressHandler}
            />
        </div>

        <button
            onClick={submitData}

        >Login
        </button>
    </div>
}