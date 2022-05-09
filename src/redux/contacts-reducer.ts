import {ContactType} from "../App";

const initialState: Array<ContactType> = [{id: '1', name: "Vasiliy Agapov", phone:"9163335565", email:"w38@bk.ru"},
    {id: '2', name: "Mikhail Romanov", phone:"9163335566", email:"w39@bk.ru"},
    {id: '3', name: "Kirill Romanov", phone:"9163335567", email:"w40@bk.ru"},
    {id: '4', name: "Maxim Tselikov", phone:"9163335568", email:"w41@bk.ru"},
    {id: '5', name: "Alex Savchenko", phone:"9163335569", email:"w42@bk.ru"},
]
export const contactsReducer = (state: Array<ContactType> = initialState, action: contactsReducerType): Array<ContactType> => {
    switch (action.type) {
        case 'ADD-CONTACT':
            return [{
                id: action.id,
                name: action.name,
                phone:action.phone,
                email:action.email
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
export const addContactAC = (id: string, name: string, phone:string,email:string) => {
    return {
        type: 'ADD-CONTACT',
        id,
        name,
        phone,
        email
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