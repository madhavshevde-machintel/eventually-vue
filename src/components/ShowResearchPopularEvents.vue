<template>
    <ul role="list" class="list-main home-page-list">
        <li v-for="subcategory in subCategories">
            <a  target="_blank" :href='subcategory.subCategroySlug'
                class="link-4 home-page-list-item">
                {{ subcategory.subCategoryName }}
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            subCategories: []
        }
    },
    emits : ['subcategories-loaded'],
    props: {
        categorySlug: String
    },
    methods: {
        async fetchData() {
            let url = this.apiUrl + '/EventuallyHome/GetResearchSubCategories?categorySlug=' + this.categorySlug;
            const response = await fetch(url);
            this.subCategories = await response.json();
            this.$emit('subcategories-loaded','subcategories-loaded');
        },
    },
    inject : ['apiUrl'],
    mounted() {
        this.fetchData();
    }
}
</script>