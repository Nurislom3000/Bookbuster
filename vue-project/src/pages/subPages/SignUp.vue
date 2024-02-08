<template>
	<div class="sign-up">
		<Form @sendUser="sendUser" />
	</div>
</template>

<script>
import axios from 'axios'
import Form from '@/components/Form.vue'

export default {
	components: { Form },

	data() {
		return {
			user: {},
		}
	},

	methods: {
		async checkUser() {
			await axios
				.get('https://e1fdc46cd8aefbea.mokky.dev/users')
				.then(response => {
					this.user = response.data
				})
		},

		async sendUser(event) {
			if (
				event.name.length < 3 ||
				event.login.length < 3 ||
				event.pass.length < 3
			) {
				alert('Length must not be less then 3')
			} else if (
				this.user.find(user => user.login == event.login) != undefined
			) {
				alert('This login is already used use another login')
			} else {
				await axios
					.post('https://e1fdc46cd8aefbea.mokky.dev/users', event)
					.then(response => {
						this.$router.push('/signed')
						this.$store.commit('usersModule/addUser', event)
						localStorage.setItem('user', JSON.stringify(event))
					})
			}
		},
	},

	mounted() {
		this.checkUser()
	},
}
</script>

<style lang="scss" scoped>
.sign-up {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background-image: url('https://kalix.club/uploads/posts/2022-12/1671766863_kalix-club-p-fon-komiks-krasivo-9.jpg');
	background-size: 100% 100%;
	color: aliceblue;
}
</style>
