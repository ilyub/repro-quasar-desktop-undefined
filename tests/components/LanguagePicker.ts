import { QBtn } from "quasar";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import * as testUtils from "@vue/test-utils";

import {
  injectChangeLanguageAction,
  injectLanguagePickerItems
} from "@/components/LanguagePicker";
import LanguagePicker from "@/components/LanguagePicker.vue";

installQuasarPlugin();

it("LanguagePicker", async () => {
  const callback = jest.fn();

  const wrapper = testUtils.mount(LanguagePicker, {
    global: {
      provide: {
        [injectChangeLanguageAction as symbol]: callback,
        [injectLanguagePickerItems as symbol]: [
          {
            caption: "English (USA)",
            flag: "us-flag",
            lang: "en-US"
          },
          {
            caption: "English (UK)",
            flag: "gb-flag",
            lang: "en-GB"
          },
          {
            caption: "Russian",
            flag: "ru-flag",
            lang: "ru-RU"
          }
        ]
      }
    },
    props: {
      language: "en-US"
    }
  });

  await wrapper.findComponent(QBtn).trigger("click");
});
