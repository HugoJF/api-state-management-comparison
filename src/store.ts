import {configureStore} from '@reduxjs/toolkit'
import {factApi} from "./services/fact";

export default configureStore({
    reducer: {
        [factApi.reducerPath]: factApi.reducer,
    },

    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(factApi.middleware)
    )
})
