<template>
	<div class="sign-in text-center">
		<main class="form-signin">
			<form @submit.prevent.stop>
				<img
					class="mb-4"
					src="../../../public/favicon.ico"
					alt=""
					width="72"
					height="57"
				/>

				<h1 class="h3 mb-3 fw-normal">Please sign in</h1>

				<div class="top form-floating">
					<input
						v-model="user.login"
						class="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						style="
							border-bottom-left-radius: 0px;
							border-bottom-right-radius: 0px;
						"
					/>
					<label for="floatingInput">Login</label>
				</div>
				<div class="form-floating">
					<input
						v-model="user.pass"
						type="password"
						class="form-control"
						id="floatingPassword"
						placeholder="Password"
						style="border-top-left-radius: 0px; border-top-right-radius: 0px"
					/>
					<label for="floatingPassword">Password</label>
				</div>
				<br />
				<div class="checkbox mb-3">
					<label>
						<input
							@click="notaRobot = !notaRobot"
							type="checkbox"
							value="remember-me"
						/>
						I am not a robot
					</label>
				</div>
				<button
					@click="checkUser"
					class="w-100 btn btn-lg btn-primary"
					type="submit"
				>
					Sign in
				</button>
				<p class="mt-5 mb-3 text-muted">© 2020–2024</p>
			</form>
		</main>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			notaRobot: false,
			user: {
				login: '',
				pass: '',
			},
		}
	},

	methods: {
		async checkUser() {
			await axios
				.get('https://e1fdc46cd8aefbea.mokky.dev/users')
				.then(response => {
					const FUser = response.data.filter(
						user => user.login == this.user.login && user.pass == this.user.pass
					)[0]

					if (
						response.data.filter(
							user =>
								user.login == this.user.login && user.pass == this.user.pass
						).length > 0
					) {
						if (this.notaRobot == false) {
							alert('you are a robot')
						} else {
							this.$store.commit('usersModule/addUser', FUser)
							localStorage.setItem('user', JSON.stringify(FUser))
							this.$router.push('/signed')
						}
					} else {
						alert('incorrect email or password')
					}
				})
		},
	},
}
</script>

<style lang="scss" scoped>
.sign-in {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.form-signin {
		width: 300px;
		height: 60%;

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			height: 100%;

			.form-floating {
				min-width: 100%;
			}
		}
	}
}
</style>
