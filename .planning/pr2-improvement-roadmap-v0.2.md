# PR #2 Improvement Roadmap - v0.2

**작성일**: 2026-02-17
**상태**: Refined - 사용자 피드백 반영 (v0.1 → v0.2)
**접근법**: 균형 개선 (3-4일, 2-3개 항목 묶음)

**v0.1 → v0.2 변경사항**:
- ✅ 중복 파일 해결 방법 확정: `plugins/*/skills/` 표준화, `skills/` 삭제
- ✅ 1순위 개선 확정: 중복 파일 제거
- ✅ 이터레이션 속도: 균형 개선 (3-4일 주기)
- 📊 개선 항목을 3개 이터레이션으로 그룹화

---

## 개선 전략 (v0.2)

### 이터레이션 구조
```
Iteration 1 (Day 1-4): 구조 개선 + 일관성
├── 중복 파일 제거 (1h)
├── pm-coach 듀얼 invocation (2h)
└── commands/*.md 템플릿 통일 (2h)
└── 검증 및 테스트 (3h)
Total: 8h (1일 집중 작업 또는 4일 분산)

Iteration 2 (Day 5-8): 문서화 강화
├── self-learning README (1.5h)
├── NotebookLM MCP 설치 가이드 (1.5h)
└── manifest.json vs plugin.json 역할 명확화 (1h)
└── 검증 및 피드백 (2h)
Total: 6h (3일 분산)

Iteration 3 (Day 9-12): 품질 보증 + 향후 기능
├── 멀티 스킬 검증 스크립트 (2h)
├── self-learning 진행 상황 추적 (선택, 4h)
└── 인포그래픽 커스터마이징 (선택, 6h)
Total: 2-12h (선택적)
```

---

## Iteration 1: 구조 개선 + 일관성 (Day 1-4)

### 목표
- 🎯 중복 파일 제거로 유지보수 부담 감소
- 🎯 듀얼 invocation 일관성 확보
- 🎯 문서 템플릿 표준화

### Task 1.1: 중복 파일 제거 (1h)

#### 현재 상태
```
plugins/domain-research/skills/self-learning/  (원본)
skills/self-learning/                          (중복)

plugins/notebooklm-infographic/skills/notebooklm-infographic/  (원본)
skills/notebooklm-infographic/                                (중복)
```

#### 실행 계획
**Step 1**: 중복 확인
```bash
# self-learning 중복 확인
diff -r plugins/domain-research/skills/self-learning/ skills/self-learning/

# notebooklm-infographic 중복 확인
diff -r plugins/notebooklm-infographic/skills/notebooklm-infographic/ skills/notebooklm-infographic/
```

**Step 2**: 삭제 (중복이 완전히 동일할 경우만)
```bash
# self-learning 중복 제거
rm -rf skills/self-learning/

# notebooklm-infographic 중복 제거
rm -rf skills/notebooklm-infographic/
```

**Step 3**: Git 커밋
```bash
git add -A
git commit -m "refactor: Remove duplicate skill files

- Remove skills/self-learning/ (duplicate of plugins/domain-research/skills/self-learning/)
- Remove skills/notebooklm-infographic/ (duplicate of plugins/notebooklm-infographic/skills/)
- Standardize on plugins/*/skills/ structure for consistency

Reduces maintenance burden and prevents sync issues."
```

**검증**:
- [ ] `skills/` 디렉토리에 중복 파일 없음
- [ ] `plugins/*/skills/` 파일은 그대로 유지
- [ ] 스킬 발견 기능 정상 동작 (claude /self-learning 테스트)

**예상 시간**: 1시간

---

### Task 1.2: pm-coach 듀얼 invocation 추가 (2h)

#### 현재 상태
```
plugins/pm-coach/
├── .claude-plugin/plugin.json ❌ (스킬 미등록)
├── commands/ ❌ (없음)
└── skills/ ❌ (없음)
```

