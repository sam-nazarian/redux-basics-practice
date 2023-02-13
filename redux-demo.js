const redux = require('redux');

// reducer should be a pure function, (helps to seperate updating logic)
// reducer responsible for changing the store, (returns a new state based on the action)
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state; //default action, especially used when default initialization is dispatched
};

// counterReducer func will be executed for the first time createStore runs (initializes)
const store = redux.createStore(counterReducer);

// comopnent which subscribes to the store
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// counterSubscriber func should be re-executed whenever the state/store changes (a change hapends by a dispatchs)
store.subscribe(counterSubscriber); //counterSubscriber runs after dispatch

// Change state via dispatch
// type acts as an identifier
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
