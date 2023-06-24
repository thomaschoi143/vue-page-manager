<template>
    <div v-if="page" class="container">
		<h1 class="emphasize">{{ page.pageTitle }}</h1>
		<p>{{ page.content }}</p>
	</div>
</template>

<script>
export default {
    props: ['id'],
    inject: ['$pages'],
    created() {
        this.page = this.$pages.readSinglePage(this.id);

        // this.$watch(() => this.$route.params, (newParams, prevParams) => {
        //     this.page = this.$pages.getSinglePage(newParams.index);
        // });
    },
    data() {
        return {
            page: null
        }
    },
    watch: {
        id(newId, oldId) {
            this.page = this.$pages.readSinglePage(newId);
        }
    }
}

</script>
<style scoped>
.emphasize {
    color: blue;
}
</style>