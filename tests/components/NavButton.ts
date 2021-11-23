import { QTooltip } from "quasar";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import * as testUtils from "@vue/test-utils";

import NavButton from "@/components/NavButton.vue";

installQuasarPlugin();

it("prop: tooltip", () => {
  {
    const wrapper = testUtils.mount(NavButton, {
      props: {
        tooltip: "sample-tooltip"
      }
    });

    expect(wrapper.findComponent(QTooltip)).toExist();
  }

  {
    const wrapper = testUtils.mount(NavButton);

    expect(wrapper.findComponent(QTooltip)).not.toExist();
  }
});

it("slot: default", () => {
  const wrapper = testUtils.mount(NavButton, {
    slots: {
      default: '<div class="sample-class">sample-contents</div>"'
    }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-contents");
});
