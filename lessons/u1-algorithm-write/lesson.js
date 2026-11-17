
/* 0 시작 · 좋은 알고리즘 작성 카드 */
flipCards('awStartFlip',[
  {ic:'🎯',f:'명확하고 구체적으로',b:'알고리즘의 모든 과정은 명확하고 구체적으로 작성해야 해요.'},
  {ic:'🧮',f:'모든 경우를 고려해',b:'모든 경우의 수를 고려하여 실제로 실현 가능하도록 작성해요.'},
  {ic:'✂️',f:'간결하고 명확하게',b:'복잡하게 작성하면 유지 보수와 디버깅이 어려워요. 간결하고 명확하게 짜요.'},
  {ic:'🔍',f:'추상화로 일반화',b:'불필요한 요소를 빼고 핵심만 남겨(추상화) 일반화한 뒤, 단계적 절차로 설계해요.'},
]);

/* 01 제어 구조 분류 게임 */
sorter('awCtrlGame',{
  cats:[{n:'순차 구조',k:'#2f6fd0'},{n:'선택 구조',k:'#1f9d74'},{n:'반복 구조',k:'#e0702b'}],
  items:[
    {t:'명령을 위에서 아래로 차례대로 하나씩 실행한다',short:'차례대로 실행',c:0,ic:'⬇️',w:'처리 절차를 순서대로 실행하면 순차 구조예요.'},
    {t:'먼지를 턴 다음 청소기를 돌리고 바닥을 닦는다',short:'청소하기',c:0,ic:'🧹',w:'정해진 순서대로 하나씩 하는 청소하기는 순차 구조예요.'},
    {t:'조건식을 만족하는지에 따라 실행할 명령이 갈라진다',short:'조건 따라 분기',c:1,ic:'🔀',w:'조건에 따라 실행이 갈라지면 선택 구조예요.'},
    {t:'나이가 18살보다 많으면 성인 요금을, 아니면 청소년 요금을 매긴다',short:'나이별 요금제',c:1,ic:'🎫',w:'나이 조건에 따라 요금이 갈라지는 요금제는 선택 구조예요.'},
    {t:'조건식을 만족하는 동안 같은 명령을 되풀이해 실행한다',short:'조건 동안 되풀이',c:2,ic:'🔁',w:'조건을 만족하는 동안 되풀이하면 반복 구조예요.'},
    {t:'자판기 잔액이 1000원 이상인 동안 음료 고르기를 되풀이한다',short:'자판기 음료',c:2,ic:'🥤',w:'잔액이 남아 있는 동안 되풀이하는 자판기는 반복 구조예요.'},
  ],
  end:'<b>정리</b> 순차는 위에서 아래로 차례대로, 선택은 조건에 따라 갈라지고, 반복은 조건을 만족하는 동안 되풀이해요. 알고리즘은 이 세 구조를 조합해 작성해요.'
});

/* 02 정수의 합 · 반복 추적 */
(function(){
  const box=$('awSum'); if(!box) return;
  box.innerHTML=`<div class="aw-trace">
    <div class="aw-vars"><span>i = <b id="awI">1</b></span><span>sum = <b id="awS">0</b></span></div>
    <div class="aw-log" id="awLog"></div>
    <div class="row" style="margin-top:8px">
      <button class="btn sm" id="awStep">반복 1번 실행 ▶</button>
      <button class="btn sm ghost" id="awAll">끝까지 ▶▶</button>
      <button class="btn sm ghost" id="awRe">↺ 처음부터</button>
    </div></div>`;
  let i,sum,done; const vI=$('awI'),vS=$('awS'),log=$('awLog');
  function reset(){i=1;sum=0;done=false;vI.textContent=i;vS.textContent=sum;log.innerHTML='<div class="muted">sum = 0, i = 1 에서 시작해요.</div>';}
  function step(){
    if(done) return;
    if(i<=10){ sum+=i; const prev=i; i++; vI.textContent=i; vS.textContent=sum;
      log.insertAdjacentHTML('beforeend',`<div>i = ${prev} ≤ 10 (예) → sum = sum + ${prev} = <b>${sum}</b></div>`);
    } else { done=true; log.insertAdjacentHTML('beforeend',`<div class="aw-end">i = ${i} ≤ 10 (아니요) → 반복 끝. <b>sum 출력 → 55</b></div>`); }
    log.scrollTop=log.scrollHeight;
  }
  $('awStep').onclick=step;
  $('awAll').onclick=()=>{let g=0;while(!done&&g++<40)step();};
  $('awRe').onclick=reset;
  reset();
})();

