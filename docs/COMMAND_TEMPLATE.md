# COMMAND_TEMPLATE.md - commands/*.md 작성 가이드

commands/*.md 파일은 Claude에게 전달되는 **시스템 프롬프트**입니다.
사용자가 `/[command]`를 입력하면 이 파일 내용이 Claude에게 주입됩니다.

---

## 필수 구조

```markdown
# [Plugin Name] - [One-line description]

[Claude의 역할 정의 - 1-2문장]

## 핵심 역할 (또는 Core Directive)

[Claude가 이 명령에서 해야 할 일 - 간결하게]

## [기능 섹션들]

[플러그인별 필요한 섹션 자유롭게 추가]

## 출력 형식

[Claude가 생성해야 할 결과물 형식]

---

## 관련 정보 (See Also)
- **Skill tool 호출**: Skill 이름 `[skill-name]` 으로도 실행 가능
- **플러그인 문서**: `plugins/[plugin-name]/README.md`
- **관련 명령어**: `/[related-command]`
```

---

## 작성 원칙

1. **역할 명확화**: Claude가 어떤 전문가로 행동해야 하는지 첫 줄에 명시
2. **출력 형식 명시**: 결과물이 어떤 형태여야 하는지 구체적으로 지정
3. **See Also 섹션**: 항상 마지막에 추가 (Skill tool 호출 방법 포함)
4. **언어 일관성**: 플러그인이 한국어 대상이면 한국어, 영어 대상이면 영어

## See Also 섹션 표준 형식

```markdown
---

## 관련 정보 (See Also)
- **Skill tool 호출**: Skill 이름 `[skill-name]` 으로도 실행 가능
- **플러그인 문서**: `plugins/[plugin-name]/README.md`
- **관련 명령어**: `/[related-command1]`, `/[related-command2]`
```

---

## 기존 파일 현황

| 파일 | 라인 수 | 언어 | See Also |
|-----|--------|------|---------|
| domain-research/commands/domain-research.md | 110 | EN | ✅ |
| pdf-research/commands/pdf-research.md | 151 | EN | ✅ |
| notebooklm-infographic/commands/infographic.md | 227 | KO | ✅ |
| pm-coach/commands/pm-coach.md | 68 | KO | ✅ |
| pm-coach/commands/request.md | 70 | KO | - |
| pm-coach/commands/receive.md | 71 | KO | - |
| pm-coach/commands/report.md | 80 | KO | - |
