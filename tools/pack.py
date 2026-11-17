#!/usr/bin/env python3
"""제작 에이전트에게 줄 차시 자료 묶음 만들기 (프로그래밍(Python)판).

    python3 tools/pack.py u1-languages [u1-procedure ...]
    python3 tools/pack.py u1            (단원 전체 차시)

course.json 의 쪽수(pages)로 다음을 모아 작업자료_프로그래밍/pack/<차시ID>.md 한 파일로 쓴다.
  1) 단원 교과서/지도서 md (쪽 표시 "…내지.indb   NN" 로 쪽을 나눠, 해당 쪽만)
  2) 실습 소스 코드 요약 (2·3단원 소스 코드 폴더의 .py / .csv / .txt)

선생님이 PDF를 md로 변환해 둔 파일을 그대로 쓴다(pdftotext 다시 돌리지 않음).
"""
from __future__ import annotations

import collections
import csv
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
WORK = ROOT.parent / '작업자료_프로그래밍'
MAT = ROOT.parent / '고등특성화_프로그래밍(Python)' / '단원별 자료' / '수업 자료'
rd = lambda p: pathlib.Path(p).read_text(encoding='utf-8', errors='replace')
ROMAN = 'ⅠⅡⅢ'

UNIT_MD = {
    1: MAT / '1단원' / '(고등) 프로그래밍(Python) 1단원(1217).md',
    2: MAT / '2단원' / '(고등) 프로그래밍(Python) 2단원(1217).md',
    3: MAT / '3단원' / '(고등) 프로그래밍(Python) 3단원(1217).md',
    0: MAT / '부록' / '(고등) 프로그래밍(Python) 부록(1217).md',  # 부록
}
# 쪽 표시(인디자인 꼬리말): 단원마다 파일명이 다름 — 1단원 "…내지.indb  NN", 2·3단원 "…_N단원.indd  NN", 부록 "해설.indd  NN".
PAGE_RE = re.compile(r'\.ind[bd]\s+(\d+)')


def page_range(s: str):
    a, _, b = s.partition('~')
    return set(range(int(a), int(b or a) + 1))


def md_pages(unit_no: int, pages: set[int]) -> str:
    f = UNIT_MD.get(unit_no)
    if not f or not f.exists():
        return f'(없음: 단원 {unit_no} md)'
    lines = rd(f).splitlines()
    # "내지.indb NN" 표시는 그 쪽의 꼬리말 → 표시 윗부분이 그 쪽 내용.
    marks = [(i, int(m.group(1))) for i, l in enumerate(lines) if (m := PAGE_RE.search(l))]
    # 같은 쪽 표시가 두 번(굵게) 나오므로 쪽마다 마지막 표시 줄을 경계로
    bound = {}
    for i, pg in marks:
        bound[pg] = i
    out, prev = [], 0
    seen = set()
    for pg in sorted(bound):
        end = bound[pg]
        body = '\n'.join(lines[prev:end])
        prev = end + 1
        if pg in pages and pg not in seen:
            seen.add(pg)
            body = re.sub(r'\n{3,}', '\n\n', body).strip()
            body = re.sub(r'(?m)^.*\.ind[bd]\s+\d+.*$|20\d\d-\d\d-\d\d\s+오[전후].*', '', body)
            body = re.sub(r'\n{3,}', '\n\n', body).strip()
            out.append(f'### 교과서 {pg}쪽\n{body}')
    miss = sorted(pages - seen)
    tail = f'\n\n(이 md에서 못 찾은 쪽: {miss})' if miss else ''
    return ('\n\n'.join(out) or '(맞는 쪽 없음)') + tail


def csv_summary(f: pathlib.Path) -> str:
    raw = f.read_bytes()
    for enc in ('utf-8-sig', 'cp949', 'latin-1'):
        try:
            txt = raw.decode(enc)
            break
        except UnicodeDecodeError:
            continue
    rows = list(csv.reader(txt.splitlines()))
    if not rows:
        return '(빈 파일)'
    head, body = rows[0], rows[1:]
    out = [f'- 행 {len(body)}개 × 열 {len(head)}개 (인코딩 {enc})', '- 열: ' + ' | '.join(head)]
    for r in body[:3]:
        out.append('- 예: ' + ' | '.join(x[:24] for x in r))
    return '\n'.join(out)


def code_files(unit_no: int) -> str:
    """2·3단원 소스 코드 폴더 전체를 요약(.py 는 앞 40줄, .csv 는 열 요약)."""
    base = MAT / f'{unit_no}단원'
    if not base.exists():
        return ''
    out = []
    for f in sorted(base.rglob('*')):
        if not f.is_file() or f.name.startswith('.'):
            continue
        if '소스 코드' not in str(f) and '소스코드' not in str(f):
            continue
        ext = f.suffix.lower()
        rel = f.relative_to(MAT)
        if ext == '.py':
            t = rd(f).splitlines()
            more = f'\n… (이하 {len(t) - 40}줄 생략)' if len(t) > 40 else ''
            out.append(f'#### {rel}\n```python\n' + '\n'.join(t[:40]) + more + '\n```')
        elif ext == '.csv':
            out.append(f'#### {rel}\n{csv_summary(f)}')
        elif ext in ('.txt', '.md'):
            t = rd(f)
            out.append(f'#### {rel}\n{t[:800]}' + ('…' if len(t) > 800 else ''))
    return '\n\n'.join(out)


def main(argv):
    c = json.loads(rd(ROOT / 'course.json'))
    targets = []
    for u in c['units']:
        no = ROMAN.index(u['name'][0]) + 1 if u['name'][0] in ROMAN else 0
        for l in u['lessons']:
            if l['id'] in argv or u['id'] in argv:
                targets.append((no, u, l))
    if not targets:
        sys.exit('차시 ID나 단원 ID(u1·u2·u3·appendix)를 주세요')
    (WORK / 'pack').mkdir(parents=True, exist_ok=True)
    for unit_no, u, l in targets:
        pages = page_range(l['pages'])
        code = code_files(unit_no) if unit_no in (2, 3) else ''
        md = (f"# {l['id']} · {l['title']} (교과서 {l['pages']}쪽, {u['name']})\n\n"
              f"## 1. 교과서·지도서 본문\n{md_pages(unit_no, pages)}\n\n"
              f"## 2. 실습 소스 코드 (해당 단원 전체)\n{code or '(없음 — 개념 단원)'}\n")
        o = WORK / 'pack' / f"{l['id']}.md"
        o.write_text(md, encoding='utf-8')
        print(f"작업자료_프로그래밍/pack/{l['id']}.md  {len(md):,}자")


if __name__ == '__main__':
    main(sys.argv[1:])
