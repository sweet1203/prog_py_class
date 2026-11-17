/* 01 while 합계 (132쪽) */
pyrun('whileSumRun', {rows:7, code:"i = 1\nsum = 0\nwhile i <= 10:\n  sum += i\n  i += 1\nprint(sum)"});

/* 01 명령 순서를 바꾼 경우 (132쪽) */
pyrun('whileOrderRun', {rows:8, code:"i = 1\nsum = 0\nwhile i < 10:\n  i += 1\n  sum += i\nprint(sum)"});

/* 01 두 수 사이의 짝수 (133쪽 해 보기 6) */
pyrun('whileEvenRun', {rows:9, stdin:'10 3', code:
"a, b = map(int, input('정수 2개를 입력하세요: ').split())\nend = max(a, b)\nstart = min(a, b)\n"+
"if start % 2 == 1:          # 시작 값이 홀수이면\n  start += 1                # 시작 값을 짝수로 만들기\n"+
"while start <= end:         # 작은 수가 큰 수와 같은 값이 될 때까지 반복\n  print(start, end=' ')\n  start += 2                # 증가 값 계산"});

/* 02 range 인수 바꿔 보기 (134쪽 Tip) */
pyrun('rangeRun', {rows:9, code:
"for i in range(7, 9):\n  print(i, end=' ')\nprint()\n\n"+
"for i in range(5, 12, 2):\n  print(i, end=' ')\nprint()\n\n"+
"for i in range(5):\n  print(i, end=' ')\nprint()"});

/* 02 for로 1~10 합 (134쪽 예제 8) */
pyrun('forSumRun', {rows:5, code:"sum = 0\nfor i in range(1, 11, 1):   # i는 1부터 1씩 증가하여 10까지\n  sum += i\nprint('1부터 10까지 합은:', sum)"});

/* 02 짝수의 합 (136쪽 해 보기 7-1) */
pyrun('evenSumRun', {rows:6, stdin:'10', code:
"a = int(input('정수 입력: '))\nsum = 0\nfor i in range(2, a + 1, 2):   # 2부터 a까지 2씩 증가\n  sum = sum + i\nprint('결과:', sum)"});

/* 02 구구단 (136쪽 해 보기 7-2) */
pyrun('gugRun', {rows:5, stdin:'7', code:
"num = int(input('단 수를 입력하세요: '))\nfor i in range(1, 10, 1):   # 곱하는 수를 반복\n  print('%d * %d = %d' % (num, i, num * i))"});

/* 03 별 삼각형 (139쪽) */
pyrun('starRun', {rows:6, code:
"for i in range(1, 4):                # 줄 수만큼 반복\n  for j in range(1, i + 1):          # 한 줄에 찍을 별의 개수\n    print('*', end=' ')\n  print()                            # 줄 바꾸기"});

/* 03 end 없이 (139쪽 변형) */
pyrun('starNoEndRun', {rows:6, code:
"for i in range(1, 4):\n  for j in range(1, i + 1):\n    print('*')\n  print()"});

/* 03 역삼각형 (139쪽 해 보기 8-1) */
pyrun('starRevRun', {rows:5, code:
"for i in range(1, 4):                # 줄 수만큼 반복\n  for j in range(3, i - 1, -1):      # 한 줄에 찍을 별의 개수\n    print('*', end='')\n  print()                            # 줄 바꾸고 다음 줄로"});

/* 04 continue (142쪽 해 보기 9) */
pyrun('contRun', {rows:8, code:
"i = 0\nwhile i < 10:\n  i = i + 1\n  if i % 2 == 0:      # 짝수이면\n    continue          # 아래 print를 건너뛰고 반복의 처음으로\n  print(i, end=' ')   # 홀수 출력"});
pyrun('noContRun', {rows:6, code:
"i = 0\nwhile i < 10:\n  i = i + 1\n  print(i, end=' ')"});

