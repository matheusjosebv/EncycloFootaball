import { useState, useEffect } from "react";

function useLayout() {
  const [mobile, setMobile] = useState(false);
  const [tabletSm, setTabletSm] = useState(false);
  const [tabletLg, setTabletLg] = useState(false);
  const [desktopSm, setDesktopSm] = useState(false);
  const [desktopMd, setDesktopMd] = useState(false);

  useEffect(() => {
    const update = () => {
      setMobile(window.matchMedia("(max-width: 549px)").matches);
      setTabletSm(window.matchMedia("(mix-width: 550px) and (max-width: 749px)").matches);
      setTabletLg(window.matchMedia("(mix-width: 750px) and (max-width: 899px)").matches);
      setDesktopSm(window.matchMedia("(min-width: 900px) and (max-width: 1419px)").matches);
      setDesktopMd(window.matchMedia("(min-width: 1420px)").matches);
    };
    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return { mobile, tabletSm, tabletLg, desktopSm, desktopMd };
}

export default useLayout;
