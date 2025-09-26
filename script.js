function buildRoundedRectPath(w, h, r, withTLBR, conersABCD, dentSize) {
  if (r <= 0) return `M0 0 H ${w} V ${h} H 0 Z`;
  r = Math.min(r, w/2, h/2);
  const k = 0.5522847498 * r;

  const x0 = 0,     y0 = 0;
  const x1 = w - r, y1 = 0;
  const x2 = w,     y2 = r;
  const x3 = w,     y3 = h - r;
  const x4 = w - r, y4 = h;
  const x5 = r,     y5 = h;
  const x6 = 0,     y6 = h - r;
  const x7 = 0,     y7 = r;

  const xM = w/2;
  const yM = h/2;

  const dent = r * dentSize * 2.5;
  const dentDepth = r * dentSize;

  const d = [
    conersABCD[0] ? [
      `M ${r} ${y0}`
    ] : [ 
      `M ${r} ${y0}`
    ],

    // top
    withTLBR[0] ? [
      `L ${xM - dent/2 - r} ${y0}`,
      `C ${xM - dent/2 - r + k} ${y0} ${xM - dent/2} ${dentDepth*0.5 - k} ${xM - dent/2} ${dentDepth*0.5}`,
      `C ${xM - dent/2} ${dentDepth*0.5 + k} ${xM - dent/2 + r - k} ${dentDepth} ${xM - dent/2 + r} ${dentDepth}`,
      `L ${xM} ${dentDepth}`,

      conersABCD[1] ? [
        `L ${w - dentDepth + r} ${dentDepth}`,
        `C ${w - dentDepth + r} ${dentDepth} ${w} ${dentDepth} ${w} ${dentDepth + r}`,
      ] : [ 
        `L ${xM + dent/2 - r} ${dentDepth}`,
        `C ${xM + dent/2 - r + k} ${dentDepth} ${xM + dent/2} ${dentDepth*0.5 + k} ${xM + dent/2} ${dentDepth*0.5}`,
        `C ${xM + dent/2} ${dentDepth*0.5 - k} ${xM + dent/2 + r - k} ${y0} ${xM + dent/2 + r} ${y0}`,

        `L ${x1} ${y1}`,
        `C ${x1 + k} ${y1} ${x2} ${y2 - k} ${x2} ${y2}`,
      ],
    ] : [
      conersABCD[1] ? [
        `L ${w - dentDepth - r} ${y1}`,
        `C ${w - dentDepth} ${y1} ${w - dentDepth} ${r} ${w - dentDepth} ${dentDepth - r}`,
        `C ${w - dentDepth} ${dentDepth - r + k} ${w - dentDepth + r - k} ${dentDepth} ${w - dentDepth + r} ${dentDepth}`,
        `C ${w - dentDepth + r} ${dentDepth} ${w} ${dentDepth} ${w} ${dentDepth + r}`,
      ] : [ 
        `L ${x1} ${y1}`,
        `C ${x1 + k} ${y1} ${x2} ${y2 - k} ${x2} ${y2}`,
      ],
    ],

    // right
    withTLBR[1] ? [
      `L ${x2} ${yM - dent/2 - r}`,
      `C ${x2} ${yM - dent/2 - r + k} ${w - dentDepth*0.5 + k} ${yM - dent/2} ${w - dentDepth*0.5} ${yM - dent/2}`,
      `C ${w - dentDepth*0.5 - k} ${yM - dent/2} ${w - dentDepth} ${yM - dent/2 + r - k} ${w - dentDepth} ${yM - dent/2 + r}`,
      `L ${w - dentDepth} ${yM}`,
      
      conersABCD[2] ? [
        `L ${w - dentDepth} ${h - dentDepth + r}`,
        `C ${w - dentDepth} ${h - dentDepth + r} ${w - dentDepth} ${h} ${w - dentDepth - r} ${h}`,
      ] : [ 
        `L ${w - dentDepth} ${yM + dent/2 - r}`,
        `C ${w - dentDepth} ${yM + dent/2 - r + k} ${w - dentDepth*0.5 - k} ${yM + dent/2} ${w - dentDepth*0.5} ${yM + dent/2}`,
        `C ${w - dentDepth*0.5 + k} ${yM + dent/2} ${x2} ${yM + dent/2 + r - k} ${x2} ${yM + dent/2 + r}`,
        
        `L ${x3} ${y3}`,
        `C ${x3} ${y3 + k} ${x4 + k} ${y4} ${x4} ${y4}`,
      ],
    ] : [
      conersABCD[2] ? [
        `L ${w} ${h - dentDepth - r}`,
        `C ${w} ${h - dentDepth } ${w - r} ${h - dentDepth} ${w - r} ${h - dentDepth}`,
        `C ${w - dentDepth} ${h - dentDepth} ${w - dentDepth} ${h - r} ${w - dentDepth} ${h - r}`,
        `C ${w - dentDepth} ${h} ${w - dentDepth - r} ${h} ${w - dentDepth - r} ${h}`,
      ] : [ 
        `L ${x3} ${y3}`,
        `C ${x3} ${y3 + k} ${x4 + k} ${y4} ${x4} ${y4}`,
      ],
    ],

    // bottom
    withTLBR[2] ? [
      `L ${xM + dent/2 + r} ${y4}`,
      `C ${xM + dent/2 + r - k} ${y4} ${xM + dent/2} ${h - dentDepth*0.5 + k} ${xM + dent/2} ${h - dentDepth*0.5}`,
      `C ${xM + dent/2} ${h - dentDepth*0.5 - k} ${xM + dent/2 - r + k} ${h - dentDepth} ${xM + dent/2 - r} ${h - dentDepth}`,
      `L ${xM} ${h - dentDepth}`,
      conersABCD[3] ? [
        `L ${dentDepth - r} ${h - dentDepth}`,
        `L ${dentDepth - r} ${h - dentDepth}`,
        `C ${x0} ${h - dentDepth} ${x0} ${h - dentDepth - r} ${x0} ${h - dentDepth - r}`,
      ] : [ 
        `L ${xM - dent/2 + r} ${h - dentDepth}`,
        `C ${xM - dent/2 + r - k} ${h - dentDepth} ${xM - dent/2} ${h - dentDepth*0.5 - k} ${xM - dent/2} ${h - dentDepth*0.5}`,
        `C ${xM - dent/2} ${h - dentDepth*0.5 + k} ${xM - dent/2 - r + k} ${y4} ${xM - dent/2 - r} ${y4}`,
        
        `L ${x5} ${y5}`,
        `C ${x5 - k} ${y5} ${x6} ${y6 + k} ${x6} ${y6}`,
      ],
    ] : [
      conersABCD[3] ? [
        `L ${dentDepth + r} ${h}`,
        `C ${dentDepth} ${h} ${dentDepth} ${h - r} ${dentDepth} ${h - r}`,
        `C ${dentDepth} ${h - dentDepth} ${dentDepth - r} ${h - dentDepth} ${dentDepth - r} ${h - dentDepth}`,
        `C ${x0} ${h - dentDepth} ${x0} ${h - dentDepth - r} ${x0} ${h - dentDepth - r}`,
      ] : [ 
        `L ${x5} ${y5}`,
        `C ${x5 - k} ${y5} ${x6} ${y6 + k} ${x6} ${y6}`,
      ],
    ],

    // left
    withTLBR[3] ? [
      `L ${x0} ${yM + dent/2 + r}`,
      `C ${x0} ${yM + dent/2 + r - k} ${dentDepth*0.5 - k} ${yM + dent/2} ${dentDepth*0.5} ${yM + dent/2}`,
      `C ${dentDepth*0.5 + k} ${yM + dent/2} ${dentDepth} ${yM + dent/2 - r + k} ${dentDepth} ${yM + dent/2 - r}`,
      `L ${dentDepth} ${yM}`,
      `L ${dentDepth} ${yM - dent/2 + r}`,
      `C ${dentDepth} ${yM - dent/2 + r - k} ${dentDepth*0.5 + k} ${yM - dent/2} ${dentDepth*0.5} ${yM - dent/2}`,
      `C ${dentDepth*0.5 - k} ${yM - dent/2} ${x0} ${yM - dent/2 - r + k} ${x0} ${yM - dent/2 - r}`
    ] : [],

    `L ${x7} ${y7}`,
    `C ${x7} ${y7 - k} ${r - k} ${y0} ${r} ${y0}`,
    `Z`
  ].flat().join(' ');

  return d;
}

