<template>
	<header>
		<div class="black">
			<div class="container">
				<a style="color: white" href="https://main-hat.vercel.app/"
					>Go to my another project→
				</a>
				<div
					v-if="this.$store.state.usersModule.user == null"
					class="registration"
				>
					<button
						@click="this.$router.push('/sign-in')"
						type="button"
						class="btn btn-outline-light"
					>
						Sign-in
					</button>
					<button
						@click="this.$router.push('/sign')"
						type="button"
						class="btn btn-warning"
					>
						Login
					</button>
				</div>
				<button @click="showUserInfo = true" v-else class="userInformation">
					<h1>{{ this.$store.state.usersModule.user.name.charAt(0) }}</h1>
				</button>
				<UserInfo
					@closeModalDialog="this.showUserInfo = false"
					v-if="showUserInfo == true"
					:user="this.$store.state.usersModule.user"
				/>
			</div>
		</div>
		<div class="title-search">
			<div class="container">
				<a href="/">Book buster</a>
				<input
					v-model="searchValue"
					@input="this.$emit('updateSearchValue', searchValue)"
					placeholder="Search..."
					class="search"
					type="text"
				/>
			</div>
		</div>
		<div class="about-header">
			<div class="container">
				<router-link to="/about">ABOUT</router-link>
			</div>
		</div>
	</header>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue'

export default {
	name: 'Header',
	components: { UserInfo },
	data() {
		return {
			showUserInfo: false,
			searchValue: '',
		}
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

header {
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 27vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.container {
	min-width: 73%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.registration {
		display: flex;
		justify-content: space-between;
		width: 160px;
	}

	.userInformation {
		width: 45px;
		height: 45px;
		border: 2px solid #5e5e5e;
		border-radius: 100px;
		background: #5e5e5e;

		h1 {
			font-size: 33px;
		}
	}
}

.black {
	background: #000;
	height: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Instrument Sans', sans-serif;
}

.title-search {
	display: flex;
	justify-content: center;
	height: 45%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
}

.title-search {
	.container {
		display: flex;
		justify-content: space-between;
	}

	a {
		font-family: 'Playfair Display', serif;
		font-optical-sizing: auto;
		font-size: 29.6px;
		color: #000000;
		line-height: 33.3px;
		font-weight: 600;
		font-style: italic;
		text-decoration: none;
	}

	.search {
		border-radius: 30px;
		padding-left: 10px !important;
		width: 30%;
		border: 1px solid rgb(148, 148, 148);
		font-family: Arial;
	}
}

.about-header {
	display: flex;
	justify-content: center;
	align-items: center;
	background: #edf1f4;
	height: 25%;

	a {
		text-decoration: none;
		font-family: 'Instrument Sans', sans-serif;
		font-size: 16px;
		font-weight: 500;
		color: #000000;
	}
}
</style>
