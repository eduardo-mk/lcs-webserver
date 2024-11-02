import { CheckIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ProgressStepBar({ initialSteps, currentStepIndex, onClick }) {
  const [steps, setSteps] = useState(() => {
    return initialSteps?.map((step, index) => {
      if (currentStepIndex === null) {
        step.status = 'complete';
        return step;
      }
      if (index < currentStepIndex) step.status = 'complete';
      if (index === currentStepIndex) step.status = 'current';
      if (index > currentStepIndex) step.status = 'upcoming';

      return step;
    });
  });

  useEffect(() => {
    setSteps(
      initialSteps?.map((step: { status: string }, index: number) => {
        if (currentStepIndex === null) {
          step.status = 'complete';
          return step;
        }
        if (index < currentStepIndex) step.status = 'complete';
        if (index === currentStepIndex) step.status = 'current';
        if (index > currentStepIndex) step.status = 'upcoming';

        return step;
      })
    );
  }, [currentStepIndex, initialSteps]);
  return (
    <nav
      className="flex flex-col flex-nowrap justify-center align-middle"
      aria-label="Progress"
    >
      <ol role="list" className="m-auto flex items-center justify-center">
        {steps.map(
          (
            step: { status: string; name: string; href: string },
            stepIdx: number
          ) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                'relative'
              )}
            >
              {step.status === 'complete' ? (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-orange-600" />
                  </div>
                  <Link
                    onClick={onClick}
                    href={step.href}
                    data-step-href={step.href}
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 hover:bg-orange-900"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                    />
                    <span className="sr-only">{step.name}</span>
                  </Link>
                </>
              ) : step.status === 'current' ? (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-neutral-200" />
                  </div>
                  <Link
                    onClick={onClick}
                    href={step.href}
                    data-step-href={step.href}
                    aria-current="step"
                    className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-600 bg-white"
                  >
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-orange-600"
                    />
                    <span className="sr-only">{step.name}</span>
                  </Link>
                </>
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="h-0.5 w-full bg-neutral-200" />
                  </div>
                  <Link
                    onClick={onClick}
                    href={step.href}
                    data-step-href={step.href}
                    className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-300 bg-white hover:border-neutral-400"
                  >
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-neutral-200"
                    />
                    <span className="sr-only">{step.name}</span>
                  </Link>
                </>
              )}
            </li>
          )
        )}
      </ol>
      <h2 className="mt-3 text-center text-md font-bold opacity-100 transition-opacity duration-500 delay-300">
        {currentStepIndex === null
          ? 'Completado'
          : steps[currentStepIndex].name}
      </h2>
    </nav>
  );
}

export default ProgressStepBar;
