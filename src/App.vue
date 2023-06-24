<template>
	<navbar></navbar>

	<router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
	components: {
		Navbar,
	},
	created() {
		// this.$bus.$on('navbarLinkActivated', (index)=>{
		//     this.activePage = index;
		// })
	},
	methods: {
		pageCreated(pageObj) {
			this.pages.push(pageObj);
		},
	},
};
</script>
