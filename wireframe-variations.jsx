// wireframe-variations.jsx — three LP structure proposals (React)
// Depends on window.WF / window.WFC (wireframe-kit.jsx). Exports window.WFV.
(function () {
  const { Row, Col, Grid, T, Lines, Img, Box, Btn, Pill, Circle, Square, Num, Label, Sec, Kicker, Browser, PCHeader, PCFooter } = window.WF;
  const C = window.WFC;

  const SecTitle = ({children}) =>
    <div style={{fontFamily:C.hand,fontWeight:700,fontSize:13,color:C.tealInk,letterSpacing:'.04em',marginBottom:6}}>{children}</div>;

  // small helper: centered section heading block
  const Head = ({n, kicker, w=220}) =>
    <Col gap={8} center style={{marginBottom:6}}>
      <Row gap={9} center><Num size={22}>{n}</Num><T w={70} size="sm"/></Row>
      <T w={w} size="xl"/>
      <T w={300} size="sm" style={{maxWidth:'70%'}}/>
    </Col>;

  // ============================================================
  // 案A — 信頼・実績先行型（現行ベース）
  // ============================================================
  const VariantA = () =>
    <Browser>
      <PCHeader/>
      {/* HERO split */}
      <Sec tab="② ファーストビュー" bg="linear-gradient(180deg,#f4f6fa,#fbfbf9)">
        <Row gap={26} center>
          <Col gap={0} style={{flex:1.05}}>
            <T w={90} size="sm"/>
            <Lines widths={['85%','60%']} size="xl" gap={10} style={{marginTop:12}}/>
            <Lines widths={['92%','72%']} style={{marginTop:12}}/>
            <Row gap={8} wrap style={{marginTop:14}}><Pill>地域密着20年</Pill><Pill>相続実績多数</Pill><Pill>ワンストップ</Pill></Row>
            <Row gap={10} style={{marginTop:16}}><Btn variant="tealFill">無料相談する →</Btn><Btn>LINEで相談</Btn></Row>
          </Col>
          <Img h={196} label="メインビジュアル（街並み）" style={{flex:.95}}/>
        </Row>
      </Sec>
      {/* SERVICE */}
      <Sec tab="③ サービス紹介（3カード）" bg="#f4f5f7">
        <Head n={1} w={180}/>
        <Grid cols={3} gap={14} style={{marginTop:14}}>
          {[0,1,2].map(i=>
            <Col key={i} gap={8} style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:12}}>
              <Img h={78} label="写真"/><T w="60%" size="lg" style={{marginTop:4}}/>
              <Lines widths={['100%','80%']}/><T w="40%" size="sm" style={{color:C.navy}}/>
            </Col>)}
        </Grid>
        <Label style={{display:'block',textAlign:'center',marginTop:10}}>不動産管理 ／ 売買・仲介 ／ 相続相談</Label>
      </Sec>
      {/* STRENGTH */}
      <Sec tab="④ 強み（4項目）">
        <Head n={2} w={200}/>
        <Grid cols={4} gap={12} style={{marginTop:14}}>
          {[0,1,2,3].map(i=>
            <Col key={i} gap={8} center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:12}}>
              <Circle size={42}/><T w="70%" size="lg"/><Lines widths={['100%','80%']}/>
            </Col>)}
        </Grid>
      </Sec>
      {/* VOICE */}
      <Sec tab="⑤ お客様の声" bg="#f4f5f7">
        <Head n={3} w={160}/>
        <Grid cols={3} gap={14} style={{marginTop:14}}>
          {[0,1,2].map(i=>
            <Col key={i} gap={8} style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:14}}>
              <Row gap={9} center><Circle size={34}/><Col gap={5}><T w={70} size="sm"/><T w={50} size="sm"/></Col></Row>
              <Lines widths={['100%','100%','70%']}/>
            </Col>)}
        </Grid>
      </Sec>
      {/* FAQ */}
      <Sec tab="⑥ よくあるご質問">
        <Kicker n={3} w={200}/>
        <Col gap={10} style={{marginTop:14}}>
          {['70%','60%','80%','50%'].map((w,i)=>
            <Row key={i} between center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:'12px 14px'}}>
              <T w={w}/><Label>＋</Label></Row>)}
        </Col>
      </Sec>
      {/* CTA */}
      <Sec tab="⑦ CTA ／ LINE訴求" bg="#eef1f6">
        <Grid cols={2} gap={16}>
          <Col gap={10} style={{border:'1.5px solid #b6c2d6',borderRadius:9,background:'#fff',padding:16}}>
            <T w="60%" size="lg"/><T w="90%"/><Btn variant="pink" block>無料相談する →</Btn><Btn variant="ghost" block>電話で相談する</Btn>
          </Col>
          <Col gap={10} style={{border:'1.5px solid #a7d8b6',borderRadius:9,background:'#fff',padding:16}}>
            <T w="60%" size="lg"/><T w="90%"/><Btn variant="tealFill" block>友だち追加する</Btn><Btn variant="ghost" block>QRコードを見る</Btn>
          </Col>
        </Grid>
      </Sec>
      <PCFooter n="⑧"/>
    </Browser>;

  // ============================================================
  // 案B — お悩み解決・ストーリー型
  // ============================================================
  const VariantB = () =>
    <Browser>
      <PCHeader/>
      {/* HERO centered */}
      <Sec tab="② ファーストビュー（中央・コピー主体）" bg="linear-gradient(180deg,#eef3fb,#fbfbf9)">
        <Col gap={0} center>
          <T w={110} size="sm"/>
          <Lines widths={['70%','54%']} size="xl" gap={10} style={{marginTop:12,alignItems:'center'}}/>
          <Lines widths={['80%','64%']} style={{marginTop:12,alignItems:'center'}}/>
          <Row gap={10} style={{marginTop:16}}><Btn variant="pink">無料相談する →</Btn><Btn variant="teal">LINEで相談</Btn></Row>
          <Img h={150} label="メインビジュアル（横長・全幅）" style={{marginTop:18,width:'100%'}}/>
        </Col>
      </Sec>
      {/* PROBLEMS */}
      <Sec tab="③ お悩み提起（こんなお困りごと）" bg="#f4f5f7">
        <Head n={1} w={240}/>
        <Grid cols={3} gap={14} style={{marginTop:14}}>
          {['「相続した土地をどうすれば？」','「空き家の管理が大変…」','「売るべきか活用すべきか」'].map((t,i)=>
            <Col key={i} gap={10} center style={{border:`1.5px dashed ${C.edge}`,borderRadius:9,background:'#fff',padding:16}}>
              <Circle size={40}/><Label style={{fontSize:11,color:'#70757b',lineHeight:1.5}}>{t}</Label><Lines widths={['100%','70%']}/>
            </Col>)}
        </Grid>
        <Box solid h={30} w={2} style={{margin:'14px auto 0',background:C.edge,border:'none'}}/>
        <Label style={{display:'block',textAlign:'center',marginTop:6}}>↓ その悩み、いちれん不動産が解決します</Label>
      </Sec>
      {/* FOR-YOU / solution */}
      <Sec tab="④ こんな方へ ／ 解決の約束">
        <Head n={2} w={200}/>
        <Grid cols={2} gap={14} style={{marginTop:14}}>
          {[0,1,2,3].map(i=>
            <Row key={i} gap={12} center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:'14px 16px'}}>
              <Circle size={30}/><Lines widths={['90%','60%']} style={{flex:1}}/>
            </Row>)}
        </Grid>
      </Sec>
      {/* SERVICE zigzag */}
      <Sec tab="⑤ サービス詳細（ジグザグ・交互）" bg="#f4f5f7">
        <Head n={3} w={180}/>
        <Col gap={14} style={{marginTop:14}}>
          <Row gap={16} center style={{background:'#fff',border:`1.5px solid ${C.edge}`,borderRadius:9,padding:14}}>
            <Img h={96} label="写真" style={{flex:.8}}/>
            <Col gap={8} style={{flex:1.2}}><T w={60} size="sm"/><T w="55%" size="lg"/><Lines widths={['100%','90%','70%']}/><Btn variant="line" sm>詳しく見る →</Btn></Col>
          </Row>
          <Row gap={16} center style={{background:'#fff',border:`1.5px solid ${C.edge}`,borderRadius:9,padding:14}}>
            <Col gap={8} style={{flex:1.2}}><T w={60} size="sm"/><T w="55%" size="lg"/><Lines widths={['100%','90%','70%']}/><Btn variant="line" sm>詳しく見る →</Btn></Col>
            <Img h={96} label="写真" style={{flex:.8}}/>
          </Row>
        </Col>
      </Sec>
      {/* STEPS */}
      <Sec tab="⑥ ご相談の流れ（3ステップ）">
        <Head n={4} w={170}/>
        <Grid cols={3} gap={14} style={{marginTop:18}}>
          {['お問い合わせ','無料ヒアリング','ご提案・サポート'].map((t,i)=>
            <Col key={i} gap={8} center style={{position:'relative',border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:'18px 12px'}}>
              <Num size={30} style={{position:'absolute',top:-15,left:'50%',transform:'translateX(-50%)',background:C.navy,color:'#fff'}}>{i+1}</Num>
              <T w="70%" size="lg" style={{marginTop:8}}/><Lines widths={['100%','80%']}/>
            </Col>)}
        </Grid>
      </Sec>
      {/* CTA single */}
      <Sec tab="⑦ CTA（大型・1カラム）" bg="#13315e">
        <Col gap={12} center style={{padding:'8px 0'}}>
          <T w="50%" size="xl" style={{background:'#46618c'}}/>
          <T w="70%" style={{background:'#3a5680'}}/>
          <Row gap={10} style={{marginTop:6}}><Btn variant="pink">無料相談する →</Btn><Btn variant="tealFill">LINE友だち追加</Btn></Row>
        </Col>
      </Sec>
      <PCFooter n="⑧"/>
    </Browser>;

  // ============================================================
  // 案C — 実績数値・事例主導型
  // ============================================================
  const VariantC = () =>
    <Browser>
      <PCHeader/>
      {/* HERO full-bleed image */}
      <Sec tab="② ファーストビュー（全面写真・オーバーレイ）" pad={0} style={{borderTop:'none'}}>
        <div style={{position:'relative'}}>
          <Img h={240} label="背景：全面写真" style={{borderRadius:0,border:'none'}}/>
          <Col gap={10} style={{position:'absolute',left:26,top:'50%',transform:'translateY(-50%)',width:'56%'}}>
            <T w={90} size="sm" style={{background:'#fff'}}/>
            <Lines widths={['90%','62%']} size="xl" gap={10} style={{}}/>
            <Lines widths={['80%']} style={{}}/>
            <Row gap={10} style={{marginTop:6}}><Btn variant="tealFill">無料相談する →</Btn><Btn variant="ghost" style={{background:'rgba(255,255,255,.85)'}}>資料請求</Btn></Row>
          </Col>
        </div>
      </Sec>
      {/* STATS band */}
      <Sec tab="③ 実績数値バンド" bg="#13315e">
        <Grid cols={4} gap={12}>
          {['取引実績','対応エリア','創業','相談満足度'].map((t,i)=>
            <Col key={i} gap={8} center>
              <T w="55%" size="xl" style={{background:'#5b7299'}}/>
              <Label style={{color:'#aebfda'}}>{t}</Label>
            </Col>)}
        </Grid>
      </Sec>
      {/* CASE STUDIES */}
      <Sec tab="④ 導入事例（大型カード）" bg="#f4f5f7">
        <Head n={1} w={170}/>
        <Col gap={14} style={{marginTop:14}}>
          {[0,1].map(i=>
            <Row key={i} gap={16} center style={{background:'#fff',border:`1.5px solid ${C.edge}`,borderRadius:9,padding:14}}>
              <Img h={110} label="事例写真" style={{flex:.9}}/>
              <Col gap={8} style={{flex:1.4}}>
                <Row gap={6}><Pill style={{height:22,fontSize:10}}>相続</Pill><Pill style={{height:22,fontSize:10}}>土地活用</Pill></Row>
                <T w="70%" size="lg"/><Lines widths={['100%','95%','80%']}/>
                <Row gap={8} center style={{marginTop:4}}><Circle size={28}/><T w={120} size="sm"/></Row>
              </Col>
            </Row>)}
        </Col>
      </Sec>
      {/* STRENGTH alternating */}
      <Sec tab="⑤ 強み（写真＋テキスト交互）">
        <Head n={2} w={200}/>
        <Col gap={14} style={{marginTop:14}}>
          <Row gap={16} center>
            <Img h={100} label="写真" style={{flex:1}}/>
            <Col gap={8} style={{flex:1}}><Num size={24}>01</Num><T w="60%" size="lg"/><Lines widths={['100%','90%','70%']}/></Col>
          </Row>
          <Row gap={16} center>
            <Col gap={8} style={{flex:1}}><Num size={24}>02</Num><T w="60%" size="lg"/><Lines widths={['100%','90%','70%']}/></Col>
            <Img h={100} label="写真" style={{flex:1}}/>
          </Row>
        </Col>
      </Sec>
      {/* FAQ */}
      <Sec tab="⑥ よくあるご質問" bg="#f4f5f7">
        <Kicker n={3} w={200}/>
        <Col gap={10} style={{marginTop:14}}>
          {['70%','60%','80%'].map((w,i)=>
            <Row key={i} between center style={{border:`1.5px solid ${C.edge}`,borderRadius:9,background:'#fff',padding:'12px 14px'}}>
              <T w={w}/><Label>＋</Label></Row>)}
        </Col>
      </Sec>
      {/* CTA */}
      <Sec tab="⑦ CTA ／ LINE訴求" bg="#eef1f6">
        <Grid cols={2} gap={16}>
          <Col gap={10} style={{border:'1.5px solid #b6c2d6',borderRadius:9,background:'#fff',padding:16}}>
            <T w="60%" size="lg"/><T w="90%"/><Btn variant="pink" block>無料相談する →</Btn><Btn variant="ghost" block>電話で相談する</Btn>
          </Col>
          <Col gap={10} style={{border:'1.5px solid #a7d8b6',borderRadius:9,background:'#fff',padding:16}}>
            <T w="60%" size="lg"/><T w="90%"/><Btn variant="tealFill" block>友だち追加する</Btn><Btn variant="ghost" block>QRコードを見る</Btn>
          </Col>
        </Grid>
      </Sec>
      <PCFooter n="⑧"/>
    </Browser>;

  window.WFV = { VariantA, VariantB, VariantC };
})();
