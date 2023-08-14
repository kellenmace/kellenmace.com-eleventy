const pluginWebc = require("@11ty/eleventy-plugin-webc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("blog/images");
  eleventyConfig.addPlugin(pluginWebc, {
    components: "_includes/components/*.webc",
  });
  eleventyConfig.addPlugin(syntaxHighlight);
};
