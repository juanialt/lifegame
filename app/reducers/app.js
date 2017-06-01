import {
    extend
} from 'lodash/fp';

export function initialState() {
    return {
        number: 0,
        max: 50
    };
}

export const handlers = {
    INCREMENT: (state, { value }) => ({
        number: state.number + value
    }),

    SET_MAX: (state, { max }) => ({
        max
    })
};

export default function app(state = initialState(), action) {
    const fn = handlers[action.type];
    return fn ? extend(state, fn(state, action)) : state;
}
