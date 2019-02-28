export const addNewList = (userInput) => {
    return ({
        type: "ADD_NEW_LIST",
        userInput: userInput
    })
}

export const addNewCard = (userInput, title) => {
    return ({
        type: "ADD_NEW_CARD",
        userInput: userInput,
        title: title
    })
}

export const delNewCard = (index, title) => {
    return ({
        type: "DELETE_CARD",
        index: index,
        title: title
    })
}