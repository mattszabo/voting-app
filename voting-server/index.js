import makeStore from './src/store';
import startServer from './src/server';

const store = makeStore();

startServer(store);

store.dispatch({
  type: 'SET_ENTRIES',
  entires: require('./entries.json')
});
store.dispatch({type: 'NEXT'});

export { store };
