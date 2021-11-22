declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @skylib/no-mutable-signature, @skylib/prefer-readonly
  const component: DefineComponent<object, object, unknown>;
  // eslint-disable-next-line import/no-default-export
  export default component;
}
