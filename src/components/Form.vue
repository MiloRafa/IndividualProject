<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="firstName"
                    label="First Name:"
                    label-for="firstName">
        <b-form-input id="firstName"
                      type="text"
                      name="firstName"
                      v-model="form.firstName"
                      required
                      placeholder="Enter First Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="lastName"
                    label="Last Name:"
                    label-for="lastName">
        <b-form-input id="secondName"
                      type="text"
                      name="secondName"
                      v-model="form.secondName"
                      required
                      placeholder="Enter Second Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="accountNumber"
                    label="Account Number:"
                    label-for="accountNumber">
        <b-form-input id="accountNumber"
                      type="number"
                      name="accountNumber"
                      v-model="form.accountNumber"
                      required
                      placeholder="Enter Account Number">
        </b-form-input>
      </b-form-group>


      <b-button type="onSubmit" variant="warning">Submit</b-button>
      <b-button v-on:click="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        form: {
          firstName: '',
          secondName: '',
          accountNumber: null
        },
        show: true
      }
    },
    methods: {
      onSubmit: function ( evt) {
        evt.preventDefault();
        let postURL = 'http://localhost:8080/account/create-account';
        axios.post(postURL, {
          firstName: this.form.firstName,
          surname: this.form.secondName,
          accountNumber: this.form.accountNumber
        });
        alert(this.form)
      },
      reset: function () {
        this.form.firstName = '';
        this.form.secondName = '';
        this.form.accountNumber = null;
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        });
      }
    }
  }
</script>

<!-- b-form-1.vue -->

<style scoped>

</style>
