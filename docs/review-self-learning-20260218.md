# Self-Learning 커리큘럼 수행 로그
> **리뷰어 시각**: 오픈소스 기여자 / 처음 접하는 비개발자 사용자
> **수행 일자**: 2026-02-18
> **리뷰어 정보**: Claude Sonnet 4.6 (automated walkthrough)
> **목적**: 전체 커리큘럼을 직접 체험하며 품질 이슈 및 개선점 기록

---

## 요약 (TL;DR)

| 항목 | 평가 |
|------|------|
| **설계 품질** | ⭐⭐⭐⭐ — STOP 프로토콜, PPTX 통일 예시 모두 탁월 |
| **치명적 버그** | 🔴 prompts/ 폴더 전체가 `block*.md` 파일 참조 → 파일 없음 (깨진 링크) |
| **내용 일관성** | 🟡 rev0, rev1, rev2, rev4 에 PPTX 예시 없음 (rev3-* 만 있음) |
| **진입 장벽** | ✅ 낮음 — 비개발자도 이해 가능한 언어 |
| **구조 설계** | ✅ EXPLAIN → PPTX 예시 → EXECUTE → QUIZ 흐름 명확 |

---

## 수행 로그: 레볼루션별 체험 기록

---

### 레볼루션 0: 환경 설정

**📂 체험 파일**: `references/rev0-setup.md`, `prompts/setup.md`

**수행 내용**

Phase A로 진입하여 설치 명령어(`curl -fsSL https://claude.ai/install.sh | bash`) 확인 후 인증 흐름을 체험. 트러블슈팅 표가 Mac/Windows/Linux 3가지 케이스를 커버함.

**✅ 잘된 점**
- 설치 명령어가 단 한 줄. 복잡한 사전 준비물 없음.
- 트러블슈팅 표가 실전 3대 문제를 즉시 해결.
- 에디터 선택이 "선택사항"으로 표기되어 있어 부담 없음.
- "기억할 필요 없습니다. Claude에게 말로 지시하면 됩니다" — 심리적 안전감 ↑

**🔴 치명적 버그 발견**

```
prompts/setup.md:10 → references/block0-setup.md 참조
```

실제 존재 파일: `references/rev0-setup.md`
→ Claude가 `block0-setup.md`를 읽으려 할 때 **파일 없음 에러** 발생.
→ 모든 prompts/ 파일이 동일하게 영향받음 (아래 전체 목록 참조).

**🟡 개선 제안**
- PPTX 프로젝트 연결 없음. SKILL.md에는 "PPTX 프로젝트 디렉토리 구조 만들기"라고 명시되어 있으나 rev0-setup.md에 해당 예시가 없음.
- 초기 설정의 "출력 스타일을 Explanatory로 설정" — 실제 메뉴 경로 명시 필요.

---

### 레볼루션 1: 체험

**📂 체험 파일**: `references/rev1-experience.md`, `prompts/experience.md`

**수행 내용**

3가지 데모(Skill 실행, AskUserQuestion 패턴, 직접 질문하기) 관찰. Phase B 퀴즈는 "정답 없음" 형태로 설계되어 어떤 선택이든 동등하게 인정.

**✅ 잘된 점**
- "데모 1 관찰 → 데모 2, 3 직접 실행" 구조가 자연스러운 체험 흐름.
- 퀴즈가 정답/오답 없이 내성화를 유도. 첫 레볼루션으로 적합한 설계.
- Before/After 비교로 기대치 설정이 명확.

**🔴 치명적 버그**
```
prompts/experience.md:10 → references/block1-experience.md 참조 (파일 없음)
```

**🟡 개선 제안**
- SKILL.md에 PPTX 연결: "PPTX 만들어줘 한 마디 체험"이 명시되어 있으나 참조 파일에 실제 예시 없음.
- 데모 1에서 실행 가능한 스킬이 미리 설치되어 있어야 하는데, 전제 조건이 명시되지 않음.
- 비개발자 입장에서: "Skill = 명령어"라는 설명만으로는 왜 `/.` 슬래시로 시작하는지 불명확.

---

### 레볼루션 2: 왜 터미널인가?

**📂 체험 파일**: `references/rev2-why.md`

