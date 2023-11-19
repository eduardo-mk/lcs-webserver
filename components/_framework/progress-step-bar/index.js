function stepsGenerator(steps, currentStepIndex) {
  if (Array.isArray(steps)) {
    return steps.map((step, i) => {
      const isActive = i < Number(currentStepIndex) ? 'active' : '';
      return (
        <h4
          data-index-value={i}
          className={`progress-bar__item ${isActive}`}
          key={step.title}
        >
          &nbsp;
        </h4>
      );
    });
  }
}

function titleGenerator(steps, currentStepIndex) {
  if (Array.isArray(steps)) {
    return steps.map((step, i) => {
      const isActive = i === currentStepIndex ? 'active' : '';
      return (
        <h4
          data-index-value={i}
          className={`progress-bar__title ${isActive}`}
          key={i}
        >
          {step.title}
        </h4>
      );
    });
  }
}

function ProgressStepBar({ steps, currentStepIndex, onClick }) {
  return (
    <div onClick={onClick} className="progress-bar">
      <ul className="progress-bar__list">
        {stepsGenerator(steps, currentStepIndex)}
      </ul>
      <div className="progress-bar__titles">
        {titleGenerator(steps, currentStepIndex)}
      </div>
    </div>
  );
}

export default ProgressStepBar;
