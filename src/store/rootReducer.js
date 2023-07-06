import {combineReducers} from 'redux';
import {positionsReducer} from './positions/positionsReducer';
import {filtersReducer} from './filters/filtersReducer';

export const rootReducer = combineReducers({
    positions: positionsReducer,
    filters: filtersReducer
})