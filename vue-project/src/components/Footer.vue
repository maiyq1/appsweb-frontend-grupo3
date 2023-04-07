<template>
    <footer>
        <div class="footer-container">
            <div class="links">
                <a href="#">ventas@library.com</a>
                <a href="#">95862354</a>
                <a href="#">Los Manzanos 396</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333;
    color: #fff;
    height: auto;
    width: 100%;
    z-index: 1000;
}

.footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
}

.links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.links a {
    color: #fff;
    margin: 10px;
    text-decoration: none;
    font-size: 1rem;
}
</style>