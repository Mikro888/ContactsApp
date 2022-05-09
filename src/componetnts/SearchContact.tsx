import {ChangeEvent, ChangeEventHandler, useState} from "react";

type SearchContactType = {
    setSearchMode: any  //fix any
    setSearchItem: any
    searchItem: string
}
export const SearchContact = (props: SearchContactType) => {

    const searchContactHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSearchMode(true)
        props.setSearchItem(e.currentTarget.value)
    }
    const stopSearch = () => props.setSearchItem('')
    return (
        <div>
            <input placeholder={'search'} value={props.searchItem}
                   onChange={searchContactHandler}/>
            <button onClick={stopSearch}>x</button>
        </div>
    )
}