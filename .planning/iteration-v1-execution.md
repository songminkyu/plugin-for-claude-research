# Iteration v1 수행 로그

## 날짜: 2026-02-18
## 페르소나: 비개발자 (PPTX 업무 직장인)
## 기반 계획: `.planning/iteration-v1-plan.md`

---

## 체험 결과

### 레볼루션 0: 환경 설정
- **파일**: `prompts/setup.md` + `references/rev0-setup.md`
- 참조 링크 유효: ✅ — `prompts/setup.md`에서 `references/rev0-setup.md`를 정확히 참조
- PPTX 예시: ❌ — references/rev0-setup.md에 PPTX 프로젝트 적용 예시 없음. SKILL.md에서 "PPTX 프로젝트 디렉토리 구조 만들기"를 명시했으나 실제 파일에 누락
- EXPLAIN/EXECUTE/QUIZ 완전: ✅ — EXPLAIN(설치 방법, 트러블슈팅), EXECUTE(4단계 실습), QUIZ(확인 질문 3옵션) 모두 존재
- 비개발자 이해도: 🟢높음 — 설치 명령어를 복사-붙여넣기만 하면 됨. 트러블슈팅 테이블이 실용적. "Node.js 설치가 필요 없습니다" 안내가 진입 장벽을 낮춤
- 발견 사항:
  - [계획 목표 1 해당] PPTX 프로젝트 예시가 누락되어 "이걸 왜 설치하지?"라는 동기부여가 약함. PPTX 프로젝트 폴더 생성 같은 구체적 첫 단계가 있으면 학습 동기가 강화될 것
  - "Antigravity" 에디터가 실제로 존재하는지 비개발자는 확인하기 어려움 (계획에서 v2로 미룸)
  - prompts/setup.md의 Phase A/B 구분이 명확하여 강사 역할의 Claude가 따르기 좋은 구조

### 레볼루션 1: 체험 — 먼저 느껴보기
- **파일**: `prompts/experience.md` + `references/rev1-experience.md`
- 참조 링크 유효: ✅ — `prompts/experience.md`에서 `references/rev1-experience.md`를 정확히 참조
- PPTX 예시: ❌ — references/rev1-experience.md에 PPTX 관련 내용 전무. 데모 3가지(Skill 실행, AskUserQuestion, 직접 질문)는 일반적인 예시만 사용
- EXPLAIN/EXECUTE/QUIZ 완전: ✅ — EXPLAIN(3가지 데모), EXECUTE(4단계 실습), QUIZ(반영 질문 3옵션) 모두 존재
- 비개발자 이해도: 🟢높음 — "보고서 써줘" 같은 일상적 예시가 공감을 유도. AskUserQuestion(되묻기) 패턴 설명이 직관적. 정답 없는 퀴즈가 부담을 줄임
- 발견 사항:
  - [계획 목표 1 해당] "PPTX 만들어줘"라고 요청하는 데모가 없음. SKILL.md에서는 "PPTX 만들어줘 한 마디로 슬라이드 생성 체험"을 명시했으나 실제 파일에 반영 안 됨
  - 데모 1(Skill 실행 체험)에서 `/weekly-sync` 예시를 사용하는데, 비개발자에게 이 예시가 와닿지 않을 수 있음. PPTX 관련 예시로 대체하면 학습 일관성 향상
  - prompts/experience.md에서 "현재 프로젝트의 스킬 목록"을 보여주라는 지시가 있으나, 비개발자가 "스킬 목록"이라는 개념을 아직 모르는 시점

