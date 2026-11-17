/* 0 시작 · 첫 실행 맛보기 */
pyrun('helloRun', {code:"fruits = ['사과', '배', '포도']\nprint(fruits)\nprint(len(fruits), '개 들어 있어요')"});

/* 01 리스트 · 튜플 (교과서 103쪽 정보·109쪽 정리 설명 기반 예시) */
pyrun('listRun', {code:"fruits = ['사과', '배', '포도']\nprint(fruits[0])       # 인덱스는 0부터\nprint(fruits[-1])      # 맨 뒤 요소\nprint(fruits[0:2])     # 슬라이싱\nfruits[1] = '귤'       # 요소 바꾸기\nprint(fruits)"});
pyrun('tupleRun', {code:"fruits = ('사과', '배', '포도')\nprint(fruits[0])\nprint(fruits[0:2])\n# 아래 줄 맨 앞의 #을 지우고 실행하면 어떻게 될까?\n# fruits[1] = '귤'\nprint(fruits)"});

/* 01 컨테이너 자료형 분류 */
sorter('typeSort',{
  cats:[{n:'리스트',k:'#2f6fd0'},{n:'튜플',k:'#e0702b'},{n:'딕셔너리',k:'#1f9d74'},{n:'집합',k:'#9b4fc4'}],
  items:[
    {t:"[ ]로 만들고 요소를 바꿀 수 있는 자료형",short:'[ ] · 변경 가능',c:0,ic:'📋',w:'리스트는 [값, 값]으로 만들고 요소를 바꿀 수 있어요.'},
    {t:"( )로 만들고 한 번 만들면 요소를 바꿀 수 없는 자료형",short:'( ) · 변경 불가',c:1,ic:'🔒',w:'튜플은 (값, 값)으로 만들고 요소를 바꿀 수 없어요.'},
    {t:"{키: 값} 쌍으로 저장하고 키로 값을 찾는 자료형",short:'키-값 쌍',c:2,ic:'📖',w:'딕셔너리는 키와 값을 콜론으로 묶어 저장해요.'},
    {t:"같은 값을 하나만 저장하고 교집합·합집합을 구할 수 있는 자료형",short:'중복 없음',c:3,ic:'🧺',w:'집합은 중복을 허용하지 않고 수학의 집합 연산을 할 수 있어요.'},
    {t:"0부터 번호(인덱스)가 있고 같은 값이 여러 번 들어갈 수 있으며 요소를 바꿀 수 있는 자료형",short:'인덱스 · 변경 가능',c:0,ic:'🔢',w:'리스트는 인덱스가 있고 중복을 허용하며 요소를 바꿀 수 있어요.'},
    {t:"인덱스가 있어 a[0]으로 꺼내 볼 수 있지만 a[0] = 5로 바꾸면 오류가 나는 자료형",short:'바꾸면 오류',c:1,ic:'⛔',w:'튜플은 요소를 바꿀 수 없어서 값을 넣으려 하면 오류가 나요.'},
    {t:"키는 바꿀 수 없는 자료형만 쓰고 값은 어떤 자료형이든 되는 자료형",short:'키 불변 · 값 자유',c:2,ic:'🔑',w:'딕셔너리의 키는 숫자·문자열·튜플처럼 바꿀 수 없는 것만 쓸 수 있어요.'},
    {t:"순서가 없어서 인덱싱과 슬라이싱을 쓸 수 없는 자료형",short:'순서 없음',c:3,ic:'🌀',w:'집합은 값의 순서가 없어서 인덱싱·슬라이싱을 지원하지 않아요.'},
  ],
  end:'<b>정리</b> 리스트·튜플은 순서(인덱스)가 있는 <b>시퀀스</b>, 딕셔너리는 <b>키로 값</b>을 찾고, 집합은 <b>중복 없이</b> 저장해요.'
});

/* 02 딕셔너리 만들기 (100쪽) */
pyrun('dictMakeRun', {rows:8, code:"a = { }                 # 공백 딕셔너리\nb = {88: 'seoul', 24: 'paris', 'num': [10, 20]}\nc = {'name': 'kim', 'name': 'lee'}\nprint(a, type(a))\nprint(len(b))           # 키와 값 쌍의 개수\nprint(b[88])\nprint(c['name'])        # 키 중복(마지막 값만 저장됨)"});

/* 02 값 변경·추가·삭제 (100쪽) */
pyrun('dictEditRun', {code:"a = {88: 'london', 20: 'tokyo'}\na[88] = 'seoul'     # 있는 키 → 값 수정\na[24] = 'paris'     # 없는 키 → 새 요소 추가\ndel a[20]           # 키로 요소 삭제\nprint(a)"});

/* 02 해 보기 4 메뉴 (101쪽) */
pyrun('menuRun', {rows:8, code:"menu = {'burger': 5000, 'pizza': 8000, 'pasta': 7000}\nmenu['pizza'] = 8500                 # 수정\nmenu['chicken'] = 10000              # 추가\ndel menu['pasta']                    # 삭제\nprint(menu)\nprint('가격 역순 정렬:', sorted(menu.values(), reverse=True))  # 값 역순 정렬"});

