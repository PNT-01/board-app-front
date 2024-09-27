import {configureStore, combineReducers} from '@reduxjs/toolkit';
import BoardSlice from '../slices/BoardSlice';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    REGISTER,
    PURGE
} from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session';
import memberSlice from '../slices/MemberSlice';

const reducers = combineReducers ({
    memberSlice,
    BoardSlice
});

const persistConfig = {
    key: 'root',
    storage: storageSession
};

const persistreducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistreducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER]
            }
        })
});