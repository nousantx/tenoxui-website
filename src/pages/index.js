import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Styler from "../components/Styler";

function HomepageHeader() {
  Styler();
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero h-100vh pt-0", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Tenox<span className="tc-[ifm-color-primary]">UI</span> Docs
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/start"
          >
            Start Learning ✨
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  Styler();
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Homepage | ${siteConfig.title}`}
      description="Welcome to TenoxUI Documentation Page"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