/* 02 메소드 (101쪽 표Ⅱ-5) */
pyrun('dicMethodRun', {rows:10, code:"dic = {'grape': '포도', 'apple': '사과'}\nprint(dic.keys())\nprint(dic.values())\nprint(dic.items())\nprint(sorted(dic))               # 키 기준 정렬\nprint('apple' in dic)            # 키 기준 포함 확인\nprint(dic.get('apple'))\nprint(dic.get('melon'))          # 없는 키 → None\nprint(dic.get('melon', '없음'))  # 없는 키 → 지정한 값"});

/* 03 집합 기본 (102쪽) */
pyrun('setBasicRun', {code:"a = set()             # 빈 집합 (그냥 { }는 빈 딕셔너리)\ns1 = {3, 2, 2}        # 중복 요소 포함\ns2 = {9, 1, 3}\nprint(a, type(a))\nprint(s1)             # 중복 제거\nprint(s2)\nprint(s1 & s2)        # 교집합\nprint(s1 | s2)        # 합집합\nprint(s1 - s2)        # 차집합"});

/* 03 해 보기 5 쇼핑 목록 (103쪽) */
pyrun('shopRun', {rows:6, code:"list1 = ['우유', '빵', '버터', '빵', '치즈', '과자', '우유']\nlist2 = ['빵', '과일', '야채', '버터', '우유', '커피']\nprint('리스트1 항목(중복 제거):', set(list1))\nprint('리스트1,2 공통 항목:', set(list1) & set(list2))"});

/* 04 해 보기 6 단어 목록 (104쪽) */
pyrun('wordsRun', {rows:14, stdin:"The more that you read, the more things you will know.\nThe more you learn, the more you earn.\nThe more you practice, the better you get.", code:"sentence1 = input('첫 번째 영어 문장을 입력하세요: ')\nsentence2 = input('두 번째 영어 문장을 입력하세요: ')\nsentence3 = input('세 번째 영어 문장을 입력하세요: ')\ntext = sentence1 + ' ' + sentence2 + ' ' + sentence3  # 하나로 결합\ntext = text.replace(',', '').replace('.', '')         # 쉼표(,)와 점(.) 제거\ntext = text.lower()                                   # 소문자로 변환\nwords = text.split()                                  # 공백 기준으로 단어 분리(리스트)\nunique_words = set(words)                             # 집합으로 변환(중복 제거)\nsorted_unique_words = sorted(unique_words)            # 순서대로 정렬\nprint('\\n단어 목록')\nprint(sorted_unique_words)"});

/* 04 sort와 sort() 차이 */
pyrun('sortRun', {code:"a = [3, 1, 2]\na.sort            # 괄호 없음 → 실행되지 않음\nprint(a)\na.sort()          # 괄호 있음 → 정렬됨\nprint(a)"});

/* 04 해 보기 7 추첨 (105쪽, winners.sort → winners.sort() 정정) */
pyrun('drawRun', {rows:14, stdin:"브레드\n윌크\n버터\n초코\n소시지\n2", code:"import random\ncandidates = [ ]          # 빈 리스트 생성\ncandidates.append(input('첫 번째 후보의 이름을 입력하세요: '))\ncandidates.append(input('두 번째 후보의 이름을 입력하세요: '))\ncandidates.append(input('세 번째 후보의 이름을 입력하세요: '))\ncandidates.append(input('네 번째 후보의 이름을 입력하세요: '))\ncandidates.append(input('다섯 번째 후보의 이름을 입력하세요: '))\nprint('후보자', candidates)\nprint()\nnum_winners = int(input('뽑을 당첨자 수를 입력하세요: '))\nwinners = random.sample(candidates, num_winners)   # 중복 없이 뽑기\nwinners.sort()                                     # 당첨자 정렬 (괄호 필요!)\nprint('당첨자:', winners)"});

/* 05 스스로 해결하기: dict.get 아이디어 (재고 완성 코드 아님) */
pyrun('getRun', {rows:9, code:"votes = {}                       # 급식 메뉴 투표 집계\nmenu = '라면'\nvotes[menu] = votes.get(menu, 0) + 1   # 없으면 0에서 시작\nmenu = '돈가스'\nvotes[menu] = votes.get(menu, 0) + 1\nmenu = '라면'\nvotes[menu] = votes.get(menu, 0) + 1\nprint(votes)"});

chips('typePick','typePick',['리스트','튜플','딕셔너리','집합'],true);
chips('featPick','featPick',['입출력 함수','딕셔너리 get( )','딕셔너리 키로 값 바꾸기','정렬 sorted( )'],true);
chips('selfCheck','selfCheckPick',['리스트·튜플·딕셔너리·집합의 특징을 구분할 수 있다','딕셔너리 값을 수정·추가·삭제할 수 있다','집합으로 중복 제거와 교집합을 구할 수 있다'],true);

const MEMOLIST=[['planLearn','나의 계획 · 컬렉션에서 알고 싶은 것'],['invFlow','재고 관리 · 문제 해결 순서'],['invIdea','재고 관리 · 딕셔너리를 쓰는 까닭'],['typePick','재고 관리에 어울리는 자료형'],['featPick','고른 핵심 기능'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
