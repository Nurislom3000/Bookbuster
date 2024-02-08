import axios from 'axios'

export default {
	state: () => ({
		user: {},
	}),

	mutations: {
		addUser(state, newVal) {
			state.user = newVal
		},

		addStory(state, newVal) {
			state.user.stories.push(newVal)
		},

		changeStory(state, newVal) {
			const index = state.user.stories.findIndex(post => post.id === newVal.id)
			if (index !== -1) {
				state.user.stories[index] = newVal
			}
		},
	},

	actions: {
		async getPosts({ state, dispatch }, newVal) {
			await axios
				.get('https://e1fdc46cd8aefbea.mokky.dev/posts')
				.then(response => {
					const userID = response.data.filter(user => user.id == newVal)[0]
						.forIncrement
					dispatch('delPostFromPostsServer', userID)
				})
		},

		async delPostFromPostsServer({ state }, id) {
			await axios.delete(`https://e1fdc46cd8aefbea.mokky.dev/posts/${id}`)
		},

		async delPost({ state, dispatch }, newVal, router) {
			dispatch('getPosts', newVal.id)

			state.user.stories = state.user.stories.filter(
				post => post.id != newVal.id
			)

			await axios
				.patch(
					`https://e1fdc46cd8aefbea.mokky.dev/users/${state.user.id}`,
					state.user
				)
				.then(response => {
					console.log(state.user)
					localStorage.setItem('user', JSON.stringify(state.user))
				})
		},
	},
	namespaced: true,
}
