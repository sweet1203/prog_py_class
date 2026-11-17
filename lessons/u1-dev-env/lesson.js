
/* 01 개발 환경을 이루는 도구 뒤집는 카드 */
flipCards('devTerms',[
  {ic:'✍️',f:'에디터',b:'소스 코드를 작성할 때 사용하는 텍스트 편집기예요. 프로그래밍 언어의 문법이나 형식에 맞추어 시각적으로 표현해 줘요.'},
  {ic:'🔄',f:'번역 프로그램',b:'컴파일러·인터프리터처럼, 사람이 쓴 소스 코드를 컴퓨터가 실행할 수 있는 기계어로 바꿔 주는 프로그램이에요.'},
  {ic:'🐞',f:'디버거',b:'프로그램의 오류를 찾아내기 위해 이용하는 프로그램이에요. 프로그램을 추적해 오류를 검출하고 수정해요.'},
  {ic:'🔁',f:'디버깅',b:'프로그램에서 발생하는 오류를 추적하고 수정하는 과정이에요. 오류가 없을 때까지 반복해 프로그램을 완성해요.'},
  {ic:'🧩',f:'통합 개발 환경(IDE)',b:'에디터·컴파일러·인터프리터·디버거 등 개발에 필요한 개별 프로그램을 하나로 통합해 제공하는 소프트웨어 개발 프로그램이에요.'},
]);

/* 01 디버깅 과정 흐름 (에디터 → 소스 코드 → 번역 → 실행, 오류 시 디버거 → 수정 반복) */
(function(){
  const S=$('dbgSvg');
  const defs=el('defs',{},S);
  const m=el('marker',{id:'deah',markerWidth:9,markerHeight:9,refX:6,refY:3,orient:'auto'},defs);
  el('path',{d:'M0,0 L6,3 L0,6 Z',fill:'#f2a516'},m);
  function box(id,x,y,w,h,t,sub){
    const g=el('g',{class:'bx',id},S);
    el('rect',{x,y,width:w,height:h,rx:9,class:'box'},g);
    el('text',{x:x+w/2,y:sub?y+h/2-3:y+h/2+5,'text-anchor':'middle',class:'tt'},g,t);
    if(sub) el('text',{x:x+w/2,y:y+h/2+14,'text-anchor':'middle',class:'ts'},g,sub);
    return g;
  }
  function arw(id,d){ return el('path',{id,class:'arw',d,'marker-end':'url(#deah)'},S); }
  box('bEdit',14,16,104,46,'에디터');
  box('bSrc',132,16,104,46,'소스 코드');
  box('bTrans',132,112,104,58,'번역 프로그램','컴파일러/인터프리터');
  box('bExe',132,226,104,46,'실행 파일');
  box('bDbg',250,112,96,58,'디버거','오류 추적·출력');
  arw('aWrite','M118,39 L132,39');
  arw('aComp','M184,62 L184,112');
  arw('aRun','M184,170 L184,226');
  arw('aErr','M236,249 L298,249 L298,170');
  arw('aFix','M298,112 L298,39 L236,39');
  el('text',{x:316,y:92,'text-anchor':'middle',class:'tl'},S,'소스 코드');
  el('text',{x:316,y:104,'text-anchor':'middle',class:'tl'},S,'수정');
  const STEP=[
    ['① 코드 작성','<b>에디터</b>로 소스 코드를 작성해요.',['bEdit','bSrc','aWrite']],
    ['② 번역','<b>번역 프로그램</b>(컴파일러/인터프리터)이 소스 코드를 기계어로 바꿔 <b>실행 파일</b>을 만들어요.',['bSrc','bTrans','aComp']],
    ['③ 실행','만들어진 <b>실행 파일</b>을 실행해요.',['bTrans','bExe','aRun']],
    ['④ 오류 발견','실행 중 오류가 생기면 <b>디버거</b>가 오류를 추적하고 문법 오류를 출력해요.',['bExe','bDbg','aErr']],
    ['⑤ 원인 찾기·수정','디버거가 알려 준 곳을 보고 <b>소스 코드를 수정</b>해 다시 번역·실행해요. 오류가 없을 때까지 디버깅을 반복해 프로그램을 완성해요.',['bDbg','bSrc','bEdit','aFix']],
  ];
  const ALL=['bEdit','bSrc','bTrans','bExe','bDbg','aWrite','aComp','aRun','aErr','aFix'];
  $('dbgBtns').innerHTML=STEP.map((s,i)=>`<button class="btn sm ghost" data-i="${i}">${s[0]}</button>`).join('');
  const bs=[...$('dbgBtns').querySelectorAll('button')];
  const show=k=>{
    ALL.forEach(id=>$(id).classList.remove('on'));
    STEP[k][2].forEach(id=>$(id).classList.add('on'));
    bs.forEach((b,j)=>b.classList.toggle('ghost',j!==k));
    $('dbgCap').innerHTML=STEP[k][1];
  };
  bs.forEach(b=>b.onclick=()=>show(+b.dataset.i)); show(0);
})();

