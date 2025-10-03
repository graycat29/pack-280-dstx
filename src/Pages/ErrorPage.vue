<template>
	<div class="page">
		
		<div class="container-fluid">
			<div class="container content">
				<div class="row">
					<div class="col-12">
						<div class="major-tag-line">404</div>
					</div>
				</div>
			</div>
			<div class="main-image-wrapper">
				<div class="main-image"></div>
			</div>
		</div>
		
		<!-- Error -->
		<div class="container section no-y-padding">
			<div class="row">
				<div class="col-lg-12">
					<div class="paragraph-list">
						<div class="paragraph-title">
							<p>Looks like this page isn't a thing.</p>
						</div>
						<div class="paragraph-description">
							<p>(The page you were looking for has likely been moved, deleted, or never existed.)</p>
							<p>Here's the <router-link to="/">home page</router-link>.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script setup>
import {useHead} from "@unhead/vue";

useHead({
	title: 'Page Not Found - Cub Scout Pack 280 DSTX',
	meta: [
	{
		name: 'description',
		content: 'Oops! The page you’re looking for doesn’t exist. Navigate back to Cub Scout Pack 280’s homepage or contact us for help.'
	}
	]
})
</script>

<style scoped>
/* nada */
</style>
