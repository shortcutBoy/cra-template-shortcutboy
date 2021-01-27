import { combineReducers } from 'redux';
import { uiSlice } from './ui';
export const rootReducer = combineReducers({
  ui: uiSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
