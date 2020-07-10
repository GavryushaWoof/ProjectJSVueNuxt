<template>
  <v-card tile>
    <v-toolbar dense dark>
      <v-toolbar-title>Test Task</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/user" nuxt>Profile</v-tab>
          <v-tab to="/" nuxt>Logout</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>