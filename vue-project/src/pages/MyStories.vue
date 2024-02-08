<template>
	<div>
		<Header />

		<div class="stories">
			<div class="creator">
				<button @click="showCreator = true" class="create btn btn-light">
					<img src="https://www.svgrepo.com/show/365656/plus-thin.svg" alt="" />
				</button>
			</div>

			<StoryCard
				v-for="story in $store.state.usersModule.user.stories"
				@click="$router.push(`/stories/${story.id}`)"
				:key="story.id"
				:story="story"
			/>
		</div>

		<div @click="showCreator = false" v-if="showCreator == true" class="form">
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
					<button @click="sendStoryInfo" class="btn btn-success">Create</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import StoryCard from '@/components/StoryCard.vue'
import axios from 'axios'
export default {
	data() {
		return {
			showCreator: false,
			storyInfo: {
				id: null,
				title: '',
				author: '',
				publishDate: '',
				text: '',
				imgUrl: '',
				forIncrement: 0,
			},
			userID: this.$store.state.usersModule.user.id,
			isValid: false,
		}
	},
	methods: {
		async sendStory() {
			await axios.post(
				'https://e1fdc46cd8aefbea.mokky.dev/posts',
				this.storyInfo
			)
		},

		async sendStoryInfo() {
			this.storyInfo.id = Math.floor(Math.random() * 1000000000000000)
			const img = new Image()
			img.onload = () => {
				this.isValid = true
			}
			img.onerror = () => {
				this.isValid = false
			}
			img.src = this.storyInfo.imgUrl
			if (this.storyInfo.title.length < 3) {
				alert('Title should not be less then 3 symbols')
			} else if (this.storyInfo.text.length < 300) {
				alert('Your story is too short')
			} else if (this.isValid == false) {
				alert('Write a real URL')
			} else {
				this.storyInfo.author = this.$store.state.usersModule.user.name
				const currentTimeInMilliseconds = Date.now()
				const date = new Date(currentTimeInMilliseconds)
				const day = date.getDate()
				const month = date.getMonth() + 1
				const year = date.getFullYear()
				this.storyInfo.publishDate = `${day}.${month}.${year}`

				this.$store.commit('usersModule/addStory', this.storyInfo)
				localStorage.setItem(
					'user',
					JSON.stringify(this.$store.state.usersModule.user)
				)
				await axios
					.patch(
						`https://e1fdc46cd8aefbea.mokky.dev/users/${this.userID}`,
						this.$store.state.usersModule.user
					)
					.then(response => {
						this.sendStory()
						this.showCreator = false
						this.storyInfo = {
							title: '',
							text: '',
							imgUrl: '',
							publishDate: '',
						}
					})
			}
		},
	},
	computed: {
		userStories() {
			return this.$store.state.usersModule.user.stories
		},
	},

	components: { StoryCard },
}
</script>

<style lang="scss" scoped>
.stories {
	margin-top: 250px;
	padding: 0 5% 0 5%;
	display: grid;
	grid-template-columns: 23% 23% 23% 23%;
	grid-column-gap: 4%;
	grid-row-gap: 10%;

	.create {
		border: 2px solid #999797;
		padding: 50px;
		border-radius: 10px;
		height: 320px;
		width: 100%;
		transition-duration: 0.5s;
		background: #fff;

		&:hover {
			background: #edf1f4;
		}
	}
}

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
