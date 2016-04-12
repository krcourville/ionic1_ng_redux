import { SELECT_CONTACT } from './dash-actions'
import { DashState } from './dash-state'
import { IndexedItemAction } from './action-models'

const defaultState: DashState = {
    selectedContactIndex: -1
};

export default function(state: DashState = defaultState, action: IndexedItemAction) {
    switch (action.type) {
        case SELECT_CONTACT:
            return Object.assign({}, {
                selectedContactIndex: action.targetIndex
            });

        default:
            return state;
    }
}