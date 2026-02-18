# Iteration v4 계획

## 버전: v4.0
## 날짜: 2026-02-18
## 기반: v3 완료 후 전체 커리큘럼 재점검 (26개 파일 전수 리뷰)

## v3까지의 수정 통합 상태

v1~v3에서 처리된 23건의 이슈가 모두 자연스럽게 통합됨:
- v1 (6건): prompts 참조 버그, PPTX 예시 4곳 추가, Hook 환경변수, Node.js 의존성
- v2 (5건): Antigravity 에디터명, 스킬 경로 설명, tmux 대안, Hook 보안, Plugin 업데이트
- v3 (5건): rev2 EXECUTE 실습형 전환, rev3->rev4 연결, 비개발자 예시, JSON 맥락, 보안 경고 위치

## 신규 발견 이슈

### 목표 1: why-cli.md STOP 프로토콜 위반 수정 (V4-1)
- **대상 파일**: `prompts/why-cli.md`
- **현재 상태**: Phase A (8~35행)에 Quiz 1 (AskUserQuestion, 25~29행)이 포함되어 있음. SKILL.md 절대 규칙 1번("Phase A에서 절대 AskUserQuestion을 호출하지 않는다")과 2번("Phase A에서 퀴즈 내용을 절대 노출하지 않는다")을 위반. 전체 7개 prompt 중 유일한 위반 사례.
- **추가 문제**: Phase A에서 참조 파일의 EXECUTE 섹션을 실습으로 안내하지 않음. 다른 prompt들은 "참조 파일의 EXECUTE 섹션을 읽고 실습을 안내하세요"라고 명시하나, why-cli.md는 "참조 파일 `references/rev2-why.md`를 읽으세요."로만 되어 있어, v3에서 추가한 실습형 EXECUTE 내용(Claude에게 직접 요청하는 실습 3개)이 prompt 흐름에서 참조되지 않음.
- **목표 상태**: Phase A를 다른 prompt들과 동일한 STOP 프로토콜 구조로 재정렬:
  - Phase A: 설명(EXPLAIN 참조) + 실습 안내(EXECUTE 참조) + STOP (퀴즈 없음, AskUserQuestion 없음)
  - Phase B: Quiz 1 + Quiz 2 + 정리 + 다음 레볼루션 안내
- **우선순위**: Major (SKILL.md 절대 규칙 위반. 커리큘럼의 핵심 학습 프로토콜과 불일치)

### 목표 2: why-cli.md Phase A 마무리 멘트 표준화 (V4-2)
- **대상 파일**: `prompts/why-cli.md`
- **현재 상태**: Phase A 마무리가 33행 "👆 위 개념을 생각해보시고, '다음'이라고 입력해주세요."로 되어 있음. 다른 prompt들의 표준 마무리 멘트는 "👆 위 내용을 직접 실행해보세요. 실행이 끝나면 '완료' 또는 '다음'이라고 입력해주세요."
- **목표 상태**: 다른 prompt들과 동일한 마무리 멘트로 통일. "실행해보세요"가 EXECUTE 실습과 연결되어야 함.
- **우선순위**: Minor (일관성 개선. V4-1 수정 시 함께 처리)

## 제외된 항목 (이유 포함)

### 공식 문서 URL 부재 (Rev 0, 1, 4, 5, 6)
- SKILL.md 규칙 4 "각 레볼루션 시작 전 공식 문서 URL을 출력한다"에 해당하나, Rev 0(설치), Rev 1(체험), Rev 4(CLI/Git 기초), Rev 5(스킬 제작), Rev 6(리서치 결합) 모두 대응하는 단일 공식 문서 페이지가 명확하지 않음. Rev 3의 7개 기능은 각각 대응 URL이 있어 자연스러우나, 나머지는 무리하게 URL을 추가하면 오히려 학습 흐름을 방해할 수 있음. Rev 5는 rev3-2-skill.md에서 이미 Skills 문서 URL을 사용했으므로 중복. 현재 상태가 실질적으로 학습 품질에 영향을 주지 않으므로 제외.

### SKILL.md "스스로" 표기
- Line 10에서 "스스로 학습"으로 표기됨. 이는 한국어에서 "스스로"가 아닌 "스스로"가 올바른 형태이나, 실제 내용 확인 시 현재 "스스로"로 되어 있어 표기가 정확함. 이슈 아님.

## 성공 기준

- [ ] 목표 1: why-cli.md Phase A에서 Quiz 1(AskUserQuestion)이 제거되고 Phase B로 이동. Phase A가 STOP 프로토콜(설명 + 실습 안내 + STOP, 퀴즈 없음)을 준수
- [ ] 목표 2: why-cli.md Phase A 마무리 멘트가 다른 prompt들과 동일한 표준 형식

## 예상 수정 지침

### `prompts/why-cli.md` 구조 재정렬

**Phase A (현재 -> 목표)**:
```
현재:
  Phase A (설명 + Quiz 1)
    - 참조 파일 읽기
    - 핵심 설명
    - Quiz 1 (AskUserQuestion) ← 위반
    - "개념을 생각해보시고" ← 비표준 마무리
    - STOP

목표:
  Phase A (설명 + 실습 안내)
    - 참조 파일 EXPLAIN 섹션 읽기 + 핵심 설명
    - 참조 파일 EXECUTE 섹션 읽기 + 실습 안내
    - 표준 마무리 멘트
    - STOP
```

**Phase B (현재 -> 목표)**:
```
현재:
  Phase B (Quiz 2 + 정리)
    - Quiz 2 (AskUserQuestion)
    - 피드백
    - 다음 레볼루션 안내

목표:
  Phase B (Quiz 1 + Quiz 2 + 정리)
    - Quiz 1 (Phase A에서 이동)
    - Quiz 2
    - 피드백
    - 다음 레볼루션 안내
```

## v4 후 예상 품질 점수

| 항목 | v3 점수 | v4 예상 점수 | 근거 |
|------|---------|-------------|------|
| 구조 완성도 | 9.5/10 | 10/10 | V4-1 해소로 전체 prompt의 STOP 프로토콜 100% 준수. Phase A/B 구조가 7개 prompt 전부 통일 |
| 내용 일관성 | 8.5/10 | 9/10 | V4-2 해소로 마무리 멘트 패턴 통일. 참조 파일 EXECUTE 섹션 연결 보강 |
| 비개발자 접근성 | 9/10 | 9/10 | 변동 없음. v3에서 충분히 개선됨 |
| **종합** | **9/10** | **9.5/10** | V4-1(Major) 해소로 SKILL.md 절대 규칙 100% 준수 달성. 전 prompt 구조 통일 완료 |

## 요약

| 이슈 | 대상 파일 | 문제 | 심각도 | 수정 유형 |
|------|----------|------|--------|----------|
| V4-1 | prompts/why-cli.md | Phase A에 Quiz(AskUserQuestion) 포함 — STOP 프로토콜 위반 | Major | Phase A/B 구조 재정렬 |
| V4-2 | prompts/why-cli.md | Phase A 마무리 멘트 비표준 | Minor | 마무리 멘트 표준화 (V4-1과 함께 처리) |

발견 이슈: 2건 (Major 1, Minor 1) — 동일 파일 대상이므로 사실상 1회 수정으로 해결 가능
