
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './reducers/counterReducer';
import { Rule34Reducer } from './reducers/rule34Reducer';
import { notesReducer } from './reducers/notesReducer';
import { weatherReducer } from './reducers/weatherReducer';
import { animeReducer } from './reducers/animeReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import {

    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import { themeReducer } from './reducers/themeReducer';

export const actions = {
  
}

const rootReducer = combineReducers(
    {
        counter: counterReducer,
        rule34: Rule34Reducer,
        notes: notesReducer,
        weather: weatherReducer,
        anime: animeReducer,
        theme: themeReducer,
        
    }
)

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = configureStore({reducer: persistedReducer, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),})
export let persistor = persistStore(store)


console.log(store.getState())
export default store