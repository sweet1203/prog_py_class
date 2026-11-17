
/* 01 세 가지 프로그래밍 기법 탭 (212쪽) */
tabs('techBtn','techView',[{ic:'➡️',n:'절차적'},{ic:'🔁',n:'구조적'},{ic:'🧩',n:'객체지향'}],(it,i)=>{
  if(i===0) return `<div class="al-tw" style="--k:#2f6fd0"><p><b>절차적(절차지향) 프로그래밍</b></p><p>함수를 순서대로 불러 가며, 코드가 위에서 아래로 흐르는 <b>실행 순서</b>에 초점을 맞춰요. 할 일을 단계별로 쭉 적어 내려가는 방식이에요.</p></div>`;
  if(i===1) return `<div class="al-tw" style="--k:#9b4fc4"><p><b>구조적 프로그래밍</b></p><p>절차적 방식의 한 종류예요. <b>조건문과 반복문</b>으로 흐름을 또렷하게 정리해, 읽기 쉽고(가독성) 고치기 쉽게(유지 보수성) 만들어요.</p></div>`;
  return `<div class="al-tw" style="--k:#1f9d74"><p><b>객체지향 프로그래밍</b></p><p>데이터(<b>속성</b>)와 동작(<b>메소드</b>)을 <b>클래스와 객체</b>로 묶어(캡슐화), 코드를 다시 쓰고 넓혀 가기 좋게 해요. 급식 메뉴 프로그램이 바로 이 방식(MenuItem·Menu·Student·Gui)이에요.</p></div>`;
});

/* 02 선택 로직 콘솔 버전 (213~214쪽 menu+student 로직) */
pyrun('logicRun', {rows:20, stdin:'제육볶음', code:
"class MenuItem:            # 메뉴 하나(이름)를 저장\n"+
"    def __init__(self, name):\n"+
"        self.name = name\n\n"+
"class Menu:                # 여러 메뉴를 관리\n"+
"    def __init__(self, items):\n"+
"        self.items = items\n"+
"    def choose(self, name):\n"+
"        for item in self.items:        # 리스트를 순회\n"+
"            if item.name == name:      # 이름이 일치하면\n"+
"                return item            # 그 메뉴 반환\n"+
"        return None                    # 없으면 None\n\n"+
"class Student:             # 학생이 메뉴를 선택\n"+
"    def __init__(self, menu):\n"+
"        self.menu = menu\n"+
"    def order(self, menu_name):\n"+
"        item = self.menu.choose(menu_name)\n"+
"        if item:\n"+
"            return f'선택한 메뉴: {item.name}입니다.'\n"+
"        return '해당 메뉴는 없습니다!'\n\n"+
"items = [MenuItem('제육볶음'), MenuItem('돈가스'),\n"+
"         MenuItem('돼지고기 김치찌개'), MenuItem('비빔밥')]\n"+
"student = Student(Menu(items))\n\n"+
"name = input('메뉴를 선택하세요: ')\n"+
"print(student.order(name))"});

/* 03 assert로 단위 테스트처럼 (217쪽 로직) */
pyrun('testRun', {rows:22, code:
"class MenuItem:\n"+
"    def __init__(self, name):\n"+
"        self.name = name\n\n"+
"class Menu:\n"+
"    def __init__(self, items):\n"+
"        self.items = items\n"+
"    def choose(self, name):\n"+
"        for item in self.items:\n"+
"            if item.name == name:\n"+
"                return item\n"+
"        return None\n\n"+
"class Student:\n"+
"    def __init__(self, menu):\n"+
"        self.menu = menu\n"+
"    def order(self, menu_name):\n"+
"        item = self.menu.choose(menu_name)\n"+
"        if item:\n"+
"            return f'선택한 메뉴: {item.name}입니다.'\n"+
"        return '해당 메뉴는 없습니다!'\n\n"+
"menu = Menu([MenuItem('제육볶음'), MenuItem('돈가스')])\n"+
"student = Student(menu)\n\n"+
"# TC-03: 있는 메뉴를 고르면 그 메뉴가 나와야 한다\n"+
"assert menu.choose('돈가스').name == '돈가스'\n"+
"print('PASS TC-03 · 있는 메뉴 choose() 통과')\n\n"+
"# TC-04: 없는 메뉴를 고르면 None 이 나와야 한다\n"+
"assert menu.choose('라면') is None\n"+
"print('PASS TC-04 · 없는 메뉴는 None 반환 통과')\n\n"+
"# TC-05: order() 가 선택 문장을 돌려줘야 한다\n"+
"assert student.order('제육볶음') == '선택한 메뉴: 제육볶음입니다.'\n"+
"print('PASS TC-05 · order() 정상 동작 통과')\n\n"+
"# TC-06: 없는 메뉴면 없음 안내를 돌려줘야 한다\n"+
"assert student.order('라면') == '해당 메뉴는 없습니다!'\n"+
"print('PASS TC-06 · order() 없는 메뉴 처리 통과')\n\n"+
"print('모든 테스트를 통과했어요!')"});

