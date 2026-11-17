
/* 0 시작 · 일상 속 알고리즘 뒤집는 카드 */
flipCards('lifeAlg',[
  {ic:'🍳',f:'조리법(레시피)',b:'레시피대로 순서를 지켜 요리하는 것이 알고리즘이에요. 순서가 바뀌거나 빠지면 원하는 음식이 나오지 않아요.'},
  {ic:'🚌',f:'등굣길 고르기',b:'늦잠을 자거나 비가 오는 등 상황에 맞추어 가장 효율적인 경로와 교통수단을 찾는 것도 알고리즘이에요.'},
  {ic:'🧭',f:'문제 해결의 절차',b:'특정한 문제를 합리적으로 해결하기 위한 논리적인 절차 또는 방법을 알고리즘이라고 해요.'},
  {ic:'📐',f:'프로그램의 밑그림',b:'코드를 짜기 전에 먼저 그리는 설계도예요. 알고리즘이 「계획」이라면 프로그램은 그 계획을 「실행」한 결과예요.'},
]);

/* 01 알고리즘 5조건 판정 게임 */
sorter('condGame',{
  cats:[{n:'조건 만족 ⭕',k:'#1f9d74'},{n:'조건 위반 ❌',k:'#d64535'}],
  items:[
    {t:'노래 번호를 입력받아, 그 번호에 정해진 반주를 출력한다',short:'번호 → 반주 출력',c:0,ic:'🎵',w:'입력·출력이 분명하고 어떤 입력이 어떤 출력을 낳는지 명확해요. 조건을 만족해요.'},
    {t:'큰 수가 나올 때까지 1씩 더하기를 멈추지 않고 영원히 반복한다',short:'영원히 반복',c:1,ic:'♾️',w:'끝나지 않으므로 유한성(유한한 시간에 종료)을 위반해요.'},
    {t:'「음식을 적당히, 알맞게 익힌다」처럼 기준 없이 모호하게 적는다',short:'기준 없이 모호',c:1,ic:'🌫️',w:'절차가 명확·구체적이지 않아 명확성을 위반해요.'},
    {t:'점수를 구하는 기준과 공식이 분명해, 같은 입력이면 같은 점수가 나온다',short:'기준·공식 분명',c:0,ic:'🎤',w:'명확성을 갖춰 조건을 만족해요(노래방 점수 알고리즘).'},
    {t:'입력값이 없어도 되지만, 결과는 적어도 하나 이상 내놓는다',short:'입력 0개 OK·출력 1개',c:0,ic:'📤',w:'입력은 0개 이상 가능하고 출력은 1개 이상 필요—조건에 맞아요.'},
    {t:'계산을 끝까지 하고도 아무 결과도 내놓지 않고 그냥 끝난다',short:'결과를 안 냄',c:1,ic:'🚫',w:'출력이 0개라 출력 조건을 위반해요(적어도 1개 이상 출력해야 해요).'},
    {t:'노래가 끝나면 점수를 출력하고 종료된다',short:'끝나면 종료',c:0,ic:'⏱️',w:'유한한 시간 안에 끝나므로 유한성을 갖춰요.'},
    {t:'「가장 좋은 방법으로 처리한다」처럼 실제로 어떻게 할지 정하지 않는다',short:'방법을 안 정함',c:1,ic:'❓',w:'논리적으로 수행 가능하게 구체화되지 않아 수행 가능성·명확성을 위반해요.'},
  ],
  end:'<b>정리</b> 알고리즘은 <b>입력·출력·명확성·수행 가능성·유한성</b> 다섯 조건을 모두 만족해야 해요. 끝나지 않거나(유한성), 결과가 없거나(출력), 모호하면(명확성·수행 가능성) 알고리즘이 될 수 없어요.'
});

