/**
 * @see - https://amzn.github.io/style-dictionary/#/config?id=platform
 */
function getStyleDictionaryConfig(brand) {
  return {
    source: [`tokens/brands/${brand}/*.json`, "tokens/globals/**/*.json"],
    platforms: {
      /**
       * Available platforms: https://amzn.github.io/style-dictionary/#/config?id=platform
       */
      web: {
        transformGroup: "web",
        buildPath: `build/web/${brand}/`,
        files: [
          {
            destination: "tokens.scss",
            format: "scss/variables",
          },
        ],
      },
    },
  };
}

/**
 * Define the brands you want to build.
 * These should match the names of your Figma modes.
 */
const brands = ["ncbd", "wealth"];

/**
 * Define the platforms you want to build.
 */
const platforms = ["web"];

/**
 * Build the tokens for each brand.
 * {@see - Example based on https://github.com/amzn/style-dictionary/tree/main/examples/advanced/multi-brand-multi-platform}
 */
brands.map(function (brand) {
  platforms.map(function (platform) {
    const StyleDictionary = StyleDictionaryPackage.extend(
      getStyleDictionaryConfig(brand)
    );

    StyleDictionary.buildPlatform(platform);
  });
});
