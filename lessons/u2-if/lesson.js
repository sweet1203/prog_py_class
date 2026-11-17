/* 01 순차 구조 · 페트병 보상 (123쪽 해 보기 1) */
pyrun('petRun', {stdin:'5', code:
`fee = 300
print(f'안녕하세요. 오늘의 투명색 페트병 금액은 {fee}원입니다.')
num = int(input('넣으실 투명색 페트병 개수를 입력해 주세요: '))    # 입력받기
total = fee * num # 금액계산
print(f'넣으신 페트병 개수는 {num}개, 총금액은 {total}원입니다.')  # 출력
print('아래에서 나오는 돈을 받아 주십시오.')
print('환경 보호에 동참해 주셔서 감사합니다.')
print('좋은 하루 보내세요.')`});

/* 02 if 문 (124쪽 · 125쪽) */
pyrun('ifAgeRun', {stdin:'18', code:
`age = int(input('나이를 입력하세요: '))
if age >= 18:
  print('성인입니다.')`});

pyrun('ifPosRun', {stdin:'1', code:
`num = int(input('정수 입력?'))
if num > 0:
  print('ok')     # 참인 경우만 실행
print('end')`});

pyrun('timeRun', {stdin:'3\n30', rows:8, code:
`hour = int(input('시간을 입력하세요: '))
minute = int(input('분을 입력하세요: '))
france_hour = hour - 7 # 시차 계산
if france_hour < 0:
  france_hour += 24 # 시간이 음수인 경우 24h단위로 계산
print('우리나라 시간은 %d시 %d분입니다.'%(hour,minute))
print('프랑스 시간은 %d시 %d분입니다.' %(france_hour,minute))`});

/* 03 if ~ else 문 (126·127쪽) */
pyrun('evenRun', {stdin:'7', code:
`num = int(input('정수를 입력하세요: '))
if num % 2 == 0:                  # 짝수인지 판단하는 조건식
  print('짝수')                    # 조건식이 참인 경우 실행
else:
  print('홀수')                    # 조건식이 거짓인 경우 실행`});

pyrun('leapRun', {stdin:'2028', code:
`year = int(input('연도를 입력하세요: '))
if((year%4 == 0) and (year % 100 != 0)) or (year % 400 == 0):  # 윤년 판단 조건식
  print(year, '년은 윤년입니다.')
else:
  print(year, '년은 윤년이 아닙니다.')`});

pyrun('cardRun', {stdin:'18', rows:7, code:
`age = int(input('나이를 입력하세요: '))
if age <= 18: # 조건식 결과가 참인 경우
  print('어린이/청소년 교통 카드가 발급됩니다.')
  print('교통 요금이 할인됩니다.')
else: # 조건식 결과가 거짓인 경우
  print('성인 교통 카드가 발급됩니다.')
  print('일반 교통 요금이 적용됩니다.')`});

/* 04 if ~ elif ~ else 문 (128~130쪽) */
pyrun('seasonRun', {stdin:'5', rows:9, code:
`month = int(input('월을 입력하세요: '))
if month // 3 == 1:      # 3을 정수로 나누기 한 연산 결과로 계절을 판단하는 조건식
  print('봄')
elif month // 3 == 2:    # if ~ elif 문을 사용하여 사계절의 조건 구분하기
  print('여름')
elif month // 3 == 3:
  print('가을')
else:
  print('겨울')`});

pyrun('rangeRun', {stdin:'13', rows:11, code:
`month = int(input('월을 입력하세요: '))
if 12 < month or month < 1:
  print('입력이 잘못되었습니다.')
elif month // 3 == 1:
  print('봄')
elif month // 3 == 2:
  print('여름')
elif month // 3 == 3:
  print('가을')
else:
  print('겨울')`});

pyrun('scoreRun', {stdin:'85', rows:11, code:
`jumsu = int(input('정보 점수를 입력하세요: '))
if jumsu >= 90:                # 조건식 설정
  print('성취도 결과:','A') # 성취도 결과 출력
elif jumsu >= 80:
  print('성취도 결과:','B')
elif jumsu >= 70:
  print('성취도 결과:','C')
elif jumsu >= 60:
  print('성취도 결과:','D')
else:
  print('성취도 결과:','F')`});

/* 04 조건 순서 비교 (130쪽 Tip을 확인해 보는 예시 · 고쳐 쓴 코드) */
pyrun('orderRun', {stdin:'95', rows:11, code:
`jumsu = int(input('정보 점수를 입력하세요: '))
if jumsu >= 60:
  print('성취도 결과:','D')
elif jumsu >= 70:
  print('성취도 결과:','C')
elif jumsu >= 80:
  print('성취도 결과:','B')
elif jumsu >= 90:
  print('성취도 결과:','A')
else:
  print('성취도 결과:','F')`});

/* 05 스스로 해결하기 · 알맞은 구조 고르기 */
sorter('structGame',{
  cats:[{n:'if 문',k:'#1f9d74'},{n:'if ~ else 문',k:'#2f6fd0'},{n:'if ~ elif ~ else 문',k:'#e0702b'}],
  items:[
    {t:'나이가 18 이상이면 「성인입니다.」를 출력하고, 아니면 아무것도 하지 않는다',short:'18 이상이면 성인 출력',c:0,ic:'🧑',w:'거짓일 때 할 일이 없으니 else가 없는 if 문이면 충분해요.'},
    {t:'시간이 0보다 작으면 24를 더해 바로잡는다',short:'0보다 작으면 24 더하기',c:0,ic:'🕒',w:'조건이 참일 때만 값을 고치면 되니 if 문 하나로 돼요.'},
    {t:'정수가 짝수이면 「짝수」, 아니면 「홀수」를 출력한다',short:'짝수·홀수 구분',c:1,ic:'🔢',w:'두 갈래 중 하나를 고르는 상황이라 if ~ else 문이에요.'},
    {t:'나이가 18 이하이면 청소년 카드, 그 밖이면 성인 카드를 발급한다',short:'청소년·성인 카드',c:1,ic:'🚌',w:'두 가지로 나뉘는 상황이라 if ~ else 문이에요.'},
    {t:'점수에 따라 A, B, C, D, F 다섯 가지 중 하나를 출력한다',short:'점수 → A~F',c:2,ic:'📝',w:'갈래가 셋 이상이라 elif를 여러 개 쓰는 if ~ elif ~ else 문이에요.'},
    {t:'월에 따라 봄, 여름, 가을, 겨울 중 하나를 출력한다',short:'월 → 사계절',c:2,ic:'🍂',w:'갈래가 넷이라 if ~ elif ~ else 문으로 나눠요.'},
  ],
  end:'<b>정리</b> 참일 때만 할 일이 있으면 <b>if</b>, 두 갈래면 <b>if ~ else</b>, 세 갈래 이상이면 <b>if ~ elif ~ else</b>를 써요.'
});
chips('selfCheck','selfCheckPick',['순차·선택·반복 구조를 구분할 수 있다','if 문으로 참일 때만 실행하는 코드를 쓸 수 있다','if ~ else 문으로 두 갈래를 나눌 수 있다','if ~ elif ~ else 문으로 여러 갈래를 나눌 수 있다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['clubRule','동아리 가입 · 정한 조건'],['clubIn','동아리 가입 · 입력받을 값'],['clubStruct','동아리 가입 · 고른 구조와 이유'],['clubOut','동아리 가입 · 참·거짓일 때 출력'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
