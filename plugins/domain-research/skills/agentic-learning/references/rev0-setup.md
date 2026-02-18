# 레볼루션 0: 환경 설정 — 참조 자료

## EXPLAIN

### Claude Code 설치

Claude Code는 터미널에서 실행되는 AI 코딩 어시스턴트입니다.
Claude Code 설치에는 Node.js가 필요하지 않습니다 (일부 확장 기능은 별도 설치가 필요할 수 있음).

**설치 명령어:**

| 운영체제 | 명령어 |
|---------|--------|
| Mac / Linux | `curl -fsSL https://claude.ai/install.sh \| bash` |
| Windows (PowerShell) | `irm https://claude.ai/install.ps1 \| iex` |

**트러블슈팅:**

| 증상 | 해결 |
|------|------|
| Mac에서 권한 오류 | `sudo`를 앞에 붙여서 재실행 |
| 설치 후 `claude` 명령어 인식 안됨 | 터미널 재시작 (새 탭 열기) |
| Windows 실행 정책 오류 | `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` 실행 후 재시도 |

### 에디터 선택 (선택사항)

| 에디터 | 특징 |
|--------|------|
| Google Antigravity | 무료, AI 내장, 가장 간단 (Google, 2025년 출시) |
| Cursor | AI 통합 에디터, Claude Code 호환 |
| VSCode | 범용 에디터, 풍부한 확장 프로그램 |

터미널만으로도 충분합니다. 에디터는 나중에 선택해도 됩니다.

### 초기 설정

1. 터미널을 열고 `claude` 입력
2. Anthropic 계정으로 인증
3. 출력 스타일을 "Explanatory"로 설정 (학습에 적합)

### 🖥️ PPTX 프로젝트 적용 예시

Claude Code가 설치되면 바로 이 한 마디로 시작합니다:

```
Claude: "pptx-maker 프로젝트 폴더를 만들어줘"
결과:
pptx-project/
├── .claude/
│   └── CLAUDE.md       ← 스타일 가이드 (레볼루션 3-1에서 작성)
├── theme/              ← 🎨 테마 설정 담당 작업 공간
├── content/            ← ✍️ 내용 수정 담당 작업 공간
└── output/             ← 🖨️ 렌더링 담당 작업 공간
```

---

## EXECUTE

다음을 직접 실행해보세요:

1. 터미널을 열고 Claude Code 설치 명령어를 실행합니다
2. `claude`를 입력하여 실행합니다
3. 인증을 완료합니다
4. "안녕하세요, 오늘 날씨가 어떤가요?"라고 첫 대화를 나눠봅니다

---

## QUIZ

확인 질문:
- "Claude Code가 정상적으로 설치되어 첫 대화를 나눠보셨나요?"
  - 옵션 1: "네, 설치 완료하고 대화도 해봤습니다" ✅
  - 옵션 2: "설치는 했는데 대화는 아직이요"
  - 옵션 3: "설치에 문제가 있습니다"