/* 04 메뉴 추가 체험 (220쪽 해 보기 아이디어 · 정답 아님) */
pyrun('addRun', {rows:20, stdin:'채식 비빔밥', code:
"class MenuItem:\n"+
"    def __init__(self, name):\n"+
"        self.name = name\n\n"+
"class Menu:\n"+
"    def __init__(self, items):\n"+
"        self.items = items\n"+
"    def choose(self, name):\n"+
"        for item in self.items:\n"+
"            if item.name == name:\n"+
"                return item\n"+
"        return None\n\n"+
"items = [MenuItem('제육볶음'), MenuItem('돈가스'),\n"+
"         MenuItem('돼지고기 김치찌개'), MenuItem('비빔밥')]\n\n"+
"items.append(MenuItem('채식 비빔밥'))   # 이 줄이 새 메뉴를 더해요\n\n"+
"menu = Menu(items)\n\n"+
"print('지금 고를 수 있는 메뉴:')\n"+
"for item in menu.items:\n"+
"    print(' -', item.name)\n"+
"print()\n\n"+
"name = input('메뉴를 선택하세요: ')\n"+
"found = menu.choose(name)\n"+
"if found:\n"+
"    print(f'선택한 메뉴: {found.name}입니다.')\n"+
"else:\n"+
"    print('해당 메뉴는 없습니다!')"});

/* 03 테스트 단계 분류 게임 (216~219쪽) */
sorter('stageGame',{
  cats:[{n:'단위',k:'#1f9d74'},{n:'통합',k:'#2f6fd0'},{n:'시스템',k:'#9b4fc4'}],
  items:[
    {t:'menu.py의 choose( )가 혼자서 올바른 메뉴를 반환하는지 확인',short:'choose() 개별 확인',c:0,ic:'🔩',w:'모듈 하나를 따로 검사하니 단위 테스트예요.'},
    {t:'student.py의 order( )가 혼자서 올바른 문장을 돌려주는지 확인',short:'order() 개별 확인',c:0,ic:'🔩',w:'로직 모듈 하나를 개별로 보니 단위 테스트예요.'},
    {t:'menu·student·gui·main 모듈이 서로 잘 연동되는지 확인',short:'모듈 연동 확인',c:1,ic:'🧱',w:'모듈을 이어 붙여 함께 도는지 보니 통합 테스트예요.'},
    {t:'GUI 버튼을 클릭했을 때 선택 결과가 라벨에 나오는 흐름 확인',short:'버튼→결과 흐름',c:1,ic:'🧱',w:'화면과 로직이 맞물리는지 보니 통합 테스트예요.'},
    {t:'완성된 프로그램 전체를 사용자 관점에서 처음부터 끝까지 확인',short:'완성품 전체 확인',c:2,ic:'🏠',w:'완성품 전체를 검증하니 시스템 테스트예요.'},
    {t:'유효한 입력과 잘못된 입력 모두에서 프로그램이 제대로 동작하는지 확인',short:'전체 동작 확인',c:2,ic:'🏠',w:'전체 프로그램의 신뢰성을 보니 시스템 테스트예요.'},
  ],
  end:'<b>정리</b> 모듈 하나 → <b>단위</b>, 모듈을 이어서 → <b>통합</b>, 완성품 전체 → <b>시스템</b> 테스트예요. 작은 것에서 큰 것으로 넓혀 가요.'
});

/* 05 핵심 기능 · 스스로 점검 */
chips('featPick','featPick',['동아리 목록 관리','버튼으로 보여 주기','신청 결과 확인','없는 동아리 안내'],true);
chips('selfCheck','selfCheck',['구현 단계와 기법을 설명할 수 있다','모듈을 코드로 나눠 구상할 수 있다','테스트 3단계를 구분할 수 있다','유지 보수의 뜻을 설명할 수 있다'],true);

/* 06 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 가장 궁금한 점'],['guiPlan','동아리 신청 · 버튼으로 보여 줄 동아리'],['modPlan','동아리 신청 · 모듈 나누기'],['improvePlan','개선점 · 더 좋게 바꾸고 싶은 점'],['featPick','고른 꼭 필요한 기능'],['selfCheck','스스로 점검: 할 수 있게 된 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[6]=()=>memoSummary('msum',MEMOLIST);
