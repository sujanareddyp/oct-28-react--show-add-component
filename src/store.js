import {createStore, combineReducers} from 'redux';
import {trelloReducer} from './Reducers/trelloReducer';
const rootReducer = combineReducers({
    trelloReducer
})

const store = createStore(rootReducer);

export default store;
