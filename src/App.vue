<script lang="ts">
import gb from "flag-icon-css/flags/1x1/gb.svg";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import { defineComponent, provide, ref } from "vue";
import { mdiAccount, mdiClose, mdiPen } from "@mdi/js";

import {
  injectChangeLanguageAction,
  injectLanguagePickerItems
} from "./components/LanguagePicker";
import LanguagePicker from "./components/LanguagePicker.vue";
import MenuItem from "./components/MenuItem.vue";
import NavButton from "./components/NavButton.vue";
import Tooltip from "./components/Tooltip.vue";

export default defineComponent({
  name: "app",
  components: {
    "x-language-picker": LanguagePicker,
    "x-menu-item": MenuItem,
    "x-nav-button": NavButton,
    "x-tooltip": Tooltip
  },
  setup() {
    const language = ref("en-US");

    provide(injectChangeLanguageAction, lang => {
      language.value = lang;
    });

    provide(injectLanguagePickerItems, [
      {
        caption: "English (USA)",
        flag: us,
        lang: "en-US"
      },
      {
        caption: "English (UK)",
        flag: gb,
        lang: "en-GB"
      },
      {
        caption: "Russian",
        flag: ru,
        lang: "ru-RU"
      }
    ]);

    return {
      language,
      mdiAccount,
      mdiClose,
      mdiPen,
      us
    };
  }
});
</script>

<template>
  <table>
    <tr>
      <td>Language picker</td>
      <td>
        <x-language-picker :language="language" />
      </td>
    </tr>
    <tr>
      <td>Menu item</td>
      <td>
        <q-btn flat :icon="mdiAccount" round>
          <q-menu>
            <q-list>
              <x-menu-item caption="Settings" :icon="mdiPen" />
              <x-menu-item caption="Language">
                <template #icon>
                  <img alt="Alt text" height="18" :src="us" width="18" />
                </template>
              </x-menu-item>
              <q-separator />
              <x-menu-item caption="Exit" />
            </q-list>
          </q-menu>
        </q-btn>
      </td>
    </tr>
    <tr>
      <td>Nav button</td>
      <td>
        <x-nav-button :icon="mdiClose" tooltip="Close window" />
        <x-nav-button>
          <img alt="Alt text" height="20" :src="us" width="20" />
        </x-nav-button>
      </td>
    </tr>
    <tr>
      <td>Tooltip</td>
      <td>
        <q-btn flat :icon="mdiClose" round>
          <x-tooltip>Close window</x-tooltip>
        </q-btn>
      </td>
    </tr>
  </table>
</template>