**수행 내용**

GUI vs CLI 다이어그램으로 핵심 차이를 확인. "AI가 컴퓨터를 직접 제어"라는 개념을 코딩 경험 없는 사람 기준으로 해석.

**✅ 잘된 점**
- ASCII 다이어그램이 두 패러다임 차이를 직관적으로 전달.
- "과거 → 현재 → 결론" 3단 논증 구조가 깔끔.
- 퀴즈가 두 개(왜 터미널인가, 왜 비개발자에게도 중요한가)로 핵심 메시지 이중 검증.
- EXECUTE가 "생각해보세요" — 설치나 실행 없이 개념 내면화를 유도.

**🟡 개선 제안**
- PPTX 연결 없음. "PPTX 반복 생성 자동화 vs 수작업 비교" 예시가 있으면 즉각 납득 가능.
  ```
  수작업: PPT 열기 → 내용 수정 → 디자인 맞추기 → 저장 (매번 반복)
  CLI 자동화: "지난주와 같은 형식으로 PPTX 만들어줘" → 30초
  ```
- 공식 문서 URL은 있으나 "영어 문서"라는 점이 한국어 학습자에게 진입 장벽이 될 수 있음.

---

### 레볼루션 3: 7대 핵심 기능

**📂 체험 파일**: `references/rev3-1-claude-md.md` ~ `references/rev3-7-plugin.md`

이번 레볼루션은 7개 세부 기능을 각각 체험. 가장 충실하게 제작된 레볼루션.

---

#### 기능 1: CLAUDE.md

**✅ 잘된 점**
- "팀 위키" 비유가 비개발자에게 즉각 납득.
- 3가지 로드 구조(프로젝트/전역/하위폴더)를 표로 명확히 정리.
- 새로 추가된 PPTX 스타일 가이드 예시가 실전에서 "이렇게 쓰면 되겠구나"를 즉시 느끼게 함.

**🟡 개선 제안**
- `/init`과 `/memory` 명령어는 Claude Code 내장 명령어지만, 이 두 명령이 다른 것을 하는데 이름이 직관적이지 않음. 짧은 비교 설명 추가 권장.

---

#### 기능 2: Skill

**✅ 잘된 점**
- "요리 레시피" 비유가 반복 재사용 개념을 전달.
- PPTX 예시(`pptx-theme-setter`)가 실제 코드 형태로 구체화됨.
- Progressive Loading 개념이 CLAUDE.md와의 핵심 차이를 명확히 구분.

**🟡 개선 제안**
- Skill 경로(`.claude/skills/` vs `~/.claude/skills/`)의 차이 설명 없음 → 로컬 vs 전역 스킬 개념 혼란 가능.
- EXECUTE에서 "이 학습 스킬 자체가 Skill의 예시"라는 설명이 있으면 자기참조적이고 강력한 예시가 됨.

---

#### 기능 3: MCP

**✅ 잘된 점**
- "플러그처럼 꽂으면 바로 사용" 비유가 직관적.
- 실용적 예시 표(Slack, Calendar, Notion, GitHub, WebSearch)가 즉각 활용 욕구를 자극.
- PPTX + Playwright MCP 연결 예시가 실전 코드 형태로 잘 구현됨.

**🟡 개선 제안**
- MCP 서버 설치에는 Node.js가 필요한 경우가 있는데, 레볼루션 0에서 "Node.js 설치 불필요"라고 했던 것과 충돌 가능성. 명확화 필요.
- `.mcp.json` vs `settings.json`에서의 MCP 설정 차이 미언급.

---

#### 기능 4: Subagent

**✅ 잘된 점**
- "상사-부하 위임" 비유가 단방향 구조를 완벽히 설명.
- PPTX 3-Subagent 파이프라인 다이어그램이 가장 실전적인 예시.
- 퀴즈의 오답 선택지("Claude가 못하는 일을 할 수 있어서")가 흔한 오해를 직접 교정.

**🟡 개선 제안**
- Subagent의 비용(토큰 사용량) 측면 언급이 없음. "컨텍스트 절약"만 언급, 실제 API 비용 측면도 중요.
- "독립 컨텍스트"가 무엇인지 더 쉬운 비유가 필요. ("깨끗한 메모장에서 시작한다"처럼)

