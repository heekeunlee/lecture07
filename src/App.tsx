const lessonGoals = [
  {
    step: '학습목표 1',
    title: '공정 체인을 먼저 이해한다',
    body: '증착, 노광, 식각, 세정, 검사처럼 이어지는 공정이 서로 어떤 입력과 출력으로 연결되는지 흐름 중심으로 정리합니다.',
  },
  {
    step: '학습목표 2',
    title: '정상과 이상 관계를 구분한다',
    body: '상관관계가 있다는 말과 이상하다는 말은 다릅니다. 정상 변동, 구조적 연결, 비정상 쏠림을 구분하는 기준을 배웁니다.',
  },
  {
    step: '학습목표 3',
    title: 'Sankey 분석 도구를 만든다',
    body: '공정 간 불량, 수율, 재작업 흐름을 Sankey diagram으로 시각화하고 AI로 자동 생성하는 실습까지 연결합니다.',
  },
];

const lessonFlow = [
  { time: '5분', label: '공정 체인 이해' },
  { time: '8분', label: '정상/이상 기준' },
  { time: '10분', label: 'Sankey 해석' },
  { time: '12분', label: 'AI 제작 실습' },
  { time: '5분', label: '결론 정리' },
];

const planningReasons = [
  {
    title: '왜 이렇게 바꿨나',
    body: '이전 안은 원인분석 흐름은 강했지만, 히트맵이 선행 강의와 겹쳤고 3-4학년 취준생에게는 공정 간 연결 구조를 먼저 잡아주는 단계가 부족했습니다.',
  },
  {
    title: '대학생이 이해할 수 있나',
    body: '가능합니다. 다만 공정 용어를 깊게 파는 대신 “앞 공정 출력이 뒤 공정 입력에 어떤 영향을 주는가”라는 연결 개념으로 설명해야 이해가 훨씬 빠릅니다.',
  },
  {
    title: '07강의 새 역할',
    body: '07강은 개별 그래프 해석 강의가 아니라, 여러 공정을 하나의 흐름 데이터로 묶어 보는 첫 수업으로 재정의하는 것이 더 교육적입니다.',
  },
];

const processCards = [
  {
    title: '대표 공정 체인',
    body: '증착 → 노광 → 현상/식각 → 세정 → 검사처럼 이어지는 순서를 먼저 고정합니다. 전공 수준이 달라도 “무엇이 다음 공정으로 전달되는가”는 이해할 수 있습니다.',
  },
  {
    title: '연결 데이터',
    body: 'LOT, 장비 ID, recipe, 공정시간, 두께, 온도, 압력, 재작업 여부, 최종 수율 같은 컬럼이 공정 간 연결의 재료가 됩니다.',
  },
  {
    title: '07강의 질문',
    body: '“어느 공정이 나쁘다”가 아니라 “어떤 흐름에서 불량과 재작업이 많이 다음 공정으로 전파되는가”를 보는 것이 이번 강의의 핵심 질문입니다.',
  },
];

const normalAbnormalSignals = [
  {
    label: '정상 관계',
    title: '앞 공정 변동이 뒤 공정에서도 약하게 반복',
    body: '예를 들어 증착 두께 편차가 커지면 검사 불량도 조금 늘어날 수 있습니다. 다만 이 변화가 관리 한계 안에 있고 특정 장비나 LOT에만 쏠리지 않으면 정상 변동으로 봅니다.',
  },
  {
    label: '주의 관계',
    title: '특정 공정 조합에서만 손실이 커진다',
    body: '노광기 A와 식각기 C를 거친 LOT에서만 재작업 비율이 튀면, 단일 변수보다 공정 조합을 의심해야 합니다. 이때 Sankey가 조합별 흐름을 보여주기 좋습니다.',
  },
  {
    label: '이상 관계',
    title: '한 경로로 불량이 비정상 집중된다',
    body: '특정 recipe에서 시작한 LOT가 검사 단계에서 불량으로 대량 전환되면, 이는 정상 상관이 아니라 이상 전이입니다. 굵은 링크가 갑자기 생기면 바로 원인 후보가 됩니다.',
  },
];

const sankeyReasons = [
  '산점도는 두 변수 관계는 잘 보여주지만, 여러 공정을 거치며 상태가 어떻게 전이되는지는 한 번에 보여주기 어렵습니다.',
  'Sankey diagram은 공정 A에서 공정 B로, 정상 LOT가 재작업이나 불량으로 어떻게 흘러가는지 폭으로 보여줘서 초보자도 해석이 빠릅니다.',
  '특히 3-4학년 학생에게는 수치보다 흐름 그림이 더 직관적이므로, 취업 준비 단계에서 공정 이해와 데이터 이해를 같이 잡기 좋습니다.',
  '향후 보고서 자동화 강의와도 연결됩니다. Sankey 결과는 “어느 경로에서 손실이 컸는가”를 문장으로 바꾸기 쉽습니다.',
];

