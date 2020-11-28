import { CHANGE_DATE, CHANGE_MESSAGE, CHANGE_THEME } from "./inputType"

const initialState = {
    date: '12-12-2020',
    message: 'I am here',
    theme: 'green',
}

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATE:
            return {
                ...state,
                date: action.payload
            }
        case CHANGE_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
}