---

#### 기능 5: Agent Teams

**✅ 잘된 점**
- Subagent와의 비교 표가 핵심 차이를 3행으로 완벽 정리.
- "실험적 기능"이라는 경고가 명확히 표시됨.
- PPTX 칸반 보드 다이어그램이 협업 구조를 시각화.

**🟡 개선 제안**
- tmux 미지원 환경(VSCode 터미널, Windows Terminal)에 대한 처리 방법이 "미지원"으로만 끝남. 대안 없음.
- 실험적 기능이므로 "현재 동작이 변경될 수 있음" 경고 추가 권장.
- EXECUTE가 "settings.json에 추가해줘"로만 끝나 실제 Agent Teams 협업 체험이 없음.

---

#### 기능 6: Hook

**✅ 잘된 점**
- "AI(확률적) vs Hook(결정적)" 대비가 핵심 가치를 명쾌하게 전달.
- "자동 체크리스트" 비유가 이벤트 기반 실행의 본질을 잘 설명.
- PPTX 품질 검사 Hook 예시가 실전 JSON 코드 형태로 구현됨.

**🔴 문제 발견**
- PPTX Hook 예시의 Shell 명령어:
  ```bash
  if echo '$TOOL_INPUT' | grep -q '.pptx\|slides'
  ```
  `$TOOL_INPUT`은 Claude Code Hook의 실제 환경변수명이 아닐 가능성 높음. 공식 문서 검증 필요.

**🟡 개선 제안**
- Hook의 보안 위험성(임의 Shell 명령 실행) 경고 없음. 비개발자가 복사한 Hook이 위험할 수 있음.
- PreToolUse vs PostToolUse의 실용적 차이를 예시로 구분 필요.

---

#### 기능 7: Plugin

**✅ 잘된 점**
- "Plugin 없이 → 수동 3회 반복 / Plugin 사용 → 한 줄 설치" 대비가 핵심 가치를 즉시 전달.
- "이 프로젝트 자체가 Plugin의 예시" — 자기참조적이고 강력한 근거.
- PPTX 플러그인 디렉토리 구조 예시가 3담당 스킬 분리를 실전 파일 구조로 구체화.

**🟡 개선 제안**
- Plugin 설치 명령어(`/plugin marketplace add hongsw/...`)가 실제로 동작하는지 검증 표시 없음.
- Plugin 버전 관리나 업데이트 방법 미언급.

---

### 레볼루션 4: 기초 다지기

**📂 체험 파일**: `references/rev4-basics.md`

**수행 내용**

CLI 5개 명령어, Git 워크플로우, GitHub PR 개념을 체험. "보고서_최종_찐최종.docx" 비유가 공감 유발.

**✅ 잘된 점**
- "명령어를 외울 필요 없습니다" 메시지가 학습 부담 제거.
- Git = 게임 세이브 비유가 개발 경험 없는 사람에게 최고의 설명.
- `보고서_최종_찐최종.docx` 예시가 극적인 공감 유발.
- 퀴즈 3개가 각각 CLI, Git, GitHub를 독립적으로 검증.

**🟡 개선 제안**
- PPTX 연결 없음. "PPTX 파일을 Git으로 관리하면 어떻게 되나"라는 구체 예시 필요.
  ```
  commit 1: "테마 설정 완료 (파란색 계열)"
  commit 2: "내용 초안 작성"
  commit 3: "렌더링 완료 - output-v1.pptx"
  ```
- 에디터 추천표에서 "Antigravity"는 공개 문서에서 확인되지 않는 제품명. 철자 또는 제품명 재확인 필요.

---

### 레볼루션 5: 스킬 만들기 실습

**📂 체험 파일**: `references/rev5-create-skill.md`, `prompts/create-skill.md`

**수행 내용**

실제로 `morning-routine` 스킬을 만드는 과정을 따라 체험. SKILL.md 최소 구성(메타데이터 + 지시사항)을 확인.

