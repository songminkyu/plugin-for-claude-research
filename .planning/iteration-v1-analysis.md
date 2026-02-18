# Iteration v1 분석 보고서

## 분석 기준
- 체험 로그: `.planning/iteration-v1-execution.md`
- 이전 리뷰: `docs/review-self-learning-20260218.md`
- 계획 목표: `.planning/iteration-v1-plan.md`

---

## 목표 달성도

| 목표 | 계획 상태 | 실제 상태 | 달성률 |
|------|---------|---------|------|
| 목표 1: rev0~4 PPTX 예시 일관성 확보 | rev0/1/2/4에 PPTX 예시 섹션 추가 | 4개 파일 모두 PPTX 예시 여전히 없음 (executor가 "개선 전 상태 확인"만 수행) | 0% |
| 목표 2: Hook `$TOOL_INPUT` 검증 및 수정 | rev3-6-hook.md 환경변수 수정 + 보안 경고 추가 | 미반영. `$TOOL_INPUT` 그대로 존재, 보안 경고 부재 확인 | 0% |
| 목표 3: MCP Node.js 의존성 충돌 명확화 | rev3-3-mcp.md + rev0 일관성 확보 | 미반영. rev0 "Node.js 불필요" vs rev3-3 `npx` 모순 그대로 | 0% |

