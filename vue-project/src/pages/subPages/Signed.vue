<template>
	<div class="inner px-4 pt-5 my-5 text-center border-bottom">
		<h1 class="display-4 fw-bold">You have signed-up</h1>
		<br />
		<div class="col-lg-6 mx-auto">
			<p class="lead mb-4">
				Quickly design and customize responsive mobile-first sites with
				Bootstrap, the world’s most popular front-end open source toolkit,
				featuring Sass variables and mixins, responsive grid system, extensive
				prebuilt components, and powerful JavaScript plugins.
			</p>
			<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
				<button
					@click="this.$router.push('/')"
					type="button"
					class="btn btn-primary btn-lg px-4 me-sm-3"
				>
					Return to main
				</button>
				<button
					@click="this.$router.push('/stories')"
					type="button"
					class="btn btn-outline-secondary btn-lg px-4"
				>
					Create a story
				</button>
			</div>
		</div>
		<div class="overflow-hidden">
			<div class="container px-5">
				<img
					src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-docs.png"
					class="img-fluid border rounded-3 shadow-lg mb-4"
					alt="Example image"
					width="700"
					height="500"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.inner {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
}
.overflow-hidden {
	max-height: 30vh;
	margin-bottom: -12vh;

	.container {
		display: flex;
		justify-content: center;
	}
}
</style>
