const lessonGoals = [
  {
    step: '학습목표 1',
    title: '산점도로 원인 후보를 좁힌다',
    body: '수율과 공정 파라미터의 상관관계를 읽고, 어떤 변수가 우선 점검 대상인지 AI와 함께 빠르게 가설화합니다.',
  },
  {
    step: '학습목표 2',
    title: '히트맵으로 위치 패턴을 확인한다',
    body: '웨이퍼·패널 좌표에 불량 분포를 겹쳐서 설비, 치구, 공정 영역 중 어디가 문제인지 시각적으로 구분합니다.',
  },
  {
    step: '학습목표 3',
    title: '보고 가능한 결론으로 정리한다',
    body: '분석 그래프를 나열하는 수준을 넘어서, 조치 우선순위와 다음 실험안을 포함한 엔지니어형 보고 문장으로 마무리합니다.',
  },
];

const lessonFlow = [
  { time: '5분', label: '현장 문제 정의' },
  { time: '10분', label: '산점도 해석' },
  { time: '10분', label: '히트맵 해석' },
  { time: '10분', label: 'AI 실습' },
  { time: '5분', label: '보고서 정리' },
];

const scenarioCards = [
  {
    title: '상황',
    body: 'OLED 증착 라인에서 특정 주간부터 수율이 2.1%p 하락했고, 엔지니어는 온도·압력·라인 속도·영역별 불량 좌표를 동시에 확인해야 합니다.',
  },
  {
    title: '문제',
    body: '숫자 표만 보면 어느 변수가 핵심인지 흐려지고, 장비 로그와 좌표 CSV를 따로 보면 원인 후보가 계속 바뀝니다.',
  },
  {
    title: '07강 해법',
    body: '먼저 산점도로 변수와 수율의 관계를 압축하고, 이어서 히트맵으로 위치 패턴을 확인해 원인 후보를 한 단계 더 줄입니다.',
  },
];

const correlationSignals = [
  {
    label: '강한 음의 상관',
    title: '챔버 온도 상승 시 수율 하락',
    body: '우상향/우하향 방향성보다 중요한 것은 공정적으로 설명 가능한 관계인지입니다. AI에게 산점도 해석과 공정 지식을 동시에 요구해야 합니다.',
  },
  {
    label: '군집 분리',
    title: '야간조 데이터만 다른 분포',
    body: '하나의 직선으로 설명되지 않더라도 교대조, 설비 호기, 자재 LOT가 분리되어 보이면 숨은 범주 변수를 의심합니다.',
  },
  {
    label: '이상치 식별',
    title: '특정 날짜의 극단값만 튄다',
    body: '상관관계 전체보다 특정 배치의 튐 현상이 더 중요한 경우가 많습니다. AI에게 이상 배치의 공통점까지 요약시키는 것이 핵심입니다.',
  },
];

const heatmapChecks = [
  '한쪽 모서리 집중형이면 정렬, 클램프, 장력 이슈를 우선 의심한다.',
  '중앙부 고밀도면 열 분포 또는 증착 균일도 문제를 본다.',
  '대각선/줄무늬 패턴이면 스캔 방향, 노즐, 이송 흔들림과 연결해 본다.',
  '랜덤 산포형이면 단일 설비보다 자재 편차나 측정 노이즈 가능성을 같이 검토한다.',
];

const practiceSteps = [
  {
    title: '입력 데이터 준비',
    body: '수율, 온도, 압력, takt time, defect_x, defect_y, lot, shift 컬럼을 가진 CSV를 AI에 설명하고 목적을 한 문장으로 선언합니다.',
  },
  {
    title: 'AI 작업지시',
    body: '산점도 2개, 히트맵 1개, 핵심 인사이트 3개, 추가 확인할 변수 2개를 출력하도록 명확히 지시합니다.',
  },
  {
    title: '검증과 보고',
    body: '그래프 모양이 그럴듯한지보다, 현장적으로 말이 되는 해석인지, 조치 우선순위가 있는지, 다음 실험안이 있는지를 확인합니다.',
  },
];

