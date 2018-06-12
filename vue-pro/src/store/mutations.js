import {
	SEARCH_SHOW
} from './mutation-types.js'

// import {setStore, getStore} from '../config/mUtils'

// import {localapi, proapi} from 'src/config/env'

export default {
	[SEARCH_SHOW](state,searchShow) {
		console.log(state)
		console.log(searchShow)
		state.searchShow = searchShow
	},
}