### 레볼루션 2: 왜 터미널인가?
- **파일**: `prompts/why-cli.md` + `references/rev2-why.md`
- 참조 링크 유효: ✅ — `prompts/why-cli.md`에서 `references/rev2-why.md`를 정확히 참조. 공식 문서 URL(`https://code.claude.com/docs/ko/overview`)도 포함
- PPTX 예시: ❌ — references/rev2-why.md에 PPTX 관련 내용 없음. GUI vs CLI 비교가 일반적 수준에 머무름
- EXPLAIN/EXECUTE/QUIZ 완전: ✅ — EXPLAIN(GUI vs CLI, 코딩의 의미 변화), EXECUTE(생각해보기 2문항), QUIZ(2개 퀴즈) 모두 존재
- 비개발자 이해도: 🟡보통 — "CLI", "GUI" 용어가 비개발자에게 생소할 수 있음. ASCII 다이어그램은 시각적이지만 추상적. "CoWork" 등 구체적 GUI 도구 언급이 이해를 돕지만, 더 실생활 예시가 필요
- 발견 사항:
  - [계획 목표 1 해당] PPTX 수작업 vs CLI 자동화 비교가 없음. "PPTX 10장을 수작업으로 2시간 vs Claude Code로 5분" 같은 비교가 있으면 설득력 극대화
  - EXECUTE 섹션이 "생각해보세요"만으로 구성되어 실제 실습이 없음. prompts/why-cli.md에서도 실습 없이 퀴즈 2개로 Phase A/B를 구성. 체험형 학습보다 강의형에 가까움
  - 비개발자 입장에서 "코딩이 범용 도구"라는 메시지가 갑자기 나와서 비약이 느껴질 수 있음. PPTX 자동화 사례로 연결하면 자연스러워짐

### 레볼루션 3-1: CLAUDE.md — 영구 기억 장치
- **파일**: `prompts/core-features.md`(기능 1 섹션) + `references/rev3-1-claude-md.md`
- 참조 링크 유효: ✅ — prompts에서 `references/rev3-1-claude-md.md` 정확히 참조. 공식 문서 URL 포함
- PPTX 예시: ✅ — references에 "PPTX 프로젝트 스타일 가이드" 예시 포함. 주색상, 폰트, 역할 담당까지 구체적
- EXPLAIN/EXECUTE/QUIZ 완전: ✅ — 모두 존재
- 비개발자 이해도: 🟢높음 — "팀 위키" 비유가 직관적. PPTX 스타일 가이드 예시가 업무에 바로 적용 가능한 수준
- 발견 사항: PPTX 스타일 가이드 예시가 매우 구체적 (색상 코드, 폰트 크기, 역할 정의). 학습자가 "이런 걸 저장해두면 되는구나"를 바로 이해 가능

### 레볼루션 3-2: Skill — 재사용 레시피
- **파일**: `prompts/core-features.md`(기능 2 섹션) + `references/rev3-2-skill.md`
- 참조 링크 유효: ✅
- PPTX 예시: ✅ — `pptx-theme-setter` 스킬의 SKILL.md 전체 예시 포함
- EXPLAIN/EXECUTE/QUIZ 완전: ✅
- 비개발자 이해도: 🟢높음 — "요리 레시피" 비유가 좋음. Progressive Loading 개념도 "항상 vs 필요할 때"로 간결하게 설명
- 발견 사항: pptx-theme-setter 예시가 매우 구체적이어서 레볼루션 5(스킬 만들기)의 기초가 잘 깔림

### 레볼루션 3-3: MCP — 외부 도구 연결
- **파일**: `prompts/core-features.md`(기능 3 섹션) + `references/rev3-3-mcp.md`
- 참조 링크 유효: ✅
- PPTX 예시: ✅ — Playwright MCP를 활용한 HTML->PPTX 렌더링 파이프라인 예시
- EXPLAIN/EXECUTE/QUIZ 완전: ✅
- 비개발자 이해도: 🟡보통 — MCP 개념 자체는 "플러그" 비유로 이해 가능하나, `.mcp.json` 코드 블록이 비개발자에게 위협적. "npx" 명령어가 설명 없이 등장
- 발견 사항:
  - [계획 목표 3 해당] Node.js 의존성 안내 없음. `npx` 명령어가 Node.js를 필요로 하는데, rev0에서 "Node.js 필요 없음"이라고 했으므로 모순. 비개발자가 MCP를 설치하려 할 때 "npx가 뭔지" 혼란 발생 가능
  - Playwright MCP 예시의 렌더링 워크플로우(4단계)가 비개발자에게는 너무 기술적

