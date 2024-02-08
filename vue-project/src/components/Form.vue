<template>
	<form @submit.prevent.stop>
		<div class="mb-3">
			<label class="form-label">Nik-name</label>
			<input v-model="user.name" type="text" class="form-control" />
		</div>
		<div class="mb-3">
			<label class="form-label">Login</label>
			<input v-model="user.login" type="text" class="form-control" />
		</div>
		<div class="mb-3">
			<label class="form-label">Password</label>
			<input v-model="user.pass" type="password" class="form-control" />
		</div>

		<button @click="this.$emit('sendUser', user)" class="btn btn-primary">
			Sign in
		</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: '',
				login: '',
				pass: '',
				stories: [],
			},
		}
	},
}
</script>

<style lang="scss" scoped>
form {
	width: 30%;
}
</style>
