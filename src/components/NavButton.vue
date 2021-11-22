<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  name: "x-nav-button",
  components: {
    "x-tooltip": Tooltip
  },
  props: {
    tooltip: propOptions(is.string)
  },
  setup(props) {
    return {
      hasTooltip: computed(() => is.not.empty(props.tooltip))
    };
  }
});
</script>

<template>
  <q-btn flat round>
    <slot></slot>
    <x-tooltip v-if="hasTooltip">{{ tooltip }}</x-tooltip>
  </q-btn>
</template>
