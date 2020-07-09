<template>
  <v-container class="mx-auto" style="width: 500px;">
    <v-form v-model="valid" @submit.prevent="onSubmit" id="check-login-form">
      <h1>Sign In</h1>
      <v-text-field :v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" :v-model="password" :counter="15" @click:append="show1 = !show1" :rules="passwordRules"></v-text-field>

      <v-btn class="mr-4" type="submit" :disabled="!valid" form="check-login-form">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      valid: false,
      show1: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          /^\S{5,15}$/.test(v) ||
          "Password must at least 5 characters and be less than 15 characters"
      ],
      methods: {
        onSubmit() {
          this.$router.push("/user");
        },
        addEmailToStore(e) {
          this.$store.commit("addEmailToStore", e.target.value);
        }
      },
      computed: {
        email() {
          return this.$store.state.email;
        }
      }
    };
  }
};
</script>

<style scoped>
.form {
  width: 500px;
  margin: 0 auto;
}
</style>