#### 실행 계획
**Step 1**: 디렉토리 구조 생성
```bash
mkdir -p plugins/pm-coach/skills/pm-coach
mkdir -p plugins/pm-coach/commands
```

**Step 2**: SKILL.md 작성
```markdown
---
name: pm-coach
description: PM 코치 - 업무 소통 최적화. 요청/수신/보고 세 가지 모드로 명확한 소통 지원. 두서없는 지시를 구조화된 업무 정의서로 변환.
---

# PM Coach - 업무 소통 최적화

## Core Purpose
업무 커뮤니케이션을 구조화하여 명확성을 높이는 PM 코칭 스킬입니다.

## Modes
1. **요청 모드**: 두서없는 지시 → 구조화된 업무 정의서
2. **수신 모드**: 불명확한 요청 → 질문을 통한 명확화
3. **보고 모드**: 진행 상황 → 구조화된 상태 리포트

## Usage
\`\`\`
/pm-coach [mode] [content]
\`\`\`

## Examples
\`\`\`
/pm-coach 요청 "사용자 관리 기능 만들어주세요"
/pm-coach 수신 "빨리 좀 처리해주세요"
/pm-coach 보고 "거의 다 했어요"
\`\`\`
```

**Step 3**: commands/pm-coach.md 작성 (듀얼 invocation)
```markdown
# /pm-coach - 업무 소통 최적화

PM 코치 스킬을 slash command로 실행합니다.

## Syntax
\`\`\`
/pm-coach [mode] [content]
\`\`\`

## Modes
- `요청`: 두서없는 지시 → 구조화된 업무 정의서
- `수신`: 불명확한 요청 → 질문을 통한 명확화
- `보고`: 진행 상황 → 구조화된 상태 리포트

## Examples
\`\`\`bash
# 요청 모드
/pm-coach 요청 "사용자 관리 기능 만들어주세요"

# 수신 모드
/pm-coach 수신 "빨리 좀 처리해주세요"

# 보고 모드
/pm-coach 보고 "거의 다 했어요"
\`\`\`

## See Also
- Skill tool invocation: Use the Skill tool with skill name "pm-coach"
- Plugin documentation: `plugins/pm-coach/README.md`
```

**Step 4**: plugin.json 업데이트
```json
{
  "name": "pm-coach",
  "version": "1.0.0",
  "description": "PM 코치 - 업무 소통 최적화",
  "author": {
    "name": "hongsw",
    "url": "https://github.com/hongsw"
  },
  "repository": "https://github.com/hongsw/plugin-for-claude-research",
  "license": "MIT",
  "keywords": ["productivity", "communication", "pm"],
  "skills": "./skills/pm-coach"
}
```

**Step 5**: Git 커밋
```bash
git add plugins/pm-coach/
git commit -m "feat: Add dual invocation support for pm-coach

- Add skills/pm-coach/SKILL.md with YAML frontmatter
- Add commands/pm-coach.md for slash command documentation
- Update plugin.json to register skill

Completes dual invocation pattern across all plugins."
```

**검증**:
- [ ] `/pm-coach` 명령어 작동
- [ ] Skill tool로 pm-coach 호출 가능
- [ ] YAML frontmatter 파싱 성공

**예상 시간**: 2시간

---

### Task 1.3: commands/*.md 템플릿 통일 (2h)

#### 현재 상태
```
plugins/domain-research/commands/domain-research.md     (110 lines)
plugins/pdf-research/commands/pdf-research.md           (152 lines)
plugins/notebooklm-infographic/commands/infographic.md  (227 lines)
plugins/pm-coach/commands/pm-coach.md                   (신규 작성)
```

#### 실행 계획
**Step 1**: 기존 파일 분석
```bash
# 구조 비교
head -30 plugins/domain-research/commands/domain-research.md
head -30 plugins/pdf-research/commands/pdf-research.md
head -30 plugins/notebooklm-infographic/commands/infographic.md
```

