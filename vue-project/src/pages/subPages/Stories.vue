<template>
	<Header />

	<div class="all">
		<div class="the-card">
			<a class="UNCATEGORIZED" href="/">UNCATEGORIZED</a>
			<a class="title">
				<h1 class="title">
					{{ post.title }}
				</h1>
			</a>

			<p class="publishInfo">
				Published by <span>{{ post.author }}</span> on
				<span>{{ post.publishDate }}</span>
			</p>
			<img :src="post.imgUrl" alt="☹️" />
			<p class="text">{{ post.text }}</p>

			<div class="continue">
				<div class="like-dislike">
					<button
						@click="showRefactor = true"
						type="button"
						class="btn btn-success"
					>
						Refactor
					</button>
					<RefactorForm
						@click="showRefactor = false"
						:post="post"
						v-if="showRefactor"
						@closeModal="this.showRefactor = false"
					/>
					<button
						@click="
							this.$store.dispatch('usersModule/delPost', post),
								this.$router.push('/stories')
						"
						type="button"
						class="btn btn-danger"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import RefactorForm from '@/components/UI/RefactorForm.vue'
import axios from 'axios'
export default {
	data() {
		return {
			post: '',
			showRefactor: false,
		}
	},
	methods: {
		async poster() {
			await axios
				.get('https://e1fdc46cd8aefbea.mokky.dev/posts')
				.then(response => {
					this.post = response.data.filter(
						post => post.id == this.$route.params.id
					)[0]
				})
		},
	},
	beforeMount() {
		this.poster()
	},
	components: { RefactorForm },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.all {
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-top: 200px;
}
.the-card {
	margin-bottom: 12%;
	max-width: 60%;

	.UNCATEGORIZED {
		font-family: 'Instrument Sans', serif;
		font-size: 14.4px;
		font-weight: 600;
		line-height: 23.04px;
		color: #1a7a89;

		&:hover {
			text-decoration: none;
		}
	}

	.title {
		font-size: 52.32px;
		line-height: 60px;
		font-weight: 600;
		margin-top: 4%;
		font-family: 'Playfair Display';
		text-decoration: none;
		color: #000;

		&:hover {
			text-decoration: underline;
		}

		&:visited {
			color: #000;
		}
	}

	.publishInfo {
		font-family: 'Instrument Sans', serif;
		font-size: 14.4px;
		line-height: 23px;
		font-weight: 400;
		margin-top: 3%;
		color: RGBA(17, 24, 31, 0.65);

		span {
			font-weight: 600;
		}
	}

	img {
		margin-top: 4%;
		width: 100%;
		height: 53.5%;
		border-radius: 10px;
	}

	.text {
		margin-top: 4%;
		font-family: 'Instrument Sans', 'Times New Roman';
		font-size: 17px;
		line-height: 27.2px;
		font-weight: 400;
		overflow-wrap: break-word;
	}

	.continue {
		margin-top: 5%;
		font-family: 'Instrument Sans', serif;
		font-size: 17px;
		font-weight: 400;
		line-height: 27.2px;

		&:hover {
			text-decoration: none;
		}

		a {
			color: #000000;
		}

		.like-dislike {
			width: 200px;
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>
