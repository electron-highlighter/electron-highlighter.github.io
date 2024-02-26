const yaml = require("js-yaml");
const htmlmin = require("html-minifier");
const MarkdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const md = new MarkdownIt({
  html: true,
  linkify: true,
});

module.exports = function(eleventyConfig) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // parse content as markdown
  // for some reason multiline content isn't handled well by this parser,
  // so the easiest thing to do is split the content by newline and render
  // each line as a paragraph, then wrap it all in another md.render()
  eleventyConfig.addFilter('markdown', content => {
    return md.render(content.split('\n').map(p => md.render(p)).join(''))
  });

  // To support .yaml extension in _data
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/static/img");

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy("./src/favicon.png");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // add syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
