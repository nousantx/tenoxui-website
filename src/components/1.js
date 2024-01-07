import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import "../css/google-icons.css";
import tenoxui, { makeStyles, moreColor } from "./tui/tui.js";

const Styler = () => {
  useEffect(() => {
    makeStyles({


".fx-ctr, .fx-center":"display-flex flex-parent-center",
".w-full,.w-mx":"w-100%",
".h-full,.h-mx":"h-100%",


      ".features": "display-flex ai-center ph-2rem w-100%",
    });
    moreColor();
    tenoxui();
  }, []);
};

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
        Seamlessly apply pre-defined utility classes to elements by simply invoking their associated classes, fostering a utility-first approach to styling.
      </>
    ),
  },
  {
    title: "No CSS",
    icons: "css",
    description: (
      <>
        No more generated CSS files. Elevate your design journey as styles are seamlessly applied directly to each element, unleashing simplicity and efficiency.
      </>
    ),
  },
  {
    title: "Tailored To Your Taste",
    icons: "draw",
    description: (
      <>
        Easily customize your unique style with user-friendly configuration options, providing a personalized and bespoke design experience.
      </>
    ),
  },
];

function Feature({ icons, title, description }) {
  Styler();
  return (
    <div className={clsx("col col--4")}>
      <div>
        <span class="ms-line tc-[primary-500] fs-3rem fw-400">{icons}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  Styler();
  return (
    <section className="features">
      <div className="container">
        <div className="row gap-10rem">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
