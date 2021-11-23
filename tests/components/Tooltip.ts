import { QTooltip } from "quasar";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import * as testUtils from "@vue/test-utils";

import Tooltip from "@/components/Tooltip.vue";

installQuasarPlugin();

it("delay", () => {
  const wrapper = testUtils.mount(Tooltip);

  expect(wrapper.findComponent(QTooltip).vm.delay).toStrictEqual(1000);
});
