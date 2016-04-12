import {IndexedItemAction} from './action-models'

export const SELECT_CONTACT = 'SELECT_CONTACT';

export function select(index: Number) {    
    const target:IndexedItemAction = {
        type: SELECT_CONTACT,
        targetIndex: index
    };        
    return target;
}