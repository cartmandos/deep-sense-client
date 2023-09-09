/**
 * @property {string[]} labels
 * @property {number} step
 */
export const ProgressBar = ({ labels, step }) => {
  return (
    <ul className="steps steps-vertical sticky top-1/3">
      {labels.map((label, index) => (
        <li
          className={`step ${
            index < step ? 'step-success' : index === step ? 'step-primary' : 'step-neutral'
          }`}
          key={label}
          data-content={`${index < step ? '✓' : index + 1}`}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};
