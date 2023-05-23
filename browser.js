// ref: 'browser without AMD' snippet in [the doc](https://github.com/markdown-it/markdown-it#simple) 
// here use the side effect of 'import' rather than another script tag
import "https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/dist/markdown-it.min.js";

// source: https://github.com/XiaoPanPanKevinPan/markdown-it-katex
import { default as mdKatex } from "https://cdn.jsdelivr.net/gh/XiaoPanPanKevinPan/markdown-it-katex@2.1.0/index.js";

// source: https://github.com/nagaozen/markdown-it-toc-done-right
import { default as mdToc } from "https://cdn.jsdelivr.net/npm/markdown-it-toc-done-right@4.2.0/dist/markdownItTocDoneRight.mjs";

// source: https://github.com/valeriangalliat/markdown-it-anchor
import { default as mdAnchor } from "https://cdn.jsdelivr.net/npm/markdown-it-anchor@8.6.7/dist/markdownItAnchor.mjs";

import cleanHTML from "./html_sanitizer.js";

let markdown =
	window.markdownit({
		html: true
	})
	.use(mdKatex)
	.use(
		mdToc,
		{
			listType: "ul",
			containerClass: "mdToc"
		}
	)
	.use(
		mdAnchor,
		{
			permalink: true,
			permalinkBefore: true,
			permalinkSymbol: `<svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>`,
			permalinkClass: "anchor"
		}
	);


const
	input = document.getElementById('input'),
	outputContainer = document.getElementById('outputContainer'),
	output = document.getElementById('output'),
	button = document.getElementById('button');

const shadowRoot = outputContainer.attachShadow({ mode: "open" });
[...outputContainer.children].forEach(elem => {
	elem.remove();
	shadowRoot.appendChild(elem);
});

// In shadowRoot, make id anchors work again
shadowRoot.addEventListener("click", e => {
	let elem = e.target;
	while(elem.nodeName != "A"){
		elem = elem.parentElement;
		if(!elem) return;
	}
	if (!elem.attributes["href"].value.match(/^#.*$/)) return;
	shadowRoot.getElementById(elem.attributes["href"].value.substr(1)).scrollIntoView();

	e.preventDefault();
});

button.addEventListener('click', (e) => {
	var result = markdown.render(input.value);
	result = cleanHTML(result);
	output.innerHTML = result;
});
