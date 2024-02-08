<template>
	<div class="form">
		<div @click.prevent.stop class="creatorForm">
			<form @submit.prevent.stop>
				<div class="mb-3">
					<label class="form-label">Title</label>
					<input
						v-model="storyInfo.title"
						placeholder="Title"
						class="form-control"
					/>
				</div>
				<div class="mb-3">
					<label class="form-label">Text</label>
					<textarea v-model="storyInfo.text" rows="10" class="form-control" />
				</div>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">Cover IMG</label>
					<input
						v-model="storyInfo.imgUrl"
						placeholder="URL"
						class="form-control"
					/>
				</div>
				<br />
				<button
					@click="SaveChanges, this.$emit('closeModal')"
					class="btn btn-success"
				>
					Sve-Changes
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	props: {
		post: [Object],
	},
	data() {
		return {
			User: this.$store.state.usersModule.user,
			storyInfo: {
				id: this.post.id,
				title: this.post.title,
				author: this.post.author,
				publishDate: this.post.publishDate,
				text: this.post.text,
				imgUrl: this.post.imgUrl,
				forIncrement: this.post.forIncrement,
			},
		}
	},

	methods: {
		async SaveChanges() {
			try {
				this.$store.commit('usersModule/changeStory', this.storyInfo)
				localStorage.setItem(
					'user',
					JSON.stringify(this.$store.state.usersModule.user)
				)

				await axios
					.get('https://e1fdc46cd8aefbea.mokky.dev/posts')
					.then(response => {
						const postID = response.data.filter(
							post => post.id == this.storyInfo.id
						)[0].forIncrement
						axios.patch(
							`https://e1fdc46cd8aefbea.mokky.dev/posts/${postID}`,
							this.storyInfo
						)

						try {
							axios
								.patch(
									`https://e1fdc46cd8aefbea.mokky.dev/users/${this.User.id}`,
									this.User
								)
								.then(response => {
									console.log(response.data),
										console.log(this.User),
										console.log(this.User.id)
								})
						} catch (error) {
							console.error(error)
						}
					})
			} catch (error) {
				console.error(error)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.form {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;

	.creatorForm {
		width: 40%;
		height: 80%;
		background: #525252;
		padding: 20px;
		border-radius: 15px;
		color: #edf1f4;
	}
}
</style>
