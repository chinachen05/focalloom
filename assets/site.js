(() => {
  const search = document.getElementById('guide-search');
  if (search) {
    const cards = [...document.querySelectorAll('[data-article]')];
    const sections = [...document.querySelectorAll('[data-guide-section]')];
    search.addEventListener('input', () => {
      const q = search.value.trim().toLowerCase();
      let count = 0;
      cards.forEach(card => { const match = !q || card.dataset.search.includes(q); card.hidden = !match; if (match) count++; });
      sections.forEach(section => { const visible=[...section.querySelectorAll('[data-article]')].filter(card=>!card.hidden).length; section.hidden=visible===0; section.querySelector('.guide-title .label').textContent=`${String(visible).padStart(2,'0')} NOTE${visible===1?'':'S'}`; });
      document.getElementById('guide-count').textContent = `SHOWING ${count} GUIDE${count===1?'':'S'}`;
      document.getElementById('guide-empty').hidden = count !== 0;
    });
  }
  const exposureForm = document.getElementById('exposure-form');
  if (exposureForm) exposureForm.addEventListener('submit', e => {
    e.preventDefault();
    const get = id => Number(document.getElementById(id).value);
    const beforeN=get('start-aperture'), beforeT=get('start-shutter'), beforeISO=get('start-iso');
    const afterN=get('target-aperture'), afterISO=get('target-iso');
    const time=beforeT*(afterN/beforeN)**2*(beforeISO/afterISO);
    if (!Number.isFinite(time) || time <= 0) return;
    const fmt = time < 1 ? `about 1/${Math.max(1,Math.round(1/time))} s` : `about ${Number(time.toPrecision(3))} s`;
    const seconds = time < 0.001 ? time.toFixed(6) : time < 0.1 ? time.toFixed(5) : time.toFixed(3);
    const result=document.getElementById('exposure-result');
    result.innerHTML=`<h3>Estimated shutter time</h3><p class="big">${fmt}</p><p>Calculated time: ${Number(seconds)} seconds. Choose the nearest available shutter setting on your camera and check the image.</p><p>The scene and light must remain the same; aperture and ISO changes can affect depth of field and noise.</p>`;
    result.hidden=false;
  });
  const cropForm=document.getElementById('crop-form');
  if(cropForm){
    const ratio=document.getElementById('ratio');
    ratio.addEventListener('change',()=>{ const custom=ratio.value==='custom'; document.getElementById('custom-ratio').hidden=!custom; document.getElementById('ratio-w').disabled=!custom; document.getElementById('ratio-h').disabled=!custom; });
    cropForm.addEventListener('submit',e=>{
      e.preventDefault();if(!cropForm.reportValidity())return;
      const w=Number(document.getElementById('width').value), h=Number(document.getElementById('height').value);
      let rw,rh;
      if(ratio.value==='custom'){rw=Number(document.getElementById('ratio-w').value);rh=Number(document.getElementById('ratio-h').value)}else{[rw,rh]=ratio.value.split(':').map(Number)}
      const out=document.getElementById('crop-result');
      if(![w,h,rw,rh].every(Number.isFinite)||[w,h,rw,rh].some(v=>v<=0)){out.textContent='Enter positive whole-number dimensions and ratio values.';out.hidden=false;return}
      let cw,ch;if(w*rh>h*rw){ch=h;cw=Math.floor(h*rw/rh)}else{cw=w;ch=Math.floor(w*rh/rw)}
      if(cw<1||ch<1){out.textContent='This image is too small for that ratio in whole pixels.';out.hidden=false;return}
      const kept=cw*ch/(w*h)*100, fmt=new Intl.NumberFormat('en-US');
      const x=Math.floor((w-cw)/2),y=Math.floor((h-ch)/2);
      out.innerHTML=`<h3>Maximum centered crop</h3><p class="big">${fmt.format(cw)} × ${fmt.format(ch)} px</p><p>${kept.toFixed(1)}% of the original pixel area retained. Approximately ${fmt.format(w-cw)} px removed across the width and ${fmt.format(h-ch)} px across the height.</p><p>For an integer-pixel centered starting position: left ${fmt.format(x)} px, top ${fmt.format(y)} px. When the removed amount is odd, opposite margins differ by one pixel.</p>`;
      out.hidden=false;
    });
  }
})();
