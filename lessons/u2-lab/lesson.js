/* 구구단 개념 조각: 난수와 isdigit (교과서 190쪽 주제) */
pyrun('guguRun', {code:"import random\nrandom.seed(2)\na = random.randint(2, 9)\nb = random.randint(1, 9)\nprint('문제:', a, 'x', b, '= ?')\nfor s in ['36', '가', '3.5', '']:\n  print(repr(s), '는 숫자만?', s.isdigit())"});

/* 정렬 개념 조각: 이웃한 두 값 비교·교환, 한 번 훑기 (192쪽 주제) */
pyrun('bubbleRun', {code:"a = [5, 2, 4, 1]\nprint('시작:', a)\nfor j in range(len(a) - 1):\n  if a[j] > a[j + 1]:\n    a[j], a[j + 1] = a[j + 1], a[j]\n  print(j, '번째 비교 후:', a)\nprint('한 번 훑은 뒤 맨 끝은', a[-1])"});

/* 탐색 개념 조각: 가운데 값과 비교해 범위 한 단계 줄이기 (193쪽 주제) */
pyrun('binRun', {code:"data = [3, 8, 15, 21, 30, 42, 57, 66, 80]\ntarget = 42\nleft = 0\nright = len(data) - 1\nmid = (left + right) // 2\nprint('범위', left, '~', right, '/ 가운데', mid, '번 값', data[mid])\nif data[mid] == target:\n  print('찾았다!')\nelif data[mid] < target:\n  left = mid + 1\n  print('오른쪽 절반만 남김 → 새 범위', left, '~', right)\nelse:\n  right = mid - 1\n  print('왼쪽 절반만 남김 → 새 범위', left, '~', right)"});

/* 자리 배치 개념 조각: shuffle과 2차원 리스트 (194쪽 주제) */
pyrun('shufRun', {code:"import random\nrandom.seed(7)\nnames = ['가', '나', '다', '라', '마', '바']\nrandom.shuffle(names)\nprint('섞은 뒤:', names)\nrows = [names[:3], names[3:]]\nprint('2차원 리스트:', rows)\nprint('둘째 줄 첫 칸:', rows[1][0])"});

/* 웹 추천 개념 조각: 딕셔너리와 choice (195쪽 주제) */
pyrun('dictRun', {code:"import random\nrandom.seed(3)\nmenu = {'한식': ['비빔밥', '김치찌개'], '분식': ['떡볶이', '김밥']}\nkind = random.choice(list(menu))\nprint('고른 종류:', kind)\nprint('추천:', random.choice(menu[kind]))"});

/* 비밀번호 개념 조각: choice로 글자 하나씩 뽑기 (197쪽 주제) */
pyrun('pwRun', {code:"import random\nrandom.seed(5)\nchars = 'abcdefghijklmnopqrstuvwxyz0123456789'\nfor i in range(5):\n  print(i + 1, '번째 글자:', random.choice(chars))"});

/* 시작 · 도전할 실습 고르기 */
chips('labPick','labPick',['1 구구단','2 타자','3 정렬','4 탐색','5 자리 배치','6 웹 추천','7 타이머','8 비밀번호'],true);
chips('selfCheck','selfCheckPick',['실습 주제마다 필요한 개념을 말할 수 있다','난수·리스트·딕셔너리를 어디에 쓰는지 안다','스스로 코드를 짜 볼 순서를 정할 수 있다'],true);

/* 마무리 */
const MEMOLIST=[['labPlan','나의 계획 · 도전하고 싶은 실습'],['labPick','고른 실습'],['idea1','구구단·타자 · 내 아이디어'],['idea2','정렬·탐색 · 내 아이디어'],['idea3','자리 배치·웹 추천 · 내 아이디어'],['idea4','타이머·비밀번호 · 내 아이디어'],['selfCheckPick','스스로 점검'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[5]=()=>memoSummary('msum',MEMOLIST);
