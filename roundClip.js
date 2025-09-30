function buildRoundedRectPath(w, h, r, withTRBL, conersABCD, dentSize) {
  if (r <= 0) return `M0 0 H ${w} V ${h} H 0 Z`;
  r = Math.min(r, w/2, h/2);
  const k = 0.5522847498 * r;

  const x0 = 0,           y0 = 0;
  const xFull = w,        yFull = h;
  const xFull_r = w - r,  yFull_r = h - r;
  const xM = w/2,         yM = h/2;

  const dent = r * dentSize * 2.5;
  const dentDepth = r * dentSize;

  const d = [
    conersABCD[0] ? [
      withTRBL[0] ? [
        `M ${dentDepth + r} ${dentDepth}`,
      ] : [
        `M ${dentDepth + r} ${y0}`,
      ]
    ] : [ 
      `M ${r} ${y0}`
    ],

    // top
    withTRBL[0] ? [
      // Top Left
      conersABCD[0] ? [
        `L ${xM - dent/2 - r} ${dentDepth}`,
        `L ${xM} ${dentDepth}`,
      ] : [
        `L ${xM - dent/2 - r} ${y0}`,
        `C ${xM - dent/2 - r + k} ${y0} ${xM - dent/2} ${dentDepth*0.5 - k} ${xM - dent/2} ${dentDepth*0.5}`,
        `C ${xM - dent/2} ${dentDepth*0.5 + k} ${xM - dent/2 + r - k} ${dentDepth} ${xM - dent/2 + r} ${dentDepth}`,
        `L ${xM} ${dentDepth}`,
      ],

      // Top Right
      conersABCD[1] ? [
        withTRBL[1] ? [
          `L ${xFull - dentDepth - r} ${dentDepth}`,
          `C ${xFull - dentDepth} ${dentDepth} ${xFull - dentDepth} ${dentDepth + r} ${xFull - dentDepth} ${dentDepth + r}`,
        ] :[
          `L ${xFull - dentDepth + r} ${dentDepth}`,
          `C ${xFull - dentDepth + r + k} ${dentDepth} ${xFull} ${dentDepth} ${xFull} ${dentDepth + r}`,
        ]
      ] : [ 
        `L ${xM + dent/2 - r} ${dentDepth}`,
        `C ${xM + dent/2 - r + k} ${dentDepth} ${xM + dent/2} ${dentDepth*0.5 + k} ${xM + dent/2} ${dentDepth*0.5}`,
        `C ${xM + dent/2} ${dentDepth*0.5 - k} ${xM + dent/2 + r - k} ${y0} ${xM + dent/2 + r} ${y0}`,

        `L ${xFull_r} ${y0}`,
        `C ${xFull_r + k} ${y0} ${xFull} ${r - k} ${xFull} ${r}`,
      ],
    ] : [
      conersABCD[1] ? [
        withTRBL[1] ? [
          `L ${xFull - dentDepth - r} ${y0}`,
          `C ${xFull - dentDepth} ${y0} ${xFull - dentDepth} ${r} ${xFull - dentDepth} ${dentDepth - r}`,
        ] :[
          `L ${xFull - dentDepth - r} ${y0}`,
          `C ${xFull - dentDepth} ${y0} ${xFull - dentDepth} ${r} ${xFull - dentDepth} ${dentDepth - r}`,
          `C ${xFull - dentDepth} ${dentDepth - r + k} ${xFull - dentDepth + r - k} ${dentDepth} ${xFull - dentDepth + r} ${dentDepth}`,
          `C ${xFull - dentDepth + r} ${dentDepth} ${xFull} ${dentDepth} ${xFull} ${dentDepth + r}`,
        ]
      ] : [ 
        `L ${xFull_r} ${y0}`,
        `C ${xFull_r + k} ${y0} ${xFull} ${r - k} ${xFull} ${r}`,
      ],
    ],

    // left
    withTRBL[1] ? [
      // Left Top
      conersABCD[1] ? [
        `L ${xFull - dentDepth} ${yM}`,
      ] : [ 
        `L ${xFull} ${yM - dent/2 - r}`,
        `C ${xFull} ${yM - dent/2 - r + k} ${xFull - dentDepth*0.5 + k} ${yM - dent/2} ${xFull - dentDepth*0.5} ${yM - dent/2}`,
        `C ${xFull - dentDepth*0.5 - k} ${yM - dent/2} ${xFull - dentDepth} ${yM - dent/2 + r - k} ${xFull - dentDepth} ${yM - dent/2 + r}`,
        `L ${xFull - dentDepth} ${yM}`,
      ],
      
      // Left Bottom
      conersABCD[2] ? [
        withTRBL[2] ? [
          `L ${xFull - dentDepth} ${yFull - dentDepth - r}`,
          `C ${xFull - dentDepth} ${yFull - dentDepth} ${xFull - dentDepth - r} ${yFull - dentDepth}  ${xFull - dentDepth - r} ${yFull - dentDepth} `,
        ]:[
          `L ${xFull - dentDepth} ${yFull - dentDepth + r}`,
          `C ${xFull - dentDepth} ${yFull - dentDepth + r + k} ${xFull - dentDepth} ${yFull} ${xFull - dentDepth - r} ${yFull}`,
        ]
      ] : [ 
        `L ${xFull - dentDepth} ${yM + dent/2 - r}`,
        `C ${xFull - dentDepth} ${yM + dent/2 - r + k} ${xFull - dentDepth*0.5 - k} ${yM + dent/2} ${xFull - dentDepth*0.5} ${yM + dent/2}`,
        `C ${xFull - dentDepth * 0.5 + k} ${yM + dent/2} ${xFull} ${yM + dent/2 + r - k} ${xFull} ${yM + dent/2 + r}`,
        
        `L ${xFull} ${yFull_r}`,
        `C ${xFull} ${yFull_r + k} ${xFull_r + k} ${yFull} ${xFull_r} ${yFull}`,
      ],
    ] : [
      conersABCD[2] ? [
        withTRBL[2] ? [
          `L ${xFull} ${yFull - dentDepth - r}`,
          `C ${xFull} ${yFull - dentDepth } ${xFull - r} ${yFull - dentDepth} ${xFull - r} ${yFull - dentDepth}`,
        ] :[
          `L ${xFull} ${yFull - dentDepth - r}`,
          `C ${xFull} ${yFull - dentDepth } ${xFull - r} ${yFull - dentDepth} ${xFull - r} ${yFull - dentDepth}`,
          `C ${xFull - dentDepth} ${yFull - dentDepth} ${xFull - dentDepth} ${yFull - r} ${xFull - dentDepth} ${yFull - r}`,
          `C ${xFull - dentDepth} ${yFull} ${xFull - dentDepth - r} ${yFull} ${xFull - dentDepth - r} ${yFull}`,
        ]
      ] : [ 
        `L ${xFull} ${yFull_r}`,
        `C ${xFull} ${yFull_r + k} ${xFull_r + k} ${yFull} ${xFull_r} ${yFull}`,
      ],
    ],

    // bottom
    withTRBL[2] ? [
      // Bottom Right
      conersABCD[2] ? [
        `L ${xM} ${yFull - dentDepth}`,
      ] : [ 
        `L ${xM + dent/2 + r} ${yFull}`,
        `C ${xM + dent/2 + r - k} ${yFull} ${xM + dent/2} ${yFull - dentDepth*0.5 + k} ${xM + dent/2} ${yFull - dentDepth*0.5}`,
        `C ${xM + dent/2} ${yFull - dentDepth*0.5 - k} ${xM + dent/2 - r + k} ${yFull - dentDepth} ${xM + dent/2 - r} ${yFull - dentDepth}`,
        `L ${xM} ${yFull - dentDepth}`,
      ],
      
      // Bottom Left
      conersABCD[3] ? [
        withTRBL[3] ? [
          `L ${dentDepth + r} ${yFull - dentDepth}`,
          `C ${dentDepth} ${yFull - dentDepth} ${dentDepth} ${yFull - dentDepth - r} ${dentDepth} ${yFull - dentDepth - r}`,
        ] :[
          `L ${dentDepth - r} ${yFull - dentDepth}`,
          `C ${x0} ${yFull - dentDepth} ${x0} ${yFull - dentDepth - r} ${x0} ${yFull - dentDepth - r}`,
        ]
      ] : [ 
        `L ${xM - dent/2 + r} ${yFull - dentDepth}`,
        `C ${xM - dent/2 + r - k} ${yFull - dentDepth} ${xM - dent/2} ${yFull - dentDepth*0.5 - k} ${xM - dent/2} ${yFull - dentDepth*0.5}`,
        `C ${xM - dent/2} ${yFull - dentDepth*0.5 + k} ${xM - dent/2 - r + k} ${yFull} ${xM - dent/2 - r} ${yFull}`,
        
        `L ${r} ${yFull}`,
        `C ${r - k} ${yFull} ${x0} ${yFull_r + k} ${x0} ${yFull_r}`,
      ],
    ] : [
      conersABCD[3] ? [
        withTRBL[3] ? [
          `L ${dentDepth + r} ${yFull}`,
          `C ${dentDepth} ${yFull} ${dentDepth} ${yFull - r} ${dentDepth} ${yFull - r}`,
        ] :[
          `L ${dentDepth + r} ${yFull}`,
          `C ${dentDepth} ${yFull} ${dentDepth} ${yFull - r} ${dentDepth} ${yFull - r}`,
          `C ${dentDepth} ${yFull - dentDepth} ${dentDepth - r} ${yFull - dentDepth} ${dentDepth - r} ${yFull - dentDepth}`,
          `C ${x0} ${yFull - dentDepth} ${x0} ${yFull - dentDepth - r} ${x0} ${yFull - dentDepth - r}`,
        ]
      ] : [ 
        `L ${r} ${yFull}`,
        `C ${r - k} ${yFull} ${x0} ${yFull_r + k} ${x0} ${yFull_r}`,
      ],
    ],

    // right
    withTRBL[3] ? [
      // Right Bottom
      conersABCD[3] ? [
        `L ${dentDepth} ${yM}`,
      ] : [ 
        `L ${x0} ${yM + dent/2 + r}`,
        `C ${x0} ${yM + dent/2 + r - k} ${dentDepth*0.5 - k} ${yM + dent/2} ${dentDepth*0.5} ${yM + dent/2}`,
        `C ${dentDepth*0.5 + k} ${yM + dent/2} ${dentDepth} ${yM + dent/2 - r + k} ${dentDepth} ${yM + dent/2 - r}`,
        `L ${dentDepth} ${yM}`,
      ],
      
      // Right Top
      conersABCD[0] ? [
        withTRBL[0] ? [
          `L ${dentDepth} ${dentDepth + r}`,
          `C ${dentDepth} ${dentDepth} ${dentDepth + r} ${dentDepth} ${dentDepth + r} ${dentDepth}`,
        ] :[
          `L ${dentDepth} ${dentDepth - r}`,
          `C ${dentDepth} ${r} ${dentDepth} ${y0} ${dentDepth + r} ${y0}`,
        ]
      ] : [ 
        `L ${dentDepth} ${yM - dent/2 + r}`,
        `C ${dentDepth} ${yM - dent/2 + r - k} ${dentDepth*0.5 + k} ${yM - dent/2} ${dentDepth*0.5} ${yM - dent/2}`,
        `C ${dentDepth*0.5 - k} ${yM - dent/2} ${x0} ${yM - dent/2 - r + k} ${x0} ${yM - dent/2 - r}`,

        `L ${x0} ${r}`,
        `C ${x0} ${r - k} ${r - k} ${y0} ${r} ${y0}`,
      ],
    ] : [
      conersABCD[0] ? [
        withTRBL[0] ? [
          `L ${x0} ${dentDepth + r}`,
          `C ${x0} ${dentDepth} ${x0 + r} ${dentDepth} ${x0 + r} ${dentDepth}`,
        ] :[
          `L ${x0} ${dentDepth + r}`,
          `C ${x0} ${dentDepth} ${x0 + r} ${dentDepth} ${x0 + r} ${dentDepth}`,
          `C ${dentDepth} ${dentDepth} ${dentDepth} ${r} ${dentDepth} ${r}`,
          `C ${dentDepth} ${y0} ${dentDepth + r} ${y0} ${dentDepth + r} ${y0}`,
        ]
      ] : [ 
        `L ${x0} ${r}`,
        `C ${x0} ${r - k} ${r - k} ${y0} ${r} ${y0}`,
      ],
    ],

    `Z`
  ].flat().join(' ');

  return d;
}

function applyRoundedClip(el, radius, withTRBL = [false, false, false, false],conersABCD = [false, false, false, false], dentSize = 2){
  const rect = el.getBoundingClientRect();
  const w = Math.round(rect.width);
  const h = Math.round(rect.height);
  const r = typeof radius === 'number' ? radius : Math.min(40, Math.min(w,h)/6);

  const pathD = buildRoundedRectPath(w, h, r, withTRBL, conersABCD, dentSize);

  try{
    el.style.clipPath = `path('${pathD}')`;
    el.style.webkitClipPath = `path('${pathD}')`;
  }catch(e){
    console.warn('Falha ao aplicar clip-path(path). O navegador pode não suportar — usando border-radius como fallback.', e);
  }
}