### 레볼루션 3-4: Subagent — 독립 작업 위임
- **파일**: `prompts/core-features.md`(기능 4 섹션) + `references/rev3-4-subagent.md`
- 참조 링크 유효: ✅
- PPTX 예시: ✅ — 3개 Subagent(테마/내용/렌더링)로 PPTX 생성 분리 예시
- EXPLAIN/EXECUTE/QUIZ 완전: ✅
- 비개발자 이해도: 🟢높음 — "부하 직원에게 업무 위임" 비유가 직장인에게 바로 공감. 컨텍스트 절약 개념도 "상사의 업무 흐름은 방해받지 않음"으로 직관적
- 발견 사항: PPTX 3분할 예시가 이전 레볼루션(3-1의 역할 정의, 3-2의 스킬)과 자연스럽게 연결됨. 점진적 구축이 잘 설계됨

### 레볼루션 3-5: Agent Teams — 다중 에이전트 협업
- **파일**: `prompts/core-features.md`(기능 5 섹션) + `references/rev3-5-agent-teams.md`
- 참조 링크 유효: ✅
- PPTX 예시: ✅ — 3담당 Agent Teams 시스템 + 칸반 보드 + Subagent 비교표
- EXPLAIN/EXECUTE/QUIZ 완전: ✅
- 비개발자 이해도: 🟡보통 — "프로젝트 팀 + 칸반 보드" 비유는 좋으나, 실험적 기능이라 설치/설정이 복잡. tmux 미지원 환경 안내가 비개발자를 혼란스럽게 할 수 있음
- 발견 사항: Subagent와의 비교표가 차이를 명확히 설명. 단, 실험적 기능이라 비개발자가 직접 실행하기 어려울 수 있음. 관찰형 학습이 더 적합할 수 있음

### 레볼루션 3-6: Hook — 이벤트 자동화
- **파일**: `prompts/core-features.md`(기능 6 섹션) + `references/rev3-6-hook.md`
- 참조 링크 유효: ✅
- PPTX 예시: ✅ — PostToolUse Hook으로 PPTX 품질 검사 자동화 + Stop Hook으로 렌더링 완료 알림
- EXPLAIN/EXECUTE/QUIZ 완전: ✅
- 비개발자 이해도: 🟡보통 — "자동 체크리스트" 비유는 좋으나, JSON 설정 코드와 셸 명령어가 비개발자에게 기술적 장벽
- 발견 사항:
  - [계획 목표 2 해당] `$TOOL_INPUT` 환경변수 사용이 공식 스펙과 일치하는지 미검증. PPTX 예시의 `if echo '$TOOL_INPUT' | grep -q '.pptx\\|slides'` 코드가 비개발자가 복사해서 실행 시 실패할 위험
  - Hook 종류 테이블(PreToolUse, PostToolUse, Notification, Stop)은 간결하지만, 비개발자가 "어떤 Hook을 써야 하는지" 선택 기준이 부족
  - 보안 관련 경고가 없음. 셸 스크립트 실행의 위험성 안내 필요

### 레볼루션 3-7: Plugin — 패키지 배포
- **파일**: `prompts/core-features.md`(기능 7 섹션) + `references/rev3-7-plugin.md`
- 참조 링크 유효: ✅
- PPTX 예시: ✅ — `pptx-maker-plugin` 전체 디렉토리 구조 + 한 줄 설치 명령어
- EXPLAIN/EXECUTE/QUIZ 완전: ✅
- 비개발자 이해도: 🟢높음 — "한 줄 설치로 팀 전체 동일 환경" 메시지가 명확. PPTX 예시가 3담당 스킬을 하나로 묶는 것을 보여줘서 이전 학습과 자연스럽게 연결
- 발견 사항: 이 프로젝트 자체가 Plugin 예시라는 설명이 메타적 이해를 돕지만, 비개발자가 Plugin을 직접 만들 필요는 낮으므로 "사용자" 관점 설명이 더 필요할 수 있음

