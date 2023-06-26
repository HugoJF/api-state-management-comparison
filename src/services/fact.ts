import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const factApi = createApi({
    reducerPath: 'factApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://meowfacts.herokuapp.com/'}),
    endpoints: (builder) => ({
        getFact: builder.query<MeowFactsApiResponse, void>({
            query: () => '/',
        }),
    }),
})

export const {useGetFactQuery} = factApi
