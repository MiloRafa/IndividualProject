<template>
  <footer>
    <b-navbar type="dark" variant="dark">


      <b-navbar-brand href="#"> </b-navbar-brand>


        <b-navbar-nav>
          <b-nav-item href="#" disabled>Maryam Anwar</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>


        </b-navbar-nav>

    </b-navbar>

  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>

</style>