/* 04 break · 소수 판별 (140쪽 예제 10) */
pyrun('primeRun', {rows:9, stdin:'7', code:
"num = int(input('정수 입력: '))\nfor i in range(2, num):         # 2부터 num-1까지\n  if num % i == 0:            # 나누어떨어지는 수가 있으면\n    break                     # 소수가 아니므로 반복 탈출\n"+
"if num == i + 1:\n  print('소수')\nelse:\n  print('소수 아님')"});

/* 04 숫자 맞히기 변형 (139쪽 해 보기 8-2) */
pyrun('guessRun', {rows:11, stdin:'3\n9\n7', code:
"com = 7                            # 정답(고정)\nfor n in range(5):                 # 최대 5번만 묻기\n  num = int(input('1에서 10 사이의 수를 입력하세요: '))\n"+
"  if num < com:\n    print('%d보다 큽니다.' % num)\n  elif num > com:\n    print('%d보다 작습니다.' % num)\n  else:\n    print('정답입니다.')\n    break"});

/* 05 핵심 기능 · 스스로 점검 */
chips('featPick','featPick',['순차 구조','선택 구조(if ~ elif ~ else)','반복 구조(while)','입력·출력'],true);
chips('selfCheck','selfCheckPick',['while·for로 반복하는 프로그램을 쓸 수 있다','중첩 반복과 break·continue를 설명할 수 있다','문제에 맞는 제어 구조를 고를 수 있다'],true);

/* 06 제어 구조 정리 (145쪽) */
flipCards('ctrlFlip',[
  {ic:'➡️',f:'순차 구조',b:'명령이 차례대로 한 방향으로 진행해요.'},
  {ic:'🔀',f:'선택 구조',b:'조건에 따라 실행할 명령이 달라져요. if · if~elif · if~elif~else.'},
  {ic:'🔁',f:'반복 구조',b:'조건을 만족하는 동안 명령을 되풀이해요. while · for · break · continue.'},
  {ic:'🪆',f:'중첩 제어 구조',b:'제어 구조 안에 다른 제어 구조가 들어 있어요.'},
]);
sorter('ctrlGame',{
  cats:[{n:'순차',k:'#2f6fd0'},{n:'선택',k:'#9b4fc4'},{n:'반복',k:'#1f9d74'}],
  items:[
    {t:'두 수를 입력받아 더한 뒤 결과를 출력한다',short:'입력 → 합 → 출력',c:0,ic:'➡️',w:'조건도 되풀이도 없이 차례대로 진행하므로 순차 구조예요.'},
    {t:'나이가 18세 이상이면 요금을 다르게 계산한다',short:'나이로 요금 구분',c:1,ic:'🚌',w:'조건에 따라 실행할 명령이 갈리므로 선택 구조예요.'},
    {t:'1부터 100까지 모든 수를 더한다',short:'1~100 합',c:2,ic:'➕',w:'같은 덧셈을 정해진 횟수만큼 되풀이하므로 반복 구조예요.'},
    {t:'점수를 보고 A·B·C·D·F 성취도를 정한다',short:'점수로 성취도 결정',c:1,ic:'📝',w:'점수 구간에 따라 다른 결과를 내므로 선택 구조(if ~ elif ~ else)예요.'},
    {t:'구구단 9단을 1부터 9까지 곱하며 출력한다',short:'9단 출력',c:2,ic:'✖️',w:'곱하는 수를 바꿔 가며 되풀이하므로 반복 구조예요.'},
    {t:'이름과 나이를 입력받아 인사말을 출력한다',short:'입력 → 인사말',c:0,ic:'👋',w:'위에서 아래로 차례대로 실행하면 되므로 순차 구조예요.'},
  ],
  end:'<b>정리</b> 차례대로면 <b>순차</b>, 조건에 따라 갈리면 <b>선택</b>, 같은 일을 되풀이하면 <b>반복</b>이에요. 이 셋을 서로 넣어 쓰면 <b>중첩 제어 구조</b>가 돼요.'
});

/* 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 반복하는 일의 예'],['planProb','급식 메뉴 알림 · 해결해야 할 문제'],['planStop','급식 메뉴 알림 · 반복을 끝내는 방법'],['planPick','급식 메뉴 알림 · 요일별 메뉴 고르기'],['featPick','고른 핵심 기능'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
