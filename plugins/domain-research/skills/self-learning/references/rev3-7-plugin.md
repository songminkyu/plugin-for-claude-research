# 기능 7: Plugin — 참조 자료

## EXPLAIN

📖 공식 문서: https://code.claude.com/docs/ko/plugins

### Plugin이란?

Plugin = **Skill + MCP + Hook + Agent를 하나의 설치 단위로 묶은 패키지**

### 핵심 가치

```
Plugin 없이:
  팀원 A: Skill 복사 + MCP 설정 + Hook 설정 + Agent 배포 (각각 수동)
  팀원 B: 같은 과정 반복...
  팀원 C: 같은 과정 반복...

Plugin 사용:
  모든 팀원: 한 줄 설치 → 동일한 환경 완성
```

### 설치 방법

```bash
# 공식 플러그인 마켓
/plugin

# 외부 플러그인 등록 및 설치
/plugin marketplace add hongsw/plugin-for-claude-research
/plugin install domain-research

# npm을 통한 설치
npx skills add ai-native-camp/camp-1 --yes
```

### Plugin 구조

```
my-plugin/
├── .claude-plugin/
│   ├── plugin.json         # 메타데이터
│   └── marketplace.json    # 마켓 등록 정보
├── skills/                 # Skill 모음
├── plugins/                # 패키지 정의
│   └── my-plugin/
│       ├── package.json    # npm 패키지
│       ├── bin/install.js  # 설치 스크립트
│       └── skills/         # Skill 복사본
└── README.md
```

### 🖥️ PPTX 프로젝트 적용 예시

PPTX 자동 생성 시스템을 Plugin으로 패키징하면 팀 전체가 한 줄로 설치합니다:

```
pptx-maker-plugin/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── pptx-theme-setter/   # 🎨 테마 설정 스킬
│   │   └── SKILL.md
│   ├── pptx-content-writer/ # ✍️ 내용 수정 스킬
│   │   └── SKILL.md
│   └── pptx-renderer/       # 🖨️ 렌더링 스킬
│       └── SKILL.md
└── bin/
    └── install.js           # 3개 스킬 한 번에 설치
```

팀원이 한 줄로 전체 PPTX 시스템을 설치:
```bash
/plugin install pptx-maker
```

→ 3명의 담당자 스킬이 모두 설치되어 즉시 팀 협업 가능!

### 현재 프로젝트가 Plugin의 예시

이 프로젝트(`plugin-for-claude-research`)가 바로 Plugin입니다:
- `domain-research` 스킬: 리서치 파이프라인
- `self-learning` 스킬: 자기주도 학습
- MCP 서버 설정: WebSearch, Sequential

---

## EXECUTE

1. 이 프로젝트의 `.claude-plugin/` 폴더를 확인해보세요
2. `plugin.json`과 `marketplace.json`의 내용을 읽어보세요
3. Claude에게 "이 프로젝트의 Plugin 구조를 설명해줘"라고 요청해보세요

---

## QUIZ

- "Plugin이 묶는 것은?"
  - 옵션 1: "Skill + MCP + Hook + Agent 등을 하나의 패키지로" ✅
  - 옵션 2: "코드 파일들만"
  - 옵션 3: "문서 파일들만"

→ Plugin은 여러 구성 요소를 하나의 설치 가능한 패키지로 통합합니다.
