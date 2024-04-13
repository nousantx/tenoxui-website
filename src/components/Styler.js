/*!
 * Using TenoxUI v0.4.24 ESM
 */

import React, { useLayoutEffect } from "react";
import tenoxui, { addType, makeStyles } from "./tui.esm.js";

const Styler = () => {
  useLayoutEffect(() => {
    addType("fxw", ["flexWrap"]);

    makeStyles({
      ".fx-ctr, .fx-center": "display-flex flex-parent-center",
      ".absolute": "post-absolute",
      ".relative": "post-relative",
      ".w-full,.w-mx": "w-100%",
      ".h-full,.h-mx": "h-100%",
      ".fx-wrap,.flex-wrap": "fxw-wrap",
      ".ai-full": "ai-stretch",
      ".features": "display-flex ai-center ph-2rem w-100%",
    });
    tenoxui();
  }, []);
};

export default Styler;
