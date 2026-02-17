# Self-Learning Skill - Claude Code 자기주도 학습

Claude Code의 핵심 기능을 **스스로 학습**할 수 있는 인터랙티브 학습 프레임워크.
[ai-native-camp/camp-1](https://github.com/ai-native-camp/camp-1) 커리큘럼 기반.

## 빠른 시작

```bash
# 학습 시작 (두 가지 방법)
/self-learning

# 또는 Skill tool 사용 (Claude에게 말하기)
"self-learning 스킬 시작해줘"
```

## 학습 구조

총 7개 블록, 블록당 15-20분, 전체 2-3시간.

| 블록 | 주제 | 참조 파일 |
|-----|-----|---------|
| Block 0 | 환경 설정 (설치) | `references/block0-setup.md` |
| Block 1 | 체험 (3가지 데모) | `references/block1-experience.md` |
| Block 2 | 왜 터미널인가? | `references/block2-why.md` |
| Block 3-1 | CLAUDE.md | `references/block3-1-claude-md.md` |
| Block 3-2 | Skill 시스템 | `references/block3-2-skill.md` |
| Block 3-3 | MCP | `references/block3-3-mcp.md` |
| Block 3-4 | Subagent | `references/block3-4-subagent.md` |
| Block 3-5 | Agent Teams | `references/block3-5-agent-teams.md` |
| Block 3-6 | Hook | `references/block3-6-hook.md` |
| Block 3-7 | Plugin | `references/block3-7-plugin.md` |
| Block 4 | 기본 개념 정리 | `references/block4-basics.md` |
| Block 5 | 스킬 만들기 실습 | `references/block5-create-skill.md` |
| Block 6 | 리서치 통합 | `references/block6-research-integration.md` |

## STOP 프로토콜

각 블록은 **2턴 구조**로 진행됩니다.

```
Phase A (1턴): 설명 + 실습
  → 개념 설명
  → 실습 안내
  → STOP ("완료 또는 다음이라고 입력해주세요")

Phase B (2턴): 퀴즈 + 피드백
  → 퀴즈 출제
  → 정답/오답 피드백
  → 다음 블록 이동 여부 확인
```

**중요**: Phase A에서는 절대 퀴즈를 내지 않습니다.

## 파일 구조

```
self-learning/
├── README.md          ← 현재 파일
├── SKILL.md           ← Claude 동작 방식 정의
├── prompts/           ← 블록별 학습 프롬프트 (7개)
│   ├── setup.md
│   ├── experience.md
│   ├── why-cli.md
│   ├── basics.md
│   ├── core-features.md
│   ├── create-skill.md
│   └── research-integration.md
└── references/        ← 블록별 상세 참조 문서 (13개)
    ├── block0-setup.md
    ├── block1-experience.md
    ├── block2-why.md
    ├── block3-1-claude-md.md ~ block3-7-plugin.md
    ├── block4-basics.md
    ├── block5-create-skill.md
    └── block6-research-integration.md
```

## 문제 해결

**학습 중 이탈 시**: "Block 3부터 다시 시작해줘"처럼 블록 번호 지정 가능

**퀴즈를 모르겠을 때**: "힌트 줘" 또는 "정답 알려줘" 입력

**다시 듣고 싶을 때**: "Phase A 다시 설명해줘" 입력

## 관련 정보
- **domain-research 스킬**: 리서치 파이프라인 (Block 6과 연계)
- **원본 커리큘럼**: [ai-native-camp/camp-1](https://github.com/ai-native-camp/camp-1)
