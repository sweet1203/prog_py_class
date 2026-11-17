
/* 0 시작 · 파이썬 이야기 뒤집는 카드 */
flipCards('pyFlip',[
  {ic:'🧰',f:'다양한 용도',b:'웹 개발, 데이터 분석, 게임 개발, 인공지능 등 여러 분야에서 두루 쓰이는 범용 프로그래밍 언어예요.'},
  {ic:'📚',f:'풍부한 라이브러리',b:'자주 쓰는 기능을 모아 둔 표준 라이브러리가 많아, 개발 과정이 단순해지고 생산성이 높아져요.'},
  {ic:'🧩',f:'재사용·확장',b:'코드를 쉽게 재사용하고 확장하도록 디자인되어, 라이브러리와 프레임워크 개발에도 잘 맞아요.'},
  {ic:'💻',f:'크로스 플랫폼',b:'다양한 운영체제에서 안정적으로 동작하고, 여러 환경에서 쓸 수 있는 확장 가능성이 높아요.'},
]);

/* 01 용어 카드 뒤집기 */
flipCards('termFlip',[
  {ic:'📦',f:'프로그램',b:'사람이 원하는 작업을 컴퓨터가 처리하도록, 처리할 순서와 방법을 지시하는 명령어들의 집합'},
  {ic:'⌨️',f:'프로그래밍',b:'프로그래밍 언어를 사용하여 프로그램을 실제로 구현하는 전반적인 작업'},
  {ic:'🧑‍💻',f:'프로그래머',b:'프로그램의 알고리즘을 설계하고 프로그램을 개발하는 전문가'},
  {ic:'🔤',f:'프로그래밍 언어',b:'프로그램을 작성하기 위해 사용하는 언어'},
  {ic:'🧱',f:'소프트웨어',b:'컴퓨터 시스템을 효율적으로 운영하기 위해 개발된 프로그램을 통틀어 이르는 말이에요. 시스템 소프트웨어와 응용 소프트웨어로 나뉘어요.'},
]);

/* 02 프로그램의 실행 과정 (보조기억 → 주기억 → CPU → 출력) */
(function(){
  const S=$('runSvg');
  const defs=el('defs',{},S);
  const m=el('marker',{id:'plah',markerWidth:9,markerHeight:9,refX:6,refY:3,orient:'auto'},defs);
  el('path',{d:'M0,0 L6,3 L0,6 Z',fill:'#f2a516'},m);
  function box(id,x,y,w,h,t,sub){
    const g=el('g',{class:'bx',id},S);
    el('rect',{x,y,width:w,height:h,rx:9,class:'box'},g);
    el('text',{x:x+w/2,y:sub?y+h/2-3:y+h/2+5,'text-anchor':'middle',class:'tt'},g,t);
    if(sub) el('text',{x:x+w/2,y:y+h/2+14,'text-anchor':'middle',class:'ts'},g,sub);
    return g;
  }
  function arw(id,d){ return el('path',{id,class:'arw',d,'marker-end':'url(#plah)'},S); }
  box('bIn',14,18,96,42,'입력 장치','2, 3');
  box('bOut',250,18,96,42,'출력 장치','5');
  box('bCpu',118,94,124,58,'중앙 처리 장치(CPU)','2 + 3 = 5');
  box('bRam',66,184,228,48,'주기억 장치(RAM)','프로그램 실행 · 임시 저장');
  box('bAux',66,252,228,40,'보조 기억 장치','프로그램 저장');
  arw('aLoad','M158,252 L158,234');
  arw('aSave','M202,234 L202,252');
  arw('aFetch','M180,184 L180,156');
  arw('aIn','M66,60 Q92,86 132,104');
  arw('aOut','M240,112 Q286,88 298,62');
  const STEP=[
    ['① 프로그램 저장','프로그램은 평소 <b>보조 기억 장치</b>(HDD, SSD 등)에 저장되어 있어요.',['bAux']],
    ['② 주기억 장치로','프로그램을 실행하면, 보조 기억 장치의 프로그램이 <b>주기억 장치(RAM)</b>로 불러와져요.',['bAux','bRam','aLoad']],
    ['③ CPU 연산','입력값 2와 3이 들어오고, 필요한 연산은 <b>중앙 처리 장치(CPU)</b>에서 수행돼요. 2 + 3 = 5!',['bRam','bCpu','bIn','aFetch','aIn']],
    ['④ 출력','결괏값 5는 주기억 장치를 거쳐 <b>출력 장치</b>로 전달되어 사용자가 확인해요.',['bCpu','bOut','aOut']],
    ['⑤ 저장(휘발성)','주기억 장치는 휘발성이라, 결과를 보존하려면 결괏값을 <b>다시 보조 기억 장치에 저장</b>해야 해요.',['bRam','bAux','aSave']],
  ];
  const ALL=['bIn','bOut','bCpu','bRam','bAux','aLoad','aSave','aFetch','aIn','aOut'];
  $('runBtns').innerHTML=STEP.map((s,i)=>`<button class="btn sm ghost" data-i="${i}">${s[0]}</button>`).join('');
  const bs=[...$('runBtns').querySelectorAll('button')];
  const show=k=>{
    ALL.forEach(id=>$(id).classList.remove('on'));
    STEP[k][2].forEach(id=>$(id).classList.add('on'));
    bs.forEach((b,j)=>b.classList.toggle('ghost',j!==k));
    $('runCap').innerHTML=STEP[k][1];
  };
  bs.forEach(b=>b.onclick=()=>show(+b.dataset.i)); show(0);
})();

