module.exports = {
  globals: {
    "__DEV__": true,
    "vue-jest": { pug: { doctype: "html" } }
  },
  maxWorkers: 4,
  preset: "@skylib/config/src",
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testEnvironment: undefined,
  transform: {
    [/\.(?:css|jpg|less|png|sass|scss|styl|svg|ttf|woff|woff2)$/u.source]:
      "jest-transform-stub",
    [/\.(?:html|js|ts)$/u.source]: "ts-jest",
    [/\.vue$/u.source]: "vue-jest"
  }
};