/* 02 로컬 vs 클라우드 IDE 탭 */
tabs('ideBtn','ideView',[{ic:'💻',n:'로컬 환경 IDE'},{ic:'☁️',n:'클라우드 환경 IDE'}],(it,i)=>{
  if(i===0) return `<div class="de-tw" style="--k:#2f6fd0"><p>개발자의 컴퓨터에 직접 통합 개발 환경 소프트웨어를 <b>설치하여</b> 사용해요.</p><ul><li><b>장점</b> · 여러 개발 도구를 하나의 인터페이스에서 제공해 사용하기 편리해요.</li><li><b>단점</b> · 용량이 크고 사용하지 않는 기능이 많아 프로그램 자체가 무거울 수 있어요.</li></ul><div class="de-lang">대표 예 · 파이참(PyCharm), 비주얼 스튜디오(Visual Studio), VSCode, Thonny</div></div>`;
  return `<div class="de-tw" style="--k:#1f9d74"><p>온라인 환경에서 <b>웹 브라우저</b>를 통해 개발해요. 별도의 설치 없이 사이트에 접속해 로그인하면 바로 쓸 수 있어요.</p><ul><li><b>장점</b> · 설치가 간편하고 인터넷만 있으면 어디서나 개발해요. 개발자 간 시스템 사양·환경 차이가 없고, 공유·협업이 쉬워요.</li></ul><div class="de-lang">대표 예 · 구글 코랩(Colab), 리플릿(Replit)</div></div>`;
});

/* 02 VSCode 설치 순서 맞히기 */
sorter('vsSort',{
  cats:[{n:'① 파이썬 설치',k:'#2f6fd0'},{n:'② VSCode 설치',k:'#9b4fc4'},{n:'③ 확장 설치',k:'#1f9d74'},{n:'④ 코드 실행',k:'#e0702b'}],
  items:[
    {t:'파이썬 공식 사이트에서 설치 파일을 받고 ‘Add python.exe to PATH’를 체크한다',short:'파이썬 설치 파일 받기',c:0,ic:'🐍',w:'Python 확장으로 개발하려면 파이썬 인터프리터를 운영체제에 먼저 설치해야 해요.'},
    {t:'운영체제에 파이썬 인터프리터를 미리 설치한다',short:'파이썬 인터프리터 설치',c:0,ic:'⚙️',w:'VSCode에는 파이썬이 내장돼 있지 않아, 파이썬 인터프리터를 먼저 설치해요.'},
    {t:'VSCode 공식 홈페이지에서 내 운영체제용 설치 프로그램을 다운로드한다',short:'VSCode 다운로드',c:1,ic:'⬇️',w:'공식 홈페이지에서 운영체제에 맞는 설치 프로그램을 받아요.'},
    {t:'다운로드한 파일을 실행하여 VSCode를 설치한다',short:'VSCode 설치',c:1,ic:'📦',w:'받은 설치 파일을 실행해 VSCode를 설치해요.'},
    {t:'확장 탭에서 ‘한국어’를 검색해 한국어 패키지를 설치한다',short:'한국어 패키지',c:2,ic:'🇰🇷',w:'한국어 패키지를 설치하면 메뉴 가독성이 높아져요.'},
    {t:'확장 탭에서 ‘python’을 검색해 Python 확장을 설치한다',short:'Python 확장',c:2,ic:'🧩',w:'VSCode에서 파이썬으로 개발하려면 마이크로소프트의 Python 확장을 설치해요.'},
    {t:'파일 > 새 파일에서 Python File을 골라 .py로 저장한다',short:'.py 파일 만들기',c:3,ic:'📄',w:'코드를 작성해 .py 확장자로 저장해요.'},
    {t:'‘실행 및 디버그’나 터미널로 코드를 실행해 결과를 확인한다',short:'코드 실행·확인',c:3,ic:'▶️',w:'작성한 코드를 실행하고 디버깅하며 결과를 확인해요.'},
  ],
  end:'<b>정리</b> ① 파이썬 인터프리터를 먼저 설치하고 → ② VSCode를 설치한 뒤 → ③ 한국어 패키지·Python 확장을 더하고 → ④ .py 파일을 만들어 실행해요. 확장으로 필요한 기능만 골라 담는 것이 VSCode의 장점이에요.'
});

/* 02 구글 코랩 기능 뒤집는 카드 */
flipCards('colabFeat',[
  {ic:'▶️',f:'셀 단위 실행',b:'코드를 셀 단위로 작성하고, 셀 왼쪽 실행(▶) 버튼이나 Ctrl+Enter로 실행해요. 결과가 셀 아래에 표시돼요.'},
  {ic:'📝',f:'마크다운',b:'코드와 함께 마크다운으로 설명·수식·이미지를 넣어 교육용 문서나 보고서를 효과적으로 만들 수 있어요.'},
  {ic:'🤝',f:'공유·협업',b:'오른쪽 위 ‘공유’ 버튼으로 다른 사용자를 초대하고, 권한을 부여하거나 댓글을 달며 함께 개발해요.'},
  {ic:'🗂️',f:'드라이브 마운트',b:'드라이브 마운트로 구글 드라이브의 파일을 불러오거나 저장해요. 파일 탐색기 버튼이나 코드 셀로 마운트할 수 있어요.'},
]);

/* 03 개발 상황·환경 고르기 · 스스로 점검 */
chips('devSituation','devSituationPick',['혼자 개발','모둠이 함께 개발','여러 기기에서 작업','고사양(딥러닝 등) 필요','가볍고 빠르게'],false);
chips('ideChoose','ideChoosePick',['로컬 IDE (VSCode 등)','클라우드 IDE (구글 코랩 등)'],false);
chips('selfCheck','selfCheckPick',['개발 환경의 구성 요소를 설명할 수 있다','통합 개발 환경이 왜 필요한지 설명할 수 있다','로컬·클라우드 IDE의 차이를 안다','내 프로젝트에 맞는 IDE를 고를 수 있다'],true);

/* 04 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['devSituationPick','내 개발 상황'],['ideChoosePick','내가 고른 개발 환경'],['ideReason','그 환경을 고른 이유'],['envNote','준비하며 막혔던 점·궁금한 점'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[4]=()=>memoSummary('msum',MEMOLIST);
