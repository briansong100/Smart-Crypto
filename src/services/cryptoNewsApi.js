import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoNewsApiHeaders = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-host': process.env.REACT_APP_NEWS_HEADER_HOST,
	'x-rapidapi-key': process.env.REACT_APP_HEADER_KEY
}
const baseUrl= 'https://bing-news-search1.p.rapidapi.com'

const createNewsRequest = (url) => ({ url, headers: cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder)=>({
		getCryptoNews: builder.query({
			query: ({newsCategory, count})=> createNewsRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
		})
	})
})
//safeSearch: 'Off', textFormat: 'Raw'
export const {
	useGetCryptoNewsQuery 
} = cryptoNewsApi