**종합 달성률: 0%** — v1 이터레이션에서는 계획 수립 + 현황 확인(baseline measurement)만 완료. 실제 코드 수정은 아직 이루어지지 않음. 이는 executor의 역할이 "완주 시뮬레이션(체험)"이었기 때문으로, 실제 수정은 designer(Task #4)의 역할.

---

## 이슈 현황

### ✅ 해결된 이슈

이전 리뷰(review-self-learning-20260218.md)에서 Critical로 분류된 이슈들이 v1 이전에 이미 해결됨:

| # | 이슈 | 해결 상태 | 검증 방법 |
|---|------|----------|----------|
| C1~C5 | `prompts/*.md`의 `block*.md` 참조 → 파일 없음 버그 | ✅ 해결됨 | executor 체험 시 모든 참조 링크 100% 유효 확인 (13/13) |
| C6 | 졸업 체크리스트 "Block N" 표현 | ✅ 해결됨 | planner의 grep 검증으로 확인 |

**핵심 성과**: 이전 리뷰의 최대 치명적 버그(prompts/ 참조 깨짐)가 완전 해소. 이제 모든 레볼루션이 정상적으로 실행 가능.

### 🔴 미해결 이슈

| # | 원본 이슈 | 현재 상태 | 우선순위 |
|---|----------|----------|---------|
| M1 | rev0-setup.md PPTX 예시 없음 | 미해결 — PPTX 프로젝트 디렉토리 예시 누락 | Major |
| M2 | rev1-experience.md PPTX 데모 없음 | 미해결 — "PPTX 만들어줘" 체험 데모 누락 | Major |
| M3 | rev2-why.md PPTX 자동화 비교 없음 | 미해결 — 수작업 vs CLI 시간 비교 누락 | Major |
| M4 | rev4-basics.md PPTX Git 예시 없음 | 미해결 — PPTX 버전 관리 커밋 로그 누락 | Major |
| M5 | rev3-6-hook.md `$TOOL_INPUT` 미검증 | 미해결 — 공식 스펙 대조 및 수정 필요 | Major |
| M7 | rev3-3-mcp.md Node.js 충돌 | 미해결 — rev0과의 모순 해소 필요 | Major |
| M6 | rev4-basics.md "Antigravity" 에디터명 | 미해결 (v2로 연기됨) | Minor |
| m1~m5 | Minor 이슈 5건 | 미해결 (v2 이후로 연기됨) | Minor |

### 🆕 신규 발견 이슈

executor의 체험에서 새롭게 발견된 이슈들:

| # | 발견 위치 | 이슈 내용 | 심각도 |
|---|----------|----------|-------|
| N1 | rev2-why.md EXECUTE 섹션 | "생각해보세요"만으로 구성 — 실제 실습이 없는 강의형 구조. 다른 레볼루션의 실습형과 불일치 | Minor |
| N2 | rev4-basics.md 레볼루션 순서 | rev3(고급) 이후 rev4(기초) 배치가 비개발자에게 어색. "앞서 체험한 기능을 더 잘 활용하기 위해" 연결 문구 필요 | Minor |
| N3 | rev1-experience.md 데모 1 | `/weekly-sync` 스킬 예시가 비개발자에 와닿지 않음. PPTX 관련 스킬로 대체 시 일관성 향상 | Minor |
| N4 | rev3-3-mcp.md | `.mcp.json` 코드 블록과 `npx` 명령어가 비개발자에게 기술적 장벽. 설명 보강 필요 | 🟡 |
| N5 | rev3-6-hook.md | Hook 보안 위험성 경고 부재 (이전 리뷰 m3와 동일, 그러나 executor도 재확인) | 🟡 |

---

## 다음 이터레이션(v2) 입력

### 우선 개선 사항 1: rev0/1/2/4 PPTX 예시 추가 (M1, M2, M3, M4)
- **대상**:
  - `references/rev0-setup.md` — PPTX 프로젝트 섹션 없는 위치 (EXECUTE 섹션 직전 또는 내부)
  - `references/rev1-experience.md` — 데모 섹션에 PPTX 체험 추가
  - `references/rev2-why.md` — EXPLAIN 섹션에 PPTX 비교 예시 추가
  - `references/rev4-basics.md` — Git 섹션에 PPTX 커밋 예시 추가
- **현재**: 4개 레볼루션에 PPTX 프로젝트 적용 예시가 없어 SKILL.md의 "모든 레볼루션은 PPTX 공통 예시 사용" 선언과 불일치. 전체 13개 중 9개만 PPTX 포함 (69%)
- **수정 방향**:
  - rev0: `## 🖥️ PPTX 프로젝트 적용` 섹션 추가 — PPTX 프로젝트 폴더 구조 생성 예시 (`mkdir -p pptx-project/{templates,output}`)와 CLAUDE.md 초기 설정 연결
  - rev1: 데모 1의 `/weekly-sync` 예시를 `/pptx-maker` 또는 "PPTX 만들어줘" 체험으로 대체/추가
  - rev2: PPTX 수작업(2시간) vs CLI 자동화(5분) 시간 비교 박스 추가 — GUI vs CLI 비교의 구체적 사례
  - rev4: Git 커밋 로그 예시를 PPTX 프로젝트로 대체 — `commit 1: "테마 설정"`, `commit 2: "내용 초안"`, `commit 3: "렌더링 완료"` 시나리오
- **기대 효과**: PPTX 포함률 69% → 100%. 커리큘럼 전체에 통일 주제 관통

### 우선 개선 사항 2: Hook 환경변수 수정 + 보안 경고 (M5, m3)
- **대상**: `references/rev3-6-hook.md` — 라인 76 부근 `$TOOL_INPUT` 사용 코드, 보안 경고 부재 위치
- **현재**: `if echo '$TOOL_INPUT' | grep -q '.pptx\|slides'` 코드에서 `$TOOL_INPUT`이 Claude Code 공식 Hook 환경변수명인지 미검증. 비개발자가 복사 실행 시 실패 위험. 또한 Hook이 임의 셸 명령을 실행하는데 보안 경고가 없음
- **수정 방향**:
  - Claude Code 공식 Hook 문서 확인 후 올바른 환경변수명으로 수정 (공식 스펙에서 `$TOOL_INPUT` 대신 사용하는 변수명이 있다면 대체)
  - Hook 예시 코드 직후에 보안 경고 박스 추가: `> ⚠️ 주의: Hook은 셸 명령을 자동 실행합니다. 신뢰할 수 없는 출처의 Hook 코드를 그대로 복사하지 마세요. 반드시 내용을 이해한 후 사용하세요.`
  - PreToolUse vs PostToolUse 선택 기준 간략 안내 추가
- **기대 효과**: 기술 정확성 확보 + 비개발자 보안 인식 제고

### 우선 개선 사항 3: MCP Node.js 의존성 안내 명확화 (M7)
- **대상**:
  - `references/rev3-3-mcp.md` — `npx` 명령어가 등장하는 `.mcp.json` 예시 섹션
  - `references/rev0-setup.md` — "Node.js 설치가 필요 없습니다" 안내 부근
- **현재**: rev0에서 "복잡한 사전 준비물 없음 / Node.js 불필요" 안내 후, rev3-3 MCP 섹션에서 `npx` 명령어(Node.js 필요)가 설명 없이 등장. 비개발자가 MCP 설치 시 `npx: command not found` 에러 발생 가능
- **수정 방향**:
  - rev3-3-mcp.md에 안내 박스 추가: `> ℹ️ 일부 MCP 서버 설치에는 Node.js가 필요합니다. Claude Code 자체는 Node.js 없이 동작하지만, MCP 서버는 별도 프로그램이므로 각 서버의 요구사항을 확인하세요.`
  - rev0-setup.md의 "Node.js 불필요" 안내를 "Claude Code 설치에는 Node.js가 필요하지 않습니다 (일부 확장 기능은 별도 설치가 필요할 수 있음)" 형태로 미세 조정
  - `npx` 명령어 최초 등장 시 한 줄 설명 추가: "npx는 Node.js 패키지를 실행하는 명령어입니다"
- **기대 효과**: rev0 ↔ rev3-3 간 모순 해소. 비개발자가 MCP 설치 시 예상치 못한 에러를 방지

---

## 커리큘럼 전체 품질 점수 (v1 기준)

| 항목 | 점수 | 근거 |
|------|------|------|
| 구조 완성도 | 8/10 | EXPLAIN→EXECUTE→QUIZ 흐름 100% 준수. STOP 프로토콜 잘 작동. 참조 링크 100% 유효. 단, PPTX 예시 4곳 누락(-2) |
| 내용 일관성 | 6/10 | rev3-* 품질 우수하나 rev0/1/2/4에 PPTX 끊김(-2). Hook 환경변수 미검증(-1). Node.js 모순(-1) |
| 비개발자 접근성 | 7/10 | 비유 체계 탁월. "외울 필요 없음" 반복 안내 효과적. 62% 높음/38% 보통/0% 낮음. rev3-3(MCP), rev3-5(Agent Teams), rev3-6(Hook)의 기술적 장벽(-2). 레볼루션 순서 어색함(-1) |
| **종합** | **7/10** | Critical 버그 전량 해소(+). 구조 설계 우수(+). PPTX 일관성과 기술 정확성 개선 필요(-) |

---

## 부록: v1 이터레이션 프로세스 회고

- **잘된 점**: 계획(planner) → 체험(executor) → 분석(analyzer) 파이프라인이 정상 작동. baseline measurement가 정확히 수행됨
- **개선 필요**: v1에서 실제 파일 수정이 이루어지지 않아 달성률 0%. v2에서는 designer가 실제 수정을 수행하여 개선 사항 반영 필요
- **다음 단계**: designer가 위 3개 우선 개선 사항을 기반으로 파일 수정 수행 → executor가 수정된 커리큘럼 재체험 → analyzer가 개선 효과 측정
