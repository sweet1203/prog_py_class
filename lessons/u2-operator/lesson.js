/* 0 시작 · 첫 실행 맛보기 */
pyrun('helloRun', {code:"print('3 + 4 =', 3 + 4)\nprint('7 // 2 =', 7 // 2)\nprint('7 % 2 =', 7 % 2)"});

/* 01 산술 연산자 표Ⅱ-8 (111쪽) */
flipCards('arFlip',[
  {ic:'➕',f:'7 + 4',b:'덧셈 → 11'},
  {ic:'✖️',f:'7 * 4',b:'곱셈 → 28'},
  {ic:'⬆️',f:'7 ** 4',b:'거듭제곱(7을 4번 곱함) → 2401'},
  {ic:'➗',f:'7 / 4',b:'나눗셈 → 1.75'},
  {ic:'🍰',f:'7 // 4',b:'나눗셈의 정수 몫 → 1'},
  {ic:'🧩',f:'7 % 4',b:'나눗셈의 나머지 → 3'},
]);
pyrun('arRun', {rows:9, code:"print(7 + 4)\nprint(7 - 4)\nprint(7 * 4)\nprint(7 ** 4)\nprint(7 / 4)\nprint(7 // 4)\nprint(7 % 4)"});

/* 01 초 → 분·초 (115쪽 해 보기 1) */
pyrun('secRun', {code:"sec = int(input('시간을 초 단위로 입력하세요: '))\nminutes = sec // 60\nseconds = sec % 60\nprint(f'{minutes}분 {seconds}초')", stdin:'3725'});

/* 01 ATM 지폐 계산 (116쪽 예제 1) */
pyrun('atmRun', {rows:10, code:"amount = int(input('출금할 금액을 입력하세요: '))\nprint(f'50,000원: {amount // 50000}장')\namount %= 50000\nprint(f'10,000원: {amount // 10000}장')\namount %= 10000\nprint(f'5,000원: {amount // 5000}장')\namount %= 5000\nprint(f'1,000원: {amount // 1000}장')", stdin:'98000'});

/* 02 연산자 분류 (표Ⅱ-8~10) */
sorter('opGame',{
  cats:[{n:'산술 연산자',k:'#1f9d74'},{n:'비교 연산자',k:'#2f6fd0'},{n:'논리 연산자',k:'#9b4fc4'}],
  items:[
    {t:'%',short:'%',c:0,ic:'🧩',w:'나눗셈의 나머지를 구하는 산술 연산자예요.'},
    {t:'**',short:'**',c:0,ic:'⬆️',w:'거듭제곱을 구하는 산술 연산자예요.'},
    {t:'//',short:'//',c:0,ic:'🍰',w:'나눗셈의 정수 몫을 구하는 산술 연산자예요.'},
    {t:'==',short:'==',c:1,ic:'🟰',w:'두 값이 같은지 비교하는 비교 연산자예요.'},
    {t:'!=',short:'!=',c:1,ic:'🚫',w:'두 값이 같지 않은지 비교하는 비교 연산자예요.'},
    {t:'<=',short:'<=',c:1,ic:'↙️',w:'작거나 같은지 비교하는 비교 연산자예요.'},
    {t:'and',short:'and',c:2,ic:'🤝',w:'논리곱이에요. 둘 다 참일 때만 참이에요.'},
    {t:'or',short:'or',c:2,ic:'🔀',w:'논리합이에요. 하나라도 참이면 참이에요.'},
    {t:'not',short:'not',c:2,ic:'🔄',w:'논리 부정이에요. 참과 거짓을 뒤집어요.'},
  ],
  end:'<b>정리</b> 숫자를 계산하면 <b>산술</b>(%·**·//), 두 값을 견줘 True/False를 내면 <b>비교</b>(==·!=·&lt;=), True/False끼리 조합하면 <b>논리</b>(and·or·not) 연산자예요.'
});

/* 02 비교 연산자 (112쪽) */
pyrun('cmpRun', {rows:8, code:"print(5 < 6)\nprint(5 > 6)\nprint(7 <= 7)\nprint(7 == 7)\nprint(7 != 7)\na = 10\nb = 20\nprint(5 < a < 15)\nprint(5 < b < 15)"});