/* 03 컴파일 vs 인터프리트 탭 */
tabs('transBtn','transView',[{ic:'📘',n:'컴파일'},{ic:'🎧',n:'인터프리트'}],(it,i)=>{
  if(i===0) return `<div class="pl-tw" style="--k:#2f6fd0"><p><b>소스 코드 전체</b>를 컴파일러(compiler)로 <b>한꺼번에</b> 기계어로 번역한 뒤 실행해요.</p><ul><li>오류가 나면 고친 뒤 소스 코드 전체를 다시 컴파일해야 해요.</li><li>한 번만 기계어로 바꿔 두면, 인터프리트 방식보다 <b>더 빠르게 실행</b>돼요.</li></ul><div class="pl-ex">📖 비유 · 영문 도서를 통째로 번역해 둔 <b>한국어 번역본</b></div><div class="pl-lang">대표 언어 · C, C++</div></div>`;
  return `<div class="pl-tw" style="--k:#1f9d74"><p>소스 코드를 실행할 때마다 인터프리터(interpreter)로 <b>한 번에 한 줄씩</b> 번역하며 실행해요.</p><ul><li>코드를 조금씩 추가하며 <b>빠르게 테스트</b>할 수 있어, 대화식으로 작성하기 좋아요.</li></ul><div class="pl-ex">🎧 비유 · 말하는 즉시 옮겨 주는 <b>실시간 통역</b></div><div class="pl-lang">대표 언어 · Python, JavaScript, PHP 등</div></div>`;
});

/* 03 절차지향 vs 객체지향 분류 게임 */
sorter('oopGame',{
  cats:[{n:'절차지향 언어',k:'#e0702b'},{n:'객체지향 언어',k:'#1f9d74'}],
  items:[
    {t:'C, Fortran, Basic 같은 언어',short:'C · Fortran · Basic',c:0,ic:'🔤',w:'절차지향 언어의 대표 예가 C, Fortran, Basic이에요.'},
    {t:'Java, C++, C#, Python 같은 언어',short:'Java · C++ · C# · Python',c:1,ic:'🧩',w:'객체지향 언어의 대표 예가 Java, C++, C#, Python이에요.'},
    {t:'문제 해결 과정을 순서에 따라 단계적으로 코드를 작성한다',short:'순서대로 단계적으로',c:0,ic:'➡️',w:'단계에 따라 순서대로 처리하는 방식이 절차지향이에요.'},
    {t:'데이터와, 데이터를 처리하는 함수를 따로 나누어 다룬다',short:'데이터·함수 따로',c:0,ic:'✂️',w:'데이터와 함수를 별도로 처리하는 것이 절차지향의 특징이에요.'},
    {t:'사물을 객체로 표현하고, 객체 사이의 상호작용으로 서술한다',short:'객체 간 상호작용',c:1,ic:'🔗',w:'사물을 객체로 보고 객체 간 상호작용으로 짜는 방식이 객체지향이에요.'},
    {t:'데이터와 기능을 하나의 객체로 묶어 객체를 중심으로 프로그래밍한다',short:'객체 중심',c:1,ic:'📦',w:'데이터와 기능을 객체로 묶어 객체 중심으로 짜면 객체지향이에요.'},
    {t:'자전거를 프레임부터 핸들·바퀴까지 순서대로 하나하나 만들어 완성한다',short:'순서대로 조립',c:0,ic:'🚲',w:'제작 과정을 순서대로 하나하나 수행하는 자전거 비유는 절차지향이에요.'},
    {t:'자전거를 핸들·안장·바퀴 같은 부품 단위로 나눠 조합해 완성한다',short:'부품 단위로 조합',c:1,ic:'🛠️',w:'부품(객체) 단위로 나눠 조합하는 자전거 비유는 객체지향이에요.'},
  ],
  end:'<b>정리</b> 순서대로 하나하나 처리하면 <b>절차지향</b>(C·Fortran·Basic), 사물을 객체로 나눠 조합하면 <b>객체지향</b>(Java·C++·C#·Python)이에요. 같은 자전거도 만드는 방식에 따라 나뉘어요.'
});

/* 04 분야 고르기 · 스스로 점검 */
chips('fieldPick','devFieldPick',['웹 프로그램','모바일 프로그램(앱)','게임','인공지능','기타'],false);
chips('selfCheck','selfCheckPick',['프로그래밍 언어의 종류를 분류할 수 있다','각 언어의 특징을 설명할 수 있다','분야에 맞는 언어를 선택할 수 있다'],true);

/* 05 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['devFieldPick','내가 고른 개발 분야'],['progName','만들고 싶은 프로그램 이름'],['progDesc','프로그램 설명'],['langChoose','조사해서 고른 프로그래밍 언어'],['langReason','그 언어를 고른 이유'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[5]=()=>memoSummary('msum',MEMOLIST);
