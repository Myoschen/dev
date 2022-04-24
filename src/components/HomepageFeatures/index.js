import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docs',
    link: '/docs/about',
    description: (
      <>
        紀錄自己學習過的套件、框架等等的。
      </>
    ),
  },
  {
    title: 'Blog',
    link: '/blog/',
    description: (
      <>
        紀錄生活中的大小事。
      </>
    ),
  },
];

function Feature({title, link, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <Link
            className="button button--secondary button--lg"
            to={link}>
            點擊前往
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
