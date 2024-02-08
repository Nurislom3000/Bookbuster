<template>
	<router-view></router-view>
</template>

<script>
export default {
	mounted() {
		this.$store.dispatch('postsModule/getPosts')
		try {
			this.$store.commit(
				'usersModule/addUser',
				JSON.parse(localStorage.getItem('user'))
			)
		} catch (error) {
			console.log(error)
			this.$store.commit('usersModule/addUser', null)
		}
	},
}
</script>

<style>
body {
	overflow-x: hidden;
}
</style>
