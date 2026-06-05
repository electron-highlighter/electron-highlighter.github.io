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

  // Inject Prism-style line-number gutters into highlighted code blocks.
  // We only count newlines and append a sibling .line-numbers-rows element
  // (one empty <span> per line) so the token markup is never touched.
  eleventyConfig.addTransform("lineNumbers", function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    return content.replace(
      /<pre class="(language-[^"]*)"><code(\b[^>]*)>([\s\S]*?)<\/code><\/pre>/g,
      (match, preClass, codeAttrs, code) => {
        const lines = code.split("\n");
        if (lines.length > 1 && lines[lines.length - 1] === "") lines.pop();
        const rows = '<span aria-hidden="true" class="line-numbers-rows">' +
          "<span></span>".repeat(Math.max(lines.length, 1)) + "</span>";
        return `<pre class="${preClass} line-numbers"><code${codeAttrs}>${code}</code>${rows}</pre>`;
      }
    );
  });

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