### 레볼루션 4: 기초 다지기
- **파일**: `prompts/basics.md` + `references/rev4-basics.md`
- 참조 링크 유효: ✅
- PPTX 예시: ❌ — CLI, Git, GitHub, 에디터 기초만 설명. PPTX 프로젝트의 Git 버전 관리 시나리오 없음
- EXPLAIN/EXECUTE/QUIZ 완전: ✅ — EXPLAIN(CLI 5명령어, Git 기초, GitHub, 에디터), EXECUTE(3단계), QUIZ(3연속)
- 비개발자 이해도: 🟢높음 — "Finder 폴더 더블클릭" = `cd`, "게임 세이브" = `git commit` 비유가 매우 효과적. "보고서_최종_찐최종.docx" Before/After가 공감 유발
- 발견 사항:
  - [계획 목표 1 해당] PPTX 프로젝트 Git 커밋 예시 없음. SKILL.md에서 명시한 "PPTX 프로젝트 버전 관리"가 실제 파일에 반영 안 됨. "보고서_최종_찐최종.docx" 예시를 PPTX로 변경하면 더 일관적
  - "명령어를 외울 필요 없습니다"라는 안내가 비개발자의 불안을 잘 해소
  - Quiz 3연속 구조가 학습 확인에 효과적이나, 비개발자에게 시험처럼 느껴질 수 있음
  - 레볼루션 3(고급 기능) 이후에 레볼루션 4(기초)가 오는 순서가 다소 어색. 비개발자 입장에서 "아직 기초도 안 배웠는데 MCP를 배웠네?"라는 의아함 가능 (단, 의도적 설계일 수 있음)

### 레볼루션 5: 스킬 만들기 실습
- **파일**: `prompts/create-skill.md` + `references/rev5-create-skill.md`
- 참조 링크 유효: ✅
- PPTX 예시: ✅ — `pptx-maker` 통합 스킬의 SKILL.md 전체 예시 + morning-routine 범용 예시
- EXPLAIN/EXECUTE/QUIZ 완전: ✅ — EXPLAIN(최소 구성, SKILL.md 작성법, 고급 참조), EXECUTE(4단계 실습), QUIZ(확인+지식 2문항)
- 비개발자 이해도: 🟢높음 — "마크다운 파일 하나만 작성"이라는 진입 장벽 낮춤 메시지가 강력. morning-routine 예시가 일상 업무에 바로 적용 가능
- 발견 사항:
  - PPTX 예시(`pptx-maker`)가 레볼루션 3에서 배운 모든 개념(테마/내용/렌더링)을 통합하여 복습 효과 있음
  - `mkdir -p .claude/skills/my-first-skill` 명령어가 비개발자에게 터미널 경험이 됨 (rev4에서 배운 CLI 기초 활용)
  - frontmatter(YAML 메타데이터)의 `name`과 `description` 필드 설명이 간결하여 이해 가능

### 레볼루션 6: 리서치와 학습의 결합
- **파일**: `prompts/research-integration.md` + `references/rev6-research-integration.md`
- 참조 링크 유효: ✅
- PPTX 예시: ✅ — "리서치 결과 -> PPTX 자동 변환" 전체 파이프라인(4단계) 제시. 모든 기능 통합 사례
- EXPLAIN/EXECUTE/QUIZ 완전: ✅ — EXPLAIN(파이프라인, 워크플로우, 학습 주제 예시), EXECUTE(3가지 선택지), QUIZ(반영 질문)
- 비개발자 이해도: 🟡보통 — domain-research 파이프라인 다이어그램(Step 0~5)이 체계적이지만, 비개발자에게 "연구 공백 식별"이나 "다중 소스 통합" 같은 용어가 학술적으로 느껴질 수 있음
- 발견 사항:
  - 졸업 체크리스트(레볼루션 0~6 요약)가 성취감을 제공
  - "학습은 끝이 아니라 시작"이라는 마무리 메시지가 적절
  - PPTX 예시가 "리서치 -> 슬라이드 5장 초안 -> 자동 생성"으로 매우 실용적. 비개발자가 "이거 실제로 내 업무에 쓸 수 있겠다"고 느낄 수 있음
  - 다음 단계 안내(자신만의 Skill, MCP 연동, Plugin 제작, 커뮤니티)가 학습 이후 로드맵 제공

---

## 종합 체크리스트

