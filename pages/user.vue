<template>
  <v-container>
    <v-layout>
      <v-flex class="text-center">
        <v-card class="mx-auto" max-width="434" tile>
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="164" tile>
                <v-img :src='user.results[0].picture.large'></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">{{user.results[0].name.title}} {{user.results[0].name.first}} {{user.results[0].name.last}}</v-list-item-title>
                  <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  async fetch({ store }) {
    if (store.getters["user/user"].length === 0) {
      await store.dispatch("user/fetch");
    }
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  }
};
</script>