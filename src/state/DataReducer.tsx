// project files
import Action from "../types/reducerActions";
import Type from "../types/reducerTypes";
import iMedia from "../interfaces/iMedia";


function DataReducer(state: iMedia[], action: Action): iMedia[] {
    switch (action.type) {
        case Type.CREATE_ITEM:
            // @ts-ignore
            return createItem(state, action);
        case Type.UPDATE_ITEM:
            return updateItem(state, action);
        case Type.SET_DATA:
            return setData(state, action);
        default:
            throw new Error("No action type found");
    }
}

function createItem(state: iMedia[], action: Action) {
    const { payload } = action;
    //@ts-ignore
    const data = payload;
    return [...state, data];
}

function updateItem(state: iMedia[], action: Action) {
    const { payload } = action;
    //@ts-ignore
    const data = payload;
    const newState = [...state];
    // @ts-ignore
    const index = newState.findIndex((item) => item.id === data.id);
    // @ts-ignore
    newState[index] = { ...data };
    return newState;
}

function setData(state: iMedia[], action: Action) {
    const { payload } = action;
    //@ts-ignore
    const newData: iMedia[] = payload;

    if (payload !== null) return newData;
    return state;
}

export default DataReducer;