**✅ 잘된 점**
- "Skill 만들기 = 마크다운 파일 하나 작성" — 진입 장벽을 극단적으로 낮춤.
- `morning-routine` 예시가 실용적이고 즉시 복사 가능한 수준.
- 참조 파일 구조(`SKILL.md` + `references/`) 설명이 확장성을 자연스럽게 제시.
- 새로 추가된 `pptx-maker` 스킬 예시가 PPTX 통일 주제와 연결됨.

**🔴 치명적 버그**
```
prompts/create-skill.md:10 → references/block5-create-skill.md 참조 (파일 없음)
```

**🟡 개선 제안**
- SKILL.md의 `description` 필드 작성 방법이 부족. 자동 매칭 트리거 키워드 전략 설명 필요.
- 스킬 실행 후 `실행이 안됩니다` 케이스 대응이 "경로 확인, SKILL.md 확인"으로만 끝남 — 디버깅 단계가 더 구체화 필요.

---

### 레볼루션 6: 리서치와 학습의 결합

**📂 체험 파일**: `references/rev6-research-integration.md`, `prompts/research-integration.md`

**수행 내용**

도메인 리서치 파이프라인(Step 0~5 + Final)을 확인 후 PPTX 파이프라인 연결 예시를 체험.

**✅ 잘된 점**
- "도구를 배웠으니 이제 방법론을 배운다"는 메타 전환이 커리큘럼 완결성 부여.
- PPTX 파이프라인(리서치 → 내용 구성 → PPTX 자동 생성 → Plugin 배포)이 레볼루션 0~5 전체를 통합.
- 학습 주제 예시 표가 즉각 활용 가능한 아이디어 제공.

**🔴 치명적 버그**
```
prompts/research-integration.md:10 → references/block6-research-integration.md 참조 (파일 없음)
```

**🟡 개선 제안**
- 졸업 체크리스트가 여전히 "Block N" 표현:
  ```
  ✅ Block 0: 환경 설정 완료  ← "레볼루션 0"으로 수정 필요
  ```
- 학습 완료 정리 섹션에서 "커뮤니티 참여" 링크가 있으나 해당 GitHub 조직이 실제 활성화 상태인지 확인 필요.

---

## 전체 이슈 목록

### 🔴 Critical (즉시 수정 필요)

| # | 파일 | 이슈 |
|---|------|------|
| C1 | `prompts/setup.md` | `references/block0-setup.md` 참조 → 파일 없음 |
| C2 | `prompts/experience.md` | `references/block1-experience.md` 참조 → 파일 없음 |
| C3 | `prompts/core-features.md` | `references/block3-*.md` 참조 → 파일 없음 |
| C4 | `prompts/create-skill.md` | `references/block5-create-skill.md` 참조 → 파일 없음 |
| C5 | `prompts/research-integration.md` | `references/block6-research-integration.md` 참조 → 파일 없음 |
| C6 | `prompts/research-integration.md:80-86` | 졸업 체크리스트 여전히 `Block N` 표현 |

**근본 원인**: `block*.md` → `rev*.md` 파일 리네임 시 `prompts/` 파일 내용을 업데이트하지 않음.

### 🟡 Major (개선 권장)

| # | 파일 | 이슈 |
|---|------|------|
| M1 | `references/rev0-setup.md` | PPTX 프로젝트 예시 없음 (다른 레볼루션과 불일치) |
| M2 | `references/rev1-experience.md` | PPTX 데모 예시 없음 |
| M3 | `references/rev2-why.md` | PPTX 자동화 vs 수작업 비교 없음 |
| M4 | `references/rev4-basics.md` | PPTX Git 버전 관리 예시 없음 |
| M5 | `references/rev3-6-hook.md` | `$TOOL_INPUT` 환경변수 공식 검증 필요 |
| M6 | `references/rev4-basics.md` | "Antigravity" 에디터명 확인 필요 |
| M7 | `references/rev3-3-mcp.md` | Node.js 불필요 선언(레볼루션 0)과 MCP 설치 요구 충돌 |

### 🔵 Minor (선택적 개선)

