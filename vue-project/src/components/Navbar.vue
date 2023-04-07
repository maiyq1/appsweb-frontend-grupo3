<template>
    <nav>
        <div class="nav-container">
            <div class="toggle-icon" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="logo">Library UPC</div>
            <div class="icon"> <img style="width: 50px" src="https://www.upc.edu.pe/static/img/logo_upc_red.png"></div>
        </div>
        <div class="menu-container" :class="{ open: isMenuOpen }">
            <a href="#">Catálogo 1</a>
            <a href="#">Catálogo 2</a>
            <a href="#">Catálogo 3</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
nav {
    display: flex;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #333;
    color: #fff;
    height: 60px;
}

.nav-container {
    display: flex;
    align-items: center;
}

.logo {
    margin-left: 500px;
    font-size: 1.5rem;
    font-weight: bold;
}

.toggle-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 30px;
}

.toggle-icon span {
    background-color: #fff;
    border-radius: 2px;
    height: 3px;
    width: 100%;
    transition: all 0.3s ease-in-out;
}

.menu-container {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: left;
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;
}

.menu-container a {
    display: block;
    margin-bottom: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;
}

.menu-container a:hover {
    color: #ffc107;
}

.menu-container.open {
    transform: translateX(0);
}

.icon{
    margin-left: 350px;
}
</style>