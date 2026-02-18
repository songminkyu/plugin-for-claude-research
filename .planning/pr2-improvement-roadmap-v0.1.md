# PR #2 Improvement Roadmap - v0.1

**작성일**: 2026-02-17
**대상**: PR #2 머지 결과 (self-learning skill + notebooklm-infographic plugin)
**접근법**: 짧은 사이클 이터레이션 (v0.1 → v0.2 → v0.3 ...)
**목표**: 반복적 개선을 통한 품질, 기능, 문서화 향상

---

## PR #2 변경사항 분석

### 추가된 컴포넌트
| 컴포넌트 | 라인 수 | 파일 수 | 주요 기능 |
|---------|--------|--------|----------|
| **self-learning skill** | 3,288 | 18 | Claude Code 자기주도 학습 프레임워크 |
| **notebooklm-infographic** | 1,191 | 5 | NotebookLM 기반 인포그래픽 자동 생성 |
| **듀얼 invocation** | 489 | 3 | slash command + Skill tool 통합 |
| **멀티 스킬 아키텍처** | 50 | 2 | domain-research에 2개 스킬 통합 |
| **Total** | **+7,711** | **93** | 5개 플러그인 생태계 |

### 아키텍처 개선사항
- ✅ **듀얼 invocation**: `/domain-research` + Skill tool 동시 지원
- ✅ **멀티 스킬**: 1개 플러그인에 N개 스킬 (domain-research: 2개)
- ✅ **표준화**: YAML frontmatter, commands/ 디렉토리
- ✅ **설치 자동화**: install.js 멀티 스킬 지원

---

## v0.1: 개선 영역 식별

### 1️⃣ self-learning Skill 개선 영역

#### 📂 파일 구조 분석
```
plugins/domain-research/skills/self-learning/
├── SKILL.md (111 lines) - 메인 스킬 정의
├── prompts/ (7 files, 674 lines) - 사용자 대상 프롬프트
│   ├── basics.md
│   ├── core-features.md
│   ├── create-skill.md
│   ├── experience.md
│   ├── research-integration.md
│   ├── setup.md
│   └── why-cli.md
└── references/ (10 files, 2,503 lines) - 참조 문서 (Block 0-6)
    ├── block0-setup.md
    ├── block1-experience.md
    ├── block2-why.md
    ├── block3-1-claude-md.md
    ├── block3-2-skill.md
    ├── block3-3-mcp.md
    ├── block3-4-subagent.md
    ├── block3-5-agent-teams.md
    ├── block3-6-hook.md
    ├── block3-7-plugin.md
    ├── block4-basics.md
    ├── block5-create-skill.md
    └── block6-research-integration.md
```

#### 🔍 발견된 이슈 (v0.1)

**A. 구조적 문제**
- ⚠️ **중복 파일**: `plugins/domain-research/skills/self-learning/` vs `skills/self-learning/`
  - 동일 내용이 2개 위치에 존재 (93 files 중 중복)
  - 유지보수 부담: 수정 시 2곳 모두 변경 필요
  - **우선순위**: 🔴 High (구조 개선 시급)

- ⚠️ **파일 크기**: references/ 파일들이 큰 편 (평균 250 lines)
  - 로딩 속도 영향 가능
  - **우선순위**: 🟡 Medium (성능 측정 후 판단)

**B. 기능적 개선**
- 📝 **진행 상황 추적 부재**: 사용자가 어느 블록까지 완료했는지 추적 안 됨
  - Block 0 → Block 6 진행 중 이탈 시 재개 어려움
  - **개선안**: 진행 상태 저장 (JSON 파일 또는 환경변수)
  - **우선순위**: 🟢 Low (사용성 개선)

- 🎯 **퀴즈 결과 저장 부재**: 퀴즈 정답/오답 기록 없음
  - 학습 효과 측정 불가
  - **개선안**: 퀴즈 결과 로깅 및 리포트 생성
  - **우선순위**: 🟢 Low (향후 기능)

**C. 문서화 개선**
- 📖 **README 부재**: self-learning 스킬 전용 README 없음
  - 사용자가 스킬 개요 파악 어려움
  - **개선안**: `plugins/domain-research/skills/self-learning/README.md` 추가
  - **우선순위**: 🟡 Medium (접근성 향상)

- 📸 **예제/스크린샷 부족**: STOP 프로토콜 동작 시각화 없음
  - Phase A/B 구조 이해 어려움
  - **개선안**: 스크린샷 또는 GIF 추가
  - **우선순위**: 🟢 Low (선택적)

---

### 2️⃣ notebooklm-infographic Plugin 개선 영역

#### 📂 파일 구조 분석
```
plugins/notebooklm-infographic/
├── .claude-plugin/
│   └── plugin.json (13 lines)
├── commands/
│   └── infographic.md (227 lines)
└── skills/notebooklm-infographic/
    └── SKILL.md (336 lines)

skills/notebooklm-infographic/ (중복?)
├── README.md (114 lines)
├── SKILL.md (336 lines)
├── manifest.json (31 lines)
└── prompt.md (315 lines)
```

#### 🔍 발견된 이슈 (v0.1)

**A. 구조적 문제**
- ⚠️ **중복 파일**: `plugins/notebooklm-infographic/skills/` vs `skills/notebooklm-infographic/`
  - self-learning과 동일한 문제
  - **우선순위**: 🔴 High (일관성 위해 통일 필요)

- ⚠️ **파일 역할 불명확**: `manifest.json` vs `plugin.json`
  - 둘 다 메타데이터인데 용도가 다른가?
  - **개선안**: 역할 문서화 또는 통합
  - **우선순위**: 🟡 Medium (명확성 향상)

