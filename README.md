# markdown-it-katex

Add Math & Chemistry to your Markdown.
[Try it](https://xiaopanpankevinpan.github.io/markdown-it-katex/) in your browser, now!

!!Experimental!! I haven't run the test (I'm sure I'll figure it out someday), so use it with caution.

---

[KaTeX](https://github.com/Khan/KaTeX) is a in-browser LaTeX renderer (faster than MathJax). 
This plugin makes it easy to support in your markdown.

Need convincing?
* Check out the comparative benchmark: [KaTeX vs MathJax](https://jsperf.com/katex-vs-mathjax/42)


## Usage

Use it in your javascript (Experimental, but looks fine till now)

```javascript
// # import markdown-it
// ref: 'browser without AMD' snippet in [the doc](https://github.com/markdown-it/markdown-it#simple) 
// here use the side effect of 'import' rather than another script tag
import 'https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/dist/markdown-it.min.js';
let md = window.markdownit();

// # import markdown-it-katex
// with the jsdelivr
import { default as mk } from 'https://cdn.jsdelivr.net/gh/XiaoPanPanKevinPan/markdown-it-katex@2.1.0/index.js';

md.use(mk);

let result = md.render(`# Math Rulez! 
$\sqrt{3x-1}+(1+x)^2$`);
```

Include the KaTeX stylesheet in your html:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.2/katex.min.css" />
```

If you're using the default markdown-it parser, I also recommend the [github stylesheet](https://github.com/sindresorhus/github-markdown-css):
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.css" />
```

`KaTeX` options can be supplied with the second argument to use. (Haven't been test)
```javascript
md.use(mk, {"throwOnError" : false, "errorColor" : " #cc0000"});
```

## Examples

### Inline
Surround your LaTeX with a single `$` on each side for inline rendering.
```
$\sqrt{3x-1}+(1+x)^2$
```

### Block
Use two (`$$`) for block rendering. This mode uses bigger symbols and centers
the result.

```
$$\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}$$
```

## Syntax

Math parsing in markdown is designed to agree with the conventions set by pandoc:

    Anything between two $ characters will be treated as TeX math. The opening $ must
    have a non-space character immediately to its right, while the closing $ must
    have a non-space character immediately to its left, and must not be followed
    immediately by a digit. Thus, $20,000 and $30,000 won’t parse as math. If for some
    reason you need to enclose text in literal $ characters, backslash-escape them and
    they won’t be treated as math delimiters.

## Math Syntax Support

KaTeX is based on TeX and LaTeX. Support for both is growing. Here's a list of
currently supported functions:

[Function Support in KaTeX](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)


## Credit

This is a fork of [Waylon Flinn]( https://github.com/waylonflinn/markdown-it-katex )'s [markdown-it-katex]( https://github.com/waylonflinn/markdown-it-katex ).
