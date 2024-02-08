<template>
	<div class="all">
		<div class="container">
			<Header @updateSearchValue="updateSearchValue" />
			<div class="main">
				<div class="cards">
					<PostCard
						v-for="post in searchedPosts"
						:key="post.id"
						:post="post"
						:showAllText="false"
					/>
				</div>
				<MyInfo />
			</div>
		</div>
	</div>
</template>

<script>
import PostCard from '@/components/postCard.vue'
import { mapState } from 'vuex'

export default {
	data() {
		return {
			searchV: '',
		}
	},

	computed: {
		...mapState({
			storePosts: state => state.postsModule.posts,
		}),

		searchedPosts() {
			return this.storePosts.filter(post =>
				post.title.toLowerCase().includes(this.searchV.toLowerCase())
			)
		},
	},

	methods: {
		updateSearchValue(event) {
			this.searchV = event
		},
	},

	components: { PostCard },
}
</script>

<style lang="scss" scoped>
.all {
	display: flex;
	justify-content: center;
}

.container {
	width: 73%;

	.main {
		margin-top: 26%;
		display: flex;
		justify-content: space-between;

		.cards {
			max-width: 61.5%;
		}
	}
}
</style>
