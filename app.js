const root = document.querySelector('#projects');
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const gallery = images => `<div class="project-gallery">${(images || []).map(im => `<figure><a href="assets/${escapeHTML(im.file)}" class="image-open" aria-label="Enlarge: ${escapeHTML(im.alt)}"><img src="assets/${escapeHTML(im.file)}" alt="${escapeHTML(im.alt)}" loading="lazy" decoding="async"><span class="enlarge">Enlarge ↗</span></a><figcaption>${escapeHTML(im.caption)}</figcaption></figure>`).join('')}</div>`;
root.innerHTML = window.portfolio.projects.map((p, index) => `<article class="project ${index === 0 ? 'featured' : ''}" id="${escapeHTML(p.id)}"><div class="project-number">${escapeHTML(p.number)}</div><div class="project-content"><p class="eyebrow">${escapeHTML(p.category)}</p><h3>${escapeHTML(p.title)}</h3><p class="project-subtitle">${escapeHTML(p.subtitle)}</p><p class="project-date">${escapeHTML(p.date)}</p><p>${escapeHTML(p.description)}</p><div class="tags">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>${gallery(p.images)}<details><summary>Explore project <span aria-hidden="true">+</span></summary><div class="detail-body"><h4>My contributions</h4><ul>${p.bullets.map(b=>`<li>${escapeHTML(b)}</li>`).join('')}</ul><h4>Outcome</h4><p>${escapeHTML(p.outcome)}</p>${p.scope ? `<p class="project-scope">${escapeHTML(p.scope)}</p>` : ''}</div></details></div>${index===0 ? '<div class="project-aside"><span class="eyebrow">DESIGN TARGETS</span><strong>1,000<span>lbf thrust</span></strong><strong>5<span>second burn</span></strong><p>LOX / IPA<br>Pressure-fed propulsion</p><span class="status">Preliminary design</span></div>' : ''}</article>`).join('');
const dialog = document.createElement('dialog');
dialog.className='image-dialog'; dialog.setAttribute('aria-label','Project image');
dialog.innerHTML='<button class="dialog-close" type="button" aria-label="Close image">Close ×</button><img alt=""><p></p>';
document.body.append(dialog);
document.querySelectorAll('.image-open').forEach(a=>a.addEventListener('click',e=>{
 e.preventDefault(); const img=a.querySelector('img');
 dialog.querySelector('img').src=a.href; dialog.querySelector('img').alt=img.alt;
 dialog.querySelector('p').textContent=a.closest('figure').querySelector('figcaption').textContent;
 dialog.showModal();
}));
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
