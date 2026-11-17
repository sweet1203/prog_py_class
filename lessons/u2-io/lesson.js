
/* 0 시작 · 첫 실행 맛보기 */
pyrun('helloRun', {code:"print('안녕하세요! 파이썬이 잘 돌아가요.')\nprint('3 + 7 =', 3 + 7)"});

/* 01 입력 장치 / 출력 장치 분류 (73쪽 표Ⅱ-1) */
sorter('devGame',{
  cats:[{n:'입력 장치',k:'#1f9d74'},{n:'출력 장치',k:'#2f6fd0'}],
  items:[
    {t:'키보드',short:'키보드',c:0,ic:'⌨️',w:'글자·명령을 컴퓨터 안으로 전달하는 입력 장치예요.'},
    {t:'마우스',short:'마우스',c:0,ic:'🖱️',w:'위치·클릭을 입력하는 입력 장치예요.'},
    {t:'스캐너',short:'스캐너',c:0,ic:'🖨️',w:'종이의 내용을 읽어 컴퓨터로 넣는 입력 장치예요.'},
    {t:'마이크',short:'마이크',c:0,ic:'🎤',w:'소리를 받아들이는 입력 장치예요.'},
    {t:'모니터',short:'모니터',c:1,ic:'🖥️',w:'결과를 빛(화면)으로 보여 주는 출력 장치예요.'},
    {t:'스피커',short:'스피커',c:1,ic:'🔊',w:'결과를 소리로 내보내는 출력 장치예요.'},
    {t:'프린터',short:'프린터',c:1,ic:'🧾',w:'결과를 종이에 인쇄해 보여 주는 출력 장치예요.'},
    {t:'빔프로젝터',short:'빔프로젝터',c:1,ic:'📽️',w:'결과를 큰 화면에 비추는 출력 장치예요.'},
  ],
  end:'<b>정리</b> 데이터를 컴퓨터 <b>안으로</b> 넣으면 입력 장치(키보드·마우스·스캐너·마이크), 결과를 <b>밖으로</b> 보여 주면 출력 장치(모니터·스피커·프린터·빔프로젝터)예요.'
});

/* 01 두 수의 합 (73쪽) */
pyrun('sumRun', {code:"num1 = int(input('첫 번째 수: '))\nnum2 = int(input('두 번째 수: '))\nsum_result = num1 + num2\nprint('두 수의 합은:', sum_result)", stdin:'5\n6'});

/* 02 print() 기본 (74쪽) */
pyrun('printRun', {code:"print('재미있는 프로그래밍')\nprint(3 + 7)\nprint('3 + 7')\nprint(10, 20, 30, '정보', '프로그래밍')\nprint('파이썬고등학교', '2학년', '홍길동')\nprint('BMI:', 60 / (170 * 170) * 10000)"});

/* 02 이스케이프 문자 카드 (77쪽) */
flipCards('escFlip',[
  {ic:'↩️',f:'\\n',b:'줄 바꿈 — 여기서 다음 줄로 넘어가요.'},
  {ic:'➡️',f:'\\t',b:'탭 — 탭만큼 간격을 띄워요(표처럼 정렬할 때).'},
  {ic:'🔙',f:'\\\\',b:'역슬래시(\\)를 글자 그대로 출력해요.'},
  {ic:'❜',f:"\\'",b:"작은따옴표(')를 글자 그대로 출력해요."},
  {ic:'❞',f:'\\"',b:'큰따옴표(")를 글자 그대로 출력해요.'},
]);

/* 02 이스케이프로 표처럼 출력 (77쪽 해 보기 2) */
pyrun('escRun', {code:"print('품목\\t\\t가격\\t\\t개수')\nprint('사과\\t\\t2,000\\t\\t8')\nprint('바나나\\t\\t3,000\\t\\t5')"});

/* 03 input() (78쪽) */
pyrun('inputRun', {code:"a = input('이름: ')\nb = input('나이: ')\nprint(a, '님 안녕하세요?')\nprint(20 - int(b), '년 후면 20살이시네요!')", stdin:'홍길동\n17'});

/* 03 문자열 그대로 더하기 vs 형 변환 (79쪽) */
pyrun('strAddRun', {code:"a = input('입력1: ')\nb = input('입력2: ')\nprint(f'출력: {a + b}')", stdin:'12\n34'});
pyrun('intAddRun', {code:"a = int(input('입력1: '))\nb = int(input('입력2: '))\nprint(f'출력: {a + b}')", stdin:'12\n34'});

/* 03 split() (78쪽 Tip) */
pyrun('splitRun', {code:"a, b = input('이름과 나이를 띄어 입력: ').split()\nprint(a, b)", stdin:'홍길동 17'});

/* 04 f-문자열 세 방식 (76쪽) */
pyrun('fstrRun', {code:"print('현재 온도는 %d도 입니다.' % 20)\nprint('현재 온도는 {}도 입니다.'.format(20))\nprint(f'현재 온도는 {20}도 입니다.')"});

/* 04 정렬 지정 (81쪽) */
pyrun('alignRun', {code:"e = 'hi'\nprint('0123456789')\nprint(f'{e:>10}')\nprint(f'{e:<10}')\nprint(f'{e:^10}')"});

/* 04 회전 초밥 영수증 (81쪽 해 보기 5) */
pyrun('sushiRun', {rows:16, stdin:'2\n3\n1\n2', code:
"red_price = 1000\nyellow_price = 2000\nblue_price = 3000\ngreen_price = 4000\n\n"+
"red_count = int(input('빨간색 접시의 개수: '))\nyellow_count = int(input('노란색 접시의 개수: '))\n"+
"blue_count = int(input('파란색 접시의 개수: '))\ngreen_count = int(input('초록색 접시의 개수: '))\n\n"+
"red_total = red_price * red_count\nyellow_total = yellow_price * yellow_count\n"+
"blue_total = blue_price * blue_count\ngreen_total = green_price * green_count\n"+
"total_price = red_total + yellow_total + blue_total + green_total\n\n"+
"print('===== 회전 초밥 영수증 =====')\n"+
"print(f'{\"접시\":<6}{\"단가\":<8}{\"개수\":<6}{\"합계\":<8}')\n"+
"print(f'{\"빨간색\":<6}{red_price:<8,}{red_count:<6}{red_total:<8,}')\n"+
"print(f'{\"노란색\":<6}{yellow_price:<8,}{yellow_count:<6}{yellow_total:<8,}')\n"+
"print(f'{\"파란색\":<6}{blue_price:<8,}{blue_count:<6}{blue_total:<8,}')\n"+
"print(f'{\"초록색\":<6}{green_price:<8,}{green_count:<6}{green_total:<8,}')\n"+
"print(f'{\"총 가격\":<6}{\"\":<8}{\"\":<6}{total_price:<8,}')\n"+
"print('============================')"});

/* 05 핵심 기능 · 스스로 점검 */
chips('featPick','featPick',['input( ) 함수','print( ) 함수','자료형 변환(int·float)','서식 지정 출력'],true);
chips('selfCheck','selfCheckPick',['입력과 출력의 기능을 설명할 수 있다','형식을 지정해 입력·출력할 수 있다','형 변환이 필요한 이유를 안다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['planInput','적금 계산기 · 입력받을 값'],['planCalc','적금 계산기 · 계산할 것'],['planOut','적금 계산기 · 출력 형식'],['featPick','고른 핵심 기능'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
