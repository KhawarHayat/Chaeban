const { CHANGE_DATE, CHANGE_MESSAGE, CHANGE_THEME, LOADINGINPUT, LOADINGOUTPUT, ERROR } = require("./inputType");

export function handleDate(date){
    return {
        type: CHANGE_DATE,
        payload: date
    }
}

export function handleMessage(message){
    return{
        type: CHANGE_MESSAGE,
        payload: message
    }
}

export function handleTheme(theme){
    return{
        type: CHANGE_THEME,
        payload: theme
    }
}
export function loadingInput() {
    return{
        type: LOADINGINPUT
    }
}
export function loadingOutput() {
    return{
        type: LOADINGOUTPUT
    }
}
export function error(err){
    return{
        type: ERROR,
        payload: err
    }
}