/* 02 정수의 합 · 공식 계산기 */
(function(){
  const box=$('awFormula'); if(!box) return;
  box.innerHTML=`<div class="aw-calc">
    <label>n = <input type="number" id="awN" value="10" min="1" max="100000" inputmode="numeric"></label>
    <div class="row" style="margin:8px 0">${[10,100,1000].map(v=>`<button class="btn sm ghost aw-np" data-v="${v}">n = ${v}</button>`).join('')}</div>
    <div class="aw-out" id="awFout"></div></div>`;
  const inp=$('awN');
  function calc(){ const n=parseInt(inp.value,10);
    if(!(n>=1)){ $('awFout').innerHTML='<span class="muted">1 이상의 수를 넣어 보세요.</span>'; return; }
    const s=(1+n)*n/2;
    $('awFout').innerHTML=`공식 <b>(1 + ${fmt(n)}) × ${fmt(n)} ÷ 2 = ${fmt(s)}</b><br><span class="muted">반복 방식이라면 ${fmt(n)}번 더해야 하지만, 공식은 한 번에 구해요.</span>`;
  }
  inp.oninput=calc; box.querySelectorAll('.aw-np').forEach(b=>b.onclick=()=>{inp.value=b.dataset.v;calc();}); calc();
})();

/* 03 그리디 거스름돈 */
(function(){
  const box=$('awGreedy'); if(!box) return;
  const COINS=[500,100,50,10];
  box.innerHTML=`<div class="aw-greedy">
    <label>거슬러 줄 돈 n = <input type="number" id="awGn" value="800" min="10" max="99990" step="10" inputmode="numeric"> 원</label>
    <div class="row" style="margin:8px 0">${[800,1740,3250].map(v=>`<button class="btn sm ghost aw-gp" data-v="${v}">${fmt(v)}원</button>`).join('')}</div>
    <div class="row"><button class="btn sm" id="awGstep">다음 동전 ▶</button><button class="btn sm ghost" id="awGall">한 번에 계산</button><button class="btn sm ghost" id="awGre">↺ 다시</button></div>
    <div class="aw-coins" id="awGcoins"></div>
    <p class="aw-cap" id="awGcap"></p></div>`;
  const inp=$('awGn'); let rem,idx,counts,base;
  function reset(){
    const v=parseInt(inp.value,10);
    if(!(v>0)||v%10!==0){ $('awGcoins').innerHTML=''; $('awGcap').innerHTML='<span class="ng">10원 단위(10의 배수) 금액을 넣어 주세요.</span>'; base=0; return; }
    base=v; rem=v; idx=0; counts=[0,0,0,0];
    $('awGcap').innerHTML=`거슬러 줄 돈 <b>${fmt(v)}원</b> · 큰 동전부터 「다음 동전 ▶」을 눌러 보세요.`; draw();
  }
  function draw(){
    $('awGcoins').innerHTML=COINS.map((c,k)=>{
      const cls=k<idx?'done':(k===idx?'cur':''); return `<div class="aw-coin ${cls}"><span class="cv">${c}원</span><span class="cc">${counts[k]}개</span></div>`;
    }).join('')+`<div class="aw-coin tot"><span class="cv">남은 돈</span><span class="cc">${fmt(rem)}원</span></div>`;
  }
  function step(){
    if(!base||idx>=COINS.length) return;
    const c=COINS[idx], q=Math.floor(rem/c), after=rem%c; counts[idx]=q;
    const msg=`<b>${c}원</b> 동전 · ${fmt(rem)} ÷ ${c} = <b>${q}개</b>, 남은 돈 ${fmt(after)}원`;
    rem=after; idx++; draw();
    if(idx>=COINS.length){ const total=counts.reduce((a,b)=>a+b,0);
      const parts=COINS.map((c,k)=>counts[k]?`${c}원 ${counts[k]}개`:'').filter(Boolean).join(', ');
      $('awGcap').innerHTML=`끝! 필요한 동전은 모두 <b class="ok">${total}개</b> (${parts}).`;
    } else $('awGcap').innerHTML=msg;
  }
  $('awGstep').onclick=step;
  $('awGall').onclick=()=>{let g=0;while(base&&idx<COINS.length&&g++<10)step();};
  $('awGre').onclick=reset;
  box.querySelectorAll('.aw-gp').forEach(b=>b.onclick=()=>{inp.value=b.dataset.v;reset();});
  inp.onchange=reset; reset();
})();

