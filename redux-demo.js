const redux = require('redux');


const counterReducer = (state = {counter: 0}, action) => {

    return { counter: state.counter + 1};
};

const store = redux.createStore(counterReducer);


const counterSubcribe = () => {
    const lastestState = store.getState();

    console.log(lastestState);
};

store.subscribe(counterSubcribe);


store.dispatch({type: 'increment'});