import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import * as testUtils from "@vue/test-utils";

import MenuItem from "@/components/MenuItem.vue";

installQuasarPlugin();

it("no icon", () => {
  const wrapper = testUtils.mount(MenuItem, {
    props: {
      caption: "sample-caption"
    }
  });

  expect(wrapper.find(".q-icon")).not.toExist();
  expect(wrapper.find(".q-item__section--nowrap")).textToEqual(
    "sample-caption"
  );
});

it("prop: icon", () => {
  const wrapper = testUtils.mount(MenuItem, {
    props: {
      caption: "sample-caption",
      icon: "sample-icon"
    }
  });

  expect(wrapper.find(".q-icon")).textToEqual("sample-icon");
  expect(wrapper.find(".q-item__section--nowrap")).textToEqual(
    "sample-caption"
  );
});

it("slot: icon", () => {
  const wrapper = testUtils.mount(MenuItem, {
    props: {
      caption: "sample-caption"
    },
    slots: {
      icon: '<div class="sample-class">sample-icon</div>"'
    }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-icon");
  expect(wrapper.find(".q-icon")).not.toExist();
  expect(wrapper.find(".q-item__section--nowrap")).textToEqual(
    "sample-caption"
  );
});
