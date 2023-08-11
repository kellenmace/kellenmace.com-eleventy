const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_includes/components/*.webc",
  });
};
