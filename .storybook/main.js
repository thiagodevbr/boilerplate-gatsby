module.exports = {
  "stories": [
    "../src/components/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async config => {
    // transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    )
    return config
  },
}