**Step 2**: 표준 템플릿 정의 (`docs/COMMAND_TEMPLATE.md`)
```markdown
# /[command-name] - [One-line description]

[Brief description of what this command does (1-2 sentences)]

## Syntax
\`\`\`
/[command-name] [args]
\`\`\`

## Arguments
- `arg1`: Description
- `arg2`: Description (optional)

## Examples
\`\`\`bash
# Example 1: [Description]
/[command-name] arg1 arg2

# Example 2: [Description]
/[command-name] arg1
\`\`\`

## Options (optional section)
- `--option1`: Description
- `--option2`: Description

## See Also
- Skill tool invocation: Use the Skill tool with skill name "[skill-name]"
- Plugin documentation: `plugins/[plugin-name]/README.md`
- Related commands: `/[related-command]`

## Troubleshooting (optional section)
Common issues and solutions...
```

**Step 3**: 기존 파일을 템플릿에 맞춰 리팩토링
- domain-research.md: 간결한 편 → 그대로 유지, See Also만 추가
- pdf-research.md: 중간 → Examples 섹션 강화
- infographic.md: 매우 상세 → 요약본 + 상세 가이드 분리

**Step 4**: Git 커밋
```bash
git add plugins/*/commands/*.md docs/COMMAND_TEMPLATE.md
git commit -m "docs: Standardize command documentation template

- Add docs/COMMAND_TEMPLATE.md as reference
- Unify structure across all commands/*.md files
- Add 'See Also' sections for cross-referencing

Improves consistency and predictability."
```

