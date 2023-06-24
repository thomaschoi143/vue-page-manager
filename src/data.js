const pagesKey = "pages";

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

function save() {
	localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

if (!pagesStore) {
	pagesStore = [
		{ id: 0, pageTitle: "Home", content: "Welcome!", link: { text: "Home" }, published: true },
	];
	save();
}

export default {
	addPage(page) {
		page.id = pagesStore[pagesStore.length - 1].id + 1;
		pagesStore.push(page);
		save();
	},

	getAllPages() {
		return pagesStore;
	},

	readSinglePage(id) {
		return pagesStore.find((page) => page.id == id && page.published);
	},

	getSinglePage(id) {
		return pagesStore.find((page) => page.id == id);
	},

	editPage(id, page) {
		pagesStore[pagesStore.findIndex((page) => page.id == id)] = page;
		save();
	},

	removePage(id) {
		pagesStore.splice(
			pagesStore.findIndex((page) => page.id == id),
			1
		);
		save();
	},
};
