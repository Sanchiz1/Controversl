import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Quizzes',
    description: (
      <>
        Generate engaging and thought-provoking quizzes using advanced AI models. 
      </>
    ),
  },
  {
    title: 'Quiz Themes',
    description: (
      <>
        Create quizzes based on specific themes or topics. Whether it's science, 
        history, or pop culture, Controversl has you covered.
      </>
    ),
  },
  {
    title: 'Detailed Explanations',
    description: (
      <>
        Every question comes with a concise explanation, helping learn something new with each answer.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
