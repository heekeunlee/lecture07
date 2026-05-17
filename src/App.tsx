const lessonGoals = [
  {
    step: '학습목표 1',
    title: '공정 데이터를 분석 질문으로 바꾸기',
    body: 'LOT, 공정명, 장비, recipe, 측정값, 수율 컬럼을 보고 어떤 변수 관계를 먼저 확인할지 정리합니다.',
  },
  {
    step: '학습목표 2',
    title: '산점도로 정상과 이상 구분하기',
    body: '점의 방향, 밀집도, 이상치, 군집 분리를 읽어 공정적으로 설명 가능한 상관관계인지 판단합니다.',
  },
  {
    step: '학습목표 3',
    title: 'AI로 분석 화면과 보고 초안 만들기',
    body: '원본 표를 산점도, 판단표, 엔지니어 보고 문장으로 바꾸는 작업지시서를 작성합니다.',
  },
];

const lessonFlow = [
  { time: '5분', label: '문제 상황 제시' },
  { time: '7분', label: '공정·데이터 구조' },
  { time: '10분', label: '산점도 해석' },
  { time: '12분', label: 'AI 제작 실습' },
  { time: '6분', label: '보고서 정리' },
];

const scenarioCards = [
  {
    title: '상황',
    body: 'Photo 공정 이후 특정 LOT의 수율이 하락했습니다. 엔지니어는 PR 점도, 노광 dose, 현상 시간, 검사 불량률 중 어떤 변수가 먼저 의심되는지 빠르게 확인해야 합니다.',
  },
  {
    title: '핵심 질문',
    body: '“어떤 공정 변수가 수율 또는 불량률과 함께 움직이는가?”를 먼저 묻습니다. 산점도는 이 질문에 가장 빠르게 답하는 기본 시각화입니다.',
  },
  {
    title: '최종 산출물',
    body: '수강생은 원본 데이터 표, 산점도 2개, 정상/이상 판단표, AI 보고 초안까지 하나의 미니 분석 리포트로 구성합니다.',
  },
];

const processFlow = [
  { label: 'Coating', title: 'PR 도포', data: '점도, 회전속도, 두께' },
  { label: 'Exposure', title: '노광', data: 'dose, focus, 장비 ID' },
  { label: 'Develop', title: '현상', data: '시간, 온도, CD' },
  { label: 'Etch', title: '식각', data: '압력, RF power, 결함률' },
  { label: 'Inspection', title: '검사', data: '수율, 불량 유형, 판정' },
];

const sampleRows = [
  ['L-041', 'Photo', 'Coater-1', '14.2', '92', '94.8', 'OK'],
  ['L-042', 'Photo', 'Coater-1', '15.6', '94', '93.1', 'Watch'],
  ['L-043', 'Photo', 'Coater-2', '17.8', '96', '87.8', 'Check'],
  ['L-044', 'Photo', 'Coater-2', '18.4', '97', '86.9', 'Check'],
  ['L-045', 'Etch', 'Etcher-C', '16.1', '104', '91.2', 'Watch'],
  ['L-046', 'Etch', 'Etcher-C', '15.2', '107', '89.5', 'Check'],
];

const scatterSignals = [
  {
    label: '정상 변동',
    title: '점들이 넓게 퍼지지만 특정 방향이 약함',
    body: '수율이 작은 범위 안에서 흔들리고 특정 변수와 뚜렷한 방향성이 없다면 공정 노이즈나 자연 변동일 수 있습니다.',
  },
  {
    label: '강한 상관',
    title: '점들이 한 방향으로 기울어짐',
    body: 'PR 점도가 높아질수록 수율이 낮아지는 패턴처럼 방향성이 보이면 해당 변수를 우선 확인 후보로 둡니다.',
  },
  {
    label: '이상 군집',
    title: '특정 장비나 LOT만 따로 모임',
    body: '전체 추세보다 특정 장비, recipe, shift 데이터가 따로 분리되면 단일 변수보다 조합 조건을 확인해야 합니다.',
  },
];