/* 04 버블 정렬 막대 시각화 */
(function(){
  const box=$('awSort'); if(!box) return;
  const START=[100,83,92,88,96], N=START.length, MAX=100;
  const steps=[];
  (function(){
    const a=START.slice();
    for(let i=0;i<N;i++){
      let swapped=false;
      for(let j=0;j<N-1;j++){
        const before=a.slice(), sw=a[j]>a[j+1];
        if(sw){ const t=a[j];a[j]=a[j+1];a[j+1]=t; swapped=true; }
        steps.push({arr:before, j, pass:i, swap:sw, sortedFrom:N-i});
      }
      if(!swapped) break;
    }
    steps.push({done:true, arr:a.slice()});
  })();
  let p=0;
  box.innerHTML=`<svg id="awSortSvg" viewBox="0 0 320 185" role="img" aria-label="버블 정렬 막대 그래프"></svg>
    <p class="aw-cap" id="awSortCap"></p>
    <div class="row"><button class="btn sm ghost" id="awSprev">◀ 이전</button><button class="btn sm" id="awSnext">다음 비교 ▶</button><button class="btn sm ghost" id="awSend">⏭ 정렬 완료</button><button class="btn sm ghost" id="awSre">↺ 처음부터</button></div>`;
  const svg=$('awSortSvg'), W=320, H=185, bw=44, gap=(W-N*bw)/(N+1);
  function render(){
    const st=steps[p], arr=st.arr; let s='';
    arr.forEach((v,k)=>{
      const x=gap+k*(bw+gap), h=(v/MAX)*120+22, y=H-22-h;
      const hot=!st.done&&(k===st.j||k===st.j+1);
      const sorted=st.done||(st.sortedFrom!=null&&k>=st.sortedFrom);
      const fill=hot?'#f2a516':(sorted?'#1f9d74':'#6f93c7');
      s+=`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw}" height="${h.toFixed(1)}" rx="6" fill="${fill}"/>`
       +`<text x="${(x+bw/2).toFixed(1)}" y="${(y-6).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="700" fill="#16202c">${v}</text>`
       +`<text x="${(x+bw/2).toFixed(1)}" y="${H-6}" text-anchor="middle" font-size="10" fill="#5b6776">${k}</text>`;
    });
    svg.innerHTML=s;
    const cap=$('awSortCap');
    if(st.done) cap.innerHTML=`<b class="ok">정렬 완료!</b> 오름차순으로 나열됐어요 → ${st.arr.join(', ')}`;
    else cap.innerHTML=`<b>단계 ${st.pass+1}</b> · score[${st.j}]=${st.arr[st.j]} 와 score[${st.j+1}]=${st.arr[st.j+1]} 비교 → `+(st.swap?'<span class="ng">큰 값이 앞 → 자리 교환</span>':'<span class="ok">순서 맞음 → 그대로</span>');
    $('awSprev').disabled=p===0; $('awSnext').disabled=p>=steps.length-1; $('awSend').disabled=p>=steps.length-1;
  }
  $('awSnext').onclick=()=>{if(p<steps.length-1){p++;render();}};
  $('awSprev').onclick=()=>{if(p>0){p--;render();}};
  $('awSend').onclick=()=>{p=steps.length-1;render();};
  $('awSre').onclick=()=>{p=0;render();};
  render();
})();

