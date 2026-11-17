
/* 이 차시는 pymupdf·pyhwpx·tkinter 코드라 웹에서 실행할 수 없어요.
   모든 코드는 읽기용 <pre class="code"> 카드이고, pyrun(실행 칸)은 쓰지 않아요. */

/* 01 PDF vs HWP 뒤집기 카드 (223쪽 Tip) */
flipCards('pdfHwpFlip',[
  {ic:'📕',f:'PDF',s:'Portable Document Format',b:'문서 형식을 그대로 유지할 수 있어 인쇄·보관용에 적합해요. 확장자는 pdf 예요.'},
  {ic:'📘',f:'HWP',s:'Hangul Word Processor',b:'한글 문서 작성에 특화되어 수정·편집에 더 적합해요. 확장자는 hwp, hwpx 예요.'},
]);

/* 03 필요한 라이브러리 뒤집기 카드 (227쪽 Tip) */
flipCards('libFlip',[
  {ic:'🐼',f:'pandas',b:'추출한 표 데이터를 DataFrame으로 다루어 엑셀로 저장할 때 써요.'},
  {ic:'📘',f:'pyhwpx',b:'한글(HWPX) 파일을 열고 저장하는 등 한글 문서를 처리해요.'},
  {ic:'📕',f:'pymupdf',b:'PDF와 여러 전자 문서를 읽고 편집·변환해요(페이지 추출·표 찾기).'},
  {ic:'🪟',f:'tkinter',b:'GUI(그래픽 사용자 인터페이스) 창과 버튼·입력칸을 만들어요. messagebox·filedialog로 파일 선택과 메시지 출력도 해요.'},
]);

/* 04 자동화하면 좋을 일 고르기 */
chips('ideaPick','ideaPick',['파일 이름 정리','문서 양식 채우기','표 데이터 모으기','알림·메일 보내기','이미지 크기 바꾸기'],true);

/* 05 마무리 */
const MEMOLIST=[['planLearn','나의 계획 · 이 단원에서 배우고 싶은 것'],['msgDiagram','객체 간 메시지 주고받는 순서'],['autoIdea','내 업무 자동화 아이디어'],['ideaPick','자동화하면 좋을 일로 고른 것'],['keyQ','오늘의 질문에 대한 내 답']];
onShow[5]=()=>memoSummary('msum',MEMOLIST);
