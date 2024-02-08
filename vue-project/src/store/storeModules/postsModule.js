import axios from 'axios'

export default {
	state: () => ({
		posts: [],
	}),

	actions: {
		async getPosts({ state }) {
			try {
				await axios
					.get('https://e1fdc46cd8aefbea.mokky.dev/posts')
					.then(response => {
						if (response.data.length > 0) {
							state.posts = response.data
						} else {
							console.log('You have no posts in server')
							return undefined
						}
					})
			} catch (error) {
				console.error(error)
			}
		},
	},

	namespaced: true,
}
