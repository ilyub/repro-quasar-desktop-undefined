<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";

export default defineComponent({
  name: "x-menu-item",
  props: {
    caption: propOptions.required(is.string),
    icon: propOptions(is.string)
  },
  setup(props, ctx) {
    return {
      hasIcon: computed(
        () => is.not.empty(props.icon) || is.not.empty(ctx.slots["icon"])
      )
    };
  }
});
</script>

<template>
  <q-item v-close-popup clickable>
    <q-item-section v-if="hasIcon" side>
      <slot name="icon">
        <q-icon :name="icon" size="20px" />
      </slot>
    </q-item-section>
    <q-item-section no-wrap>
      {{ caption }}
    </q-item-section>
  </q-item>
</template>
