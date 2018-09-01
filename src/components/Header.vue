<template>
  <footer>
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Account Management</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="/" > Dashboard </b-nav-item>
          <b-nav-item-dropdown text="Account" right>
            <b-dropdown-item href="#/form">Add Account</b-dropdown-item>
            <b-dropdown-item href="#/sample">Get Account</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right >
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>


        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

  </footer>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
