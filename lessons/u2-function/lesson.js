
/* 0 시작 · 첫 실행 맛보기 */
pyrun('helloRun', {code:"print('안녕하세요! 파이썬이 잘 돌아가요.')\nprint('3 + 7 =', 3 + 7)"});

/* 01 함수를 쓰는 이유 (147쪽) */
flipCards('whyFlip',[
  {ic:'♻️',f:'코드의 재사용',b:'한 번 만든 함수는 호출만으로 다시 쓸 수 있어요. 중복이 줄고 일관성이 유지돼요.'},
  {ic:'🧩',f:'구조화·모듈화',b:'코드를 논리적인 단위로 나눠 읽기 쉬워지고, 하나의 작업을 맡는 조각이 돼요.'},
  {ic:'🔍',f:'추상화',b:'내부를 몰라도 함수 이름과 매개 변수만 알면 기능을 이해하고 쓸 수 있어요.'},
  {ic:'✂️',f:'간결한 코드',b:'반복되는 명령을 한 번만 적어 전체 코드 길이가 짧아져요.'},
  {ic:'🛠️',f:'디버깅 용이',b:'기능별로 나뉘어 있어 오류가 나면 해당 함수만 독립적으로 고치고 시험할 수 있어요.'},
]);

/* 01 내장 함수 vs 사용자 정의 함수 (148~149쪽) */
sorter('kindGame',{
  cats:[{n:'내장 함수',k:'#2f6fd0'},{n:'사용자 정의 함수',k:'#1f9d74'}],
  items:[
    {t:'print( )',short:'print( )',c:0,ic:'🖨️',w:'파이썬이 기본으로 제공하는 내장 함수예요.'},
    {t:'len( )',short:'len( )',c:0,ic:'📏',w:'문자열·리스트의 길이를 돌려주는 내장 함수예요.'},
    {t:'sorted( )',short:'sorted( )',c:0,ic:'↕️',w:'정렬된 새 리스트를 돌려주는 내장 함수예요.'},
    {t:'abs( )',short:'abs( )',c:0,ic:'➖',w:'절댓값을 구하는 내장 함수예요.'},
    {t:'def tri_area(base, height): 로 내가 만든 tri_area( )',short:'tri_area( )',c:1,ic:'🔺',w:'def로 직접 정의했으니 사용자 정의 함수예요.'},
    {t:'def odd_even(num): 로 내가 만든 odd_even( )',short:'odd_even( )',c:1,ic:'🔢',w:'필요한 기능을 직접 구현한 사용자 정의 함수예요.'},
    {t:'def dice_game(a, b): 로 내가 만든 dice_game( )',short:'dice_game( )',c:1,ic:'🎲',w:'게임 규칙에 맞게 직접 정의한 사용자 정의 함수예요.'},
  ],
  end:'<b>정리</b> 별도 정의 없이 바로 쓰면 <b>내장 함수</b>(print·len·sorted·abs …), 필요한 기능을 <b>def</b>로 직접 만들면 <b>사용자 정의 함수</b>예요.'
});

/* 01 내장 함수 예 (148쪽) */
pyrun('builtinRun', {rows:12, code:
"num = -10\nprint(abs(num))\n\n"+
"num = [4, 2, 7, 9, 1]\nprint(sorted(num))\n\n"+
"num = [1, 4, 3, 7, 9]\nprint(sum(num))\n\n"+
"a = 'python'\nprint(list(a))"});

/* 01 함수의 정의와 호출 (151쪽 그림Ⅱ-7) */
pyrun('mulRun', {code:
"def multiply(a, b):\n  c = a * b\n  return c\n\nresult = multiply(3, 4)\nprint(result)"});

/* 01 해 보기 1 삼각형 넓이 (155쪽) */
pyrun('triRun', {rows:10, stdin:'6\n4', code:
"def tri_area(base, height):\n  area = 0.5 * base * height\n  return area\n\n"+
"b = int(input('삼각형의 밑변을 입력하세요: '))\nh = int(input('삼각형의 높이를 입력하세요: '))\n"+
"result = tri_area(b, h)\nprint(f'삼각형의 넓이는 {result}입니다.')"});

/* 02 매개 변수 없는 함수 vs 있는 함수 (152쪽) */
pyrun('sqRun', {rows:12, code:
"# 매개 변수가 없는 경우\ndef square_area0():\n  side = 5\n  print(side * side)\n\nsquare_area0()\n\n"+
"# 매개 변수가 있는 경우\ndef square_area(side):\n  print(side * side)\n\nsquare_area(7)"});

/* 02 반환값이 없는 함수 / 있는 함수 (153쪽) — 난수 */
pyrun('lunchA', {rows:10, code:
"import random\n\ndef lunch_menu():\n  menu = ['국수', '김밥', '라면', '우동']\n  print('점심:', random.choice(menu))\n\n"+
"result = lunch_menu()\nprint('점심 메뉴:', result)"});
pyrun('lunchB', {rows:10, code:
"import random\n\ndef lunch_menu():\n  menu = ['국수', '김밥', '라면', '우동']\n  return random.choice(menu)\n\n"+
"result = lunch_menu()\nprint('점심:', result)"});

/* 02 여러 값 반환 (153쪽) */
pyrun('opRun', {rows:16, stdin:'6 3', code:
"def op(num1, num2):\n  plus = num1 + num2\n  minus = num1 - num2\n  multiply = num1 * num2\n  divide = num1 / num2\n  return plus, minus, multiply, divide\n\n"+
"a, b = map(int, input('입력: ').split())\np, m, mul, d = op(a, b)\n"+
"print(f'{a} + {b} = {p}')\nprint(f'{a} - {b} = {m}')\nprint(f'{a} * {b} = {mul}')\nprint(f'{a} / {b} = {d}')"});