const reportTemplate = [
  '수율 저하와 가장 강하게 연결된 변수는 챔버 온도였으며, 온도 상승 구간에서 불량률이 집중적으로 증가했습니다.',
  '히트맵상 불량은 패널 우상단에 반복 집중되어 설비 전영역 공통 문제보다는 위치 의존형 원인을 시사합니다.',
  '1차 조치로 해당 영역 관련 정렬/열 분포를 점검하고, 2차로 야간조 운영 조건과 LOT 편차를 비교 검증하는 것이 합리적입니다.',
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
          <h1>07강. 산점도와 히트맵으로 불량 원인을 좁히는 AI 분석 교안</h1>
          <p className="subtitle">
            `lecture_assist001` 커리큘럼의 07강 흐름을 반영해, 상관관계 분석과 위치 시각화를 하나의 원인분석 서사로 묶은 문서형 강의교안
          </p>
          <div className="lesson-meta" aria-label="lesson summary">
            <span>40분</span>
            <span>실습 포함</span>
            <span>산점도 해석</span>
            <span>히트맵 분석</span>
            <span>보고서 자동화</span>
          </div>
        </div>
      </header>

      <main>
        <section className="overview-section">
          <span className="section-label">01. 오프닝 및 학습목표</span>
          <h2>07강의 핵심 기획은 “숫자에서 원인 후보를 좁히고, 좌표에서 위치 패턴을 확인해, 바로 보고 가능한 결론으로 압축하는 수업”입니다</h2>
          <p className="section-intro">
            참고 커리큘럼의 07강은 상관관계 분석, 실무 커리큘럼의 07강은 불량 위치 히트맵이어서 둘을 따로 떼기보다 하나의 현업 분석 흐름으로 묶는 편이 강합니다.
            수강생은 이번 강의에서 그래프를 예쁘게 그리는 법이 아니라, 어떤 그래프를 어떤 순서로 봐야 원인분석 속도가 빨라지는지 익히게 됩니다.
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
          <span className="section-label">02. 왜 이 수업이 필요한가</span>
          <h2>현장에서는 데이터가 없는 것이 아니라, 너무 많아서 원인 후보를 빨리 못 좁히는 것이 더 큰 문제입니다</h2>
          <p className="section-intro">
            공정 엔지니어는 이미 MES, 설비 로그, 검사 좌표를 갖고 있습니다. 다만 표와 로그를 각각 보면 판단이 늦어지므로,
            이번 수업은 산점도와 히트맵을 AI에게 맡겨 짧은 시간 안에 “무엇부터 의심할지”를 정리하는 흐름에 집중합니다.
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
          <span className="section-label">03. 산점도로 변수 관계 읽기</span>
          <h2>첫 번째 질문은 “어디가 고장인가”가 아니라 “무슨 변수가 수율과 같이 움직이는가”입니다</h2>
          <p className="section-intro">
            산점도는 단순한 상관계수 계산보다 설득력이 있습니다. 점의 방향, 군집, 이상치를 같이 보면서 AI에게 공정적으로 설명 가능한 가설을 제안하게 하면,
            수강생은 숫자를 해석하는 부담보다 의사결정의 기준을 익히는 데 집중할 수 있습니다.
          </p>
          <div className="insight-grid">
            {correlationSignals.map((item) => (
              <article className="insight-card" key={item.title}>
                <span className="mini-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="comparison-panel">
            <div>
              <strong>좋은 질문</strong>
              <p>“수율과 온도 산점도에서 이상치 배치가 특정 shift 또는 lot와 연결되는지 설명해줘.”</p>
            </div>
            <div>
              <strong>약한 질문</strong>
              <p>“그래프 그려줘.”처럼 시각화만 요구하면 현장 판단 기준이 빠져서 보고용 그림만 남습니다.</p>
            </div>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">04. 히트맵으로 위치 패턴 확인</span>
          <h2>변수 관계를 좁힌 뒤에는 좌표 기반 히트맵으로 “정말 특정 영역 문제인가”를 검증합니다</h2>
          <p className="section-intro">
            같은 불량률 상승이라도 모서리 집중형인지 중앙 확산형인지에 따라 해석은 완전히 달라집니다. 이 구간에서 수강생은 좌표 데이터가 보고서 문장으로 번역되는 과정을 배우게 됩니다.
          </p>
          <div className="checklist-panel">
            {heatmapChecks.map((item) => (
              <div className="check-item" key={item}>
                <span className="check-badge">CHECK</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="placeholder-panel">
            <strong>강의 포인트</strong>
            <p>이 섹션에서는 실제 히트맵 이미지를 넣지 않아도 교안이 작동해야 합니다. 수업 중에는 샘플 CSV를 기반으로 AI가 생성한 히트맵을 보여주고, 교안에는 해석 기준을 남기는 방식이 가장 실용적입니다.</p>
          </div>
        </section>

        <section className="teaching-section">
          <span className="section-label">05. AI 실습과 보고서 마무리</span>
          <h2>실습의 완성 기준은 그래프 출력이 아니라, 조치 우선순위가 적힌 3문장 보고 초안입니다</h2>
          <p className="section-intro">
            07강은 이후 보고서 자동화 강의로 연결되는 분기점이므로, 결과물을 반드시 “실무 문장”으로 끝내는 설계가 좋습니다.
            수강생이 이 강의에서 바로 가져갈 수 있는 산출물은 프롬프트 1개, 그래프 3개, 보고 초안 1개입니다.
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
