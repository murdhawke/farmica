<template>
    <div id="navbar">
        <b-navbar toggleable="md" type="dark" sticky variant="success">
            <b-navbar-brand to="/" exact exact-active-class="active"><a href="#"><img src="../assets/img/logo1.png" alt="Farmica" id="logo"/>Farmica</a></b-navbar-brand>
            <b-navbar-nav align="end" > <!-- Hard-coded routes-->
                <b-nav-item to="/services" exact exact-active-class="active">Services</b-nav-item>
                <b-nav-item to="/orders" exact exact-active-class="active">Orders</b-nav-item>
                <b-nav-item to="/jobs" exact exact-active-class="active">Jobs</b-nav-item><!-- The exact class changes the active route and applies the active styling -->
                <b-button variant="primary" id="signup-btn" >
                    <b-nav-item to="/auth" exact exact-active-class="active">Join Now</b-nav-item> 
                </b-button> 
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
#signup-btn {
    width: 100px;
    margin-right: 50px;
    padding: 0;
}
#signup-btn li {
    text-align: center;
    margin: 0;
    padding: 0;
}
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