const buildSteps = [
  {
    title: '데이터 테이블 설계',
    body: '`from_process`, `to_process`, `count`, `status`, `lot_group` 컬럼으로 공정 간 이동 테이블을 만듭니다. 예: 증착→노광, 노광→식각, 식각→검사.',
  },
  {
    title: '정상/이상 분류 규칙',
    body: '기준 수율 이상이면 `normal`, 재작업 비중 증가면 `warning`, 특정 경로 불량 집중이면 `abnormal`로 태깅합니다. 이 규칙을 AI에게 먼저 설명해야 그림이 흔들리지 않습니다.',
  },
  {
    title: 'Sankey 생성 요청',
    body: 'AI에게 링크 두께는 `count`, 색상은 `status`, 라벨은 공정명과 불량률을 반영하도록 지시합니다. 동시에 핵심 경로 3개를 요약하게 만듭니다.',
  },
];

const promptGuides = [
  '디스플레이 공정 데이터를 기반으로 Sankey diagram을 생성해줘. 노드는 공정명, 링크는 LOT 이동 수량이야.',
  'status가 normal이면 파란색, warning이면 주황색, abnormal이면 빨간색으로 구분해줘.',
  '가장 손실이 큰 경로 3개와, 재작업이 많이 발생한 공정 조합 2개를 요약해줘.',
  '결과 설명은 대학 4학년 취준생도 이해할 수 있게 공정 흐름 중심으로 써줘.',
];

