import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import classes from './HomepageHeader.module.scss';
import TwitterFollow from './TwitterFollow';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', classes.heroBanner)}>
      <div className={classes.content}>
        <h1 className="hero__title">React Native Render HTML</h1>
        <p className={clsx('hero__subtitle', classes.subtitle)}>
          {siteConfig.tagline}
        </p>
        <div
          className={clsx(
            classes.buttons,
            'margin-top--xl',
            'margin-bottom--xl'
          )}>
          <Link
            className={clsx(
              'button button--outline button--primary button--lg',
              classes.buttonGetStarted
            )}
            to="/docs/intro">
            Get Started!
          </Link>
        </div>
      </div>
      <div className={classes.stats}>
        <a
          className={clsx(classes.badge)}
          rel="noopener"
          href="https://openbase.com/js/react-native-render-html?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge">
          <img
            alt="Rate this package on Openbase"
            src="https://badges.openbase.com/js/rating/react-native-render-html.svg"
          />
        </a>
        <TwitterFollow className={clsx(classes.badge)} />
        <iframe
          src="https://ghbtns.com/github-btn.html?user=meliorence&repo=react-native-render-html&type=star&count=true&size=small"
          frameBorder="0"
          scrolling="0"
          width="100"
          height="20"
          title="GitHub"
        />
      </div>
    </header>
  );
}
