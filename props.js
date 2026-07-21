/* 販売物件情報セクション — カルーセル操作 + 画像拡大（共通） */
(function(){
  function init(){
    document.querySelectorAll('.pp-section').forEach(function(sec){
      var grid=sec.querySelector('.pp-grid');
      if(grid){
        function step(){ var c=grid.querySelector('.pp-card'); return c? c.offsetWidth+22 : 320; }
        var p=sec.querySelector('.pp-prev'), n=sec.querySelector('.pp-next');
        if(p) p.addEventListener('click',function(){ grid.scrollBy({left:-step(),behavior:'smooth'}); });
        if(n) n.addEventListener('click',function(){ grid.scrollBy({left:step(),behavior:'smooth'}); });
      }
    });

    var lb=document.getElementById('ppLightbox');
    if(!lb){
      lb=document.createElement('div');
      lb.className='pp-lightbox';lb.id='ppLightbox';
      lb.innerHTML='<button class="pp-lb-close" aria-label="閉じる">×</button><img alt="物件写真拡大" />';
      document.body.appendChild(lb);
    }
    var lbImg=lb.querySelector('img');
    function open(src){ if(!src)return; lbImg.src=src; lb.classList.add('open'); }
    function close(){ lb.classList.remove('open'); }
    document.querySelectorAll('.pp-ph').forEach(function(ph){
      ph.addEventListener('click',function(){
        var s1=ph.querySelector('.pp-s1'), s2=ph.querySelector('.pp-s2'), s3=ph.querySelector('.pp-s3'), img=ph.querySelector('img');
        var src=img?img.src:'';
        if(s3 && parseFloat(getComputedStyle(s3).opacity)>0.5) src=s3.src;
        else if(s2 && parseFloat(getComputedStyle(s2).opacity)>0.5) src=s2.src;
        else if(s1) src=s1.src;
        open(src);
      });
    });
    lb.querySelector('.pp-lb-close').addEventListener('click',close);
    lb.addEventListener('click',function(e){ if(e.target===lb) close(); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
