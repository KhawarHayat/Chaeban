const { CHANGE_DATE, CHANGE_MESSAGE, CHANGE_THEME } = require("./inputType");

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