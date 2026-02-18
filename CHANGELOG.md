# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

---

## [2.0.0] - 2026-02-18

### Added
- **`agentic-learning` skill** — AI-native coding curriculum (formerly `self-learning`)
  - 7개 레볼루션(Rev 0~6) 커리큘럼: 환경 설정 → CLI 이해 → 기본 사용 → 핵심 기능 → 스킬 제작 → 리서치 통합
  - PPTX 자동 생성 프로젝트를 통일 예시로 사용하는 인터랙티브 학습 프레임워크
  - Phase A/B STOP 프로토콜 — 7개 prompt 전체 통일 완성
  - 비개발자 접근성 강화 (GUI vs CLI 비교, 맥락 설명 보강)

### Changed
- **`self-learning` → `agentic-learning`** 스킬 이름 변경
  - 커리큘럼의 본질이 "자기주도 학습"보다 "에이전틱 워크플로우를 실행하며 배우는 것"에 가까움
  - 슬래시 명령어: `/self-learning` → `/agentic-learning`
- `agentic-learning` 커리큘럼 4사이클 이터레이션 완성 (25개 이슈 해결)

### Fixed (agentic-learning 커리큘럼 이터레이션)

#### v4 (2026-02-18)
- `why-cli.md` Phase A에서 `AskUserQuestion` 제거 → Phase B로 이동 (STOP 프로토콜 준수)
- Phase A 마무리 멘트 표준화

#### v3 (2026-02-18)
- `rev2-why.md` EXECUTE 섹션 강의형 → 실습형 전환 (실습 2개 추가)
- `core-features.md` Rev3→Rev4 전환 연결 문구 추가
- `rev1-experience.md` 비개발자 예시 병기
- `rev3-3-mcp.md` JSON 코드블록 앞 맥락 설명 추가
- `rev3-6-hook.md` 보안 경고 EXPLAIN 초반 조기 배치

#### v2 (2026-02-18)
- `rev0-setup.md` Node.js 의존성 명시
- Antigravity 에디터명 명확화
- 스킬 설치 경로 설명 구체화
- tmux 미설치 환경 대안 안내 추가
- Hook 보안 위험성 경고 추가
- Plugin 업데이트 절차 추가

#### v1 (2026-02-18)
- `prompts/` 전체 깨진 참조 수정 (`references/rev*.md` 정규화)
- PPTX 자동 생성 예시 4곳 추가 (rev0/rev1/rev2/rev4)
- Hook 환경변수 버그 수정 (`$INPUT` → `$CLAUDE_TOOL_INPUT`)
- MCP Node.js 의존성 모순 해소

---

## [1.2.0] - 2026-02-18

### Added
- `레볼루션` 네이밍 체계 도입 (blocks → 레볼루션)
- PPTX 통일 예시 전 references 파일 적용
- domain-research 플러그인 설치 검증 스크립트

### Changed
- 모든 `prompts/` 파일에서 `references/rev*.md` 참조 방식 표준화
- `commands/*.md` 파일 전체에 See Also 섹션 추가

---

## [1.1.0] - 2026-01-25

### Added
- `self-learning` 스킬 추가 (ai-native-camp/camp-1 커리큘럼 기반)
- `pm-coach` 플러그인 — PM 업무 소통 최적화 (요청/수신/보고 모드)
- 모든 플러그인에 슬래시 커맨드 지원 (스킬 + 커맨드 듀얼 지원)
- YAML frontmatter를 모든 스킬 파일에 추가 (Claude Code 호환성)
- PDF Research 워크플로우 스크린샷 README 추가

### Changed
- 중복 스킬 파일 제거, `plugins/*/skills/` 구조로 표준화

---

## [1.0.0] - 2026-01-20

### Added
- **`domain-research`** 플러그인 — 5단계 리서치 파이프라인 (대화형 의도 분석)
- **`pdf-research`** 플러그인 — LightRAG 기반 PDF 인덱싱 및 시맨틱 검색
- 마켓플레이스 호환 플러그인 구조 (`.claude-plugin/`)
- 로고 에셋 (PNG, SVG, HTML)
- 한국어 README 안내 섹션

---

[Unreleased]: https://github.com/hongsw/plugin-for-claude-research/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/hongsw/plugin-for-claude-research/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/hongsw/plugin-for-claude-research/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/hongsw/plugin-for-claude-research/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/hongsw/plugin-for-claude-research/releases/tag/v1.0.0
