# u3-automate 설계표 — 프로그래밍 실제: PDF 문서 자동 변환 ① (교과서 222~227쪽, Ⅲ. 프로그램 설계와 구현)

산업 현장 사례(한국반도체 재무팀 PDF 자동 변환). **기획·설계·구현 시작**까지. 짧은 차시(6쪽)라 화면 0~5(6개). 강조색 Ⅲ=`#9b4fc4`, 질문폼 `prog-u3-automate`.
**pyrun 없음** — 전부 pymupdf/pyhwpx/tkinter라 웹 실행 불가 → 모든 코드는 읽기용 `<pre class="code">` 카드. 다이어그램은 인라인 커스텀 SVG.

| 화면 | 교과서 쪽 | 핵심 내용 | 체험·활동 | 퀴즈 | 메모 |
|---|---|---|---|---|---|
| 0 시작 | 222 | 표지(한국반도체 재무팀 PDF 자동화 이야기). 단원 도입(개발 절차 전반). 핵심 질문·학습 목표·오늘 만날 낱말·나의 계획 | cover route(기획→설계→구현→테스트) | – | planLearn |
| 01 기획·요구 분석 | 222~223 | 산업 현장 개발 절차 4단계. 요구 분석 명세서(표Ⅲ-8): 목적·범위·기능1~3·성능·제약. PDF vs HWP | 개발 절차 `.au-pipe` · 기능1~3 `.au-func` 카드 · PDF↔HWP `flipCards`(pdfHwpFlip) | 2 | – |
| 02 설계 | 224~225 | 개념 설계(GUI·처리 관리자·추출기·변환기). **클래스 다이어그램**(ProcessGUI·process_handler( )·PDFPageExtractor·FileConverter). 모듈화와 호출 흐름 | **커스텀 SVG** 클래스 다이어그램(au-cls) + 모듈 호출 흐름(au-flow) | 2 | – |
| 03 UI 설계·구현 시작 | 225~227 | GUI 레이아웃(그림Ⅲ-9). **읽기용 코드 카드** process_handler.py·pdf_extractor.py. 라이브러리(pandas·pyhwpx·pymupdf·tkinter). docstring | **커스텀 SVG** GUI 목업(au-gui) · 코드 카드 2개(남색) · 라이브러리 `flipCards`(libFlip) | 2 | – |
| 04 스스로 해결하기 | 224 | 208쪽 참고 객체 간 메시지 다이어그램 구상(메모). 내 업무 자동화 아이디어(메모). **정답 코드 미포함** | 설계 메모 2칸 · 자동화 대상 `chips`(ideaPick) | – | msgDiagram·autoIdea·ideaPick |
| 05 마무리 | – | key3(요구 분석 명세서 / 설계·모듈화 / 구현 시작). 오늘의 질문 다시. 마무리 퀴즈. 결과표·질문폼·메모 모아 보기 | – | 3 | keyQ |

퀴즈 9문항(01·02·03·05). 보기 짧은→긴, 극단어(항상·모든·절대·반드시·무조건) 없음, 정답 위치 섞음(a=0 4개·1 2개·2 3개). 정답이 가장 긴 보기는 3문항(01-1·02-2·05-2 → 9개 중 3개, 절반 미만).

## 확인한 점 (pack 기준)
- 코드 카드 2개(process_handler.py·pdf_extractor.py)는 교과서 227쪽 인쇄 코드 그대로. `extract_page`의 `from_page = page_number + 1, to_page = page_number + 1`도 교과서 인쇄본을 그대로 옮김(원문 유지).
- 클래스 다이어그램 속성·메서드(ProcessGUI: root·page_entry·pdf_path·save_directory / load_pdf·select_folder·run_processing, PDFPageExtractor: pdf_path·reader / extract_page, FileConverter: convert_to_hwpx·extract_tables_to_excel)와 모듈 호출 순서(main→gui→process_handler→pdf_extractor/file_converter)는 224~225쪽 그림·본문대로.
- 요구 분석 명세서 기능1~3·성능·제약, PDF/HWP 특징, 라이브러리 4종 설명, docstring 설명은 223·227쪽 본문·Tip 그대로.
- 모든 코드는 읽기용(실행 버튼 없음). pyrun 미사용 — 이 차시 지침에 맞음.

## 지어낸 것 (교과서 밖·재구성)
- 세 SVG(클래스 다이어그램·모듈 호출 흐름·GUI 레이아웃)는 교과서 그림(224·225쪽)을 보고 모바일 폭(≤375px)에 맞게 **인라인 커스텀 SVG로 다시 그린 것**(이미지 대체, 새 사실 없음). FileConverter 메서드가 정적 메서드(@staticmethod)라는 점은 소스 코드(file_converter.py)에 근거.
- 화면 0 표지 route(기획→설계→구현→테스트)와 01의 `.au-pipe` 4단계는 222쪽 본문 개발 절차를 시각화한 것.
- 04 `chips`(자동화하면 좋을 일 5종)와 메모 안내 예시는 학습자 활동용 보기이며 교과서 정답이 아님.
- 수행 활동(객체 간 메시지 다이어그램)은 정답 코드·정답 그림 없이 설계 메모 틀만 제공.

## 공통 체크
- build·check 오류 0·주의 0 목표(검토 시 확인). 코드 카드 전부 읽기용, pyrun 미사용.
- 375px에서 렌더·커스텀 SVG(viewBox 기반, width:100%·max-width 지정)·가로 넘침 0·콘솔 오류 0 목표.
- 교과서 원문(pack) 기준. 보정·지어낸 것은 위에 표시.
- 질문폼 `prog-u3-automate`는 course.json에 등록되어 있음({{FORM_URL}} 치환은 build.py).
