// Text overrides are portable: this file loads the saved copy on a static host too.
(async () => {
  const selectors = '.wordmark, nav a, main h1, main h2, main h3, main h4, main p, main li, main figcaption, main .button, main .text-link, main .email, main .contact-link, main summary, .credentials span, .tags span, .visual-top span, .visual-bottom span, .visual-bottom a, footer span, footer a';
  const counts = new Map();
  const elements = new Map();
  const originals = new Map();
  document.querySelectorAll(selectors).forEach(el => {
    // Skip nested selected elements so each piece of copy has one owner.
    if (el.parentElement.closest(selectors)) return;
    const region = el.closest('article[id], section[id], header, footer, .credentials, .skills');
    const prefix = (region?.id || region?.className || region?.tagName || 'page').toString().split(' ')[0].toLowerCase();
    const base = prefix + '-' + el.tagName.toLowerCase();
    const index = counts.get(base) || 0; counts.set(base,index+1);
    const key = base + '-' + index;
    el.dataset.copyKey = key;
    elements.set(key,el); originals.set(key,el.innerText);
  });
  const local = ['127.0.0.1','localhost'].includes(location.hostname);
  let saved = {};
  try {
    const response = await fetch('edits.json', {cache:'no-store'});
    if (response.ok) saved = await response.json();
  } catch (_) { /* Original copy remains available offline. */ }
  const hideEmpty = () => {
    // Assign every key before pruning so saved edits keep their original targets.
    // Empty fields are removed from both the page and the editing controls.
    for(const [key,el] of elements) {
      if(!el.textContent.trim()) {el.remove();elements.delete(key);}
    }
    for(const group of document.querySelectorAll('.skill-grid > div, .experience article, .tags')) {
      if(!group.textContent.trim())group.remove();
    }
  };
  const apply = copy => {
    for (const [key,text] of Object.entries(copy)) {
      if (elements.has(key) && typeof text === 'string') {
        const el=elements.get(key); el.textContent=text; el.classList.add('custom-copy');
      }
    }
    hideEmpty();
  };
  apply(saved);
  if (!local) return;
  const panel=document.createElement('aside'); panel.className='copy-editor'; panel.setAttribute('aria-label','Portfolio text editor');
  panel.innerHTML='<button type="button" class="edit-toggle">Edit text</button><div class="edit-tools" hidden><p>Click any outlined text to change it.</p><div><button type="button" class="edit-save">Save changes</button><button type="button" class="edit-cancel">Cancel</button></div></div><p class="edit-status" role="status" aria-live="polite"></p>';
  document.body.append(panel);
  const status=panel.querySelector('.edit-status');
  const toggle=panel.querySelector('.edit-toggle');
  let editing=false, before=new Map(), detailStates=[];
  const mode = on => {
    editing=on; document.body.classList.toggle('editing-copy',on);
    hideEmpty();
    if(on) {
      detailStates=[...document.querySelectorAll('details')].map(el=>[el,el.open]);
      for(const [el] of detailStates)el.open=true;
    } else for(const [el,open] of detailStates)el.open=open;
    panel.querySelector('.edit-tools').hidden=!on; toggle.hidden=on;
    for (const el of elements.values()) {
      if(on) {el.setAttribute('contenteditable','plaintext-only');el.setAttribute('spellcheck','true');}
      else {el.removeAttribute('contenteditable');el.removeAttribute('spellcheck');}
    }
  };
  toggle.addEventListener('click',()=>{
    if(location.port!=='4175') {location.href='http://127.0.0.1:4175/'+location.hash;return;}
    before=new Map([...elements].map(([key,el])=>[key,el.innerHTML]));
    status.textContent='';mode(true);
  });
  // Editing link text should not navigate away. Summary links remain editable too.
  document.addEventListener('click',e=>{
    if(editing && e.target.closest('[data-copy-key]'))e.preventDefault();
  },true);
  panel.querySelector('.edit-cancel').addEventListener('click',()=>{
    for(const [key,html] of before)elements.get(key).innerHTML=html;
    mode(false);status.textContent='Changes canceled.';
  });
  panel.querySelector('.edit-save').addEventListener('click',async()=>{
    const copy={...saved};
    for(const [key,el] of elements) {
      if(el.innerHTML===before.get(key))continue;
      const text=el.innerText;
      if(text!==originals.get(key))copy[key]=text;
      else delete copy[key];
    }
    const button=panel.querySelector('.edit-save');button.disabled=true;status.textContent='Saving…';
    try {
      const response=await fetch('/__editor/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(copy)});
      if(!response.ok)throw new Error('Save unavailable');
      saved=copy;mode(false);status.textContent='Saved to your website files.';
    } catch (_) {
      status.textContent='Could not save. Keep this page open and use the editing preview at http://127.0.0.1:4175.';
    } finally {button.disabled=false;}
  });
})();
