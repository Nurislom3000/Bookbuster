<template>
	<button class="card">
		<img :src="story.imgUrl" />
		<h1>{{ story.title.slice(0, 10) }}...</h1>
	</button>
</template>

<script>
export default {
	props: {
		story: [Object],
	},
}
</script>

<style lang="scss" scoped>
.card {
	height: 320px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0 0 20px 0;
	background: #edf1f4;

	img {
		height: 70%;
		width: 100%;
	}

	h1 {
		margin: 0 10px 0 10px;
	}
}
</style>
