# u3-build 설계표 — 급식 메뉴 선택 ② 구현 (교과서 212~221쪽, Ⅲ. 프로그램 설계와 구현)

개발 절차의 뒤 두 단계(**구현·테스트/유지 보수**). 앞 차시 u3-design(분석·설계)에 이어지는 차시.
본보기: `lessons/u2-io/`(pyrun), `lessons/u1-algorithm/`(탭·코드 카드). 단원 강조색 Ⅲ=`#9b4fc4`.

| 화면 | 교과서 쪽 | 핵심 내용 | 체험·활동 | 퀴즈 | 메모 |
|---|---|---|---|---|---|
| 0 시작 | 212쪽 | 표지(설계 명세서→코드). 앞 차시 한 줄 복습. 개발 절차 도입. 실행 칸 안내(tkinter는 읽기용 카드, 로직만 pyrun). 핵심 질문·목표·낱말·계획 | – | – | planLearn |
| 01 구현과 기법 | 212쪽 | 구현=설계 명세서를 코드로(모듈·문서화). 기법 3종(절차적·구조적·객체지향). 클린 코드·코딩 표준 | 기법 3종 `tabs`(techBtn/techView) | 2 | – |
| 02 모듈 구현 | 213~215쪽 | menu.py(MenuItem·Menu·choose)·student.py(order·__init__·self)·gui.py(tkinter·lambda·config)·main.py(mainloop) **읽기용 코드 카드 4개**. 로직 콘솔 버전 **pyrun** | 코드 카드 4개 · **pyrun** logicRun(stdin 제육볶음) | 2 | – |
| 03 테스트 | 216~219쪽 | 테스트 3단계(단위→통합→시스템) 조립 비유. menu·student=단위, gui·main=통합. 단위 TC 표(TC-01~06). unittest **읽기용 카드**. assert로 단위 테스트처럼 **pyrun** | 3단계 `sorter`(stageGame) · **pyrun** testRun(assert·PASS) | 3 | – |
| 04 유지 보수 | 216·220쪽 | 유지 보수(수명 연장·예방적 유지 보수). 메뉴 추가 체험(채식 비빔밥 append) **pyrun** | **pyrun** addRun(stdin 채식 비빔밥) | – | – |
| 05 스스로 해결하기 | 215·220쪽 | 동아리 신청 GUI 구현 구상(메모)·개선점(메모). 급식→동아리 매핑 틀(주석만, 정답 코드 미포함) | 구상 메모 3칸 · `chips` 2개(featPick·selfCheck) | – | guiPlan·modPlan·improvePlan·featPick·selfCheck |
| 06 마무리 | 221쪽 | key3(구현·기법 / 테스트 3단계 / 유지 보수). 오늘의 질문 다시. 마무리 퀴즈. 결과표·질문폼·메모 모아 보기 | – | 3 | keyQ |

퀴즈 10문항(01·02·03·06). pyrun 3개(logicRun·testRun·addRun, 모두 순수 파이썬 콘솔). 정답이 가장 긴 보기 2/10(<45%), 선택지 극단어 없음, 보기 짧은→긴, 정답 위치 섞음.

**확인한 점**
- pyrun 3개 모두 교과서 사례 로직(menu.py·student.py)을 **tkinter 없이** 떼어낸 콘솔 버전. `input()`은 `stdin`으로 미리 채움(logic=제육볶음, add=채식 비빔밥). `mainloop`·`while True` 없음.
- tkinter(gui.py·main.py)와 unittest(test_unit_menu.py)는 **읽기용 `<pre class="code">` 카드**(실행 버튼 없음). `<b>`=앰버 강조, `<i>`=연한 주석색.
- menu.py·student.py·gui.py·main.py 코드 카드는 교과서 213~215쪽에 **지면에 인쇄된 사례 코드**를 개념 설명용으로 재현(주석은 학습용으로 다듬음). 수행 활동(동아리 GUI·채식 추가 완성)의 **정답 코드는 넣지 않음** — 05는 급식→동아리 매핑 틀(주석)과 구상 메모만.
- 03 unittest 카드는 pack의 `test_unit_menu.py`(choose·MenuItem만 검증)를 씀 → 뒤의 pyrun(testRun) assert와 결과 문자열이 어긋나지 않음.

**지어낸 것 / 보정(예시 표시)**
- **order() 반환 문자열 보정**: 교과서 order()는 `'선택한 메뉴: {name}입니다.'`(…입니다.)를 반환하는데, pack의 `test_unit_student.py`·통합/시스템 테스트 코드는 `'선택한 메뉴: 제육볶음'`(입니다. 없음)과 비교해 **교과서 자체가 어긋나 있음**. 웹 실행 칸은 자체 일관성이 중요하므로, pyrun(logicRun·testRun)은 실제 order() 반환값(`…입니다.`)에 맞춰 assert도 `…입니다.`로 통일함. 그래서 testRun의 네 assert는 모두 통과함.
- 테스트 단계 `sorter`(stageGame) 6문항은 216~219쪽의 단위/통합/시스템 테스트 설명·TC를 분류 게임으로 재구성(새 사실 없음).
- 04 addRun의 `items.append(MenuItem('채식 비빔밥'))`는 220쪽 해 보기의 **아이디어를 콘솔로 체험**하게 한 것(정답 코드 아님, GUI 미포함).
- 화면 0의 실행 칸 안내·route(설계 명세서→구현→테스트→유지 보수)는 학습 안내용 구성.

**공통 체크**
- `.code`·`.tscroll` 은 `framework/pyrun.css` 에 이미 있어 재정의하지 않음. lesson.css 에는 inline `code`·`.esc-t`·`.al-tab`·`.al-tw` 만 둠.
- 코드 카드는 전부 읽기용(실행 버튼 없음). pyrun 은 순수 파이썬 콘솔 조각에만(3개).
- 교과서 원문(pack 212~221쪽) 기준. 정리 문장은 그대로 베끼지 않고 key3·easy 로 풀어 씀.
- 질문폼 prog-u3-build(course.json 등록됨). build·check 오류 0·주의 0, 375px 가로 넘침 0, pyrun 실제 실행 확인은 미리보기에서 수행 예정.
