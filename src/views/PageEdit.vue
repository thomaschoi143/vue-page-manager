<template>
	<h4>Edit {{ page.pageTitle }}</h4>
	<form action="" class="container mb-3">
		<div class="row">
			<div class="col-md-8">
				<div class="mb-3">
					<label for="" class="form-label"> Page Title </label>
					<input type="text" class="form-control" v-model="page.pageTitle" />
				</div>
				<div class="mb-3">
					<label for="" class="form-label">Content</label>
					<textarea
						type="text"
						rows="5"
						class="form-control"
						v-model="page.content"
					></textarea>
				</div>
			</div>
			<div class="col">
				<div class="mb-3">
					<label for="" class="form-label">Link Text</label>
					<input type="text" class="form-control" v-model="page.link.text" />
				</div>
				<div class="mb-3">
					<div class="form-check">
						<input
							type="checkbox"
							id="publishedCheck"
							class="form-check-input"
							v-model="page.published"
						/>
						<label for="publishedCheck" class="form-check-label">Published</label>
					</div>
				</div>
			</div>
		</div>

		<div class="mb-3">
			<button class="btn btn-primary me-2" @click.prevent="submit">Edit</button>
			<button class="btn btn-secondary me-2" @click.prevent="gotToPagesList">Cancel</button>
			<button class="btn btn-danger" @click.prevent="deletePage">Delete</button>
		</div>
	</form>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject } from "vue";

const router = useRouter();
const pages = inject("$pages");
const bus = inject("$bus");

const { id } = defineProps(["id"]);

let page = pages.getSinglePage(id);

function submit() {
	pages.editPage(id, page);

	bus.$emit("page-updated", {
		page,
	});

	gotToPagesList();
}

function gotToPagesList() {
	router.push({ path: "/pages" });
}

function deletePage() {
	pages.removePage(id);

	bus.$emit("page-deleted", { id });

	gotToPagesList();
}
</script>
