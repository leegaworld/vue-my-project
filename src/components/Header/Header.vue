<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item href="#">Home</b-nav-item>
                <b-navbar-nav>
                    <b-nav-item href="#">{{ email }}</b-nav-item>
                    <b-nav-item router-link to="/information/company">Company Information</b-nav-item>
                    <b-nav-item href="#">My Page</b-nav-item>
                    <b-nav-item href="#">Log Out</b-nav-item>

                    <!-- Navbar dropdowns -->
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">KO</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            email: 'leegaworld@gmail.com',
        }
    }
};
</script>
