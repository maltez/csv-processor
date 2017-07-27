import { createStore } from 'redux';
import dataManager from './reducer';

const store = createStore(dataManager);

export default store;