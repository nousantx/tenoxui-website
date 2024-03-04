import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Styler from "../components/Styler";
import "../css/tenox-icon.css";
import Translate, {translate} from "@docusaurus/Translate"

function HomepageHeader() {
  Styler();
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero h-100vh pt-0", styles.heroBanner)}>
      <div className="container fx-ctr fd-column">
        <div className="box-10rem relative fx-ctr">
          <i className="txi ti-vtx_part_1 fs-10rem absolute"></i>
          <i className="txi ti-vtx_part_2 fs-10rem tc-[ifm-color-primary] absolute"></i>
        </div>
        <h1 className="hero__title">
          <Translate>TenoxUI Docs</Translate>
        </h1>
        <p className="hero__subtitle"><Translate>Fast and Lightweight CSS Framework.</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/start"
          >
            <Translate>Start Learning ✨</Translate>
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
      title="TenoxUI Docs"
      description="Welcome to TenoxUI Documentation Page"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
