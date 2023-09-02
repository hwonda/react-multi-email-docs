import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Light',
    Svg: require('@site/static/img/feather.svg').default,
    description: (
      <>
      This library has no dependencies. Everything is included in a very small size.
      </>
    ),
  },
  {
    title: 'Simple',
    Svg: require('@site/static/img/bulb.svg').default,
    description: (
      <>
        React-multi-email is very simple and convenient to customize.
        Try applying it to your code easily.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/rocket.svg').default,
    description: (
      <>
        It offers a variety of features, including Focus, onBlur, 
        as well as the basic function of multiple email input.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
