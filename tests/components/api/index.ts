import * as is from "@skylib/functions/es/guards";

import { propOptions } from "@/components/api";

it("propOptions", () => {
  expect(propOptions(is.number)).toStrictEqual({
    validator: is.number
  });
});

it("propOptions.default", () => {
  expect(propOptions.default(is.number, 1)).toStrictEqual({
    default: 1,
    validator: is.number
  });
});

it("propOptions.required", () => {
  expect(propOptions.required(is.number)).toStrictEqual({
    required: true,
    validator: is.number
  });
});
