# Plugin Ecosystem Expansion Roadmap - v0.1

**작성일**: 2026-02-17
**상태**: Draft - 초기 브레인스토밍
**접근법**: 짧은 사이클 이터레이션 (v0.1 → v0.2 → v0.3 ...)

---

## 현황 분석

### 기존 플러그인 (5개)
| 플러그인 | 카테고리 | 스킬 수 | 주요 기능 |
|---------|---------|--------|----------|
| domain-research | Research | 2 | 범용 리서치 파이프라인 + 자기주도 학습 |
| pdf-research | Research | 1 | PDF 인덱싱 및 시맨틱 검색 (LightRAG) |
| notebooklm-infographic | Research | 1 | NotebookLM 기반 인포그래픽 자동 생성 |
| pm-coach | Productivity | 1 | 업무 소통 최적화 (요청/수신/보고) |
| self-learning | Learning | - | domain-research 내 통합 |

### 강점
- ✅ Research 도메인 강세 (전문성 집중)
- ✅ 듀얼 invocation 지원 (slash + Skill tool)
- ✅ 멀티 스킬 아키텍처 확립
- ✅ MCP 통합 경험 (NotebookLM, LightRAG)

### 약점
- ⚠️ 카테고리 편중 (Research 60%, 다른 영역 미비)
- ⚠️ 일부 플러그인의 스킬 미등록 (pm-coach, pdf-research)
- ⚠️ 개발자 생산성 도구 부족
- ⚠️ 데이터 분석/시각화 도구 부재

---

## 확장 전략 (v0.1)

### Phase 1: 기반 강화 (1-2주)
**목표**: 기존 플러그인 품질 개선 및 표준화

1. **플러그인 표준화**
   - [ ] 모든 플러그인에 스킬 등록 (pm-coach, pdf-research)
   - [ ] 듀얼 invocation 완성 (slash command + Skill tool)
   - [ ] YAML frontmatter 일관성 검증
   - [ ] 설치 스크립트 통일 (install.js vs install.sh)

2. **문서화 강화**
   - [ ] 각 플러그인에 README.md 추가
   - [ ] 사용 예제 및 스크린샷 보강
   - [ ] 개발자 가이드 작성 (CONTRIBUTING.md)

3. **품질 개선**
   - [ ] 에러 핸들링 강화
   - [ ] 로깅 및 디버깅 지원
   - [ ] 성능 최적화 (대용량 PDF, 긴 리서치 세션)

**예상 산출물**:
- pm-coach v1.1 (스킬 등록 완료)
- pdf-research v1.1 (스킬 등록 + 문서화)
- PLUGIN_DEVELOPMENT.md (개발 가이드)

---

### Phase 2: 신규 플러그인 탐색 (2-4주)
**목표**: 생태계 다양화 - 새로운 카테고리 진입

#### 후보 1: code-reviewer (코드 품질)
**카테고리**: 🔍 Code Quality
**문제 정의**: 코드 리뷰 시간 소요, 일관성 부족, 보안 취약점 놓침
**핵심 기능**:
- 자동 코드 리뷰 (복잡도, 중복, 네이밍)
- 보안 취약점 스캔 (OWASP Top 10)
- 리팩토링 제안 (SOLID 원칙 기반)
- PR 코멘트 자동 생성

**기술 스택**:
- AST 파서 (JavaScript, Python, TypeScript)
- ESLint/Pylint 통합
- GitHub API 연동

**우선순위**: ⭐⭐⭐ (개발자 생산성 직접 향상)

---

#### 후보 2: data-explorer (데이터 분석)
**카테고리**: 📊 Data Analysis
**문제 정의**: CSV/Excel 데이터 탐색 및 인사이트 도출 수작업
**핵심 기능**:
- CSV/Excel 자동 프로파일링 (통계, 분포, 이상치)
- 시각화 자동 생성 (차트, 그래프)
- 데이터 클리닝 제안
- SQL 쿼리 자동 생성

**기술 스택**:
- Pandas/Polars
- Plotly/Matplotlib
- DuckDB (SQL 쿼리)

**우선순위**: ⭐⭐⭐ (데이터 작업 자동화)

---

