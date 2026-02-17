# Plugin Metadata Files

플러그인 디렉토리에는 두 가지 메타데이터 파일이 있습니다. 역할이 다릅니다.

---

## plugin.json (필수)

**위치**: `plugins/[plugin-name]/.claude-plugin/plugin.json`

**역할**: Claude Code가 플러그인을 **로드하고 스킬을 등록**할 때 사용하는 공식 설정 파일.

**필수 필드**:

```json
{
  "name": "플러그인 이름",
  "version": "1.0.0",
  "description": "한 줄 설명",
  "author": { "name": "이름" },
  "keywords": ["태그1", "태그2"],
  "skills": "./skills/스킬명"
}
```

`skills` 필드는 단일 스킬(문자열) 또는 멀티 스킬(배열) 모두 가능:

```json
"skills": "./skills/my-skill"                           // 단일
"skills": ["./skills/skill-a", "./skills/skill-b"]      // 멀티
```

---

## manifest.json (선택)

**위치**: `plugins/[plugin-name]/skills/[skill-name]/manifest.json`

**역할**: **마켓플레이스, IDE 플러그인, 외부 도구**가 활용하는 확장 메타데이터.
Claude Code 코어는 이 파일을 직접 읽지 않음.

**제공하는 추가 정보**:

```json
{
  "name": "스킬 이름",
  "version": "1.0.0",
  "description": "설명",
  "skills": [
    {
      "name": "스킬명",
      "command": "/command-name",
      "aliases": ["/alias1", "/alias2"],
      "promptFile": "prompt.md",
      "tags": ["tag1", "tag2"],
      "examples": [
        {
          "command": "/command \"예제\"",
          "description": "예제 설명"
        }
      ]
    }
  ]
}
```

---

## 차이점 요약

| 항목 | plugin.json | manifest.json |
|-----|------------|--------------|
| **필수 여부** | ✅ 필수 | 선택 |
| **위치** | `.claude-plugin/` | `skills/[skill-name]/` |
| **읽는 주체** | Claude Code 코어 | 마켓플레이스, 외부 도구 |
| **skills 필드** | 스킬 경로 (string/array) | 상세 스킬 정보 (객체 배열) |
| **aliases 지원** | ❌ | ✅ |
| **examples 지원** | ❌ | ✅ |
| **command 별칭** | ❌ | ✅ |

---

## 현재 플러그인 현황

| 플러그인 | plugin.json | manifest.json |
|---------|------------|--------------|
| domain-research | ✅ | ❌ (없음) |
| pdf-research | ✅ | ❌ (없음) |
| notebooklm-infographic | ✅ | ✅ (있음) |
| pm-coach | ✅ | ❌ (없음) |

> `manifest.json`은 선택 사항이므로 없어도 정상 동작합니다.
> 향후 마켓플레이스 기능 추가 시 다른 플러그인에도 추가를 검토할 수 있습니다.
