import type { InjectionKey } from "vue";
import { inject } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import type * as is from "@skylib/functions/es/guards";

export interface PropOptions<T> {
  readonly default?: T;
  readonly required?: true;
  readonly validator: is.Guard<T>;
}

export interface PropOptionsDefault<T> extends PropOptions<T> {
  readonly default: T;
}

export interface PropOptionsRequired<T> extends PropOptions<T> {
  readonly required: true;
}

/**
 * Injects required value.
 *
 * @param key - Key.
 * @returns Value.
 */
export function injectRequire<T>(key: string | InjectionKey<T>): T {
  const result = inject(key);

  assert.not.empty(result);

  return result;
}

/**
 * Creates Vue property.
 *
 * @param validator - Validator.
 * @returns Vue property.
 */
export function propOptions<T>(validator: is.Guard<T>): PropOptions<T> {
  return { validator };
}

/**
 * Creates Vue property.
 *
 * @param validator - Validator.
 * @param defVal - Default value.
 * @returns Vue property.
 */
export function propOptionsDefault<T>(
  validator: is.Guard<T>,
  defVal: T
): PropOptionsDefault<T> {
  return { default: defVal, validator };
}

propOptions.default = propOptionsDefault;

/**
 * Creates Vue property.
 *
 * @param validator - Validator.
 * @returns Vue property.
 */
export function propOptionsRequired<T>(
  validator: is.Guard<T>
): PropOptionsRequired<T> {
  return { required: true, validator };
}

propOptions.required = propOptionsRequired;
