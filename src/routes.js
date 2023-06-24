import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import Pages from "./views/Pages.vue";
import PagesList from "./views/PagesList.vue";
import PageEdit from "./views/PageEdit.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: "/:id?", component: PageViewer, props: true },
		{
			path: "/pages",
			component: Pages,
			children: [
				{ path: "", component: PagesList },
				{ path: "create", component: CreatePage },
				{ path: ":id/edit", component: PageEdit, props: true },
			],
		},
	],
});

export default router;
