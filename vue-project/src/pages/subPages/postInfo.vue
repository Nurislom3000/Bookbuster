<template>
	<div class="all">
		<div class="container">
			<Header />
			<div class="main">
				<div class="cards">
					<PostCard :post="filteredPost" :showAllText="true" />
				</div>
				<MyInfo />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '@/components/postCard.vue'

export default {
	computed: {
		...mapState({
			posts: state => state.postsModule.posts,
		}),

		filteredPost() {
			const postId = this.$route.params.id
			return this.posts.filter(post => post.id == postId)[0]
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
