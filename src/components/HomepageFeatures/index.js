import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import "../../css/google-icons.css";
import Styler from "../Styler.js";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate>Fast and Lightweight</Translate>,
    icons: "bolt",
    description: (
      <Translate>
        The majority of classes are managed through JavaScript, ensuring a
        lightweight and fast user experience.
      </Translate>
    ),
  },
  {
    title: <Translate>Utility-First</Translate>,
    icons: "sort",
    description: (
      <Translate>
        Seamlessly apply pre-defined utility classes to elements by simply
        invoking their associated classes, fostering a utility-first approach to
        styling.
      </Translate>
    ),
  },
  {
    title: <Translate>No CSS</Translate>,
    icons: "css",
    description: (
      <Translate>
        No more generated CSS files. Elevate your design journey as styles are
        seamlessly applied directly to each element, unleashing simplicity and
        efficiency.
      </Translate>
    ),
  },
  {
    title: <Translate>Tailored To Your Taste</Translate>,
    icons: "draw",
    description: (
      <Translate>
        Easily customize your unique style with user-friendly configuration
        options, providing a personalized and bespoke design experience.
      </Translate>
    ),
  },
];

function Feature({ icons, title, description }) {
  Styler();
  return (
    <div class="fx-250px br-8px p-1rem">
      <span class="ms-line tc-[ifm-color-primary] fs-1.4rem fx-ctr bg-[feature-color] box-2rem br-4px fw-400">
        {icons}
      </span>
      <div>
        <header>
          <h2 class="fs-20px fw-700 mt-1rem mb-3px">{title}</h2>
          <p class="lh-1.4 opa-0.8">{description}</p>
        </header>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  Styler();
  return (
    <section className="features ph-0">
      <div className="container p-2rem fx-ctr">
        <div className="row w-full flex-wrap ai-full gap-1rem jc-[sb]">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
