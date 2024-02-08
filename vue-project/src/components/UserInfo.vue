<template>
	<div class="userInfo">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{ user.name }}</h5>
					<button
						@click="this.$emit('closeModalDialog')"
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<p>
						<strong>Login:</strong> {{ user.login }}; <br />
						<strong>Password:</strong> {{ user.pass }}
					</p>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-dismiss="modal"
						@click="deleteUser"
					>
						Log-out
					</button>
					<button
						@click="this.$router.push('/stories')"
						type="button"
						class="btn btn-primary"
					>
						My Stories
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserInfo',
	props: {
		user: [Object],
	},

	methods: {
		async deleteUser() {
			// Удалить пользователя из хранилища и localStorage
			this.$store.commit('usersModule/addUser', null)
			localStorage.removeItem('user')

			// Перейти на главную страницу
			await this.$router.push('/').then(response => {
				location.reload()
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.userInfo {
	width: 400px;
	height: 400px;
	position: absolute;
	right: 5%;
	top: 15%;
	z-index: 20;
}
</style>
