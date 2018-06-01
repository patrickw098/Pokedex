import React from 'react';
import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import UIReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: UIReducer
});

export default rootReducer;