**B. 기능적 개선**
- 🎨 **커스터마이징 부족**: 인포그래픽 스타일, 색상 선택 불가
  - 사용자가 브랜드에 맞는 디자인 적용 어려움
  - **개선안**: 템플릿 선택 옵션 추가
  - **우선순위**: 🟡 Medium (사용자 요청 시)

- 🔗 **NotebookLM MCP 의존성**: MCP 미설치 시 동작 불가
  - 에러 메시지 불친절
  - **개선안**: MCP 설치 가이드 및 에러 핸들링 강화
  - **우선순위**: 🟡 Medium (안정성)

**C. 문서화 개선**
- 📖 **설치 가이드**: NotebookLM MCP 설정 방법 상세화 필요
  - 현재 README는 있지만 MCP 설정 부분이 약함
  - **개선안**: MCP 설치부터 첫 실행까지 단계별 가이드
  - **우선순위**: 🟡 Medium (신규 사용자 진입 장벽)

---

### 3️⃣ 듀얼 Invocation 개선 영역

#### 📂 추가된 파일
```
plugins/domain-research/commands/domain-research.md (110 lines)
plugins/pdf-research/commands/pdf-research.md (152 lines)
plugins/notebooklm-infographic/commands/infographic.md (227 lines)
```

#### 🔍 발견된 이슈 (v0.1)

**A. 일관성 문제**
- ⚠️ **문서 형식 불일치**: commands/*.md 파일 구조가 제각각
  - domain-research.md: 간결한 설명
  - pdf-research.md: 상세한 설명
  - infographic.md: 매우 상세한 설명
  - **개선안**: 통일된 템플릿 정의
  - **우선순위**: 🟡 Medium (일관성)

**B. 누락된 플러그인**
- ⚠️ **pm-coach 듀얼 invocation 미지원**: commands/pm-coach.md 없음
  - 일관성 없음 (domain-research는 있는데 pm-coach는 없음)
  - **개선안**: `commands/pm-coach.md` 추가
  - **우선순위**: 🟡 Medium (완성도)

---

### 4️⃣ 멀티 스킬 아키텍처 개선 영역

#### 변경된 파일
```
plugins/domain-research/bin/install.js (50 lines modified)
plugins/domain-research/.claude-plugin/plugin.json (skills: string → array)
```

#### 🔍 발견된 이슈 (v0.1)

**A. 테스트 부재**
- ⚠️ **멀티 스킬 설치 검증 없음**: install.js 테스트 없음
  - 2개 스킬이 정상적으로 설치되는지 확인 불가
  - **개선안**: 설치 후 검증 스크립트 추가
  - **우선순위**: 🟡 Medium (안정성)

**B. 문서화 부족**
- 📖 **멀티 스킬 개발 가이드 없음**: 다른 플러그인에 적용하기 어려움
  - 어떻게 멀티 스킬을 만드는지 문서화 안 됨
  - **개선안**: `docs/MULTI_SKILL_GUIDE.md` 작성
  - **우선순위**: 🟢 Low (향후 확장 시)

---

## v0.1 종합: 우선순위 매트릭스

### 개선 항목 우선순위 (v0.1)

| 순위 | 개선 항목 | 영역 | 우선순위 | 예상 시간 | 영향도 |
|-----|----------|-----|---------|---------|--------|
| 1 | 중복 파일 제거 (self-learning, notebooklm) | 구조 | 🔴 High | 1h | ⭐⭐⭐⭐⭐ |
| 2 | pm-coach 듀얼 invocation 추가 | 기능 | 🟡 Medium | 2h | ⭐⭐⭐⭐ |
| 3 | commands/*.md 템플릿 통일 | 문서 | 🟡 Medium | 2h | ⭐⭐⭐ |
| 4 | self-learning README 추가 | 문서 | 🟡 Medium | 1.5h | ⭐⭐⭐ |
| 5 | NotebookLM MCP 설치 가이드 강화 | 문서 | 🟡 Medium | 1.5h | ⭐⭐⭐ |
| 6 | 멀티 스킬 설치 검증 스크립트 | 테스트 | 🟡 Medium | 2h | ⭐⭐⭐ |
| 7 | manifest.json vs plugin.json 역할 명확화 | 문서 | 🟡 Medium | 1h | ⭐⭐ |
| 8 | self-learning 진행 상황 추적 | 기능 | 🟢 Low | 4h | ⭐⭐ |
| 9 | 인포그래픽 커스터마이징 옵션 | 기능 | 🟢 Low | 6h | ⭐⭐ |
| 10 | 퀴즈 결과 로깅 및 리포트 | 기능 | 🟢 Low | 4h | ⭐ |

---

## v0.1 → v0.2 전환 준비

### 검증 필요 사항
- [ ] 중복 파일 제거가 최우선 작업인가?
- [ ] pm-coach 듀얼 invocation이 정말 필요한가?
- [ ] commands/*.md 템플릿이 실제로 불일치한가? (파일 확인 필요)
- [ ] 사용자가 가장 시급하다고 느끼는 개선사항은?

### 사용자 피드백 요청 (v0.2 준비)
1. **중복 파일 문제**: `plugins/*/skills/` vs `skills/` 중 어느 것을 표준으로?
2. **우선순위 조정**: 위 10개 항목 중 가장 시급한 것 3개는?
3. **추가 개선 아이디어**: v0.1에서 놓친 개선사항이 있는가?
4. **이터레이션 속도**: 빠른 개선 (1-2일) vs 완벽한 개선 (1주일)?

---

**v0.1 종료** - 사용자 피드백 대기 중

**다음 단계**:
- v0.2에서 우선순위 확정 및 구체적 실행 계획 수립
- v0.3에서 실제 개선 작업 시작 및 검증
