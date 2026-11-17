# u3-automate-2 설계표 — PDF 문서 자동 변환 ② · 정리 (교과서 228~233쪽, Ⅲ. 프로그램 설계와 구현)

구현 완성(변환기·화면·실행) → 테스트 → Ⅲ단원 정리 → 직업 속으로(읽을거리). 단원 강조색 Ⅲ=`#9b4fc4`.
pyhwpx·pymupdf·pandas·tkinter 코드라 **pyrun 없음**, 전부 읽기용 `<pre class="code">` 카드.

| 화면 | 쪽 | 핵심 내용 | 체험·활동 | 퀴즈 | data-acc |
|---|---|---|---|---|---|
| 0 시작 | 228 | 표지(변환기·화면 완성→테스트까지). 앞 차시(기획·설계·추출기·총괄) 한 줄 복습 `flipCards`. 핵심 질문·학습 목표·낱말·나의 계획 | recallFlip(앞 차시 복습) | – | #9b4fc4 |
| 01 변환기 구현 | 228 | **읽기용 코드 카드** file_converter.py: @staticmethod, convert_to_hwpx(pyhwpx), extract_tables_to_excel(pymupdf+pandas). docstring·@staticmethod Tip | 코드 카드(남색) · convFlip(@staticmethod·docstring·두 메소드) | 2 | #2f6fd0 |
| 02 화면·실행 구현 | 229 | **읽기용 코드 카드** gui.py(tkinter·filedialog·load_pdf·select_folder·run_processing)·main.py(mainloop). gui가 process_handler를 호출하는 흐름 | 코드 카드 2개 · callGame `sorter`(설명↔어느 모듈: main·gui·process_handler) | 2 | #e0702b |
| 03 테스트 및 유지 보수 | 230 | 테스트 3단계(단위→통합→시스템 flow2). 단위 테스트 목적·환경 표. TC-01~04 표(.tscroll). unittest 실행 명령 코드 카드. -m·-v 옵션 `flipCards`. 유지 보수 | TC 표 · optFlip(-m·-v·unittest) | 2 | #1f9d74 |
| 04 Ⅲ단원 정리 | 231 | 개발 절차 전체(기획·요구분석→설계→구현→테스트)와 산출물. 급식·PDF 두 사례 비교표 | **커스텀 인라인 SVG** 세로 파이프라인(4단계+산출물) · 비교표(.tscroll) | 2 | #9b4fc4 |
| 05 직업 속으로 | 232~233 | 읽을거리(평가 아님): 에듀테크 기획자 김정태, 실내 내비 개발자 여상필. 읽을거리 카드 2장 + 한 줄 조언 `flipCards` + 읽고 나서 메모 | rd-read 카드 2장 · jobFlip(인물↔조언) | – | #d64535 |
| 06 마무리 | 231 | key3(변환기·GUI 구현 / 테스트·unittest·유지보수 / 개발 절차 전체). 오늘의 질문 다시. 마무리 퀴즈. 결과표·질문폼(prog-u3-automate-2)·메모 모아 보기 | – | 3 | #0f2742 |

퀴즈 11문항(01·02·03·04·마무리). 보기 짧은→긴, 극단어 없음, 정답 위치 분산(0:4·1:3·2:4), 정답이 가장 긴 보기 4문항(<절반). pyrun 없음.

**확인한 점(교과서 pack 기준)**
- 모든 코드 카드는 pack(228~230쪽 인쇄 코드) 그대로 — file_converter.py(@staticmethod 두 메소드), gui.py(ProcessGUI·load_pdf·select_folder·run_processing), main.py(Tk·mainloop). 실행 버튼 없음(읽기용).
- gui.py는 지면 코드가 길어 **run_processing의 process_handler 호출까지만** 싣고, 결과 Label 출력부는 「…호출」 주석으로 흐름만 보임(개념 전달 목적, 로직은 pack과 동일).
- 테스트 환경·TC-01~04(로드·변환·검색·추출, 모두 성공)·실행 명령(`python -m unittest -v test_unit_menu.py`)·옵션(-m·-v)은 230쪽 그대로.
- 직업 속으로(232~233쪽)는 **평가가 아닌 읽을거리**로 카드 처리. 두 개발자(김정태·여상필)의 소개·조언을 요약(원문 축약, 새 사실 없음).

**지어낸 것(예시·재구성)**
- 04 개발 절차 파이프라인은 231쪽 「핵심 정리」의 4단계·산출물을 **커스텀 인라인 SVG**(세로 파이프라인)로 다시 그림(교과서 그림 대체, 내용 동일).
- 급식↔PDF 비교표는 231쪽 정리와 앞 차시(u3-design/u3-build·u3-automate-1)의 설계 내용을 한 표로 재구성(새 사실 없음).
- callGame `sorter`의 6개 설명 항목은 main·gui·process_handler의 역할(229쪽 코드)을 분류 게임으로 재구성.
- convFlip·optFlip·jobFlip 카드 문구는 교과서 Tip·본문을 학생 눈높이로 풀어 씀.

**저장소에 넣지 않은 것**: 완성 프로젝트 전체 정답 코드·수행 활동(통합·시스템 테스트) 코드·대단원 평가. gui.py는 결과 출력부를 생략해 정답 전체가 아닌 개념 흐름만 제시.

**공통 체크**: `.code`/`.tscroll`는 framework/pyrun.css 사용(재정의 안 함), `code`(인라인)·`.esc-t`·SVG(.pipe)·읽을거리(.rd-read)는 lesson.css에 둠. 375px 가로 넘침 0·콘솔 오류 0 목표(검토 시 확인). pyrun 미사용이라 실행 확인 대상 없음. 질문폼 prog-u3-automate-2는 gen_forms로 등록 필요.