**검증**:
- [ ] 모든 commands/*.md가 동일한 섹션 구조
- [ ] Examples 섹션이 모두 있음
- [ ] See Also 섹션으로 상호 참조 가능

**예상 시간**: 2시간

---

### Iteration 1 검증 체크리스트

- [ ] 중복 파일 제거 완료 (skills/ 삭제)
- [ ] pm-coach 듀얼 invocation 작동
- [ ] commands/*.md 템플릿 통일
- [ ] 모든 스킬 발견 가능 (`claude /self-learning`, `/pm-coach` 등)
- [ ] Git 커밋 3개 생성 (refactor, feat, docs)
- [ ] 회귀 테스트 0건 실패

**Iteration 1 완료 시**: v0.3으로 전환 또는 Iteration 2 진행

---

## Iteration 2: 문서화 강화 (Day 5-8)

### 목표
- 📚 self-learning 접근성 향상
- 📚 NotebookLM MCP 설치 장벽 해소
- 📚 메타데이터 파일 역할 명확화

### Task 2.1: self-learning README 작성 (1.5h)

#### 목표
신규 사용자가 self-learning 스킬을 이해하고 시작할 수 있도록 가이드 제공

#### 실행 계획
**파일 위치**: `plugins/domain-research/skills/self-learning/README.md`

**내용**:
```markdown
# Self-Learning Skill - Claude Code 자기주도 학습

## 개요
Claude Code의 핵심 기능을 스스로 학습할 수 있는 인터랙티브 프레임워크입니다.
[ai-native-camp/camp-1](https://github.com/ai-native-camp/camp-1) 커리큘럼 기반.

## 학습 구조
- **Block 0-6**: 총 7개 블록 (Setup → Basics → Create Skill)
- **STOP 프로토콜**: 2턴 구조 (설명 + 실습 → 퀴즈 + 피드백)
- **진행 시간**: 블록당 15-20분 (총 2-3시간)

## 빠른 시작
\`\`\`bash
# 학습 시작
/self-learning

# 또는 Skill tool 사용
Use Skill tool with skill name "self-learning"
\`\`\`

## 학습 경로
1. **Block 0**: Claude Code 설치 및 첫 실행
2. **Block 1**: Claude Code 사용 경험 (기본 대화)
3. **Block 2**: Claude Code를 쓰는 이유 (차별점)
4. **Block 3-1~7**: 핵심 기능 (CLAUDE.md, Skill, MCP, Subagent, Agent Teams, Hook, Plugin)
5. **Block 4**: 기본 개념 정리
6. **Block 5**: 스킬 만들기 실습
7. **Block 6**: 리서치 통합 (domain-research와 연계)

## STOP 프로토콜이란?
각 블록은 2턴으로 구성:
- **Phase A (1턴)**: 개념 설명 + 실습 안내 → STOP
- **Phase B (2턴)**: 퀴즈 → 피드백 → 다음 블록

Phase A에서는 절대 퀴즈를 내지 않습니다!

## 문제 해결
- **진행 중 이탈**: 언제든 "다음" 입력으로 이어서 진행 가능
- **특정 블록 재학습**: Block 번호 지정 가능 (예: "Block 3 다시")
- **퀴즈 스킵**: "스킵" 입력 (권장하지 않음)

## 참고 자료
- [ai-native-camp/camp-1 원본 커리큘럼](https://github.com/ai-native-camp/camp-1)
- prompts/: 사용자 대상 프롬프트
- references/: 상세 참조 문서
```

**예상 시간**: 1.5시간

---

### Task 2.2: NotebookLM MCP 설치 가이드 강화 (1.5h)

#### 목표
NotebookLM MCP 미설치로 인한 실패 방지, 명확한 설치 가이드 제공

#### 실행 계획
**파일 위치**: `plugins/notebooklm-infographic/README.md` 업데이트

**추가 섹션**:
```markdown
## 사전 요구사항

### NotebookLM MCP 서버 설치
이 플러그인은 NotebookLM MCP 서버가 필수입니다.

#### 설치 방법
\`\`\`bash
# 1. MCP 서버 복제
git clone https://github.com/your-org/notebooklm-mcp-server.git
cd notebooklm-mcp-server

# 2. 의존성 설치
npm install

# 3. Claude Code 설정 파일 수정
code ~/.claude/mcp-servers.json
\`\`\`

#### mcp-servers.json 설정
\`\`\`json
{
  "notebooklm": {
    "command": "node",
    "args": ["/path/to/notebooklm-mcp-server/index.js"],
    "env": {
      "NOTEBOOKLM_API_KEY": "your-api-key-here"
    }
  }
}
\`\`\`

#### 설치 확인
\`\`\`bash
# Claude Code 재시작 후 확인
claude mcp list

# "notebooklm" 서버가 목록에 있어야 함
\`\`\`

## 문제 해결

### MCP 서버 연결 실패
**증상**: "NotebookLM MCP server not found" 에러

**해결 방법**:
1. mcp-servers.json 경로 확인
2. NotebookLM API 키 유효성 확인
3. Claude Code 재시작
4. 로그 확인: `~/.claude/logs/mcp-notebooklm.log`

### API 키 에러
**증상**: "Invalid API key" 에러

**해결 방법**:
1. NotebookLM 대시보드에서 API 키 재발급
2. mcp-servers.json에 새 키 설정
3. Claude Code 재시작
```

**예상 시간**: 1.5시간

---

### Task 2.3: manifest.json vs plugin.json 역할 명확화 (1h)

#### 목표
두 메타데이터 파일의 용도 차이를 문서화

#### 실행 계획
**파일 위치**: `docs/PLUGIN_METADATA.md` (신규)

**내용**:
```markdown
# Plugin Metadata Files

플러그인은 2가지 메타데이터 파일을 사용합니다.

## plugin.json (필수)
**위치**: `plugins/[plugin-name]/.claude-plugin/plugin.json`

**용도**: Claude Code가 플러그인을 인식하고 로드하는 데 사용

**필수 필드**:
- `name`: 플러그인 이름
- `version`: 버전 (semantic versioning)
- `description`: 간단한 설명
- `skills`: 스킬 경로 (string 또는 array)

**예제**:
\`\`\`json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "My awesome plugin",
  "skills": "./skills/my-skill"
}
\`\`\`

## manifest.json (선택)
**위치**: `skills/[skill-name]/manifest.json`

**용도**: 스킬 수준의 추가 메타데이터 (마켓플레이스, 검색, 필터링용)

**선택 필드**:
- `tags`: 검색 태그
- `category`: 카테고리 분류
- `icon`: 아이콘 URL
- `screenshots`: 스크린샷 목록

**예제**:
\`\`\`json
{
  "name": "my-skill",
  "tags": ["research", "automation"],
  "category": "productivity",
  "icon": "https://example.com/icon.png"
}
\`\`\`

## 차이점 요약
| 항목 | plugin.json | manifest.json |
|-----|------------|--------------|
| 필수 여부 | 필수 | 선택 |
| 위치 | `.claude-plugin/` | `skills/` |
| 용도 | 플러그인 로딩 | 마켓플레이스 메타데이터 |
| 대상 | Claude Code 코어 | 마켓플레이스 UI |
```

**예상 시간**: 1시간

---

### Iteration 2 검증 체크리스트

- [ ] self-learning README 작성 완료
- [ ] NotebookLM MCP 설치 가이드 업데이트
- [ ] PLUGIN_METADATA.md 작성
- [ ] 신규 사용자가 README만으로 시작 가능한지 확인
- [ ] Git 커밋 3개 생성 (docs)

**Iteration 2 완료 시**: 사용자 피드백 수집 → v0.3 또는 Iteration 3

---

## Iteration 3: 품질 보증 (Day 9-12, 선택적)

### 목표
- 🧪 멀티 스킬 설치 안정성 보장
- 🚀 향후 기능 (진행 추적, 커스터마이징) - 선택적

### Task 3.1: 멀티 스킬 설치 검증 스크립트 (2h)

#### 실행 계획
**파일 위치**: `plugins/domain-research/bin/verify-installation.js`

**기능**:
- [ ] 2개 스킬 모두 설치되었는지 확인
- [ ] SKILL.md YAML frontmatter 유효성 검증
- [ ] commands/*.md 존재 여부 확인
- [ ] 설치 후 자동 실행 (install.js에서 호출)

**예상 시간**: 2시간

---

### Task 3.2: self-learning 진행 상황 추적 (4h, 선택)

#### 기능
- 사용자가 완료한 블록 저장 (`~/.claude/self-learning-progress.json`)
- 재시작 시 마지막 블록부터 이어하기
- 진행률 표시 (예: "Block 3/7 완료")

**예상 시간**: 4시간 (선택적)

---

### Task 3.3: 인포그래픽 커스터마이징 (6h, 선택)

#### 기능
- 색상 팔레트 선택 (브랜드 색상)
- 템플릿 선택 (미니멀, 모던, 클래식)
- 폰트 선택

**예상 시간**: 6시간 (선택적)

---

## 다음 단계 (v0.3로 전환)

### v0.2 검증 체크리스트
- [ ] Iteration 1 실행 계획이 현실적인가?
- [ ] 3-4일 타임라인이 적절한가?
- [ ] 사용자가 가장 원하는 개선사항이 포함되었는가?

### 사용자 피드백 요청 (v0.3 준비)
1. **Iteration 1 시작**: 바로 시작할까요, 아니면 계획을 더 다듬을까요?
2. **Iteration 2 범위**: 문서화 3개 항목이 적절한가요?
3. **Iteration 3 선택**: 품질 보증 단계를 진행할까요, 아니면 생략할까요?

---

**v0.2 종료** - 실행 준비 완료

**v0.1 → v0.2 핵심 개선**:
- ✅ 중복 파일 해결 방법 확정 (plugins/*/skills/ 표준)
- ✅ 3개 Iteration으로 구조화 (구조 → 문서 → 품질)
- ✅ 각 Task별 구체적 실행 계획 및 검증 기준
- ✅ Git 커밋 메시지 템플릿 제공
- 🎯 Iteration 1 실행 준비 완료 (8시간 소요 예상)
