<template>
	<div class="the-card">
		<a class="UNCATEGORIZED" href="/">UNCATEGORIZED</a>
		<a class="title" :href="`/${post.id}`">
			<h1 class="title">
				{{ post.title }}
			</h1>
		</a>

		<p class="publishInfo">
			Published by <span>{{ post.author }}</span> on
			<span>{{ post.publishDate }}</span>
		</p>
		<router-link :to="`/${post.id}`"
			><img :src="post.imgUrl" alt="☹️"
		/></router-link>
		<p v-if="showAllText" class="text">{{ post.text }}</p>
		<p v-else class="text">{{ post.text.substring(0, 210) }}</p>
		<div class="continue">
			<router-link v-if="showAllText == false" :to="`/${post.id}`"
				>Continue reading →</router-link
			>
			<div v-else class="like-dislike">
				<button type="button" class="btn btn-success">👍</button>
				<button type="button" class="btn btn-danger">👎</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		post: [Object],
		showAllText: [Boolean],
	},
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
.the-card {
	margin-bottom: 12%;

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
			width: 90px;
			display: flex;
			justify-content: space-between;

			button {
				border-radius: 0;
				border: none;
			}
		}
	}
}
</style>
