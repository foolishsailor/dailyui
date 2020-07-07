import WebFont from "webfontloader";
import { useEffect } from "react";

/**
 * Loads and unloads fonts for each page to allow custom styling on each page
 * @param {array} fonts
 */
const useLoadFont = (fonts) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: fonts,
      },
    });

    return () => {
      const head = document.querySelector("head");
      const links = head.querySelectorAll("link");
      [...links].forEach((link) => {
        if (/fonts.googleapis.com/.test(link.href) && !/Roboto/.test(link.href))
          link.remove();
      });
    };
  }, [fonts]);
};

export default useLoadFont;
