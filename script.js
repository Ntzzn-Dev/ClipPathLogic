document.addEventListener('DOMContentLoaded', ()=>{
  const box = document.getElementById('roundedDiv');
  let target = 28;
  let withTRBL = [false, false, false, false]
  let conersABCD = [false, false, false, false]
  let dentSize = 2;
  applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);

  let resizeId = null;
  window.addEventListener('resize', ()=>{
    if(resizeId) cancelAnimationFrame(resizeId);
    resizeId = requestAnimationFrame(()=>{
      applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
      resizeId = null;
    });
  });
  box.addEventListener('click', ()=>{
    target = target == 28 ? 60 : 28;
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  });

  document.getElementById('switchT').addEventListener('change', () => {
    withTRBL[0] = !withTRBL[0];
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  })
  document.getElementById('switchR').addEventListener('change', () => {
    withTRBL[1] = !withTRBL[1];
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  })
  document.getElementById('switchB').addEventListener('change', () => {
    withTRBL[2] = !withTRBL[2];
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  })
  document.getElementById('switchL').addEventListener('change', () => {
    withTRBL[3] = !withTRBL[3];
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  })

  document.getElementById('switchA').addEventListener('change', () => {
    conersABCD[0] = !conersABCD[0];
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  })
  document.getElementById('switchBB').addEventListener('change', () => {
    conersABCD[1] = !conersABCD[1];
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  })
  document.getElementById('switchC').addEventListener('change', () => {
    conersABCD[2] = !conersABCD[2];
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  })
  document.getElementById('switchD').addEventListener('change', () => {
    conersABCD[3] = !conersABCD[3];
    applyRoundedClip(box, target, withTRBL, conersABCD, dentSize);
  })
});