/* 04 이진 탐색 */
(function(){
  const box=$('awBin'); if(!box) return;
  const A=[83,86,88,92,95,96,100], T=95, steps=[];
  (function(){ let s=0,e=A.length-1;
    while(s<=e){ const m=(s+e)>>1, st={s,e,m,val:A[m]};
      if(A[m]===T){st.res='eq';steps.push(st);break;}
      else if(A[m]>T){st.res='gt';steps.push(st);e=m-1;}
      else{st.res='lt';steps.push(st);s=m+1;}
    }
  })();
  let p=0;
  box.innerHTML=`<div class="aw-cells" id="awBcells"></div><p class="aw-cap" id="awBcap"></p>
    <div class="row"><button class="btn sm" id="awBnext">다음 ▶</button><button class="btn sm ghost" id="awBre">↺ 처음부터</button></div>`;
  function render(){
    const st=steps[p];
    $('awBcells').innerHTML=A.map((v,k)=>{
      const inR=k>=st.s&&k<=st.e, mid=k===st.m, hit=st.res==='eq'&&mid;
      return `<div class="aw-cell${inR?'':' dim'}${mid?' mid':''}${hit?' hit':''}">${v}</div>`;
    }).join('');
    const base=`start=${st.s}, end=${st.e} → 중간값 score[${st.m}] = <b>${st.val}</b>. `;
    const cap=$('awBcap');
    if(st.res==='eq') cap.innerHTML=base+`찾는 값 95와 <b class="ok">일치! (위치 ${st.m})</b>`;
    else if(st.res==='gt') cap.innerHTML=base+'95보다 커요 → <b>왼쪽 절반</b>으로 좁혀요.';
    else cap.innerHTML=base+'95보다 작아요 → <b>오른쪽 절반</b>으로 좁혀요.';
    $('awBnext').disabled=p>=steps.length-1;
  }
  $('awBnext').onclick=()=>{if(p<steps.length-1){p++;render();}};
  $('awBre').onclick=()=>{p=0;render();};
  render();
})();

/* 05 표현 방법 짝짓기 */
sorter('awMethod',{
  cats:[{n:'자연어',k:'#2f6fd0'},{n:'의사 코드',k:'#9b4fc4'},{n:'순서도',k:'#1f9d74'},{n:'프로그래밍 언어',k:'#e0702b'}],
  items:[
    {t:'약속된 기호와 흐름선으로 작성해 전체 흐름을 한눈에 볼 수 있다',short:'기호·흐름선',c:2,ic:'📊',w:'기호와 흐름선으로 흐름을 나타내면 순서도예요.'},
    {t:'일상에서 쓰는 말로 표현하는 방법으로, 간략하게 적기는 어렵다',short:'일상의 말',c:0,ic:'💬',w:'사람들이 일상에서 쓰는 말로 표현하면 자연어예요.'},
    {t:'프로그래밍 언어와 비슷한 형식이지만 컴퓨터로 실행할 수는 없다',short:'언어와 비슷하나 실행 X',c:1,ic:'📝',w:'프로그래밍 언어와 비슷하지만 실행할 수 없는 형식은 의사 코드예요.'},
  ],
  end:'<b>정리</b> 순서도는 기호·흐름선으로, 자연어는 일상의 말로, 의사 코드는 프로그래밍 언어와 비슷하지만 실행할 수 없는 형식으로 알고리즘을 표현해요.'
});

/* 05 제어 구조 이름 떠올리기 */
flipCards('awCtrlFlip',[
  {ic:'⬇️',f:'명령을 위에서 아래로 차례대로 실행',b:'<b>순차 구조</b> · 처리 절차를 순서대로 실행해요.'},
  {ic:'🔀',f:'조건식에 따라 실행이 갈라짐',b:'<b>선택 구조</b> · 조건식의 만족 여부에 따라 분기해요.'},
  {ic:'🔁',f:'조건식을 만족하는 동안 되풀이',b:'<b>반복 구조</b> · 조건을 만족하는 동안 같은 명령을 되풀이해요.'},
]);

/* 05 스스로 점검 */
chips('awSelfCheck','selfCheckPick',['알고리즘의 개념과 순서도 작성 방법을 설명할 수 있다','세 가지 제어 구조로 알고리즘을 작성할 수 있다','알고리즘을 합리적·논리적으로 작성하려고 노력했다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 차시에서 익히고 싶은 것'],['deskAlgo','교실 책상 배치 알고리즘'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
