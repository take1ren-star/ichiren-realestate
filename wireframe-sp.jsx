// wireframe-sp.jsx — three LP proposals, smartphone layout (React)
// Depends on window.WF / window.WFC. Exports window.WFSP.
(function () {
  const { Row, Col, Grid, T, Lines, Img, Box, Btn, Pill, Circle, Square, Num, Label, Sec } = window.WF;
  const C = window.WFC;

  // phone shell: status notch + sticky bottom bar
  const Phone = ({children, bar}) =>
    <div style={{height:'100%',display:'flex',flexDirection:'column',background:C.paper}}>
      <div style={{flex:1,overflow:'hidden'}}>{children}</div>
      {bar && <div style={{display:'flex',gap:6,padding:8,background:'#f3f3f1',borderTop:`2px solid ${C.line}`}}>{bar}</div>}
    </div>;

  const SPHead = ({n, w=130}) =>
    <Row gap={8} center style={{marginBottom:10}}><Num size={22}>{n}</Num><T w={w} size="lg"/></Row>;

  const SPHeader = () =>
    <Sec tab="①" pad={'14px 16px'} style={{borderTop:'none'}}>
      <Row between center><Row gap={8} center><Square size={26}/><T w={74} size="lg"/></Row>
        <Col gap={3}><span style={{width:20,height:2.4,background:C.line,borderRadius:2}}/><span style={{width:20,height:2.4,background:C.line,borderRadius:2}}/><span style={{width:20,height:2.4,background:C.line,borderRadius:2}}/></Col>
      </Row>
    </Sec>;

  const SPFooter = () =>
    <Sec tab="⑦ フッター" bg="#e7e9ec" pad={'16px'}>
      <Col gap={8} center>
        <Row gap={8} center style={{justifyContent:'center'}}><Square size={24}/><T w={90} size="lg"/></Row>
        <T w="90%"/><T w="70%"/>
        <Row gap={8} wrap style={{justifyContent:'center',marginTop:4}}><T w={50} size="sm"/><T w={50} size="sm"/><T w={50} size="sm"/></Row>
      </Col>
    </Sec>;

  const bar = (
    <React.Fragment>
      <Btn variant="ghost" sm style={{flex:1}}>電話</Btn>
      <Btn variant="teal" sm style={{flex:1}}>LINE</Btn>
      <Btn variant="pink" sm style={{flex:1.6}}>無料相談する</Btn>
    </React.Fragment>);

  // ---------------- 案A ----------------
  const SPVariantA = () =>
    <Phone bar={bar}>
      <SPHeader/>
      <Sec tab="② FV" bg="linear-gradient(180deg,#f4f6fa,#fbfbf9)" pad={'14px 16px'}>
        <T w={70} size="sm"/>
        <Lines widths={['90%','60%']} size="xl" gap={8} style={{marginTop:10}}/>
        <Lines widths={['100%','80%']} style={{marginTop:10}}/>
        <Row gap={6} wrap style={{marginTop:10}}><Pill>地域密着</Pill><Pill>相続実績</Pill></Row>
        <Img h={120} label="メインビジュアル" style={{marginTop:12}}/>
        <Col gap={8} style={{marginTop:12}}><Btn variant="tealFill" block>無料相談する →</Btn><Btn block>LINEで相談する</Btn></Col>
      </Sec>
      <Sec tab="③ サービス" bg="#f4f5f7" pad={'14px 16px'}>
        <SPHead n={1} w={110}/>
        <Col gap={10}>{[0,1,2].map(i=>
          <Col key={i} gap={6} style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:10}}>
            <Img h={68} label="写真"/><T w="50%" size="lg"/><T w="90%"/></Col>)}</Col>
      </Sec>
      <Sec tab="④ 強み" pad={'14px 16px'}>
        <SPHead n={2} w={120}/>
        <Grid cols={2} gap={10}>{[0,1,2,3].map(i=>
          <Col key={i} gap={6} center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:10}}>
            <Circle size={34}/><T w="70%" size="lg"/><T w="90%"/></Col>)}</Grid>
      </Sec>
      <Sec tab="⑤ お客様の声" bg="#f4f5f7" pad={'14px 16px'}>
        <SPHead n={3} w={110}/>
        <Col gap={10}>{[0,1].map(i=>
          <Col key={i} gap={6} style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:12}}>
            <Row gap={8} center><Circle size={30}/><T w={70} size="sm"/></Row><Lines widths={['100%','80%']}/></Col>)}</Col>
      </Sec>
      <Sec tab="⑥ FAQ + CTA" bg="#eef1f6" pad={'14px 16px'}>
        <Col gap={8}>{['70%','55%'].map((w,i)=>
          <Row key={i} between center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:'10px 12px'}}><T w={w}/><Label>＋</Label></Row>)}</Col>
        <Col gap={8} style={{border:'1.5px solid #b6c2d6',borderRadius:9,background:'#fff',padding:12,marginTop:10}}>
          <T w="70%" size="lg"/><Btn variant="pink" block>無料相談する →</Btn><Btn variant="tealFill" block>友だち追加する</Btn></Col>
      </Sec>
      <SPFooter/>
    </Phone>;

  // ---------------- 案B ----------------
  const SPVariantB = () =>
    <Phone bar={bar}>
      <SPHeader/>
      <Sec tab="② FV（中央）" bg="linear-gradient(180deg,#eef3fb,#fbfbf9)" pad={'14px 16px'}>
        <Col gap={0} center>
          <T w={90} size="sm"/>
          <Lines widths={['90%','60%']} size="xl" gap={8} style={{marginTop:10,alignItems:'center'}}/>
          <Lines widths={['90%']} style={{marginTop:10,alignItems:'center'}}/>
          <Img h={110} label="メインビジュアル" style={{marginTop:12,width:'100%'}}/>
          <Col gap={8} style={{marginTop:12,width:'100%'}}><Btn variant="pink" block>無料相談する →</Btn><Btn variant="teal" block>LINEで相談</Btn></Col>
        </Col>
      </Sec>
      <Sec tab="③ お悩み提起" bg="#f4f5f7" pad={'14px 16px'}>
        <SPHead n={1} w={130}/>
        <Col gap={10}>{['「相続した土地をどうすれば？」','「空き家の管理が大変…」','「売る？活用する？」'].map((t,i)=>
          <Row key={i} gap={10} center style={{border:`1.5px dashed ${C.edge}`,borderRadius:9,background:'#fff',padding:12}}>
            <Circle size={32}/><Label style={{fontSize:11,lineHeight:1.5}}>{t}</Label></Row>)}</Col>
        <Label style={{display:'block',textAlign:'center',marginTop:8}}>↓ 解決します</Label>
      </Sec>
      <Sec tab="④ こんな方へ" pad={'14px 16px'}>
        <SPHead n={2} w={120}/>
        <Col gap={8}>{[0,1,2,3].map(i=>
          <Row key={i} gap={10} center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:'10px 12px'}}>
            <Circle size={26}/><T w="80%"/></Row>)}</Col>
      </Sec>
      <Sec tab="⑤ サービス詳細" bg="#f4f5f7" pad={'14px 16px'}>
        <SPHead n={3} w={110}/>
        <Col gap={10}>{[0,1].map(i=>
          <Col key={i} gap={6} style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:10}}>
            <Img h={70} label="写真"/><T w="55%" size="lg"/><Lines widths={['100%','80%']}/><Btn variant="line" sm>詳しく見る →</Btn></Col>)}</Col>
      </Sec>
      <Sec tab="⑥ 相談の流れ + CTA" bg="#eef1f6" pad={'14px 16px'}>
        <SPHead n={4} w={120}/>
        <Col gap={12} style={{marginTop:4}}>{['お問い合わせ','無料ヒアリング','ご提案'].map((t,i)=>
          <Row key={i} gap={10} center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:'10px 12px'}}>
            <Num size={26} style={{background:C.navy,color:'#fff'}}>{i+1}</Num><T w="60%" size="lg"/></Row>)}</Col>
        <Col gap={8} style={{border:'1.5px solid #b6c2d6',borderRadius:9,background:'#fff',padding:12,marginTop:12}}>
          <T w="70%" size="lg"/><Btn variant="pink" block>無料相談する →</Btn></Col>
      </Sec>
      <SPFooter/>
    </Phone>;

  // ---------------- 案C ----------------
  const SPVariantC = () =>
    <Phone bar={bar}>
      <SPHeader/>
      <Sec tab="② FV（全面写真）" pad={0} style={{borderTop:'none'}}>
        <div style={{position:'relative'}}>
          <Img h={180} label="背景：全面写真" style={{borderRadius:0,border:'none'}}/>
          <Col gap={8} style={{position:'absolute',left:14,right:14,top:'50%',transform:'translateY(-50%)'}}>
            <Lines widths={['90%','60%']} size="xl" gap={8}/>
            <Col gap={8} style={{marginTop:6}}><Btn variant="tealFill" block>無料相談する →</Btn></Col>
          </Col>
        </div>
      </Sec>
      <Sec tab="③ 実績数値バンド" bg="#13315e" pad={'16px'}>
        <Grid cols={2} gap={12}>{['取引実績','対応エリア','創業','満足度'].map((t,i)=>
          <Col key={i} gap={6} center><T w="55%" size="xl" style={{background:'#5b7299'}}/><Label style={{color:'#aebfda'}}>{t}</Label></Col>)}</Grid>
      </Sec>
      <Sec tab="④ 導入事例" bg="#f4f5f7" pad={'14px 16px'}>
        <SPHead n={1} w={110}/>
        <Col gap={10}>{[0,1].map(i=>
          <Col key={i} gap={6} style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:10}}>
            <Img h={84} label="事例写真"/><Row gap={6}><Pill style={{height:22,fontSize:10}}>相続</Pill><Pill style={{height:22,fontSize:10}}>活用</Pill></Row>
            <T w="70%" size="lg"/><Lines widths={['100%','80%']}/></Col>)}</Col>
      </Sec>
      <Sec tab="⑤ 強み（交互）" pad={'14px 16px'}>
        <SPHead n={2} w={120}/>
        <Col gap={12}>{[0,1].map(i=>
          <Col key={i} gap={6} style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:10}}>
            <Img h={76} label="写真"/><Num size={22}>{'0'+(i+1)}</Num><T w="60%" size="lg"/><Lines widths={['100%','80%']}/></Col>)}</Col>
      </Sec>
      <Sec tab="⑥ FAQ + CTA" bg="#eef1f6" pad={'14px 16px'}>
        <Col gap={8}>{['70%','55%'].map((w,i)=>
          <Row key={i} between center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:'10px 12px'}}><T w={w}/><Label>＋</Label></Row>)}</Col>
        <Col gap={8} style={{border:'1.5px solid #a7d8b6',borderRadius:9,background:'#fff',padding:12,marginTop:10}}>
          <T w="70%" size="lg"/><Btn variant="tealFill" block>友だち追加する</Btn><Btn variant="pink" block>無料相談する →</Btn></Col>
      </Sec>
      <SPFooter/>
    </Phone>;

  window.WFSP = { SPVariantA, SPVariantB, SPVariantC };
})();
