
/* 01 단계 ↔ 산출물 짝 맞추기 (202~203쪽) */
flipCards('stepFlip',[
  {ic:'📋',f:'기획',s:'무엇을 만들지 정하기',b:'산출물 · <b>요구 분석 명세서</b> — 사용자의 요구를 분석해 무엇을 개발할지 정리해요.'},
  {ic:'📐',f:'설계',s:'어떻게 만들지 그리기',b:'산출물 · <b>설계 명세서</b> — 요구를 어떻게 실현할지 구조·모듈을 구체적으로 정해요.'},
  {ic:'⌨️',f:'구현',s:'코드로 옮기기',b:'산출물 · <b>소스 코드</b> — 설계한 내용을 실제 프로그래밍 언어로 작성해요.'},
  {ic:'🧪',f:'테스트·유지 보수',s:'고치고 관리하기',b:'산출물 · <b>검증 결과·개선</b> — 오류를 찾아 고치고, 프로그램을 오래 쓸 수 있게 관리해요.'},
]);

/* 02 계획 수립 5요소 (203쪽) */
flipCards('planFlip',[
  {ic:'🎯',f:'문제 정의',b:'현재 상황과 목표·제약 조건을 포함해 <b>무엇을 개발할지</b> 명확히 정하고 범위를 결정해요.'},
  {ic:'⚖️',f:'타당성 분석',b:'실현 방안을 찾고 <b>투자 효율성·시장성</b>, 기술적 어려움, 법적 문제 여부를 검토해요.'},
  {ic:'💰',f:'개발 비용 산정',b:'프로그래머의 자질, 소프트웨어 복잡도·규모, 인력·자원의 가용성을 고려해 비용을 가늠해요.'},
  {ic:'🗓️',f:'일정 계획 수립',b:'필요한 작업과 그 <b>순서·소요 기간·인력·도구</b> 사용 계획을 세워요.'},
  {ic:'⚠️',f:'위험 분석',b:'예상되는 <b>위험 요소 목록</b>을 만들고 대비책을 마련해 미리 제거하거나 예방해요.'},
]);

/* 03 모듈화 두 원칙 (207쪽) */
flipCards('cohFlip',[
  {ic:'🔗',f:'결합도 ↓ (coupling)',s:'느슨하게',b:'모듈이 서로 <b>의존하는 정도</b>예요. 낮게(느슨하게) 유지해야 한 모듈을 바꿔도 다른 모듈이 영향을 적게 받아요.'},
  {ic:'🧲',f:'응집도 ↑ (cohesion)',s:'강하게',b:'모듈 <b>안의 요소들이 관련된 정도</b>예요. 높게(강하게) 유지해야 모듈이 하나의 기능에 집중돼 이해·관리가 쉬워요.'},
]);

/* 04 기본 알고리즘 STEP 1~7 (210쪽) */
flipCards('stepCards',[
  {ic:'1️⃣',f:'메뉴 항목 초기화',b:'<b>MenuItem</b> 클래스로 메뉴 항목(제육볶음·돈가스 등)을 하나씩 생성해요.'},
  {ic:'2️⃣',f:'객체 생성',b:'메뉴 항목들을 묶은 <b>menu 객체</b>와, 메뉴를 고를 <b>student 객체</b>를 만들어요.'},
  {ic:'3️⃣',f:'GUI 설정',b:'<b>Gui</b> 클래스로 화면을 초기화하고 menu·student 객체와 연결해요.'},
  {ic:'4️⃣',f:'mainloop 시작',b:'tkinter의 <b>mainloop</b>로 프로그램이 버튼 클릭 같은 이벤트를 기다려요.'},
  {ic:'5️⃣',f:'이벤트 처리',b:'버튼을 클릭하면 선택한 메뉴명을 <b>show_order( )</b> 메소드에 전달해요.'},
  {ic:'6️⃣',f:'메뉴명 확인',b:'<b>student.order( )</b>와 <b>menu.choose( )</b>가 메뉴명을 확인하고 결과를 반환해요.'},
  {ic:'7️⃣',f:'GUI 업데이트',b:'반환값에 따라 "선택한 메뉴: ○입니다." 결과 메시지를 <b>라벨에 표시</b>해요.'},
]);

/* 04 핵심 로직 미리보기 · Menu.choose() 콘솔 버전 (menu.py·student.py 로직, tkinter 제외) */
pyrun('chooseRun', {rows:17, stdin:'돈가스', code:
"class MenuItem:        # 메뉴명 하나를 저장\n"+
"    def __init__(self, name):\n"+
"        self.name = name\n\n"+
"class Menu:            # 메뉴 목록을 보관하고 이름으로 찾음\n"+
"    def __init__(self, items):\n"+
"        self.items = items\n"+
"    def choose(self, name):\n"+
"        for item in self.items:     # 목록을 돌며\n"+
"            if item.name == name:   # 이름이 같으면\n"+
"                return item         # 그 항목을 반환\n"+
"        return None                 # 없으면 None\n\n"+
"items = [MenuItem('제육볶음'), MenuItem('돈가스'), MenuItem('돼지고기 김치찌개'), MenuItem('비빔밥')]\n"+
"menu = Menu(items)\n\n"+
"choice = input('먹고 싶은 메뉴: ')\n"+
"found = menu.choose(choice)\n"+
"if found:\n"+
"    print(f'선택한 메뉴: {found.name}입니다.')\n"+
"else:\n"+
"    print('해당 메뉴는 없습니다!')"});

/* 05 핵심 기능 · 스스로 점검 */
chips('featPick','featPick',['동아리 목록 보여 주기','버튼으로 동아리 선택','선택한 동아리 확인 메시지','신청 결과 저장·집계'],true);
chips('selfCheck','selfCheckPick',['개발 절차 4단계를 설명할 수 있다','요구 분석 명세서를 작성할 수 있다','요구 분석과 설계의 차이를 안다','모듈화의 뜻과 장점을 설명할 수 있다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['reqMemo','동아리 신청 · 요구 분석(목적·기능·사용자)'],['umlMemo','동아리 신청 · UML 개념 설계(객체·메시지)'],['moduleMemo','동아리 신청 · 모듈(.py) 트리'],['featPick','고른 핵심 기능'],['selfCheckPick','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
