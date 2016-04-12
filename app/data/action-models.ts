export interface ReduxAction {
    type: string
}
export interface IndexedItemAction extends ReduxAction {
    targetIndex: Number
}