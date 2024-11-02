import React from 'react';

interface InputInstructionProps {
  step: string;
  content: string;
}

const StepDescription: React.FC<InputInstructionProps> = ({
  step,
  content,
}) => {
  return (
    <>
      <span className={`user-info__step`}>{step}</span>
      <p className="small-text">{content}</p>
    </>
  );
};

export default StepDescription;