/* 02 「점수 → 합격/불합격」 세 가지 표현 탭 */
tabs('exprBtn','exprView',[{ic:'🗣️',n:'자연어'},{ic:'📝',n:'의사 코드'},{ic:'🔷',n:'순서도'}],(it,i)=>{
  if(i===0) return `<div class="al-tw" style="--k:#2f6fd0"><p>사람이 쓰는 말로 절차를 풀어 써요.</p><ol class="al-nl"><li>점수(score)를 입력받는다.</li><li>점수가 60점 이상이면 결과를 「합격」으로, 그렇지 않으면 「불합격」으로 정한다.</li><li>결과를 출력한다.</li></ol></div>`;
  if(i===1) return `<div class="al-tw" style="--k:#9b4fc4"><p>자연어를 프로그래밍 언어와 비슷한 형식으로 간결하게 나타내요.</p><pre class="code">score = 0
result = ' '
<b>input</b> score
<b>if</b> (score ＞= 60)
    result = '합격'
<b>else</b>
    result = '불합격'
<b>print</b> result</pre></div>`;
  return `<div class="al-tw" style="--k:#1f9d74"><p>약속된 기호와 흐름선으로 전체 흐름을 그려요.</p><div class="al-fc"><svg viewBox="0 0 320 486" role="img" aria-label="점수를 입력받아 60점 이상이면 합격, 아니면 불합격으로 판정한 뒤 결과를 출력하는 순서도">
  <defs><marker id="alfcA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8a94a3"/></marker></defs>
  <path class="fl" d="M160 44 V62" marker-end="url(#alfcA)"/>
  <path class="fl" d="M160 110 V128" marker-end="url(#alfcA)"/>
  <path class="fl" d="M160 170 V182" marker-end="url(#alfcA)"/>
  <path class="fl" d="M70 224 V300" marker-end="url(#alfcA)"/>
  <path class="fl" d="M250 224 V300" marker-end="url(#alfcA)"/>
  <path class="fl" d="M70 338 V362 H160"/>
  <path class="fl" d="M250 338 V362 H160"/>
  <path class="fl" d="M160 362 V382" marker-end="url(#alfcA)"/>
  <path class="fl" d="M160 418 V436" marker-end="url(#alfcA)"/>
  <rect class="tm" x="112" y="10" width="96" height="32" rx="16"/><text x="160" y="31">시작</text>
  <polygon class="pr" points="108,66 212,66 228,88 212,110 108,110 92,88"/><text x="160" y="84" class="cd">score = 0</text><text x="160" y="100" class="cd">result = ' '</text>
  <polygon class="io" points="106,130 230,130 212,168 88,168"/><text x="160" y="153">score 입력</text>
  <polygon class="de" points="160,184 252,224 160,264 68,224"/><text x="160" y="229" class="cd">score ＞= 60</text>
  <text x="80" y="256" class="yn">예</text><text x="238" y="256" class="yn">아니요</text>
  <rect class="pc" x="14" y="300" width="112" height="38" rx="5"/><text x="70" y="324" class="cd">result = '합격'</text>
  <rect class="pc" x="194" y="300" width="112" height="38" rx="5"/><text x="250" y="324" class="cd">result = '불합격'</text>
  <polygon class="io" points="106,384 230,384 212,418 88,418"/><text x="160" y="406">result 출력</text>
  <rect class="tm" x="112" y="438" width="96" height="32" rx="16"/><text x="160" y="459">종료</text>
</svg></div></div>`;
});

/* 02 순서도 기호 매칭 (기호 그림 ↔ 뜻) */
flipCards('symFlip',[
  {ic:'<svg class="sy" viewBox="0 0 48 30"><rect x="3" y="4" width="42" height="22" rx="11" fill="#e6f4ee" stroke="#1f9d74" stroke-width="2"/></svg>',f:'터미널',b:'순서도의 시작과 종료를 나타내요.'},
  {ic:'<svg class="sy" viewBox="0 0 48 30"><rect x="4" y="5" width="40" height="20" fill="#eef3fb" stroke="#2f6fd0" stroke-width="2"/></svg>',f:'처리',b:'각종 연산 및 데이터 이동 등 처리해야 할 명령이에요.'},
  {ic:'<svg class="sy" viewBox="0 0 48 30"><polygon points="24,2 46,15 24,28 2,15" fill="#fff4dc" stroke="#e0702b" stroke-width="2"/></svg>',f:'조건(판단)',b:'여러 경로 중 하나를 선택하기 위한 비교·판단의 조건이에요.'},
  {ic:'<svg class="sy" viewBox="0 0 48 30"><polygon points="12,5 46,5 36,25 2,25" fill="#f3e9fb" stroke="#9b4fc4" stroke-width="2"/></svg>',f:'입출력',b:'데이터의 입력과 출력을 나타내요.'},
  {ic:'<svg class="sy" viewBox="0 0 48 30"><polygon points="13,5 35,5 45,15 35,25 13,25 3,15" fill="#eaf6f0" stroke="#1f9d74" stroke-width="2"/></svg>',f:'준비',b:'초깃값 설정 등의 준비 및 선언에 써요.'},
  {ic:'<svg class="sy" viewBox="0 0 48 30"><path d="M5,15 H38 M38,15 l-8,-5 M38,15 l-8,5" fill="none" stroke="#5b6776" stroke-width="2.4"/></svg>',f:'흐름선',b:'처리의 흐름과 실행 순서를 나타내는 기호 간 연결이에요.'},
  {ic:'<svg class="sy" viewBox="0 0 48 30"><circle cx="24" cy="15" r="12" fill="#fdeef0" stroke="#d64535" stroke-width="2"/></svg>',f:'연결자',b:'페이지 내에서 순서도 간 연결에 써요.'},
]);

/* 03 스스로 해결하기 · 기준 고르기 · 조건 자기 점검 */
chips('goalChips','goalPick',['빠른 시간','짧은 거리','적은 비용','적은 환승'],false);
chips('selfCheck','selfCheckPick',['입력과 출력이 분명하다','각 절차가 명확하고 구체적이다','논리적으로 수행 가능하다','유한한 시간에 반드시 끝난다'],true);

/* 04 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['goalPick','등교에서 가장 중요하게 본 기준'],['inputMemo','등교 알고리즘의 입력'],['outputMemo','등교 알고리즘의 출력'],['stepWrite','내가 쓴 등교 알고리즘(절차)'],['selfCheckPick','조건 자기 점검 결과'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[4]=()=>memoSummary('msum',MEMOLIST);
