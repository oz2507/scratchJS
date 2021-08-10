<template>
  <v-container>
    <v-card-title>カード</v-card-title>
    <v-row>
      <v-col v-for="color in colors" :key="color.id">
        <v-card hover v-bind:style="{color: color}" width="200" class="ma-2">
          <v-card-title class="headline">{{ color }}</v-card-title>
          <v-card-subtitle>card subtitle</v-card-subtitle>
          <v-divider class="mx-3"></v-divider>
          <v-card-text>
            <div class="body-1 mb-1">card text. card text. card text. card text. card text. card text. card text.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      colors: ["red", "pink", "purple", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange", "brown"],
    }
  }
}
</script>