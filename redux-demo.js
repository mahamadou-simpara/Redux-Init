const redux = require('redux');


const counterReducer = (state = {counter: 0}, action) => {

    if(action.type === 'increment'){
        console.log('Increment');
        return { counter: state.counter + 1};
    }
    if(action.type === 'decrement'){
        console.log('Decrement');
        return { counter: state.counter - 1};
    }

    return state;
};

const store = redux.createStore(counterReducer);


const counterSubcribe = () => {
    const lastestState = store.getState();

    console.log(lastestState);
};

store.subscribe(counterSubcribe);


store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});