const decisionRows = [
  ['점의 방향', '우상향, 우하향, 방향 없음', '변수가 결과와 함께 움직이는지 확인'],
  ['점의 밀집도', '넓게 퍼짐 또는 좁게 몰림', '공정 변동이 안정적인지 확인'],
  ['이상치', '혼자 튄 점 또는 작은 묶음', '특정 LOT, 장비, recipe 이력 확인'],
  ['군집 분리', '색상별로 다른 영역 형성', '교대조, 장비, 자재 LOT 같은 숨은 조건 확인'],
];

const visualExamples = [
  {
    title: '산점도 대시보드 예시',
    image: '/lecture07/images/scatter-correlation-dashboard.png',
    caption: 'PR 점도와 수율, 식각 압력과 불량률처럼 서로 다른 공정 변수를 한 화면에서 비교합니다.',
  },
  {
    title: 'AI 분석 리포트 목업',
    image: '/lecture07/images/ai-correlation-report-mockup.png',
    caption: '원본 표, 산점도, 이상 LOT, 다음 확인 항목을 하나의 보고 화면으로 묶은 예시입니다.',
  },
];

const practiceSteps = [
  {
    title: '원본 표를 설명한다',
    body: 'AI에게 컬럼 의미, 단위, 정상 기준, 확인하려는 결과값을 먼저 알려줍니다. 예: PR 점도 단위는 cp, 목표 수율은 93% 이상입니다.',
  },
  {
    title: '산점도 요구사항을 지정한다',
    body: 'x축, y축, 색상 기준, 이상치 강조 기준을 명확히 말합니다. 예: x축은 PR 점도, y축은 수율, 색상은 장비 ID입니다.',
  },
  {
    title: '해석과 보고 문장을 요구한다',
    body: '그래프만 만들지 말고 관찰 패턴, 원인 후보, 추가 확인 데이터, 보고용 3문장을 함께 출력하도록 지시합니다.',
  },
];

const promptGuides = [
  'Photo 공정 데이터에서 PR 점도와 수율의 상관관계를 산점도로 시각화해줘.',
  'x축은 pr_viscosity_cp, y축은 yield_percent, 색상은 tool_id로 구분하고 수율 90% 미만 LOT은 빨간색으로 강조해줘.',
  '점의 방향, 이상치, 장비별 군집 차이를 설명하고 원인 후보 3개와 추가 확인 항목 2개를 정리해줘.',
  '결과는 대학 3-4학년 수강생도 이해할 수 있게 표, 그래프 설명, 보고 초안 순서로 구성해줘.',
];

