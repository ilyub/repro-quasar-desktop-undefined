module.exports = {
  extends: [require.resolve("@skylib/config/src/eslintrc")],
  overrides: [
    {
      files: ["./src/App.vue", "./src/router/index.ts"],
      rules: {
        "import/no-extraneous-dependencies": [
          "warn",
          {
            bundledDependencies: false,
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: true
          }
        ],
        "vue/no-bare-strings-in-template": "off"
      }
    }
  ]
};
