/* 0 시작 · 변수와 type() 맛보기 (85쪽) */
pyrun('helloRun', {code:`a = 10
print(a)
print(type(a))`});

/* 01 변수 재대입 (85쪽) */
pyrun('reRun', {code:`age = 14
print(age)
age = 15
age = 10.5
print(age)`});

/* 01 짱구·코난 소개 (86쪽 해 보기 1) */
pyrun('introRun', {rows:13, code:`name = '짱구'
height = 170
age = 16
hobby = '영화 감상'
print(name, '키는', height, ', 나이는', age, ', 취미는', hobby, '입니다.')

name = '코난'
height = 180.5
age = 14
hobby = '프로그래밍'
print(name, '키는', height, ', 나이는', age, ', 취미는', hobby, '입니다.')`});

/* 01 다중 대입 · split (86쪽 해 보기 2) */
pyrun('splitRun', {code:`name, height, age, hobby = input('이름, 키, 나이, 취미를 입력하세요: ').split()
print(f'{name} 키는 {height}, 나이는 {age}, 취미는 {hobby} 입니다.')`, stdin:'홍길동 170 16 영화감상'});

/* 02 자료형 분류 */
sorter('typeGame',{
  cats:[{n:'정수 int',k:'#1f9d74'},{n:'실수 float',k:'#2f6fd0'},{n:'문자열 str',k:'#e0702b'},{n:'불 bool',k:'#9b4fc4'}],
  items:[
    {t:'27',short:'27',c:0,ic:'🔢',w:'소수점이 없는 숫자는 정수(int)예요.'},
    {t:'-100',short:'-100',c:0,ic:'➖',w:'음수라도 소수점이 없으면 정수(int)예요.'},
    {t:'3.14',short:'3.14',c:1,ic:'📏',w:'소수점이 있는 숫자는 실수(float)예요.'},
    {t:'3.2e-5',short:'3.2e-5',c:1,ic:'🔬',w:'지수 표현(3.2×10의 -5제곱)도 실수(float)예요.'},
    {t:"'100'",short:"'100'",c:2,ic:'🔤',w:'따옴표로 감싸면 숫자처럼 보여도 문자열(str)이에요.'},
    {t:"'Python'",short:"'Python'",c:2,ic:'🐍',w:'글자의 나열은 문자열(str)이에요.'},
    {t:'True',short:'True',c:3,ic:'✅',w:'참·거짓 값은 불(bool)이에요. 첫 글자를 대문자로 써요.'},
    {t:'10 < 20',short:'10 < 20',c:3,ic:'⚖️',w:'비교한 결과는 True 또는 False라서 불(bool)이에요.'},
  ],
  end:'<b>정리</b> 값의 모양으로 자료형이 자동으로 정해져요. 소수점이 없으면 <b>int</b>, 있으면 <b>float</b>, 따옴표로 감싸면 <b>str</b>, 참·거짓이면 <b>bool</b>이에요.'
});

/* 02 숫자형 (88쪽) */
pyrun('numRun', {rows:10, code:`a = 6
b = 1.5
c = 1 + 2j
print(a, type(a))
print(b, type(b))
print(c, type(c))
print(a + 1, type(a + 1))  # 정수 + 정수 = 정수
print(a / b, type(a / b))  # 정수 / 실수 = 실수
print(a / 2, type(a / 2))  # 정수 / 정수 = 실수`});

/* 02 불형 (89쪽) */
pyrun('boolRun', {rows:10, code:`a = 'Hello'
b = ''
c = 10
d = 0
print(bool(a))
print(bool(b))
print(bool(c))
print(bool(d))`});

/* 02 문자열형과 연산 (90쪽) */
pyrun('strRun', {rows:9, code:`a = 'hello '
b = 'world'
print(a + b)
print(a * 3)
print(a < b)
print('h' in a)
print('wor' not in b)`});

/* 02 자료형 전환 · 지어낸 확장 */
pyrun('castRun', {rows:8, code:`s = '100'
n = int(s)
print(type(s), type(n))
print(n + 1)
print(float(n), str(n) + '원')`});

/* 03 인덱싱·슬라이싱 (91쪽) */
pyrun('sliceRun', {rows:9, code:`a = 'Hello Python'
print(a[0])
print(a[6])
print(a[-1])
print(a[0:5])
print(a[6:])
print(a[6:-4])
print(a[0:9:2])`});

