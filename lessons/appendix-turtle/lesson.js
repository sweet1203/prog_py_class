
/* 01 사각형 · 명령어 ↔ 뜻 뒤집기 카드 (235쪽) */
flipCards('cmdFlip',[
  {ic:'🖊️',f:'penup( )',b:'펜을 들어 선을 그리지 않고 이동만 해요.'},
  {ic:'✏️',f:'pendown( )',b:'펜을 내려 이동한 자취가 선으로 그려져요.'},
  {ic:'📍',f:'goto(100, 100)',b:'거북이를 지정한 좌표로 바로 옮겨요(시작 위치 잡기).'},
  {ic:'➡️',f:'forward(200)',b:'바라보는 방향으로 200픽셀 앞으로 나아가요.'},
  {ic:'↩️',f:'right(90)',b:'제자리에서 시계 방향으로 90도 회전해요.'},
]);

/* 03 하트 · 오렌지색 점 격자 SVG (235쪽 heart() 호출 그대로 계산) */
function tgHeart(id){
  /* heart(y,x,n): y행 x열부터 오른쪽으로 n개 점. 교과서 235쪽 10회 호출 */
  const calls=[[0,1,2],[0,6,2],[1,0,4],[1,5,4],[2,0,9],[3,0,9],[4,1,7],[5,2,5],[6,3,3],[7,4,1]];
  const on={};
  calls.forEach(([y,x,n])=>{for(let i=0;i<n;i++) on[y+'_'+(x+i)]=1;});
  const cs=30,m=16,cols=9,rows=8,r=12;
  const w=m*2+(cols-1)*cs, h=m*2+(rows-1)*cs;
  let c='';
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
    if(on[y+'_'+x]) c+=`<circle cx="${m+x*cs}" cy="${m+y*cs}" r="${r}" fill="#e0702b"/>`;
  }
  const el=document.getElementById(id);
  if(el) el.innerHTML=`<svg class="tg-dot" viewBox="0 0 ${w} ${h}" role="img" aria-label="오렌지색 점으로 그린 8행 9열 하트">${c}</svg>`;
}
tgHeart('heartSvg');

/* 04 미키마우스 · 15×15 점 격자 예시 SVG (대표 실루엣 재현 — 지어낸 것) */
function tgMickey(id){
  const N=15,cs=18,m=12,r=7.5;
  const inC=(x,y,cx,cy,rad)=>((x-cx)**2+(y-cy)**2)<=rad*rad;
  const dark=(x,y)=> inC(x,y,7,9,5.2) || inC(x,y,3.4,3.4,2.7) || inC(x,y,10.6,3.4,2.7);
  let c='';
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){
    const b=dark(x,y);
    c+=`<circle cx="${m+x*cs}" cy="${m+y*cs}" r="${r}" fill="${b?'#1b1b1b':'#ffffff'}"${b?'':' stroke="#d6dae0" stroke-width="1"'}/>`;
  }
  const w=m*2+(N-1)*cs;
  const el=document.getElementById(id);
  if(el) el.innerHTML=`<svg class="tg-dot" viewBox="0 0 ${w} ${w}" role="img" aria-label="15 곱하기 15 격자에 검은 점과 흰 점으로 그린 미키마우스 예시 그림">${c}</svg>`;
}
tgMickey('mickeySvg');

/* 05 스스로 · 더 그려 보고 싶은 것 · 스스로 점검 */
chips('ideaPick','ideaPick',['색 바꾸기','크기 바꾸기','도형 바꾸기','내 이름 점으로 그리기'],true);
chips('selfCheck','selfCheckPick',['turtle 기본 명령을 설명할 수 있다','반복으로 도형을 그리는 원리를 안다','파일과 점으로 이미지를 그리는 원리를 안다'],true);

/* 05 마무리 · 메모 모아 보기 */
const MEMOLIST=[['planLearn','나의 계획 · 그려 보고 싶은 그림'],['ideaChange','바꿔 볼 아이디어'],['ideaPick','더 그려 보고 싶은 것'],['selfCheckPick','스스로 점검: 알게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[5]=()=>memoSummary('msum',MEMOLIST);