/* 02 논리 연산자 (112쪽) */
pyrun('logRun', {rows:4, code:"print((4 > 1) and (3 > 5))  # True and False\nprint((4 > 1) or (3 > 5))   # True or False\nprint(not(3 != 3))          # not False"});

/* 02 아이디·비밀번호 (115쪽 해 보기 3) */
pyrun('loginRun', {rows:6, code:"id = 'user123'\npw = 'password456'\nuserid = input('아이디를 입력하세요: ')\npassword = input('패스워드를 입력하세요: ')\nprint('id, pw 모두 일치 여부:', userid == id and password == pw)", stdin:'user123\npassword456'});

/* 03 우선순위 (111쪽) */
pyrun('precRun', {rows:6, code:"print(3 + 2 * 5)      # 곱셈(*) 우선\nprint((3 + 2) * 5)    # 괄호 우선\nprint(4 * 2 ** 3)     # 거듭제곱(**) 우선\nprint((4 * 2) ** 3)   # 괄호 우선\nprint(2 ** 2 ** 3)    # 연산 방향: 오른쪽 → 왼쪽"});

/* 03 대입 연산자 (113쪽) */
pyrun('assignRun', {rows:6, code:"a = b = 5\na = a + 10 / 2\nb += 10 / 2\nprint(a)\nprint(b)"});


/* 04 math 모듈 (117쪽) */
pyrun('mathRun', {rows:8, code:"import math\nprint(math.pi)\nprint(math.sqrt(49))\nprint(math.fabs(-3.5))\nprint(math.gcd(12, 18))\nprint(49 ** 0.5)"});

/* 04 두 점 사이의 거리 (115쪽 해 보기 2) */
pyrun('distRun', {rows:8, code:"x1 = float(input('첫 번째 지점의 x 좌표: '))\ny1 = float(input('첫 번째 지점의 y 좌표: '))\nx2 = float(input('두 번째 지점의 x 좌표: '))\ny2 = float(input('두 번째 지점의 y 좌표: '))\n# 0.5를 제곱하여 제곱근 계산 <예> x의 제곱근 = x ** 0.5\ndistance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5\nprint(f'두 지점 사이의 거리는 {distance:.2f} 입니다.')", stdin:'1\n2\n4\n6'});

/* 04 평균·분산·표준편차 (117쪽 해 보기) */
pyrun('statRun', {rows:20, code:"import math\nnum1 = float(input('첫 번째 숫자 입력: '))\nnum2 = float(input('두 번째 숫자 입력: '))\nnum3 = float(input('세 번째 숫자 입력: '))\nnumbers = [num1, num2, num3]\n# 평균 계산\nmean = sum(numbers) / len(numbers)\n# 각 숫자와 평균의 차이를 제곱한 값의 합 계산\nsquared_diff_sum = (num1 - mean) ** 2 + (num2 - mean) ** 2 + (num3 - mean) ** 2\n# 분산 계산\nvariance = squared_diff_sum / len(numbers)\n# 표준편차 계산\nstd_deviation = math.sqrt(variance)\n# 결과 출력\nprint(f'입력된 숫자: {numbers}')\nprint(f'평균: {mean:.2f}')\nprint(f'분산: {variance:.2f}')\nprint(f'표준편차: {std_deviation:.2f}')", stdin:'65\n50\n77'});

/* 05 핵심 기능 · 스스로 점검 */
chips('featPick','featPick',['입력문·출력문','산술 연산자','거듭제곱(**)','대입 연산자','math 모듈'],true);
chips('selfCheck','selfCheckPick',['연산자의 종류와 기능을 설명할 수 있다','우선순위를 따져 식의 결과를 알 수 있다','연산자를 활용해 프로그램을 작성할 수 있다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['planProblem','복리 계산기 · 해결할 문제'],['planFormula','복리 계산기 · 공식을 파이썬 식으로'],['planOut','복리 계산기 · 출력 형식'],['featPick','고른 핵심 기능'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
