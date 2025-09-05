import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => // middleware help to store the data one time load store in caching 
        getDefaultMiddleware().concat(todosApi.middleware)
})