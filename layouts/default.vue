<template>
  <v-app>
    <Navbar />
    <v-container>
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
