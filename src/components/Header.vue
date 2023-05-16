<script>

</script>

<template>
    <div>
        <div class="header">
            <router-link class="logo" to="#">CompanyLogo</router-link>
            <div class="header-right">
                <router-link class="link" to="/">
                <p class="item-menu">
                    Home
                </p>
                </router-link>
                <router-link class="link" to="/about">
                    <p class="item-menu">
                        About Us
                    </p>
                </router-link>
                <router-link class="link" to="/contact">
                    <p class="item-menu">
                        Contact
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header{
  left: 0px;
  top: 0px;
}
</style>