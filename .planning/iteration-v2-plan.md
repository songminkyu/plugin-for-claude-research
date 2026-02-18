# Iteration v2 계획

## 버전: v2.0
## 날짜: 2026-02-18
## 기반 리뷰: docs/review-self-learning-20260218.md
## 기반 계획: .planning/iteration-v1-plan.md (deferred 이슈 승계)

## 개선 목표

### 목표 1: "Antigravity" 에디터 이름 정확성 검증 및 수정 (M6)
- 대상 파일: `references/rev0-setup.md`
- 현재 상태: 에디터 선택 표에서 "Antigravity"로만 표기. 팩트체크 결과: Google이 2025년 11월 출시한 "Google Antigravity" IDE가 실존함. 무료, AI 내장, VS Code 포크 — 커리큘럼 설명과 일치. 단, "Google" 수식어 없이 "Antigravity"만 표기하면 검색 시 혼란 가능
- 목표 상태: "Antigravity" → "Google Antigravity"로 수정. 설명에 "(Google, 무료)" 등 출처 명확화
- 우선순위: Minor (팩트는 정확하나, 이름 명확화로 신뢰도 향상)

### 목표 2: 로컬 vs 전역 스킬 경로 설명 추가 (m1)
- 대상 파일: `references/rev3-2-skill.md`
- 현재 상태: Skill 경로(`.claude/skills/` vs `~/.claude/skills/`)의 차이 설명이 없음. 프로젝트 로컬 스킬과 전역 스킬의 개념이 구분되지 않아 학습자가 혼란 가능
- 목표 상태: 로컬 스킬(프로젝트 내 `.claude/skills/`)과 전역 스킬(`~/.claude/skills/`)의 차이를 비개발자 친화적 비유와 함께 설명하는 단락 추가
- 우선순위: Minor (부가 설명 수준이나, Skill 개념의 완전한 이해를 위해 필요)

### 목표 3: Agent Teams tmux 미지원 환경 대안 안내 (m2)
- 대상 파일: `references/rev3-5-agent-teams.md`
- 현재 상태: tmux 미지원 환경(VSCode 터미널, Windows Terminal 등)에 대해 "미지원"으로만 표기. 대안이나 우회 방법이 전혀 안내되지 않음
- 목표 상태: tmux 미지원 환경에서의 대안(예: 별도 터미널 앱 사용, tmux 설치 방법, 또는 Subagent로 대체하는 방법) 안내 추가. 실험적 기능 특성상 간결하게 유지
- 우선순위: Minor (Agent Teams 자체가 실험적 기능이므로 영향 범위 제한적. 다만 학습 흐름이 "미지원"에서 끊기는 문제 해결)

### 목표 4: Plugin 업데이트 방법 안내 추가 (m4)
- 대상 파일: `references/rev3-7-plugin.md`
- 현재 상태: Plugin 설치 방법은 안내되어 있으나, 설치 후 업데이트(새 버전 반영) 방법이 전혀 언급되지 않음
- 목표 상태: Plugin 업데이트 절차(예: 재설치, git pull, 버전 확인 등)를 간단히 안내하는 단락 추가
- 우선순위: Minor (추가 정보 수준이나, Plugin 사용 수명주기의 완결성을 위해 필요)

## 성공 기준
- [ ] 목표 1: rev0-setup.md와 rev4-basics.md의 에디터명이 검증된 정확한 이름으로 일관되게 표기됨
- [ ] 목표 2: rev3-2-skill.md에 로컬/전역 스킬 경로 차이 설명이 추가되고, 비개발자가 이해 가능한 비유가 포함됨
- [ ] 목표 3: rev3-5-agent-teams.md에 tmux 미지원 환경 대안이 최소 1가지 이상 안내됨
- [ ] 목표 4: rev3-7-plugin.md에 Plugin 업데이트 방법이 안내됨

## 제외된 이슈 (이유 포함)

### v1에서 처리 완료된 이슈
- C1~C6 (prompts/ 파일 참조 버그, 졸업 체크리스트): v1에서 수정 완료
- M1~M4 (rev0/1/2/4 PPTX 예시 누락): v1 목표 1에서 처리
- M5 ($TOOL_INPUT 환경변수 검증): v1 목표 2에서 처리
- M7 (Node.js 의존성 충돌 명확화): v1 목표 3에서 처리
- m3 (Hook 보안 경고): v1 목표 2에서 부분 포함
- m5 (SKILL.md rev4 PPTX 명시 불일치): v1 목표 1에서 자동 해소
