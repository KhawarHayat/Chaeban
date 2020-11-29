import { CHANGE_DATE, CHANGE_MESSAGE, CHANGE_THEME, LOADINGINPUT, LOADINGOUTPUT, ERROR } from "./inputType"

const initialState = {
    date: '',
    message: '',
    theme: 'light',
    loadingInput: true,
    loadingOutput: true,
    error:false,
    errInfo:''
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
        case LOADINGINPUT:
            return {
                ...state,
                loadingInput: false
            }
        case LOADINGOUTPUT:
            return {
                ...state,
                loadingOutput: false
            }
            case ERROR:
                return{
                    ...state,
                    error: true,
                    errInfo: action.payload
                }
        default:
            return state
    }
}