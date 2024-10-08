import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false,
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true,
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false);
})

test('reducer should throw Error because type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true,
    }

    //expection
    expect(() => {
        reducer(state, {type: 'FAKE TYPE'})
    }).toThrowError()
})