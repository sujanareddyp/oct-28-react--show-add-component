export const trelloReducer = (state = {
    'To-do': ["Todo1", "Todo2"]
}, action) => {
    switch (action.type) {
        case 'ADD_NEW_LIST':
            return Object.assign({}, state, { [action.userInput]: [] });
        case "ADD_NEW_CARD":
            let oldCards = [...state[action.title]];
            oldCards.push(action.userInput);
            return Object.assign({}, state, { [action.title]: oldCards });
        case "DELETE_CARD":
            let newCards = [...state[action.title]];
            newCards.splice(action.index, 1);
            return Object.assign({}, state, { [action.title]: newCards });
        default: return state;
    }

}