
/* 0 시작 · 앞 차시 복습 뒤집는 카드 */
flipCards('recallFlip',[
  {ic:'📄',f:'요구 분석 명세서',b:'사용자가 무엇을 원하는지(목적·범위·기능) 정리한 문서예요. 앞 차시에서 PDF→한글, 표→스프레드시트 자동화를 요구로 정리했어요.'},
  {ic:'🧩',f:'모듈화',b:'프로그램을 역할별 파일(모듈)로 나누는 것이에요. pdf_tool을 main·gui·process_handler·pdf_extractor·file_converter로 나눴어요.'},
  {ic:'✂️',f:'추출기(pdf_extractor)',b:'앞 차시에서 만든 모듈로, pymupdf를 써서 PDF에서 원하는 페이지만 뽑아 새 PDF로 저장해요.'},
  {ic:'🗂️',f:'총괄(process_handler)',b:'추출기와 변환기를 순서대로 불러 전체 변환을 지휘하는 함수형 모듈이에요. 오늘은 이것을 부르는 화면(gui)을 완성해요.'},
]);

/* 01 변환기 코드 속 낱말 카드 (228쪽 Tip) */
flipCards('convFlip',[
  {ic:'🏷️',f:'@staticmethod',b:'self를 쓰지 않는 메소드에 붙여요. 객체를 만들지 않고 「클래스명.메소드( )」로 바로 부를 수 있어, 기능을 모아 둔 폴더처럼 간편하게 써요.'},
  {ic:'📝',f:'docstring """…"""',b:'함수·메소드 바로 아래 세 따옴표로 적는 설명글이에요. 이 코드가 무슨 일을 하는지 사람이 읽기 쉽게 남겨 둬요.'},
  {ic:'📄',f:'convert_to_hwpx( )',b:'pyhwpx의 Hwp로 PDF를 열어 한글 문서(HWPX)로 저장해요. PDF→한글 변환을 맡은 메소드예요.'},
  {ic:'📊',f:'extract_tables_to_excel( )',b:'pymupdf로 PDF 속 표를 찾고, pandas의 DataFrame으로 만들어 엑셀(스프레드시트)로 저장해요.'},
]);

/* 02 모듈 호출 순서 — 어느 파일이 맡는 일일까? (229쪽) */
sorter('callGame',{
  cats:[{n:'main.py',k:'#e0702b'},{n:'gui.py',k:'#2f6fd0'},{n:'process_handler',k:'#1f9d74'}],
  items:[
    {t:'프로그램을 켜면 가장 먼저 빈 창(Tk)을 만든다',short:'빈 창 만들기',c:0,ic:'▶️',w:'main.py가 프로그램의 시작점이에요. tk.Tk( )로 빈 창을 만들어요.'},
    {t:'mainloop( )로 사용자의 입력을 계속 기다린다',short:'입력 기다리기',c:0,ic:'🔁',w:'main.py의 root.mainloop( )가 이벤트 루프를 돌리며 입력을 기다려요.'},
    {t:'버튼·입력칸을 배치하고 파일·폴더를 고르게 한다',short:'화면 배치',c:1,ic:'🖥️',w:'gui.py의 ProcessGUI가 화면(버튼·입력칸)을 구성해요.'},
    {t:'변환 실행 버튼을 누르면 변환 총괄을 호출한다',short:'변환 호출',c:1,ic:'🚀',w:'gui.py의 run_processing( )이 process_handler를 불러요.'},
    {t:'추출기·변환기를 차례로 불러 전체 변환을 지휘한다',short:'변환 지휘',c:2,ic:'🗂️',w:'process_handler가 pdf_extractor와 file_converter를 순서대로 불러요.'},
    {t:'한글·엑셀 등 결과 파일 경로를 돌려준다',short:'결과 경로 반환',c:2,ic:'📦',w:'process_handler가 만들어진 결과 파일 경로를 gui로 돌려줘요.'},
  ],
  end:'<b>정리</b> 흐름은 <b>main → gui → process_handler → (추출기·변환기)</b> 순서예요. main은 실행을 시작하고, gui는 화면과 버튼을 맡고, process_handler는 실제 변환을 지휘해요.'
});

