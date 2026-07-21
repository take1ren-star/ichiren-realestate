// wireframe-kit.jsx — low-fi wireframe primitives (React, no deps)
// Exports primitives to window.WF and colors to window.WFC.
(function () {
  const C = {
    ink:'#2b2b2b', line:'#3a3a3a', soft:'#9aa0a6',
    fill:'#e9eaec', fill2:'#dfe1e4', edge:'#c4c8cd',
    bar:'#c7cbd0', barLg:'#aeb3b9', barXl:'#9aa0a6', barSm:'#d3d6da',
    navy:'#123b7a', teal:'#19c4ab', tealInk:'#0c7a6a', pink:'#d24b86',
    paper:'#fbfbf9',
    hand:'"Kalam",cursive', label:'"Zen Kaku Gothic New",sans-serif',
  };
  const hatch =
    'linear-gradient(45deg,transparent calc(50% - 1px),'+C.soft+' calc(50% - 1px) calc(50% + 1px),transparent calc(50% + 1px)),'+
    'linear-gradient(-45deg,transparent calc(50% - 1px),'+C.soft+' calc(50% - 1px) calc(50% + 1px),transparent calc(50% + 1px))';

  const Row = ({children, gap=12, between, center, top, wrap, style}) =>
    <div style={{display:'flex', gap, alignItems:center?'center':(top?'flex-start':'stretch'),
      justifyContent:between?'space-between':'flex-start', flexWrap:wrap?'wrap':'nowrap', ...style}}>{children}</div>;

  const Col = ({children, gap=10, center, style}) =>
    <div style={{display:'flex', flexDirection:'column', gap,
      alignItems:center?'center':'stretch', textAlign:center?'center':'left', ...style}}>{children}</div>;

  const Grid = ({children, cols=3, gap=12, style}) =>
    <div style={{display:'grid', gridTemplateColumns:`repeat(${cols},1fr)`, gap, ...style}}>{children}</div>;

  const T = ({w='100%', size='md', style}) => {
    const map={sm:{h:7,c:C.barSm},md:{h:9,c:C.bar},lg:{h:13,c:C.barLg},xl:{h:20,c:C.barXl}};
    const s=map[size]||map.md;
    return <div style={{width:w, height:s.h, borderRadius:s.h>12?6:5, background:s.c, flex:'none', ...style}} />;
  };
  const Lines = ({widths=['100%','80%'], size='md', gap=8, style}) =>
    <div style={{display:'flex',flexDirection:'column',gap, ...style}}>{widths.map((w,i)=><T key={i} w={w} size={size}/>)}</div>;

  const Img = ({h=120, label, style}) =>
    <div style={{position:'relative', height:h, background:C.fill, border:`1.5px solid ${C.edge}`,
      borderRadius:7, overflow:'hidden', backgroundImage:hatch, flex:'none', ...style}}>
      {label && <span style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',
        background:'rgba(255,255,255,.85)',fontFamily:C.hand,fontWeight:700,fontSize:11,color:'#6b7178',
        padding:'2px 9px',borderRadius:5,whiteSpace:'nowrap'}}>{label}</span>}
    </div>;

  const Box = ({h, w='100%', solid, r=7, style, children}) =>
    <div style={{width:w, height:h, background:solid?C.fill2:C.fill, border:`1.5px solid ${C.edge}`,
      borderRadius:r, ...style}}>{children}</div>;

  const Btn = ({children, variant='line', block, sm, style}) => {
    const base={display:'inline-flex',alignItems:'center',justifyContent:'center',gap:7,
      height:sm?30:38, padding:sm?'0 13px':'0 18px', borderRadius:999,
      fontFamily:C.hand, fontWeight:700, fontSize:sm?11:13, width:block?'100%':'auto', whiteSpace:'nowrap', flex:'none'};
    const v={
      line:{border:`1.8px solid ${C.navy}`,color:C.navy,background:'#fff'},
      fill:{border:`1.8px solid ${C.navy}`,color:'#fff',background:C.navy},
      teal:{border:`1.8px solid ${C.teal}`,color:C.tealInk,background:'#fff'},
      tealFill:{border:`1.8px solid ${C.teal}`,color:'#08382f',background:C.teal},
      pink:{border:`1.8px solid ${C.pink}`,color:'#fff',background:C.pink},
      ghost:{border:`1.8px solid #b9bdc3`,color:'#70757b',background:'#fff'},
    }[variant];
    return <span style={{...base,...v,...style}}>{children}</span>;
  };

  const Pill = ({children, style}) =>
    <span style={{display:'inline-flex',alignItems:'center',gap:7,height:26,padding:'0 13px',
      border:'1.5px solid #b9bdc3',borderRadius:999,background:'#fff',
      fontFamily:C.hand,fontWeight:700,fontSize:11,color:'#70757b',whiteSpace:'nowrap',flex:'none',...style}}>
      <span style={{width:12,height:12,borderRadius:'50%',border:'1.5px solid #b9bdc3',flex:'none'}} />{children}</span>;

  const Circle = ({size=44, style}) =>
    <div style={{width:size,height:size,borderRadius:'50%',background:C.fill,border:`1.5px solid ${C.edge}`,flex:'none',...style}} />;

  const Square = ({size=30, r=8, style}) =>
    <div style={{width:size,height:size,borderRadius:r,background:C.fill,border:`1.5px solid ${C.edge}`,flex:'none',...style}} />;

  const Num = ({children, size=26, style}) =>
    <span style={{width:size,height:size,flex:'none',display:'grid',placeItems:'center',borderRadius:'50%',
      border:`1.6px solid ${C.navy}`,color:C.navy,fontFamily:C.hand,fontWeight:700,fontSize:size>=24?13:11,...style}}>{children}</span>;

  const Label = ({children, style}) =>
    <span style={{fontFamily:C.hand,fontWeight:700,fontSize:12,color:'#8a9097',...style}}>{children}</span>;

  // Section wrapper with a corner annotation tab
  const Sec = ({tab, bg, pad=26, children, style}) =>
    <section style={{position:'relative', padding:pad, background:bg||'transparent',
      borderTop:'1.5px dashed #c7cbd0', ...style}}>
      {tab && <span style={{position:'absolute',left:0,top:0,fontFamily:C.hand,fontWeight:700,fontSize:12.5,
        background:C.navy,color:'#fff',padding:'3px 11px',borderRadius:'0 0 9px 0',letterSpacing:'.03em',zIndex:3}}>{tab}</span>}
      {children}
    </section>;

  // Kicker (eyebrow + heading row)
  const Kicker = ({n, w=170, center, style}) =>
    <Row gap={10} center style={{justifyContent:center?'center':'flex-start',...style}}>
      {n!=null && <Num size={24}>{n}</Num>}
      <Col gap={6}><T w={70} size="sm"/><T w={w} size="lg"/></Col>
    </Row>;

  // Browser chrome frame
  const Browser = ({url='https://ichiren-fudosan.jp', children}) =>
    <div style={{border:`2.5px solid ${C.line}`,borderRadius:12,background:C.paper,overflow:'hidden'}}>
      <div style={{height:36,background:'#f0f0ee',borderBottom:`2px solid ${C.line}`,display:'flex',alignItems:'center',gap:7,padding:'0 14px'}}>
        <span style={{width:11,height:11,borderRadius:'50%',border:`1.5px solid ${C.line}`,background:'#fff'}}/>
        <span style={{width:11,height:11,borderRadius:'50%',border:`1.5px solid ${C.line}`,background:'#fff'}}/>
        <span style={{width:11,height:11,borderRadius:'50%',border:`1.5px solid ${C.line}`,background:'#fff'}}/>
        <span style={{flex:1,marginLeft:10,height:18,border:'1.5px solid #cdd0d4',borderRadius:999,background:'#fff',
          display:'flex',alignItems:'center',padding:'0 12px',fontSize:10,color:C.soft,fontFamily:C.hand}}>{url}</span>
      </div>
      {children}
    </div>;

  // Shared header wireframe (used by every PC variation)
  const PCHeader = () =>
    <Sec tab="① ヘッダー（固定）" pad={'18px 26px'} style={{borderTop:'none'}}>
      <Row between center>
        <Row gap={10} center><Square size={32}/><Col gap={5}><T w={104} size="lg"/><T w={72} size="sm"/></Col></Row>
        <Row gap={16} center>
          <T w={54}/><T w={40}/><T w={80}/><T w={64}/><T w={64}/>
        </Row>
        <Row gap={8} center><Btn variant="tealFill" sm>無料相談</Btn><Btn variant="ghost" sm>LINE相談</Btn></Row>
      </Row>
    </Sec>;

  // Shared footer wireframe
  const PCFooter = ({n}) =>
    <Sec tab={`${n} フッター`} bg="#e7e9ec" pad={'22px 26px'}>
      <Row between top gap={24}>
        <Col gap={8} style={{flex:1.2}}>
          <Row gap={8} center><Square size={28}/><T w={120} size="lg"/></Row>
          <Lines widths={['90%','70%']}/>
        </Col>
        <Col gap={6} style={{flex:.8}}><T w="60%" size="sm"/><T w="50%" size="sm"/><T w="70%" size="sm"/><T w="40%" size="sm"/></Col>
        <Col gap={8} style={{flex:.9}}><T w="80%" size="lg"/><T w="60%" size="sm"/></Col>
      </Row>
      <T w="100%" size="sm" style={{marginTop:12,opacity:.6}}/>
    </Sec>;

  window.WFC = C;
  window.WF = { Row, Col, Grid, T, Lines, Img, Box, Btn, Pill, Circle, Square, Num, Label, Sec, Kicker, Browser, PCHeader, PCFooter };
})();
