import { readBlockConfig } from '../../scripts/scripts.js';

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */

 export default async function decorate(block) {
    
    // const cfg = readBlockConfig(block); Leaving for option of specifying language type
    
    let codeBlocks = block.querySelectorAll("code");
    let code = '';
    if (codeBlocks !== null) {
        codeBlocks.forEach((cb) => {
            code += cb.textContent;
        });
    }

    let jsBeautifyOpts = {
        "indent_size": "4",
        "indent_char": " ",
        "max_preserve_newlines": "5",
        "preserve_newlines": true,
        "keep_array_indentation": false,
        "break_chained_methods": false,
        "indent_scripts": "normal",
        "brace_style": "collapse",
        "space_before_conditional": true,
        "unescape_strings": false,
        "jslint_happy": false,
        "end_with_newline": false,
        "wrap_line_length": "0",
        "indent_inner_html": false,
        "comma_first": false,
        "e4x": false,
        "indent_empty_lines": false
      };

    // TODO: Beautify code
    

    let p = document.createElement("pre");
    p.textContent = js_beautify(code, jsBeautifyOpts);
    block.innerHTML = '';
    block.appendChild(p);
  }