| # | 파일 | 이슈 |
|---|------|------|
| m1 | `references/rev3-2-skill.md` | 로컬 vs 전역 스킬 경로 차이 미설명 |
| m2 | `references/rev3-5-agent-teams.md` | tmux 미지원 환경 대안 없음 |
| m3 | `references/rev3-6-hook.md` | Hook 보안 위험성 경고 없음 |
| m4 | `references/rev3-7-plugin.md` | Plugin 업데이트 방법 미언급 |
| m5 | `SKILL.md` | 레볼루션 4의 PPTX 예시가 `references/rev4-basics.md`에 없는데 PPTX 연결로 명시됨 |

---

## 오픈소스 기여 우선순위

### PR 제안 1 (즉시): `prompts/` 파일 일괄 업데이트

```
대상: 모든 prompts/*.md 파일
작업:
  - block0 → rev0 (setup.md)
  - block1 → rev1 (experience.md)
  - block3 → rev3 (core-features.md, 7군데)
  - block5 → rev5 (create-skill.md)
  - block6 → rev6 (research-integration.md)
  - 졸업 체크리스트 "Block N" → "레볼루션 N"
영향도: 학습 실행 시 참조 파일을 찾을 수 없어 동작 불가 → Critical
```

### PR 제안 2: 나머지 레볼루션 PPTX 예시 추가

```
대상: rev0, rev1, rev2, rev4
작업: 각 파일에 "🖥️ PPTX 프로젝트 적용 예시" 섹션 추가
  - rev0: 프로젝트 디렉토리 구조 만들기 예시
  - rev1: "/pptx-maker" 실행 데모
  - rev2: PPTX 수작업 vs 자동화 시간 비교
  - rev4: PPTX 파일 Git 커밋 로그 예시
영향도: 학습 일관성 — PPTX 통일 주제가 레볼루션 0~4에서 끊김
```

### PR 제안 3: 기술 검증 및 보안

```
- rev3-6-hook.md: $TOOL_INPUT 환경변수 공식 문서 대조 및 수정
- rev3-3-mcp.md: Node.js 의존성 명확화
- rev4-basics.md: "Antigravity" 에디터 정식명 확인
- rev3-6-hook.md: Hook 보안 경고 문구 추가
```

---

## 학습 체험 총평

### 커리큘럼 설계 평가 (4.0/5.0)

**강점:**
1. **STOP 프로토콜** — Phase A/B 분리로 퀴즈 조기 노출 방지. 학습 설계의 정석.
2. **PPTX 통일 주제** — 7대 기능을 하나의 프로젝트로 연결하여 파편화 방지.
3. **3담당 구조**(🎨/✍️/🖨️) — 에이전트 협업 개념을 실무 역할로 추상화. 독창적.
4. **비유의 정확성** — Git=게임세이브, Skill=레시피, Hook=자동체크리스트. 기술 개념의 진입 장벽을 최소화.
5. **자기참조적 구조** — "이 학습 자체가 Skill의 예시". 메타 학습 효과.

**약점:**
1. **prompts/ ↔ references/ 불일치** — 리네임 후 prompts가 깨진 상태. 테스트 자동화 부재.
2. **PPTX 예시 편중** — rev3-*에만 집중, rev0~rev2, rev4는 "PPTX 없는" 상태.
3. **실험적 기능 비중** — Agent Teams(레볼루션 3-5)가 tmux 미지원 환경에서 실습 불가.

### 비개발자 친화성 평가 (4.2/5.0)

- 기술 용어에 대부분 비유가 붙어 있어 이해 가능
- "기억할 필요 없습니다. Claude에게 말하면 됩니다" 반복이 심리적 안전감 형성
- Hook의 Shell 스크립트 예시는 비개발자에게 어려울 수 있음

### 오픈소스 기여자 관점

> "커리큘럼의 설계 철학은 탁월하다. STOP 프로토콜과 PPTX 통일 주제는 교육 설계의 베스트 프랙티스를 정확히 적용했다. 그러나 prompts/ 파일이 존재하지 않는 참조 파일을 가리키는 Critical 버그가 있어, 현재 상태로는 레볼루션 시작 시 즉시 실패한다. 이 PR은 3시간 안에 수정 가능한 수준으로, 기여 환영."

---

*이 문서는 self-learning 커리큘럼 v0.3 (commit `cd19540`) 기준으로 작성되었습니다.*
