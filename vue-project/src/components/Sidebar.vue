<template>
    <div class="grid-container">
        <div class="grid-item">
            <h2>Category 1</h2>
            <p>Descripción de la categoría 1</p>
        </div>
    </div>
</template>

<script>
export default {

    name: "sidebar"
}
</script>

<style scoped>
.h2 {
    color: black;
}

.grid-container {
    display: grid;
    grid-gap: 10px;
    margin: 20px;
}

.grid-item {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
    font-size: 12px;
    color: red;
}

.grid-item h2 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 24px;
}

.grid-item p {
    margin: 0;
}
</style>

