<template>
    <div id="navbar">
        <b-navbar toggleable="md" type="dark" sticky variant="success">
            <b-navbar-brand><a href="#"><img src="../assets/img/logo1.png" alt="Farmica" id="logo"/> Farmica</a></b-navbar-brand>
            <b-navbar-nav align="end" > <!-- Hard-coded routes-->
                <b-nav-item to="/services" exact exact-active-class="active">Services</b-nav-item>
                <b-nav-item to="/orders" exact exact-active-class="active">Orders</b-nav-item>
                <b-nav-item to="/jobs" exact exact-active-class="active">Jobs</b-nav-item>
                <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item> <!-- The exact class changes the active route and applies the active styling -->
            </b-navbar-nav>
        </b-navbar>
        <router-view/>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
 .navbar-nav {
     width: 100%; /* Overwrite the default width for the whole navbar-nav component so that you can center nav-items*/
 }
 .nav-item {
     padding-right: 5rem;
 }
#logo {
    height: 50px;
    

}
#logo-text {
    display: flex;
    align-items: inline;
}
a, a:hover {
    text-decoration: none;
    color: white;
}
</style>