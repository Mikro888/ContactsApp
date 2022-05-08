import {ContactType} from "../App";

const initialState: Array<ContactType> = [{id: '1', name: "Vasiliy Agapov"},
    {id: '2', name: "Mikhail Romanov"},
    {id: '3', name: "iRillL"},
    {id: '4', name: "Maxim"},
    {id: '5', name: "Alex"},
]
export const contactsReducer = (state: Array<ContactType> = initialState, action: contactsReducerType): Array<ContactType> => {
    switch (action.type) {
        case 'ADD-CONTACT':
            return [{
                id: action.id,
                name: action.name
            }, ...state]
        case 'DELETE-CONTACT':
            return state.filter((c: ContactType) => c.id !== action.id)
        case "EDIT-CONTACT":

            return state.map((c: ContactType) => c.id === action.id ? {
                ...c,
                name: action.name
            } : c)
        default:
            return state
    }
}
export type contactsReducerType =
    addContactType
    | deleteContactType
    | editContactType


export type addContactType = ReturnType<typeof addContactAC>
export type deleteContactType = ReturnType<typeof deleteContactAC>
export type editContactType = ReturnType<typeof editContactAC>
export const addContactAC = (id: string, name: string) => {
    return {
        type: 'ADD-CONTACT',
        id,
        name
    } as const
}
export const deleteContactAC = (id: string) => {
    return {
        type: 'DELETE-CONTACT',
        id
    } as const
}
export const editContactAC = (id: string, name: string) => {
    return {
        type: 'EDIT-CONTACT',
        id,
        name
    } as const
}