/* 03 주민등록번호 슬라이싱 (93쪽 해 보기 2-1) · 가짜 예시 번호 */
pyrun('juminRun', {code:`jumin = input('주민등록번호 입력: ')
print('연: 20' + jumin[0:2] + '년')
print('월: ' + jumin[2:4] + '월')
print('일: ' + jumin[4:6] + '일')`, stdin:'101015-1234567'});

/* 03 암호문 (93쪽 해 보기 2-2) */
pyrun('cryptRun', {code:`original = input('평문 입력: ')
encryption1 = original[::-1]
encryption2 = encryption1.replace('e', '3').replace('o', '0').replace('l', '1')
print('암호문: ' + encryption2)`, stdin:'hello world'});

/* 03 문자열 메소드 (92쪽) */
flipCards('methFlip',[
  {ic:'🔠',f:'.upper( )',b:'모두 대문자로 바꿔요.'},
  {ic:'🔡',f:'.lower( )',b:'모두 소문자로 바꿔요.'},
  {ic:'✂️',f:'.strip( )',b:'양쪽 여백(공백)을 없애요.'},
  {ic:'🔍',f:'.find( )',b:'찾는 글자의 인덱스를 알려 줘요. 없으면 -1이에요.'},
  {ic:'🔁',f:'.replace( )',b:'특정 문자열을 다른 문자열로 바꿔요.'},
  {ic:'🧩',f:'.split( )',b:'구분자(생략하면 공백)로 나눠 리스트로 만들어요.'},
]);
pyrun('methRun', {rows:8, code:`s = ' hello PYTHON  '
print(len(s))
print(s.upper())
print(s.strip())
print(s.count('l'))
print(s.find('h'))
print(s.split())`});

/* 04 리스트 만들기·인덱싱 (94·95쪽) */
pyrun('listRun', {rows:10, code:`a = [10, 20, 30, ['a', 'b', 'c']]
b = [10, 2.5, 'hello']
print(a[0])
print(a[-1])
print(a[3][0])
print(a[1:3])
print(b, type(b))
print(len(b))`});

/* 04 리스트 값 변경 (96쪽) */
pyrun('editRun', {rows:12, code:`lst = [1, 2]
lst.append(3)
print(lst)
lst.insert(1, 'a')
print(lst)
lst.extend([4, 5])
print(lst)
lst.remove(1)
print(lst)
lst.pop()
print(lst)`});

/* 04 평균 기온 (98쪽 해 보기 3) */
pyrun('tempRun', {rows:10, code:`avg_temp = [0, 1, 5, 9, 15, 20, 25, 24, 19, 14]
avg_temp.append(int(input('11월 평균 기온: ')))
avg_temp.append(int(input('12월 평균 기온: ')))
avg_temp.sort()     # 오름차순 정렬
second_hot = avg_temp[-2]
print('가장 낮은 평균 기온:', min(avg_temp))
print('2번째로 높은 평균 기온:', second_hot)`, stdin:'8\n3'});

/* 04 튜플과 언패킹 (99쪽) */
pyrun('tupleRun', {rows:10, code:`red = (255, 0, 0)
b = (5,)
print(red, type(red))
print(b, type(b))
print(red * 2)
print(red[0])
a, c, d = (1, 2, 3)
print(a, c, d)
red[0] = 100   # 오류 확인`});

/* 05 스스로 해결하기 · 뼈대 */
pyrun('selfRun', {rows:9, code:`name = '나의 이름'
height = 0       # 나의 키로 바꿔 보기
hobby = '나의 취미'
print(name, '키는', height, ', 취미는', hobby, '입니다.')
print(type(name), type(height))
print(name[0])`});
chips('selfCheck','selfCheckPick',['변수에 값을 저장하고 다시 저장할 수 있다','자료형의 종류와 type( )을 설명할 수 있다','문자열을 슬라이싱하고 메소드로 다룰 수 있다','리스트에 값을 추가·정렬하고 인덱스로 꺼낼 수 있다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['reflVar','스스로 해결 · 내가 만든 변수와 값'],['reflType','스스로 해결 · 자료형이 달라 헷갈린 점'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
