<template>
  <div>
    <h2>Log In</h2>
    <form v-on:submit.prevent="onSubmit">
      <label>E-Mail</label>
      <input placeholder="Endter your E-Mail" v-model="form.email"><br>
      <label>Password</label>
      <input placeholder="Endter your Password" v-model="form.password"><br>
      <button type="submit">Login</button>
      <span> toekn: {{ this.token }}</span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: 'ljm21c@myriadip.com',
        password: '3923',
      },
      csrf: '',
      token: '',
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault(evt);

      const csrfToken2 = this.$csrfToken;

      const data = {
        username: this.form.email,
        password: this.form.password,
      };

        console.log('/n/n 222 ====> csrf: %s', this.csrf);

      const config = {
        headers: {
          'Accept': 'application/json',
          'X-CSRF-TOKEN': this.csrf,
        },
      };

      this.axios.post('/api/auth/loginCheck', data, config)
      .then((response) => {
        console.log('\n 22==> response: %s', JSON.stringify(response));
        console.log(' 22--> Cookies: %s', JSON.stringify(this.$cookies));
        console.log(' 22--> Session: %s', JSON.stringify(this.$session));

      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error.message);
        }
        console.log(error.config);
      });

    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.password = '';
      // Trick to reset/clear native browser form validation state
      this.$nextTick(() => {
      });
    },
  },
  mounted() {
    console.log(' --> Cookies: %s', JSON.stringify(this.$cookies));
    console.log(' --> Session: %s', JSON.stringify(this.$session));
    console.log('\n\n --> document: %s', JSON.stringify(document));
  },
  created: function () {

  },
};

</script>