| 레볼루션 | 링크 | PPTX | 구조 | 이해도 |
|---------|------|------|------|------|
| rev0 (환경 설정) | ✅ | ❌ | ✅ | 🟢 |
| rev1 (체험) | ✅ | ❌ | ✅ | 🟢 |
| rev2 (왜 터미널인가) | ✅ | ❌ | ✅ | 🟡 |
| rev3-1 (CLAUDE.md) | ✅ | ✅ | ✅ | 🟢 |
| rev3-2 (Skill) | ✅ | ✅ | ✅ | 🟢 |
| rev3-3 (MCP) | ✅ | ✅ | ✅ | 🟡 |
| rev3-4 (Subagent) | ✅ | ✅ | ✅ | 🟢 |
| rev3-5 (Agent Teams) | ✅ | ✅ | ✅ | 🟡 |
| rev3-6 (Hook) | ✅ | ✅ | ✅ | 🟡 |
| rev3-7 (Plugin) | ✅ | ✅ | ✅ | 🟢 |
| rev4 (기초 다지기) | ✅ | ❌ | ✅ | 🟢 |
| rev5 (스킬 만들기) | ✅ | ✅ | ✅ | 🟢 |
| rev6 (리서치 결합) | ✅ | ✅ | ✅ | 🟡 |

**요약 통계**:
- 참조 링크 유효: 13/13 (100%)
- PPTX 예시 포함: 9/13 (69%) — rev0, rev1, rev2, rev4에 누락
- EXPLAIN/EXECUTE/QUIZ 완전: 13/13 (100%)
- 비개발자 이해도 🟢높음: 8/13 (62%)
- 비개발자 이해도 🟡보통: 5/13 (38%)
- 비개발자 이해도 🔴낮음: 0/13 (0%)

---

## 이터레이션 계획 목표 대비 현황

### 목표 1: 레볼루션 0~4 PPTX 예시 일관성 확보
- **현황**: 미반영 (개선 전 상태 확인 완료)
- **검증**: rev0, rev1, rev2, rev4의 references 파일에 PPTX 예시 섹션이 없음을 확인
- **영향도**: SKILL.md에서 "모든 레볼루션은 PPTX 프로젝트를 공통 예시로 사용"이라 명시했으나, 전체 13개 레볼루션 중 4개에서 PPTX 주제가 끊기는 문제. 학습 일관성에 직접적 영향

### 목표 2: Hook 환경변수 `$TOOL_INPUT` 공식 검증 및 수정
- **현황**: 미반영 (개선 전 상태 확인 완료)
- **검증**: rev3-6-hook.md 라인 76에 `echo '$TOOL_INPUT'` 사용 확인. 공식 Hook 스펙 대조 필요
- **영향도**: 비개발자가 복사하여 사용 시 동작 실패 가능. 보안 경고도 부재

### 목표 3: MCP 섹션 Node.js 의존성 충돌 명확화
- **현황**: 미반영 (개선 전 상태 확인 완료)
- **검증**: rev0에서 "Node.js 설치가 필요 없습니다" 안내 후, rev3-3에서 `npx` 명령어가 설명 없이 등장하는 모순 확인
- **영향도**: 비개발자가 MCP 설치 시 "npx: command not found" 에러를 만나면 학습 포기 가능

---

## 추가 발견 사항 (계획 외)

### 레볼루션 순서에 대한 관찰
- rev3(고급 기능 7개) 이후 rev4(CLI/Git 기초)가 오는 구조가 비개발자 입장에서 다소 어색
- 의도적 설계(체험 우선 -> 기초 보완)로 보이나, 학습자 혼란 가능성 있음
- 대안: rev4 내용에 "앞서 체험한 기능들을 더 잘 활용하기 위해 기초를 다져봅시다"라는 연결 문구 추가 권장

### STOP 프로토콜 준수 상태
- prompts/ 파일들이 Phase A/B 분리를 잘 지키고 있음
- 특히 "여기서 STOP." 마커가 모든 Phase A에 명시되어 있어 Claude가 따르기 용이
- 절대 규칙 5개 중 "공식 문서 URL 출력"은 모든 레볼루션에서 잘 준수됨

### 비개발자를 위한 강점
1. 비유 체계가 일관적: "팀 위키", "요리 레시피", "게임 세이브", "부하 직원 위임"
2. "외울 필요 없습니다"라는 반복 안내가 학습 심리 안정에 효과적
3. PPTX 3담당(테마/내용/렌더링) 구조가 rev3 전체를 관통하여 이해도 높임
4. 정답 없는 반영 질문(rev1, rev6)이 평가 부담 없이 참여 유도
