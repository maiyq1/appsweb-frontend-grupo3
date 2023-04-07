<template>

</template>

<script>
import HeaderProject from "@/App.vue";
import categories from "@/components/Sidebar.vue";

export default {
    name: "list-component",
    computed: {
        data() {
            return {
                categories:[]
            }
        }
    },
    components: {HeaderProject},

    beforeMount() {
        this.categories=[{name:'nombre 1 '},{name:'nombre 2 '},{name:'nombre 3'}]
    }
}
</script>

<style scoped>

</style>