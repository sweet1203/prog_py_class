
/* 0 시작 · 깃·깃허브가 주는 네 가지 */
flipCards('introFlip',[
  {ic:'🕒',f:'버전 관리',b:'코드를 이전 상태로 되돌리거나, 누가 무엇을 바꿨는지 변경 내역을 추적할 수 있어요.'},
  {ic:'🤝',f:'협업',b:'여러 개발자가 각자 작업한 뒤 병합(merge)해 하나의 프로젝트로 통합할 수 있어요.'},
  {ic:'🌍',f:'오픈 소스',b:'프로젝트를 누구나 쓰도록 공개하거나, 다른 사람의 오픈 소스를 활용해 개발에 참여할 수 있어요.'},
  {ic:'💼',f:'포트폴리오',b:'혼자 하는 프로젝트도 체계적으로 버전을 관리해, 그 기록을 포트폴리오로 정리할 수 있어요.'},
]);

/* 02 깃을 활용한 버전 관리 과정 (작업 폴더 → 스테이지 → 로컬 → 원격, pull) */
(function(){
  const S=$('vcSvg');
  const defs=el('defs',{},S);
  const m=el('marker',{id:'clah',markerWidth:9,markerHeight:9,refX:6,refY:3,orient:'auto'},defs);
  el('path',{d:'M0,0 L6,3 L0,6 Z',fill:'#f2a516'},m);
  function box(id,x,y,w,h,t,sub){
    const g=el('g',{class:'bx',id},S);
    el('rect',{x,y,width:w,height:h,rx:9,class:'box'},g);
    el('text',{x:x+w/2,y:y+h/2-3,'text-anchor':'middle',class:'tt'},g,t);
    el('text',{x:x+w/2,y:y+h/2+13,'text-anchor':'middle',class:'ts'},g,sub);
    return g;
  }
  function arw(id,d){ return el('path',{id,class:'arw',d,'marker-end':'url(#clah)'},S); }
  function lbl(id,x,y,t,anchor){ return el('text',{id,class:'lbl',x,y,'text-anchor':anchor||'start'},S,t); }
  el('text',{x:52,y:16,class:'zone'},S,'개발자 컴퓨터');
  el('line',{x1:20,y1:266,x2:280,y2:266,class:'sep'},S);
  el('text',{x:52,y:284,class:'zone'},S,'깃허브(GitHub)');
  box('bWork',50,24,180,44,'작업 폴더','Working Directory');
  box('bStage',50,110,180,44,'스테이지','Staging Area');
  box('bLocal',50,196,180,44,'로컬 저장소','Local Repository');
  box('bRemote',50,288,180,44,'원격 저장소','Remote Repository');
  arw('aAdd','M140,70 L140,106');
  arw('aCommit','M140,156 L140,192');
  arw('aPush','M140,242 L140,284');
  arw('aPull','M228,300 C266,278 266,232 228,220');
  lbl('lAdd',150,92,'git add');
  lbl('lCommit',150,178,'git commit');
  lbl('lPush',150,266,'git push');
  lbl('lPull',262,262,'git pull','middle');
  const STEP=[
    ['① 작업하기','<b>작업 폴더</b>(Working Directory)에서 소스 코드를 작성하고 수정해요.',['bWork']],
    ['② git add','변경된 파일을 <b>스테이지</b>(커밋 전 임시 저장 공간)에 올려요.',['bWork','bStage','aAdd','lAdd']],
    ['③ git commit','스테이지의 파일을 <b>로컬 저장소</b>에 저장(기록)해요. 커밋 메시지로 설명을 붙여요.',['bStage','bLocal','aCommit','lCommit']],
    ['④ git push','로컬 저장소의 내용을 원격 저장소(<b>깃허브</b>)에 전송해요.',['bLocal','bRemote','aPush','lPush']],
    ['⑤ git pull','원격 저장소의 변경된 내용을 다시 <b>로컬 저장소로 가져와요</b>.',['bRemote','bLocal','aPull','lPull']],
  ];
  const ALL=['bWork','bStage','bLocal','bRemote','aAdd','aCommit','aPush','aPull','lAdd','lCommit','lPush','lPull'];
  $('vcBtns').innerHTML=STEP.map((s,i)=>`<button class="btn sm ghost" data-i="${i}">${s[0]}</button>`).join('');
  const bs=[...$('vcBtns').querySelectorAll('button')];
  const show=k=>{
    ALL.forEach(id=>$(id).classList.remove('on'));
    STEP[k][2].forEach(id=>$(id).classList.add('on'));
    bs.forEach((b,j)=>b.classList.toggle('ghost',j!==k));
    $('vcCap').innerHTML=STEP[k][1];
  };
  bs.forEach(b=>b.onclick=()=>show(+b.dataset.i)); show(0);
})();

/* 02 깃 주요 명령어 매칭 (표Ⅰ-6) */
flipCards('gitCmd',[
  {ic:'🆕',f:'git init',b:'깃 로컬 저장소를 초기화해요. 폴더를 깃으로 관리하기 시작할 때 써요.',x:'예 · git init'},
  {ic:'➕',f:'git add',b:'변경한 파일을 깃 스테이지에 추가해요.',x:'예 · git add <파일명>'},
  {ic:'💾',f:'git commit',b:'스테이지에 있는 파일을 로컬 저장소에 저장해요.',x:"예 · git commit '커밋 메시지'"},
  {ic:'⬆️',f:'git push',b:'로컬 저장소에 저장된 파일을 원격 저장소에 전송해요.',x:'예 · git push origin main'},
  {ic:'⬇️',f:'git pull',b:'원격 저장소의 변경된 내용을 로컬 저장소로 가져와요.',x:'예 · git pull origin main'},
  {ic:'📥',f:'git clone',b:'원격 저장소의 내용을 로컬 저장소에 그대로 복사해요.',x:'예 · git clone <원격 저장소 URL>'},
  {ic:'🔍',f:'git status',b:'깃 작업 폴더에 있는 파일들의 상태를 확인해요.',x:'예 · git status'},
  {ic:'📜',f:'git log',b:'깃에 저장된 커밋(commit) 내역을 확인해요.',x:'예 · git log'},
  {ic:'🔀',f:'git merge',b:'브랜치에서 작업한 내용을 기준 브랜치로 병합해요.',x:'예 · git merge <브랜치명>'},
  {ic:'🔗',f:'git remote',b:'로컬 저장소를 깃 원격 저장소와 연결해요.',x:'예 · git remote add <별칭> <URL>'},
  {ic:'❓',f:'git help',b:'기본 git 명령어를 나열·설명하고, 명령어를 함께 입력하면 매뉴얼로 연결해요.',x:'예 · git help <명령어>'},
]);

/* 04 스스로 점검 */
chips('selfCk','selfCkPick',['통합 개발 환경에서 프로그래밍하고 결과를 확인할 수 있다','깃의 주요 명령어로 코드를 저장·전송할 수 있다','소스 코드를 공유하고 다른 사람과 협업할 수 있다'],true);

/* 05 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 차시에서 배우고 싶은 것'],['collabMemo','협업 상황 메모 · 깃·깃허브가 좋은 점'],['repoName','만들 원격 저장소 이름'],['taskPlan','올리고 싶은 파일과 버전 관리가 필요한 이유'],['selfCkPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[5]=()=>memoSummary('msum',MEMOLIST);
