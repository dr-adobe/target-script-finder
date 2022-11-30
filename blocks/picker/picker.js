import { readBlockConfig } from '../../scripts/scripts.js';

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */

 export default async function decorate(block) {
    
    const cfg = readBlockConfig(block);
    block.textContent = '';
    console.log(cfg.path);
  
    // fetch nav content
    const navPath = cfg.path || '/examples.json';
    const resp = await fetch(`${navPath}`);
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);

      let s = document.createElement('select');
      let entries = data.data;
      entries.forEach((entry) => {
        let o = document.createElement('option');
        o.setAttribute("value", entry.page);
        o.textContent = entry.objective;
        s.appendChild(o);
      })

      let b = document.createElement('button');
      b.addEventListener('click', (e) => { 
        console.log(s.value);
        window.location.href = s.value;
      });
      b.textContent = "View";

      // TODO: Set event logic

      block.appendChild(s);
      block.appendChild(b);
    }

  }