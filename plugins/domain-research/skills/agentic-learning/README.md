# Self-Learning Skill - Claude Code 자기주도 학습

Claude Code의 핵심 기능을 **스스로 학습**할 수 있는 인터랙티브 학습 프레임워크.
[ai-native-camp/camp-1](https://github.com/ai-native-camp/camp-1) 커리큘럼 기반.

## 통일 주제: PPTX 자동 생성 프로젝트

모든 레볼루션은 하나의 프로젝트를 공통 예시로 사용합니다:

```
목표: Claude Code로 PPTX를 자동으로 만드는 팀 시스템 구축

담당 역할 3가지:
  🎨 테마 설정 담당  — 슬라이드 디자인, 색상, 폰트 결정
  ✍️  내용 수정 담당  — 슬라이드 텍스트, 구조, 논리 흐름
  🖨️  렌더링 담당    — HTML → PPTX 변환, 파일 출력
```

## 빠른 시작

```bash
# 학습 시작 (두 가지 방법)
/agentic-learning

# 또는 Skill tool 사용 (Claude에게 말하기)
"agentic-learning 스킬 시작해줘"
```

## 학습 구조

총 7개 레볼루션, 레볼루션당 15-20분, 전체 2-3시간.

| 레볼루션 | 주제 | PPTX 연결 | 참조 파일 |
|---------|-----|----------|---------|
| 레볼루션 0 | 환경 설정 (설치) | 프로젝트 디렉토리 구조 | `references/rev0-setup.md` |
| 레볼루션 1 | 체험 (3가지 데모) | "PPTX 만들어줘" 한 마디 체험 | `references/rev1-experience.md` |
| 레볼루션 2 | 왜 터미널인가? | 반복 생성 자동화 vs 수작업 | `references/rev2-why.md` |
| 레볼루션 3-1 | CLAUDE.md | PPTX 스타일 가이드 정의 | `references/rev3-1-claude-md.md` |
| 레볼루션 3-2 | Skill | pptx-theme-setter 스킬 제작 | `references/rev3-2-skill.md` |
| 레볼루션 3-3 | MCP | Playwright로 PPTX 렌더링 | `references/rev3-3-mcp.md` |
| 레볼루션 3-4 | Subagent | 테마/내용/렌더링 독립 작업 | `references/rev3-4-subagent.md` |
| 레볼루션 3-5 | Agent Teams | 3담당 협업 시스템 | `references/rev3-5-agent-teams.md` |
| 레볼루션 3-6 | Hook | 저장 시 자동 품질 검사 | `references/rev3-6-hook.md` |
| 레볼루션 3-7 | Plugin | PPTX 도구 패키지 배포 | `references/rev3-7-plugin.md` |
| 레볼루션 4 | 기본 개념 정리 | PPTX 프로젝트 버전 관리 | `references/rev4-basics.md` |
| 레볼루션 5 | 스킬 만들기 실습 | pptx-maker 스킬 직접 제작 | `references/rev5-create-skill.md` |
| 레볼루션 6 | 리서치 통합 | 리서치 결과 → PPTX 파이프라인 | `references/rev6-research-integration.md` |

## STOP 프로토콜

각 레볼루션은 **2턴 구조**로 진행됩니다.

```
Phase A (1턴): 설명 + 실습
  → 개념 설명
  → PPTX 프로젝트 활용 예시
  → 실습 안내
  → STOP ("완료 또는 다음이라고 입력해주세요")

Phase B (2턴): 퀴즈 + 피드백
  → 퀴즈 출제
  → 정답/오답 피드백
  → 다음 레볼루션 이동 여부 확인
```

**중요**: Phase A에서는 절대 퀴즈를 내지 않습니다.

## 파일 구조

```
agentic-learning/
├── README.md          ← 현재 파일
├── SKILL.md           ← Claude 동작 방식 정의
├── prompts/           ← 레볼루션별 학습 프롬프트 (7개)
│   ├── setup.md
│   ├── experience.md
│   ├── why-cli.md
│   ├── basics.md
│   ├── core-features.md
│   ├── create-skill.md
│   └── research-integration.md
└── references/        ← 레볼루션별 상세 참조 문서 (13개)
    ├── rev0-setup.md
    ├── rev1-experience.md
    ├── rev2-why.md
    ├── rev3-1-claude-md.md ~ rev3-7-plugin.md
    ├── rev4-basics.md
    ├── rev5-create-skill.md
    └── rev6-research-integration.md
```

## 문제 해결

**학습 중 이탈 시**: "레볼루션 3부터 다시 시작해줘"처럼 번호 지정 가능

**퀴즈를 모르겠을 때**: "힌트 줘" 또는 "정답 알려줘" 입력

**다시 듣고 싶을 때**: "Phase A 다시 설명해줘" 입력

## 관련 정보
- **domain-research 스킬**: 리서치 파이프라인 (레볼루션 6과 연계)
- **원본 커리큘럼**: [ai-native-camp/camp-1](https://github.com/ai-native-camp/camp-1)