function applyRoundedClip(el, radius, withTLBR = [false, false, false, false],conersABCD = [false, false, false, false], dentSize = 2){
  const rect = el.getBoundingClientRect();
  const w = Math.round(rect.width);
  const h = Math.round(rect.height);
  const r = typeof radius === 'number' ? radius : Math.min(40, Math.min(w,h)/6);

  const pathD = buildRoundedRectPath(w, h, r, withTLBR, conersABCD, dentSize);

  try{
    el.style.clipPath = `path('${pathD}')`;
    el.style.webkitClipPath = `path('${pathD}')`;
  }catch(e){
    console.warn('Falha ao aplicar clip-path(path). O navegador pode não suportar — usando border-radius como fallback.', e);
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  const box = document.getElementById('roundedDiv');
  let target = 28;
  let withTLBR = [false, false, false, false]
  let conersABCD = [false, false, false, false]
  let dentSize = 2;
  applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);

  let resizeId = null;
  window.addEventListener('resize', ()=>{
    if(resizeId) cancelAnimationFrame(resizeId);
    resizeId = requestAnimationFrame(()=>{
      applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
      resizeId = null;
    });
  });
  box.addEventListener('click', ()=>{
    target = target == 28 ? 60 : 28;
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  });

  document.getElementById('switchT').addEventListener('change', () => {
    withTLBR[0] = !withTLBR[0];
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  })
  document.getElementById('switchL').addEventListener('change', () => {
    withTLBR[1] = !withTLBR[1];
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  })
  document.getElementById('switchB').addEventListener('change', () => {
    withTLBR[2] = !withTLBR[2];
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  })
  document.getElementById('switchR').addEventListener('change', () => {
    withTLBR[3] = !withTLBR[3];
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  })

  document.getElementById('switchA').addEventListener('change', () => {
    conersABCD[0] = !conersABCD[0];
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  })
  document.getElementById('switchBB').addEventListener('change', () => {
    conersABCD[1] = !conersABCD[1];
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  })
  document.getElementById('switchC').addEventListener('change', () => {
    conersABCD[2] = !conersABCD[2];
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  })
  document.getElementById('switchD').addEventListener('change', () => {
    conersABCD[3] = !conersABCD[3];
    applyRoundedClip(box, target, withTLBR, conersABCD, dentSize);
  })
});