#### 후보 3: workflow-automator (개발 워크플로우)
**카테고리**: 🚀 Development Workflow
**문제 정의**: Git, CI/CD, 배포 작업 반복적이고 오류 가능성
**핵심 기능**:
- Git 워크플로우 자동화 (브랜치 전략, 커밋 메시지)
- PR 생성 및 머지 자동화
- CI/CD 파이프라인 생성 (GitHub Actions, GitLab CI)
- 배포 체크리스트 자동 생성

**기술 스택**:
- Git CLI
- GitHub/GitLab API
- YAML 생성

**우선순위**: ⭐⭐ (일부 기능은 Claude Code 내장)

---

#### 후보 4: content-generator (콘텐츠 생성)
**카테고리**: ✍️ Content Creation
**문제 정의**: 기술 블로그, 발표자료, 문서 작성 시간 소요
**핵심 기능**:
- 코드 → 블로그 포스트 자동 생성
- README.md 자동 생성 (프로젝트 분석 기반)
- 발표자료 초안 생성 (Markdown → reveal.js)
- API 문서 자동 생성 (OpenAPI spec)

**기술 스택**:
- Markdown 처리
- reveal.js 통합
- OpenAPI 파서

**우선순위**: ⭐⭐ (일부 기능은 기존 스킬로 커버)

---

#### 후보 5: api-integrator (API 통합)
**카테고리**: 🔗 API Integration
**문제 정의**: 외부 서비스 연동 시 보일러플레이트 코드 반복
**핵심 기능**:
- REST API 클라이언트 자동 생성 (OpenAPI spec 기반)
- API 테스트 자동화 (Postman → 코드)
- Webhook 핸들러 생성
- Rate limiting/Retry 로직 자동 생성

**기술 스택**:
- OpenAPI 파서
- Axios/Fetch 래퍼
- Jest/Mocha 테스트 생성

**우선순위**: ⭐ (특정 유즈케이스, 범용성 낮음)

---

### Phase 3: 커뮤니티 빌딩 (4주 이후)
**목표**: 외부 기여 유도 및 생태계 확장

1. **플러그인 마켓플레이스 강화**
   - 플러그인 검색 및 필터링
   - 평점 및 리뷰 시스템
   - 다운로드 통계

2. **개발자 도구**
   - 플러그인 템플릿 생성기
   - 자동 테스트 프레임워크
   - CI/CD 파이프라인

3. **문서 및 튜토리얼**
   - 플러그인 개발 가이드
   - 비디오 튜토리얼
   - 예제 플러그인 컬렉션

---

## 우선순위 기준 (v0.1)

### 평가 매트릭스
| 기준 | 가중치 | 설명 |
|-----|-------|------|
| 사용자 영향도 | 30% | 얼마나 많은 사용자에게 도움이 되는가? |
| 개발 난이도 | 20% | 구현에 필요한 시간/자원 (낮을수록 우선) |
| 기존 자산 활용 | 20% | 기존 플러그인/스킬과의 시너지 |
| 차별성 | 15% | 기존 도구 대비 독자적 가치 |
| 확장성 | 15% | 향후 기능 확장 가능성 |

### v0.1 우선순위 (초안)
1. **code-reviewer** (⭐⭐⭐) - 개발자 직접 영향, 높은 수요
2. **data-explorer** (⭐⭐⭐) - 데이터 작업 자동화, Research 시너지
3. **workflow-automator** (⭐⭐) - 일부 Claude Code 내장 기능과 중복
4. **content-generator** (⭐⭐) - 기존 스킬로 부분 커버, 추가 가치 명확화 필요
5. **api-integrator** (⭐) - 특정 유즈케이스, 범용성 낮음

---

## 다음 단계 (v0.2로 전환)

### 검증 필요 사항
- [ ] 우선순위가 사용자 니즈와 일치하는가?
- [ ] code-reviewer vs data-explorer 중 먼저 시작할 것은?
- [ ] Phase 1 기반 강화가 선행되어야 하는가?
- [ ] 신규 플러그인 아이디어에 누락된 영역은 없는가?

### 사용자 피드백 요청
1. 가장 시급한 플러그인은 무엇인가?
2. 우선순위 기준에 추가/수정할 항목은?
3. Phase 1 기반 강화의 범위는 적절한가?
4. 다른 플러그인 아이디어 제안?

---

**v0.1 종료** - 사용자 피드백 대기 중
