<template>
	<li>
		<router-link
			:to="`/${page.id}`"
			class="nav-link"
			aria-current="page"
			:title="`This link goes to the ${page.link.text} page`"
			active-class="active"
			>{{ page.link.text }}
		</router-link>
	</li>
</template>

<script>
export default {
	props: ["page"],
};
</script>
