<template>
    <div class="grid-container">
        <div class="grid-item">
            <h2>Category 1</h2>
            <p>Descripción de la categoría 1</p>
        </div>
        <div class="grid-item">
            <h2>Category 2</h2>
            <p>Descripción de la categoría 2</p>
        </div>
        <div class="grid-item">
            <h2>Category 3</h2>
            <p>Descripción de la categoría 3</p>
        </div>
        <div class="grid-item">
            <h2>Category 4</h2>
            <p>Descripción de la categoría 4</p>
        </div>
    </div>
</template>

<script>
export default {

    name: "categories"
}
</script>

<style scoped>

.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
}

.grid-item {
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
    font-size: 20px;
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

