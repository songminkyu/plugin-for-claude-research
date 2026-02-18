# Iteration v1 계획

## 버전: v1.0
## 날짜: 2026-02-18
## 기반 리뷰: docs/review-self-learning-20260218.md

## 개선 목표

### 목표 1: 레볼루션 0~4 PPTX 예시 일관성 확보 (M1, M2, M3, M4)
- 대상 파일: `references/rev0-setup.md`, `references/rev1-experience.md`, `references/rev2-why.md`, `references/rev4-basics.md`
- 현재 상태: rev3-* 파일에만 PPTX 프로젝트 적용 예시가 있고, rev0/1/2/4에는 PPTX 예시가 전혀 없음. SKILL.md에서 "모든 레볼루션은 PPTX 프로젝트를 공통 예시로 사용"이라고 명시했으나 실제 4개 레볼루션에서 누락
- 목표 상태: 각 파일에 해당 레볼루션 주제에 맞는 PPTX 프로젝트 적용 예시 섹션 추가
  - rev0: PPTX 프로젝트 디렉토리 구조 만들기 예시
  - rev1: "/pptx-maker" 실행 데모 또는 "PPTX 만들어줘" 체험 예시
  - rev2: PPTX 수작업 vs CLI 자동화 시간 비교 예시
  - rev4: PPTX 파일 Git 커밋 로그 예시 (버전 관리 시나리오)
- 우선순위: Major (커리큘럼 일관성의 핵심. 4개 레볼루션에 걸쳐 통일 주제가 끊기는 문제)

### 목표 2: Hook 환경변수 `$TOOL_INPUT` 공식 검증 및 수정 (M5)
- 대상 파일: `references/rev3-6-hook.md`
- 현재 상태: Hook 예시 코드에서 `$TOOL_INPUT` 환경변수를 사용하나, Claude Code 공식 Hook 스펙에서 해당 변수명이 유효한지 검증되지 않음. 비개발자가 복사하여 사용할 경우 동작하지 않을 위험
- 목표 상태: Claude Code 공식 문서와 대조하여 올바른 환경변수명으로 수정. Hook 보안 경고 문구도 함께 추가
- 우선순위: Major (기술적 정확성. 비개발자가 그대로 복사하면 실패하는 코드)

### 목표 3: MCP 섹션 Node.js 의존성 충돌 명확화 (M7)
- 대상 파일: `references/rev3-3-mcp.md`, `references/rev0-setup.md`
- 현재 상태: rev0에서 "복잡한 사전 준비물 없음"으로 안내하나, rev3-3 MCP 섹션에서 일부 MCP 서버 설치에 Node.js가 필요할 수 있음. 학습자에게 혼란 유발
- 목표 상태: MCP 참조 파일에 Node.js 의존성이 필요한 경우와 불필요한 경우를 명확히 구분하는 안내 추가. rev0과의 일관성 유지
- 우선순위: Major (학습 흐름 내 모순. 초보자가 MCP 설치 시 예상치 못한 장벽)

## 성공 기준
- [ ] 목표 1: rev0, rev1, rev2, rev4 각 파일에 PPTX 프로젝트 적용 예시 섹션이 존재하며, rev3-* 수준의 구체성(코드/명령어/시나리오 포함)을 갖춤
- [ ] 목표 2: rev3-6-hook.md의 Hook 예시가 Claude Code 공식 Hook 스펙과 일치하는 환경변수를 사용하며, 보안 경고 문구가 포함됨
- [ ] 목표 3: rev3-3-mcp.md에서 Node.js 의존성 여부가 명확히 안내되고, rev0-setup.md와 모순되지 않음

## 제외된 이슈 (이유 포함)

### Critical 이슈 (C1~C6): 이미 수정 완료
- C1~C5 (`prompts/*.md`의 `block*.md` 참조 버그): prompts/ 파일에서 `block*` 참조가 모두 `rev*`로 수정된 것을 확인 (`grep block\d prompts/` 결과 0건)
- C6 (졸업 체크리스트 "Block N" 표현): "Block" 텍스트가 전체 디렉토리에서 제거된 것을 확인

### Major 이슈
- M6 ("Antigravity" 에디터명 확인): 단순 팩트체크로 임팩트가 상대적으로 낮음. v2에서 처리

### Minor 이슈 (m1~m5): v2 이후로 연기
- m1 (로컬 vs 전역 스킬 경로): 부가 설명 수준, 학습 흐름에 영향 없음
- m2 (tmux 미지원 대안): Agent Teams가 실험적 기능이라 우선순위 낮음
- m3 (Hook 보안 경고): 목표 2에서 부분적으로 포함
- m4 (Plugin 업데이트 방법): 추가 정보 수준
- m5 (SKILL.md rev4 PPTX 명시 불일치): 목표 1에서 자동 해소
