<template>
    <div class="sidebar">
        <div class="category-grid">
            <div class="category">
                <h3>Tutorial 1</h3>
                <img  style="width: 70%" src="https://www.shutterstock.com/image-photo/webinar-online-education-on-internet-260nw-1931033117.jpg">
                <p>Description of category 1</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "categories",
};
</script>

<style scoped>
.sidebar {
}

.category-grid {
    display: grid;
}

.category {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
}

.category h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: black;
}

.category p {
    font-size: 14px;
    line-height: 1.5;
    color: #2c3e50;
}
</style>