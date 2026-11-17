
/* 0 시작 · 첫 실행 맛보기 */
pyrun('helloRun', {code:"print('안녕하세요! 파이썬이 잘 돌아가요.')\nprint('3 + 7 =', 3 + 7)"});

/* 01 파일 유형 분류 (164~165쪽) */
sorter('fileGame',{
  cats:[{n:'텍스트 파일',k:'#1f9d74'},{n:'이진 파일',k:'#2f6fd0'}],
  items:[
    {t:'메모 (.txt)',short:'.txt',c:0,ic:'📝',w:'순수한 글자로 된 텍스트 파일이에요. 메모장으로 열어 읽을 수 있어요.'},
    {t:'표 데이터 (.csv)',short:'.csv',c:0,ic:'📊',w:'쉼표로 구분한 값을 글자로 저장한 텍스트 파일이에요.'},
    {t:'교환 데이터 (.json)',short:'.json',c:0,ic:'🧩',w:'구조화된 데이터를 글자로 저장하는 텍스트 파일이에요.'},
    {t:'프로그램 코드 (.py)',short:'.py',c:0,ic:'🐍',w:'프로그램 코드 파일도 글자로 되어 있어 텍스트 파일에 속해요.'},
    {t:'사진 (.jpg)',short:'.jpg',c:1,ic:'🖼️',w:'이미지 데이터를 이진 형태로 저장한 이진 파일이에요.'},
    {t:'음악 (.mp3)',short:'.mp3',c:1,ic:'🎵',w:'소리 데이터를 이진 형태로 저장한 이진 파일이에요.'},
    {t:'동영상 (.avi)',short:'.avi',c:1,ic:'🎞️',w:'영상 데이터를 이진 형태로 저장한 이진 파일이에요.'},
    {t:'데이터 (.bin)',short:'.bin',c:1,ic:'💾',w:'특정 프로그램이나 기계가 쓰는 이진 데이터 파일이에요.'},
  ],
  end:'<b>정리</b> 글자로 되어 사람이 읽을 수 있으면 <b>텍스트 파일</b>(.txt·.csv·.json·코드), 숫자·그림·소리처럼 이진 형태로 저장되어 사람이 직접 읽을 수 없으면 <b>이진 파일</b>(.jpg·.mp3·.avi·.bin)이에요.'
});

/* 01 열기→처리→닫기 순서 (166쪽 그림Ⅱ-9) */
flipCards('stepFlip',[
  {ic:'📂',f:'① 파일 열기',b:"open(파일명, 모드) — 어떤 용도(r·w·a)로 열지 정해요."},
  {ic:'✍️',f:'② 쓰기 / 읽기',b:'write( )·writelines( )로 쓰거나, read( )·readline( )으로 읽어요.'},
  {ic:'🔒',f:'③ 파일 닫기',b:'close( )로 닫아요. 안 닫으면 데이터가 제대로 기록되지 않을 수 있어요.'},
]);

/* 02 쓰고 바로 읽기 (167~168쪽) */
pyrun('wrRun', {rows:9, code:
"# 쓰기 모드('w')로 열어 한 줄 쓰기\n"+
"file = open('example.txt', 'w')\n"+
"file.write('10201 박○영 010-3421-0987')\n"+
"file.close()\n\n"+
"# 읽기 모드('r')로 다시 열어 확인하기\n"+
"file = open('example.txt', 'r')\n"+
"print(file.read())\n"+
"file.close()"});

/* 02 w와 a 차이 (168쪽) */
pyrun('waRun', {rows:26, code:String.raw`lines = ['10101 김○수 010-1234-1234',
         '\n10102 김○지 010-4321-4321']

# 1) 'w' : 처음부터 새로 쓰기
file = open('example.txt', 'w')
file.writelines(lines)
file.close()
print('--- w로 쓴 뒤 ---')
file = open('example.txt', 'r')
print(file.read())
file.close()

# 2) 'a' : 끝에 이어서 쓰기
file = open('example.txt', 'a')
file.write('\n10103 김○호 010-6789-3456')
file.writelines(['\n10104 김○열 010-5678-9876', '\n10202 이○환 010-5346-2534'])
file.close()
print('--- a로 이어 쓴 뒤 ---')
file = open('example.txt', 'r')
print(file.read())
file.close()

# 3) 다시 'w' : 이전 내용이 지워짐
file = open('example.txt', 'w')
file.write('10201 박○영 010-3421-0987')
file.close()
print('--- 다시 w로 쓴 뒤 ---')
file = open('example.txt', 'r')
print(file.read())
file.close()`});