const reportTemplate = [
  '전체 공정 흐름 중 가장 큰 손실은 노광 이후 식각으로 넘어가는 구간에서 발생했으며, 이 경로의 abnormal 링크 비중이 가장 높았습니다.',
  '특히 증착 장비 B를 거친 LOT가 특정 노광 recipe로 연결될 때 재작업 비율이 증가해 단일 공정보다 공정 조합 이슈 가능성이 큽니다.',
  '따라서 1차 점검은 해당 경로의 recipe 조건과 장비 조합 검증에 두고, 2차로 같은 경로의 최근 3주 LOT를 비교 분석하는 것이 적절합니다.',
];

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-top">
          <div className="logo-group">
            <img
              src="/lecture07/logo.png"
              alt="LettUin Edu"
              className="header-logo"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="header-tag-container">
            <span className="header-tag">AI를 지휘하는 스마트한 엔지니어의 시작</span>
          </div>
        </div>

        <div className="hero-section">
          <h1>07강. 공정 간 상관관계를 Sankey Diagram으로 읽고 만드는 AI 분석 교안</h1>
          <p className="subtitle">
            히트맵 중복을 제거하고, 여러 공정 사이의 정상 흐름과 이상 전이를 구분하는 방법을 대학 3-4학년 취준생 눈높이에서 설명하도록 재설계한 문서형 교안
          </p>
          <div className="lesson-meta" aria-label="lesson summary">
            <span>40분</span>
            <span>실습 포함</span>
            <span>공정 체인 이해</span>
            <span>Sankey 분석</span>
            <span>이상 경로 식별</span>
          </div>
        </div>
      </header>

      <main>
        <section className="overview-section">
          <span className="section-label">01. 기획의도와 학습목표</span>
          <h2>07강은 “공정을 한 장의 흐름도로 이해하고, 어떤 경로에서 손실이 커지는지 찾는 수업”으로 잡는 것이 더 적절합니다</h2>
          <p className="section-intro">
            기존 안은 상관관계 분석 자체는 맞았지만, 히트맵이 선행 강의와 중복됐고 공정 간 관계를 처음 체계적으로 보는 대학생에게는 흐름 중심 설명이 더 필요했습니다.
            그래서 이번 07강은 개별 변수 그래프보다 공정 체인, 정상/이상 구분, Sankey 기반 경로 분석을 배우는 회차로 조정했습니다.
          </p>
          <div className="learning-goals-grid" aria-label="학습목표">
            {lessonGoals.map((item) => (
              <article className="learning-goal-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="lesson-timeline" aria-label="40분 강의 진행표">
            {lessonFlow.map((item) => (
              <div className="timeline-step" key={item.label}>
                <strong>{item.time}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">02. 왜 이렇게 구성했는가</span>
          <h2>취준생에게 중요한 것은 복잡한 통계보다 “공정들이 어떻게 연결되고 어디서 문제가 커지는가”를 보는 눈입니다</h2>
          <p className="section-intro">
            이 강의는 대학 3-4학년 수강생이 공정 데이터의 연결 구조를 빠르게 이해하고, 분석 결과를 실무 언어로 설명할 수 있도록 구성했습니다.
            처음에는 개별 변수 해석을 넓게 펼치기보다 공정 간 이동과 손실 흐름을 선명하게 보여주는 편이 학습 효과가 높고, Sankey는 그 출발점으로 적합합니다.
          </p>
          <div className="insight-grid">
            {planningReasons.map((item) => (
              <article className="insight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">03. 먼저 알아야 할 공정과 연결 데이터</span>
          <h2>상관관계를 보기 전에, 어떤 공정들이 앞뒤로 이어지고 어떤 데이터가 다음 단계로 전달되는지부터 알아야 합니다</h2>
          <p className="section-intro">
            이번 강의는 세부 공정 원리를 깊게 설명하는 시간이 아니라, 공정 흐름을 데이터 구조로 바꾸는 시간입니다.
            따라서 공정명, LOT, recipe, 장비, 수율, 재작업 여부가 어떻게 연결되는지부터 교안에 명확히 잡아주는 것이 중요합니다.
          </p>
          <div className="insight-grid">
            {processCards.map((item) => (
              <article className="insight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">04. 정상 관계와 이상 관계를 구분하는 법</span>
          <h2>상관관계가 있다고 다 이상은 아닙니다. 반복되는 정상 흐름과 비정상 전이를 구분해야 엔지니어다운 판단이 됩니다</h2>
          <p className="section-intro">
            수업에서는 “관리 범위 안의 자연스러운 연결”, “특정 조합에서만 커지는 주의 신호”, “한 경로로 불량이 몰리는 이상 전이”를 나눠서 설명합니다.
            이 구분이 있어야 Sankey diagram이 단순한 예쁜 그림이 아니라 판단 도구가 됩니다.
          </p>
          <div className="insight-grid">
            {normalAbnormalSignals.map((item) => (
              <article className="insight-card" key={item.title}>
                <span className="mini-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="comparison-panel">
            <div>
              <strong>정상 판단 기준</strong>
              <p>변동이 있더라도 여러 주차에서 비슷하게 반복되고, 특정 장비나 경로에 과도하게 몰리지 않으며 관리 기준 안에 있으면 정상 흐름으로 봅니다.</p>
            </div>
            <div>
              <strong>이상 판단 기준</strong>
              <p>특정 공정 조합에서만 손실이 급증하거나, 정상 LOT가 특정 링크에서 불량/재작업으로 대량 전환되면 이상 경로로 판단합니다.</p>
            </div>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">05. 왜 Sankey Diagram인가</span>
          <h2>이번 회차의 대표 도구는 여러 공정의 흐름과 손실을 동시에 보여주는 Sankey diagram입니다</h2>
          <p className="section-intro">
            산점도는 두 변수 해석에는 좋지만, 증착에서 시작한 LOT가 노광과 식각을 거쳐 어디서 재작업과 불량으로 바뀌는지 보여주기엔 제한이 있습니다.
            Sankey는 노드와 링크의 폭으로 이 전이 관계를 보여주므로, 취준생도 흐름 중심으로 문제를 이해할 수 있습니다.
          </p>
          <div className="checklist-panel">
            {sankeyReasons.map((item) => (
              <div className="check-item" key={item}>
                <span className="check-badge">POINT</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">06. 만드는 방법과 AI 실습</span>
          <h2>실습은 공정 간 이동 테이블을 만들고, 정상/이상 규칙을 정의한 뒤, AI로 Sankey 시각화를 자동 생성하는 순서로 설계합니다</h2>
          <p className="section-intro">
            이 회차의 산출물은 단순 시각화가 아니라 “공정 흐름 분석 툴 초안”입니다. 이후 강의에서 이 결과를 보고서 자동화나 대시보드로 확장하기 좋게 설계합니다.
          </p>
          <div className="practice-grid">
            {buildSteps.map((item, index) => (
              <article className="practice-card" key={item.title}>
                <span>{`STEP ${index + 1}`}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="placeholder-panel">
            <strong>AI 프롬프트 가이드</strong>
            {promptGuides.map((item, index) => (
              <p key={item}>{`${index + 1}. ${item}`}</p>
            ))}
          </div>
          <div className="report-panel">
            <strong>보고 초안 예시</strong>
            {reportTemplate.map((item, index) => (
              <p key={item}>{`${index + 1}. ${item}`}</p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
