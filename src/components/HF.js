import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import "../css/google-icons.css";
import Styler from "./Styler.js"

const FeatureList = [
  {
    title: "Fast and Lightweight",
    icons: "bolt",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Utility-First",
    icons: "sort",
    description: (
      <>
        Seamlessly apply pre-defined utility classes to elements by simply
        invoking their associated classes, fostering a utility-first approach to
        styling.
      </>
    ),
  },
  {
    title: "No CSS",
    icons: "css",
    description: (
      <>
        No more generated CSS files. Elevate your design journey as styles are
        seamlessly applied directly to each element, unleashing simplicity and
        efficiency.
      </>
    ),
  },
  {
    title: "Tailored To Your Taste",
    icons: "draw",
    description: (
      <>
        Easily customize your unique style with user-friendly configuration
        options, providing a personalized and bespoke design experience.
      </>
    ),
  },
];

function Feature({ icons, title, description }) {
  Styler();
  return (
    <div class="fx-250px br-8px p-1rem">
      <span class="ms-line tc-[primary-500] fs-1.4rem fx-ctr bg-[neutral-800] box-2rem br-4px fw-400">
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