/* 02 with문 (169쪽) 성적표 */
pyrun('withRun', {rows:14, code:String.raw`student = ['10101\t98\t82\t96\n', '10102\t86\t75\t88\n',
           '10103\t78\t95\t92\n']

with open('grade.txt', 'w') as file:
  file.write('학번\t정보\t정보과학\t프로그래밍\n')  # 첫 줄 작성
  file.writelines(student)       # 리스트 항목을 줄 단위로 저장
print('grade.txt 파일에 저장되었습니다.')

# 저장된 내용 확인하기
with open('grade.txt', 'r') as file:
  print(file.read())`});

/* 02 편지 쓰기 (170쪽 해 보기 1) — 입력 끝에 빈 줄 */
pyrun('letterRun', {rows:16, stdin:'안녕 친구야\n나 정보야\n프로그래밍 수업 시간에 나를 도와줘서 너무 고마웠어^^\n우리 우정 변치 말자!\n', code:String.raw`# 친구에게 편지 쓰기
print('친구에게 편지를 씁니다. 편지 쓰기를 종료하려면 enter를 누르세요.')
with open('letter.txt','w') as file:
  while True:
    text = input('내용을 입력하세요: ')
    if text != '':
      file.write(text + '\n')
    else:
      break
print('letter.txt 파일에 저장되었습니다.')

# 저장된 편지 읽어 보기
with open('letter.txt','r') as file:
  print(file.read())`});

/* 03 read / readline / readlines (171쪽) */
pyrun('readRun', {rows:26, code:String.raw`# 읽을 파일을 먼저 만들어 둡니다
with open('example.txt', 'w') as file:
  file.writelines(['10101 김○수 010-1234-1234\n',
                   '10102 김○지 010-4321-4321\n',
                   '10103 김○호 010-6789-3456'])

# read( ) 함수 사용
file = open('example.txt', 'r')
content = file.read()
print(content)
file.close()

print('-----')
# readline( ) 함수 사용
file = open('example.txt', 'r')
content = file.readline()
print(content)
file.close()

print('-----')
# readlines( ) 함수 사용
file = open('example.txt', 'r')
content = file.readlines()
print(content)
file.close()`});

/* 03 평균 (172쪽 예제 2) */
pyrun('avgRun', {rows:26, code:String.raw`# grade.txt 만들기
with open('grade.txt', 'w') as f:
  f.write('학번\t정보\t정보과학\t프로그래밍\n')
  f.writelines(['10101\t98\t82\t96\n', '10102\t86\t75\t88\n', '10103\t78\t95\t92\n'])

# 파일 열기
file = open('grade.txt', 'r')

line = file.readline().strip()   # 첫 줄 제목 읽기
print(f'{line} 평균')

line = file.readline()           # 파일 읽기 ①
while line:
  num, inf, isc, pro = line.strip().split()
  inf = int(inf)
  isc = int(isc)
  pro = int(pro)
  avg = (inf + isc + pro) / 3.0
  print('%5s %4d %4d %4d  %.2f' % (num, inf, isc, pro, avg))
  line = file.readline()         # 파일 읽기 ②
file.close()                     # 파일 닫기`});

/* 03 우수자 (173쪽 해 보기 2) */
pyrun('topRun', {rows:22, code:String.raw`# grade.txt 만들기
with open('grade.txt', 'w') as f:
  f.write('학번\t정보\t정보과학\t프로그래밍\n')
  f.writelines(['10101\t98\t82\t96\n', '10102\t86\t75\t88\n', '10103\t78\t95\t92\n'])

file = open('grade.txt', 'r')   # 파일 열기
line = file.readline()          # 첫 줄 제목 읽기
print('---프로그래밍 성적 우수자---')
line = file.readline()          # 파일 읽기
while line:
  num, inf, isc, pro = line.strip().split()
  pro = int(pro)
  if pro >= 90:
    print('%5s %3d' % (num, pro))
  line = file.readline()        # 파일 읽기
file.close()                    # 파일 닫기`});

/* 03 strip / split 맛보기 (172쪽) */
pyrun('stripRun', {rows:8, code:String.raw`line = ' 10101\t98\t82\t96\n'
print(repr(line))                 # 원래 문자열
print(repr(line.strip()))         # 양끝 공백·줄 바꿈 제거
print(line.strip().split())       # 공백으로 나누어 리스트로`});

/* 05 핵심 기능 · 스스로 점검 */
chips('featPick','featPick',['파일 열기 open( )','파일 쓰기 write( )','파일 읽기 readline( )','파일 닫기 close( )','문자열 나누기 split( )'],true);
chips('selfCheck','selfCheckPick',['파일의 유형에 따른 입출력 과정을 설명할 수 있다','파일 입출력문으로 프로그램을 작성할 수 있다','w·a·r 모드의 차이를 안다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['paps1','체력 평가 · 해결해야 할 문제'],['paps2','체력 평가 · 파일에 저장할 것'],['paps3','체력 평가 · 읽어서 처리할 것'],['featPick','고른 핵심 기능'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
