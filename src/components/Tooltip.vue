<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ name: "x-tooltip" });
</script>

<template>
  <q-tooltip :delay="1000"><slot></slot></q-tooltip>
</template>