/* 02 매개 변수 vs 인수 (154쪽 Tip) */
sorter('argGame',{
  cats:[{n:'매개 변수',k:'#e0702b'},{n:'인수',k:'#2f6fd0'}],
  items:[
    {t:'def add(a, b): 에서 소괄호 안의 <b>a</b>',short:'a',c:0,ic:'📥',w:'함수를 정의할 때 소괄호 안에 쓰는 변수예요.'},
    {t:'result = add(3, 5) 에서 <b>3</b>',short:'3',c:1,ic:'📤',w:'함수를 호출할 때 실제로 전달하는 값이에요.'},
    {t:'def bmi_cal(height, weight): 에서 <b>weight</b>',short:'weight',c:0,ic:'📥',w:'정의에 있는 변수로, 전달받을 값을 저장해요.'},
    {t:'tri_area(b, h) 처럼 호출할 때 넘기는 <b>b</b>',short:'b',c:1,ic:'📤',w:'호출할 때 넘겨 주는 값이므로 인수예요.'},
    {t:'def square_area(side): 에서 <b>side</b>',short:'side',c:0,ic:'📥',w:'호출 때 받은 길이를 담아 두는 매개 변수예요.'},
    {t:'square_area(7) 에서 <b>7</b>',short:'7',c:1,ic:'📤',w:'실제로 전달하는 값이므로 인수예요.'},
  ],
  end:'<b>정리</b> 정의할 때 쓰는 변수는 <b>매개 변수</b>, 호출할 때 실제로 넘기는 값은 <b>인수</b>예요. 호출하면 인수가 매개 변수로 전달돼요.'
});

/* 02 인수 개수가 다를 때 (154쪽) */
pyrun('errRun', {rows:9, code:
"def add_number(a, b):\n  return a + b\n\nresult = add_number(1, 2, 3)\nprint(result)"});

/* 02 해 보기 3 BMI (157쪽) */
pyrun('bmiRun', {rows:12, stdin:'165 60', code:
"def bmi_cal(height, weight):\n  bmi_result = weight / (height ** 2)\n  return bmi_result\n\n"+
"print('키와 몸무게를 공백으로 구분하여 입력하세요(예:165 55)')\nh, w = map(float, input().split())\nh = h / 100\n"+
"bmi = bmi_cal(h, w)\nprint('당신의 BMI는 %.2f입니다.' % bmi)"});

/* 03 def와 lambda 비교 (149·156쪽) */
pyrun('cmpRun', {rows:12, code:
"# 일반 함수\ndef add_def(x, y):\n  return x + y\n\n"+
"# 람다 함수\nadd_lambda = lambda x, y: x + y\n\n"+
"print(add_def(2, 3))\nprint(add_lambda(2, 3))"});

/* 03 예제 2·해 보기 2 (156쪽) */
pyrun('concatRun', {rows:6, code:
"concat = lambda s1, s2: s1 + ' ' + s2\nresult = concat('파이썬', '프로그래밍')\nprint('문자열 합치기:', result)"});
pyrun('greetRun', {rows:6, code:
"greeting = lambda name, time: f'안녕하세요, {name}님. 좋은 {time}입니다.'\nresult = greeting('김미영', '아침')\nprint(result)"});

/* 04 해 보기 4 주사위 게임 (158쪽) — 난수 */
pyrun('diceRun', {rows:22, stdin:'은지 은호', code:
"import random\n\n"+
"# 1부터 6까지의 숫자를 무작위로 반환하는 함수\ndef sel_dice():\n  return random.randint(1, 6)\n\n"+
"# 승자 결정 게임\ndef dice_game(player1, player2):\n  p1 = sel_dice()\n  p2 = sel_dice()\n  print(f'{player1}의 주사위: {p1}')\n  print(f'{player2}의 주사위: {p2}')\n"+
"  if p1 > p2:\n    print(f'{player1} 승리!')\n  elif p1 < p2:\n    print(f'{player2} 승리!')\n  else:\n    print('무승부')\n\n"+
"print('게임에 참가할 두 명의 이름을 공백으로 구분하여 입력하세요(예: 길동 길순)')\nuser1, user2 = input().split()\ndice_game(user1, user2)"});

/* 04 읽을거리 재귀 함수 (159쪽) — 주석 위치 바로잡음 */
pyrun('facRun', {rows:10, code:
"def fac(n):\n  if n > 1:\n    return n * fac(n - 1)   # 재귀 호출: 자기 자신을 다시 부름\n  else:\n    return 1               # 종료 조건: n이 1 이하이면 1을 반환\n\n"+
"print('fac(3) =', fac(3))\nprint('fac(5) =', fac(5))"});

/* 05 핵심 기능 · 스스로 점검 */
chips('featPick','featPick',['함수 정의(def)','함수 호출','매개 변수와 반환값(return)','랜덤 모듈(random)','조건문(if)'],true);
chips('selfCheck','selfCheckPick',['함수의 개념·종류·필요성을 설명할 수 있다','함수를 정의하고 호출해 값을 반환할 수 있다','람다 함수를 정의하고 호출할 수 있다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['planProb','가위바위보 · 해결할 문제'],['planFunc','가위바위보 · 나눌 함수와 하는 일'],['planFlow','가위바위보 · 함수 호출 순서'],['featPick','고른 핵심 기능'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