const reportTemplate = [
  'PR 점도 17cp 이상 구간에서 수율 하락 LOT가 집중되어 점도 조건이 우선 확인 변수로 보입니다.',
  '이상 LOT는 Coater-2 장비에서 주로 발생했으므로 점도 자체와 장비 조건을 분리해 비교해야 합니다.',
  '다음 분석은 같은 recipe의 최근 3주 LOT, 장비 PM 이력, 노광 dose 변동을 함께 연결해 확인하는 것이 적절합니다.',
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
          <h1>Ch.7 공정 간 상관관계 분석 및 산점도 시각화</h1>
          <p className="subtitle">
            원본 공정 데이터를 표, 공정 흐름도, 산점도, 판단표, AI 분석 리포트로 바꾸며 상관관계를 읽는 방법을 익히는 문서형 교안
          </p>
          <div className="lesson-meta" aria-label="lesson summary">
            <span>40분</span>
            <span>실습 포함</span>
            <span>산점도 해석</span>
            <span>공정 변수 비교</span>
            <span>AI 보고 초안</span>
          </div>
        </div>
      </header>

      <main>
        <section className="overview-section">
          <span className="section-label">01. 오프닝 및 학습목표</span>
          <h2>07강은 “공정 변수가 결과값과 어떻게 함께 움직이는지”를 산점도로 읽고 설명하는 수업입니다</h2>
          <p className="section-intro">
            수강생이 숫자 표만 보고 막히지 않도록, 같은 데이터를 여러 시각 자료로 변환합니다.
            공정 흐름으로 맥락을 잡고, 산점도로 변수 관계를 확인한 뒤, 정상/이상 판단표와 보고 문장으로 마무리합니다.
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
          <span className="section-label">02. 오늘의 분석 시나리오</span>
          <h2>Photo 공정 수율 하락 사례를 기준으로, 표에서 산점도와 보고 초안까지 이어지는 흐름을 보여줍니다</h2>
          <p className="section-intro">
            공정 상관관계 분석은 어려운 통계 용어에서 시작하지 않습니다. 먼저 어떤 공정 변수와 결과값을 비교할지 정하고,
            그 관계가 정상 변동인지 이상 신호인지 눈으로 확인하는 과정부터 시작합니다.
          </p>
          <div className="insight-grid">
            {scenarioCards.map((item) => (
              <article className="insight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">03. 공정 흐름과 원본 데이터</span>
          <h2>산점도를 그리기 전에는 공정 순서와 컬럼 의미를 먼저 연결해야 합니다</h2>
          <p className="section-intro">
            아래 흐름도는 Photo 전후 공정을 단순화한 예시입니다. 원본 표의 숫자가 어느 공정에서 만들어졌고,
            어떤 결과값과 비교되어야 하는지 이해하면 산점도 해석이 훨씬 쉬워집니다.
          </p>
          <div className="process-flow" aria-label="Photo 공정 흐름">
            {processFlow.map((item, index) => (
              <div className="process-node" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.data}</p>
                {index < processFlow.length - 1 && <b aria-hidden="true">→</b>}
              </div>
            ))}
          </div>
          <div className="table-wrap" aria-label="공정 데이터 샘플">
            <table>
              <thead>
                <tr>
                  <th>Lot</th>
                  <th>Process</th>
                  <th>Tool</th>
                  <th>PR viscosity</th>
                  <th>Dose</th>
                  <th>Yield</th>
                  <th>Judge</th>
                </tr>
              </thead>
              <tbody>
                {sampleRows.map((row) => (
                  <tr key={row[0]} className={row[6].toLowerCase()}>
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="viz-explain">
            <strong>쉬운 해설</strong>
            <p>이 표에서 산점도의 x축 후보는 PR 점도나 dose이고, y축 후보는 수율입니다. 색상은 장비 ID로 나누면 장비별 군집 차이를 볼 수 있습니다.</p>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">04. 산점도 예제로 관계 읽기</span>
          <h2>산점도는 점의 방향, 이상치, 색상별 군집을 보면서 원인 후보를 좁히는 도구입니다</h2>
          <p className="section-intro">
            아래 이미지는 Python으로 생성한 강의용 예시입니다. 왼쪽은 PR 점도와 수율의 음의 상관관계,
            오른쪽은 식각 압력과 불량률의 증가 패턴을 보여줍니다.
          </p>
          <div className="visual-grid">
            {visualExamples.map((item) => (
              <figure className="visual-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">05. 정상/이상 관계 구분</span>
          <h2>상관관계가 있다는 말과 문제가 있다는 말은 다릅니다. 그래프 패턴을 기준으로 판단을 나눠야 합니다</h2>
          <p className="section-intro">
            수업에서는 복잡한 통계식보다 먼저 눈으로 읽는 기준을 잡습니다. 점들이 어떤 방향으로 움직이는지,
            특정 장비나 LOT만 따로 떨어지는지, 이상치가 반복되는지를 차례로 확인합니다.
          </p>
          <div className="insight-grid">
            {scatterSignals.map((item) => (
              <article className="insight-card" key={item.title}>
                <span className="mini-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="table-wrap compact-table" aria-label="산점도 판단 기준">
            <table>
              <thead>
                <tr>
                  <th>확인 항목</th>
                  <th>그래프에서 보는 것</th>
                  <th>엔지니어 판단</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">06. AI 실습과 보고서 마무리</span>
          <h2>실습은 원본 표를 설명하고, 산점도 조건을 지정하고, AI에게 해석 문장까지 요구하는 순서로 진행합니다</h2>
          <p className="section-intro">
            이 회차의 결과물은 그래프 이미지 한 장이 아니라, 데이터 표에서 시작해 원인 후보와 다음 확인 항목까지 담긴 짧은 분석 리포트입니다.
          </p>
          <div className="practice-grid">
            {practiceSteps.map((item, index) => (
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
