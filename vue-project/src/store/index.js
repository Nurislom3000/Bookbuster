import { createStore } from 'vuex'
import postsModule from '@/store/storeModules/postsModule.js'
import usersModule from '@/store/storeModules/usersModule.js'

export default createStore({
	modules: {
		postsModule: postsModule,
		usersModule: usersModule,
	},
})