/* 03 unittest 옵션 카드 (230쪽 Tip) */
flipCards('optFlip',[
  {ic:'📦',f:'-m',b:'모듈별로 실행하는 옵션이에요. python -m unittest 처럼 unittest 모듈을 직접 불러 테스트를 돌려요.'},
  {ic:'🔍',f:'-v',b:'테스트 결과를 상세하게(verbose) 출력하는 옵션이에요. 어떤 테스트가 성공·실패했는지 하나씩 보여 줘요.'},
  {ic:'🤖',f:'unittest',b:'파이썬 내장 테스트 도구예요. test_ 로 시작하는 함수를 자동으로 찾아 실행하고 성공 여부를 알려 줘요.'},
]);

/* 04 개발 절차 파이프라인 (231쪽) — 커스텀 인라인 SVG */
(function(){
  const box=document.getElementById('pipeBox'); if(!box) return;
  const S=[
    {k:'#9b4fc4',n:'① 기획 · 요구 분석',o:'산출물 — 요구 분석 명세서'},
    {k:'#2f6fd0',n:'② 설계',o:'산출물 — 설계 명세서(구조·프로그램·UI)'},
    {k:'#e0702b',n:'③ 구현',o:'산출물 — 소스 코드'},
    {k:'#1f9d74',n:'④ 테스트 · 유지 보수',o:'산출물 — 테스트 결과'},
  ];
  const BH=70, GAP=24, W=330; let y=6, rects='', arrows='';
  S.forEach((s,i)=>{
    rects+=`<rect class="pst" x="15" y="${y}" width="300" height="${BH}" rx="12" style="stroke:${s.k}"/>`+
      `<rect x="15" y="${y}" width="7" height="${BH}" rx="3" style="fill:${s.k}"/>`+
      `<text class="pt" x="34" y="${y+28}" style="fill:${s.k}">${s.n}</text>`+
      `<text class="po" x="34" y="${y+51}">${s.o}</text>`;
    if(i<S.length-1){const ay=y+BH; arrows+=`<path class="pfl" d="M165 ${ay} V${ay+GAP}" marker-end="url(#pipeA)"/>`;}
    y+=BH+GAP;
  });
  const H=y-GAP+6;
  box.innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="소프트웨어 개발 절차: 기획·요구 분석에서 요구 분석 명세서, 설계에서 설계 명세서, 구현에서 소스 코드, 테스트·유지 보수에서 테스트 결과를 산출물로 남기며 순서대로 이어진다">`+
    `<defs><marker id="pipeA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8a94a3"/></marker></defs>`+
    arrows+rects+`</svg>`;
})();

/* 05 직업 속으로 · 한 줄 조언 카드 (232~233쪽 · 읽을거리) */
flipCards('jobFlip',[
  {ic:'🎓',f:'에듀테크 기획자 김정태',b:'「왜 배우는가」에 답했다면 「무엇을 어떻게 배울까」를 고민하자. 어려운 개념은 문제 해결 관점으로 접근하면 사고력이 자란다.'},
  {ic:'🧭',f:'실내 내비 개발자 여상필',b:'프로그래밍 실력보다 논리적 사고력이 더 중요하다. 작은 프로그램이라도 직접 만들어 서비스로 완성해 본 경험이 큰 자신감이 된다.'},
  {ic:'🐍',f:'공통점 · 파이썬과 기초',b:'두 사람 모두 파이썬과 컴퓨터 과학의 기초(자료 구조·알고리즘)를 바탕으로 삼았어요. 기초가 탄탄하면 새 기술도 쉽게 익힐 수 있어요.'},
]);

/* 06 마무리 · 메모 모아 보기 */
const MEMOLIST=[['planLearn','나의 계획 · 오늘 알고 싶은 것'],['readThought','읽을거리를 읽고 남긴 생각'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
