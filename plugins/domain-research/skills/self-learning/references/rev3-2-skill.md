# 기능 2: Skill — 참조 자료

## EXPLAIN

📖 공식 문서: https://code.claude.com/docs/ko/skills
📖 참고: https://agentskills.io

### Skill이란?

Skill은 **필요할 때만 로드되는 작업 레시피**입니다.

### Progressive Loading — CLAUDE.md와의 핵심 차이

```
CLAUDE.md → 매 세션 전체 로드 (항상 메모리 차지)
Skill     → 호출 또는 자동 매칭될 때만 로드 (Progressive Loading)
```

컨텍스트 윈도우는 유한합니다. Skill은 필요할 때만 로드되어 컨텍스트를 절약합니다.

### 최소 구성

```
.claude/skills/my-skill/
└── SKILL.md              # 메타데이터 + 지시사항
```

선택 추가:
```
.claude/skills/my-skill/
├── SKILL.md
├── scripts/              # 실행 스크립트
├── references/            # 참조 데이터
└── assets/               # 리소스 파일
```

### 비유

```
Skill = 요리 레시피
- 한 번 작성하면 계속 재사용
- 복잡한 작업도 한 줄 명령어로 실행
- 예: "/weekly-campaign-report" → 주간 캠페인 보고서 자동 생성
```

---

### 🖥️ PPTX 프로젝트 적용 예시

테마 설정 담당의 작업을 Skill로 만들면 재사용 가능해집니다:

```
.claude/skills/pptx-theme-setter/
└── SKILL.md
```

```markdown
---
name: pptx-theme-setter
description: PPTX 슬라이드 테마 설정. "테마 설정해줘", "디자인 적용" 요청에 사용.
---

# PPTX 테마 설정 담당 (🎨)

## 내가 하는 일
1. 색상 팔레트 선택 (주색상, 보조색상, 배경색)
2. 폰트 체계 결정 (제목/본문/강조)
3. 슬라이드 레이아웃 템플릿 생성
4. theme.json 파일로 출력

## 실행 규칙
- 항상 접근성 대비율 4.5:1 이상 유지
- 폰트는 한글 지원 폰트만 사용
```

→ 한 번 만든 pptx-theme-setter 스킬은 매번 동일한 고품질 테마를 보장합니다.

---

## EXECUTE

1. 현재 프로젝트의 `.claude/skills/` 폴더를 확인해보세요
2. 이 학습 스킬(`self-learning`)이 어떻게 구성되어 있는지 살펴보세요
3. `/day1-test-skill` 같은 간단한 스킬을 경험해보세요

---

## QUIZ

- "Skill이 CLAUDE.md와 다른 핵심 차이는?"
  - 옵션 1: "필요할 때만 로드되는 Progressive Loading" ✅
  - 옵션 2: "더 길어서"
  - 옵션 3: "다른 언어로 작성되어서"

→ Skill은 컨텍스트 윈도우를 절약하기 위해 필요한 순간에만 로드됩니다.
