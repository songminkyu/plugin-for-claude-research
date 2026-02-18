# Iteration v2 수행 로그

## 점검 일시: 2026-02-18

---

## M6 점검: rev0-setup.md Antigravity 에디터

**현재 상태** (rev0-setup.md:29):
```
| Antigravity | 무료, AI 내장, 가장 간단 |
```

rev4-basics.md:53에서도 동일한 표기:
```
| Antigravity | Claude Code 중심, 가장 간단 | 입문자 |
```

**문제**: "Antigravity"만 표기되어 있어 어떤 제품인지 불명확. 실제로는 Google이 만든 AI 기반 IDE인 "Google Antigravity"로, 정확한 제품명과 간략한 설명이 필요함.

**권장 수정**:
- rev0-setup.md:29 → `| Google Antigravity | 무료, AI 내장, 가장 간단 (Google 제공 AI IDE) |`
- rev4-basics.md:53 → `| Google Antigravity | Claude Code 중심, 가장 간단 (Google 제공 AI IDE) | 입문자 |`

---

## m1 점검: rev3-2-skill.md 스킬 경로

**현재 상태** (rev3-2-skill.md:22-35):
```
.claude/skills/my-skill/
└── SKILL.md              # 메타데이터 + 지시사항

선택 추가:
.claude/skills/my-skill/
├── SKILL.md
├── scripts/              # 실행 스크립트
├── references/            # 참조 데이터
└── assets/               # 리소스 파일
```

**문제**: 프로젝트 로컬 스킬 경로(`.claude/skills/`)만 안내하고, 전역 스킬 경로(`~/.claude/skills/`)에 대한 설명이 없음. 학습자가 전역 스킬을 설정하거나 다른 프로젝트에서도 재사용하고 싶을 때 혼란을 겪을 수 있음.

**권장 수정**: "최소 구성" 섹션 아래에 다음 내용 추가:

```markdown
### 로컬 vs 전역 스킬 경로

| 유형 | 경로 | 범위 |
|------|------|------|
| 프로젝트 로컬 | `.claude/skills/my-skill/` | 해당 프로젝트에서만 사용 |
| 사용자 전역 | `~/.claude/skills/my-skill/` | 모든 프로젝트에서 사용 가능 |

- 프로젝트별 스킬은 **로컬 경로**에 배치
- 여러 프로젝트에서 공유할 스킬은 **전역 경로**에 배치
```

---

## m2 점검: rev3-5-agent-teams.md tmux 미지원 환경 대안

**현재 상태** (rev3-5-agent-teams.md:47):
```
- 분할 화면은 tmux를 사용하며, VS Code 터미널/Windows Terminal/Ghostty에서는 미지원
```

**문제**: tmux를 사용할 수 없는 환경(VS Code 터미널, Windows Terminal, Ghostty)에서의 대안이 전혀 안내되지 않음. 학습자가 이 환경을 사용하는 경우 Agent Teams를 실습할 수 없다고 오해할 수 있음.

**권장 수정**: 47행 참고 부분을 다음으로 확장:

```markdown
**참고:**
- 실험적 기능입니다
- 분할 화면은 tmux를 사용하며, VS Code 터미널/Windows Terminal/Ghostty에서는 미지원

**tmux 미지원 환경 대안:**
- **VS Code**: 내장 분할 터미널 사용 (`Ctrl+Shift+5`) — 각 패널에서 별도 `claude` 실행
- **Windows Terminal**: 탭 또는 분할 창(`Alt+Shift+D`) 활용
- **일반 터미널**: 여러 터미널 창을 열어 각각 `claude` 실행
- Agent Teams의 핵심 기능(공유 작업 목록, 메시지 전달)은 tmux 없이도 동작합니다
```

---

## m4 점검: rev3-7-plugin.md 업데이트 방법

**현재 상태**: 설치 방법(rev3-7-plugin.md:25-35)은 안내되어 있으나, 이미 설치된 Plugin을 최신 버전으로 업데이트하는 방법은 문서 어디에도 없음.

**문제**: 학습자가 Plugin 설치 후 업데이트가 필요할 때 어떻게 해야 하는지 알 수 없음. 특히 이 프로젝트(plugin-for-claude-research) 자체가 Plugin 예시이므로, 업데이트 워크플로우 안내가 중요함.

**권장 수정**: "설치 방법" 섹션 뒤에 다음 내용 추가:

```markdown
### 업데이트 방법

```bash
# Git 기반 Plugin 업데이트
cd <plugin-directory>
git pull origin main

# npm 기반 Plugin 업데이트
npx skills update <plugin-name>

# 재설치로 업데이트
/plugin install <plugin-name>  # 최신 버전 덮어쓰기
```

> 업데이트 후 Claude Code를 재시작하면 변경 사항이 반영됩니다.
```

---

## v1 변경사항 반영 확인

- [x] rev0 PPTX 예시 — rev0-setup.md:41-54에 "PPTX 프로젝트 적용 예시" 섹션 존재
- [x] rev1 PPTX 예시 — rev1-experience.md:34-41에 "PPTX 프로젝트 적용 예시" 섹션 존재
- [x] rev2 PPTX 예시 — rev2-why.md:35-46에 "PPTX 프로젝트 적용 예시" 섹션 존재
- [x] rev4 PPTX 예시 — rev4-basics.md:57-69에 "PPTX 프로젝트 적용 예시" 섹션 존재
- [x] rev3-6 Hook 보안 경고 — rev3-6-hook.md:96-99에 stdin JSON 참고 + 보안 주의 경고 존재
- [x] rev3-3 MCP Node.js 안내 — rev3-3-mcp.md:51-53에 Node.js 설치 안내 존재
